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
      //     for auth guard we need to add that observe option as response and then we can integrate it in our app / :)
      {observe:'response'})

      // and here we can even subscribe it to the data and store it in the local storage

      .subscribe((result) => {
        console.log(result)
        localStorage.setItem("seller",JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
        //for auth guard we r making it to true and hence it will not go even we refresh the page :)
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
