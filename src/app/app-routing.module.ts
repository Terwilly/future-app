import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { CommandeComponent } from './components/commande/commande.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'eshop', component: EshopComponent },
  { path: 'compte', component: MonCompteComponent },
  { path: 'cart', component: CartComponent },
  { path: 'eshop/product/:id', component: SingleProductComponent },
  {
    path: 'cart/commande',
    component: CommandeComponent,
    canActivate: [AuthGuard],
  },
  { path: 'inscription', component: SignupComponent },
  { path: 'connection', component: LoginComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
