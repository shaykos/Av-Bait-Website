import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class PageHeader {
  @bindable title;
  @bindable small;
  @bindable icon;
  @bindable btns;

  constructor(EventAggregator){
    this.ea = EventAggregator;
    
    this.showFilter = false;
  }

  valueChanged(newValue, oldValue) {

  }

  search(){
    this.ea.publish('search',this.searchData);
  }

  toggleFilter(btn){
    this.showFilter = !this.showFilter;
    this.ea.publish('showFilter',this.showFilter);
  }
}

