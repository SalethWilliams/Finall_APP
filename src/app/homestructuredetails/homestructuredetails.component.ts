import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homestructuredetails',
  templateUrl: './homestructuredetails.component.html',
  styleUrls: ['./homestructuredetails.component.css']
})
export class HomestructuredetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  next(){
    this.router.navigate(['completed']);
  }
  prev(){
    this.router.navigate(['homedetails']);
  }

}