import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { serverRoutes } from './app/app.routes.server';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(serverRoutes), 
    importProvidersFrom(
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ),
    provideAnimations()
  ]
}).catch(err => console.error(err));