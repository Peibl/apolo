import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
    headers = new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'});
    private baseUrl = environment.apiUrl + '/forms';

    constructor(private http: HttpClient) {
    }

    getUser(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    createUser(user: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, user);
    }

    loginUser(user: Object): Observable<Object> {
        return this.http.post(environment.apiUrl + '/login', user);
    }

    updateUser(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }

    getForms(): Observable<any> {
        return this.http.get(`${this.baseUrl}`, {headers: this.headers});
    }

    getUsersByEmail(email: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/email/${email}`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}` + `/delete`, {responseType: 'text'});
    }


}
