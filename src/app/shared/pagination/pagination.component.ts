import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage?: any;
  @Input() totalPages?: any;
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();
  itemsPerPage?: any;
  constructor() { 
    this.itemsPerPage = 10;
  }
  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
  onItemsPerPageChange(event: any) {
    this.itemsPerPage = event.target.value;
    this.itemsPerPageChange.emit(+this.itemsPerPage); 
  }
  get totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }
}
