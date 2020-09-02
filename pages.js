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


//remove that
pages.MER__Item = {
  path: '/sales/item',
  component: lazy(() =>
    //import('../_examples/components/form/AutoCompleteTriggerComponent'),
    import('../_examples/components/table/ExampleTable'),
  ),
};
pages.SU__Country = {
  path: '/sales/country',
  component: lazy(() =>
    import('../_examples/components/form/AutoCompleteTriggerComponent'),
  ),
};

export default pages;
