import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private itemsPerPageKey = 'itemsPerPage';
  private defaultItemsPerPage = 10;
  constructor() { }
  getItemsPerPage(): number {
    const itemsPerPage = localStorage.getItem(this.itemsPerPageKey);
    return itemsPerPage ? +itemsPerPage : this.defaultItemsPerPage;
  }

  setItemsPerPage(itemsPerPage: number): void {
    console.log("TEll")
    localStorage.setItem(this.itemsPerPageKey, itemsPerPage.toString());
  }
}
