import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';
import { TodoApiService } from '../service/todo-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  currentPage: number = 1;
  totalPages?: number;
  itemsPerPage?: any;
  isLoading:boolean = false
  constructor(private paginationService: PaginationService,private TodoApi:TodoApiService){}
  ngOnInit(): void {
    this.itemsPerPage = this.paginationService.getItemsPerPage();
    this.getTODOList()
  }
  getTODOList(){
    this.isLoading = true
    this.TodoApi.getPostData().subscribe(((res:any)=>{
      this.todos = res;
      this.isLoading = false
      this.totalPages = this.calculateTotalPages(this.todos.length); 
    }),((error:any)=>{
      this.isLoading = false
      console.error(error)
    }))
  }
  calculateTotalPages(totalCount: number): number {
    const itemsPerPage = this.paginationService.getItemsPerPage();
    return Math.ceil(totalCount / itemsPerPage);
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.getTODOList();
  }
  onItemsPerPageChange(itemsPerPage: any) {
    this.itemsPerPage = itemsPerPage;
    this.paginationService.setItemsPerPage(itemsPerPage);
    this.getTODOList();
  }
  getPaginatedtodos() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.todos.slice(startIndex, endIndex);
  }
}
