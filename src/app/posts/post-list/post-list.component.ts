import { Component, ElementRef, OnInit } from '@angular/core';
import { PostApiService } from '../service/post-api.service';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts: any[] = [];
  currentPage: number = 1;
  totalPages?: number;
  itemsPerPage?: any;
  isLoading:boolean = false
  constructor(private PostApi : PostApiService,private paginationService: PaginationService){
   
  }
  ngOnInit(): void {
    this.itemsPerPage = this.paginationService.getItemsPerPage();
   this.getDataList()
  }

  getDataList(){
    this.isLoading = true
    this.PostApi.getPostData().subscribe(((res:any)=>{
      this.posts = res;
      this.isLoading = false
      this.totalPages = this.calculateTotalPages(this.posts.length); 
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
    this.getDataList();
  }
  onItemsPerPageChange(itemsPerPage: any) {
    this.itemsPerPage = itemsPerPage;
    this.paginationService.setItemsPerPage(itemsPerPage);
    this.getDataList();
  }
  getPaginatedPosts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.posts.slice(startIndex, endIndex);
  }
}
