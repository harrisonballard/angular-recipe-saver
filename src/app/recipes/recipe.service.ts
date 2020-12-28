import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Thai Chicken', 
            'Boneless Thai chicken', 
            'https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg',
            [
                new Ingredient('butter', 1),
                new Ingredient('chicken thighs', 2),
                new Ingredient('cilantro', 1),
                new Ingredient('sweet chili sauce', 1),
                new Ingredient('soy sauce', 1),
                new Ingredient('garlic', 1),
                new Ingredient('fish sauce', 1),
                new Ingredient('ginger', 1),
                new Ingredient('lime', 1)
            ]),

            new Recipe(
            'New Orleans Gumbo', 
            'Seafood gumbo', 
            'https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg/new-orleans-creole-gumbo.jpg',
            [
                new Ingredient('onion', 3),
                new Ingredient('green bell pepper', 1),
                new Ingredient('chicken breast', 1),
                new Ingredient('andouille sausage', 2),
                new Ingredient('shrimp', 20),
                new Ingredient('garlic', 3),
                new Ingredient('tomatoes', 2),
                new Ingredient('celery', 1),
                new Ingredient('lemon', 3),
                new Ingredient('tabasco', 1),
                new Ingredient('worcestershire', 2),
                new Ingredient('butter', 1),
                new Ingredient('okra', 10)
            ]),     
        ];

        constructor(private slService: ShoppingListService) {}

      getRecipes() {
          //slice is a way to copy so that you dont change/cant access the array in this service
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}