import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'template-1',
    loadComponent: () =>
      import('./components/template-one/template-one.component').then(
        (m) => m.TemplateOneComponent
      ),
  },
  {
    path: 'template-2',
    loadComponent: () =>
      import('./components/template-two/template-two.component').then(
        (m) => m.TemplateTwoComponent
      ),
  },
  {
    path: 'template-3',
    loadComponent: () =>
      import('./components/template-three/template-three.component').then(
        (m) => m.TemplateThreeComponent
      ),
  },
  {
    path: 'template-4',
    loadComponent: () =>
      import('./components/template-four/template-four.component').then(
        (m) => m.TemplateFourComponent
      ),
  },
  {
    path: 'template-5',
    loadComponent: () =>
      import('./components/template-five/template-five.component').then(
        (m) => m.TemplateFiveComponent
      ),
  },
  {
    path: 'template-6',
    loadComponent: () =>
      import('./components/template-six/template-six.component').then(
        (m) => m.TemplateSixComponent
      ),
  },
  {
    path: 'template-7',
    loadComponent: () =>
      import('./components/template-seven/template-seven.component').then(
        (m) => m.TemplateSevenComponent
      ),
  },
  {
    path: 'template-8',
    loadComponent: () =>
      import('./components/template-eight/template-eight.component').then(
        (m) => m.TemplateEightComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];