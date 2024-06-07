import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Variables
  title = 'Menu-Project';
  total=0;
  qty=0;
  ProductName="";

  //Products
  Menu=[
    {id:1,name:"ستراثمور توند تان دفتر اسكتش",price:65,description:"ستراثمور توند تان دفتر اسكتش",img:"/assets/Images/G1.png"},
    {id:2,name:"أقلام رسم فابر كاستيل",price:50,description:"أقلام رسم فابر كاستيل",img:"/assets/Images/G2.png"},
    {id:3,name:"لوحة رسم",price:35,description:"لوحة رسم",img:"/assets/Images/G3.png"},
    {id:4,name:"حامل لوحة",price:150,description:"حامل لوحة",img:"/assets/Images/G4.png"}
  ]  
  
  //This function is to search for a product 
  search(Menu:any[]){
    return Menu.filter(item=>item.name.includes(this.ProductName));
  }

  //Function to calculate the total sum and quantity when a product is checked or unchecked
  sum(event:any ,price:number)
  {
    const isChecked:boolean=event.target.checked;
    if(isChecked) {
      this.total=this.total+price;
      this.qty+=1;
    }
    
    else {
      this.total=this.total-price;
      this.qty-=1;
    }
  }
}
