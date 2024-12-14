import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Recipe } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  recipes$: Observable<Recipe[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'recipes');
    this.recipes$ = collectionData<Recipe[]>(aCollection);
  }

  addRecipe(recipe: Recipe) {
    const coll = collection(this.firestore, 'recipes');
    const res = addDoc(coll, recipe);
    console.log('Added document: ', res);
  }
}
