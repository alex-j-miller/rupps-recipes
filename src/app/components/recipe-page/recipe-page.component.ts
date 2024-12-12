import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [MatDividerModule, MatListModule],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css',
})
export class RecipePageComponent {
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
  };
}
