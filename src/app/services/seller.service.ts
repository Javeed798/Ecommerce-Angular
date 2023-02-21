import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {signup} from "../data-type";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  //this is using for auth guard
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data:signup){
    return this.http.post("http://localhost:3000/seller",data,
      //     for auth guard
      {observe:'response'})
      .subscribe((result) => {
        console.log(result)
        localStorage.setItem("seller",JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
        //for auth guard
        this.isSellerLoggedIn.next(true)
      })
  }

  // this is for storing the data even after we hit refresh
  reloadSeller(){
    if (localStorage.getItem("seller")){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
}
