import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";


class Carousel extends PolymerElement{

    static get template(){
        return html`

        <style>
        .carousel-container {
            height: 730px; /* Set container height to 100% */
            position:relative;
            overflow:hidden;
            width:100%;
            background-color: white;
        }

        .carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
            height: auto; /* Set carousel height to 100% */
            width: 100%;
            object-fit:cover;
        }

        .carousel-item {
            width: 100%;
            flex: 0 0 auto;
            height: 100%; /* Set item height to 100% */
         
        }

         /* Carousel animation */
        @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
        }

        /* Buttons */
        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 18px;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 10px;
            border: none;
            z-index: 1;
        }

        .prev { left: 0; }
        .next { right: 0; }

        /* Hide arrows on hover */
        .carousel-container:hover .prev, .carousel-container:hover .next {
            opacity: 0.5;
        }

        </style>

        <div class="carousel-container">
          <div class="carousel">
              <div class="carousel-item"><img src="images/polyimg/HERO-Same-Bank-New-Name.png" alt="Image 1"  style="height: 100%; width: 100%; object-fit: cover;" ></div>
              <div class="carousel-item"><img src="images/polyimg/small-business-hero.png" alt="Image 2" style="height: 100%; width: 100%; object-fit: cover;" ></div>
              <div class="carousel-item"><img src="images/polyimg/Open-Anywhere-football-hero.png" alt="Image 3" style="height: 100%; width: 100%; object-fit: cover;"  ></div>
          </div>
          <button class="prev" onclick=prevSlide()>❮</button>
          <button class="next" onclick=nextSlide()>❯</button>
      </div>
        
        `;

    }
    startCarousel() {
        const carousel = this.shadowRoot.querySelector('.carousel');
        const carouselItems = this.shadowRoot.querySelectorAll('.carousel-item');
        let currentIndex = 0;
     
        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        };
     
        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        };
     
        setInterval(nextSlide, 3000); // Change slide every 3 seconds
     }
     connectedCallback() {
        super.connectedCallback();
        this.startCarousel();
     }

}  
customElements.define("my-carousel",Carousel);


