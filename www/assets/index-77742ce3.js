const r=(s,e,u)=>{/^1[3-9]\d{9}$/.test(e)?u():u("\u8BF7\u8F93\u5165\u6B63\u786E\u683C\u5F0F\u7684\u624B\u673A\u53F7")},F=(s,e,u)=>{/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(e)?u():u("\u8BF7\u8F93\u5165\u6B63\u786E\u683C\u5F0F\u7684\u90AE\u7BB1")},B=(s,e,u)=>{/[\u4e00-\u9fa5]+/.test(e)?u("\u5BC6\u7801\u4E2D\u4E0D\u5141\u8BB8\u542B\u6709\u4E2D\u6587"):u()},E=(s,e,u)=>{isNaN(Number(e))||Number(e)<=0?u("\u8BF7\u8F93\u5165\u5408\u6CD5\u7684\u6570\u503C"):u()},i=(s,e,u)=>{if(isNaN(Number(e)))return u("\u8BF7\u8F93\u5165\u5408\u6CD5\u7684\u6E29\u5EA6\u6570\u503C");const t=Number(e);if(t>40||t<-40)return u("\u6E29\u5EA6\u8303\u56F4\u5FC5\u987B\u5728\u96F6\u4E0B40\u5EA6\u81F340\u5EA6\u4E4B\u95F4");u()};export{i as a,E as b,r as c,F as d,B as v};
