import { Injectable } from '@angular/core';
import { GeintereseerdAssignment } from '../models/geintereseerd-assignment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeintereseerdAssignmentService {

  constructor(private http: HttpClient) {
  }

  addGeintereseerdAssignment(geintereseerdAssignment: GeintereseerdAssignment) {
    return this.http.post<GeintereseerdAssignment>('https://localhost:44383/api/geintereseerdassignment', geintereseerdAssignment);
  }
  getAssignmentsBedrijfMetIntresse(bedrijfID):Observable<GeintereseerdAssignment[]>{
    return this.http.get<GeintereseerdAssignment[]>("https://localhost:44383/api/geintereseerdAssignment/getAssignmentsbybedrijfwithintresse/" + bedrijfID);
  }
}
