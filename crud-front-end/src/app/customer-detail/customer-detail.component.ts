import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  updateForm: FormGroup;
  id: string;
  customer: Customer;

  constructor(private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder, private customerService: CustomerService) { }

  ngOnInit() {
    this.updateForm = new FormGroup({});
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
      this.initForm();
    });
  }
  initForm() {
    this.updateForm = new FormGroup({
      _id: new FormControl(this.customer._id),
      firstname: new FormControl(this.customer.firstname),
      lastname: new FormControl(this.customer.lastname),
      birthday: new FormControl(this.customer.birthday),
      address : new FormControl(this.customer.address),
      phone: new FormControl(this.customer.phone),
      email: new FormControl(this.customer.email)
    });
  }
  updateCustomer() {
    console.log('(this.updateForm.value', this.updateForm.value);
    this.customerService.updateCustomer(this.updateForm.value)
    .subscribe( data => {
        // close modal
      this.toastr.success('updated with success', 'Message');
      this.router.navigate(['/']);
    },
    err => {
      console.log('Error during creating new customer', err);
      this.toastr.error('Error during creating new customer', 'Error message');
    });
  }

}
