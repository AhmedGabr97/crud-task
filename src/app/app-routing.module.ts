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
    path: 'viewperson/:personID',
    loadChildren: () => import('./viewperson/viewperson.module').then( m => m.ViewpersonPageModule)
  },
  {
    path: 'add-person',
    loadChildren: () => import('./add-person/add-person.module').then( m => m.AddPersonPageModule)
  },
  {
    path: 'edit-page/:personID',
    loadChildren: () => import('./edit-page/edit-page.module').then( m => m.EditPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
