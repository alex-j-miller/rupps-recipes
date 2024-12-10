import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  recipe = {
    _id: 'bruschetta',
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
