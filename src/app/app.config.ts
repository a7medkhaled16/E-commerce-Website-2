import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { authInterceptor } from './core/interceptor/auth-interceptor';
import { loadingInterceptor } from './core/interceptor/loading-interceptor';
import { errorInterceptor } from './core/interceptor/error-interceptor';
import { NgxSpinnerModule } from "ngx-spinner";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(),withInterceptors([authInterceptor,loadingInterceptor,errorInterceptor])),
    provideAnimations(),
    provideToastr(),
    importProvidersFrom(NgxSpinnerModule),
    BrowserAnimationsModule,
    
  ]
};
