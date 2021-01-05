import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import prods from './prods.json'
import {Cart} from '../cart.model'
import { WishlistService } from '../wishlist.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-vp2',
  templateUrl: './vp2.component.html',
  styleUrls: ['./vp2.component.scss']
})
export class Vp2Component implements OnInit {

	constructor ( private cs:CartService, 
				  private ws:WishlistService
		) {}
	

  prodList:Array< {
       	id: string;
		code: string;
		name: string;
		description: string;
		image: string;
		price: number;
		category: string;
		quantity: number;
		inventoryStatus: string;
		rating: number;
		quantityCart:number; }>= prods;

	cat:number
	
	i:number
	indiceLista:number
	prodListAcc: Array<{id: string;
		code: string;
		name: string;
		description: string;
		image: string;
		price: number;
		category: string;
		quantity: number;
		inventoryStatus: string;
		rating: number;} >=[];
	prodListPowerStation: Array<{id: string;
		code: string;
		name: string;
		description: string;
		image: string;
		price: number;
		category: string;
		quantity: number;
		inventoryStatus: string;
		rating: number;} >=[];
	prodListComponents: Array<{id: string;
		code: string;
		name: string;
		description: string;
		image: string;
		price: number;
		category: string;
		quantity: number;
		inventoryStatus: string;
		rating: number;} >=[];


	c:Cart[];		
	items: MenuItem[];
  ngOnInit(): void {
	this.cat=0;
	this.items=[
		{
			label: 'Reset',
			command: () => this.getCat0(this.cat)
		},
		{
			label: 'Smartphones',
			command: () => this.getCat1(this.cat)
		},
		{
			label: 'Power Stations',
			command: () => this.getCat2(this.cat)
		},
		{
			label: 'Components',
			command: () => this.getCat3(this.cat)
		},
		{
			label: 'Smartwatches',
			command: () => this.getCat4(this.cat)
		},
		{
			label: 'Headphones',
			command: () => this.getCat5(this.cat)
		},
		{
			label: 'Electronics',
			command: () => this.getCat6(this.cat)
		},
		{
			label: 'Mouses',
			command: () => this.getCat7(this.cat)
		},
		{
			label: 'Keyboards',
			command: () => this.getCat8(this.cat)
		},
		{
			label: 'Laptops',
			command: () => this.getCat9(this.cat)
		},
		{
			label: 'Tablets',
			command: () => this.getCat10(this.cat)
		},
		{
			label: 'Gaming',
			command: () => this.getCat11(this.cat)
		},
		{
			label: 'TVs',
			command: () => this.getCat12(this.cat)
		},
		{
			label: 'Photography',
			command: () => this.getCat13(this.cat)
		}
		
	]
  }

  //-----------------------------------------------------------------------------------------------sorting
j:number;
aux:any; 
  sortASC(lista:any)
  {
	  
	  for (this.i=0;this.i<lista.length-1;this.i++)
	  {
		  for (this.j=this.i+1;this.j<lista.length;this.j++)
		  {
			  if(lista[this.i] > lista[this.j])
			  {
				this.aux=lista[this.i];
				lista[this.i]=lista[this.j];
				lista[this.j]=this.aux;
			  }
		  }
	  }
  }

  addToCart(item:Cart)
  {
	// this.cs.addList(item);

	  if(this.cs.contains(item))
	  {
		this.cs.setQCart(this.cs.setQCartP1(this.cs.index(item)), this.cs.index(item))
		
	  }
	  else
	  {
		this.cs.addList(item);
		this.cs.setQCart(1,this.cs.index(item))
	  }
	 
  }
  addToWishlist(item:Cart)
  {
	if(!(this.ws.contains(item)))
	{
		this.ws.addList(item)
	}
	
  }


  getCat0(cat:number)
  {
	  this.cat=0;
  }
  //-----------------------------------------------------------------------------smartphones
			formList1()
			{
				this.indiceLista=0;	
				for(this.i=0;this.i<this.prodList.length;this.i++)
				{
					if(this.prodList[this.i].category=='Smartphones')
					{ 
						this.prodListAcc.push( this.prodList[this.i]);
						
					}
				}
			}
  getCat1(cat:number)
  {
	if(this.prodListAcc.length==0) 
	{
		this.cat=1;
		this.formList1();
	}
	else
	{
		if(this.prodListAcc.length!=0)
		{
			
			this.cat=1;
		}
	}
	 
  }

///-----------------------------------------------------------------------------PowerStation

formList2()
{
	this.indiceLista=0;
		for(this.i=0;this.i<this.prodList.length;this.i++)
		{
			if(this.prodList[this.i].category=='Power Stations')
			{ 
				this.prodListPowerStation.push( this.prodList[this.i]);
			
			}
		}
}
  getCat2(cat:number)
  {
	if(this.prodListPowerStation.length==0) 
	{
		this.cat=2;
		this.formList2();
	}
	else
	{
		if(this.prodListPowerStation.length!=0)
		{
			
			this.cat=2;
		}
	}
  }

