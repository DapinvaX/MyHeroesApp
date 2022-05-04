import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from '../shared/error-page/error-page.component';

//Mis Modulos



const routes: Routes = [
  
  {
    path          : 'auth',
    loadChildren  : ()=> import('../auth/auth.module').then( m => m.AuthModule) 
  },

  //Página de error
  {

    path      : '404',
    component : ErrorPageComponent

  },

  //Página de Héroes
  {
    path      : 'heroes',
    loadChildren  : ()=>import('../heroes/heroes.module').then( m => m.HeroesModule)
  },

  {

    path      : '**',
    //component : ErrorPageComponent,
    redirectTo: '404'

  }

]


@NgModule({

  imports: [

    RouterModule.forRoot( routes )

  ],
  exports: [

    RouterModule
  
  ]

})
export class AppRoutingModule { }
