import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5163/api/product';
  constructor(private httpClient:HttpClient) { }

  getProduct():Observable<any>{
    return this.httpClient.get(this.apiUrl+'/get');
  }

  addProduct(Json:any):Observable<any>{
    const JsonStr ={json:JSON.stringify(Json)};
    return this.httpClient.post(this.apiUrl+'/add',null, {
      params:JsonStr
    });
  }

  deleteProduct(Json:any):Observable<any>{
    const JsonStr={json:JSON.stringify(Json)};
    return this.httpClient.delete(this.apiUrl+'/delete', {
      params: JsonStr
    })
  }


  updateProduct(Json:any):Observable<any>{
    const JsonStr={json:JSON.stringify(Json)};
    return this.httpClient.put(this.apiUrl+'/edit', null, {
      params:JsonStr
    })
  }
}
