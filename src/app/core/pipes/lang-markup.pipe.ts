import { ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'langMarkup'
})
export class LangMarkupPipe implements PipeTransform {
  transform(value: any): any {
    const specials = [["<i>", "</i>"], ["<b>", "</b>"]];
    let stringToReturn: string =  value instanceof Array ? value[0] : value;

    specials.forEach(pair => {
      let startIndex: number;
      let endIndex: number;
    
      do {
        startIndex = stringToReturn.indexOf(pair[0]);
        endIndex = stringToReturn.indexOf(pair[1]);

        if(startIndex !== -1 && endIndex !== -1) {
          const substring = stringToReturn.substr(startIndex, endIndex - startIndex + pair[1].length);
          let substringWithoutMarkup = substring.slice(pair[0].length, substring.length - pair[1].length);

          substringWithoutMarkup = substringWithoutMarkup.fontcolor("red");

          stringToReturn = stringToReturn.replace(substring, substringWithoutMarkup);
        };

      } while( startIndex !== -1 && endIndex !== -1)
    })

    return stringToReturn;
  }

}
