/**
 * CardFuncionario.js
 * @copyright Disydes 2020
 * @author Favio Figueroa
 */

import React from 'react';
import { Box, Button, Card, Divider, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Marker from '../assets/icons/Marker';
import Label from '../../_pxp/components/Label';
import OfficeChair2 from '../assets/icons/OfficeChair2';
import Email from '../assets/icons/Email';
import { getUrlForView } from '../../_pxp/utils/Common';
import UserMaleCircle from '../assets/icons/UserMaleCircle';
import UserFemaleCircle from '../assets/icons/UserFemaleCircle';
import ProductDocuments from '../assets/icons/ProductDocuments';

import useStylesCardFuncionario from '../assets/js/components/cardFuncionarioStyle';

const CardFuncionario = ({ row, openManagerFile }) => {
  const history = useHistory();
  const classesComponent = useStylesCardFuncionario();
  return (
    <>
      <Card className={clsx(classesComponent.root)}>
        <Box flexGrow={1}>
          <Typography
            component="h3"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Boa - Sistemas
          </Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography variant="h6" color="textPrimary">
              {row.desc_person}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography color="textSecondary">{row.nombre_cargo}</Typography>
          </Box>
          <Box display="flex" alignItems="center" flexWrap="wrap" pt="20px">
            <Marker />
            <Label className={classesComponent.label} color="success">
              {row.nombre_lugar_ofi}
            </Label>
          </Box>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <OfficeChair2 />
            <Box ml={1}>
              <Typography color="textSecondary">{row.nombre_oficina}</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Email />
            <Box ml={1}>
              <Typography color="textSecondary">{row.email_empresa}</Typography>
            </Box>
          </Box>
        </Box>
        <Avatar
          className={classesComponent.avatar}
          src={getUrlForView({
            nameFile: row?.nombre_archivo,
            folder: row?.folder,
            extension: row?.extension,
            // size: 'pequeno',
          })}
        />
      </Card>
      <Card>
        <Divider />
        <Box py={2} pl={2} pr={3} display="flex" alignItems="center">
          <Box flexGrow={1} />
          <div className={classesComponent.contentMenuButtons}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                history.push(`/profiles/${row.id_funcionario}`);
              }}
              startIcon={
                row.genero === 'VARON' ? (
                  <UserMaleCircle />
                ) : (
                  <UserFemaleCircle />
                )
              }
            >
              Ver Perfil
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                openManagerFile({
                  idTable: row.id_funcionario,
                  funcionarioDesc: row.desc_person,
                });
              }}
              startIcon={<ProductDocuments />}
            >
              Archivos
            </Button>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default CardFuncionario;
