import { Component } from '@angular/core';
import { Post } from './post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feisbuc-pierro';
   postList: Array<Post> = new Array<Post>()

  invia(userName: HTMLInputElement, userPost: HTMLInputElement) {
    let newPost = new Post(userName.value, userPost.value)
    this.postList.push(newPost)
  }
}
