export class Cart 
{
    
    public id: string;
    public  code: string;
    public  name: string;
      public  description: string;
      public  image: string;
      public  price: number;
      public  category: string;
      public  quantity: number;
      public  inventoryStatus: string;
      public  rating: number;
      public quantityCart:number;
    ;
    

    constructor( 
       
      id: string,
      code: string,
      name: string,
      description: string,
      image: string,
      price: number,
      category: string,
      quantity: number,
      inventoryStatus: string,
      rating: number,
      quantityCart:number
  
        )
    {
       
       this.id=id;
       this.code=code;
       this.name=name;
       this.description=description;
       this.image=image;
       this.price=price;
       this.category=category;
       this.quantity=quantity;
       this.inventoryStatus=inventoryStatus;
       this.rating=rating;
       this.quantityCart=quantityCart;
    }
}