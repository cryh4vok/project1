import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  //? Stack all the existing ingredients on top of each other!!!
  addIngredient(ingredient: Ingredient, publishChanges = true) {
    const index = this.ingredients.findIndex(
      (ing) => ing.name === ingredient.name
    );

    if (index === -1) {
      this.ingredients.push(ingredient);
    } else {
      this.ingredients[index].amount += ingredient.amount;
    }

    if (publishChanges) {
      this.ingredientsChanged.emit(this.ingredients.slice());
    }

    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  clearIngredients() {
    this.ingredients = [];
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ing) => this.addIngredient(ing, false));
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
