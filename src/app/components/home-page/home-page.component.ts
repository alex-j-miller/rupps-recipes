import { Component, inject } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { CardSliderComponent } from '../card-slider/card-slider.component';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';
import { combineLatest, map, Observable } from 'rxjs';
import { Recipe } from '../../utils';

type GroupedCategory = { category: string; recipes: Recipe[] };

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecipeCardComponent, CardSliderComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  recipes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  firebaseSvc: FirebaseService;
  categories: Observable<string[]>;
  categorizedRecipes: Observable<GroupedCategory[]>;

  constructor() {
    this.firebaseSvc = inject(FirebaseService);
    console.log(this.firebaseSvc.recipes$);
    this.categories = this.getUniqueCategories(this.firebaseSvc.recipes$);
    this.categorizedRecipes = this.groupRecipesByCategory(
      this.categories,
      this.firebaseSvc.recipes$
    );

    console.log(this.categorizedRecipes);
  }

  groupRecipesByCategory(
    categories$: Observable<string[]>,
    recipes$: Observable<Recipe[]>
  ): Observable<GroupedCategory[]> {
    return combineLatest([categories$, recipes$]).pipe(
      map(([categories, recipes]) => {
        return categories.map((category) => ({
          category,
          recipes: recipes.filter((recipe) => recipe.category === category),
        }));
      })
    );
  }

  getUniqueCategories(items$: Observable<Recipe[]>): Observable<string[]> {
    return items$.pipe(
      map((items) => {
        const uniqueCategories = new Set<string>();
        for (const item of items) {
          if (item.category) {
            uniqueCategories.add(item.category);
          }
        }
        return Array.from(uniqueCategories);
      })
    );
  }

  temp_recipe = {
    id: 'bruschetta',
    name: 'Bruschetta',
    category: 'Appetizers',
    image:
      'https://www.simplyorganic.com/media/wysiwyg/tmp/simply-oragnic-Roasted-Tomato-Bruschetta-1080x1080-thumbnail.jpg',
    ingredients: [
      { name: 'tomato', quantity: '2 cups' },
      { name: 'basil', quantity: '2 tbsp' },
      { name: 'olive oil', quantity: '2 tbsp' },
    ],
    directions: [
      'Chop tomatoes and basil.',
      'Mix with olive oil.',
      'Serve on toasted bread.',
    ],
    prep_time: 15,
    cook_time: 5,
    servings: 4,
  };
}
