import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { RouterLink } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [HeroSectionComponent, RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit{
  title:string = "All Blogs"
  allBlogs:any

  constructor(private global: GlobalService){}
   ngOnInit(): void {
  
      this.global.getWithToken('blog').subscribe({
        next:(res:any)=>{
          this.allBlogs = res.data
          console.log(res)
        },
        error: (error:any)=>{
          console.log(error.error)
        }
      })
  
    }
}
