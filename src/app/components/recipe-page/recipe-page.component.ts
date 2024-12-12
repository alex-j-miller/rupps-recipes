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
export class RecipePageComponent {}
