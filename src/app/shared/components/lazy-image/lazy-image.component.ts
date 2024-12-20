import { Component ,Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;
  ngOnInit(){
    if(!this.url) throw new Error('url property is requeired');

      }

    onLoad(){
      setTimeout(() => {
      console.log('image loaded');
      this.hasLoaded = true;
    },1000);
    }
}
