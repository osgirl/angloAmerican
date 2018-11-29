import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MsAdalAngular6Module, AuthenticationGuard,MsAdalAngular6Service  } from 'microsoft-adal-angular6';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
  // for development
  /*return new TranslateHttpLoader(
      http,
      '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
      '.json'
  );*/
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AppContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MsAdalAngular6Module.forRoot({
      tenant: '2864f69d-77c3-4fbe-bbc0-97502052391a',
      clientId: '68a77c84-1c67-4f4a-a84d-39d08b2bf531',
      redirectUri: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      endpoints: { 
        "https://mneu-wap-d-da-001.azurewebsites.net":"",        
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',
      //postLogoutRedirectUri: 'https://www.google.com'
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  providers: [AuthenticationGuard,MsAdalAngular6Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
