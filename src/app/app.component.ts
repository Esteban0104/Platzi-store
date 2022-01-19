import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['Esteban','Juan pablo','Eliza','Laura'];
  pow = 10;


  addItem(){
    this.items.push('Nuevo item');
  }

  deleteItem(index:number){
    this.items.splice(index, 1);
  }
}