import { PolymerElement , html } from "@polymer/polymer/polymer-element.js";
import './my-header.js';
import './checking-card.js';
import '@polymer/paper-button/paper-button.js'
import '@polymer/paper-checkbox/paper-checkbox.js'
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js'
import '@polymer/paper-listbox/paper-listbox.js'
import '@polymer/paper-item/paper-item.js'

class Newaccount extends PolymerElement{

    static get template(){
        return html`
            <style>
                .main-container{    
                    display:block;
                    margin-top:50px;
                    margin-left:500px;
                    margin-right:500px;
                    justify-content:center;
                    align-items:center;
                    box-shadow: 0 5px 10px 0 black;
                   
                }
                .heading{
                   padding:30px;
                    text-align:center;
                    margin: 30px;
                    margin-bottom: 30px;
                    
                }
                .form{
                    text-align:left;
                    margin: 30px;
           
                    
                }
                .form-field {
                    width: 70%;
                    margin-bottom: 20px;
                }
              

            </style>
            
           
             <my-header></my-header>
            
             <div class="main-container">
                <div class="heading">
                    <h3>Open your Checking Account</h3>
                    <div class="form">
                     <div class="section"> 
                      <h4>Personal Information <hr> </h4>
                      
                        <div class="form-field">
                            <paper-input label="Full Name" id="full-name"></paper-input>
                        </div>
                        <div class="form-field">
                            <paper-input label="Date of Birth" id="dob" type="date"></paper-input>
                        </div>
                        <div class="form-field">
                            <paper-input label="Social Security Number" id="ssn"></paper-input>
                        </div>
                      </div> 
                        <div class="section">
                            <h4>Account Type <hr> </h4>
                            <div class="form-field">
                                <paper-dropdown-menu label="Account Holder" id="account-holder">
                                    <paper-listbox slot="dropdown-content" selected="0">
                                        <paper-item>Individual</paper-item>
                                        <paper-item>Joint Account</paper-item>
                                    </paper-listbox>
                                </paper-dropdown-menu>
                            </div>
                            <div class="form-field">
                                <paper-dropdown-menu label="Account Type" id="account-type">
                                    <paper-listbox slot="dropdown-content" selected="0">
                                        <paper-item>Basic Checking</paper-item>
                                        <paper-item>Interest-Bearing Checking</paper-item>
                                        <paper-item>Student Checking</paper-item>
                                    </paper-listbox>
                                </paper-dropdown-menu>
                            </div>
                        </div>
                        <div class="form-field">
                            <paper-input label="Initial Deposit" id="initial-deposit" type="number"></paper-input>
                        </div>
                        <div class="form-field">
                            <paper-dropdown-menu label="Debit Card Options" id="debit-card-options">
                                <paper-listbox slot="dropdown-content" selected="0">
                                    <paper-item>Type1</paper-item>
                                    <paper-item>Type2</paper-item>
                                    <paper-item>Type3</paper-item>
                                </paper-listbox>
                            </paper-dropdown-menu>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Check-order">Check Order</paper-checkbox>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Online Banking Setup">Online Banking Setup</paper-checkbox>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Mobile Banking Setup">Mobile Banking Setup</paper-checkbox>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Direct Deposit Setup">Direct Deposit Setup</paper-checkbox>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Additional Services">Additional Services</paper-checkbox>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Terms and Conditions Agreement">Terms and Conditions Agreement</paper-checkbox>
                        </div>

                    <paper-button raised on-click="submitForm">Submit</paper-button>
                </div>
            </div>
            </div>
            <my-footer></my-footer>
        `;

    }

}  
customElements.define("newaccount-page", Newaccount);