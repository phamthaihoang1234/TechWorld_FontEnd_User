import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllProductComponent } from './components/all-product/all-product.component';
import { ByCategoryComponent } from './components/by-category/by-category.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RateComponent } from './components/rate/rate.component';
import { SearchComponent } from './components/search/search.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'all-product', component: AllProductComponent },
  { path: 'by-category/:id', component: ByCategoryComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'search/:keyword', component: SearchComponent },
  { path: 'search', component: AllProductComponent },
  { path: 'favorites', component: FavoriteComponent, canActivate: [authGuard] },
  { path: 'sign-form', component: SignFormComponent },
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent },
]



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    AllProductComponent,
    ByCategoryComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    FavoriteComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    NotFoundComponent,
    OrderDetailsComponent,
    ProductDetailComponent,
    ProfileComponent,
    RateComponent,
    SearchComponent,
    SignFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
