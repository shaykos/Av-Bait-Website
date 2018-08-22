
export class Order {
  constructor() {
    this.title = {
      h1: 'הזמנות',
      small: 'צפייה וניהול הזמנות',
      icon: 'fa-certificate'
    }

    this.router = null;
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
    console.log('router', this.router);
  }
}
