import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
class Footer extends PolymerElement{

    static get template(){
        return html`
            <style>
            .footer{
            display: flex;
            position:relative;
            align-items:center;
            justify-content:space-between;
            background-color: #134a88;
            padding:0 20px;
           }
            .right-footer{
            display: flex;
           
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
    
    
}

customElements.define('my-footer',Footer);