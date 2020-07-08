import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sharma';
  query: string;
  artists: object;
  currentArtist: object;
  
  showArtist(item){
    console.log(item.name);
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentArtist = item;
  }
  
  constructor( private http: HttpClient ){
    this.query= '';
    // this.artists = [];  
    // initially we have object in artists[], later we have removed object from here and created it as external file or data as data.json
  }

  ngOnInit(): void{
    this.http.get<Object>('../assets/data.json').subscribe(
      data => {
        this.artists = data;
      }
    )
  }
}
