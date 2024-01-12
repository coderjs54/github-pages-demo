var U=Object.defineProperty,q=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var w=(e,a,l)=>a in e?U(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,E=(e,a)=>{for(var l in a||(a={}))A.call(a,l)&&w(e,l,a[l]);if(I)for(var l of I(a))H.call(a,l)&&w(e,l,a[l]);return e},B=(e,a)=>q(e,K(a));import{d as R,i as O,c as L,r as $,I as f,w as G,o as W,E as u,m as g,q as v,y as r,G as d,N as S,F as N,A as k,C as M,z as V}from"../vendors/element-plus-6f9977bb.js";import{r as T,U as z,_ as j,u as J,d as Q,b as X}from"./index.1a2bb961.js";function Y(){return T.post(z.INVOICE.queryInvoiceProvider,{})}function Z(e){return T.post(z.INVOICE.queryInvoice,e)}const _=R({name:"invoiceverify",setup(){const e=J(),a=Q(),l=X(),F=O("setTableHeaders"),y=()=>{o.loading=!0;const{pageSize:t,currentPage:i}=f(o.pagination),{invoiceNumber:h,deliveryNumber:m,hospitalCode:n,invoiceProvider:s}=f(o.searchParam);Z({BeginPostingDate:"",EndPostingDate:"",InvoiceNo:h,DeliverOrderId:m,HospitalCode:n,ProviderName:s,VerifyStatus:"0",ApproveStatus:"2",PageNo:i,RecordPerPage:t}).then(b=>{o.pagination.total=b.TotalRecordCount,D(b.invoices)}).finally(()=>{o.loading=!1})},D=t=>{o.tableData=t.map(i=>{const{INVOICEDATE:h,INVOICEAMT:m,INVOICENO:n,INVOICECODE:s,VerifyStatus:c,ProviderName:b}=i;return{invoiceNumber:n,invoiceSerialNumber:s,invoiceMoney:m,status:c?"\u5DF2\u6838\u9500":"\u5F85\u6838\u9500",provider:b,invoiceCreateTime:h.substr(0,10)}})},p=t=>{t&&(o.pagination.currentPage=1),y()},P=L(()=>o.headersConfig.filter(t=>!t.hidden)),o=$({loading:!1,searchParam:{invoiceNumber:"",deliveryNumber:"",hospitalCode:"",invoiceProvider:""},pagination:{currentPage:1,total:0,pageSize:30},invoiceProviderOptions:[],multipleSelection:[],headersConfig:[{label:"\u53D1\u7968\u53F7",prop:"invoiceNumber"},{label:"\u53D1\u7968\u7F16\u53F7",prop:"invoiceSerialNumber"},{label:"\u53D1\u7968\u91D1\u989D",prop:"invoiceMoney"},{label:"\u72B6\u6001",prop:"status"},{label:"\u4F9B\u5E94\u5546",prop:"provider"},{label:"\u5F00\u7968\u65F6\u95F4",prop:"invoiceCreateTime"}],tableData:[]}),C={calcHeaderWidth:O("calcHeaderMinWidth"),handlePaginationChange(){p(!1)},handleClickSetting(){F(o.headersConfig,t=>{o.headersConfig=t})},handleChangeMultiple(t){o.multipleSelection=t},handleSearch(){p(!0)},handleGoVerify(){const t=f(o.multipleSelection);!t.length||e.push({name:"invoiceverifying",params:{chosenTableData:JSON.stringify(t)}})}};return G(()=>a.getters.settings,()=>{o.headersConfig=a.getters.settings[l.name]||o.headersConfig}),W(()=>{Promise.all([Y().then(t=>{o.invoiceProviderOptions=t.Providers.map(i=>({label:i,value:i}))})]).then(()=>{y()})}),B(E({state:o},C),{headersShown:P})}}),x=M("\u67E5\u8BE2");function ee(e,a,l,F,y,D){const p=u("el-input"),P=u("el-option"),o=u("el-select"),C=u("el-button"),t=u("styled-search"),i=u("el-table-column"),h=u("styled-table"),m=u("styled-pagination");return g(),v(N,null,[r(t,{"hide-search-more":""},{"styled-search-left":d(()=>[r(p,{modelValue:e.state.searchParam.invoiceNumber,"onUpdate:modelValue":a[1]||(a[1]=n=>e.state.searchParam.invoiceNumber=n),placeholder:"\u8BF7\u8F93\u5165\u53D1\u7968\u53F7",clearable:"",onKeydown:S(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),r(p,{modelValue:e.state.searchParam.deliveryNumber,"onUpdate:modelValue":a[2]||(a[2]=n=>e.state.searchParam.deliveryNumber=n),placeholder:"\u8BF7\u8F93\u5165SAP\u4EA4\u8D27\u5355\u53F7",clearable:"",onKeydown:S(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),r(p,{modelValue:e.state.searchParam.hospitalCode,"onUpdate:modelValue":a[3]||(a[3]=n=>e.state.searchParam.hospitalCode=n),placeholder:"\u8BF7\u8F93\u5165\u9662\u5185\u7801\u3001\u7CFB\u7EDF\u7801",clearable:"",onKeydown:S(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),r(o,{modelValue:e.state.searchParam.invoiceProvider,"onUpdate:modelValue":a[4]||(a[4]=n=>e.state.searchParam.invoiceProvider=n),placeholder:"\u8BF7\u9009\u62E9\u4F9B\u5E94\u5546",clearable:"",onChange:e.handleSearch},{default:d(()=>[(g(!0),v(N,null,k(e.state.invoiceProviderOptions,(n,s)=>(g(),v(P,{key:s,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),r(C,{type:"primary",class:"search",onClick:e.handleSearch},{default:d(()=>[x]),_:1},8,["onClick"])]),"styled-search-right":d(()=>[r(C,{type:"primary",disabled:e.state.multipleSelection.length!==1,class:"search",onClick:e.handleGoVerify},{default:d(()=>[M("\u53BB\u6838\u9500("+V(e.state.multipleSelection.length)+")",1)]),_:1},8,["disabled","onClick"])]),_:1}),r(h,{setting:"",multiple:"",loading:e.state.loading,data:e.state.tableData,onChangeMultiple:e.handleChangeMultiple,onClickSetting:e.handleClickSetting},{"table-columns":d(()=>[(g(!0),v(N,null,k(e.headersShown,(n,s)=>(g(),v(i,{"show-overflow-tooltip":"",key:s,prop:n.prop,label:n.label,"min-width":e.calcHeaderWidth(n,s)},{header:d(c=>[r("span",null,V(c.column.label),1)]),default:d(c=>[r("span",null,V(c.row[n.prop]),1)]),_:2},1032,["prop","label","min-width"]))),128))]),_:1},8,["loading","data","onChangeMultiple","onClickSetting"]),r(m,{total:e.state.pagination.total,"current-page":e.state.pagination.currentPage,"onUpdate:current-page":a[5]||(a[5]=n=>e.state.pagination.currentPage=n),"page-size":e.state.pagination.pageSize,"onUpdate:page-size":a[6]||(a[6]=n=>e.state.pagination.pageSize=n),onPaginationChange:e.handlePaginationChange},null,8,["total","current-page","page-size","onPaginationChange"])],64)}var te=j(_,[["render",ee]]);export{te as default};
