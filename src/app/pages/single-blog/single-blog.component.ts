import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.scss'
})
export class SingleBlogComponent implements OnInit{

  slug:any
  singleBlog:any
  ngOnInit(): void {
    
  }

}
