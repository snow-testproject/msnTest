var a=Object.defineProperty;var i=(b,t,o)=>t in b?a(b,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):b[t]=o;var e=(b,t,o)=>(i(b,typeof t!="symbol"?t+"":t,o),o);import{s as l,i as c,x as n}from"./lit-element-KtrydcFn.js";import"./Text-Bb5H9mbN.js";class s extends l{constructor(){super()}static get properties(){return{label:{type:String},type:{type:String},onClick:{type:Function},size:{type:String},target:{type:String},href:{type:String}}}handleButtonClick(t){t.preventDefault(),this.onClick.call()}getAnchorTag(){let t="",o="";if(this.size=="Large"?(t="btn-lg",o="btn-link-lg"):this.size=="Medium"&&(t="btn-md",o="btn-link-md"),this.type==="Outline"||this.type==="Solid"){let r="btn";return this.type==="Outline"?r=r+" btn-outline":r=r+" btn-solid",n`<button
        class=${[r,t,"btn-spacing"].join(" ")}
        @click="${this.handleButtonClick}"
      >
        ${this.label}
      </button>`}else return n`
        <a
          href="${this.href}"
          class=${["btn btn-link",o,"btn-spacing"].join(" ")}
          style="--sn-wc-padding-y: 0px;"
          target="${this.target}"
        >
          ${this.label}
        </a>
      `}render(){return n`
      <style>
        @font-face {
          font-family: 'Lato';
          src: url('data:application/font-woff;charset=utf-8;base64,[Base64 encoded .woff file]') format('woff'),
              url('data:application/font-woff2;charset=utf-8;base64,[Base64 encoded .woff2 file]') format('woff2'),
              url('data:application/font-truetype;charset=utf-8;base64,[Base64 encoded .ttf file]') format('truetype');
          font-weight: normal;
          font-style: normal;
         }
        .btn {
            --bs-btn-padding-x: 24px;
            --bs-btn-padding-y: 4px;
            --bs-btn-font-family: Lato;
            --bs-btn-font-size: 16px;
            --bs-btn-font-weight: bold;
            --bs-btn-line-height: 1.5;
            --bs-btn-color: #212529;
            --bs-btn-bg: transparent;
            --bs-btn-border-width: 1px;
            --bs-btn-border-color: #298319;
            --bs-btn-border-radius: 50rem;
            --bs-btn-hover-border-color: transparent;
            --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
            --bs-btn-hover-color:  #1f6213;
            --bs-link-hover-color: #1F6213;
            --bs-link-color: #298319;
            --bs-btn-disabled-opacity: 0.65;
            --bs-btn-focus-box-shadow: 0 0 0 0.25rem
              rgba(var(--bs-btn-focus-shadow-rgb), 0.5);
            display: inline-block;
            padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
            font-family: var(--bs-btn-font-family);
            font-size: var(--bs-btn-font-size);
            font-weight: var(--bs-btn-font-weight);
            line-height: var(--bs-btn-line-height);
            color: var(--bs-btn-color);
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            cursor: pointer;
            user-select: none;
            border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
            border-radius: var(--bs-btn-border-radius);
            background-color: var(--bs-btn-bg);
            transition: color 0.15s ease-in-out,
              background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          }
          .btn:hover {
            color: var(--bs-btn-hover-color);
            background-color: var(--bs-btn-hover-bg);
            border-color: var(--bs-btn-hover-border-color);
            transform: translateY(-1px);
          }
          .btn:focus-visible {
            color: var(--bs-btn-hover-color);
            background-color: var(--bs-btn-hover-bg);
            border-color: var(--bs-btn-hover-border-color);
            outline: 0;
            box-shadow: var(--bs-btn-focus-box-shadow);
          }
          .btn.active {
            color: var(--bs-btn-active-color);
            background-color: var(--bs-btn-active-bg);
            border-color: var(--bs-btn-active-border-color);
          }

          .btn-solid {
            --bs-btn-color: #fff;
            --bs-btn-bg: #298319;
            --bs-btn-border-color:var( --bs-btn-border-color);
            --bs-btn-hover-color: #fff;
            --bs-btn-hover-bg: #1f6213;
            --bs-btn-hover-border-color: #1f6213;
            --bs-btn-focus-shadow-rgb: 212, 38, 119;
            --bs-btn-active-color: #fff;
            --bs-btn-active-bg: #1f6213;
            --bs-btn-active-border-color: #1f6213;
            --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);

          }
          .btn-outline {
            --bs-btn-color: #298319;
            --bs-btn-border-color: #298319;
            --bs-btn-hover-color: #1f6213;
            --bs-btn-hover-bg: #fffff;
            --bs-btn-hover-border-color: #1f6213;
            --bs-btn-focus-shadow-rgb: 25, 135, 84;
            --bs-btn-active-color: #fff;
            --bs-btn-active-bg: #fff;
            --bs-btn-active-border-color: #198754;
            --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);

            --bs-gradient: none;
          }

          .btn-link {
            --bs-btn-font-weight: bold;
            --bs-btn-color: var(--bs-link-color);
            --bs-btn-bg: transparent;
            --bs-btn-border-color: transparent;
            --bs-btn-hover-color: var(--bs-link-hover-color);
            --bs-btn-hover-border-color: transparent;
            --bs-btn-active-color: var(--bs-link-hover-color);
            --bs-btn-active-border-color: transparent;
            --bs-btn-box-shadow: none;
            --bs-btn-focus-shadow-rgb: 212, 38, 119;
            --bs-btn-padding-x: 0;
            text-decoration: none;
          }
          .btn-link:focus-visible {
            color: var(--bs-btn-color);
          }
          .btn-link:hover {
            color: var(--bs-btn-hover-color);
          }

          .btn-lg {
            --bs-btn-padding-y: 8px;
            --bs-btn-padding-x: 32px;
            --bs-btn-font-size: 24px;
            --bs-btn-border-radius: 50rem;
          }

          .btn-md {
            --bs-btn-padding-y: 6px;
            --bs-btn-padding-x: 28px;
            --bs-btn-font-size: 18px;
            --bs-btn-border-radius: 50rem;
          }
          .btn-link-md{
            --bs-btn-font-size:18px;
            --bs-btn-border-radius: 0.25rem;
          }
          .btn-link-lg{
            --bs-btn-font-size: 32px;
            --bs-btn-border-radius: 0.5rem;
          }
      </style>
      ${this.getAnchorTag()}
    `}}e(s,"styles",c`
    :host {
      --sn-wc-margin-top: 0px;
    }
    .btn-spacing {
      margin-top: var(--sn-wc-margin-top);
    }
  `);customElements.define("sn-wc-link",s);
