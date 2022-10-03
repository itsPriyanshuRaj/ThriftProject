import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ShopComponent } from '../shop/shop.component';
import { ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productImage: any;
  public productName : any;
  public productDesc: any;
  public productPrice :any;
  
  constructor(private api: ApiService, private shop:ShopComponent, private route: ActivatedRoute) {
    this.route.params.subscribe(() => {this.productName=this.route.snapshot.params["id"];});
   }
  ngOnInit(): void {
  }
}