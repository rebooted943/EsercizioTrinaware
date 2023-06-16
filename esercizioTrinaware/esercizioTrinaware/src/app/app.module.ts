import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SediComponent } from './components/sedi/sedi.component';
import { AutomobiliComponent } from './components/sedi/automobili/automobili.component';
import { HomeComponent } from './components/home/home.component';
import { SedeDettaglioComponent } from './components/sedi/sede-dettaglio/sede-dettaglio.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { PasswordDimenticataComponent } from './components/password-dimenticata/password-dimenticata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SediComponent,
    AutomobiliComponent,
    HomeComponent,
    SedeDettaglioComponent,
    LoginComponent,
    AboutComponent,
    FooterComponent,
    SignupComponent,
    PasswordDimenticataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
