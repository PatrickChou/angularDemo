import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

const router: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: 'loanApp',
      component: LoanApplicationComponent,
    },
    {
      path: '',
      redirectTo: 'loanApp',
      pathMatch: 'full',
    },
    {
      path: 'demo2',
      component: Demo1Component,
    },
    {
      path: 'demo3',
      component: Demo2Component,
    }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [MainComponent, SideBarComponent, LoanApplicationComponent, Demo1Component, Demo2Component]
})
export class WebappModule { }
