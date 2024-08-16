import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  private apiUrl = 'http://localhost:5231/api/Home/simulate';

  constructor(private http: HttpClient) {}

  simulate(
    numberOfGames: number,
    switchDoor: boolean,
    chosenDoor: number
  ): Observable<any> {
    const params = {
      numberOfGames: numberOfGames.toString(),
      switchDoor: switchDoor.toString(),
      chosenDoor: chosenDoor.toString(),
    };
    return this.http.get<any>(this.apiUrl, { params });
  }
}
