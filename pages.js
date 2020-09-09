/*
 * pages.js
 * @copyright Disydes 2020
 * @author Favio Figueroa
 */

import { lazy } from 'react';

const pages = {};

pages.WEB__Home = {
  path: '/profiles',
  // component: lazy(() => import('./views/SearchF')),
  component: lazy(() =>
    //import('../_examples/components/form/AutoCompleteTriggerComponent'),
    //import('../_examples/components/table/ExampleTable'),
    import('./views/SearchF'),
  ),

  detailPages: [
    {
      path: '/:id',
      component: lazy(() => import('./views/ProfilePage')),
    },
  ],
};

pages.WEB__Profile = {
  path: 'profiles/:id',
  component: lazy(() => import('./views/ProfilePage')),
};
/* Agrengando las nuevas rutas de redireccionamiento */
pages.WEB__Parentesco = {
  path: '/profiles/parentescos/:id',
  component: lazy(() => import('./views/Parentesco')),
};

pages.WEB__MedicalData = {
  path: '/profiles/medicalData/:id',
  component: lazy(() => import('./views/MedicalData')),
};

pages.WEB__Bachillerato = {
  path: '/profiles/bachillerato/:id',
  component: lazy(() => import('./views/Bachillerato')),
};


/******************************************************/
export default pages;
