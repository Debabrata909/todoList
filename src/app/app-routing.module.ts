import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }, // Redirect to posts by default
  { path: '**', redirectTo: '/posts' } // Handle any other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
