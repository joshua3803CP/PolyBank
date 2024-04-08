import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: white;
          --app-secondary-color: black;
          --app-drawer-width: 250px;
          --app-drawer-content-padding: 20px 0;
          display: block;
        }

        app-header {
          background-image: linear-gradient(to right, white, #CDAE4F);
          height:10%;
          color: white;
        }

        app-drawer {
          --app-drawer-content-container: {
            background-color: #CDAE4F;
          };
        }

        .menu-icon {
          margin-left: 10px;
          color: black;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-header-layout fullbleed="">
        <app-header slot="header" fixed condenses reveals effects="waterfall">
          <app-toolbar>
            <paper-icon-button icon="my-icons:menu" class="menu-icon" on-click="_toggleDrawer"></paper-icon-button>
            <div main-title>
              <img src="yourbank/Logo.jpg" alt="Image 1" style="height: 40px;">
              <img src="yourbank/Yourbank.jpg" alt="Image 2" style="height: 40px;">
            </div>
          </app-toolbar>
        </app-header>

        <app-drawer-layout fullbleed="" narrow="{{narrow}}">
          <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]" opened="{{drawerOpened}}" persistent>
            <div class="menu-list" style="padding-top: 200px;">
              <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
                <a name="view1" href="[[rootPath]]view1">Portfolio View</a>
                <a name="view2" href="[[rootPath]]view2">Portfolio Rebalance</a>
                <a name="view3" href="[[rootPath]]view3">Detailed Portfolio</a>
              </iron-selector>
            </div>
          </app-drawer>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-view1 name="view1"></my-view1>
            <my-view2 name="view2"></my-view2>
            <my-view3 name="view3"></my-view3>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-drawer-layout>
      </app-header-layout>
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

  _routePageChanged(page) {
    if (!page) {
      this.page = 'view1';
    } else if (['view1', 'view2', 'view3'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _toggleDrawer() {
    this.$.drawer.toggle();
  }

  _pageChanged(page) {
    switch (page) {
      case 'view1':
        import('./my-view1.js');
        break;
      case 'view2':
        import('./my-view2.js');
        break;
      case 'view3':
        import('./my-view3.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-app', MyApp);
