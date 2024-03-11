import{s as t,x as s}from"./lit-element-KtrydcFn.js";import"./Text-Bb5H9mbN.js";import"./Link-BRljDcSS.js";class o extends t{constructor(){super()}static get properties(){return{linkType:{type:String},imageSrc:{type:String},heading:{type:String},subHeading:{type:String},linkLabel:{type:String},handleClick:{type:Object}}}getCardComponent(){}render(){return`${this.type}`,s`
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    .card {
      --bs-card-spacer-y: 16px;
      --bs-card-spacer-x: 16px;
      --bs-card-border-width: 1px;
      --bs-card-border-color: rgba(0, 0, 0, 0.175);
      --bs-card-border-radius: 0.375rem;
      --bs-card-bg: #fff;
      --bs-card-img-overlay-padding: 1rem;
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      height: var(--bs-card-height);
      word-wrap: break-word;
      background-color: var(--bs-card-bg);
      background-clip: border-box;
      border: var(--bs-card-border-width) solid var(--bs-card-border-color);
      border-radius: var(--bs-card-border-radius);
    }
    .card-body {
      flex: 1 1 auto;
      padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
      color: var(--bs-card-color);
    }
    .card-img-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: var(--bs-card-img-overlay-padding);
      border-radius: var(--bs-card-inner-border-radius);
    }
    
    .card-img,
    .card-img-top,
    .card-img-bottom {
      width: 100%;
    }
    
    .card-img,
    .card-img-top {
      border-top-left-radius: var(--bs-card-inner-border-radius);
      border-top-right-radius: var(--bs-card-inner-border-radius);
    }
    
    .card-img,
    .card-img-bottom {
      border-bottom-right-radius: var(--bs-card-inner-border-radius);
      border-bottom-left-radius: var(--bs-card-inner-border-radius);
    }
  
    .snow-storybook-card-image{
      height:140px;
      object-fit: cover;
  }
  .snow-storybook-card{
      max-width:401px;
  }
  
  @media screen and (max-width: 568px) {
      .snow-storybook-card-image{ 
        display: none;
      }
    }  
    </style>
  <div class="card snow-storybook-card">
    <img src=${this.imageSrc} class="snow-storybook-card-image">
    <div class="card-body">
     <sn-wc-heading heading-level="3" label="${this.heading}"></sn-wc-heading>
     <sn-wc-text type="sub-heading">${this.subHeading}</sn-wc-text>
     <sn-wc-link style="--sn-wc-margin-top:32px" type="${this.linkType}" label="${this.linkLabel}" onClick="${this.handleClick}"></sn-wc-link>
    </div>
  </div>
    `}}customElements.define("sn-wc-card",o);const b={title:"Components/Card",component:"sn-wc-card",argTypes:{handleClick:{action:"onClick"},linkType:{options:["Default","Outline"],control:{type:"radio"}}}},r={args:{linkType:"Default",imageSrc:"https://s3-alpha-sig.figma.com/img/b05d/eb89/7c8e3f39a5b8ec8fe8980c6ca061679a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QhUROYtstTOAiWh05RG~fHW~RwfHqIoX7RzbuEse6q05uFUT19H~dO5hqyYqKd8rXEkDt7Hi5vrINzalCG49uopyuuLacn-AZ7pN3S-VvEICp5xOmWfwvd-SbQCvn8xSFPxCOgCEUipDmw0UnoCaBd56WIVK-HuxDnHDFxgliCUNtQexPP9mt195Vrn8e9mEYA3u5BHD55UfDh-1bB2Mtvp7UCW98UHtAsFxw2hZ5rDilMvgYkP5T-Blb4b-2ygdHW~IBzvZr1T9zjWIaYXhOKpazkQx03husN09RDt9o1Et-4EJSWRW10kusIDRcCuE1rGr02mgKOOWWn3oQHOEGg__",heading:"Focus on work that matters",subHeading:"ServiceNow eliminates manual tasks with automated, intuitive experiences. Get answers, approvals, and insights when they really matter.",linkLabel:"See more",handleClick:()=>{console.log("Card Link clicked")}}};var a,e,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    linkType: 'Default',
    imageSrc: 'https://s3-alpha-sig.figma.com/img/b05d/eb89/7c8e3f39a5b8ec8fe8980c6ca061679a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QhUROYtstTOAiWh05RG~fHW~RwfHqIoX7RzbuEse6q05uFUT19H~dO5hqyYqKd8rXEkDt7Hi5vrINzalCG49uopyuuLacn-AZ7pN3S-VvEICp5xOmWfwvd-SbQCvn8xSFPxCOgCEUipDmw0UnoCaBd56WIVK-HuxDnHDFxgliCUNtQexPP9mt195Vrn8e9mEYA3u5BHD55UfDh-1bB2Mtvp7UCW98UHtAsFxw2hZ5rDilMvgYkP5T-Blb4b-2ygdHW~IBzvZr1T9zjWIaYXhOKpazkQx03husN09RDt9o1Et-4EJSWRW10kusIDRcCuE1rGr02mgKOOWWn3oQHOEGg__',
    heading: "Focus on work that matters",
    subHeading: "ServiceNow eliminates manual tasks with automated, intuitive experiences. Get answers, approvals, and insights when they really matter.",
    linkLabel: "See more",
    handleClick: () => {
      console.log("Card Link clicked");
    }
  }
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const p=["Default"];export{r as Default,p as __namedExportsOrder,b as default};
