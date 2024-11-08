import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  //The exclamation point tells Angular to ignore that it is not initialized
  @Input() product!: IProduct;

  getImageUrl(product: IProduct){
    if(!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  addToCart(product: IProduct)
  {

  }
}
