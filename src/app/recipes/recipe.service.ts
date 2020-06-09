import { Injectable, EventEmitter } from '@angular/core';
import {Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})

export class RecipeService{

    //recipeSelected =new EventEmitter<Recipe>();
    recipeSelected =new Subject<Recipe>();
    
    private recipes: Recipe[] =[
        new Recipe('Punjabi cole','This is punjabi dish for chapathi / pulka',
        'https://www.cookwithmanali.com/wp-content/uploads/2014/03/Punjabi-Chole-Masala-notitle-cwm.jpg',
        [
            new Ingredient('Chilli Powder',1),
            new Ingredient('Oil',1)
        ]),
    
        new Recipe('Punjabi Cuisine',
        'This is Another punjabi dish for chapathi / pulka',
        'https://i.ndtvimg.com/i/2018-01/sarson-ka-saag_620x350_61515668369.jpg',
        [
            new Ingredient('Badam',10),
            new Ingredient('Lemon',1)
        ]),

        new Recipe('Vijaya Style Andhra Chicken','This is the rare dish prepared by VijayaLaxmi with yummy taste',
        'https://i.ytimg.com/vi/bHPUicEvBzc/maxresdefault.jpg',
        [
            new Ingredient('Country Chicken', 1),
            new Ingredient('Onions',5),
            new Ingredient('Home made chicken masala',1),
            new Ingredient('Coriandar Powder',1),
            new Ingredient('Guntur Chilli Powder', 5)

        ])
      ];

      //selectedRecipe: Recipe;

     getRecipes(){
         return this.recipes.slice();
      }

      getRecipeByArrayPosition(index: number)
    {
        return this.recipes[index]
    }

     
}
