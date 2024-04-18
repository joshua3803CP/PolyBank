import { PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-pages/iron-pages.js';
import './home-page.js';


import '@polymer/paper-button/paper-button.js';




class Polyapp extends PolymerElement{

   
static get template(){
    return html` 
    <style>
         
        </style>
    
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route> 

      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <home-page name= "home-page"></home-page>
            <register-page name="register-page"></register-page>  
            <user-home-page name="user-home-page"></user-home-page>
          </iron-pages>

      <!-- <div class="carousel-container">
          <div class="carousel">
              <div class="carousel-item"><img src="images/polyimg/HERO-Same-Bank-New-Name.png" alt="Image 1"  style="height: 100%; width: 100%; object-fit: cover;" ></div>
              <div class="carousel-item"><img src="images/polyimg/small-business-hero.png" alt="Image 2" style="height: 100%; width: 100%; object-fit: cover;" ></div>
              <div class="carousel-item"><img src="images/polyimg/Open-Anywhere-football-hero.png" alt="Image 3" style="height: 100%; width: 100%; object-fit: cover;"  ></div>
          </div>
          <button class="prev" onclick=prevSlide()>❮</button>
          <button class="next" onclick=nextSlide()>❯</button>
      </div>


      <div class="card-container">
        <img src="images/polyimg/0e3634c9-712e-467e-9736-a41192a0b503.png" alt="Image 1"  style="height: 100%; width: 100%; object-fit: cover;">
      </div>

      <div class="main-container">
               
                  <div class="content-container">
                    <div class="content">
                        <div><img alt="Computer icon" src="images/polyimg/monitor.png" image-id="yP6bFfhh"></div>
                        <h2>Digital Banking Tools</h2>
                        <p>Manage your money anytime – from anywhere.</p>
                        <p><a href="/personal/digital-banking" data-link-id="/personal/digital-banking" data-link-type-id="page" class="" data-disclaimer-id="null" target="_self" tabindex="0">Explore Online Tools</a></p>
                    </div>
                </div>
                <div class="content-container">
                    <div class="content">
                        <div ><img alt="Envelope icon" src="images/polyimg/contact.png" ></div>
                        <h2>Contact Us</h2>
                        <p>Have a question? Let us know how we can help.<br></p>
                        <p><a href="/contact-us" data-link-id="/contact-us" data-link-type-id="page" class="" data-disclaimer-id="null" target="_self" tabindex="0">Send a Message</a></p>
                    </div>
                </div>
                <div class="content-container">
                    <div class="content">
                        <div><img alt="Location pin icon" src="images/polyimg/placeholder.png" image-id="6fTyWoGh"></div>
                        <h2>Find a Location</h2>
                        <p>Whether you are looking for a branch or ATM, find one close to you.<br></p>
                        <p><a href="/resources/locations" data-link-id="/resources/locations" data-link-type-id="page" class="" data-disclaimer-id="null" target="_self" tabindex="0">View Our Locations</a></p>
                    </div>
                </div>
            </div>

            <div class="main-container">
               
                  <div class="content-container">
                    <div class="content">
                        <div><img alt="Computer icon" src="images/polyimg/credit-card.png" image-id="yP6bFfhh"></div>
                        <h2>Instant Issue Debit Cards</h2>
                        <p>Stop by your local branch today and pick up your custom instant issue debit card.</p>
                        <p><a href="/personal/digital-banking" data-link-id="/personal/digital-banking" data-link-type-id="page" class="" data-disclaimer-id="null" target="_self" tabindex="0">Explore Online Tools</a></p>
                    </div>
                </div>
                <div class="content-container">
                    <div class="content">
                        <div><img alt="Envelope icon" src="images/polyimg/calculator.png" ></div>
                        <h2>Financial Calculators</h2>
                        <p>Run the numbers with our helpful and interactive calculators.<br></p>
                        <p><a href="/contact-us" data-link-id="/contact-us" data-link-type-id="page" class="" data-disclaimer-id="null" target="_self" tabindex="0">Send a Message</a></p>
                    </div>
                </div>
                <div class="content-container">
                    <div class="content">
                        <div><img alt="Location pin icon" src="images/polyimg/cheque.png" image-id="6fTyWoGh"></div>
                        <h2>Order Checks</h2>
                        <p>Running low on checks? Reorder yours online today.<br></p>
                        <p><a href="/resources/locations" data-link-id="/resources/locations" data-link-type-id="page" class="" data-disclaimer-id="null" target="_self" tabindex="0">View Our Locations</a></p>
                    </div>
                </div>
            </div>

            <div class="community-container">
               <img src="images/polyimg/wide-community.jpg" alt="wide-community">
                  <div class="community-content">
                        <div>
                           <h2>Here for your Banking Needs</h2>
                           <h1>We are strong, stable, secure, and committed to the communities we serve.</h1>
                           <button style=" height: 40px; width: 180px; border:1px solid; border-color:white; color: white; background-color: transparent;">OUR COMMUNITY</button>
                        </div>
                  </div>
            </div>


            <div class="container3">
               <div class="container-sub">
                        <div class="content-sub">
                              <h2>Subscribe</h2>
                        </div>
               </div>
               <div class="container-body">
                      <div class="content-body">
                         <div>To help stay informed, just provide a few quick details about yourself and First National Bank at Paris will handle the rest.</div>
                      </div>
               </div>
               <div class="container-button">
                       <div class="content-button">
                         <button class="signupbtn">Sign Up</button>
                       </div>
               </div>
            </div> 

            <div class="card-container1">
                <div class="card-view">
                    <h2>Go fnbp</h2>
                    <p>We have a new app with new feature. This app was built with convenience in mind.</p>
                </div>

                <div class="card-view">
                    <h2>Local Loan Decisions </h2>
                    <p>At First National Bank and Community National Bank we know our customers and we know how to serve their financial needs. </p>
                </div>
                
                    <div class="card-view">
                    <h2>Let's GET SOCIAL </h2>
                    <p>Have you like our page on Facebook? We keep it updated with all new happenings at the bank.  </p>
                </div>
            </div> -->

            <!-- <div class="footer">
              <img src="images/polyimg/first-national-bank-paris-logo-white.png" alt="Polybank logo" class= "logo">

                     <div class="right-footer">
                                  <div class="menu">
                                    <h2>Company</h2>
                                       <div class="menu-content">
                                       <a href="#">History</a>
                                       <a href="#">Community</a>
                                       </div>
                                    </div> 
                                  <div class="menu">
                                    <h2>Help</h2>
                                       <div class="menu-content">
                                       <a href="#">Find a Location</a>
                                       <a href="#">Contact Us</a>
                                       <a href="#">Financial Calculators</a>
                                       </div>
                                    </div> 
                                  <div class="menu">
                                    <h2>Legal</h2>
                                       <div class="menu-content">
                                       <a href="#">Privacy Policy</a>
                                       <a href="#">Terms of Use</a>
                                       </div>
                                    </div> 
                      </div>
            </div> -->


         



            
     
          
                    
         

            
      
    `;
}

static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'home-page';
    } else if (['home-page', 'register-page', 'user-home-page'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    
  }
  _pageChanged(page) {
    switch (page) {
      case 'register-page':
        import('./register-page.js');
        break;
      case 'home-page':
        import('./home-page.js');
        break;
      case 'user-home-page':
        import('./user-home-page.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }



 

}



customElements.define("poly-app",Polyapp);




