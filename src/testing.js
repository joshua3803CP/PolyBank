import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class Testing extends PolymerElement{
    static get template(){
        return html`
        <div>
            <h1>hello</h1>
        </div>
        `;
    }
}

customElements.define("testing-t", Testing);