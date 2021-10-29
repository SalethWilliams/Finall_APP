import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  next(){
    this.router.navigate(['homedetails']);
  }

}
