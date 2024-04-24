import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import './my-header.js';
import './my-footer.js';



class RegisterPage extends PolymerElement{
    static get template (){
        return html`
          <style>
          :host {
   
    z-index: 1000; /* Ensure it's on top of other content */
   
}
            .card-container{
                display: flex;
                align-items:center;
                justify-content:center;
                background-color: whitesmoke;
                height: 100vh;

            }
            .card{
                display: flex;
                width:400px;
                background-color: #134a88;
                justify-content:center;
            
                
            }
            .card-content{
                color: white;
                display:flex;
                flex-direction:column;
                justify-content:center;
              
            }
            paper-input     {
                color: white;
            }
            .registerbtn{
                color: white;
                background-color: #134a88;
                justify-content:center;
                margin-left: 100px;
                margin-top: 10px;

            }
            
            
            
          </style>
        
          <my-header></my-header>
         <div class="card-container">  
          <paper-card class= "card" >
            <div class = "card-content">  
                <h2>Register With First National</h2>
                <form id="registerForm" on-submit="register">
                            <iron-icon icon="account-circle" prefix></iron-icon>
                            <paper-input id="username" label="User Name"></paper-input>  
                            <iron-icon icon="lock" prefix></iron-icon>
                            <paper-input id="password" label="Password"></paper-input> 
                            <iron-icon icon="mail" prefix></iron-icon>
                            <paper-input id="email" label="E-mail"></paper-input>  
                            <iron-icon icon="perm-phone-msg" prefix></iron-icon>
                            <paper-input id="phone" label="Phone Number"></paper-input>
                            <button class="registerbtn" type="submit">Register</button>
                        </form>
                        <div class="success-message" hidden$="[[!registrationSuccess]]">
                            User registered successfully. <a href="/">Go back to home page</a>
                       </div>
        </div>
          </paper-card>
      </div>
          <my-footer></my-footer>
        `;   
        
    }
    static get properties() {
        return {
            registrationSuccess: {
                type: Boolean,
                value: false
            }
        };
    }

    ready() {
        super.ready();
        // Add any additional initialization code here
    }

    register(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const username = this.$.username.value;
        const password = this.$.password.value;
        const email = this.$.email.value;
        const phone = this.$.phone.value;

        const newUser = {
            Username: username,
            Password: password,
            Email: email,
            Phone: phone
        };

        fetch('http://localhost:3000/Users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(response => {
            if (response.ok) {
                console.log('User registered successfully.');
                this.registrationSuccess = true;
            } else {
                console.error('Failed to register user.');
                // Handle error response
            }
        }).catch(error => {
            console.error('Error registering user:', error);
        });
    }
}

customElements.define('register-page', RegisterPage);