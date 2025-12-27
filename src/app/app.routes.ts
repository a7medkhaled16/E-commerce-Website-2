import { Routes } from '@angular/router';
import { AuthLayput } from './core/layouts/auth-layput/auth-layput';
import { RegisterComponent } from './core/auth/component/register-component/register-component';
import { LoginComponent } from './core/auth/component/login-component/login-component';
import { MainLayput } from './core/layouts/main-layput/main-layput';
import { Home } from './feature/home/component/home/home';
import { ProductDetails } from './feature/products/component/product-details/product-details';
import { Contact } from './feature/contact/contact/contact';
import { AboutUs } from './feature/about us/component/about-us/about-us';
import { ProductList } from './feature/products/component/product-list/product-list';
import { Blogs } from './feature/Blogs/component/blogs/blogs';
import { authgardGuard } from './core/guards/authgard-guard';
import { isloggedGuard } from './core/guards/islogged-guard';
import { Notfound } from './core/auth/component/notfound/notfound';
import { CartList } from './feature/cart/component/cart/cart';
import { Order } from './feature/orders/component/order/order';
import { CheckoutSession } from './feature/orders/component/checkout-session/checkout-session';
import { Wishlist } from './feature/wislist/component/wishlist/wishlist';

export const routes: Routes = [
                
    
            {path:'',component:AuthLayput ,canActivate:[isloggedGuard],children:[
                {path:'',redirectTo:'login' ,pathMatch:'full'},
                {path:'signup',component:RegisterComponent},
                {path:'login',component:LoginComponent}
            ]},
            {path:'',component:MainLayput, canActivate:[authgardGuard] ,children:[
                {path:'',redirectTo:'home',pathMatch:'full'},
                {path:'home',component:Home},
                {path:'product',component:ProductList},
                {path:'blogs',component:Blogs},
                {path:'contact',component:Contact},
                {path:'about',component:AboutUs},
                {path:'cart',component:CartList},
                {path:'product-details/:id',component:ProductDetails},
                {path:'checkout/:id',component:CheckoutSession},
                {path:'allorders',component:Order},
                {path:'wishlist',component:Wishlist}
            ]},
            {path:'**', component:Notfound}
            
    
];
