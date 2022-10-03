import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './service/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  title = 'frontend';


  constructor(private service: AppServiceService){}

  ngOnInit(){
    this.getDataFromApi();
  }

    getDataFromApi(){
      this.service.getData().subscribe((response) =>{
        console.log("Response from API is ", response)
      }, (error) => {
        console.log("Errr is ",error);
      })
    }
  
}
