import { Injectable } from '@angular/core';
import { News } from './news.model';
import { NEWS } from 'src/app/news/mock.news';
import { Observable, of } from 'rxjs';

import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews(): Observable<News[]> {
    var newsObservable = of(NEWS).pipe(delay(5000));
    return newsObservable;
   }
}
