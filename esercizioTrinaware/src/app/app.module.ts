import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { PasswordRecoveryComponent } from './auth/password-recovery/password-recovery.component';
import { PopupComponent } from './shared/popup/popup.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { StoreDetailComponent } from './store/store-detail/store-detail.component';
import { WarehouseComponent } from './store/warehouse/warehouse.component';
import { ProductFormComponent } from './store/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PasswordRecoveryComponent,
    PopupComponent,
    StoreListComponent,
    StoreDetailComponent,
    WarehouseComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
