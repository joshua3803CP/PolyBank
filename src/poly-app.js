import { PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-pages/iron-pages.js';
import './home-page.js';


import '@polymer/paper-button/paper-button.js';




class Polyapp extends PolymerElement{
  static get properties(){
    return{
      uId:{
        type: String,
        value:''  
       },
      udetail:{
        type: String,
        value:''
      }
      
    };
  }

   
static get template(){
    return html` 
    <style>
         
        </style>
    
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route> 

      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <home-page name= "home-page"></home-page>
            <register-page name="register-page"></register-page>  
            <user-home-page name="user-home-page"></user-home-page>
            <checking-page name="checking-page"></checking-page>
            <newaccount-page name="newaccount-page" account-ud=[[uId]]></newaccount-page>
            <my-view1 name="my-view1"></my-view1>
            <testing-t name="testing-t"></testing-t>
            <dashboard-page name="dashboard-page" account-ud=[[uId]] user-profile=[[udetail]]></dashboard-page>
            
          </iron-pages>

    `;
}

static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }
 connectedCallback(){
  super.connectedCallback();

this.addEventListener('dispatcheduserid', this.retreivedUserid.bind(this));
  
 }
  _routePageChanged(page) {
    if (!page) {
      this.page = 'home-page';
    } else if (['home-page', 'register-page', 'user-home-page', 'checking-page', 'newaccount-page','my-view1','testing-t','dashboard-page'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    
  }
  _pageChanged(page) {
    switch (page) {
      case 'register-page':
        import('./register-page.js');
        break;
      case 'home-page':
        import('./home-page.js');
        break;
      case 'user-home-page':
        import('./user-home-page.js');
        break;
      case 'checking-page':
        import('./checking-page.js');
        break;
      case 'newaccount-page':
        import('./newaccount-page.js');
        break;
      case 'testing-t':
        import('./testing.js');
        break;
      case 'dashboard-page':
        import('./dashboard-page.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }



  retreivedUserid(event) {
    this.uId= event.detail.userId;
    console.log('Received 1 userid in polyapp:', this.uId);
     
     this.udetail = event.detail.userDetail;
   console.log('Received 1 user in polyapp :', this.udetail);
  
}

}



customElements.define("poly-app",Polyapp);




