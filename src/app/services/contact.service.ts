import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ContactRequest } from '../models/contact-request.model';
import { ApiResponse } from '../models/api-response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  private http = inject(HttpClient);

  sendMessage(request: ContactRequest){
    return this.http.post<ApiResponse>(`${environment.apiUrl}/contact`, request);
  }
}
