
//import { Router } from 'aurelia-router';

export class App {
  constructor() {
    this.router = null;
  }

  configureRouter(config, router) {
    config.title = 'אב הבית';
    config.options.pushState = true;
    config.options.root = '/';

    const handleUnknownRoutes = (instruction) => {
      return { route: 'not-found', redirect: 'dashboard' };
    }

    config.mapUnknownRoutes(handleUnknownRoutes);

    config.map([
      { route: 'dashboard', redirect: 'dashboard' },
      { route: '', name: 'dashboard', moduleId: './admin/dashboard/dashboard', title: 'ראשי', nav: true },
      { route: 'orders', name: 'order', moduleId: './admin/order/order', title: 'הזמנות', nav: true },
      { route: 'business', name: 'business', moduleId: './admin/business/business', title: 'בעלי מקצוע', nav: true },
      { route: 'calendars', name: 'calendar', moduleId: './admin/calendar/calendar', title: 'יומנים', nav: true },
      { route: 'forms', name: 'forms', moduleId: './admin/forms/forms', title: 'טפסים', nav: true },
      { route: 'reports', name: 'report', moduleId: './admin/report/report', title: 'דוחות', nav: true },
      { route: 'pricing', name: 'pricing', moduleId: './admin/pricing/pricing', title: 'מחירון', nav: true }
    ]);

    this.router = router;
  }
}
