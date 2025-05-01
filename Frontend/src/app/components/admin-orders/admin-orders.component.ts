import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  result: any
  rowData: any;
  p:number=1
  
  constructor(private http: HttpClient, private router: Router) { }

  stored: any = {}
  loggeduser: any = []
  customer_id: any

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.loggeduser = JSON.parse(localStorage.getItem('user'))
    // console.log(this.loggeduser)
    // this.customer_id = this.loggeduser[0].CUSTOMER_ID
    // console.log(this.customer_id)
    this.http.post('http://localhost:3000/getAdminOrders', JSON.stringify({ 'id': 1 }), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
      console.log("res", res)
      this.stored = res
      console.log(this.stored)
      for (let x = 0; x < this.stored.length; x++) {
        this.stored[x].PURCHASE_DATE = new Date(this.stored[x].PURCHASE_DATE)
      }
    })
  }
}
