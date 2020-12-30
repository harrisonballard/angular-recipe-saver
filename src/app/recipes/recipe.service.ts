import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Ghost Pepper Chicken Tikka Masala', 
            'Easy overnight chicken tikka recipe with a good kick!', 
            'https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/chicken-tikka-masala-7.jpg',
            [
                new Ingredient('Garlic Clove', 3),
                new Ingredient('Ginger', 2),
                new Ingredient('Turmeric', 2),
                new Ingredient('Garam Masala', 1),
                new Ingredient('Coriander', 1),
                new Ingredient('Cumin', 1),
                new Ingredient('Greek Yogurt', 0.5),
                new Ingredient('Boneless Skinless Chicken Breast', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Tomato Paste', 2),
                new Ingredient('Cardamom Pods', 3),
                new Ingredient('Ghost Pepper Flakes', 0.5),
                new Ingredient('Can Whole Peeled Tomatoes', 1),
                new Ingredient('Can Coconut Milk', 1)
            ]),

            new Recipe(
            'Shrimp Boil', 
            'Quick and easy indoor shrimp boil.', 
            //may need to change this image to one from bigoven?
            'https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/the-original-old-bay-shrimp-boil-sh-2.jpg',
            [
                new Ingredient('Old Bay', 3),
                new Ingredient('Onion', 3),
                new Ingredient('Celery', 6),
                new Ingredient('Lemon', 3),
                new Ingredient('Small red potato', 6),
                new Ingredient('Shrimp', 20),
                new Ingredient('Green Bell Pepper', 3),
                new Ingredient('Butter', 1),
                new Ingredient('Salt', 1),
                new Ingredient('Pepper', 2),
            ]),     
        ];

        constructor(private slService: ShoppingListService) {}

      getRecipes() {
          //slice is a way to copy so that you dont change/cant access the array in this service
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }
}