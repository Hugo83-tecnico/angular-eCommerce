import { Injectable } from '@angular/core';
import { Book } from '../product-list/product-item/model/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutcServiceService {

  private baseUrl:string = ''

  constructor(private httpClient:HttpClient) { 
    this.baseUrl = 'http://localhost:3004/results'
  }

  getInfo():Observable<Book>{
    return this.httpClient.get<Book>(this.baseUrl)
    
  }
}
