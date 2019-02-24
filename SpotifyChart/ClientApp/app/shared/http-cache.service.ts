import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private requests: any = { };
  constructor() { }

  //add the HttpResponse from server to the request object with the url as key parameter
  put(url: string, response: HttpResponse<any>): void{
      this.requests[url] = response;
  }

  //fetch the HttpResponse value from cache for the url if present, or returns undefined if not present
  get(url:string): HttpResponse<any> | undefined{
    return this.requests[url];
  }

  //remove the response value for the url in case the data is updated and fresh call needs to be made to server
  invalidateRequestUrl(url:string): void {
    this.requests[url] = undefined;
  }

  //empty the entire cache
  invalidateCache():void{
    this.requests = { };
  }
}
