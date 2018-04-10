import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';

const router: Routes = [{
  path: '', component: LoginAppComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [LoginAppComponent]
})
export class LoginModule { }
