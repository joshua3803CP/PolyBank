import { PolymerElement , html } from "@polymer/polymer/polymer-element.js";


class Card extends PolymerElement{

    static get template(){
        return html`
            <style>
            .card-container{
            padding: 150px; 
            background-color: white;  
        }
            </style>
       
            <div class="card-container">
           <img src="images/polyimg/0e3634c9-712e-467e-9736-a41192a0b503.png" alt="Image 1"  style="height: 100%; width: 100%; object-fit: cover;">
            </div>
        
        `;

    }

}  
customElements.define("my-card",Card);


