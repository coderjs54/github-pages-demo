System.register(["../vendors/element-plus-legacy-e48d1ae3.js","./index-legacy.acc39ef9.js","./departmentmanage-legacy-17c36275.js","./tip-legacy-d18ff986.js"],(function(a){"use strict";var e,t,l,i,n,o,r,d,s,m,u,c,p,f,h,g,b,D,M,y,_,S,C,v,w,T,k;return{setters:[function(a){e=a.d,t=a.a,l=a.r,i=a.c,n=a.i,o=a.I,r=a.S,d=a.o,s=a.w,m=a.E,u=a.m,c=a.q,p=a.y,f=a.G,h=a.N,g=a.F,b=a.A,D=a.z,M=a.K,y=a.C},function(a){_=a.r,S=a.U,C=a._,v=a.d,w=a.S},function(a){T=a.r},function(a){k=a._}],execute:function(){function N(a){return _.post(S.MATERIAL.queryMaterial,a)}const V=e({setup(){const a=v(),e=()=>{p.loading=!0;const{suitName:a,department:e}=o(p.searchParams);(function(a){return _.post(S.SUIT.querySuit,a)})({SuitName:a,MaterialKeyword:""}).then((a=>{u(a.suits)})).finally((()=>{p.loading=!1}))},m=a=>{a&&(p.pagination.currentPage=1),p.materialLoading=!0;const{searchWord:e}=o(p.addSuitData.mainMaterialSearchParams),{pageSize:t,currentPage:l}=o(p.pagination);N({searchWord:e,DepartmentId:"",MaterialType:"",BrandId:"",InstrumentId:"",NeedPaging:!0,PageNo:l,RecordPerPage:t,CheckHChemical:!1,IsHChemical:!1}).then((a=>{p.pagination.total=a.TotalRecordCount,p.materialList=a.materials.map((a=>{const{hospital_code:e,name:t,short_name:l,brand_id:i,minimumUnit:n}=a;return{hospital_code:e,unit:n,material_name:t,brand:i,shortname:l}}))})).finally((()=>{p.materialLoading=!1}))},u=a=>{p.tableData=a.map((a=>{const{DepartmentId:e,SuitName:t,SuitItems:l}=a,{GiftName:i,MaterialName:n,GiftUnit:o,MaterialUnit:r,ModifyTime:d}=l[0];return{server:a,suit_name:t,organization_name:p.departmentMap.get(e),material_name:n,update_time:d.substr(0,10)}}))},c={singleAddFormRef:t(null),singleModifyFormRef:t(null),addGiftFormRef:t(null)},p=l({loading:!1,materialLoading:!1,searchParams:{department:"",suitName:""},pagination:{currentPage:1,total:0,pageSize:30},departmentTreeData:[],addDialog:!1,chooseMainMaterialDialog:!1,modifyDialog:!1,singleDeleteDialog:!1,batchDeleteDialog:!1,materialList:[],giftForm:{gift_hospital_code:"",gift_name:"",number:1,unit:""},addGiftDialog:!1,addSuitData:{suitSearchParams:{department:"",suitName:""},mainMaterialSearchParams:{searchWord:""},mainMaterialTableData:[],giftTableData:[]},modifySuitData:{suitSearchParams:{department:"",suitName:""},mainMaterialSearchParams:{searchWord:""},mainMaterialTableData:[],giftTableData:[]},modifyData:{name:"",department:""},singleDeleteData:{departmentId:"",suitName:""},tableData:[],headersConfig:[{label:"套装名称",prop:"suit_name"},{label:"主物料名称",prop:"material_name"},{label:"组织名称",prop:"organization_name"},{label:"更新时间",prop:"update_time"}],mainMaterialMultipleSelection:[],brandIdMap:i((()=>a.getters.brandIdMap)),MinUnitTypeOptions:i((()=>a.getters.MinUnitTypeOptions)),MinUnitTypeMap:i((()=>a.getters.MinUnitTypeMap)),departmentMap:new Map}),f={calcHeaderMinWidth:n("calcHeaderMinWidth"),handleSearch:e,handlePaginationChange(){m(!1)},handleAddSuit(){p.addDialog=!0},confirmAddSuit(){const{suitSearchParams:a,mainMaterialTableData:t,giftTableData:l}=o(p.addSuitData),{department:i,suitName:n}=a;if(!Array.isArray(i))return r.error("请选择套装所属部门");if(!n)return r.error("请输入套装名称");if(1!==t.length)return r.error("请选择一个主物料");if(0===l.length)return r.error("请添加至少一个赠品信息");const{hospital_code:d,material_name:s,brand:m,shortname:u,unit:c}=t[0];(function(a){return _.post(S.SUIT.addSuit,a)})({SuitName:n,DepartmentId:i.at(-1),MaterialHospitalCode:d,MaterialBuyAToB:"",MaterialCloneNumber:"",MainMaterialAmount:1,MainMaterialUnit:c,Gifts:l.map((a=>{const{gift_hospital_code:e,gift_name:t,number:l,unit:i}=a;return{GiftHospitalCode:e,GiftBuyAToB:"",GiftCloneNumber:"",GiftName:t,amount:l,unit:i}}))}).then((a=>{r.success("操作成功"),e()})).finally((()=>{p.addDialog=!1}))},handleModify(a){p.modifyDialog=!0;const{server:e}=o(a),{DepartmentId:t,SuitName:l,SuitItems:i}=e;p.modifyData={name:l,department:t};const{MaterialHospitalId:n}=i[0];N({searchWord:n}).then((a=>{const{hospital_code:e,name:n,brand_id:o,short_name:r,minimumUnit:d}=a.materials[0];p.modifySuitData={suitSearchParams:{department:t,suitName:l},mainMaterialSearchParams:{searchWord:""},mainMaterialTableData:[{hospital_code:e,material_name:n,brand:o,shortname:r,unit:d}],giftTableData:i.map(((a,e)=>{const{GiftName:t,GiftAmount:l,GiftMaterialId:i,GiftUnit:n}=a;return{id:e,gift_hospital_code:i,gift_name:t,number:l,unit:n}}))}}))},confirmModifySuit(){const{suitSearchParams:a,mainMaterialTableData:t,giftTableData:l}=o(p.modifySuitData),{department:i,suitName:n}=a;if(!i)return r.error("请选择套装所属部门");if(!n)return r.error("请输入套装名称");const{name:d,department:s}=o(p.modifyData);let m;if(m=Array.isArray(i)?i.at(-1):i,1!==t.length)return r.error("请选择一个主物料");if(0===l.length)return r.error("请添加至少一个赠品信息");const{hospital_code:u,material_name:c,brand:f,shortname:h,unit:g}=t[0];(function(a){return _.post(S.SUIT.modifySuit,a)})({SuitName:d,DepartmentId:s,MainMaterialId:u,MaterialBuyAToB:"",MaterialCloneNumber:"",MainMaterialAmount:1,MainMaterialUnit:g,Gifts:l.map((a=>{const{gift_hospital_code:e,gift_name:t,number:l,unit:i}=a;return{GiftHospitalCode:e,GiftBuyAToB:"",GiftCloneNumber:"",GiftName:t,amount:l,unit:i}}))}).then((()=>function(a){return _.post(S.SUIT.modifySuitName,a)}({OldSuitName:d,OldDepartmentId:s,NewSuitName:n,NewDepartmentId:m}).then((()=>{r.success("操作成功"),e()})))).finally((()=>{p.modifyDialog=!1}))},handleSingleDelete(a){p.singleDeleteDialog=!0;const{SuitName:e,DepartmentId:t}=o(a.server);p.singleDeleteData={departmentId:t,suitName:e}},confirmSingleDelete(){const{departmentId:a,suitName:t}=o(p.singleDeleteData);(function(a){return _.post(S.SUIT.deleteSuit,a)})({SuitName:t,DepartmentId:a}).then((()=>{r.success("操作成功"),e()})).finally((()=>{p.singleDeleteDialog=!1}))},handleChooseMainMaterial(){p.chooseMainMaterialDialog=!0,m(!0)},handleMainMaterialMultipleChange(a){p.mainMaterialMultipleSelection=a},handleConfirmAddMainMaterial(){const a=p.mainMaterialMultipleSelection.length;return 0===a?r.error("请选择一个主物料"):a>1?r.error("只能选择一个主物料"):(p.addDialog?p.addSuitData.mainMaterialTableData=o(p.mainMaterialMultipleSelection):p.modifyDialog&&(p.modifySuitData.mainMaterialTableData=o(p.mainMaterialMultipleSelection)),void(p.chooseMainMaterialDialog=!1))},handleAddGift(){p.addGiftDialog=!0},confirmAddGift(){const{gift_hospital_code:a,gift_name:e,number:t,unit:l}=o(p.giftForm);if(p.addDialog){const i=p.addSuitData.giftTableData.length;p.addSuitData.giftTableData.push({id:i,gift_hospital_code:a,gift_name:e,number:t,unit:l})}else if(p.modifyDialog){const i=p.modifySuitData.giftTableData.length;p.modifySuitData.giftTableData.push({id:i,gift_hospital_code:a,gift_name:e,number:t,unit:l})}p.addGiftDialog=!1},handleDeleteGift(a){if(p.addDialog){const e=p.addSuitData.giftTableData.findIndex((e=>e.id===a.id));p.addSuitData.giftTableData.splice(e,1)}else if(p.modifyDialog){const e=p.modifySuitData.giftTableData.findIndex((e=>e.id===a.id));p.modifySuitData.giftTableData.splice(e,1)}},handleQueryMainMaterial(){m(!0)}};return d((()=>{Promise.all([T().then((a=>{p.departmentTreeData=w(a.departments),a.departments.forEach((a=>{const{id:e,name:t}=a;p.departmentMap.set(Number(e),t),p.departmentMap.set(String(e),t),p.departmentMap.set(t,e)}))}))]).then((()=>{e()}))})),s((()=>p.addDialog),(a=>{a||(p.addSuitData={suitSearchParams:{department:"",suitName:""},mainMaterialSearchParams:{searchWord:""},mainMaterialTableData:[],giftTableData:[]})})),s((()=>p.modifyDialog),(a=>{a||(p.modifySuitData={suitSearchParams:{department:"",suitName:""},mainMaterialSearchParams:{searchWord:""},mainMaterialTableData:[],giftTableData:[]},p.modifyData={name:"",department:""})})),s((()=>p.addGiftDialog),(a=>{a||(p.giftForm={gift_hospital_code:"",gift_name:"",number:1,unit:""},c.addGiftFormRef.value.resetFields())})),s((()=>p.singleDeleteDialog),(a=>{a||(p.singleDeleteData={departmentId:"",suitName:""})})),s((()=>p.chooseMainMaterialDialog),(a=>{a||(p.materialList=[])})),{state:p,...c,...f,labelWidth:"100px",mainMaterialHeadersConfig:[{label:"院内码",prop:"hospital_code"},{label:"物料名称",prop:"material_name"},{label:"品牌",prop:"brand"},{label:"简称",prop:"shortname"},{label:"单位",prop:"unit"}],giftHeadersConfig:[{label:"赠品院内码",prop:"gift_hospital_code"},{label:"赠品名称",prop:"gift_name"},{label:"数量",prop:"number"},{label:"单位",prop:"unit"}],addGiftFormRules:{gift_hospital_code:[{required:!1,message:"请输入赠品院内码",trigger:"blur"}],gift_name:[{required:!0,message:"请输入赠品名称",trigger:"blur"}],number:[{required:!0,message:"请输入赠品数量",trigger:"blur"}],unit:[{required:!0,message:"请选择赠品单位",trigger:"change"}]}}}}),P=y("查询"),U=y("新增"),G=y("编辑"),I=y("删除"),A=p("div",{class:"title"},"新增赠品套装",-1),x={class:"body"},W={class:"search-area"},F={class:"search-item"},H={class:"search-item"},z={class:"table-area"},R={class:"table-box"},B={class:"header"},L=p("div",{class:"title"},"主物料列表",-1),q=p("span",null,"添加",-1),K={class:"table"},O={key:0},j={key:1},E={key:2},Q=y("删除"),J={class:"table-area"},X={class:"table-box"},Y={class:"header"},Z=p("div",{class:"title"},"赠品列表",-1),$=p("span",null,"添加",-1),aa={class:"table"},ea={key:0},ta={key:1},la=y("删除"),ia={class:"right-footer"},na=y("取消"),oa=y("保存"),ra=p("div",{class:"title"},"修改赠品套装",-1),da={class:"body"},sa={class:"search-area"},ma={class:"search-item"},ua={class:"search-item"},ca={class:"table-area"},pa={class:"table-box"},fa={class:"header"},ha=p("div",{class:"title"},"主物料列表",-1),ga=p("span",null,"添加",-1),ba={class:"table"},Da={key:0},Ma={key:1},ya={key:2},_a=y("删除"),Sa={class:"table-area"},Ca={class:"table-box"},va={class:"header"},wa=p("div",{class:"title"},"赠品列表",-1),Ta=p("span",null,"添加",-1),ka={class:"table"},Na={key:0},Va={key:1},Pa=y("删除"),Ua={class:"right-footer"},Ga=y("取消"),Ia=y("确认修改"),Aa=p("div",{class:"title"},"选择主物料",-1),xa={class:"body"},Wa={class:"search-area"},Fa=p("div",{class:"title"},"物料列表",-1),Ha={class:"search-item"},za={class:"table-area"},Ra={key:0},Ba={key:1},La={key:2},qa={class:"pagination-box"},Ka={class:"right-footer"},Oa=y("确认添加"),ja=p("div",{class:"title"},"新增赠品信息",-1),Ea={class:"body"},Qa={class:"right-footer"},Ja=y("取消"),Xa=y("确认添加"),Ya=p("div",{class:"title"},"提示",-1),Za={class:"tip-body"},$a=p("img",{src:k,alt:""},null,-1),ae=y("确认要将名为"),ee={class:"item-name"},te=y("的套装"),le=p("span",{class:"highlight-text"},"删除",-1),ie=y("吗?"),ne={class:"right-footer"},oe=y("取消"),re=y("确定");a("default",C(V,[["render",function(a,e,t,l,i,n){const o=m("el-input"),r=m("el-button"),d=m("styled-search"),s=m("el-table-column"),y=m("styled-table"),_=m("el-cascader"),S=m("el-icon"),C=m("dialog-table"),v=m("el-dialog"),w=m("styled-pagination"),T=m("el-form-item"),k=m("el-option"),N=m("el-select"),V=m("el-form");return u(),c(g,null,[p(d,{"hide-search-more":""},{"styled-search-left":f((()=>[p(o,{modelValue:a.state.searchParams.suitName,"onUpdate:modelValue":e[1]||(e[1]=e=>a.state.searchParams.suitName=e),placeholder:"套装名称",clearable:"",onKeydown:h(a.handleSearch,["enter"]),onClear:a.handleSearch},null,8,["modelValue","onKeydown","onClear"]),p(r,{type:"primary",class:"search",onClick:a.handleSearch},{default:f((()=>[P])),_:1},8,["onClick"])])),"styled-search-right":f((()=>[p(r,{type:"success",icon:"el-icon-plus",class:"export",onClick:a.handleAddSuit},{default:f((()=>[U])),_:1},8,["onClick"])])),_:1}),p(y,{loading:a.state.loading,data:a.state.tableData},{"table-columns":f((()=>[(u(!0),c(g,null,b(a.state.headersConfig,((e,t)=>(u(),c(s,{"show-overflow-tooltip":"",key:t,prop:e.prop,label:e.label,"min-width":a.calcHeaderMinWidth(e,t)},{header:f((a=>[p("span",null,D(a.column.label),1)])),default:f((a=>[p("span",null,D(a.row[e.prop]),1)])),_:2},1032,["prop","label","min-width"])))),128)),p(s,{label:"操作",fixed:"right"},{default:f((e=>[p(r,{type:"text",class:"modify",onClick:t=>a.handleModify(e.row)},{default:f((()=>[G])),_:2},1032,["onClick"]),p(r,{type:"text",class:"delete",onClick:t=>a.handleSingleDelete(e.row)},{default:f((()=>[I])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["loading","data"]),p(v,{"custom-class":"suit-manage",width:"875px",modelValue:a.state.addDialog,"onUpdate:modelValue":e[8]||(e[8]=e=>a.state.addDialog=e)},{title:f((()=>[A])),footer:f((()=>[p("div",ia,[p(r,{onClick:e[7]||(e[7]=e=>a.state.addDialog=!1),class:"cancel"},{default:f((()=>[na])),_:1}),p(r,{type:"primary",class:"confirm",onClick:a.confirmAddSuit},{default:f((()=>[oa])),_:1},8,["onClick"])])])),default:f((()=>[p("div",x,[p("div",W,[p("div",F,[p(_,{modelValue:a.state.addSuitData.suitSearchParams.department,"onUpdate:modelValue":e[2]||(e[2]=e=>a.state.addSuitData.suitSearchParams.department=e),options:a.state.departmentTreeData,props:{checkStrictly:!0,value:"id",label:"name"},placeholder:"请选择所属部门"},null,8,["modelValue","options"])]),p("div",H,[p(o,{modelValue:a.state.addSuitData.suitSearchParams.suitName,"onUpdate:modelValue":e[3]||(e[3]=e=>a.state.addSuitData.suitSearchParams.suitName=e),placeholder:"请输入套装名称",clearable:""},null,8,["modelValue"])])]),p("div",z,[p("div",R,[p("div",B,[L,p("div",{class:"add",onClick:e[4]||(e[4]=(...e)=>a.handleChooseMainMaterial&&a.handleChooseMainMaterial(...e))},[p(S,{class:"el-icon-plus"}),q])]),p("div",K,[p(C,{data:a.state.addSuitData.mainMaterialTableData,height:200},{"table-columns":f((()=>[(u(!0),c(g,null,b(a.mainMaterialHeadersConfig,((e,t)=>(u(),c(s,{"show-overflow-tooltip":"",key:t,prop:e.prop,label:e.label,"min-width":a.calcHeaderMinWidth(e,t)},{header:f((a=>[p("span",null,D(a.column.label),1)])),default:f((t=>["brand"===t.column.property?(u(),c("span",O,D(a.state.brandIdMap[t.row[e.prop]]),1)):M("",!0),"unit"===t.column.property?(u(),c("span",j,D(a.state.MinUnitTypeMap.get(t.row[e.prop])),1)):(u(),c("span",E,D(t.row[e.prop]),1))])),_:2},1032,["prop","label","min-width"])))),128)),p(s,{label:"操作",width:"80"},{default:f((t=>[p(r,{type:"text",class:"delete",onClick:e[5]||(e[5]=e=>a.state.addSuitData.mainMaterialTableData=[])},{default:f((()=>[Q])),_:1})])),_:1})])),_:1},8,["data"])])])]),p("div",J,[p("div",X,[p("div",Y,[Z,p("div",{class:"add",onClick:e[6]||(e[6]=(...e)=>a.handleAddGift&&a.handleAddGift(...e))},[p(S,{class:"el-icon-plus"}),$])]),p("div",aa,[p(C,{data:a.state.addSuitData.giftTableData,height:200},{"table-columns":f((()=>[(u(!0),c(g,null,b(a.giftHeadersConfig,((e,t)=>(u(),c(s,{"show-overflow-tooltip":"",key:t,prop:e.prop,label:e.label,"min-width":a.calcHeaderMinWidth(e,t)},{header:f((a=>[p("span",null,D(a.column.label),1)])),default:f((t=>["unit"===t.column.property?(u(),c("span",ea,D(a.state.MinUnitTypeMap.get(t.row[e.prop])),1)):(u(),c("span",ta,D(t.row[e.prop]),1))])),_:2},1032,["prop","label","min-width"])))),128)),p(s,{label:"操作",width:"80"},{default:f((e=>[p(r,{type:"text",class:"delete",onClick:t=>a.handleDeleteGift(e.row)},{default:f((()=>[la])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])])])])])),_:1},8,["modelValue"]),p(v,{"custom-class":"suit-manage",width:"875px",modelValue:a.state.modifyDialog,"onUpdate:modelValue":e[15]||(e[15]=e=>a.state.modifyDialog=e)},{title:f((()=>[ra])),footer:f((()=>[p("div",Ua,[p(r,{onClick:e[14]||(e[14]=e=>a.state.modifyDialog=!1),class:"cancel"},{default:f((()=>[Ga])),_:1}),p(r,{type:"primary",class:"confirm",onClick:a.confirmModifySuit},{default:f((()=>[Ia])),_:1},8,["onClick"])])])),default:f((()=>[p("div",da,[p("div",sa,[p("div",ma,[p(_,{modelValue:a.state.modifySuitData.suitSearchParams.department,"onUpdate:modelValue":e[9]||(e[9]=e=>a.state.modifySuitData.suitSearchParams.department=e),options:a.state.departmentTreeData,props:{checkStrictly:!0,value:"id",label:"name"},placeholder:"请选择所属部门"},null,8,["modelValue","options"])]),p("div",ua,[p(o,{modelValue:a.state.modifySuitData.suitSearchParams.suitName,"onUpdate:modelValue":e[10]||(e[10]=e=>a.state.modifySuitData.suitSearchParams.suitName=e),placeholder:"请输入套装名称",clearable:""},null,8,["modelValue"])])]),p("div",ca,[p("div",pa,[p("div",fa,[ha,p("div",{class:"add",onClick:e[11]||(e[11]=(...e)=>a.handleChooseMainMaterial&&a.handleChooseMainMaterial(...e))},[p(S,{class:"el-icon-plus"}),ga])]),p("div",ba,[p(C,{data:a.state.modifySuitData.mainMaterialTableData,height:200},{"table-columns":f((()=>[(u(!0),c(g,null,b(a.mainMaterialHeadersConfig,((e,t)=>(u(),c(s,{"show-overflow-tooltip":"",key:t,prop:e.prop,label:e.label,"min-width":a.calcHeaderMinWidth(e,t)},{header:f((a=>[p("span",null,D(a.column.label),1)])),default:f((t=>["brand"===t.column.property?(u(),c("span",Da,D(a.state.brandIdMap[t.row[e.prop]]),1)):M("",!0),"unit"===t.column.property?(u(),c("span",Ma,D(a.state.MinUnitTypeMap.get(t.row[e.prop])),1)):(u(),c("span",ya,D(t.row[e.prop]),1))])),_:2},1032,["prop","label","min-width"])))),128)),p(s,{label:"操作",width:"80"},{default:f((t=>[p(r,{type:"text",class:"delete",onClick:e[12]||(e[12]=e=>a.state.modifySuitData.mainMaterialTableData=[])},{default:f((()=>[_a])),_:1})])),_:1})])),_:1},8,["data"])])])]),p("div",Sa,[p("div",Ca,[p("div",va,[wa,p("div",{class:"add",onClick:e[13]||(e[13]=(...e)=>a.handleAddGift&&a.handleAddGift(...e))},[p(S,{class:"el-icon-plus"}),Ta])]),p("div",ka,[p(C,{data:a.state.modifySuitData.giftTableData,height:200},{"table-columns":f((()=>[(u(!0),c(g,null,b(a.giftHeadersConfig,((e,t)=>(u(),c(s,{"show-overflow-tooltip":"",key:t,prop:e.prop,label:e.label,"min-width":a.calcHeaderMinWidth(e,t)},{header:f((a=>[p("span",null,D(a.column.label),1)])),default:f((t=>["unit"===t.column.property?(u(),c("span",Na,D(a.state.MinUnitTypeMap.get(t.row[e.prop])),1)):(u(),c("span",Va,D(t.row[e.prop]),1))])),_:2},1032,["prop","label","min-width"])))),128)),p(s,{label:"操作",width:"80"},{default:f((e=>[p(r,{type:"text",class:"delete",onClick:t=>a.handleDeleteGift(e.row)},{default:f((()=>[Pa])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])])])])])),_:1},8,["modelValue"]),p(v,{"custom-class":"choose-mainmaterial",width:"710px",modelValue:a.state.chooseMainMaterialDialog,"onUpdate:modelValue":e[19]||(e[19]=e=>a.state.chooseMainMaterialDialog=e)},{title:f((()=>[Aa])),footer:f((()=>[p("div",Ka,[p(r,{type:"primary",class:"confirm",onClick:a.handleConfirmAddMainMaterial},{default:f((()=>[Oa])),_:1},8,["onClick"])])])),default:f((()=>[p("div",xa,[p("div",Wa,[Fa,p("div",Ha,[p(o,{modelValue:a.state.addSuitData.mainMaterialSearchParams.searchWord,"onUpdate:modelValue":e[16]||(e[16]=e=>a.state.addSuitData.mainMaterialSearchParams.searchWord=e),placeholder:"请输入查询关键字",clearable:"",onKeydown:h(a.handleQueryMainMaterial,["enter"]),onClear:a.handleQueryMainMaterial},null,8,["modelValue","onKeydown","onClear"])])]),p("div",za,[p(C,{loading:a.state.materialLoading,multiple:"",data:a.state.materialList,height:300,onChangeMultiple:a.handleMainMaterialMultipleChange},{"table-columns":f((()=>[(u(!0),c(g,null,b(a.mainMaterialHeadersConfig,((e,t)=>(u(),c(s,{"show-overflow-tooltip":"",key:t,prop:e.prop,label:e.label,"min-width":a.calcHeaderMinWidth(e,t)},{header:f((a=>[p("span",null,D(a.column.label),1)])),default:f((t=>["brand"===t.column.property?(u(),c("span",Ra,D(a.state.brandIdMap[t.row[e.prop]]),1)):M("",!0),"unit"===t.column.property?(u(),c("span",Ba,D(a.state.MinUnitTypeMap.get(t.row[e.prop])),1)):(u(),c("span",La,D(t.row[e.prop]),1))])),_:2},1032,["prop","label","min-width"])))),128))])),_:1},8,["loading","data","onChangeMultiple"]),p("div",qa,[p(w,{total:a.state.pagination.total,"current-page":a.state.pagination.currentPage,"onUpdate:current-page":e[17]||(e[17]=e=>a.state.pagination.currentPage=e),"page-size":a.state.pagination.pageSize,"onUpdate:page-size":e[18]||(e[18]=e=>a.state.pagination.pageSize=e),onPaginationChange:a.handlePaginationChange},null,8,["total","current-page","page-size","onPaginationChange"])])])])])),_:1},8,["modelValue"]),p(v,{"custom-class":"gift-form",width:"466px",modelValue:a.state.addGiftDialog,"onUpdate:modelValue":e[25]||(e[25]=e=>a.state.addGiftDialog=e)},{title:f((()=>[ja])),footer:f((()=>[p("div",Qa,[p(r,{onClick:e[24]||(e[24]=e=>a.state.addGiftDialog=!1),class:"cancel"},{default:f((()=>[Ja])),_:1}),p(r,{type:"primary",class:"confirm",onClick:a.confirmAddGift},{default:f((()=>[Xa])),_:1},8,["onClick"])])])),default:f((()=>[p("div",Ea,[p(V,{model:a.state.giftForm,rules:a.addGiftFormRules,ref:"addGiftFormRef"},{default:f((()=>[p(T,{label:"赠品院内码","label-width":a.labelWidth},{default:f((()=>[p(o,{modelValue:a.state.giftForm.gift_hospital_code,"onUpdate:modelValue":e[20]||(e[20]=e=>a.state.giftForm.gift_hospital_code=e),placeholder:"请输入赠品院内码",autocomplete:"off",clearable:""},null,8,["modelValue"])])),_:1},8,["label-width"]),p(T,{label:"赠品名称","label-width":a.labelWidth,prop:"gift_name"},{default:f((()=>[p(o,{modelValue:a.state.giftForm.gift_name,"onUpdate:modelValue":e[21]||(e[21]=e=>a.state.giftForm.gift_name=e),placeholder:"请输入赠品名称",autocomplete:"off",clearable:""},null,8,["modelValue"])])),_:1},8,["label-width"]),p(T,{label:"赠品数量","label-width":a.labelWidth,prop:"number"},{default:f((()=>[p(o,{modelValue:a.state.giftForm.number,"onUpdate:modelValue":e[22]||(e[22]=e=>a.state.giftForm.number=e),placeholder:"请输入赠品数量",autocomplete:"off",clearable:""},null,8,["modelValue"])])),_:1},8,["label-width"]),p(T,{label:"赠品单位","label-width":a.labelWidth,prop:"unit"},{default:f((()=>[p(N,{modelValue:a.state.giftForm.unit,"onUpdate:modelValue":e[23]||(e[23]=e=>a.state.giftForm.unit=e),placeholder:"请输入采购单位"},{default:f((()=>[(u(!0),c(g,null,b(a.state.MinUnitTypeOptions,(a=>(u(),c(k,{label:a.label,value:a.value,key:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label-width"])])),_:1},8,["model","rules"])])])),_:1},8,["modelValue"]),p(v,{width:"466px",modelValue:a.state.singleDeleteDialog,"onUpdate:modelValue":e[27]||(e[27]=e=>a.state.singleDeleteDialog=e)},{title:f((()=>[Ya])),footer:f((()=>[p("div",ne,[p(r,{onClick:e[26]||(e[26]=e=>a.state.singleDeleteDialog=!1),class:"cancel"},{default:f((()=>[oe])),_:1}),p(r,{type:"primary",onClick:a.confirmSingleDelete,class:"confirm"},{default:f((()=>[re])),_:1},8,["onClick"])])])),default:f((()=>[p("div",Za,[$a,p("span",null,[ae,p("span",ee,D(a.state.singleDeleteData.suitName),1),te,le,ie])])])),_:1},8,["modelValue"])],64)}]]))}}}));
