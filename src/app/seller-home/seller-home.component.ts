import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {product} from "../data-type";
import { faDeleteLeft, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  constructor(private product:ProductService) {
  }
  icon=faDeleteLeft
  edit=faEdit

  productList:undefined | product[]
  deleteProductId:undefined|string=''
  ngOnInit(): void {
    this.list();
  }

  delete(id:number){
    this.product.deleteProduct(id).subscribe((result) => {
      if (result){
        this.deleteProductId="The item deleted successfully";
        this.list();
      }
      setTimeout(() => {
        this.deleteProductId=undefined
      },2000)
    })
  }

  list(){
    this.product.productList().subscribe((result) => {
      if (result){
        this.productList = result;
      }
    })
  }
}
