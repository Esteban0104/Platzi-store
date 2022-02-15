import { Component, OnInit } from '@angular/core';
import {ProductsService} from './../../../core/services/products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price','actions'];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "¿Deseas eliminar este elemento de forma permanente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productsService.deleteProduct(id)
        .subscribe(rta=>{
          this.fetchProducts();
        });
        Swal.fire(
          'Eliminado!',
          'El producto ha sido eliminado',
          'success'
        )
      }
    })
  
  }

}
