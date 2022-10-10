import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminOrderDashComponent } from './components/admin-order-dash/admin-order-dash.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { CartComponent } from './components/cart/cart.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product/:id',component:ProductComponent},
  //{path:'productReload/:id',component:ProductComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'adminDash',component:AdminDashboardComponent},
  {path:'productAdd',component:AddProductComponent},
  {path:'cart',component:CartComponent},
  //{path:'cartReload',component:CartComponent},
  {path:'shop',component:ShopComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'adminOrder',component:AdminOrdersComponent},
  {path:'orders',component:OrderComponent},
  {path:'orderdash',component:AdminOrderDashComponent},
  // {path:'email',component:EmailComponent},
  {path:'changePassword',component:ChangePasswordComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
