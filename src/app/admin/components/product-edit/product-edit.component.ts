import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import {ProductsService} from './../../../core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MyValidators} from './../../../utils/validators';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(

  private formBuilder: FormBuilder,
  private  productsService: ProductsService,   
  private router: Router,
  private activatedRoute: ActivatedRoute
    
  ) 
  { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params['id'];
      this.productsService.getProduct(this.id)
      .subscribe(product=>{
        this.form.patchValue(product);
      });
    });
  }
  saveProduct(event: Event){
    Swal.fire({
      title: '¿Quieres editar el producto?',
      text: "Acepta para confirmar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        event.preventDefault();
    if(this.form.valid){
      const product = this.form.value
      this.productsService.updateProduct(this.id, product)
      .subscribe ((newProduct)=> {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      });
    }
  
        Swal.fire(
          'editado!',
          'Has editado el producto!',
          'success'
        )
      }
    })
    
    console.log (this.form.value);

  }

  private buildForm(){
    this.form = this.formBuilder.group({
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
