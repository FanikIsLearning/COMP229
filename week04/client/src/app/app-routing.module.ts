import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';

import { ProfileComponent } from './profile/profile.component';

import { BoardUserComponent } from './board-user/board-user.component';

import { BoardModeratorComponent } from './board-moderator/board-moderator.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'add', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
