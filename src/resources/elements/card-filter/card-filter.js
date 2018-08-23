import { bindable } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class CardFilter {
  @bindable filters;

  constructor(EventAggregator) {
    this.ea = EventAggregator;
  }

  attached() {
    this.ea.subscribe('showFilter',showFilter =>{
      this.showFilter = showFilter;
    });
  }

  valueChanged(newValue, oldValue) {

  }

  filterCards(filter) {
    this.resetFilter(filter);
    this.ea.publish('thisFilter', filter);
  }

  resetFilter(thisFilter) {
    this.filters.map(filter =>{
      if(filter.name != thisFilter.name)
        filter.value = '';
    });
  }
}

