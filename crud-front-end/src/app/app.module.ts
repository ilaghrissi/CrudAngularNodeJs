import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { NgbDateCustomParserFormatter } from './formats/ngbDateCustomParserFormatter';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [CustomerService,
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}],
  bootstrap: [AppComponent],
  entryComponents: [CustomerDetailComponent]
})
export class AppModule { }
