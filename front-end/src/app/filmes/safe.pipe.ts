import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { Filme } from './model/filme';
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  dangerousVideoUrl:any;
  videoUrl: any;
  constructor(private sanitizer: DomSanitizer) { }

  transform(url:any) {

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }




}
