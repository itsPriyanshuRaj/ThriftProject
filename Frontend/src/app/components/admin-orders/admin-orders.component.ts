import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
 result:any
 rowData:any;
  constructor(private http:HttpClient,private router:Router) { 
   
  }

  ngOnInit(): void {
    window.scrollTo(0,0)
     this.http.post('http://localhost:3000/getAdminOrders',JSON.stringify({'id':1}),{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((res)=>{
      this.result=res
      for(let x=0;x<this.result.length;x++){
        this.result[x].PURCHASE_DATE=new Date(this.result[x].PURCHASE_DATE).toString().split("00")[0]
        this.result[x].PRODUCT_PRICE=(this.result[x].PRODUCT_PRICE).toLocaleString('en-US', {
          style: 'currency',
          currency: 'INR',
        });
      }
      this.rowData=this.result
    })
  }
 
}
