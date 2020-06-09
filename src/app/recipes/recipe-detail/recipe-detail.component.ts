import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
// @Input() recipeInfo : Recipe;
currentLoadedRecipe: Recipe
id: number;
  constructor(private shoppingListService: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }


  ngOnInit(): void {   
    
   console.log("CurrentLoaded Recipe: " +this.currentLoadedRecipe)
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
       this.currentLoadedRecipe = this.recipeService.getRecipeByArrayPosition(this.id)
      }
    );

  }
  
  onAddIngredientsToShoppingList(){
    console.log('onAddIngredientsToShoppingList')
    this.currentLoadedRecipe.ingredients.forEach(element => {
      this.shoppingListService.addIngredient(element)
    });   
    
  }

  onEditRecipe(){
    //this.router.navigate(['edit',this.id], { relativeTo: this.route})
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
