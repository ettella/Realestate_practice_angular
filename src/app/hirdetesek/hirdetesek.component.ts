import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'


//lehetne model is, az any[] helyett - de erre nem lesz idő)
interface Ingatlan {

}

@Component({
  selector: 'app-hirdetesek',
  templateUrl: './hirdetesek.component.html',
  styleUrls: ['./hirdetesek.component.scss']
})
export class HirdetesekComponent implements OnInit {

  displayedColumns: string[] = ['kategoria', 'leiras', 'datum', 'tehermentes', 'fenykep'];
  hirdetesek: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get<any[]>('http://localhost:5000/api/ingatlan')
    // .subscribe((ingatlanok: any[])=>{
    //   console.log(ingatlanok)
    // this.hirdetesek = ingatlanok; // ez nem elég, csak akkor, ha átirjuk a string[]-ben lévő oszlopok neveit arra ami az apiban szerepel, és a html-ben is át kell irni. e helyett elegánsabb:


    this.http.get<any[]>('http://localhost:5000/api/ingatlan')
    .pipe(
      map((ingatlanok: any[])=> {
        let mappelt: any[] = [];

        ingatlanok.forEach(i => {
          mappelt.push({
            'kategoria' : i.kategoriaNev,
            'leiras' : i.leiras,
            'datum' : i.hirdetesDatuma,
            'tehermentes' : i.tehermentes,
            'fenykep' : i.kepUrl
          })
        })
        return mappelt
      })
    )
    .subscribe((ingatlanok: any[])=>{
      console.log(ingatlanok);
      this.hirdetesek = ingatlanok
    
  })
  }

}
