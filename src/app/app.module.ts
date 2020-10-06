import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import {RouterModule} from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorComponent } from './components/error/error.component';
import { NewsArsenalComponent } from './components/news-arsenal/news-arsenal.component';
import { TransferNewsComponent } from './components/transfer-news/transfer-news.component';
import { AnalysisNewsComponent } from './components/analysis-news/analysis-news.component';
import { NewsArsenalDetailComponent } from './components/news-arsenal-detail/news-arsenal-detail.component';
import { TransferNewsDetailComponent } from './components/transfer-news-detail/transfer-news-detail.component';
import { AnalysisNewsDetailComponent } from './components/analysis-news-detail/analysis-news-detail.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ErrorComponent,
    NewsArsenalComponent,
    TransferNewsComponent,
    AnalysisNewsComponent,
    NewsArsenalDetailComponent,
    TransferNewsDetailComponent,
    AnalysisNewsDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'error', component: ErrorComponent},
      {path: 'news-page', component: NewsArsenalComponent},
      {path: 'news-page/news-page-detail', component: NewsArsenalDetailComponent},
      {path: 'transfer-page', component: TransferNewsComponent},
      {path: 'transfer-page/transfer-news-detail', component: TransferNewsDetailComponent},
      {path: 'analysis-page', component: AnalysisNewsComponent},
      {path: 'analysis-page/analysis-news-detail', component: AnalysisNewsDetailComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
