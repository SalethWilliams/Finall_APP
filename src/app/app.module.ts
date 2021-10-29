import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { CompletedComponent } from './completed/completed.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { HomestructuredetailsComponent } from './homestructuredetails/homestructuredetails.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetstartedComponent,
    CompletedComponent,
    HomedetailsComponent,
    HomestructuredetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [HomedetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
