import {Component, Input, Output, EventEmitter, OnInit, DoCheck, OnDestroy} from '@angular/core';

import {Product} from '../product.model'

@Component ({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
  })


  export class ProductComponent implements  OnInit, DoCheck, OnDestroy{


    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter(); 
    
    constructor(){
        console.log ('1. Constructor');
    }
   
   /*  ngOnChanges(changes: SimpleChange): void {
        console.log('ngOnchanges');
        console.log(changes);
    } */

    ngOnInit(){
        console.log ('2. ngOnInit');
    }

    ngDoCheck(){
        console.log('3. ngDoCheck')

    }

    ngOnDestroy(){
        console.log('4. ngOnDestroy');


    }

    addCart(){
        console.log('Añadido al carrito');
        this.productClicked.emit(this.product.id);
    }
}

