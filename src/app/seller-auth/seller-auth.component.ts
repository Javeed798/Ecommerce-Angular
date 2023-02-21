import {Component, OnInit} from '@angular/core';
import {SellerService} from "../services/seller.service";
import {Router} from "@angular/router";
import {signup} from "../data-type";

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  constructor(private seller:SellerService, private router:Router) {
  }

  // after setting the data in localstorage when we refresh it must not go
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signup(data:signup):void{
    this.seller.userSignUp(data)
  }
}
