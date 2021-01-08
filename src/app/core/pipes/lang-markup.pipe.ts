import { ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'langMarkup'
})
export class LangMarkupPipe implements PipeTransform {
  transform(value: any): string {
    const specials = [["<!--start-italic-->", "<!--end-italic-->"], ["<!--start-bold-->", "<!--end-bold-->"]];
    let givenString: string =  value instanceof Array ? value[0] : value;
    const returnElement = document.createElement('span');
    returnElement.textContent = givenString;

    specials.forEach(pair => {
      let startIndex: number;
      let endIndex: number;
    
      do {
        startIndex = givenString.indexOf(pair[0]);
        endIndex = givenString.indexOf(pair[1]);

        if(startIndex !== -1 && endIndex !== -1) {
          const substring = givenString.substr(startIndex, endIndex - startIndex + pair[1].length);
          const substringWithoutMarkup = substring.slice(pair[0].length, substring.length - pair[1].length);

          let returnString;

          if(pair === specials[0]) 
            returnString = substringWithoutMarkup.italics();            
            
          if(pair === specials[1])
            returnString = substringWithoutMarkup.bold();            

          givenString = givenString.replace(substring, returnString);
        };

      } while( startIndex !== -1 && endIndex !== -1)
    })

    return givenString;
  }

}