  ///-----------------------------------------------------------------------------Components
  formList3()
  {
	  this.indiceLista=0;
		  for(this.i=0;this.i<this.prodList.length;this.i++)
		  {
			  if(this.prodList[this.i].category=='Components')
			  { 
				  this.prodListComponents.push( this.prodList[this.i]);
			  
			  }
		  }
  }
  getCat3(cat:number)
  {
	if(this.prodListComponents.length==0) 
	{
		this.cat=3;
		this.formList3();
	}
	else
	{
		if(this.prodListComponents.length!=0)
		{
			
			this.cat=3;
		}
	}
  }
  ///-----------------------------------------------------------------------------Smartwatches
  prodListSmartwatches: Array<{id: string;
	code: string;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
	quantity: number;
	inventoryStatus: string;
	rating: number;} >=[];
	formList4()
	{
		this.indiceLista=0;
			for(this.i=0;this.i<this.prodList.length;this.i++)
			{
				if(this.prodList[this.i].category=='Smartwatches')
				{ 
					this.prodListSmartwatches.push( this.prodList[this.i]);
				
				}
			}
	}
	getCat4(cat:number)
  {
	if(this.prodListSmartwatches.length==0) 
	{
		this.cat=4;
		this.formList4();
	}
	else
	{
		if(this.prodListSmartwatches.length!=0)
		{
			
			this.cat=4;
		}
	}
	}
///-----------------------------------------------------------------------------Headphones
prodListHeadphones: Array<{id: string;
	code: string;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
	quantity: number;
	inventoryStatus: string;
	rating: number;} >=[];

	formList5()
	{
		this.indiceLista=0;
			for(this.i=0;this.i<this.prodList.length;this.i++)
			{
				if(this.prodList[this.i].category=='Headphones')
				{ 
					this.prodListHeadphones.push( this.prodList[this.i]);
				
				}
			}
	}
	getCat5(cat:number)
  {
	if(this.prodListHeadphones.length==0) 
	{
		this.cat=5;
		this.formList5();
	}
	else
	{
		if(this.prodListHeadphones.length!=0)
		{
			
			this.cat=5;
		}
	}
	}

	///-----------------------------------------------------------------------------Electronics
prodListElectronics: Array<{id: string;
	code: string;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
	quantity: number;
	inventoryStatus: string;
	rating: number;} >=[];
	formList6()
	{
		this.indiceLista=0;
			for(this.i=0;this.i<this.prodList.length;this.i++)
			{
				if(this.prodList[this.i].category=='Electronics')
				{ 
					this.prodListElectronics.push( this.prodList[this.i]);
				
				}
			}
	}
	getCat6(cat:number)
  {
	if(this.prodListElectronics.length==0) 
	{
		this.cat=6;
		this.formList6();
	}
	else
	{
		if(this.prodListElectronics.length!=0)
		{
			
			this.cat=6;
		}
	}
	}


	///-----------------------------------------------------------------------------Mouse
prodListMouse: Array<{id: string;
	code: string;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
	quantity: number;
	inventoryStatus: string;
	rating: number;} >=[];
	formList7()
	{
		this.indiceLista=0;
			for(this.i=0;this.i<this.prodList.length;this.i++)
			{
				if(this.prodList[this.i].category=='Mouse')
				{ 
					this.prodListMouse.push( this.prodList[this.i]);
				
				}
			}
	}
	getCat7(cat:number)
  {
	if(this.prodListMouse.length==0) 
	{
		this.cat=7;
		this.formList7();
	}
	else
	{
		if(this.prodListMouse.length!=0)
		{
			
			this.cat=7;
		}
	}
	}

///-----------------------------------------------------------------------------Keyboards
	prodListKeyboards: Array<{id: string;
		code: string;
		name: string;
		description: string;
		image: string;
		price: number;
		category: string;
		quantity: number;
		inventoryStatus: string;
		rating: number;} >=[];
		formList8()
		{
			this.indiceLista=0;
				for(this.i=0;this.i<this.prodList.length;this.i++)
				{
					if(this.prodList[this.i].category=='Keyboards')
					{ 
						this.prodListKeyboards.push( this.prodList[this.i]);
					
					}
				}
		}
		getCat8(cat:number)
	  {
		if(this.prodListKeyboards.length==0) 
		{
			this.cat=8;
			this.formList8();
		}
		else
		{
			if(this.prodListKeyboards.length!=0)
			{
				
				this.cat=8;
			}
		}
		}



