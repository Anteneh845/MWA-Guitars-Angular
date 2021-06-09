import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Guitar} from "./guitar.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  constructor(private httpClient: HttpClient) {
  }

  getGuitarList(query:string): Observable<Guitar[]> {
    return this.httpClient.get<Guitar[]>(`/api/guitars${query}`);
  }

  getGuitarDetail(guitarId: string): Observable<Guitar> {
    return this.httpClient.get<Guitar>(`/api/guitars/${guitarId}`);
  }

  deleteGuitarDetail(guitarId: string) {
    return this.httpClient.delete(`/api/guitars/${guitarId}`)
  }

  updateGuitar(guitarId: string, guitar: Guitar) {
    return this.httpClient.put(`/api/guitars/${guitarId}`, guitar)
  }

}
