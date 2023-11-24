import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonServiceIntercept } from './services/interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonServiceIntercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const API_URL = new InjectionToken<string>('API_URL', {
  providedIn: 'root',
  factory: () => {
    return 'http//fake.com';
  }
})
