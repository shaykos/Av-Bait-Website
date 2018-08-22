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
        { class: 'btn-success', icon: 'fa-plus-circle', text: 'חדש' }
      ]
    }
  }

  attached() {
    this.cards = [
      {
        id: '1',
        lawNumber: '123456789',
        type: 'הכשרה ביטוח',
        name: 'ישראל ישראלי',
        deductible: 780,
        city: 'רעננה',
        address: 'החלוץ 82',
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
        type: 'הכשרה ביטוח',
        name: 'ישראל ישראלי',
        deductible: 780,
        city: 'רעננה',
        address: 'החלוץ 82',
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
        type: 'הכשרה ביטוח',
        name: 'ישראל ישראלי',
        deductible: 780,
        city: 'רעננה',
        address: 'החלוץ 82',
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
        type: 'הכשרה ביטוח',
        name: 'ישראל ישראלי',
        deductible: 780,
        city: 'רעננה',
        address: 'החלוץ 82',
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
        type: 'הכשרה ביטוח',
        name: 'ישראל ישראלי',
        deductible: 780,
        city: 'רעננה',
        address: 'החלוץ 82',
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
        type: 'הכשרה ביטוח',
        name: 'ישראל ישראלי',
        deductible: 780,
        city: 'רעננה',
        address: 'החלוץ 82',
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
        type: 'הכשרה ביטוח',
        name: 'ישראל ישראלי',
        deductible: 780,
        city: 'רעננה',
        address: 'החלוץ 82',
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
        type: 'הכשרה ביטוח',
        name: 'ישראל ישראלי',
        deductible: 780,
        city: 'רעננה',
        address: 'החלוץ 82',
        appartment: 12,
        phone: '054-5726662',
        phone2: '',
        business: 'אסי איסטלציה',
        etaDate: new Date('2018-07-22'),
        etaTime: '9:00 - 11:00',
        details: 'יש נזילה לשכן'
      }
    ]
    this.resetSearch();
    this.showCards = this.cards;
  }

  resetSearch() {
    this.searchByLawNumber = '';
    this.searchByName = '';
    this.searchByBusiness = '';
    this.searchByAddress = '';
    this.searchByType = '';
  }

  filterCards() {
    this.showCards = new Array();
    if (this.searchByLawNumber == '' && this.searchByName == '' && this.searchByBusiness == '' && this.searchByAddress == '' && this.searchByType == '')
      this.showCards = this.cards;
    else {
      if (this.searchByAddress != '')
        this.cards.map(card => {
          let fullAddress = card.city + ' ' + card.address;
          if (fullAddress.indexOf(this.searchByAddress) != -1) this.showCards.push(card);
        });
        
    }

  }
}


