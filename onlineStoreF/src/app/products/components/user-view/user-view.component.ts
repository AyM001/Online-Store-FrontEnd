import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let slideIndex = 0;
    showSlides();

    // tslint:disable-next-line:typedef
    function showSlides() {
      let i;
      const slides = Array.from(document.getElementsByClassName('mySlides')as HTMLCollectionOf<HTMLElement>);
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1; }
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 1500); // Change image every 2 seconds
    }
  }

}
