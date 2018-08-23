import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Waiting {
  constructor(EventAggregator) {
    this.ea = EventAggregator;
    this.title = {
      h1: 'הזמנות',
      small: 'צפייה ועדכון של עבודות המשך',
      icon: 'fa-clock',
      btns: [
        // { class: 'btn-success', icon: 'fa-plus-circle', text: 'חדש', openModel: 'addOrEditOrder' },
        { class: 'btn-info', icon: 'fa-filter', text: 'סינון', showFilter: true }
      ]
    }

    this.filters = [
      { name: 'lawNumber', value: '', placeholder: 'מספר תביעה' },
      { name: 'name', value: '', placeholder: 'לקוח' },
      { name: 'business', value: '', placeholder: 'בעל מקצוע' },
      { name: 'address', value: '', placeholder: 'כתובת' },
      { name: 'type', value: '', placeholder: 'סוג הזמנה' }
    ]
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
    this.showAllCards();

    this.ea.subscribe('thisFilter', filter => {
      this.filterCards(filter);
    });
  }

  showAllCards() {
    this.cards.map(card => {
      card.toShow = true;
    });
  }

  filterCards(filter) {
    debugger;
    this.showAllCards();
    this.cards.map(card => {
      if (card[filter.name].indexOf(filter.value) != -1) card.toShow = true;
      else card.toShow = false;
    });
  }
}





