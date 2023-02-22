import { Component } from '@angular/core';
import {ProductService} from "../services/product.service";
import {product} from "../data-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  sellerAddProductMessage:string|undefined

  constructor(private product:ProductService,private router:Router) {
  }

  submit(data:product){
    this.product.addProduct(data).subscribe((result) => {
      console.log(result)
      if (result){
        this.sellerAddProductMessage="product is successfully added";
        // this.router.navigate(['seller-home'])
      }
      setTimeout(() =>
        (this.sellerAddProductMessage = undefined)
        ,3000)
    });

  }

}
