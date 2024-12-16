import { Component, inject, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { getRecipeID, Recipe } from '../../utils';

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [MatDividerModule, MatListModule, CommonModule],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css',
})
export class RecipePageComponent implements OnInit {
  recipeId: string | null = null;
  firebaseService: FirebaseService;
  recipe: Recipe = {
    id: '',
    name: '',
    category: '',
    image: '',
    ingredients: [],
    directions: [],
  };

  constructor(private route: ActivatedRoute) {
    this.firebaseService = inject(FirebaseService);

    this.firebaseService.recipes$.subscribe((recipes) => {
      for (const recipe of recipes) {
        if (getRecipeID(recipe.name) === this.recipeId) {
          this.recipe = recipe;
          for (let i = 0; i < this.recipe.ingredients.length; i++) {
            this.recipe.ingredients[i].name =
              this.recipe.ingredients[i].name[0].toUpperCase() +
              this.recipe.ingredients[i].name.slice(1);
          }

          for (let i = 0; i < this.recipe.directions.length; i++) {
            this.recipe.directions[i] =
              this.recipe.directions[i].charAt(0).toUpperCase() +
              this.recipe.directions[i].slice(1);
          }
          break;
        }
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.recipeId = params.get('id'); // Get 'id' from the URL
      console.log(this.recipeId); // Logs '123' for /recipe/123
    });
  }
}
