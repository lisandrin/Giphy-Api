import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  gifs: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  search(searchValue: string){
    if (searchValue !== '') {
      this.dataService.searchGifs(searchValue);
    }
  }
}
