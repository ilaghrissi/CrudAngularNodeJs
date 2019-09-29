import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public baseUrl =  environment.apiBaseUrl;

  /**
   * Add new Customer
   * @param customer : customer to add
   */
  createCustomer(customer: Customer) {
    const uri = this.baseUrl + '/api/customer/';
    return this.http.post(uri, customer);
  }
  /**
   * Update existing customer
   * @param customer : customer to update
   */
  updateCustomer(customer: Customer) {
    const uri = this.baseUrl + '/api/customer/';
    return this.http.put(`${uri}${customer._id}`, customer);
  }
  /**
   * Delete a customer
   * @param id  : customer id
   */
  deleteCustomer(id: string): Observable<any> {
    const uri = this.baseUrl + '/api/customer/';
    return this.http.delete(`${uri}${id}`, httpOptions);
  }
  /**
   * Get all customers
   */
  getCustomers(): Observable<Customer[]> {
    const uri = this.baseUrl + '/api/customer/';
    return this.http.get<Customer[]>(uri);
  }
  /**
   * Get Customer by id
   * @param id : Customer id
   */
  getCustomerById(id: string): Observable<Customer> {
    const uri = this.baseUrl + '/api/customer/';
    return this.http.get<Customer>(`${uri}${id}`);
  }
}
