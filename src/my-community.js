import { PolymerElement , html} from "@polymer/polymer/polymer-element.js";


class Community extends PolymerElement{

    static get template(){
        return html`
            <style>
            .community-container{
            display: flex;
            position: relative;
            height:600px;
            opacity:100% ;
            justify-content:center;
            align-items: center;
            background-color:#134a88;
         
        }
        .community-container img{
            opacity: 20%;
            height:600px;
            width:100%
         
        }
        .community-content{
            position: absolute;
            padding-top:30px;
            
            color: white;
            display: block;
            justify-content: center;
            text-align:center;
            margin-left:100px;
            margin-right:100px;
        }
            </style>
       
            <div class="community-container">
               <img src="images/polyimg/wide-community.jpg" alt="wide-community">
                  <div class="community-content">
                        <div>
                           <h2>Here for your Banking Needs</h2>
                           <h1>We are strong, stable, secure, and committed to the communities we serve.</h1>
                           <button style=" height: 40px; width: 180px; border:1px solid; border-color:white; color: white; background-color: transparent;">OUR COMMUNITY</button>
                        </div>
                  </div>
            </div>
        
        `;

    }

}  
customElements.define("my-community",Community);


