import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import '@polymer/paper-input/paper-input.js'

class Header extends PolymerElement{

    static get template(){
        return html`

        <style>
        .header{
           
            width:100%;
            display: flex;
            height: 100px;
            align-items:center;
            background-color: #134a88;
            z-index:1000 ;
            margin-top:0;
         }    
         .header.slide-up {
            top: -100px; /* Adjust as needed based on the height of your header */
         }
         .logo{
            height: 55px;
            margin-left: 100px;
            cursor: pointer;
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
            cursor: pointer;
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
            box-shadow: 0 10px 20px 0 black;
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
            background-color: white;
            color: white;
            padding: 12px;
            font-size: 16px;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            
        }
        paper-input{
      
         --primary-text-color: white;
         --paper-input-container-color: white;
        }

    
        </style>


        <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
        
<div class="header">
         <div class= "header-left">
               <img src="images/polyimg/first-national-bank-paris-logo-white.png" alt="Polybank logo" class= "logo" on-click="handle_gotohome">
         </div>
                     <div class="header-right">
                              <div class= "dropdown-container">
                                    <div class="dropdown">
                                    <button class="dropbtn">Personal</button>
                                       <div class="dropdown-content">
                                       <a on-click="handleCheckingClick">Checking</a>
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
           <button class="closebtn" on-click="closeLoginPanel">close</button>
        <div class="login-content-container">
                  <h3>Welcome Back !</h3>
                  <h3>Login to you Account.</h3>
                  <!-- Your login form goes here -->
                  <form>
                     <label for="username">Username:</label><br>
                     <paper-input class="paperinp" id="username" name="username"></paper-input>
                     <label for="password">Password:</label><br>
                     <paper-input class="paperinp" type="password" id="password" name="password"></paper-input><br><br>
                     <paper-button raised type="submit" on-click="handleLogin">login</paper-button>
                     <paper-button raised type="submit" on-click="handleRegister">Register</paper-button>
                  </form>
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

   handleRegister(){
      this.set('routeData.page', 'register-page');
  }
//   handle_gotohome(){
//       this.set('routeData.page', 'home-page');
//   }
   handleLogin() {
      const username = this.shadowRoot.querySelector('#username').value;
      const password = this.shadowRoot.querySelector('#password').value;

      // Encrypt the password using SHA-256
      

      // Send a request to check if the user exists with the provided username and encrypted password
      fetch('http://localhost:3000/Users?Username=' + username + '&Password=' + password)
         .then(response => {
            if (response.ok) {
                  return response.json();
            } else {
                  throw new Error('Network response was not ok.');
            }
         })
         .then(data => {
            // If the user exists, navigate to a new page (e.g., home page)
            if (data.length > 0) {
                  this.set('routeData.page', 'user-home-page');
            } else {
                  // If the user does not exist, you can display an error message or handle it accordingly
                  console.error('User not found.');
            }
         })
         .catch(error => {
            console.error('Error checking user:', error);
         });
   }

   handle_gotohome() {
      this.set('routeData.page', 'home-page');
   }

   handleCheckingClick() {
      // Update route data to navigate to the "checking-page"
      this.set('routeData.page', 'checking-page');
  }
}


customElements.define("my-header",Header);