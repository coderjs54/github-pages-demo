var $=Object.defineProperty;var c=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var u=(e,o,t)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(e,o)=>{for(var t in o||(o={}))D.call(o,t)&&u(e,t,o[t]);if(c)for(var t of c(o))S.call(o,t)&&u(e,t,o[t]);return e};import{_ as g,N as I}from"./index.1a2bb961.js";import{d as m,Q as B,j as f,k as h,E as n,m as C,q as v,y as s,B as b,C as d,r as w,F}from"../vendors/element-plus-6f9977bb.js";const M=m({props:{dialogVisible:Boolean},emits:["update:dialogVisible"],setup(e,{emit:o}){const t={handleCloseDialog(){o("update:dialogVisible",!1)}};return i(i({},B(e)),t)}}),a=b();f("data-v-cd8d86f8");const N=s("span",null,"This is a message",-1),T={class:"dialog-footer"},U=d("\u53D6\u6D88"),q=d("\u786E\u5B9A");h();const E=a((e,o,t,V,k,y)=>{const l=n("el-button"),_=n("el-dialog");return C(),v(_,{title:"Tips",width:"30%",modelValue:e.dialogVisible,"onUpdate:modelValue":o[1]||(o[1]=p=>e.dialogVisible=p),onClose:e.handleCloseDialog},{footer:a(()=>[s("span",T,[s(l,{onClick:e.handleCloseDialog},{default:a(()=>[U]),_:1},8,["onClick"]),s(l,{type:"primary",onClick:e.handleCloseDialog},{default:a(()=>[q]),_:1},8,["onClick"])])]),default:a(()=>[N]),_:1},8,["modelValue","onClose"])});var j=g(M,[["render",E],["__scopeId","data-v-cd8d86f8"]]);const A=m({components:{"my-dialog":j},setup(){const e=w({dialogVisible:!1});return i({state:e},{handleDeleteSettings(){I({Settings:""}).then(t=>{console.log(t)})},handleClick(){e.dialogVisible=!0}})}}),r=b();f("data-v-448a012e");const Q=d("\u5220\u9664\u7528\u6237\u7684settings"),R=d("\u5F00\u542Fdialog");h();const z=r((e,o,t,V,k,y)=>{const l=n("el-button"),_=n("my-dialog");return C(),v(F,null,[s(l,{onClick:e.handleDeleteSettings},{default:r(()=>[Q]),_:1},8,["onClick"]),s(l,{type:"primary",onClick:e.handleClick},{default:r(()=>[R]),_:1},8,["onClick"]),s(_,{"dialog-visible":e.state.dialogVisible,"onUpdate:dialog-visible":o[1]||(o[1]=p=>e.state.dialogVisible=p)},null,8,["dialog-visible"])],64)});var K=g(A,[["render",z],["__scopeId","data-v-448a012e"]]);export{K as default};
