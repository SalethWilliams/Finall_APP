import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { HomestructuredetailsComponent } from './homestructuredetails/homestructuredetails.component';

const routes: Routes = [ 
  { path:'', redirectTo: '/getstarted', pathMatch:'full' },
  { path:'getstarted', component:GetstartedComponent },
  { path:'completed', component:CompletedComponent },
  { path:'homedetails', component:HomedetailsComponent },
  { path:'homestructuredetails', component: HomestructuredetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
