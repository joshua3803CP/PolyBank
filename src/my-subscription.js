import { PolymerElement , html } from "@polymer/polymer/polymer-element.js";


class Subscription extends PolymerElement{

    static get template(){
        return html`
            <style>
            .container3{
            height:200px;
            display: flex;
            padding: 30px;
            padding-left:20px;
            padding-right:20px;
            justify-content:center;
            align-items:center;
            background-color:whitesmoke;
            margin-top:30px;
            margin-bottom:30px;

        }
        .container-sub{
         
           color:#134a88;
         

        }
        .content-sub{
            margin-left:30px;
            margin-right:30px;
            margin-top:30px;
            margin-bottom:30px;
        }
        .container-body{
            width:40%;
        }

        .content-body{
            color:#595959;
            text-align:justify;
            margin-left:30px;
            margin-right:30px;
            margin-top:30px;
            margin-bottom:30px;
        }
        .container-button{
         
         
       
        }
        .content-button{
         
            margin-left:30px;
            margin-right:30px;
            margin-top:30px;
            margin-bottom:30px;
        }
        .signupbtn{
            height:50px;
            width:120px;
            background-color: #134a88;
            color: white;
        }
            </style>
       
            <div class="container3">
               <div class="container-sub">
                        <div class="content-sub">
                              <h2>Subscribe</h2>
                        </div>
               </div>
               <div class="container-body">
                      <div class="content-body">
                         <div>To help stay informed, just provide a few quick details about yourself and First National Bank at Paris will handle the rest.</div>
                      </div>
               </div>
               <div class="container-button">
                       <div class="content-button">
                         <button class="signupbtn">Sign Up</button>
                       </div>
               </div>
            </div>
        
        `;

    }

}  
customElements.define("my-subscription",Subscription);


