import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SongListComponent } from './song/song-list.component';
import { SongDetailComponent } from './song/song-detail.component';

import { SortDirective } from './directives/sort.directive';
import { FilterDirective } from './directives/filter.directive';

import { DataService } from './shared/data.service';
import { PagerService } from './shared/pager.service';
import { SongListResolver } from './song/song-list.resolver';
import { AddHeaderInterceptor } from './shared/add-header.interceptor';
import { CacheInterceptor } from './shared/cache.interceptor';


let route: Routes = [
  { path: 'index', component: SongListComponent, resolve: { initData: SongListResolver } },
  { path: 'detail/:name', component: SongDetailComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongDetailComponent,
    SortDirective,
    FilterDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [
        DataService,
        PagerService,
        SongListResolver,
        { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
