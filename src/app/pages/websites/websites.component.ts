import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import {  initFlowbite } from 'flowbite';
import { isPlatformBrowser } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-websites',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './websites.component.html',
  styleUrl: './websites.component.scss'
})
export class WebsitesComponent implements  OnInit , AfterViewInit{
  title:string = "List Of Websites"
  allWebsites: any;

  constructor(
    private global: GlobalService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    initFlowbite();

    this.global.getWithToken('all-websites').subscribe({
      next:(res:any)=>{
        this.allWebsites = res.data
        console.log(res)
      },
      error: (error:any)=>{
        console.log(error.error)
      }
    })

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
            start: 'top 90%', // Start animation when logo enters the viewport
            end: 'top 40%', // Animation will end when logo reaches a certain position
            scrub: 1, // Smooth scroll effect
          },
        });
      });


      
     
    }

    
    
  }
}
