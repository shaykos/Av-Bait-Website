import {bindable} from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class AppCard {
  @bindable card;

  constructor(EventAggregator) {
    this.ea = EventAggregator;
  }

  valueChanged(newValue, oldValue) {

  }

  publishEvent(){
    this.ea.publish('card',this.card);
  }
}

