import { PolymerElement , html } from "@polymer/polymer/polymer-element.js";
import './my-header.js';
import './checking-card.js';
import '@polymer/paper-button/paper-button.js'
import '@polymer/paper-checkbox/paper-checkbox.js'
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js'
import '@polymer/paper-listbox/paper-listbox.js'
import '@polymer/paper-item/paper-item.js'

class Newaccount extends PolymerElement{
    static get properties() {
        return {
            fullName: String,
            dob: String,
            ssn: String,
            accountHolder: String,
            accountType: String,
            initialDeposit: Number,
            debitCardOptions: String,
            checkOrder: Boolean,
            onlineBankingSetup: Boolean,
            mobileBankingSetup: Boolean,
            directDepositSetup: Boolean,
            additionalServices: Boolean,
            termsConditionsAgreement: Boolean,
            hideNextButton: {
                type: Boolean,
                value: false
            },
            hideNextButton2: {
                type: Boolean,
                value: false
            }
        };
    }

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
                    background-color: #134a88;
                   
                }
                .heading{
                    color: white;
                   padding:30px;
                    text-align:center;
                    margin: 30px;
                }
                .form{
                    text-align:left;
                    color: white;
                    margin-top:40px;
                    
           
                    
                }
                .form-field {
                    color:white;
                    width: 70%;
                    margin-bottom: 20px;
                }
                paper-input{
                    
             --primary-text-color: white;
             --paper-input-container-color: white;
                }
                paper-dropdown-menu {     
             --primary-text-color: #f0f0f0; /* Change to your desired background color */    
                }  
                paper-listbox {
            --primary-text-color: black; /* Change to your desired background color */
                }
                paper-checkbox {
            --paper-checkbox-unchecked-color: whitesmoke; /* Change to your desired color */
            --primary-text-color: #f0f0f0;
                }

                .personalsection{
                    
                }
                .accountsection{
                    display: none;
                }
                .accountsection.show{
                    display: block
                }
                .availsection{
                    display: none;
                    margin-top: 20px;
                }
                .availsection.show{
                    display:block;
                }


            </style>
            
           
            <my-header></my-header>

            <div class="main-container">
                <div class="heading">
                    <h2>Open Your Checking Account</h2>
                    <div class="form">
                        <div class="personalsection"> 
                            <h4>Personal Information <hr> </h4>
                            <div class="form-field">
                                <paper-input label="Full Name" id="full-name" value="{{fullName}}"></paper-input>
                            </div>
                            <div class="form-field">
                                <paper-input label="Date of Birth" id="dob" type="date" value="{{dob}}"></paper-input>
                            </div>
                            <div class="form-field">
                                <paper-input label="Social Security Number" id="ssn" value="{{ssn}}"></paper-input>
                            </div>
                            <paper-button raised on-click="showaccountsection" hidden$="[[hideNextButton]]">Next</paper-button>
                        </div> 
                        <div class="accountsection">
                            <h4>Account Type <hr> </h4>
                            <div class="form-field">
                                <paper-dropdown-menu label="Account Holder" id="account-holder" value="{{accountHolder}}">
                                    <paper-listbox slot="dropdown-content" selected="0">
                                        <paper-item>Individual</paper-item>
                                        <paper-item>Joint Account</paper-item>
                                    </paper-listbox>
                                </paper-dropdown-menu>
                            </div>
                            <div class="form-field">
                                <paper-dropdown-menu label="Account Type" id="account-type" value="{{accountType}}">
                                    <paper-listbox slot="dropdown-content" selected="0">
                                        <paper-item>Basic Checking</paper-item>
                                        <paper-item>Interest-Bearing Checking</paper-item>
                                        <paper-item>Student Checking</paper-item>
                                    </paper-listbox>
                                </paper-dropdown-menu>
                            </div>
                        
                        <div class="form-field">
                            <paper-input label="Initial Deposit" id="initial-deposit" type="number" value="{{initialDeposit}}"></paper-input>
                        </div>
                        <div class="form-field">
                            <paper-dropdown-menu label="Debit Card Options" id="debit-card-options" value="{{debitCardOptions}}">
                                <paper-listbox slot="dropdown-content" selected="0">
                                    <paper-item>Type1</paper-item>
                                    <paper-item>Type2</paper-item>
                                    <paper-item>Type3</paper-item>
                                </paper-listbox>
                            </paper-dropdown-menu>
                        </div>
                        <paper-button raised on-click="showavailsection" hidden$="[[hideNextButton2]]" >Next</paper-button>
                    </div> 
                     <div class="availsection">
                        <div class="form-field">
                            <paper-checkbox id="Check-order" value="{{checkOrder}}">Check Order</paper-checkbox>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Online Banking Setup" value="{{onlineBankingSetup}}">Online Banking Setup</paper-checkbox>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Mobile Banking Setup" value="{{mobileBankingSetup}}">Mobile Banking Setup</paper-checkbox>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Direct Deposit Setup" value="{{directDepositSetup}}">Direct Deposit Setup</paper-checkbox>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Additional Services" value="{{additionalServices}}">Additional Services</paper-checkbox>
                        </div>
                        <div class="form-field">
                            <paper-checkbox id="Terms and Conditions Agreement" value="{{termsConditionsAgreement}}">Terms and Conditions Agreement</paper-checkbox>
                        </div>
                        <paper-button raised on-click="submitForm">Submit</paper-button>
                 </div>
                    
                </div>
            </div>
            </div>
            <my-footer></my-footer>
        `;

    }

    showaccountsection() {
        const accountsection = this.shadowRoot.querySelector('.accountsection');
        accountsection.classList.toggle('show');
        this.hideNextButton = true;
    }

    showavailsection() {
        const availsection = this.shadowRoot.querySelector('.availsection');
        availsection.classList.toggle('show');
        this.hideNextButton2 = true;
    }

    submitForm() {
        const formData = {
            fullName: this.fullName,
            dob: this.dob,
            ssn: this.ssn,
            accountHolder: this.accountHolder,
            accountType: this.accountType,
            initialDeposit: this.initialDeposit,
            debitCardOptions: this.debitCardOptions,
            checkOrder: this.checkOrder,
            onlineBankingSetup: this.onlineBankingSetup,
            mobileBankingSetup: this.mobileBankingSetup,
            directDepositSetup: this.directDepositSetup,
            additionalServices: this.additionalServices,
            termsConditionsAgreement: this.termsConditionsAgreement
        };
    
        fetch('http://localhost:3500/Accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Form data submitted successfully:', data);
            // Handle any success actions here
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            // Handle any error actions here
        });
    }
    
}

customElements.define("newaccount-page", Newaccount);