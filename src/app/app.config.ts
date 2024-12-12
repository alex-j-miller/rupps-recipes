import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"rupp-recipes","appId":"1:63842037729:web:10d217094d4b8187582ca0","storageBucket":"rupp-recipes.firebasestorage.app","apiKey":"AIzaSyDYonw3l0n9UHWzSkhYfHeQ1GPPKLqjwBQ","authDomain":"rupp-recipes.firebaseapp.com","messagingSenderId":"63842037729"})), provideFirestore(() => getFirestore())]
};
