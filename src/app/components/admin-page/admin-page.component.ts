import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css',
})
export class AdminPageComponent {
  recipeForm: FormGroup;
  firebaseService: FirebaseService;

  constructor(private fb: FormBuilder) {
    this.firebaseService = inject(FirebaseService);

    // Initialize the form
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      ingredients: this.fb.array([]), // Ingredients array
      directions: this.fb.array([]), // Directions array
    });
  }

  // Getter for ingredients FormArray
  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  // Getter for directions FormArray
  get directions(): FormArray {
    return this.recipeForm.get('directions') as FormArray;
  }

  // Add a new ingredient
  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: ['', Validators.required],
      })
    );
  }

  // Remove an ingredient by index
  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  // Add a new direction
  addDirection() {
    this.directions.push(this.fb.control('', Validators.required));
  }

  // Remove a direction by index
  removeDirection(index: number) {
    this.directions.removeAt(index);
  }

  // Handle form submission
  submit() {
    console.log(this.recipeForm.value);

    this.firebaseService.addRecipe(this.recipeForm.value);

    alert('Recipe submitted! Check the console for output.');
  }
}
