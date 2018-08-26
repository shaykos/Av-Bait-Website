import { bindable } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class SideBar {
  @bindable links;
  @bindable views;

  constructor(EventAggregator) {
    this.ea = EventAggregator;
  }

  valueChanged(newValue, oldValue) {

  }

  setView(v, s) {
    let view = { parent: v, child: s };
    this.ea.publish('view', view);
  }
}

