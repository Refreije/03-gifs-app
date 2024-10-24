import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor( private GifsService: GifsService){


  }

  //para no perderte Hugo, este gifs es lo que luego en el html va entre comillas
  get gifs(): Gif[] {

    return  this.GifsService.gifList;

  }


}
