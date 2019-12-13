import { Injectable } from '@angular/core';
import { GeintereseerdAssignment } from '../models/geintereseerd-assignment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeintereseerdAssignmentService {

  constructor(private http: HttpClient) {
  }

  addGeintereseerdAssignment(geintereseerdAssignment: GeintereseerdAssignment) {

    return this.http.post<GeintereseerdAssignment>('https://localhost:44383/api/geintereseerdassignment', geintereseerdAssignment);
  }
}
