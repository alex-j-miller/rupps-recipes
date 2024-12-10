import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { CardSliderComponent } from '../card-slider/card-slider.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecipeCardComponent, CardSliderComponent, ScrollingModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  recipes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}
