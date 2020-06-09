import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

import { Ingredient } from '../shared/ingredient.model'

@Injectable({providedIn: 'root'})

export class ShoppingListService{
    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Chole buttani',3),
        new Ingredient('Onion',5),
        new Ingredient('Tamatoes',10)
    ];

    getIngredients(){
        // The slice() method returns the selected elements in an array, as a new array object
        return this.ingredients.slice()
    }

    addIngredient(ingredent: Ingredient){        
    this.ingredients.push(ingredent);  
    // The slice() method returns the selected elements in an array, as a new array object
    //this.ingredientsChanged.emit(this.ingredients.slice())         
    this.ingredientsChanged.next(this.ingredients.slice())
    }


}