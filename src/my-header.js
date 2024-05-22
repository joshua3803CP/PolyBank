import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import '@polymer/paper-input/paper-input.js'
import '@polymer/iron-label/iron-label.js'

class Header extends PolymerElement{

    static get properties() {
        return {
            hideLoginbutton: {
                type: Boolean,
                value: false 
            },
            hideUsername: {
                type: Boolean,
                value: true 
            },
            hideLogoutbutton: {
                type: Boolean,
                value: true
            },
            registrationSuccess: {
                type: Boolean,
                value: false
            }
            
            
            
        };
    }


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
            margin-left: 70px;
            cursor: pointer;
         }

         .header-left{
            width: 30%;
         }
         .header-right{
            display: flex;
            width: 70%;
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
        .dropdown-content a:hover{
           background-color:  #1f3e69          ;
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
      
        .login__panel {
         position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(19, 74, 136, 0.5); /* Adjust the alpha value (0.5 in this case) to change the opacity */
          z-index: 1300;
         display: none;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         padding: 20px;
         box-sizing: border-box;
}
        .login__panel.show{
            display: block; 
        }
        .content-container{
            background-color:#134a88;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 10px 20px 0 black;
            
            height:80%;
            width: 500px;
        }
        .login-content-container{
            top: 20px;
            left: 0;
            color: white;
           display: flex;
           flex-direction:column;
           align-items:center;
           justify-content:; /* Center content vertically */
           height: 100%; /* Take full height of the login panel */
         
         
        }
        .card{
            display: flex;
                width:400px;
                background-color: #134a88;
                justify-content:center;
        }
        .card-content{
                color: white;
                display:flex;
                flex-direction:column;
                justify-content:center;
              
            }
        
        paper-input     {
                color: white;
            }
            .registerbtn{
            background-color: #1f3e69;
            color: white;
            font-size: 16px;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            margin-left: 100px;
            cursor: pointer;
            width: 100px;

            }
        .login{
            display: none;
        }
        .login.show{
            display: block; 
        }
        .register{
            display: none;
        }
        .register.show{
            display: block; 
        }
        .closebtn{
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #1f3e69;
            color: white;
            font-size: 14px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            
        }
        paper-input{
      
         --primary-text-color: white;
         --paper-input-container-color: white;
        }
        paper-button     {
                color: white;
            }
            iron-label{
                color: white;
            }

    
        </style>


        <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
        
<div class="header">
         <div class= "header-left">
               <img src="images/polyimg/first-national-bank-paris-logo-white.png" alt="Polybank logo" class= "logo" >
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
                                    <div class="dropdown">
                                    <button class="dropbtn">Buisness</button>
                                       <div class="dropdown-content">
                                       <a href="#">Checking</a>
                                       <a href="#">Savings and Investments</a>
                                       <a href="#">Digital Banking</a>
                                       <a href="#">Buisness ATM's and Debit Cards</a>
                                       </div>
                                    </div>    
                                    <div class="dropdown">
                                    <button class="dropbtn">Lending</button>
                                       <div class="dropdown-content">
                                       <a href="#">Personal</a>
                                       <a href="#">Mortage</a>
                                       <a href="#">Buisness</a>
                                       <a href="#">Agriculture</a>
                                       </div>
                                    </div>    
                                    <div class="dropdown">
                                       <button class="dropbtn">Resourses</button>
                                          <div class="dropdown-content">
                                          <a href="#">Bank News and Highlights</a>
                                          <a href="#">Contact Us</a>
                                          <a href="#">Order Checks</a>
                                          <a href="#">Personal Debit Cards</a>
                                          </div>
                                    </div>    
                                    <div class="dropdown">
                                       <button class="dropbtn" on-click="handleDashboardClick">Dashboard</button>
                                          
                                    </div>    
                                 </div>
                           
                                    <div class="btncontainer">
                                          <div class= "searchbtn">
                                                <input class="searchbox" type="text" placeholder="Search.." name="search">
                                                <paper-icon-button icon = "search" ></paper-icon-button>
                                          </div> 
                                    
                                          <div>
                                          <paper-button raised on-click="toggleLoginPanel" hidden$="[[hideLoginbutton]]">Login</paper-button>
                                          <iron-label name="hideUsername" id="hideUsername" hidden$="[[hideUsername]]">[[username]]</iron-label>
                                          <paper-button raised on-click="handlelogout" hidden$="[[hideLogoutbutton]]">Logout</paper-button>
                                          </div>
                                    </div>
                            </div>
                     </div>
      </div>
      
      <div class="login__panel" id="loginPanel"> 
         <div class="content-container">
           <button class="closebtn" >X</button>
         <div class="login-content-container">
            <div class= "login" id="login">
                 <h3>   Welcome Back !</h3>
                  <h3>   Login to you Account.</h3>
                  <br>
                  <br>
                 
                  <form>
                     <label for="username">Username:</label><br>
                     <paper-input class="paperinp" id="username" name="username"></paper-input>
                     <label for="password">Password:</label><br>
                     <paper-input class="paperinp" type="password" id="password" name="password"></paper-input><br><br>
                     <paper-button raised type="submit" on-click="handleLogin">login</paper-button>
                     <paper-button raised type="submit" on-click="handleRegister">Register</paper-button>
                  </form>
                  </div>
                  <div class= "register" id="register">
                   <paper-card class= "card" >
                     <div class = "card-content">  
                <h2>Register With First National</h2>
                <form id="registerForm" on-submit="register">
                            <iron-icon icon="account-circle" prefix></iron-icon>
                            <paper-input id="username" label="User Name"></paper-input>  
                            <iron-icon icon="lock" prefix></iron-icon>
                            <paper-input id="password" label="Password"></paper-input> 
                            <iron-icon icon="mail" prefix></iron-icon>
                            <paper-input id="email" label="E-mail"></paper-input>  
                            <iron-icon icon="perm-phone-msg" prefix></iron-icon>
                            <paper-input id="phone" label="Phone Number"></paper-input>
                            <button class="registerbtn" type="submit">Register</button>
                        </form>
                        <div class="success-message" hidden$="[[!registrationSuccess]]">
                            User registered successfully. <a href="/">Go back to home page</a>
                       </div>
        </div>
          </paper-card>
        </div>
                  </div>    
          
     
        </div>
      </div>
      
        `;
    }


    ready() {
        super.ready();
        // Add any additional initialization code here
    }

    connectedCallback() {
      super.connectedCallback();

      const currentUser = sessionStorage.getItem('currentUser');
        if (currentUser) {
            // Set the username and show the iron-label
            this.username = currentUser;
            
        }
      
        const isLoggedin = sessionStorage.getItem('isLoggedin'); 
         if (isLoggedin==1) {
            this.hideLoginbutton = true;
            this.hideLogoutbutton = false;
            this.hideUsername = false;
         }
         

    //   // Add event listener for the login button to toggle login panel and overlay
    //   const loginBtn = this.shadowRoot.querySelector('.loginbtn');
    //   if (loginBtn) {
    //       loginBtn.addEventListener('click', () => {
    //           this.toggleLoginPanel();
             
    //       });
    //   } else {
    //       console.error("Login button not found.");
    //   }
  
      // Add event listener for the close button to close login panel and overlay
      const closeBtn = this.shadowRoot.querySelector('.closebtn');
      if (closeBtn) {
          closeBtn.addEventListener('click', () => {
              this.closeLoginPanel();
          
          });
     } else {
          console.error("Close button not found.");
      }  

    
  
      
  }
  

    toggleLoginPanel() {
      const loginPanel = this.shadowRoot.querySelector('#loginPanel');
      loginPanel.classList.toggle('show');
      const login = this. shadowRoot.querySelector('#login')
      login.classList.toggle('show');
   }
   
   closeLoginPanel() {
      const loginPanel = this.shadowRoot.querySelector('#loginPanel');
      loginPanel.classList.remove('show');
      const register = this. shadowRoot.querySelector('#register')
      register.classList.remove('show');
      const login = this. shadowRoot.querySelector('#login')
      login.classList.remove('show');
   }
  

   handleRegister(){
    
      const login = this. shadowRoot.querySelector('#login')
      const register = this. shadowRoot.querySelector('#register')
      login.classList.remove('show');
      register.classList.toggle('show');
      
  }

   handleLogin() {
     const username = this.shadowRoot.querySelector('#username').value;
     const password = this.shadowRoot.querySelector('#password').value;

     fetch('http://localhost:3500/Users')
       .then(response => {
           if (response.ok) {
               return response.json();
           } else {
               throw new Error('Network response was not ok.');
           }
       })
       .then(data => {
           // Check if data is returned
           if (data.length > 0) {
            console.log("Data ", data);
               // Iterate through the data to find a matching username and password
               const user = data.find(user => user.Username === username && user.Password === password);
               if (user) {
                const userName =user.Username;
                const userId = user.id;
             
                console.log("UserId", userId );
                console.log("UserDetail", user );
                sessionStorage.setItem('currentUser', user.Username);
                sessionStorage.setItem('isLoggedin', 1);
                console.log("Current User:",sessionStorage.getItem('currentUser'));

                this.dispatchEvent(new CustomEvent('dispatcheduserid', { detail:{ userId : userId ,userDetail: user}, bubbles: true, composed: true }));
                
                this.closeLoginPanel();
               
                   // If user exists, navigate to home page
                   this.set('routeData.page', 'user-home-page');
                   
               } else {
                   console.error('Incorrect username or password.');
               }
           } else {
               console.error('User not found.');
           }
       })
       .catch(error => {
           console.error('Error checking user:', error);
       });
   } 
   handlelogout() {
        this.set('routeData.page', '');
        sessionStorage.setItem('isLoggedin', 0 );
        sessionStorage.removeItem('currentUser');
        this.hideLogoutbutton = true;
        this.hideLoginbutton = false;
        this.hideUsername = true;
        
   }


   handle_gotohome() {
      this.set('routeData.page', 'home-page');
   }

   handleCheckingClick() {
      // Update route data to navigate to the "checking-page"
      this.set('routeData.page', 'checking-page');
  }
  handleDashboardClick() {
      // Update route data to navigate to the "checking-page"
      this.set('routeData.page', 'dashboard-page');
  }
  register(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = this.$.username.value;
    const password = this.$.password.value;
    const email = this.$.email.value;
    const phone = this.$.phone.value;

    const newUser = {
        Username: username,
        Password: password,
        Email: email,
        Phone: phone
    };

    fetch('http://localhost:3500/Users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    }).then(response => {
        if (response.ok) {
            console.log('User registered successfully.');
            this.registrationSuccess = true;

        } else {
            console.error('Failed to register user.');
            // Handle error response
        }
    }).catch(error => {
        console.error('Error registering user:', error);
    });
}
}


customElements.define("my-header",Header);