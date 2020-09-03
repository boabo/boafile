/*
 * SearchF.js
 * @copyright Disydes 2020
 * @author Favio Figueroa
 */

import React, { useRef, useState } from 'react';

import {
  Box,
  Card,
} from '@material-ui/core';

import _ from 'lodash';

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SvgIcon from '@material-ui/core/SvgIcon';
import Container from '@material-ui/core/Container';

import ComponentMapping from '../../_pxp/components/ComponentMapping/ComponentMapping';
import AutocompletePxp from '../../_pxp/components/Form/AutocompletePxp';
import InitValues from '../../_pxp/hooks/InitValues';
import { defaultValuesAutoComplete } from '../../_pxp/components/Form/defaultValues';

import CardFuncionario from '../components/CardFuncionario';
import ManagerFile from '../../_parameters/components/ManagerFile/ManagerFile';
import DialogPxp from '../../_pxp/components/DialogPxp';
import Header from '../Sections/Header';
import SkeletonFuncionario from '../components/SkeletonFuncionario';


const SearchF = ({ ...rest }) => {

  const [openDialog, setOpenDialog] = useState(false);
  const [managerFile, setIdManagerFile] = useState({
    table: 'orga.tfuncionario',
    funcionarioDesc: '', // this field is not part of the manager file only for showing the name the funcionario in the dialog
  });

  const openManagerFile = ({ idTable, funcionarioDesc }) => {
    setIdManagerFile((prev) => ({
      ...prev,
      idTable,
      funcionarioDesc,
    }));
    setOpenDialog(true);
  };

  const refFuncionario = useRef();
  const config = {
    name: 'Grid Funcionario',
    idStore: 'id_persona',
    grid: { xs: 12, sm: 6, md: 4 },
    getDataTable: {
      url: 'organigrama/Funcionario/listarFuncionario',
      params: {
        start: '0',
        limit: '10',
        sort: 'PERSON.nombre_completo2',
        dir: 'ASC',
        estado_func: 'activo',
        bottom_filter_fields:
          'PERSON.nombre_completo2,tca.nombre,tof.nombre,tlo.nombre,FUNCIO.codigo,FUNCIO.id_biometrico,email_empresa,codigo_rc_iva,PERSON.ci,carnet_discapacitado,person.correo',
        boa_file: 'Y',
      },
      load: true,
    },
    renderComponent: (row) => (
      <CardFuncionario row={row} openManagerFile={openManagerFile} />
    ),
    renderSkeleton: () => <SkeletonFuncionario />,
  };

  const autoCompleteConfig = InitValues(
    _.merge({}, defaultValuesAutoComplete, {
      type: 'AutoComplete',
      label: 'Gerencias',
      initialValue: null,
      isSearchable: false,
      memoDisabled: true,
      variant: 'outlined',
      InputProps: {},
      helperText: 'Gerencias disponibles para tu usuario',
      store: {
        url: 'organigrama/PermisosGerencia/listarGerenciasPermitidas',
        params: {
          start: '0',
          limit: '50',
          sort: 'id_uo',
          dir: 'ASC',
        },
        parFilters: 'uo.descripcion#uo.codigo',
        idDD: 'id_uo',
        descDD: 'nombre_unidad',
        minChars: 2,
      },

    }),
  );

  const resetFuncionarios = () => {
    refFuncionario.current.useJsonStoreRes.setData((prevData) => {
      return {
        ...prevData,
        datos: [],
      };
    });
  };
  const handleChangeGerencia = ({ event, dataValue }) => {
    // eslint-disable-next-line no-unused-expressions
    event && event.preventDefault(); // in some inputs we dont have event like date pickers
    const stateField = autoCompleteConfig;
    const { setValue } = stateField;
    setValue(dataValue);

    resetFuncionarios();
    refFuncionario.current.useJsonStoreRes.set({
      ...refFuncionario.current.useJsonStoreRes.state,
      params: {
        ...refFuncionario.current.useJsonStoreRes.state.params,
        start: parseInt(0, 10),
        ...(dataValue ? { id_uo: dataValue.id_uo } : { id_uo: '' }),
      },
      ...(dataValue ? { infinite: false } : { infinite: false }),
    });
  };

  const handleFuncionarioInputChange = _.debounce(async (valueInput) => {
    resetFuncionarios();
    refFuncionario.current.useJsonStoreRes.set({
      ...refFuncionario.current.useJsonStoreRes.state,
      params: {
        ...refFuncionario.current.useJsonStoreRes.state.params,
        start: parseInt(0, 10),
        id_funcionario: '',
        ...(valueInput
          ? { bottom_filtro_value: valueInput, bottom_filter_value: valueInput }
          : { bottom_filtro_value: '', bottom_filter_value: '' }),
      },
      infinite: false,
    });
  }, 500);

  return (
    <>
      <Container maxWidth={false}>
        <Header />
        <Card {...rest}>
          <Box p={2} minHeight={56} display="flex" alignItems="center" mt={3}>
            {autoCompleteConfig.store && (
              <AutocompletePxp
                key={1}
                name="funcionario"
                value={autoCompleteConfig.value}
                configInput={autoCompleteConfig}
                handleChange={handleChangeGerencia}
                loading={autoCompleteConfig.store.loading}
                memoDisabled={autoCompleteConfig.memoDisabled}
                states={{}}
                open={autoCompleteConfig.store.open}
                disabled={autoCompleteConfig.disabled}
                helperText={autoCompleteConfig.helperText}
                error={autoCompleteConfig.error.hasError}
                msgError={autoCompleteConfig.error.msg}
                dataStore={autoCompleteConfig.store.data}
              />
            )}
            <Box flexGrow={1} mr={5} />

            <TextField
              //className={classes.queryField}
              style={{ width: 500 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              onChange={(e) =>
                handleFuncionarioInputChange(e && e.target.value)
              }
              placeholder="Buscar Funcionario"
              variant="outlined"
            />
          </Box>
        </Card>
        <ComponentMapping config={config} ref={refFuncionario} />
      </Container>

      <DialogPxp
        titleToolbar={`Archivos de ${managerFile.funcionarioDesc}`}
        onClose={() => {
          setOpenDialog(false);
        }}
        open={openDialog}
      >
        <ManagerFile
          idTable={managerFile.idTable}
          table="orga.tfuncionario"
          idTableDesc="id_funcionario"
          buttonUploadFile={false}
          buttonDeleteFile={false}
          buttonFileType={false}
        />
      </DialogPxp>
    </>
  );
};

export default SearchF;
