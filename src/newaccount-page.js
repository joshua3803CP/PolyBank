import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import './my-header.js';
import './checking-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';

class Newaccount extends PolymerElement {
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
            },
            data: {
                type: Boolean,
                value: false,
                observer: "_datachanged"
            },
            accountUd: {
                type: String,
                value: ''
            }
            
        };
    }

    static get template() {
        return html`
            <style>
                .main-container {    
                    display: block;
                    margin-top: 50px;
                    margin-left: 500px;
                    margin-right: 500px;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 5px 10px 0 black;
                    background-color: #134a88;
                }
                .heading {
                    color: white;
                    padding: 30px;
                    text-align: center;
                    margin: 30px;
                }
                .form {
                    text-align: left;
                    color: white;
                    margin-top: 40px;
                }
                .form-field {
                    color: white;
                    width: 70%;
                    margin-bottom: 20px;
                }
                paper-input {
                    --primary-text-color: white;
                    --paper-input-container-color: white;
                }
                paper-dropdown-menu {     
                    --primary-text-color: #f0f0f0;   
                }  
                paper-listbox {
                    --primary-text-color: black; 
                }
                paper-checkbox {
                    --paper-checkbox-unchecked-color: whitesmoke; 
                    --primary-text-color: #f0f0f0;
                }
                .personalsection { }
                .accountsection {
                    display: none;
                }
                .accountsection.show {
                    display: block;
                }
                .availsection {
                    display: none;
                    margin-top: 20px;
                }
                .availsection.show {
                    display: block;
                }
                .accountTable table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .accountTable table th {
                    background-color: #f2f2f2;
                    color: #333;
                    font-weight: bold;
                    padding: 10px;
                    text-align: left;
                    border: 1px solid #ddd;
                }
                .accountTable table td {
                    padding: 10px;
                    border: 1px solid #ddd;
                }
                .accountTable table tbody tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
                .accountTable table tbody tr:hover {
                    background-color: #e0e0e0;
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
                            <paper-button raised on-click="showavailsection" hidden$="[[hideNextButton2]]">Next</paper-button>
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
            <div id="buttonCont"></div>
            <div class="accountTable">
                <table id="accountDetailsTable">
                    <thead>
                        <tr>
                            <th>Account Number</th>
                            <th>Full Name</th>
                            <th>Date of Birth</th>
                            <th>Social Security Number</th>
                            <th>Account Holder</th>
                            <th>Account Type</th>
                            <th>Initial Deposit</th>
                            <th>Debit Card Options</th>
                            <th>Check Order</th>
                            <th>Online Banking Setup</th>
                            <th>Mobile Banking Setup</th>
                            <th>Direct Deposit Setup</th>
                            <th>Additional Services</th>
                            <th>Terms and Conditions Agreement</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <my-footer></my-footer>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.buttonContHtml();
        console.log("Account ud", this.accountUd );
       
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

        // Generate account number (You can implement your logic here)
        const accountNumber = this.generateAccountNumber();

        // Add account number to form data
        formData.accountNumber = accountNumber;

        // Get the user ID
        const userId = this.accountUd; 
        console.log("Userid sent in the fetch",userId);// Example user ID, replace this with the actual user ID

        fetch(`http://localhost:3500/Users/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(user => {
                // Add the new account to the user's accounts array
                user.accounts = user.accounts || [];
                user.accounts.push(formData);

                // Update the user data on the server
                return fetch(`http://localhost:3500/Users/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(updatedUser => {
                console.log('User updated successfully:', updatedUser);
                // Display saved details in the table
                this.displaySavedDetails(formData);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }

    generateAccountNumber() {
        // Implement your logic to generate an account number
        return 'ACC' + Math.floor(1000 + Math.random() * 9000);
    }

    displaySavedDetails(data) {
        const table = this.shadowRoot.querySelector('#accountDetailsTable');
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${data.accountNumber}</td>
            <td>${data.fullName}</td>
            <td>${data.dob}</td>
            <td>${data.ssn}</td>
            <td>${data.accountHolder}</td>
            <td>${data.accountType}</td>
            <td>${data.initialDeposit}</td>
            <td>${data.debitCardOptions}</td>
            <td>${data.checkOrder}</td>
            <td>${data.onlineBankingSetup}</td>
            <td>${data.mobileBankingSetup}</td>
            <td>${data.directDepositSetup}</td>
            <td>${data.additionalServices}</td>
            <td>${data.termsConditionsAgreement}</td>
        `;
    }

    buttonContHtml() {
        const buttonCont = this.shadowRoot.querySelector("#buttonCont");
        if (buttonCont) {
            if (this.data == false) {
                const content = this.nextBtn();
                buttonCont.innerHTML = content.innerHTML;
            } else if (this.data == true) {
                const content = this.changeBtn();
                buttonCont.innerHTML = content.innerHTML;
            }
        }

        const Next = this.shadowRoot.querySelector("#Next");
        if (Next) {
            Next.addEventListener('click', () => {
                console.log("next event listener working");
                this.handleNext();
            });
        }

        const Changed = this.shadowRoot.querySelector("#Changed");
        if (Changed) {
            Changed.addEventListener('click', () => {
                console.log("changed event listener working");
                this.handleChanged();
            });
        }
    }

    nextBtn() {
        return html`
            <div>
                <paper-button id="Next">Next</paper-button>
            </div>
        `;
    }

    changeBtn() {
        return html`
            <div>
                <paper-button id="Changed">Changed</paper-button>
            </div>
        `;
    }

    handleNext() {
        console.log("handleNext click working ");
        this.data = true;
        console.log("DATA 1", this.data);
    }

    handleChanged() {
        console.log("handleChanged click working ");
        this.data = false;
        console.log("DATA 2", this.data);
    }

    _datachanged(data) {
        console.log("Data changed to ", this.data);
        this.buttonContHtml();
    }
}

customElements.define("newaccount-page", Newaccount);
