import { Component, inject, input, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FirebaseService } from '../../services/firebase.service';
import { filter, map, Observable } from 'rxjs';
import { Recipe } from '../../utils';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [MatDividerModule, MatListModule, CommonModule],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css',
})
export class RecipePageComponent {
  recipe = {
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
  };
}
