import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  title:string = "Contact Us"
  // itemList = sign(this.title);


}
