var _=Object.defineProperty,z=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var w=(e,a,o)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,S=(e,a)=>{for(var o in a||(a={}))q.call(a,o)&&w(e,o,a[o]);if(O)for(var o of O(a))H.call(a,o)&&w(e,o,a[o]);return e},P=(e,a)=>z(e,K(a));import{d as Y,i as E,r as L,c as N,w as W,o as $,E as s,m as y,q as F,y as l,G as i,N as A,F as V,A as X,z as B,I as R,C as k}from"../vendors/element-plus-6f9977bb.js";import{r as j,U as G,_ as Q,d as J,b as Z}from"./index.1a2bb961.js";function x(e){return j.post(G.DELIVERY.queryMiddleTableDelivery,e)}const ee=Y({setup(){const e=J(),a=Z(),o=E("setTableHeaders"),T=E("openDeliveryRecordsPrintDialog"),C=()=>{n.loading=!0;const{pageSize:u,currentPage:m}=R(n.pagination),{dateRange:D,SOID:r,shortname:c,supplier:t,acceptStatus:h}=R(n.searchParam);let d,b;h===0?(d=!1,b=!1):h===1?(d=!0,b=!0):h===2&&(d=!0,b=!1);const[M,U]=D||["",""];x({DeliverOrderId:r,SearchWord:c,RequestPurchaseBeginDate:M,RequestPurchaseEndDate:U,InvoiceNo:"",ProviderName:t,NeedCheckIsAccept:d,IsAccept:b,NeedCheckHChemical:!1,IsHChemical:!1,NeedPaging:!0,PageNumber:m,RecordPerPage:u}).then(I=>{n.pagination.total=I.TotalRecordCount,v(I.DeliverOrders)}).finally(()=>{n.loading=!1})},v=u=>{n.tableData=u.map(m=>{const{InvoiceNo:D,material:r,deliverOrder:c}=m;return P(S({},c),{INVDETID:D,SODATE:c.SODATE.replace("T"," "),material_name:r==null?void 0:r.name,shortname:r==null?void 0:r.short_name,brandName:n.brandIdMap[r==null?void 0:r.brand_id]})})},n=L({loading:!1,searchParam:{dateRange:"",SOID:"",acceptStatus:0,shortname:"",supplier:"",checked:!1},pagination:{currentPage:1,total:0,pageSize:30},tableData:[],headersConfig:[{label:"\u4EA4\u8D27\u5355ID",prop:"SOID"},{label:"\u4EA4\u8D27\u5355\u53F7",prop:"SONO"},{label:"\u4EA4\u8D27\u65E5\u671F",prop:"SODATE"},{label:"\u91C7\u8D2D\u5355\u53F7",prop:"PONO"},{label:"\u7269\u6599\u540D\u79F0",prop:"material_name"},{label:"\u7269\u6599\u7B80\u79F0",prop:"shortname"},{label:"\u54C1\u724C",prop:"brandName"},{label:"\u91C7\u8D2D\u5355\u660E\u7EC6\u53F7",prop:"PODETNO"},{label:"\u9662\u5185\u7801",prop:"DITEMCODE"},{label:"\u5355\u4F4D",prop:"DPACKUNIT"},{label:"\u9001\u8D27\u6570\u91CF",prop:"DQTY"},{label:"\u542B\u7A0E\u5355\u4EF7",prop:"DTAXPRC"},{label:"\u542B\u7A0E\u91D1\u989D",prop:"TAXAMT"},{label:"\u6279\u53F7",prop:"LOTNO"},{label:"\u6548\u671F",prop:"ENDDATE",width:160}],brandIdMap:N(()=>e.getters.brandIdMap)}),p=u=>{u&&(n.pagination.currentPage=1),C()},g=N(()=>n.headersConfig.filter(u=>!u.hidden)),f={calcHeaderWidth:E("calcHeaderMinWidth"),handleClickSetting(){o(n.headersConfig,u=>{n.headersConfig=u})},handlePaginationChange(){p(!1)},handleSearch(){p(!0)},handlePrintTableData(){T(n.headersConfig,n.tableData,"\u4EA4\u8D27\u5355\u8BB0\u5F55")}};return W(()=>e.getters.settings,()=>{n.headersConfig=e.getters.settings[a.name]||n.headersConfig}),$(()=>{C()}),P(S({state:n},f),{headersShown:g})}}),ae={class:"date-box"},te=k("\u67E5\u8BE2"),ne=k("\u6253\u5370");function le(e,a,o,T,C,v){const n=s("el-date-picker"),p=s("el-input"),g=s("el-option"),f=s("el-select"),u=s("el-button"),m=s("styled-search"),D=s("el-table-column"),r=s("styled-table"),c=s("styled-pagination");return y(),F(V,null,[l(m,{"hide-search-more":""},{"styled-search-left":i(()=>[l("div",ae,[l(n,{modelValue:e.state.searchParam.dateRange,"onUpdate:modelValue":a[1]||(a[1]=t=>e.state.searchParam.dateRange=t),type:"daterange","value-format":"YYYY-MM-DD","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),l(p,{modelValue:e.state.searchParam.SOID,"onUpdate:modelValue":a[2]||(a[2]=t=>e.state.searchParam.SOID=t),placeholder:"\u8BF7\u8F93\u5165\u4EA4\u8D27\u5355\u53F7",clearable:"",onKeydown:A(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),l(p,{modelValue:e.state.searchParam.shortname,"onUpdate:modelValue":a[3]||(a[3]=t=>e.state.searchParam.shortname=t),placeholder:"\u8BF7\u8F93\u5165\u7269\u6599\u540D\u79F0\u3001\u7B80\u79F0",clearable:"",onKeydown:A(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),l(p,{modelValue:e.state.searchParam.supplier,"onUpdate:modelValue":a[4]||(a[4]=t=>e.state.searchParam.supplier=t),placeholder:"\u8BF7\u8F93\u5165\u4F9B\u5E94\u5546\u540D\u79F0",clearable:"",onKeydown:A(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),l(f,{modelValue:e.state.searchParam.acceptStatus,"onUpdate:modelValue":a[5]||(a[5]=t=>e.state.searchParam.acceptStatus=t),placeholder:"\u8BF7\u9009\u62E9\u9A8C\u6536\u72B6\u6001",onChange:e.handleSearch},{default:i(()=>[l(g,{label:"\u5168\u90E8\u4EA4\u8D27\u5355",value:0}),l(g,{label:"\u5DF2\u9A8C\u6536",value:1}),l(g,{label:"\u672A\u9A8C\u6536",value:2})]),_:1},8,["modelValue","onChange"]),l(u,{type:"primary",class:"search",onClick:e.handleSearch},{default:i(()=>[te]),_:1},8,["onClick"])]),"styled-search-right":i(()=>[l(u,{type:"primary",class:"export",icon:"el-icon-printer",disabled:e.state.tableData.length===0,onClick:e.handlePrintTableData},{default:i(()=>[ne]),_:1},8,["disabled","onClick"])]),_:1}),l(r,{loading:e.state.loading,setting:"",data:e.state.tableData,onClickSetting:e.handleClickSetting},{"table-columns":i(()=>[(y(!0),F(V,null,X(e.headersShown,(t,h)=>(y(),F(D,{"show-overflow-tooltip":"",key:h,prop:t.prop,label:t.label,"min-width":e.calcHeaderWidth(t,h)},{header:i(d=>[l("span",null,B(d.column.label),1)]),default:i(d=>[l("span",null,B(d.row[t.prop]),1)]),_:2},1032,["prop","label","min-width"]))),128))]),_:1},8,["loading","data","onClickSetting"]),l(c,{total:e.state.pagination.total,"current-page":e.state.pagination.currentPage,"onUpdate:current-page":a[6]||(a[6]=t=>e.state.pagination.currentPage=t),"page-size":e.state.pagination.pageSize,"onUpdate:page-size":a[7]||(a[7]=t=>e.state.pagination.pageSize=t),onPaginationChange:e.handlePaginationChange},null,8,["total","current-page","page-size","onPaginationChange"])],64)}var de=Q(ee,[["render",le]]);export{de as default};
