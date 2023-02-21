import { Component } from '@angular/core';
import {SellerService} from "../services/seller.service";
import {Router} from "@angular/router";
import {signup} from "../data-type";

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller:SellerService, private router:Router) {
  }

  signup(data:signup):void{
    this.seller.userSignUp(data).subscribe((result) => {
      if (result){
        this.router.navigate(['seller-home'])
      }
    });
  }
}
