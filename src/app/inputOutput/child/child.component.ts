import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() placeholderText: string = 'Search';

  @Input() productSelected: boolean = false;
  @Input() productName:string;

  @Output() addedProduct = new EventEmitter<boolean>();
  @Output() addedProductName = new EventEmitter<{name:string}>();


  onAddtoCart(){
    // send data to parent
    this.addedProduct.emit(true);
    // if you want to send multiple data to parent then create a object and send it in one emit statement
    this.addedProductName.emit({name: this.productName});
  }
}
