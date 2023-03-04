import { HttpClientModule } from "@angular/common/http";
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { importProvidersFrom } from "@angular/core";
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([HttpClientModule, BrowserModule]),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation())],
}).catch((err) => console.error(err));
