import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ejercicio1',
    loadChildren: () => import('./pages/ejercicio1/ejercicio1.module').then( m => m.Ejercicio1PageModule)
  },
  {
    path: 'ejercicio2',
    loadChildren: () => import('./pages/ejercicio2/ejercicio2.module').then( m => m.Ejercicio2PageModule)
  },
  {
    path: 'ejercicio3',
    loadChildren: () => import('./pages/ejercicio3/ejercicio3.module').then( m => m.Ejercicio3PageModule)
  },
  {
    path: 'ejercicio4',
    loadChildren: () => import('./pages/ejercicio4/ejercicio4.module').then( m => m.Ejercicio4PageModule)
  },
  {
    path: 'ejercicio5',
    loadChildren: () => import('./pages/ejercicio5/ejercicio5.module').then( m => m.Ejercicio5PageModule)
  },
  {
    path: 'ejercicio6',
    loadChildren: () => import('./pages/ejercicio6/ejercicio6.module').then( m => m.Ejercicio6PageModule)
  },
  {
    path: 'ejercicio7',
    loadChildren: () => import('./pages/ejercicio7/ejercicio7.module').then( m => m.Ejercicio7PageModule)
  },
  {
    path: 'ejercicio8',
    loadChildren: () => import('./pages/ejercicio8/ejercicio8.module').then( m => m.Ejercicio8PageModule)
  },
  {
    path: 'ejercicio9',
    loadChildren: () => import('./pages/ejercicio9/ejercicio9.module').then( m => m.Ejercicio9PageModule)
  },
  {
    path: 'ejercicio10',
    loadChildren: () => import('./pages/ejercicio10/ejercicio10.module').then( m => m.Ejercicio10PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
