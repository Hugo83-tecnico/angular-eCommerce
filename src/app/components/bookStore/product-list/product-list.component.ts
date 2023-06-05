import { Component, OnInit } from '@angular/core';
import { Book } from './product-item/model/book';
import { ProdutcServiceService } from '../service/produtc-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  bookProducts:Book | any;

  constructor( private bookService:ProdutcServiceService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.bookService.getInfo().subscribe(response=>{
      this.bookProducts = response;
      console.log(this.bookProducts)
    })
  }

}
