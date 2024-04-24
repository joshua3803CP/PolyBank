import { PolymerElement , html } from "@polymer/polymer/polymer-element.js";
import './my-userheader.js';
import './my-card.js';
import './my-card2.js';
import './my-cardlinks.js';
import './my-carousel.js';
import './my-community.js';
import './my-subscription.js';
import './my-footer.js';

class UserHome extends PolymerElement{

    static get template(){
        return html`
            <style>
           
        
            </style>
       
            <my-userheader></my-userheader>
            <my-carousel></my-carousel>  
            <my-card></my-card>
            <my-cardlinks></my-cardlinks>
            <my-community></my-community>
            <my-subsription></my-subsription>
            <my-card2></my-card2>
            <my-footer></my-footer>
        `;

    }

}  
customElements.define('user-home-page',UserHome);


