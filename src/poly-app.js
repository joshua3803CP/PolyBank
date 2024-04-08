import { PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icon/iron-icon.js';




class Header extends PolymerElement{

   
static get template(){
    return html` 
    <style>
         .header{
            position: fixed;
            width:100%;
            display: flex;
            height: 100px;
            align-items:center;
            background-color: #134a88;
           
         }    
         .header.slide-up {
            top: -100px; /* Adjust as needed based on the height of your header */
         }
         .logo{
            height: 55px;
            margin-left: 100px;
         }

         .header-left{
            width: 35%;
         }
         .header-right{
            display: flex;
            width: 65%;
            justify-content:left;
         }
         
         .dropdown-container{
            display:flex;
            justify-content:center;
            margin-right:30px;
            
         }
         .dropdown{
            margin-right: 10px;
         }
         .dropbtn {
            background-color: #134a88;
            color: white;
            padding: 12px;
            font-size: 16px;
            border: none;
            border-radius: 12px;
            width: 100px;
            cursor: pointer;
        }
         .dropdown-content{
            display: none;
            position: absolute;
            background-color: #134a88;
            border-radius: 12px;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            border-radius:6px;
            z-index: 1;
         }
         .dropdown:hover .dropdown-content{
            display: block;
         }
         .dropdown-content a {
            color: white;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            font-size: 14px;

        }


         .dropdown2{
            margin-right: 10px;
         }
         .dropbtn2 {
            background-color: #134a88;
            color: white;
            padding: 12px;
            font-size: 16px;
            border: none;
            border-radius: 12px;
            width: 100px;
            cursor: pointer;
        }
         
         .dropdown-content2{
            display: none;
            position: absolute;
            background-color: #134a88;
            border-radius: 12px;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
         }
         .dropdown2:hover .dropdown-content2{
            display: block;
         }
         .dropdown-content2 a {
            color: white;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            font-size: 14px;
        }
        

         .dropdown3{
            margin-right: 10px;
         }
         .dropbtn3 {
            background-color: #134a88;
            color: white;
            padding: 12px;
            font-size: 16px;
            border: none;
            border-radius: 12px;
            width: 100px;
            cursor: pointer;
        }
         .dropdown-content3{
            display: none;
            position: absolute;
            background-color: #134a88;
            border-radius: 12px;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
         }
         .dropdown3:hover .dropdown-content3{
            display: block;
         }
      
         .dropdown-content3 a {
            color: white;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            font-size: 14px;

        }


         .dropdown4{
            margin-right: 10px;
         }
         .dropbtn4 {
            background-color: #134a88;
            color: white;
            padding: 12px;
            font-size: 16px;
            border: none;
            border-radius: 12px;
            width: 100px;
            cursor: pointer;
        }
         .dropdown-content4{
            display: none;
            position: absolute;
            background-color: #134a88;
            border-radius: 12px;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
         }
         .dropdown4:hover .dropdown-content4{
            display: block;
            
         }
         .dropdown-content4 a {
            color: white;
            padding: 12px 16px;
            text-decoration:none;
            display: block;
            font-size: 14px;
            
        }

        .btncontainer{
         display:flex;
        }
        .searchbox{
            border-radius: 16px;
            width:250px;
            height:35px;
        }
        .searchbtn{
            background-color: #134a88;
            display: flex;
            margin-right: 10px;
        }
        .loginbtn{
            background-color: #1f3e69;
            color: white;
            font-size: 16px;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            margin: 4px 2px;
            margin-right: 10px;
            cursor: pointer;
           
            width: 100px;
            
        }
        .login__panel{
            position: fixed;
            display:none;
            height:100%;
            width: 500px;
            transition: 0.3s;
            background-color:#134a88;
            z-index: 1;
            top: 0;
            right: 0;
            overflow-x: hidden;
            transition: 0.5s;
         
        }
        .login__panel.show{
            display: block; 
        }
        .login-content-container{
            top: 20px;
            left: o;
            color: white;
           display: flex;
           flex-direction:column;
           align-items:center;
           justify-content: center; /* Center content vertically */
           height: 100%; /* Take full height of the login panel */
         
         
        }
        .closebtn{
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #134a88;
            color: white;
            padding: 12px;
            font-size: 16px;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            
        }

        .carousel-container {
            height: 730px; /* Set container height to 100% */
            position: relative;
            overflow: hidden;
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
        .card-container{
            padding: 150px; 
            background-color: white;  
        }

        .main-container{
            display: flex;
            justify-content: space-evenly;
            padding-top: 20px;
            background-color:whitesmoke;
            margin-left:30px;
            margin-right:30px;
            margin-top:30px;
            margin-bottom:30px;
        }
        .content-container{
            color:#595959;
            display: block;
            max-height: 300px;
            max-width: 300px;
            background-color:whitesmoke;
        
        }
        .content{
            display: block;
        }
        .content img{
            height: 50px; 
            width: 50px;
        }
        .community-container{
            display: flex;
            position: relative;
            height:400px;
            opacity:100% ;
            justify-content:center;
            align-items: center;
            background-color:#134a88;
         
        }
        .community-container img{
            opacity: 20%;
            height:400px;
            width:100%
         
        }
        .community-content{
            position: absolute;
            padding-top:30px;
            
            color: white;
            display: block;
            justify-content: center;
            text-align:center;
            margin-left:100px;
            margin-right:100px;
        }
        .container3{
            height:200px;
            display: flex;
            padding: 30px;
            padding-left:20px;
            padding-right:20px;
            justify-content:center;
            align-items:center;
            background-color:whitesmoke;
            margin-top:30px;
            margin-bottom:30px;

        }
        .container-sub{
         
           color:#134a88;
         

        }
        .content-sub{
            margin-left:30px;
            margin-right:30px;
            margin-top:30px;
            margin-bottom:30px;
        }
        .container-body{
            width:40%;
        }

        .content-body{
            color:#595959;
            text-align:justify;
            margin-left:30px;
            margin-right:30px;
            margin-top:30px;
            margin-bottom:30px;
        }
        .container-button{
         
         
       
        }
        .content-button{
         
            margin-left:30px;
            margin-right:30px;
            margin-top:30px;
            margin-bottom:30px;
        }
        .signupbtn{
            height:50px;
            width:120px;
            background-color: #134a88;
            color: white;
        }

        .card-container1{
            display: flex;
            justify-content:center;
            align-items:center;
            background-color: white;
            padding: 20px; /* Add padding for spacing from the edges */
        }

        .card-view {
            color:#595959;
            margin-left: 10px;
            margin-right:10px;
            height:200px;
            width: 300px;
            border: 1px solid;
            border-color:grey;
            background-color: white; /* Optional: Add a light gray background to each card */
            padding: 20px; /* Add padding inside each card */
         
         }
         .footer{
            display: flex;
            height:auto;
            align-items:center;
            background-color: #134a88;
         }
         .right-footer{
            display: flex;
            margin-left:500px;
         }
         .menu{
            color: white;
            margin-right:0%;
            padding: 20px;
            display: flex;
            flex-direction:column;  
         }
         .menu-content a{
            color: white;
            display: flex;
            flex-direction:column; 
         }
         
          


        </style>
    
   
    <div class="header">
         <div class= "header-left">
               <img src="images/polyimg/first-national-bank-paris-logo-white.png" alt="Polybank logo" class= "logo">
         </div>
                     <div class="header-right">
                              <div class= "dropdown-container">
                                    <div class="dropdown">
                                    <button class="dropbtn">Personal</button>
                                       <div class="dropdown-content">
                                       <a href="#">Checking</a>
                                       <a href="#">Savings and Investments</a>
                                       <a href="#">Digital Banking</a>
                                       <a href="#">Personal Debit Cards</a>
                                       </div>
                                    </div>   
                                    <div class="dropdown2">
                                    <button class="dropbtn2">Buisness</button>
                                       <div class="dropdown-content2">
                                       <a href="#">Checking</a>
                                       <a href="#">Savings and Investments</a>
                                       <a href="#">Digital Banking</a>
                                       <a href="#">Buisness ATM's and Debit Cards</a>
                                       </div>
                                    </div>    
                                    <div class="dropdown3">
                                    <button class="dropbtn3">Lending</button>
                                       <div class="dropdown-content3">
                                       <a href="#">Personal</a>
                                       <a href="#">Mortage</a>
                                       <a href="#">Buisness</a>
                                       <a href="#">Agriculture</a>
                                       </div>
                                    </div>    
                                    <div class="dropdown4">
                                       <button class="dropbtn4">Resourses</button>
                                          <div class="dropdown-content4">
                                          <a href="#">Bank News and Highlights</a>
                                          <a href="#">Contact Us</a>
                                          <a href="#">Order Checks</a>
                                          <a href="#">Personal Debit Cards</a>
                                          </div>
                                    </div>    
                                 </div>
                           
                                    <div class="btncontainer">
                                          <div class= "searchbtn">
                                                <input class="searchbox" type="text" placeholder="Search.." name="search">
                                                <paper-icon-button icon = "search" ></paper-icon-button>
                                          </div> 
                                    
                                          <div>
                                          <button class="loginbtn" on-click="toggleLoginPanel">Login</button>
                                          </div>
                                    </div>
                            </div>
                     </div>
      </div>






      <div class="login__panel" id="loginPanel"> 
            <button class="closebtn" on-click="closeLoginPanel">X</button> <!-- Close button -->
         <!-- Added login__panel -->
        <div class="login-content-container">
                  <h3>Welcome Back !</h3>
                  <h3>Login to you Account.</h3>
                  <!-- Your login form goes here -->
                  <form>
                     <label for="username">Username or Email:</label><br>
                     <input type="text" id="username" name="username"><br>
                     <label for="password">Password:</label><br>
                     <input type="password" id="password" name="password"><br><br>
                     <input type="submit" value="Login">
                  </form>
         </div>         
      </div>


      <div class="carousel-container">
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
            </div>

            <div class="footer">
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
            </div>






            
     
          
                    
         

            
      
    `;
}

toggleLoginPanel() {
   const loginPanel = this.shadowRoot.querySelector('#loginPanel');
   loginPanel.classList.toggle('show');
}

closeLoginPanel() {
   const loginPanel = this.shadowRoot.querySelector('#loginPanel');
   loginPanel.classList.remove('show');
}

connectedCallback() {
   super.connectedCallback();
   this.startCarousel();
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

constructor() {
        super();
        this.prevScrollPos = window.pageYOffset;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('scroll', this.handleScroll);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const currentScrollPos = window.pageYOffset;
        const header = this.shadowRoot.querySelector('.header');

        if (this.prevScrollPos > currentScrollPos) {
            header.classList.remove('slide-up');
        } else {
            header.classList.add('slide-up');
        }

        this.prevScrollPos = currentScrollPos;
    }

}



customElements.define("poly-app",Header);




