import { Component, EventEmitter, Output } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output()
  public onClickTag : EventEmitter<string> = new EventEmitter();


  constructor( private gifsService : GifsService) {}

  //public tagHistory : string[] = this.gifsService.tagsHistory;

  //el ngfor reconoce tags como si fuese una variable lo cual va muy bien
  get tags(): string[]{

    return this.gifsService.tagsHistory;

  }

  searchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }


}
