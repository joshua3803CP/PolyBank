import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/app-layout/app-layout.js';
import './my-header.js';
import './my-footer.js';

class DashboardPage extends PolymerElement {
    static get properties() {
        return {
            profileClicked: {
                type: Boolean,
                value: true,
                observer: "contentContainerHtml"
            },
            accountClicked: {
                type: Boolean,
                value: false,
                observer: "contentContainerHtml"
            },
            portfolioClicked: {
                type: Boolean,
                value: false,
                observer: "contentContainerHtml"
            },
            userProfile: {
                type: String,
                value: ''
            },
            accountUd: {
                type: String,
                value: '',
                observer: "_accountdetail"
                
            },
        };
    }

    static get template() {
        return html`
          <style>
          .mainContainer {
            display: flex;
          }
          .leftmenuContainer {
            display: flex;
            border: 10px solid white;
            width: 20%;
            height: 100vh;
            background-color: #134a88;
          }
          .leftMenu {
            display: block;
            width: 100%;
          }
          .userGreetCard {
            display: flex;
            height: 100px;
            color: white;
            margin-bottom: 2px;
            padding: 20px;
            background-color: #1f3e69;
          }
          .menuItemcontainer {
            margin-top: 5px;
            margin-bottom: 2px;
          }
          .menuItem {
            display: flex;
            background-color: #134a88;
            color: white;
            margin-top: 2px;
            padding: 12px;
            font-size: 16px;
            border: 1px solid #134a88;
            width: 100%;
            cursor: pointer;
          }
          .menuItem:hover {
            background-color: #1f3e69;
          }
          .contentContainer {
            display: block;
            border: 10px solid white;
            width: 80%;
            height: 100vh;
          }
          .contentHeader {
            display: flex;
            height: 100px;
            color: white;
            margin-bottom: 2px;
            padding: 20px;
            background-color: #1f3e69;
          }
          .contentBody {
            display: block;
            margin-top: 50px;
            margin-left: 500px;
            margin-right: 500px;
            justify-content: center;
            align-items: center;
            box-shadow: 0 5px 10px 0 black;
            background-color: #134a88;
          }
          .card{
            display: flex;
          }
          </style>
        
          <my-header></my-header>
          <div class="mainContainer">
            <div class="leftmenuContainer">
              <div class="leftMenu">
                <div class="userGreetCard">
                  <label for="userGreetCard">Welcome Back,</label>
                  <iron-label name="username" >[[accountUd]]</iron-label>
                </div>
                <div class="menuItemcontainer">
                  <button class="menuItem" on-click="handleProfileClick">PROFILE</button>
                  <button class="menuItem" on-click="handleAccountClick">ACCOUNT</button>
                  <button class="menuItem" on-click="handlePortfolioClick">PORTFOLIO</button>
                  <button class="menuItem" on-click="handle">RESOURCES</button>
                </div>
              </div>
            </div>
            <div class="contentContainer">
              <template is="dom-if" if="[[profileClicked]]">
                <div class="contentHeader">Profile</div>
                <div class="contentBody">
                  <div class="card">
                    <h3>Name :</h3>
                    <iron-label name="username" >[[accountUd]]</iron-label>
                   
                    <iron-label name="username" >[[userProfile.accounts]]</iron-label>
                  </div>
                </div>
              </template>
              <template is="dom-if" if="[[accountClicked]]">
                <div class="contentHeader">Account</div>
                <div class="contentBody">AccountBody</div>
              </template>
              <template is="dom-if" if="[[portfolioClicked]]">
                <div class="contentHeader">Portfolio</div>
                <div class="contentBody">PortfolioBody</div>
              </template>
            </div>
          </div>
          <my-footer></my-footer>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchUserData();
        console.log("Retrieved User Detail in Dashboard", this.userProfile.accounts[0].fullName);
        console.log("Retrieved accountUd in Dashboard", this.accountUd);
       
    }

    fetchUserData() {
        fetch('http://localhost:3500/Users')
            .then(response => response.json())
            .then(data => {
                // Assuming data is an object containing user details
                this.userData = data;

            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }

    handleProfileClick() {
        this.profileClicked = true;
        this.accountClicked = false;
        this.portfolioClicked = false;
    }

    handleAccountClick() {
        this.accountClicked = true;
        this.profileClicked = false;
        this.portfolioClicked = false;
    }

    handlePortfolioClick() {
        this.portfolioClicked = true;
        this.profileClicked = false;
        this.accountClicked = false;
    }

    contentContainerHtml() {
        // This method will automatically trigger re-rendering of the template
        this.notifyPath('profileClicked');
        this.notifyPath('accountClicked');
        this.notifyPath('portfolioClicked');
    }
    _accountdetail(newValue, oldValue) {
        console.log("accountUd changed from", oldValue, "to", newValue);
    }
}

customElements.define('dashboard-page', DashboardPage);
