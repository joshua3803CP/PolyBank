import { PolymerElement , html } from "@polymer/polymer/polymer-element.js";
import './my-header.js';
import './checking-card.js';
import '@polymer/paper-button/paper-button.js'

class Newaccount extends PolymerElement{

    static get template(){
        return html`
            <style>
                .main-container{
                    z-index: 1500;
                }
              

            </style>
            
           
             <my-header></my-header>
            
            <div class="main-container">
                <div class="heading">
                    <h3>Open your Checking Account</h3>
                    <div class="form">
                        <label for="">hello</label>
                    </div>
                    
                </div>

            </div>

            <my-footer></my-footer>
        `;

    }

}  
customElements.define("newaccount-page", Newaccount);