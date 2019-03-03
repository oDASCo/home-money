import {Component, Input, OnInit} from '@angular/core';
import {DASCEvent} from "../../shared/models/event.model";
import {Category} from "../../shared/models/category.model";

@Component({
  selector: 'dasc-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() events: DASCEvent[] = [];

  constructor() {
  }

  ngOnInit() {
    this.events.forEach((e) => {
      e.catName = this.categories.find(c => c.id === e.category).name;
    });
  }

  getEventClass(e) {
    return {
      label: true,
      'label-danger': e.type === 'outcome',
      'label-success': e.type === 'income'
    };
  }
}
