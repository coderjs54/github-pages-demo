var ce=Object.defineProperty,me=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var v=(e,t,i)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,U=(e,t)=>{for(var i in t||(t={}))he.call(t,i)&&v(e,i,t[i]);if(A)for(var i of A(t))_e.call(t,i)&&v(e,i,t[i]);return e},I=(e,t)=>me(e,ge(t));import{d as De,i as P,r as Ce,c as g,S as be,w as L,o as ye,E as c,m as h,q as _,y as s,G as r,N as fe,F as V,A as Me,z as y,C as u,I as q}from"../vendors/element-plus-6f9977bb.js";import{r as f,U as M,_ as Fe,u as Ee,d as Se,b as Te,S as Pe}from"./index.1a2bb961.js";import{i as we}from"./instrument-9ec20200.js";import{d as ke}from"./department-c80e70e8.js";import{_ as Be}from"./tip-1b2ff95a.js";function Ae(e){return f.post(M.MATERIAL.queryMaterial,e)}function ve(e=""){return f.post(M.VENDOR.queryVendor,{search_word:e})}function Ue(){return f.get(M.DEPARTMENT.queryDepartment)}function Ie(e){return f.post(M.MATERIAL.deleteMaterial,{id:e})}const Le=De({setup(){const e=Ee(),t=Se(),i=Te(),w=P("exportXLSX"),k=P("setTableHeaders"),D=()=>{a.loading=!0;const{pageSize:n,currentPage:l}=q(a.pagination),{shortname:C,isDanger:b}=q(a.searchParam);Ae({searchWord:C,DepartmentId:"",MaterialType:"",BrandId:"",InstrumentId:"",NeedPaging:!0,PageNo:l,RecordPerPage:n,CheckHChemical:!0,IsHChemical:b}).then(d=>{a.pagination.total=d.TotalRecordCount,F(d.materials)}).finally(()=>{a.loading=!1})},F=n=>{a.tableData=n.map(l=>{const{LowerLimitAlert:C,UpperLimitAlert:b,brand_id:o,departmentOwners:d,hospital_code:m,id:R,inOutStoreUnits:xe,instrumentOwners:z,invoiceCorp:H,isGift:$,IsHazardousChemical:O,isMinUnitPurchase:N,isPublicReagent:W,lowestStoreAlert:ea,material_type:X,minimumUnit:j,name:K,nearExpireAlertDay:aa,needPurchase:G,onBoardInfo:J,onBoardType:Q,openValidDays:Y,performanceTest:ta,printOpenLabel:Z,producer:na,purchasePrice:x,purchaseUnit:ee,shippingCorp:ae,short_name:oa,spec:te,stopUseReason:ne,storeCondition:oe,storePos:se,supplier:re,system_code:ie,tempratureScope:le,uniqueCodeManage:ue,unitMultiples:sa,DiseaseType:B}=l,pe=ke(d).map(T=>a.departmentMaps[T]).join(","),de=we(z).map(T=>a.instrumentMaps[T]).join(",");return{id:R,hospital_code:m,system_code:ie,material_name:K,brand:a.brandMaps[o]||"\u672A\u77E5\u54C1\u724C",is_danger:O?"\u662F":"\u5426",type:a.MaterialTypeMap.get(X),size:te,disease:B||"\u65E0",restore_condition:a.StoreTypeMap.get(oe),temperature:le,arrived_scope:a.OnboardTypeMap.get(Q),arrived_date:J,purchase_price:x,print_label:Z?"\u662F":"\u5426",department:pe,instrument:de,open_expire:`${Y} \u5929`,purchase_unit:a.MinUnitTypeMap.get(ee),min_unit:a.MinUnitTypeMap.get(j),unique_code:ue?"\u662F":"\u5426",is_gift:$?"\u662F":"\u5426",store_position:se,purchase_status:G?"\u91C7\u8D2D":"\u505C\u8D2D",stop_reason:ne,public:W?"\u662F":"\u5426",min_unit_purchase:N?"\u662F":"\u5426",supplier:a.companyMaps[re],invoice_company:a.companyMaps[H],ship_company:a.companyMaps[ae]}})},p=n=>{n&&(a.pagination.currentPage=1),D()},a=Ce({loading:!1,searchParam:{shortname:"",isDanger:!1},pagination:{currentPage:1,total:0,pageSize:30},MaterialTypeMap:g(()=>t.getters.MaterialTypeMap),StoreTypeMap:g(()=>t.getters.StoreTypeMap),MinUnitTypeMap:g(()=>t.getters.MinUnitTypeMap),OnboardTypeMap:g(()=>t.getters.OnboardTypeMap),tableData:[],headersConfig:[{label:"\u5E8F\u53F7",prop:"id"},{label:"\u9662\u5185\u7801",prop:"hospital_code"},{label:"\u7269\u6599\u540D\u79F0",prop:"material_name"},{label:"\u662F\u5426\u5371\u9669\u54C1",prop:"is_danger"},{label:"\u54C1\u724C",prop:"brand"},{label:"\u7CFB\u7EDF\u7801",prop:"system_code"},{label:"\u7C7B\u578B",prop:"type"},{label:"\u89C4\u683C",prop:"size"},{label:"\u75C5\u79CD\u4FE1\u606F",prop:"disease"},{label:"\u50A8\u5B58\u6761\u4EF6",prop:"restore_condition"},{label:"\u6E29\u5EA6\u8303\u56F4",prop:"temperature"},{label:"\u5230\u8D27\u8303\u56F4",prop:"arrived_scope"},{label:"\u5230\u8D27\u65E5\u671F",prop:"arrived_date"},{label:"\u91C7\u8D2D\u5355\u4EF7",prop:"purchase_price"},{label:"\u6253\u5370\u5F00\u74F6\u6807\u8D34",prop:"print_label"},{label:"\u6240\u5C5E\u90E8\u95E8",prop:"department"},{label:"\u6240\u5C5E\u4EEA\u5668",prop:"instrument"},{label:"\u5F00\u5C01\u6548\u671F",prop:"open_expire"},{label:"\u5E93\u5B58\u4F4D\u7F6E",prop:"store_position"},{label:"\u91C7\u8D2D\u5355\u4F4D",prop:"purchase_unit"},{label:"\u6700\u5C0F\u5355\u4F4D",prop:"min_unit"},{label:"\u552F\u4E00\u7BA1\u7406\u7801",prop:"unique_code"},{label:"\u662F\u5426\u8D60\u54C1",prop:"is_gift"},{label:"\u91C7\u8D2D\u72B6\u6001",prop:"purchase_status"},{label:"\u516C\u5171\u8BD5\u5242",prop:"public"},{label:"\u6700\u5C0F\u5355\u4F4D\u91C7\u8D2D",prop:"min_unit_purchase"},{label:"\u4F9B\u5E94\u5546",prop:"supplier"},{label:"\u5F00\u7968\u516C\u53F8",prop:"invoice_company"},{label:"\u53D1\u8D27\u516C\u53F8",prop:"ship_company"}],brandMaps:g(()=>t.getters.brandIdMap),instrumentMaps:g(()=>t.getters.instrumentIdMap),companyMaps:{},departmentMaps:{},singleDelDialog:!1,singleDelDialogData:{id:"",name:""},departmentTreeData:[]}),E=g(()=>a.headersConfig.filter(n=>!n.hidden)),S={calcHeaderMinWidth:P("calcHeaderMinWidth"),handleClickSetting(){k(a.headersConfig,n=>{a.headersConfig=n})},handlePaginationChange(){p(!1)},handleSearch(){p(!0)},handleModify(n){e.push(`/materialmodify?name=${n.material_name}`)},handleSingleDelete(n){a.singleDelDialogData={id:n.id,name:n.material_name},a.singleDelDialog=!0},confirmSingleDelete(){const n=a.singleDelDialogData.id;Ie(n).then(()=>{be.success("\u64CD\u4F5C\u6210\u529F"),D()}).finally(()=>{a.singleDelDialog=!1})},handleExport(){w(a.headersConfig,a.tableData,"\u7269\u6599\u5217\u8868","\u7269\u6599\u5217\u8868\u8BE6\u60C5")}};return L(()=>t.getters.settings,()=>{a.headersConfig=t.getters.settings[i.name]||a.headersConfig}),L(()=>a.singleDelDialog,n=>{n||(a.singleDelDialogData={id:"",name:""})}),ye(()=>{Promise.all([ve().then(n=>{n.companies.forEach(l=>{a.companyMaps[l.id]=l.name})}),Ue().then(n=>{n.departments.forEach(l=>{a.departmentMaps[l.id]=l.name}),a.departmentTreeData=Pe(n.departments)})]).then(()=>{D()})}),I(U({state:a},S),{headersShown:E})}}),Ve=u("\u67E5\u8BE2"),qe=u("\u5BFC\u51FAxlsx "),Re={key:1},ze=u("\u7F16\u8F91"),He=u("\u5220\u9664"),$e=s("div",{class:"title"},"\u63D0\u793A",-1),Oe={class:"tip-body"},Ne=s("img",{src:Be,alt:""},null,-1),We=u("\u786E\u8BA4\u8981\u5C06\u540D\u4E3A"),Xe={class:"item-name"},je=u("\u7684\u7269\u6599"),Ke=s("span",{class:"highlight-text"},"\u5220\u9664",-1),Ge=u("\u5417?"),Je={class:"right-footer"},Qe=u("\u53D6\u6D88"),Ye=u("\u786E\u5B9A");function Ze(e,t,i,w,k,D){const F=c("el-input"),p=c("el-button"),a=c("el-switch"),E=c("styled-search"),S=c("el-tag"),n=c("el-table-column"),l=c("styled-table"),C=c("styled-pagination"),b=c("el-dialog");return h(),_(V,null,[s(E,{"hide-search-more":""},{"styled-search-left":r(()=>[s(F,{modelValue:e.state.searchParam.shortname,"onUpdate:modelValue":t[1]||(t[1]=o=>e.state.searchParam.shortname=o),placeholder:"\u8BF7\u8F93\u5165\u7269\u6599\u540D\u79F0\u3001\u7B80\u79F0\u3001\u6216\u9662\u5185\u7801",clearable:"",onKeydown:fe(e.handleSearch,["enter"]),onClear:e.handleSearch},null,8,["modelValue","onKeydown","onClear"]),s(p,{type:"primary",class:"search",onClick:e.handleSearch},{default:r(()=>[Ve]),_:1},8,["onClick"]),s(a,{modelValue:e.state.searchParam.isDanger,"onUpdate:modelValue":t[2]||(t[2]=o=>e.state.searchParam.isDanger=o),"active-text":"\u5371\u9669\u54C1","inactive-text":"\u975E\u5371\u9669\u54C1",onChange:e.handleSearch},null,8,["modelValue","onChange"])]),"styled-search-right":r(()=>[s(p,{type:"success",class:"export",disabled:e.state.tableData.length===0,onClick:e.handleExport},{default:r(()=>[qe]),_:1},8,["disabled","onClick"])]),_:1}),s(l,{loading:e.state.loading,setting:"",data:e.state.tableData,onClickSetting:e.handleClickSetting},{"table-columns":r(()=>[(h(!0),_(V,null,Me(e.headersShown,(o,d)=>(h(),_(n,{"show-overflow-tooltip":"",key:d,prop:o.prop,label:o.label,"min-width":e.calcHeaderMinWidth(o,d)},{header:r(m=>[s("span",null,y(m.column.label),1)]),default:r(m=>[o.prop==="is_danger"?(h(),_(S,{key:0,class:m.row.is_danger==="\u662F"?"danger-material":"normal-material"},{default:r(()=>[u(y(m.row.is_danger),1)]),_:2},1032,["class"])):(h(),_("span",Re,y(m.row[o.prop]),1))]),_:2},1032,["prop","label","min-width"]))),128)),s(n,{label:"\u64CD\u4F5C",fixed:"right",width:"110"},{default:r(o=>[s(p,{type:"text",class:"modify",onClick:d=>e.handleModify(o.row)},{default:r(()=>[ze]),_:2},1032,["onClick"]),s(p,{type:"text",class:"delete",onClick:d=>e.handleSingleDelete(o.row)},{default:r(()=>[He]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["loading","data","onClickSetting"]),s(C,{total:e.state.pagination.total,"current-page":e.state.pagination.currentPage,"onUpdate:current-page":t[3]||(t[3]=o=>e.state.pagination.currentPage=o),"page-size":e.state.pagination.pageSize,"onUpdate:page-size":t[4]||(t[4]=o=>e.state.pagination.pageSize=o),onPaginationChange:e.handlePaginationChange},null,8,["total","current-page","page-size","onPaginationChange"]),s(b,{width:"466px",modelValue:e.state.singleDelDialog,"onUpdate:modelValue":t[6]||(t[6]=o=>e.state.singleDelDialog=o)},{title:r(()=>[$e]),footer:r(()=>[s("div",Je,[s(p,{onClick:t[5]||(t[5]=o=>e.state.singleDelDialog=!1),class:"cancel"},{default:r(()=>[Qe]),_:1}),s(p,{type:"primary",onClick:e.confirmSingleDelete,class:"confirm"},{default:r(()=>[Ye]),_:1},8,["onClick"])])]),default:r(()=>[s("div",Oe,[Ne,s("span",null,[We,s("span",Xe,y(e.state.singleDelDialogData.name),1),je,Ke,Ge])])]),_:1},8,["modelValue"])],64)}var ca=Fe(Le,[["render",Ze]]);export{ca as default};
