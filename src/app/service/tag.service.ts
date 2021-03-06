import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseUrl: string = '/api/Tag'

  constructor(private httpClient: HttpClient) { }

  retrieveAllTags(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/retrieveAllTags').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage =
        'An unknown error has occurred: ' + error.error.message;
    } else {
      if (error.error.message) {
        errorMessage = error.error.message;
      } else {
        errorMessage =
          'A HTTP error has occurred: ' +
          `HTTP ${error.status} (${error.statusText})`;
      }
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
