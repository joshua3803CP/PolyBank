/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .card-container3 {
         display: flex;
         justify-content: space-evenly ;
         background-color: white;
         padding: 20px; /* Add padding for spacing from the edges */
        }

      .card-view {
         color:black;
         margin-left: 10px;
         margin-right:10px;
         height:200px;
         width: 300px;
         border: 1px solid;
         border-color:grey;
         background-color: #f9f9f9; /* Optional: Add a light gray background to each card */
         padding: 30px; /* Add padding inside each card */
         
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>Portfolio View</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>
      <div class="card-container3">
                <div class="card-view">
                    <h1>go fnbp</h1>
                    <b>We have a new app with new feature. This app was built with convenience in mind.</b>
                </div>

                <div class="card-view">
                    <h2>Local Loan Decisions </h2>
                    <p>At First National Bank and Community National Bank we know our customers and we know how to serve their financial needs. </p>
                </div>

                <div class="card-view">
                    <h2>go fnbp</h2>
                    <p>We have a new app with new feature. This app was built with convenience in mind. </p>
                </div>
            </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
