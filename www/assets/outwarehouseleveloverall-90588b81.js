var K=Object.defineProperty,j=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var L=(e,a,r)=>a in e?K(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,y=(e,a)=>{for(var r in a||(a={}))J.call(a,r)&&L(e,r,a[r]);if(v)for(var r of v(a))Q.call(a,r)&&L(e,r,a[r]);return e},E=(e,a)=>j(e,G(a));import{d as Z,i as D,c as h,r as x,w as ee,o as ae,E as u,m,q as C,y as l,G as p,N as te,F as U,A as ne,z as w,C as B,I as z}from"../vendors/element-plus-6f9977bb.js";import{r as oe,U as re,_ as se,d as le,b as ue}from"./index.1a2bb961.js";function pe(e){return oe.post(re.OUTWAREHOUSE.queryOutWarehouseLevelOverall,e)}const ie=Z({setup(){const e=le(),a=ue(),r=D("exportXLSX"),T=D("setTableHeaders"),F=()=>{t.loading=!0;const{pageSize:o,currentPage:d}=z(t.pagination),{department:i,dateRange:n,search_word:c}=z(t.searchParams);let s;Array.isArray(i)?s=i.at(-1):s=i;const[M,P]=n||["",""];pe({departmentId:s,search_word:c,OutStoreBeginTime:M,OutStoreEndTime:P,NeedPaging:!0,PageNumber:d,RecordPerPage:o}).then(b=>{t.pagination.total=b.TotalRecordCount,k(b.stores)}).finally(()=>{t.loading=!1})},k=o=>{t.tableData=o.map(d=>{const{inoutstore:i,material:n}=d,{id:c,departmentName:s,LotNumber:M,ChangeReason:P,amount:R,unit:b,OperateTime:A}=i,{name:N,hospital_code:O,system_code:V,short_name:X,brand_id:W,material_type:q,CloneNumber:H,DiseaseType:I,storePos:Y,spec:$}=n||{};return E(y({},d),{id:c,LotNumber:M,CloneNumber:H,DiseaseType:I,ChangeReason:P,amount:R,OperateTime:A,hospital_code:O,system_code:V,material_name:N,brand:t.brandIdMap[W],shortname:X,department:s,unit:t.MinUnitTypeMap.get(b),kind:t.MaterialTypeMap.get(q),size:$,position1:Y})})},_={changeReasons:{\u4E09\u7EA7\u51FA\u5E93:"level-three-out",\u9886\u7528:"request-for-use",\u7528\u5269\u5F52\u8FD8:"return-back"}},f=h(()=>t.headersConfig.filter(o=>!o.hidden)),t=x({loading:!1,MinUnitTypeMap:h(()=>e.getters.MinUnitTypeMap),MaterialTypeMap:h(()=>e.getters.MaterialTypeMap),searchParams:{department:1,dateRange:"",search_word:""},pagination:{currentPage:1,total:0,pageSize:30},searchMoreParam:{department:""},departmentTreeData:[],tableData:[],headersConfig:[{label:"\u5E8F\u53F7",prop:"id"},{label:"\u7269\u6599\u9662\u5185\u7801",prop:"hospital_code"},{label:"\u5E93\u4F4D",prop:"position1"},{label:"\u7CFB\u7EDF\u7801",prop:"system_code"},{label:"\u7269\u6599\u540D\u79F0",prop:"material_name"},{label:"\u7269\u6599\u7B80\u79F0",prop:"shortname"},{label:"\u7269\u6599\u6279\u53F7",prop:"LotNumber"},{label:"\u7269\u6599\u54C1\u724C\u540D\u79F0",prop:"brand"},{label:"\u7EC4\u7EC7\u540D\u79F0",prop:"department"},{label:"\u64CD\u4F5C\u65F6\u95F4",prop:"OperateTime"},{label:"\u5E93\u5B58\u91CF",prop:"amount"},{label:"\u5355\u4F4D",prop:"unit"},{label:"\u5E93\u5B58\u53D8\u52A8\u539F\u56E0",prop:"ChangeReason"},{label:"\u7269\u6599\u89C4\u683C",prop:"size"},{label:"\u7269\u6599\u7C7B\u578B",prop:"kind"},{label:"\u514B\u9686\u53F7",prop:"CloneNumber"},{label:"\u75C5\u79CD\u7C7B\u578B",prop:"DiseaseType"}],hospitalCodeMap:h(()=>e.getters.hospitalCodeMap),brandIdMap:h(()=>e.getters.brandIdMap)}),g=o=>{o&&(t.pagination.currentPage=1),F()},S={calcHeaderWidth:D("calcHeaderMinWidth"),handleClickSetting(){T(t.headersConfig,o=>{t.headersConfig=o})},handleSearchMoreParamChange(o){t.searchMoreParam=o,t.searchParams.department=o.department>0?o.department:1,g(!0)},handlePaginationChange(){g(!1)},handleSearch(){g(!0)},handleExportXLSX(){r(t.headersConfig,t.tableData,"\u51FA\u5E93\u8BB0\u5F55","\u51FA\u5E93\u8BB0\u5F55\u8BE6\u60C5")}};return ee(()=>e.getters.settings,()=>{t.headersConfig=e.getters.settings[a.name]||t.headersConfig}),ae(()=>{F()}),E(y(y({state:t},S),_),{headersShown:f})}}),de={class:"date-box"},ce=B("\u67E5\u8BE2"),ge=B("\u5BFC\u51FAxlsx"),he={key:1};function me(e,a,r,T,F,k){const _=u("el-date-picker"),f=u("el-input"),t=u("el-button"),g=u("styled-search"),S=u("el-tag"),o=u("el-table-column"),d=u("styled-table"),i=u("styled-pagination");return m(),C(U,null,[l(g,{onChooseSearchMoreParam:e.handleSearchMoreParamChange,"only-department":""},{"styled-search-left":p(()=>[l("div",de,[l(_,{modelValue:e.state.searchParams.dateRange,"onUpdate:modelValue":a[1]||(a[1]=n=>e.state.searchParams.dateRange=n),type:"daterange","value-format":"YYYY-MM-DD","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),l(f,{modelValue:e.state.searchParams.search_word,"onUpdate:modelValue":a[2]||(a[2]=n=>e.state.searchParams.search_word=n),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57",clearable:"",onKeydown:te(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),l(t,{type:"primary",class:"search",onClick:e.handleSearch},{default:p(()=>[ce]),_:1},8,["onClick"])]),"styled-search-right":p(()=>[l(t,{type:"success",class:"export",onClick:e.handleExportXLSX},{default:p(()=>[ge]),_:1},8,["onClick"])]),_:1},8,["onChooseSearchMoreParam"]),l(d,{loading:e.state.loading,setting:"",data:e.state.tableData,onClickSetting:e.handleClickSetting},{"table-columns":p(()=>[(m(!0),C(U,null,ne(e.headersShown,(n,c)=>(m(),C(o,{"show-overflow-tooltip":"",key:c,prop:n.prop,label:n.label,"min-width":e.calcHeaderWidth(n,c)},{header:p(s=>[l("span",null,w(s.column.label),1)]),default:p(s=>[s.column.property==="ChangeReason"?(m(),C(S,{key:0,class:e.changeReasons[s.row[n.prop]]},{default:p(()=>[B(w(s.row[n.prop]),1)]),_:2},1032,["class"])):(m(),C("span",he,w(s.row[n.prop]),1))]),_:2},1032,["prop","label","min-width"]))),128))]),_:1},8,["loading","data","onClickSetting"]),l(i,{total:e.state.pagination.total,"current-page":e.state.pagination.currentPage,"onUpdate:current-page":a[3]||(a[3]=n=>e.state.pagination.currentPage=n),"page-size":e.state.pagination.pageSize,"onUpdate:page-size":a[4]||(a[4]=n=>e.state.pagination.pageSize=n),onPaginationChange:e.handlePaginationChange},null,8,["total","current-page","page-size","onPaginationChange"])],64)}var Fe=se(ie,[["render",me]]);export{Fe as default};
