import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Mis Modulos
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [

    LoginComponent,
    RegistroComponent
  
  ],
  imports: [
  
    CommonModule,
    AuthRoutingModule
  
  ]
})
export class AuthModule { }
