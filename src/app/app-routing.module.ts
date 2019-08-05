import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { HomeComponent} from './components/home/home.component'
import { UsersComponent} from './components/users/users.component'
import { PostsComponent} from './components/posts/posts.component'
import { NewsComponent } from './components/news/news.component'
import { PostFormComponent } from './components/post-form/post-form.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'form', component: PostFormComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [

  RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
