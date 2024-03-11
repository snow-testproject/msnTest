import{s as o,x as e}from"./lit-element-KtrydcFn.js";class l extends o{constructor(){super(),this.surface="Dark"}static get properties(){return{surface:{type:String},label:{type:String},"heading-level":{type:String}}}getHeading(i){const a=i=="Dark"?"dark-surface":"white-surface";return this["heading-level"]=="1"?e`<h1 class=${["sn-wc-heading",a].join(" ")} >${this.label}</h1>`:this["heading-level"]=="2"?e`<h2 class=${["sn-wc-heading",a].join(" ")}>${this.label}</h2>`:this["heading-level"]=="3"?e`<h3 class=${["sn-wc-heading",a].join(" ")}>${this.label}</h3>`:this["heading-level"]=="4"?e`<h4 class=${["sn-wc-heading",a].join(" ")}>${this.label}</h4>`:this["heading-level"]=="5"?e`<h5 class=${["sn-wc-heading",a].join(" ")}>${this.label}</h5>`:this["heading-level"]=="6"?e`<h6 class=${["sn-wc-heading",a].join(" ")}>${this.label}</h6>`:e`<h1 class=${["sn-wc-heading",a].join(" ")}>${this.label}</h1>`}render(){return e`
    <style>
    @font-face {
        font-family: 'Gilroy';
        src: url('data:application/font-woff;charset=utf-8;base64,[Base64 encoded .woff file]') format('woff'),
            url('data:application/font-woff2;charset=utf-8;base64,[Base64 encoded .woff2 file]') format('woff2'),
            url('data:application/font-truetype;charset=utf-8;base64,[Base64 encoded .ttf file]') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    .sn-wc-heading{
      font-family: Gilroy;
      font-weight: bold;
      margin: 0px;
     }
     .white-surface{
        color:  #FFFFFF;
     }
     .dark-surface{
        color:  #1f1f1f;
     }
    </style>
    ${this.getHeading(this.surface)}
    `}}customElements.define("sn-wc-heading",l);const h={title:"Components/Heading",component:"sn-wc-heading",argTypes:{surface:{control:{type:"radio"},options:["Dark","White"]},"heading-level":{control:{type:"select"},options:["1","2","3","4","5","6"]}}},t={args:{label:"Browse our demo library",surface:"Dark"}};var s,n,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Browse our demo library',
    surface: "Dark"
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const d=["Heading"];export{t as Heading,d as __namedExportsOrder,h as default};
