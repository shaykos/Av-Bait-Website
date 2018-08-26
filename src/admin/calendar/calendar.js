
import 'fullcalendar';
import 'fullcalendar-scheduler';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Calendars {
  constructor(EventAggregator) {
    this.ea = EventAggregator;

    this.title = {
      h1: 'יומנים',
      small: 'צפייה בכל העבודות',
      icon: 'fa-calendar-alt'
    }

    this.views = [
      {
        name: 'מרכז', 
        subs: [
          { name: 'תל אביב' },
          { name: 'רמת גן' },
          { name: 'גבעתיים' },
          { name: 'בני ברק' },
          { name: 'בקעת אונו' },
          { name: 'פתח תקווה' },
          { name: 'חולון' },
          { name: 'בת ים' }
        ]
      },
      {
        name: 'שפלה', 
        subs: [
          { name: 'מודיעין' },
          { name: 'רמלה' },
          { name: 'לוד' },
          { name: 'גדרה' },
          { name: 'רחובות' },
          { name: 'ראשון לציון' },
          { name: 'אשדוד' },
          { name: 'יבנה' }
        ]
      },
      {
        name: 'שרון', 
        subs: [
          { name: 'זכרון יעקב' },
          { name: 'חדרה' },
          { name: 'אור עקיבא' },
          { name: 'נתניה' },
          { name: 'הרצליה' },
          { name: 'רמת השרון' },
          { name: 'רעננה' },
          { name: 'כפר סבא' },
          { name: 'הוד השרון' }
        ]
      },
      {
        name: 'חיפה', 
        subs: [
          { name: 'חיפה' },
          { name: 'טירת הכרמל' },
          { name: 'קריות' },
          { name: 'עכו' },
          { name: 'נהריה' },
          { name: 'מעלות' }
        ]
      },
      {
        name: 'צפון', 
        subs: [
          { name: 'טבריה' },
          { name: 'מגדל העמק' },
          { name: 'בית שאן' },
          { name: 'עפולה' }
        ]
      },
      {
        name: 'דרום', 
        subs: [
          { name: 'אשקלון' },
          { name: 'קריית גת' },
          { name: 'באר שבע' },
          { name: 'אופקים' },
          { name: 'שדרות' },
          { name: 'נתיבות' },
          { name: 'ערד' },
          { name: 'אילת' }
        ]
      },
      {
        name: 'ירושלים', 
        subs: [
          { name: 'ירושלים' },
          { name: 'מעלה אדומים' },
          { name: 'מבשרת' },
          { name: 'בית שמש' }
        ]
      }

    ]


  }

  attached() {
    this.ea.subscribe('view', view => {
      this.title.h1 = view.parent.name;
      this.title.small = view.child.name;
    });
    this.setCalendar();

  }

  setCalendar() {
    $('#calendar').fullCalendar({
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      isRTL: true,
      locale: 'he',
      /* monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
      monthNamesShort: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
      dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
      dayNamesShort: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'], */
      timeFormat: 'H(:mm)',
      defaultView: 'month',
      eventLimit: true, // allow "more" link when too many events
      events: 'https://fullcalendar.io/demo-events.json?overload-day',
      header: {
        //center: 'month,week',
        center: 'month,week,day',
      },
      views: {
        week: {
          type: 'agendaDay',
          duration: { days: 7 }
        },
        day: {
          type: 'agendaDay',
          duration: { days: 1 }
        },
        month: {
          eventLimit: 4 // adjust to 6 only for agendaWeek/agendaDay
        }
      },
      buttonText: {
        today: 'היום',
        month: 'חודש',
        week: 'שבוע',
        day: 'יום'
      },
      businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [0, 1, 2, 3, 4], // Monday - Thursday

        start: '09:00', // a start time (10am in this example)
        end: '20:00', // an end time (6pm in this example)
      },
      navLinks: true,
      navLinkDayClick: function (date, jsEvent) {
        console.log('day', date.format()); // date is a moment
        console.log('coords', jsEvent.pageX, jsEvent.pageY);
        $('#calendar').fullCalendar('changeView', 'agendaDay')
        $('#calendar').fullCalendar('gotoDate', date);
      },
      eventClick: function (calEvent, jsEvent, view) {
        $('#modalTitle').html(calEvent.title);
        //$('#modalBody').html(calEvent.description);
        //$('#eventUrl').attr('href', calEvent.url);
        $('#start').html(calEvent.start.format('HH:MM'));
        if (calEvent.end)
          $('#end').html(calEvent.end.format('HH:MM'));
        console.log('calEvent', calEvent);
        $('#fullCalModal').modal();
      },
    });
  }
}
