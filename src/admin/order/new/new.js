import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class New {
  constructor(EventAggregator) {
    this.ea = EventAggregator;
    this.title = {
      h1: 'הזמנות',
      small: 'יצירה וצפייה של הזמנות עבודה חדשות',
      icon: 'fa-file-alt',
      btns: [
        { class: 'btn-success', icon: 'fa-plus-circle', text: 'חדש', openModel:'addOrEditOrder' }
      ]
    }

    this.filters = {
      lawNumber: '',
      name: '',
      business: '',
      address: '',
      type: ''
    }
  }

  attached() {
    this.cards = [
      {
        id: '1',
        lawNumber: '123456789',
        type: 'שלמה ביטוח', status: '',
        name: 'ישראל ישראלי',
        deductible: 780,
        address: 'החלוץ 82, רעננה',
        appartment: 12,
        phone: '054-5726662',
        phone2: '',
        business: 'אסי איסטלציה',
        etaDate: new Date('2018-07-22'),
        etaTime: '9:00 - 11:00',
        details: 'יש נזילה לשכן'
      },
      {
        id: '2',
        lawNumber: '123456789',
        type: 'הכשרה ביטוח', status: '',
        name: 'ישראל ישראלי',
        deductible: 780,
        address: 'החלוץ 82, רעננה',
        appartment: 12,
        phone: '054-5726662',
        phone2: '',
        business: 'אסי איסטלציה',
        etaDate: new Date('2018-07-22'),
        etaTime: '9:00 - 11:00',
        details: 'יש נזילה לשכן'
      },
      {
        id: '12', lawNumber: '123456789',
        type: 'הכשרה ביטוח', status: '',
        name: 'ישראל ישראלי',
        deductible: 780,
        address: 'החלוץ 82, רעננה',
        appartment: 12,
        phone: '054-5726662',
        phone2: '',
        business: 'אסי איסטלציה',
        etaDate: new Date('2018-07-22'),
        etaTime: '9:00 - 11:00',
        details: 'יש נזילה לשכן'

      },
      {
        id: '3', lawNumber: '123456789',
        type: 'הכשרה ביטוח', status: '',
        name: 'ישראל ישראלי',
        deductible: 780,
        address: 'החלוץ 82, רעננה',
        appartment: 12,
        phone: '054-5726662',
        phone2: '',
        business: 'אסי איסטלציה',
        etaDate: new Date('2018-07-22'),
        etaTime: '9:00 - 11:00',
        details: 'יש נזילה לשכן'
      },
      {
        id: '4', lawNumber: '123456789',
        type: 'הכשרה ביטוח', status: '',
        name: 'ישראל ישראלי',
        deductible: 780,
        address: 'החלוץ 82, רעננה',
        appartment: 12,
        phone: '054-5726662',
        phone2: '',
        business: 'אסי איסטלציה',
        etaDate: new Date('2018-07-22'),
        etaTime: '9:00 - 11:00',
        details: 'יש נזילה לשכן'
      },
      {
        id: '5', lawNumber: '123456789',
        type: 'הכשרה ביטוח', status: '',
        name: 'ישראל ישראלי',
        deductible: 780,
        address: 'החלוץ 82, רעננה',
        appartment: 12,
        phone: '054-5726662',
        phone2: '',
        business: 'אסי איסטלציה',
        etaDate: new Date('2018-07-22'),
        etaTime: '9:00 - 11:00',
        details: 'יש נזילה לשכן'
      },
      {
        id: '15', lawNumber: '123456789',
        type: 'הכשרה ביטוח', status: '',
        name: 'ישראל ישראלי',
        deductible: 780,
        address: 'החלוץ 82, רעננה',
        appartment: 12,
        phone: '054-5726662',
        phone2: '',
        business: 'אסי איסטלציה',
        etaDate: new Date('2018-07-22'),
        etaTime: '9:00 - 11:00',
        details: 'יש נזילה לשכן'
      },
      {
        id: '10', lawNumber: '123456789',
        type: 'הכשרה ביטוח', status: '',
        name: 'ישראל ישראלי',
        deductible: 780,
        address: 'החלוץ 82, רעננה',
        appartment: 12,
        phone: '054-5726662',
        phone2: '',
        business: 'אסי איסטלציה',
        etaDate: new Date('2018-07-22'),
        etaTime: '9:00 - 11:00',
        details: 'יש נזילה לשכן'
      }
    ]
    this.resetFilter();
    this.showAllCards();
  }

  showAllCards() {
    this.cards.map(card => {
      card.toShow = true;
    });
  }

  resetFilter(thisFilter) {
    this.keys = new Array();
    for (let key in this.filters) this.keys.push(key);
    if (thisFilter >= 0)
      this.temp = this.filters[this.keys[thisFilter]];
    for (let index = 0; index < this.keys.length; index++)
      this.filters[this.keys[index]] = '';
    if (this.temp)
      this.filters[this.keys[thisFilter]] = this.temp;
  }

  filterCards(filter) {
    this.resetFilter(filter);
    this.showAllCards();
    this.cards.map(card => {
      if (card[this.keys[filter]].indexOf(this.filters[this.keys[filter]]) != -1) card.toShow = true;
      else card.toShow = false;
    });
  }
}


