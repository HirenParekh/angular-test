import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { mockData } from './mock-data.service';
import { DataObj } from '../models/data.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
    /* this function will retrieve data and return an Observable of type any.
        in future we can retieve data from actual api simply by changing logic of this function.
    */
    retrieveData(): Observable<any> {
        return new Observable<any>(observer => {
            observer.next(mockData);
            observer.complete();
        })
    }
}