		///-----------------------------------------------------------------------------Laptops
	prodListLaptops: Array<{id: string;
		code: string;
		name: string;
		description: string;
		image: string;
		price: number;
		category: string;
		quantity: number;
		inventoryStatus: string;
		rating: number;} >=[];
		formList9()
		{
			this.indiceLista=0;
				for(this.i=0;this.i<this.prodList.length;this.i++)
				{
					if(this.prodList[this.i].category=='Laptops')
					{ 
						this.prodListLaptops.push( this.prodList[this.i]);
					
					}
				}
		}
		getCat9(cat:number)
	  {
		if(this.prodListLaptops.length==0) 
		{
			this.cat=9;
			this.formList9();
		}
		else
		{
			if(this.prodListLaptops.length!=0)
			{
				
				this.cat=9;
			}
		}
		}


		///-----------------------------------------------------------------------------Tablets
	prodListTablets: Array<{id: string;
		code: string;
		name: string;
		description: string;
		image: string;
		price: number;
		category: string;
		quantity: number;
		inventoryStatus: string;
		rating: number;} >=[];
		formList10()
		{
			this.indiceLista=0;
				for(this.i=0;this.i<this.prodList.length;this.i++)
				{
					if(this.prodList[this.i].category=='Tablets')
					{ 
						this.prodListTablets.push( this.prodList[this.i]);
					
					}
				}
		}
		getCat10(cat:number)
	  {
		if(this.prodListTablets.length==0) 
		{
			this.cat=10;
			this.formList10();
		}
		else
		{
			if(this.prodListTablets.length!=0)
			{
				
				this.cat=10;
			}
		}
		}

		///-----------------------------------------------------------------------------Gaming
	prodListGaming: Array<{id: string;
		code: string;
		name: string;
		description: string;
		image: string;
		price: number;
		category: string;
		quantity: number;
		inventoryStatus: string;
		rating: number;} >=[];
		formList11()
		{
			this.indiceLista=0;
				for(this.i=0;this.i<this.prodList.length;this.i++)
				{
					if(this.prodList[this.i].category=='Gaming')
					{ 
						this.prodListGaming.push( this.prodList[this.i]);
					
					}
				}
		}
		getCat11(cat:number)
	  {
		if(this.prodListGaming.length==0) 
		{
			this.cat=11;
			this.formList11();
		}
		else
		{
			if(this.prodListGaming.length!=0)
			{
				
				this.cat=11;
			}
		}
		}

		///-----------------------------------------------------------------------------TVs
	prodListTVs: Array<{id: string;
		code: string;
		name: string;
		description: string;
		image: string;
		price: number;
		category: string;
		quantity: number;
		inventoryStatus: string;
		rating: number;} >=[];
		formList12()
		{
			this.indiceLista=0;
				for(this.i=0;this.i<this.prodList.length;this.i++)
				{
					if(this.prodList[this.i].category=='TVs')
					{ 
						this.prodListTVs.push( this.prodList[this.i]);
					
					}
				}
		}
		getCat12(cat:number)
	  {
		if(this.prodListTVs.length==0) 
		{
			this.cat=12;
			this.formList12();
		}
		else
		{
			if(this.prodListTVs.length!=0)
			{
				
				this.cat=12;
			}
		}
		}


		///-----------------------------------------------------------------------------Photography
	prodListPhotography: Array<{id: string;
		code: string;
		name: string;
		description: string;
		image: string;
		price: number;
		category: string;
		quantity: number;
		inventoryStatus: string;
		rating: number;} >=[];
		formList13()
		{
			this.indiceLista=0;
				for(this.i=0;this.i<this.prodList.length;this.i++)
				{
					if(this.prodList[this.i].category=='Photography')
					{ 
						this.prodListPhotography.push( this.prodList[this.i]);
					
					}
				}
		}
		getCat13(cat:number)
	  {
		if(this.prodListPhotography.length==0) 
		{
			this.cat=13;
			this.formList13();
		}
		else
		{
			if(this.prodListPhotography.length!=0)
			{
				
				this.cat=13;
			}
		}
		}

		
}
