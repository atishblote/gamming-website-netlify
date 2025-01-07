import {
  AfterViewInit,
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { isPlatformBrowser, SlicePipe } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  allWebsites: any;
  allBlogs: any;
  allPromotions: any;
  allMatches: any;

  allData: any;
  constructor(
    private global: GlobalService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Define Observables
    const request1 = this.global.getWithToken('all-websites');
    const request2 = this.global.getWithToken('blog');
    const request3 = this.global.getWithToken('all-promotions');
    const request4 = this.global.getWithToken('all-matches');

    // Combine Observables with forkJoin
    forkJoin([request1, request2 , request3 , request4]).subscribe({
      next: ([res1, res2 , res3, res4]: any) => {
        this.allWebsites = res1.data;
        this.allBlogs = res2.data;
        this.allPromotions = res3.data;
        this.allMatches = res4.data;
      },
      error: (err) => console.error('Error:', err),
    });
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    if (isPlatformBrowser(this.platformId)) {
      // Select all elements with the class '.slideup' and create an animation for each
      gsap.utils.toArray('.slideup').forEach((logo:any) => {
        gsap.from(logo, {
          y: 50,
          opacity: 0, // Start from 0 opacity (invisible)
          duration: 0.5,
          scrollTrigger: {
            trigger: logo, // Trigger animation for each logo individually
            start: 'top 80%', // Start animation when logo enters the viewport
            end: 'top 40%', // Animation will end when logo reaches a certain position
            scrub: 1, // Smooth scroll effect
          },
        });
      });


      gsap.utils.toArray('.slideupNotS').forEach((logo:any) => {
        gsap.from(logo, {
          y: 50,
          opacity: 0, // Start from 0 opacity (invisible)
          duration: 0.5,
          scrollTrigger: {
            trigger: logo, // Trigger animation for each logo individually
            start: 'top 80%', // Start animation when logo enters the viewport
            end: 'top 40%', // Animation will end when logo reaches a certain position
            // scrub: 1, // Smooth scroll effect
          },
        });
      });


      gsap.utils.toArray('.slidleft').forEach((logo:any) => {
        gsap.from(logo, {
          x: 50,
          opacity: 0, // Start from 0 opacity (invisible)
          duration: 0.7,
          scrollTrigger: {
            trigger: logo, // Trigger animation for each logo individually
            start: 'top 80%', // Start animation when logo enters the viewport
            end: 'top 20%', // Animation will end when logo reaches a certain position
            // scrub: 1, // Smooth scroll effect
          },
        });
      });



    }

    
    
  }
}
