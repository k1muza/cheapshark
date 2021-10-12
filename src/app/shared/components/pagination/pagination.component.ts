import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  @Input() totalItems: number;
  @Input() pageNumber: number;
  @Input() pageSize: number;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter()

  public totalPages: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // Update pageNumber on changes

    this.totalPages = Math.ceil(this.totalItems / this.pageSize)
  }

  hasNextPage(): boolean {
    return this.totalPages > this.pageNumber
  }

  hasPreviousPage(): boolean {
    return this.pageNumber > 1
  }

  onPageChanged(pageNumber: number): void {

    this.pageChanged.emit(pageNumber)
  }

}
