import { AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID, } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  title:string="About Us"

    constructor(
      @Inject(PLATFORM_ID) private platformId: Object
    ) {}



  
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

      gsap.utils.toArray('.slideright').forEach((logo:any) => {
        gsap.from(logo, {
          x: -50,
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
