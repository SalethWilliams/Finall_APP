import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})

export class HomedetailsComponent {
  
  userModel = new User('','',0,0,'',0);
  constructor(private router:Router){}

  next(){
    this.router.navigate(['homestructuredetails']);
  }
  prev(){
    this.router.navigate(['getstarted']);
  }

}
export class User{
  constructor(
    public name:string,
    public address: string,
    public area:number,
    public value:number,
    public near:string,
    public share: number
  ){}
}
