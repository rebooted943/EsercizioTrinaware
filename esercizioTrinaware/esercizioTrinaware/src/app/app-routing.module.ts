import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SedeComponent } from './sede/sede.component';
import { SedeDettaglioComponent } from './sede/sede-dettaglio/sede-dettaglio.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'sedi', component: SedeComponent,
    children: [
      { path: ':id/:nomeSede', component: SedeDettaglioComponent }
    ]
  },
  { path: 'about', component: AboutComponent}
  // { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
