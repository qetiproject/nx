import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'login',
        loadComponent: () => import('../../auth/src/index').then(c => c.FeatureLogin)
    },
];
