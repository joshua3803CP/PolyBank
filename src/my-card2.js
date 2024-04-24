import { PolymerElement , html } from "@polymer/polymer/polymer-element.js";


class Card2 extends PolymerElement{

    static get template(){
        return html`
            <style>
            .card-container1{
            display: flex;
            justify-content:center;
            align-items:center;
            background-color: white;
            padding: 100px; /* Add padding for spacing from the edges */
        }

        .card-view {
            color:#595959;
            margin-left: 10px;
            margin-right:10px;
            height:200px;
            width: 300px;
            border: 1px solid;
            border-color:grey;
            background-color: white; /* Optional: Add a light gray background to each card */
            padding: 20px; /* Add padding inside each card */
         
         }
            </style>
       
            <div class="card-container1">
                <div class="card-view">
                    <h2>Go fnbp</h2>
                    <p>We have a new app with new feature. This app was built with convenience in mind.</p>
                </div>

                <div class="card-view">
                    <h2>Local Loan Decisions </h2>
                    <p>At First National Bank and Community National Bank we know our customers and we know how to serve their financial needs. </p>
                </div>
                
                    <div class="card-view">
                    <h2>Let's GET SOCIAL </h2>
                    <p>Have you like our page on Facebook? We keep it updated with all new happenings at the bank.  </p>
                </div>
            </div>
        
        `;

    }

}  
customElements.define("my-card2",Card2);


