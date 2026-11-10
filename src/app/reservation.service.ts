
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationRequest } from './menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8080/api/v1/save/table';

  constructor(private http: HttpClient) {}

  submitReservation(payload: ReservationRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload);
  }
}
