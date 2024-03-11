var a=Object.defineProperty;var f=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var s=(e,t,n)=>(f(e,typeof t!="symbol"?t+"":t,n),n);import{s as r,i,x as c}from"./lit-element-KtrydcFn.js";class o extends r{constructor(){super(),this.styles={}}static get properties(){return{label:{type:String},styles:{type:Object}}}render(){return c`
    <p class=${["sn-wc-text"].join(" ")}>
      <slot></slot>
    </p>
    `}}s(o,"styles",i`
    @font-face {
      font-family: 'Lato';
      src: url('data:application/font-woff;charset=utf-8;base64,[Base64 encoded .woff file]') format('woff'),
          url('data:application/font-woff2;charset=utf-8;base64,[Base64 encoded .woff2 file]') format('woff2'),
          url('data:application/font-truetype;charset=utf-8;base64,[Base64 encoded .ttf file]') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
       :host{
         --sn-wc-font-size:16px;
         --sn-wc-text-color:#1f1f1f;
         --sn-wc-line-height:24px;
         --sn-wc-padding-x: 0px;
         --sn-wc-padding-y: 16px;
       }
       .sn-wc-text{
        font-family: lato;
        font-size: var(--sn-wc-font-size);
        color: var( --sn-wc-text-color);
        line-height: var(--sn-wc-line-height);
        font-weight: regular;
        margin:0;
        padding: var( --sn-wc-padding-y) var(--sn-wc-padding-x);
    }
    `);customElements.define("sn-wc-text",o);
