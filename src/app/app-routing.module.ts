import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: WelcomeComponent }
    ]
  },
  {
    path: 'login',
    component: EmptyLayoutComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
