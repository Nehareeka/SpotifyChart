import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpCacheService } from './http-cache.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor{
    constructor(private cache: HttpCacheService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //pass along non-cacheable requests(Post, Put and delete) and invalidate cache
        if(req.method !== 'GET'){
            this.cache.invalidateCache();
            return next.handle(req);
        }

        //attempt to retrive a cached response
        const cachedResponse : HttpResponse<any> = this.cache.get(req.url);

        //return cached response
        if(cachedResponse){
            return of(cachedResponse);
        }

        //send request to server and add response to cache
        return next.handle(req)
        .pipe(
            tap(event => {
                if(event instanceof HttpResponse){
                    this.cache.put(req.url, event);
                }
            })
        );
        
    }

}