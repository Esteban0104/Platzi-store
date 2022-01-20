import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ContactsComponent} from './contacts/contacts.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
    {

      path:'',
      redirectTo: '/home',
      pathMatch:'full'

    },
  
  {
    
  path: 'home',
component: HomeComponent
  },
  {
    path: 'products',
  component: ProductsComponent
    },
    {
      path: 'product/:id',
    component: ProductDetailComponent
      },
    {
      path: 'contacts',
    component: ContactsComponent
      },
      {
        path: 'demo',
        component: DemoComponent

      },
      {
        path: '**',
        component: PageNotFoundComponent
      
      }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
