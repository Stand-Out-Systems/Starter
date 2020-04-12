import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/good-beers');
  }

  createBeer(name: string): Observable<any> {
    console.log('Name -> ', name);
    return this.http.post('http://localhost:8080/good-beers', name, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    });
  }

  updateBeer(id: number, beer: any): Observable<any> {
    return this.http.put('http://localhost:8080/good-beers/'+id, beer, {
       headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    })
  }

  deleteBeer(id: number):  Observable<any> {
   return this.http.delete('http://localhost:8080/good-beers/'+id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    });
  }


  //  postCustomer(customer: Customer): Observable<Customer>{
  //        return this.client.post<Customer>(this.base, customer,{
  //      headers: new HttpHeaders({ 
  //       'Content-Type': 'application/json',
  //       "token" : "xxxxxxx"
  //     })
  //   });
  //    }//End POST.

}
