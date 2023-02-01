import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl='http://localhost:5163/api/customer'
  constructor(private httpClient: HttpClient) { }

  getCustomer():Observable<any>{
    return this.httpClient.get(this.apiUrl+'/get');
  }

  addCustomer(param:any):Observable<any>{
    const finalParam = {json: JSON.stringify(param)}
    return this.httpClient.post(this.apiUrl+'/add', null, {
      params: finalParam
    });
  }

  deleteCustomer(param:any):Observable<any>{
    const finalParam = {json: JSON.stringify(param)}
    return this.httpClient.delete(this.apiUrl+'/delete', {
      params:finalParam
    })
  }

  updateCustomer(param:any):Observable<any>{
    const finalParam = {json: JSON.stringify(param)}
    return this.httpClient.put(this.apiUrl+'/edit', null, {
      params:finalParam
    })
  }
}
