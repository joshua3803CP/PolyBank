import { PolymerElement , html } from "@polymer/polymer/polymer-element.js";


class Checking_card extends PolymerElement{

    static get template(){
        return html`
            <style>
            .checking-card-container{
            display: flex;
            position: relative;
            text-align:center;
              
        }
        .top-left {
            position: absolute;
            top: 300px;
           
            justify-items:flex-start;
            font-size:38px; 
            background: rgb(0, 0, 0); /* Fallback color */
            background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
            color: #f1f1f1; /* Grey text */
            width: 100%;
        }
            </style>
       
            <div class="checking-card-container">
           <img src="images/polyimg/subHead-Checking.jpg" alt="Checking"  style="height: 100%; width: 100%; object-fit: cover;">
           <div class="top-left"> CHECKING </div>
            </div>
        
        `;

    }

}  
customElements.define("checking-card",Checking_card);