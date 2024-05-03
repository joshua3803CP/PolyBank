import { PolymerElement , html } from "@polymer/polymer/polymer-element.js";
import './my-header.js';
import './checking-card.js';
import '@polymer/paper-button/paper-button.js'

class Checking extends PolymerElement{

    static get template(){
        return html`



            <style>

              .main-container{
                display:flex;
                align-items:center;
                justify-content:flex-start; 
                padding-left:150px;
                padding-top:100px;
                padding-bottom: 100px;
                
              }
              .content-conatiner{
            
              }
              .heading{
                color: #134a88;
              }
              paper-button {
              background-color: #134a88;
              color: white;
              }

            </style>

            <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
          </app-location>

           <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
           </app-route> 
           
           <my-header></my-header>
            <checking-card></checking-card>
            <div class="main-container">
              <div class="content-conatiner">
                <div class= "heading">
                  <h3>FEATURES INCLUDED IN PERSONAL CHECKING ACCOUNTS</h3>
                  <div class= "body">
                    <ul>
                      
                      <li> Unlimited Check Writing</li>
                      <li> Instant Issued Debit Card - subject to approval</li>
                      <li> Statement Images</li>
                      <li> Internet Banking</li>
                      <li> Notary Service</li>
                      <li> Mobile Banking</li>
                    </ul>
                  </div>


                </div>
                <paper-button raised on-click="handle_createaccount">OPEN AN ACCOUNT NOW</paper-button>
              </div>
            </div>
            <my-footer></my-footer>
        `;

    }
    
    handle_createaccount(){
      this.set('routeData.page', 'newaccount-page');
  }
}  
customElements.define("checking-page",Checking);