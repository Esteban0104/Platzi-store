import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import {ProductsService} from './../../../core/services/products/products.service';
import { Router } from '@angular/router';
import {MyValidators} from './../../../utils/validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(

  private formBuilder: FormBuilder,
  private  productsService: ProductsService,   
  private router: Router
    
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }
  saveProduct(event: Event){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        event.preventDefault();
    if(this.form.valid){
      const product = this.form.value
      this.productsService.createProduct(product)
      .subscribe ((newProduct)=> {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      });
    }
  
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
    console.log (this.form.value);

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      price: ['',[Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['',[Validators.required]],

    });
  }

  get priceField(){
    return this.form.get('price');
  }

}
