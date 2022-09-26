import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-uj-hirdetes',
  templateUrl: './uj-hirdetes.component.html',
  styleUrls: ['./uj-hirdetes.component.scss']
})
export class UjHirdetesComponent implements OnInit {
  kategoriak: any[] = [];
  aktDatum: string = new Date().toISOString().substring(0,10);
  ujHirdetes = {
    kategoriaID: 0,
    hirdetesDatuma: this.aktDatum,
    leiras: '',
    tehermentes: true,
    kepUrl: ''
  }

  hiba: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5000/api/kategoriak')
    .pipe(
      catchError( error => {
        this.hiba = error.message;
        return throwError(error)
      })
    )
    .subscribe(
      (kat: any[])=> {
      // console.log(kat);
      this.kategoriak = kat;
    });
  }

  kuldes():void{
    this.ujHirdetes.kategoriaID = Number(this.ujHirdetes.kategoriaID);
    this.http.post<any>('http://localhost:5000/api/ujingatlan', this.ujHirdetes)
    .pipe(
      catchError( error => {
        this.hiba = error.message;
        return throwError(error)
      })
    )
    .subscribe(()=>{
      this.router.navigate(['offers']);
    })
  }

}
