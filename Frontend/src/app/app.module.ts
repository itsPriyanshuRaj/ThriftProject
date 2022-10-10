import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AdminOrderDashComponent } from './components/admin-order-dash/admin-order-dash.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    OrderComponent,
    ProductComponent,
    RegisterComponent,
    ShopComponent,
    FooterComponent,
    CheckoutComponent,
    ChangePasswordComponent,
    CartComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AddProductComponent,
    ConfirmationComponent,
    AdminOrderDashComponent,
    AdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
