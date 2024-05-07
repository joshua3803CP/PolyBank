import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import '@polymer/iron-icons/iron-icons.js'
import '@polymer/iron-label/iron-label.js'


class userHeader extends PolymerElement{

    static get template(){
        return html`

        <style>
        .header{
            position:fixed;;
            width:100%;
            display: flex;
            height: 100px;
            align-items:center;
            background-color: #134a88;
            z-index:1000 ;
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
        .accounticon{
           
            color: white;
            font-size: 16px;
            border: none;
            padding-bottom: 5px;
            text-align: center;
            text-decoration: none;
            
            
            cursor: pointer;
           
            
            
        }
        .user_panel{
            position: absolute;
            display:none;
            margin right: 200px;
            height:50%;
            width: 250px;
            transition: 0.3s;
            background-color:#134a88;
            z-index: 1;
            top: 0;
            right: 0;
            overflow-x: hidden;
            transition: 0.5s;
         
        }
        .user_panel.show{
            display: block; 
        }
        .login-content-container{
           
            left: o;
            color: white;
           display: flex;
           flex-direction:column;
           align-items:center;
           justify-content: center; /* Center content vertically */
           height: 90%; /* Take full height of the login panel */
         
         
        }
        .accounticon{
         

            right: 10px;
            
            color: white;
            padding: 12px;
            font-size: 16px;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            
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
                                          <iron-icon icon="account-circle" class="accounticon" on-click="toggleuseraccount"></iron-icon>
                                          <iron-label id="userLabel" hidden$="[[!loggedIn]]">[[username]]</iron-label>
                                          </div>
                                    </div>
                            </div>
                     </div>
      </div>

      <div class="user_panel" id="userPanel"> 
           <button class="closebtn" on-click="closeLoginPanel">close</button>
        <div class="login-content-container">
                  <h3>Welcome Back!</h3>
                  <iron-label id="userLabel" hidden$="[[!loggedIn]]">[[username]]</iron-label>
                  <!-- Your login form goes here -->
                  
         </div>         
      </div>

        `;
    }
    connectedCallback() {
      super.connectedCallback();
      const currentUser = sessionStorage.getItem('currentUser');
        if (currentUser) {
            // Set the username and show the iron-label
            this.username = currentUser;
            this.loggedIn = true;
        }
      }
    toggleuseraccount() {
      const userPanel = this.shadowRoot.querySelector('#userPanel');
      userPanel.classList.toggle('show');
   }
   
   closeLoginPanel() {
      const userPanel = this.shadowRoot.querySelector('#userPanel');
      userPanel.classList.remove('show');
   }

   handleRegister(){
      this.set('routeData.page', 'register-page');
  }
  handle_gotohome(){
      this.set('routeData.page', 'home-page');
  }
  handleCheckingClick() {
   // Update route data to navigate to the "checking-page"
   this.set('routeData.page', 'checking-page');
}

}


customElements.define("my-userheader",userHeader);