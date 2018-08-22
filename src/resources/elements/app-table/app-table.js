import {bindable} from 'aurelia-framework';

export class AppTable {
  @bindable headers;
  @bindable rows;

  valueChanged(newValue, oldValue) {

  }
}




/*     this.data = {
      headers:[
        '#',
        'Header',
        'Header',
        'Header',
        'Header'
      ],
      rows:[
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5']
      ]
    } */


