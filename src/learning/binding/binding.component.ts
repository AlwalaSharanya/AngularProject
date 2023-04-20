import { Component } from "@angular/core"

@Component({

  selector:'app-binding',
  templateUrl:'./binding.component.html'

})

export class BindingComponent{
    customerName:string
  constructor(){
    this.customerName="Sharanya"
  }
 
  // mocked json.
  items:any=[

    {id:2001,name:'tomatos',rate:50},
    {id:2002,name:'chilli',rate:80},
    {id:2003,name:'aloo',rate:40},
    {id:2004,name:'ginger',rate:400},
    {id:2005,name:'onion',rate:40},
    {id:2006,name:'beetroot',rate:700},
    {id:2007,name:'carrot',rate:400}

  ]

  trackById(index:number,item:any){
    return item.id
  }

  clicked:boolean=false
  clickedItem:any={name:'',rate:0}
 
  onItemClicked(item:any){
    this.clicked=true
    this. clickedItem=item

  }

  buttonStatus:boolean=false
  save(event:any):void{
    alert("Thank you...visit again ")
    this.buttonStatus=true

  }
}
