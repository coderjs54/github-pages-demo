var I=Object.defineProperty,R=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var v=(e,a,s)=>a in e?I(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,F=(e,a)=>{for(var s in a||(a={}))N.call(a,s)&&v(e,s,a[s]);if(w)for(var s of w(a))L.call(a,s)&&v(e,s,a[s]);return e},S=(e,a)=>R(e,H(a));import{_ as T,u as $,b as q,d as z}from"./index.1a2bb961.js";import{d as j,r as G,c as V,i as Y,S as k,w as J,O as K,Y as M,j as P,k as Q,E as r,m,q as _,y as t,F as B,A as X,z as E,B as Z,C}from"../vendors/element-plus-6f9977bb.js";import{V as x}from"./index-59b3f7ec.js";import{h as ee,i as te,_ as U,a as ae}from"./failed-0ae6e7e8.js";import{_ as ue}from"./tip-1b2ff95a.js";import"./md5-3215d1da.js";const oe=j({name:"dangeroutwarehousing",components:{"validate-acceptor-dialog":x},setup(){const e=$(),a=q(),s=z(),h={labelWidth:"90px",FROM_WHERE:"/dangeroutwarehouse"},u=G({headersConfig:[{label:"\u5E8F\u53F7",prop:"id"},{label:"\u9662\u5185\u7801",prop:"hospital_code"},{label:"\u5E93\u4F4D",prop:"position1"},{label:"\u7CFB\u7EDF\u7801",prop:"system_code"},{label:"\u7269\u6599\u540D\u79F0",prop:"name"},{label:"\u7269\u6599\u7B80\u79F0",prop:"shortname"},{label:"\u7269\u6599\u6279\u53F7",prop:"LotNumber"},{label:"\u54C1\u724C",prop:"brand"},{label:"\u7EC4\u7EC7\u540D\u79F0",prop:"department"},{label:"\u64CD\u4F5C\u5458",prop:"Operator1Id"},{label:"\u5E93\u5B58\u91CF",prop:"inventory"},{label:"\u5355\u4F4D",prop:"unit"},{label:"\u9886\u7528\u6570\u91CF",prop:"use_number"},{label:"\u6279\u6B21\u5355\u4EF7",prop:"price"},{label:"\u7269\u6599\u89C4\u683C",prop:"size"},{label:"\u7269\u6599\u7C7B\u578B",prop:"kind"},{label:"\u6548\u671F",prop:"validity",width:110},{label:"\u514B\u9686\u53F7",prop:"CloneNumber"},{label:"\u75C5\u79CD\u7C7B\u578B",prop:"DiseaseType"}],tableData:[],acceptanceData:{acceptor1:V(()=>s.getters.username)},secondAcceptorList:[],acceptDialog:!1,accepting:!1,dialogValidateShow:!1,validateSuccess:!1,MinUnitTypeMap:V(()=>s.getters.MinUnitTypeMap)}),D={calcHeaderWidth:Y("calcHeaderMinWidth"),handleOutWarehouse(){u.acceptDialog=!0},handleGoBack(){e.go(-1)},confirmOutWarehouse(){if(u.tableData.some(p=>Number(p.out_number)<=0))return k.error("\u4E0D\u5141\u8BB8\u5C06\u51FA\u5E93\u91CF\u8BBE\u7F6E\u4E3A\u975E\u6B63\u6570\uFF0C\u8BF7\u60A8\u8BBE\u7F6E\u6B63\u786E\u7684\u51FA\u5E93\u91CF\uFF01");const i={UseHChemicals:u.tableData.map(p=>{const{id:n,use_unit:c,use_number:g}=p;return{StoreId:n,amount:g,unit:u.MinUnitTypeMap.get(c)}})};u.accepting=!0,ee(i).then(()=>{k.success("\u64CD\u4F5C\u6210\u529F"),e.push(h.FROM_WHERE)}).finally(()=>{u.accepting=!1,u.acceptDialog=!1})},handleValidateSuccess(){u.validateSuccess=!0}};return J(()=>s.getters.settings,()=>{u.headersConfig=s.getters.settings[a.name]||u.headersConfig}),K(()=>{let i=a.params.chosenTableData;if(!i||(i=JSON.parse(i),!i.length))return e.push(h.FROM_WHERE);u.tableData=i.map(n=>{const{material:c}=n,{inOutStoreUnits:g,unitMultiples:f}=c,b=g.slice(1,-1).split(",").at(-1);return S(F({},n),{use_number:0,use_unit:u.MinUnitTypeMap.get(b)})});const p=u.tableData.map(n=>n.DepartmentId);te(p).then(n=>{u.secondAcceptorList=n.inspectors.map(c=>({label:c.UserDisplayName,value:c.UserName})),u.secondAcceptorList.length===0&&(u.tableData.length===1?M({title:"\u63D0\u793A",message:"\u6682\u65F6\u627E\u4E0D\u5230\u53EF\u4EE5\u4F5C\u4E3A\u6B64\u5371\u9669\u54C1\u7684\u7B2C\u4E8C\u89C1\u8BC1\u4EBA\uFF0C\u8BF7\u8054\u7CFB\u90E8\u95E8\u7BA1\u7406\u5458\u8FDB\u884C\u6DFB\u52A0\u3002",type:"warning",duration:0}):M({title:"\u63D0\u793A",message:"\u6682\u65F6\u627E\u4E0D\u5230\u53EF\u4EE5\u540C\u65F6\u4F5C\u4E3A\u8FD9\u4E9B\u5371\u9669\u54C1\u7684\u7B2C\u4E8C\u89C1\u8BC1\u4EBA\uFF0C\u8BF7\u8FD4\u56DE\u91CD\u65B0\u9009\u62E9\u3002",type:"warning",duration:0}))})}),F(F({state:u},D),h)}}),o=Z();P("data-v-25ccfe80");const se=t("img",{class:"verified-img1",src:U,alt:"\u9A8C\u8BC1\u6210\u529F"},null,-1),le=C("\u53CC\u4EBA\u53CC\u9501\u9A8C\u8BC1"),ne={key:0,class:"validate-message success"},ie=t("span",null,"\u53CC\u4EBA\u53CC\u9501\u5DF2\u9A8C\u8BC1",-1),re=t("img",{src:U,alt:"\u9A8C\u8BC1\u6210\u529F"},null,-1),pe={key:1,class:"validate-message error"},ce=t("span",null,"\u53CC\u4EBA\u53CC\u9501\u672A\u9A8C\u8BC1",-1),de=t("img",{src:ae,alt:"\u9A8C\u8BC1\u5931\u8D25"},null,-1),me=C("\u786E\u5B9A\u9886\u7528 "),_e=C("\u8FD4\u56DE\u9009\u62E9"),Ce={style:{"margin-left":"8px"}},he={key:1},ge=t("div",{class:"title"},"\u63D0\u793A",-1),Fe={class:"tip-body"},Ee=t("img",{src:ue,alt:""},null,-1),be=C("\u786E\u8BA4\u8981\u5BF9\u9009\u4E2D\u7684"),Be={class:"item-name"},De=C("\u4E2A\u7269\u6599\u8FDB\u884C\u9886\u7528\u5417?"),fe={class:"right-footer"},ye=C("\u53D6\u6D88"),Ae=C("\u786E\u5B9A");Q();const we=o((e,a,s,h,u,D)=>{const i=r("el-input"),p=r("el-form-item"),n=r("el-button"),c=r("el-form"),g=r("styled-search"),f=r("el-table-column"),y=r("styled-table"),b=r("validate-acceptor-dialog"),O=r("el-dialog");return m(),_(B,null,[t(g,{"hide-search-more":""},{"styled-search-left":o(()=>[t(c,{class:"danger-accepting",inline:!0,model:e.state.acceptanceData,"label-position":"right"},{default:o(()=>[t(p,{label:"\u9886\u7528\u4EBA"},{default:o(()=>[t(i,{disabled:"",modelValue:e.state.acceptanceData.acceptor1,"onUpdate:modelValue":a[1]||(a[1]=l=>e.state.acceptanceData.acceptor1=l),placeholder:"\u8BF7\u8F93\u5165\u9886\u7528\u4EBA"},null,8,["modelValue"]),se]),_:1}),t(p,null,{default:o(()=>[t(n,{type:"primary",onClick:a[2]||(a[2]=l=>e.state.dialogValidateShow=!0)},{default:o(()=>[le]),_:1}),e.state.validateSuccess?(m(),_("span",ne,[ie,re])):(m(),_("span",pe,[ce,de]))]),_:1})]),_:1},8,["model"])]),"styled-search-right":o(()=>[t(n,{type:"primary",class:"search",onClick:e.handleOutWarehouse,disabled:!e.state.validateSuccess},{default:o(()=>[me]),_:1},8,["onClick","disabled"]),t(n,{type:"primary",plain:"",onClick:e.handleGoBack},{default:o(()=>[_e]),_:1},8,["onClick"])]),_:1}),t(y,{setting:"",data:e.state.tableData},{"table-columns":o(()=>[(m(!0),_(B,null,X(e.state.headersConfig,(l,A)=>(m(),_(f,{"show-overflow-tooltip":"",key:A,prop:l.prop,label:l.label,"min-width":e.calcHeaderWidth(l,A)},{header:o(d=>[t("span",null,E(d.column.label),1)]),default:o(d=>[d.column.property==="use_number"?(m(),_(B,{key:0},[t(i,{size:"small",style:{width:"calc(100% - 25px)"},type:"text",modelValue:d.row[l.prop],"onUpdate:modelValue":W=>d.row[l.prop]=W},null,8,["modelValue","onUpdate:modelValue"]),t("span",Ce,E(d.row.use_unit),1)],64)):(m(),_("span",he,E(d.row[l.prop]),1))]),_:2},1032,["prop","label","min-width"]))),128))]),_:1},8,["data"]),t(b,{purpose:"Use",param:"StoreIds","dialog-show":e.state.dialogValidateShow,"onUpdate:dialog-show":a[3]||(a[3]=l=>e.state.dialogValidateShow=l),acceptors:e.state.secondAcceptorList,ids:e.state.tableData.map(l=>l.id),onValidateSuccess:e.handleValidateSuccess},null,8,["dialog-show","acceptors","ids","onValidateSuccess"]),t(O,{width:"466px",modelValue:e.state.acceptDialog,"onUpdate:modelValue":a[5]||(a[5]=l=>e.state.acceptDialog=l)},{title:o(()=>[ge]),footer:o(()=>[t("div",fe,[t(n,{onClick:a[4]||(a[4]=l=>e.state.acceptDialog=!1),class:"cancel"},{default:o(()=>[ye]),_:1}),t(n,{type:"primary",loading:e.state.accepting,onClick:e.confirmOutWarehouse,class:"confirm"},{default:o(()=>[Ae]),_:1},8,["loading","onClick"])])]),default:o(()=>[t("div",Fe,[Ee,t("span",null,[be,t("span",Be,E(e.state.tableData.length),1),De])])]),_:1},8,["modelValue"])],64)});var We=T(oe,[["render",we],["__scopeId","data-v-25ccfe80"]]);export{We as default};
