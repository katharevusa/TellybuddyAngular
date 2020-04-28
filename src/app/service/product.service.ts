import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    baseUrl: string = '/api/Product';

    constructor(private httpClient: HttpClient) {}

    retrieveAllNormalProducts(): Observable<any> {
        return this.httpClient
            .get<any>(this.baseUrl + '/retrieveAllNormalProducts')
            .pipe(catchError(this.handleError));
    }

    retrieveAllLuxuryProducts(): Observable<any> {
        return this.httpClient
            .get<any>(this.baseUrl + '/retrieveAllLuxuryProducts')
            .pipe(catchError(this.handleError));
    }

    retrieveAllDiscountedProducts(): Observable<any> {
        return this.httpClient
            .get<any>(this.baseUrl + '/retrieveAllDiscountedProducts')
            .pipe(catchError(this.handleError));
    }

    retrieveAllDiscountedNormalProducts(): Observable<any> {
        return this.httpClient
            .get<any>(this.baseUrl + '/retrieveAllDiscountedNormalProducts')
            .pipe(catchError(this.handleError));
    }

    retrieveAllDiscountedLuxuryProducts(): Observable<any> {
        return this.httpClient
            .get<any>(this.baseUrl + '/retrieveAllDiscountedLuxuryProducts')
            .pipe(catchError(this.handleError));
    }

    retrieveProduct(productId: number): Observable<any> {
        return this.httpClient
            .get<any>(this.baseUrl + '/retrieveProduct/' + productId)
            .pipe(catchError(this.handleError));
    }

    retrieveAllProducts(): Observable<any> {
        return this.httpClient
            .get<any>(this.baseUrl + '/retrieveAllProducts')
            .pipe(catchError(this.handleError));
    }

    searchProductsByName(searchString: string): Observable<any> {
        return this.httpClient
            .get<any>(
                this.baseUrl +
                    '/searchProductsByName?searchString=' +
                    searchString
            )
            .pipe(catchError(this.handleError));
    }

    filterProductsByCategory(categoryId: number): Observable<any> {
        return this.httpClient
            .get<any>(this.baseUrl + '/filterProductsByCategory/' + categoryId)
            .pipe(catchError(this.handleError));
    }

    // filterProductsByTags(tagIds: number[], condition: string): Observable<any> {
    //     return this.httpClient
    //         .get<any>(this.baseUrl + '/filterProductsByTags/' + categoryId)
    //         .pipe(catchError(this.handleError));

    //         let params = new HttpParams();

    // }

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
