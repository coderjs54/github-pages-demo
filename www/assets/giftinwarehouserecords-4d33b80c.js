var L=Object.defineProperty,W=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var H=(e,n,o)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,D=(e,n)=>{for(var o in n||(n={}))Y.call(n,o)&&H(e,o,n[o]);if(R)for(var o of R(n))$.call(n,o)&&H(e,o,n[o]);return e},S=(e,n)=>W(e,A(n));import{d as q,i as g,r as K,c as T,w as O,o as G,E as u,m as M,q as _,y as s,G as l,N as j,F as z,A as Q,z as V,C as w,I as E}from"../vendors/element-plus-6f9977bb.js";import{_ as J,d as Z,b as x}from"./index.1a2bb961.js";import{r as ee}from"./inwarehouserecords-cb91842f.js";const ae=q({setup(){const e=Z(),n=x(),o=g("exportXLSX"),B=g("exportPDF"),k=g("setTableHeaders"),N=()=>{t.loading=!0;const{pageSize:r,currentPage:c}=E(t.pagination),{dateRange:a,shortname:i,cloneNumber:d,diseaseType:C}=E(t.searchParam),{department:f,materialType:F,brand:y,instrument:P,warehouse:X}=E(t.searchMoreParam),[U,v]=a||["",""];ee({search_word:i,QueryHChemical:0,departmentId:"",InStoreBeginTime:U,InStoreEndTime:v,CloneNumber:d,DiseaseType:C,DepartmentId:f,MaterialType:F,Brand:y,Instrument:P,GoodsShelf:X,NeedPaging:!0,PageNo:c,RecordPerPage:r}).then(I=>{t.pagination.total=I.TotalRecordCount,h(I.stores)}).finally(()=>{t.loading=!1})},h=r=>{t.tableData=r.map(c=>{const{material:a,store:i}=c,{CloneNumber:d,unit:C,OperateTime:f,MaterialinThisStage:F,ChangeReason:y,departmentName:P}=i;return S(D({},i),{currStage:y,MaterialinThisStage:F?"\u662F":"\u5426",OperateTime:f.substr(0,19).replace("T"," "),departmentName:P,unit:t.MinUnitTypeMap.get(C),material_name:a==null?void 0:a.name,shortname:a==null?void 0:a.short_name,standard:a==null?void 0:a.spec,brandName:t.brandIdMap[a==null?void 0:a.brand_id],cloneNumber:d})})},t=K({loading:!1,MinUnitTypeMap:T(()=>e.getters.MinUnitTypeMap),brandIdMap:T(()=>e.getters.brandIdMap),searchParam:{shortname:"",dateRange:"",cloneNumber:"",diseaseType:""},searchMoreParam:{department:"",materialType:"",brand:"",instrument:"",warehouse:""},tableData:[],headersConfig:[{label:"\u5E8F\u53F7",prop:"id"},{label:"\u9662\u5185\u7801",prop:"MaterialId"},{label:"\u7269\u6599\u540D\u79F0",prop:"material_name"},{label:"\u7269\u6599\u7B80\u79F0",prop:"shortname"},{label:"\u6570\u91CF",prop:"amount"},{label:"\u5355\u4F4D",prop:"unit"},{label:"\u5165\u5E93\u65F6\u95F4",prop:"OperateTime"},{label:"\u6240\u5C5E\u90E8\u95E8",prop:"departmentName"}],pagination:{currentPage:1,total:0,pageSize:30},PDFHandling:!1}),p=r=>{r&&(t.pagination.currentPage=1),N()},m=T(()=>t.headersConfig.filter(r=>!r.hidden)),b={calcHeaderWidth:g("calcHeaderMinWidth"),handleClickSetting(){k(t.headersConfig,r=>{t.headersConfig=r})},handlePaginationChange(){p(!1)},handleSearch(){p(!0)},handleExportXLSX(){o(t.headersConfig,t.tableData,"\u5165\u5E93\u8BB0\u5F55","\u5165\u5E93\u8BB0\u5F55\u8BE6\u60C5")},handleExportPDF(){t.PDFHandling=!0,B(t.headersConfig,t.tableData,"\u9A8C\u6536\u8BB0\u5F55").finally(()=>{t.PDFHandling=!1})}};return O(()=>e.getters.settings,()=>{t.headersConfig=e.getters.settings[n.name]||t.headersConfig}),G(()=>{}),S(D({state:t},b),{headersShown:m})}}),te={class:"date-box"},ne=w("\u67E5\u8BE2"),oe=w("\u5BFC\u51FAxlsx"),re=w("\u5BFC\u51FApdf");function se(e,n,o,B,k,N){const h=u("el-date-picker"),t=u("el-input"),p=u("el-button"),m=u("styled-search"),b=u("el-table-column"),r=u("styled-table"),c=u("styled-pagination");return M(),_(z,null,[s(m,{"hide-search-more":""},{"styled-search-left":l(()=>[s("div",te,[s(h,{modelValue:e.state.searchParam.dateRange,"onUpdate:modelValue":n[1]||(n[1]=a=>e.state.searchParam.dateRange=a),type:"daterange","value-format":"YYYY-MM-DD","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),s(t,{modelValue:e.state.searchParam.cloneNumber,"onUpdate:modelValue":n[2]||(n[2]=a=>e.state.searchParam.cloneNumber=a),placeholder:"\u8BF7\u8F93\u5165\u8D60\u54C1\u540D\u79F0",clearable:"",onKeydown:j(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),s(p,{type:"primary",class:"search",onClick:e.handleSearch},{default:l(()=>[ne]),_:1},8,["onClick"])]),"styled-search-right":l(()=>[s(p,{type:"success",class:"export",disabled:e.state.tableData.length===0,onClick:e.handleExportXLSX},{default:l(()=>[oe]),_:1},8,["disabled","onClick"]),s(p,{type:"success",class:"export",loading:e.state.PDFHandling,disabled:e.state.tableData.length===0,onClick:e.handleExportPDF},{default:l(()=>[re]),_:1},8,["loading","disabled","onClick"])]),_:1}),s(r,{loading:e.state.loading,setting:"",data:e.state.tableData,onClickSetting:e.handleClickSetting},{"table-columns":l(()=>[(M(!0),_(z,null,Q(e.headersShown,(a,i)=>(M(),_(b,{"show-overflow-tooltip":"",key:i,prop:a.prop,label:a.label,"min-width":e.calcHeaderWidth(a,i)},{header:l(d=>[s("span",null,V(d.column.label),1)]),default:l(d=>[s("span",null,V(d.row[a.prop]),1)]),_:2},1032,["prop","label","min-width"]))),128))]),_:1},8,["loading","data","onClickSetting"]),s(c,{total:e.state.pagination.total,"current-page":e.state.pagination.currentPage,"onUpdate:current-page":n[3]||(n[3]=a=>e.state.pagination.currentPage=a),"page-size":e.state.pagination.pageSize,"onUpdate:page-size":n[4]||(n[4]=a=>e.state.pagination.pageSize=a),onPaginationChange:e.handlePaginationChange},null,8,["total","current-page","page-size","onPaginationChange"])],64)}var ce=J(ae,[["render",se]]);export{ce as default};
