/*
 * SearchF.js
 * @copyright Disydes 2020
 * @author Favio Figueroa
 */

import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

// nodejs library that concatenates classes
import classNames from 'classnames';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Share from '@material-ui/icons/Share';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  colors,
} from '@material-ui/core';

// core components
import * as Yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import boa from '../assets/img/boa/Alas-BoA.jpg';
import GridContainer from '../../dyd-ui/components/Grid/GridContainer';
import GridItem from '../../dyd-ui/components/Grid/GridItem';
import CardDyd from '../../dyd-ui/components/Card/Card';
import CardBody from '../../dyd-ui/components/Card/CardBody';

import headersStyle from '../../dyd-ui/assets/jss/dyd-react/views/sectionsSections/headersStyle';
import Form from '../../_pxp/components/Form/Form';
import CircularProgress from '../../_pxp/components/CircularProgress';
import { getUrlForView } from '../../_pxp/utils/Common';
import ComponentMapping from "../../_pxp/components/ComponentMapping/ComponentMapping";

const useStyles = makeStyles(headersStyle);

const useStylesOption = makeStyles((theme) => ({
  root: {},
  image: {
    flexShrink: 0,
    height: 56,
    width: 56,
  },
  subscriptions: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  value: {
    color: colors.green[600],
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const SearchF = ({ ...rest }) => {
  const history = useHistory();

  const classes = useStyles();
  const classesOption = useStylesOption();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const ref = useRef();
  const jsonExample1 = {
    nameForm: '',
    columns: {
      funcionario: {
        type: 'AutoComplete',
        label: 'Funcionario',
        initialValue: null,
        store: {
          url: 'organigrama/Funcionario/listarFuncionario',
          params: {
            start: '0',
            limit: '10',
            sort: 'id_funcionario',
            dir: 'ASC',
          },
          parFilters: 'PERSON.nombre_completo2#PERSON.ci',
          idDD: 'id_funcionario',
          descDD: 'desc_person',
          minChars: 2,
          renderOption: (option) => (
            <>
              <Table style={{ width: '100%' }}>
                <TableBody>
                  <TableRow hover key={option.id_funcionario}>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar
                          className={classes.avatar}
                          src={getUrlForView({
                            nameFile: option?.nombre_archivo,
                            folder: option?.folder,
                            extension: option?.extension,
                            // size: 'pequeno',
                          })}
                        />

                        <Box ml={2}>
                          <Typography variant="h6" color="textPrimary">
                            {option.desc_person}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            <span className={classesOption.subscriptions}>
                              {option.nombre_cargo}
                            </span>{' '}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                      >
                        <Box mr={2}>
                          <Typography
                            align="right"
                            variant="h6"
                            color="textPrimary"
                          >
                            38%
                          </Typography>
                        </Box>
                        <CircularProgress value={38} />
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </>
          ),
        },
        remote: true,
        gridForm: { xs: 12, sm: 12 },
        variant: 'outlined',
        isSearchable: true,
        validate: {
          shape: Yup.string().required('Required'),
        },
        helperText: 'Ingresa el nombre o carnet del funcionario',
      },
    },
    resetButton: false,
    submitButton: false,
  };

  const handleClickSubmit = (e) => {
    // console.log(ref.current.states.persona.value.id_persona)
    if (ref.current.states.funcionario.value.id_funcionario != '') {
      history.push(
        `/profiles/${ref.current.states.funcionario.value.id_funcionario}`,
      );
    }

    // history.push(`profiles/1`);
  };

  return (
    <div className="cd-section" {...rest}>
      <div>
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: `url("${boa}")` }}
        >
          <div className={classes.conatinerHeader0top}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter,
                )}
              >
                <h1 className={classes.title}>BoA-File</h1>
                <h4>Busca el funcionario que desees de Boa</h4>
              </GridItem>
              <GridItem
                xs={12}
                sm={10}
                md={10}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <CardDyd raised className={classes.card}>
                  <CardBody formHorizontal>
                    <form>
                      <GridContainer>
                        <GridItem xs={12} sm={9} md={9}>
                          <Form dialog data={jsonExample1} ref={ref} />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3}>
                          <Button
                            variant="outlined"
                            className={classes.signUpButton}
                            color="primary"
                            onClick={handleClickSubmit}
                          >
                            Consultar
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </form>
                  </CardBody>
                </CardDyd>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchF;
