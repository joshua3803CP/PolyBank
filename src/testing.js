import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class Testing extends PolymerElement{
    static get template(){
        return html`
        <style>
        .progress-wrapper {
            display: flex;
            flex-direction:row;
            height: 300px;
          width: 300px; /* Adjust as needed */
          position: relative;
        }
        
        .progress-bar {
          <!-- width: calc(100% - 30px);  -->
          /* Adjust width based on stages */
          margin-left: 15px;
          margin-right: 15px;
          --paper-progress-height: 200px; /* Adjust thickness */
          background-color:black;
         
          
        }

        .stage-indicator {
          position: absolute;
          justify-content:space-evenly;
          top: 50%;
          transform: translateY(-50%);
          width: 10px; /* Adjust width */
          height: 10px; /* Adjust height */
          border-radius: 50%;
          background-color: blue; /* Adjust color */
          z-index: 1;
          padding:50px;
        }

        .stage-1 {
          left: 0;
          width:100%;
        }

        .stage-2 {
          left: 50%;
          width:100%;
          transform: translateX(-50%);
        }

        .stage-3 {
            width:100%;
          right: 0;
        }
      </style>

      <div class="progress-wrapper">
        <div class="stage-indicator stage-1">hi</div><hr>
        <div class="stage-indicator stage-2">bye</div>
        <div class="stage-indicator stage-3">hi</div>
        <paper-progress value="33.3" class="progress-bar"></paper-progress>
      </div>
        `;
    }
}

customElements.define("testing-t", Testing);