import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule, RouterLink, MatRippleModule, MatButtonModule],
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
  recipes = [
    {
      _id: 'sweetishpancakes',
      name: 'Sweetish Pancakes',
      category: 'Breakfast Foods',
      image: 'sweeitshpancakes.png',
      ingredients: [
        { name: 'milk', quantity: '2 1/2 cups' },
        { name: 'flour', quantity: '1 1/2 cups' },
        { name: 'eggs', quantity: '6' },
        { name: 'sugar', quantity: '1 tbsp ' },
        { name: 'salt', quantity: '1/2 tsp' },
      ],
      directions: [
        'Whisk ingredients together',
        'Butter a pan and pour on pancake mix on. Try to make a circle.',
      ],
    },
    {
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
    },
  ];
}
