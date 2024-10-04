import{f as x}from"./index-C_FWhylE.js";import{j as z}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const b=({primary:f=!1,size:B="medium",backgroundColor:T,label:k,...S})=>{const v=f?"storybook-button--primary":"storybook-button--secondary";return z.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${B}`,v].join(" "),...S,children:k})};b.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _={title:"Example/Button",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:x()}},e={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,g,y;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const E=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,o as Small,E as __namedExportsOrder,_ as default};
