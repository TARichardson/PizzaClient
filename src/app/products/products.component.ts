import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductElement } from '../interfaces/ProductsElement';
import { element } from 'protractor';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  dataSource;
  constructor(private service: ProductService) {
   }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('ProductData: ', data);
      this.dataSource = data as ProductElement[];
    });

  }
}
