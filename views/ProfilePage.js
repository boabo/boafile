/*
 * ProfilePage.js
 * @copyright Disydes 2020
 * @author Favio Figueroa
 */

/*eslint-disable*/
import React, {useEffect, useState} from "react";
import { useParams, useHistory } from 'react-router-dom';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons


import GridContainer from "../../dyd-ui/components/Grid/GridContainer.js";
import GridItem from "../../dyd-ui/components/Grid/GridItem.js";
import NavPills from "../../dyd-ui/components/NavPills/NavPills.js";

import Parallax from "../../dyd-ui/components/Parallax/Parallax.js";
import Clearfix from "../../dyd-ui/components/Clearfix/Clearfix.js";
import Button from "../../dyd-ui/components/CustomButtons/Button.js";


import profilePageStyle from "../../dyd-ui/assets/jss/dyd-react/views/profilePageStyle.js";
import ProductDocuments from '../assets/icons/ProductDocuments';
import ManagerFile from "../../_parameters/components/ManagerFile/ManagerFile";
import useJsonStore from "../../_pxp/hooks/useJsonStore";
import {getUrlForView} from "../../_pxp/utils/Common";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const overriteStyles = {
  follow: {
    position: 'absolute',
    top: '0',
    left: '0',
  },
  followIcon: {
    width: '20px',
    height: '20px',
  },
  followButton: {
    marginTop: '-158px !important',
  },
};
const mergeStyles = {...profilePageStyle, ...overriteStyles}
const useStyles = makeStyles(mergeStyles);

const ProfilePage = ({ ...rest }) => {
  const history = useHistory();

  const { id } = useParams();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);


  const getDataTable = {
    url: 'organigrama/Funcionario/listarFuncionario',
    params: {
      id_funcionario:id,
      start:"0",limit:"50",sort:"PERSON.nombre_completo1",dir:"ASC",groupBy:"nacionalidad",groupDir:"ASC"
    },
  };
  const { data, setData } = useJsonStore(getDataTable);
  const [funcionario, setFuncionario] = useState();

  // when the data has gotten an resp
  useEffect(() => {
    if (data) {
      setFuncionario(data.datos[0]);
    }
  }, [data]);

  const back = () => {
    history.push(`/profiles`);
  }

  return (
    <div>
      <Parallax
        image={require("../assets/img/boa/Alas-BoA.jpg")}
        filter="dark"
        className={classes.parallax}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {funcionario && (<GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Atras"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    round
                    color="facebook"
                    className={classes.followButton}
                    onClick={back}
                  >
                    <ArrowBackIosIcon className={classes.followIcon} />
                  </Button>
                </Tooltip>
              </div>
              <div className={classes.profile}>
                <div>
                  <img src={getUrlForView({
                    nameFile: funcionario?.nombre_archivo,
                    folder: funcionario?.folder,
                    extension: funcionario?.extension,
                    //size: 'pequeno'
                  })} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>{funcionario.desc_person}</h3>
                  <h6>{funcionario.profesion}</h6>

                </div>
              </div>

            </GridItem>
          </GridContainer>)}
          <div className={classes.profileTabs}>
            <ManagerFile
              idTable={id}
              table={"orga.tfuncionario"}
              idTableDesc={"id_funcionario"}
              buttonUploadFile={false}
              buttonDeleteFile={false}
              buttonFileType={false}
            ></ManagerFile>
            <NavPills
              alignCenter
              color="boa"
              tabs={[
                {
                  tabButton: "Archivos",
                  tabIcon: ProductDocuments,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Tabla</h4>

                      </GridItem>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={2}
                        className={classes.gridItem}
                      >
                        asdasd
                      </GridItem>
                    </GridContainer>
                  )
                },
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>

    </div>
  );
}
export default ProfilePage;
