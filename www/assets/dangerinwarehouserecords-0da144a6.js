var L=Object.defineProperty,W=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var U=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))K.call(t,r)&&U(e,r,t[r]);if(H)for(var r of H(t))$.call(t,r)&&U(e,r,t[r]);return e},M=(e,t)=>W(e,q(t));import{d as G,i as C,r as j,c as T,w as Q,o as J,E as d,m as h,q as m,y as l,G as s,N as V,F as v,A as Y,z as I,C as F,I as _}from"../vendors/element-plus-6f9977bb.js";import{r as Z,U as x,_ as ee,d as ae,b as te}from"./index.1a2bb961.js";function ne(e){return Z.post(x.INWAREHOUSE.queryInWarehouseRecords,e)}const re=G({setup(){const e=ae(),t=te(),r=C("exportPDF"),k=C("exportXLSX"),N=C("setTableHeaders"),S=()=>{n.loading=!0;const{pageSize:o,currentPage:g}=_(n.pagination),{dateRange:a,shortname:i,cloneNumber:u,diseaseType:f}=_(n.searchParam),{department:D,materialType:R,brand:B,instrument:w,warehouse:z}=_(n.searchMoreParam),[O,X]=a||["",""];ne({search_word:i,QueryHChemical:1,departmentId:"",InStoreBeginTime:O,InStoreEndTime:X,CloneNumber:u,DiseaseType:f,DepartmentId:D,MaterialType:R,Brand:B,Instrument:w,GoodsShelf:z,NeedPaging:!0,PageNo:g,RecordPerPage:o}).then(A=>{n.pagination.total=A.TotalRecordCount,y(A.stores)}).finally(()=>{n.loading=!1})},y=o=>{n.tableData=o.map(g=>{const{material:a,store:i}=g,{MaterialinThisStage:u,ChangeReason:f,OperateTime:D,departmentId:R,unit:B,departmentName:w}=i;return M(b({},i),{currStage:f,MaterialinThisStage:u?"\u662F":"\u5426",OperateTime:D.substr(0,19).replace("T"," "),departmentName:w,unit:n.MinUnitTypeMap.get(B),material_name:a.name,shortname:a==null?void 0:a.short_name,standard:a==null?void 0:a.spec,brandName:n.brandIdMap[a==null?void 0:a.brand_id]})})},p=o=>{o&&(n.pagination.currentPage=1),S()},c={currentStages:{\u4E00\u7EA7\u5165\u5E93:"level-one-in",\u4E8C\u7EA7\u5165\u5E93:"level-two-in",\u4E09\u7EA7\u5165\u5E93:"level-three-in"}},n=j({loading:!1,searchParam:{shortname:"",dateRange:"",cloneNumber:"",diseaseType:""},searchMoreParam:{department:"",materialType:"",brand:"",instrument:"",warehouse:""},headersConfig:[{label:"\u5E8F\u53F7",prop:"id"},{label:"\u8BA2\u5355\u53F7",prop:"DeliverOrderId"},{label:"\u9662\u5185\u7801",prop:"MaterialId"},{label:"\u7269\u6599\u540D\u79F0",prop:"material_name"},{label:"\u7269\u6599\u7B80\u79F0",prop:"shortname"},{label:"\u54C1\u724C",prop:"brandName"},{label:"\u89C4\u683C\u578B\u53F7",prop:"standard"},{label:"\u7269\u6599\u6279\u53F7",prop:"LotNumber"},{label:"\u6548\u671F",prop:"EndDate",width:160},{label:"\u6570\u91CF",prop:"amount"},{label:"\u5355\u4F4D",prop:"unit"},{label:"\u64CD\u4F5C\u5458",prop:"Operator1Id"},{label:"\u7B2C\u4E00\u9A8C\u6536\u4EBA",prop:"Operator2Id"},{label:"\u7B2C\u4E8C\u9A8C\u6536\u4EBA",prop:"Operator3Id"},{label:"\u5165\u5E93\u65F6\u95F4",prop:"OperateTime"},{label:"\u5165\u5E93\u7B49\u7EA7",prop:"currStage"},{label:"\u6240\u5C5E\u90E8\u95E8",prop:"departmentName"}],tableData:[],pagination:{currentPage:1,total:0,pageSize:30},PDFHandling:!1,MinUnitTypeMap:T(()=>e.getters.MinUnitTypeMap),brandIdMap:T(()=>e.getters.brandIdMap)}),E=T(()=>n.headersConfig.filter(o=>!o.hidden)),P={calcHeaderWidth:C("calcHeaderMinWidth"),handleClickSetting(){N(n.headersConfig,o=>{n.headersConfig=o})},handlePaginationChange(){p(!1)},handleSearch(){p(!0)},handleSearchMoreParamChange(o){n.searchMoreParam=o,p(!0)},handleExportXLSX(){k(n.headersConfig,n.tableData,"\u5371\u9669\u54C1\u5165\u5E93\u8BB0\u5F55","\u5371\u9669\u54C1\u5165\u5E93\u8BB0\u5F55\u8BE6\u60C5")},handleExportPDF(){n.PDFHandling=!0,r(n.headersConfig,n.tableData,"\u5371\u9669\u54C1\u5165\u5E93\u8BB0\u5F55").finally(()=>{n.PDFHandling=!1})}};return Q(()=>e.getters.settings,()=>{n.headersConfig=e.getters.settings[t.name]||n.headersConfig}),J(()=>{S()}),M(b(b({state:n},P),c),{headersShown:E})}}),oe={class:"date-box"},le=F("\u67E5\u8BE2"),ue=F("\u5BFC\u51FAxlsx "),se=F("\u5BFC\u51FApdf "),de={key:1};function ie(e,t,r,k,N,S){const y=d("el-date-picker"),p=d("el-input"),c=d("el-button"),n=d("styled-search"),E=d("el-tag"),P=d("el-table-column"),o=d("styled-table"),g=d("styled-pagination");return h(),m(v,null,[l(n,{onChooseSearchMoreParam:e.handleSearchMoreParamChange},{"styled-search-left":s(()=>[l("div",oe,[l(y,{modelValue:e.state.searchParam.dateRange,"onUpdate:modelValue":t[1]||(t[1]=a=>e.state.searchParam.dateRange=a),type:"daterange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),l(p,{modelValue:e.state.searchParam.shortname,"onUpdate:modelValue":t[2]||(t[2]=a=>e.state.searchParam.shortname=a),placeholder:"\u8BF7\u8F93\u5165\u7269\u6599\u540D\u79F0\u3001\u7B80\u79F0\u3001\u6216\u9662\u5185\u7801",clearable:"",onKeydown:V(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),l(p,{modelValue:e.state.searchParam.cloneNumber,"onUpdate:modelValue":t[3]||(t[3]=a=>e.state.searchParam.cloneNumber=a),placeholder:"\u8BF7\u8F93\u5165\u514B\u9686\u53F7",clearable:"",onKeydown:V(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),l(c,{type:"primary",class:"search",onClick:e.handleSearch},{default:s(()=>[le]),_:1},8,["onClick"])]),"styled-search-right":s(()=>[l(c,{type:"success",class:"export",disabled:e.state.tableData.length===0,onClick:e.handleExportXLSX},{default:s(()=>[ue]),_:1},8,["disabled","onClick"]),l(c,{type:"success",class:"export",disabled:e.state.tableData.length===0,loading:e.state.PDFHandling,onClick:e.handleExportPDF},{default:s(()=>[se]),_:1},8,["disabled","loading","onClick"])]),_:1},8,["onChooseSearchMoreParam"]),l(o,{loading:e.state.loading,setting:"",data:e.state.tableData,onClickSetting:e.handleClickSetting},{"table-columns":s(()=>[(h(!0),m(v,null,Y(e.headersShown,(a,i)=>(h(),m(P,{"show-overflow-tooltip":"",key:i,prop:a.prop,label:a.label,"min-width":e.calcHeaderWidth(a,i)},{header:s(u=>[l("span",null,I(u.column.label),1)]),default:s(u=>[u.column.property==="currStage"?(h(),m(E,{key:0,class:e.currentStages[u.row[a.prop]]},{default:s(()=>[F(I(u.row[a.prop]),1)]),_:2},1032,["class"])):(h(),m("span",de,I(u.row[a.prop]),1))]),_:2},1032,["prop","label","min-width"]))),128))]),_:1},8,["loading","data","onClickSetting"]),l(g,{total:e.state.pagination.total,"current-page":e.state.pagination.currentPage,"onUpdate:current-page":t[4]||(t[4]=a=>e.state.pagination.currentPage=a),"page-size":e.state.pagination.pageSize,"onUpdate:page-size":t[5]||(t[5]=a=>e.state.pagination.pageSize=a),onPaginationChange:e.handlePaginationChange},null,8,["total","current-page","page-size","onPaginationChange"])],64)}var me=ee(re,[["render",ie]]);export{me as default};
