import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Order {
  constructor(EventAggregator) {
    this.ea = EventAggregator;
    this.title = {
      h1: 'הזמנות',
      small: 'צפייה וניהול הזמנות',
      icon: 'fa-certificate'
    }

    this.router = null;
    this.currentOrder = {
      id: '',
      lawNumber: '',
      type: '',
      status:'',
      name: '',
      deductible: 0,
      address: '',
      appartment: 0,
      phone: '',
      phone2: '',
      business: '',
      etaDate: '',
      etaTime: '',
      details: ''
    }
    this.orderFields = [
      { name: 'id', readOnly: true, type:'text', title:'מזהה מערכת'},
      { name: 'lawNumber', readOnly: false, type:'text', title:'מספר תביעה'},
      { name: 'type', readOnly: false, type:'select', title:'סוג הזמנה', options:['הכשרה ביטוח','שלמה ביטוח','ביטוח שרברב פרטי','פרטי','שמאי']},
      { name: 'status', readOnly: false, type:'select', title:'סטטוס', options:['חדשה','מאושרת','בתהליך','עבודת המשך','הסתיימה']},
      { name: 'name', readOnly: false, type:'text', title:'שם לקוח'},
      { name: 'deductible', readOnly: false, type:'text', title:'השתתפות עצמית'},
      { name: 'address', readOnly: false, type:'text', title:'כתובת'},
      { name: 'appartment', readOnly: false, type:'number', title:'דירה'},
      { name: 'phone', readOnly: false, type:'text', title:'נייד'},
      { name: 'phone2', readOnly: false, type:'text', title:'טלפון נוסף'},
      { name: 'business', readOnly: false, type:'select', title:'בעל מקצוע'},
      { name: 'etaDate', readOnly: false, type:'date', title:'תאריך הגעה'},
      { name: 'etaTime', readOnly: false, type:'select', title:'שעת הגעה', options:['09:00 - 11:00','11:00 - 13:00','13:00 - 15:00','15:00 - 17:00']},
      { name: 'details', readOnly: false, type:'textarea', title:'מהות הנזק'}

    ]
  }


  configureRouter(config, router) {
    config.options.pushState = true;
    config.options.root = '/';

    config.map([
      { route: '', redirect: 'new' },
      { route: 'new', name: 'new', moduleId: './new/new', nav: true, title: 'עבודות חדשות' },
      { route: 'approved', name: 'approved', moduleId: './approved/approved', nav: true, title: 'עבודות שאושרו' },
      { route: 'in-progress', name: 'inProgress', moduleId: './in-progress/in-progress', nav: true, title: 'עבודות בתהליך' },
      { route: 'waiting', name: 'waiting', moduleId: './waiting/waiting', nav: true, title: 'עבודות המשך' },
      { route: 'done', name: 'done', moduleId: './done/done', nav: true, title: 'עבודות סגורות' }
    ]);
    this.router = router;
  }

  attached() {
    this.ea.subscribe('card', card => {
      this.currentOrder = card;
      console.log('card', this.currentOrder);
    });
  }
}
