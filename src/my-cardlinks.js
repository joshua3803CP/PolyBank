import { PolymerElement , html } from "@polymer/polymer/polymer-element.js";


class Cardlinks extends PolymerElement{

    static get template(){
        return html`
            <style>
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
            </style>
       
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
        
        `;

    }

}  
customElements.define("my-cardlinks",Cardlinks);


