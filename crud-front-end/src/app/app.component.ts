import { Component, OnInit } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { Customer } from './models/customer.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD Application';
  customerList: Customer[];
  customerDetail: Customer;
  addForm: FormGroup;
  modalRef;
  country = ['country 1', 'country 2', 'country 3', 'country 4'];
  city = ['city 1', 'city 2', 'city 3', 'city 4'];
  region = ['region 1', 'region 2', 'region 3', 'region 4'];

  constructor(
    private modalService: NgbModal, private toastr: ToastrService, private customerService: CustomerService, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      firstname: ['', Validators.required, Validators.maxLength(10)],
      lastname: ['', Validators.required, Validators.maxLength(10)],
      birthday: [],
      address : this.formBuilder.group({
        country : [],
        city: [],
        region: [],
        postalCode: []
      }),
      phone: [],
      email : [],
      active : [false]
    });

    this.customerDetail = null;
    this.getCustomerList();
  }
  getCustomerList() {
     this.customerService.getCustomers().subscribe(res => {
      this.customerList = res;
    });
  }
  getCustomerById(id: string) {
    this.customerService.getCustomerById(id).subscribe(res => {
        this.customerDetail = res;
    });
  }
  createCustomer() {
    this.customerService.createCustomer(this.addForm.value)
    .subscribe( data => {
      this.getCustomerList();
    },
    err => {
      console.log('Error during creating new customer', err);
      this.toastr.error('Error during creating new customer', 'Error message');
    });
  }
  editCustomer(id: string) {
    this.modalRef = this.modalService.open(CustomerDetailComponent);
    this.modalRef.componentInstance.id = id;
  }
  deleteCustomer(id: string) {
    this.customerService.deleteCustomer(id).subscribe(
    res => {
      this.toastr.success('Deleted with success', 'Message');
    },
    err => {
      console.log('Error during deleting customer', err);
      this.toastr.error('Error during deleting customer', 'Error message');
    },
    () => {
      this.customerList = this.customerList.filter(u => u._id !== id);
    });
  }
}
