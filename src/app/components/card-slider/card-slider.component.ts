//https://www.testkarts.com/blog/angular-horizontal-card-scroll-with-arrow
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatCardModule],
  styleUrls: ['./card-slider.component.scss'],
})
export class CardSliderComponent {
  @ViewChild('scrl') scrl: ElementRef | undefined;
  @Input() title: string = '';

  scrollX = 0;
  scrollEnd = false;

  slide(shift: number) {
    if (this.scrl) {
      this.scrl.nativeElement.scrollBy({
        left: shift,
        behavior: 'smooth',
      });

      this.scrollX += shift;
      this.scrollCheck();
    }
  }

  scrollCheck() {
    if (this.scrl) {
      this.scrollX = this.scrl.nativeElement.scrollLeft;
      this.scrollEnd =
        Math.floor(
          this.scrl.nativeElement.scrollWidth -
            this.scrl.nativeElement.scrollLeft
        ) <= this.scrl.nativeElement.offsetWidth;
    }
  }
}
