/**
 * SkeletonFuncionario.js
 * @copyright Disydes 2020
 * @author Favio Figueroa
 */

import React from 'react';
import { Box, Card, Divider, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';

import useStylesCardFuncionario from '../assets/js/components/cardFuncionarioStyle';

const SkeletonFuncionario = () => {
  const classesComponent = useStylesCardFuncionario();

  return (
    <>
      <Card className={clsx(classesComponent.root)}>
        <Box flexGrow={1}>
          <Typography
            component="div"
            gutterBottom
            variant="h3"
            color="textSecondary"
          >
            <Skeleton width="50%" />
          </Typography>
          <Typography component="div" variant="h6">
            <Skeleton width="80%" />
          </Typography>
          <Typography component="div" variant="h6">
            <Skeleton width="70%" />
          </Typography>
          <Typography
            component="div"
            variant="h6"
            style={{ paddingTop: '40px' }}
          >
            <Skeleton width="50%" />
          </Typography>
          <Typography component="div" variant="h6">
            <Skeleton width="50%" />
          </Typography>
          <Typography component="div" variant="h6">
            <Skeleton width="50%" />
          </Typography>
        </Box>
        <Avatar style={{ width: '88px', height: '88px' }}>
          <Skeleton animation="wave" variant="circle" width={88} height={88} />
        </Avatar>
      </Card>
      <Card>
        <Divider />
        <Skeleton variant="rect" height={60} />
      </Card>
    </>
  );
};

export default SkeletonFuncionario;
