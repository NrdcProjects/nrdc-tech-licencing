(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5081:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9862)}])},9862:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(7842),l=n(865),s=n(6670),a=n(2322),i=n(2432),u=n(1267),o=n(4843),c=n(6501),m=n(4821),d=n(3741),g=n(2033),x=n(7265),h=n(3291),p=n(7085),j=n(7588),Z=n(3042),v=n(9452),y=n(1812),f=n(2784),P=(n(9462),[{fieldTitle:"Lumpsum Amount R&D Institution",sourceField:"lumpsum1",percentageField:"lumpsumPercentageDev",result:""},{fieldTitle:"Lumpsum Amount NRDC",sourceField:"lumpsum1",percentageField:"lumpsumPercentage",result:""},{fieldTitle:"GST Result R&D Institution",sourceField:"gstAmount1",percentageField:"gstPercentageDev",result:""},{fieldTitle:"GST Result NRDC",sourceField:"gstAmount1",percentageField:"gstPercentage",result:""}]),R=[{fieldTitle:"Royalty Result R&D Institution",sourceField:"sale1",percentageField:"royaltyPercentageDev",result:""},{fieldTitle:"Royalty Result NRDC",sourceField:"sale1",percentageField:"royaltyPercentage",result:""}],D=function(e,t){return console.log("ab",e,t,e/100*t),e/100*t};function F(){var e=(0,f.useState)({lumpsumPercentageDev:70,lumpsumPercentage:30,gstPercentageDev:70,gstPercentage:30,gstRate:12}),t=e[0],n=e[1],F=(0,f.useState)({royaltyPercentageDev:95,royaltyPercentage:5}),S=F[0],C=F[1],A=(0,f.useState)({lumpsumResult:!1,royaltyResult:!1}),b=A[0],T=A[1],w=(0,f.useState)({lumpsum:!1,royalty:!1}),N=w[0],I=w[1],L=function(e){var t=e.target.value;n((function(n){return(0,s.Z)((0,l.Z)({},n),(0,r.Z)({},e.target.name,t))}))},_=function(e){var t=e.target.value;C((function(n){return(0,s.Z)((0,l.Z)({},n),(0,r.Z)({},e.target.name,t))}))},G=function(e,t,n){var a=!0;e.forEach((function(e){if(t[e.sourceField]){var n=D(t[e.percentageField],t[e.sourceField]);e.result=z(n)}else a=!1})),T((function(e){return(0,s.Z)((0,l.Z)({},e),(0,r.Z)({},n,a))}))},V=function(e){return N.lumpsum&&!t[e]},E=function(e){return N.royalty&&!S[e]},k=function(e){var t=e.id;return(0,e.validate)(t)?(0,a.jsx)(i.Z,{error:!0,id:"accountId-error",children:"Required Field"}):null},z=function(e){var t=null===e||void 0===e?void 0:e.toString().replace(/,/g,"");return e?new Intl.NumberFormat("en-IN").format(t):""};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.Z,{sx:{mb:2},position:"static",children:(0,a.jsx)(o.Z,{variant:"h4",noWrap:!0,component:"div",sx:{pl:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".2rem",color:"inherit",textDecoration:"none"},children:"NRDC Licencing"})}),(0,a.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(c.ZP,{item:!0,xs:6,children:(0,a.jsxs)(m.Z,{variant:"outlined",sx:{minHeight:"440px"},children:[(0,a.jsx)(d.Z,{title:"Calculate R&D Share of Lumpsum Premium"}),(0,a.jsx)(g.Z,{children:(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),I((function(e){return(0,s.Z)((0,l.Z)({},e),{lumpsum:!0})})),G(P,t,"lumpsumResult")},children:[(0,a.jsxs)(x.Z,{sx:{m:1,width:"780px"},children:[(0,a.jsx)(h.Z,{htmlFor:"developer",children:"R&D Institution"}),(0,a.jsx)(p.Z,{id:"developer",name:"developer",label:"R&D Institution",error:V("developer"),onChange:L}),(0,a.jsx)(k,{id:"developer",validate:V})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(x.Z,{sx:{m:1,width:"250px"},children:[(0,a.jsx)(h.Z,{htmlFor:"lumpsum",children:"Lum Sum Amount"}),(0,a.jsx)(p.Z,{id:"lumpsum",name:"lumpsum",label:"Lum Sum Amount",startAdornment:(0,a.jsx)(a.Fragment,{children:" \u20b9"}),error:V("lumpsum"),value:z(null===t||void 0===t?void 0:t.lumpsum),onChange:function(e){var r=e.target.value.toString().replace(/,/g,"");n((function(n){return(0,s.Z)((0,l.Z)({},n),{lumpsum1:r,lumpsum:e.target.value,gstAmount1:D(t.gstRate,r),gstAmount:z(D(t.gstRate,r))})}))}}),(0,a.jsx)(k,{id:"lumpsum",validate:V})]}),(0,a.jsxs)(x.Z,{sx:{m:1,width:"250px"},children:[(0,a.jsx)(h.Z,{htmlFor:"lumpsumPercentageDev",children:"Lump Sum Percentage(R&D Institution)"}),(0,a.jsx)(p.Z,{id:"lumpsumPercentageDev",name:"lumpsumPercentageDev",label:"Lump Sum Percentage(R&D Institution)",defaultValue:"70",endAdornment:"%",type:"number",error:V("lumpsumPercentageDev"),onChange:L}),(0,a.jsx)(k,{id:"lumpsumPercentageDev",validate:V})]}),(0,a.jsxs)(x.Z,{sx:{m:1,width:"250px"},children:[(0,a.jsx)(h.Z,{htmlFor:"lumpsumPercentage",children:"Lum Sum Percentage(NRDC)"}),(0,a.jsx)(p.Z,{id:"lumpsumPercentage",label:"Lum Sum Percentage(NRDC)",defaultValue:"30",endAdornment:"%",type:"number",error:V("lumpsumPercentage"),onChange:L}),(0,a.jsx)(k,{id:"lumpsumPercentage",validate:V})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(x.Z,{sx:{m:1,width:"250px"},children:[(0,a.jsx)(h.Z,{htmlFor:"gstAmount",children:"GST Amount"}),(0,a.jsx)(p.Z,{id:"gstAmount",name:"gstAmount",label:"GST Amount",startAdornment:(0,a.jsx)(a.Fragment,{children:" \u20b9"}),value:t.gstAmount,error:V("gstAmount"),onChange:L}),(0,a.jsx)(k,{id:"gstAmount",validate:V})]}),(0,a.jsxs)(x.Z,{sx:{m:1,width:"250px"},children:[(0,a.jsx)(h.Z,{htmlFor:"gstPercentage",children:"GST Percentage(R&D Institution)"}),(0,a.jsx)(p.Z,{id:"gstPercentageDev",defaultValue:70,endAdornment:(0,a.jsx)(j.Z,{position:"end",children:"%"}),label:"GST Percentage(R&D Institution)",error:V("gstPercentageDev"),onChange:L}),(0,a.jsx)(k,{id:"gstPercentageDev",validate:V})]}),(0,a.jsxs)(x.Z,{sx:{m:1,width:"250px"},children:[(0,a.jsx)(h.Z,{htmlFor:"gstPercentage",children:"GST Percentage(NRDC)"}),(0,a.jsx)(p.Z,{id:"gstPercentage",defaultValue:30,endAdornment:(0,a.jsx)(j.Z,{position:"end",children:"%"}),label:"GST Percentage(NRDC)",type:"number",error:V("gstPercentage"),onChange:L}),(0,a.jsx)(k,{id:"gstPercentage",validate:V})]}),(0,a.jsxs)(x.Z,{sx:{m:1,width:"250px"},children:[(0,a.jsx)(h.Z,{htmlFor:"gstRate",children:"Current GST Rate"}),(0,a.jsx)(p.Z,{id:"gstRate",defaultValue:12,endAdornment:(0,a.jsx)(j.Z,{position:"end",children:"%"}),label:"Current GST Rate",type:"number",error:V("gstRate"),onChange:L}),(0,a.jsx)(k,{id:"gstRate",validate:V})]})]}),(0,a.jsx)(Z.Z,{variant:"contained",type:"submit",style:{marginLeft:"10px",marginTop:"10px"},children:"Calculate"})]})}),b.lumpsumResult?(0,a.jsxs)(v.Z,{sx:{marginLeft:"10px"},children:[(0,a.jsx)(y.Z,{}),(0,a.jsx)(g.Z,{children:(0,a.jsx)(c.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:P.map((function(e,t){return(0,a.jsxs)(c.ZP,{item:!0,xs:2,sm:4,md:6,children:[(0,a.jsx)(o.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:e.fieldTitle}),(0,a.jsxs)(o.Z,{variant:"h5",component:"div",children:["\u20b9",e.result]})]},t)}))})})]}):null]})}),(0,a.jsx)(c.ZP,{item:!0,xs:6,children:(0,a.jsxs)(m.Z,{variant:"outlined",sx:{minHeight:"440px"},children:[(0,a.jsx)(d.Z,{title:"Calculate R&D Share of Recurring Royalty"}),(0,a.jsx)(g.Z,{children:(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),I((function(e){return(0,s.Z)((0,l.Z)({},e),{royalty:!0})})),G(R,S,"royaltyResult")},children:[(0,a.jsxs)(x.Z,{sx:{m:1,width:"280px"},children:[(0,a.jsx)(h.Z,{htmlFor:"sale",children:"Sale Amount"}),(0,a.jsx)(p.Z,{id:"sale",name:"sale",label:"Sale Amount",startAdornment:(0,a.jsx)(a.Fragment,{children:" \u20b9"}),error:E("sale"),value:z(S.sale),onChange:function(e){var t=e.target.value.toString().replace(/,/g,"");C((function(n){var a;return(0,s.Z)((0,l.Z)({},n),(a={},(0,r.Z)(a,e.target.name,e.target.value),(0,r.Z)(a,"sale1",t),a))}))}}),(0,a.jsx)(k,{id:"sale",validate:E})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(x.Z,{sx:{m:1,width:"280px"},children:[(0,a.jsx)(h.Z,{htmlFor:"royaltyPercentageDev",children:"Royalty Percentage(R&D Institution)"}),(0,a.jsx)(p.Z,{id:"royaltyPercentageDev",name:"royaltyPercentageDev",label:"Royalty Percentage(R&D Institution)",defaultValue:"95",endAdornment:"%",type:"number",error:E("royaltyPercentageDev"),onChange:_}),(0,a.jsx)(k,{id:"royaltyPercentageDev",validate:E})]}),(0,a.jsxs)(x.Z,{sx:{m:1,width:"280px"},children:[(0,a.jsx)(h.Z,{htmlFor:"royaltyPercentage",children:"Royalty Percentage(NRDC)"}),(0,a.jsx)(p.Z,{id:"royaltyPercentage",name:"royaltyPercentage",label:"Royalty Percentage(NRDC)",defaultValue:"5",endAdornment:"%",error:E("royaltyPercentage"),onChange:_}),(0,a.jsx)(k,{id:"royaltyPercentage",validate:E})]})]}),(0,a.jsx)(Z.Z,{variant:"contained",type:"submit",style:{marginLeft:"10px",marginTop:"155px"},children:"Calculate"})]})}),b.royaltyResult?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.Z,{}),(0,a.jsx)(g.Z,{children:(0,a.jsx)(c.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:R.map((function(e,t){return(0,a.jsxs)(c.ZP,{item:!0,xs:2,sm:4,md:6,children:[(0,a.jsx)(o.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:e.fieldTitle}),(0,a.jsxs)(o.Z,{variant:"h5",component:"div",children:["\u20b9",e.result]})]},t)}))})})]}):null]})})]})]})}}},function(e){e.O(0,[774,140,888,179],(function(){return t=5081,e(e.s=t);var t}));var t=e.O();_N_E=t}]);