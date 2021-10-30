(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{102:function(e,t,a){e.exports={container:"Chart_container__1v-q5"}},103:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2Bdj5"}},24:function(e,t,a){e.exports={container:"Cards_container__2nku5",card:"Cards_card__2UaCD",infected:"Cards_infected__lSSSd",recovered:"Cards_recovered__2UZca",deaths:"Cards_deaths__1AsY_"}},242:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(95),o=a.n(c),s=a(13),i=a.n(s),u=a(18),d=a(4),l=a(2),j=a(7),f=a(6),p=a(260),b=a(264),h=a(261),v=a(262),x=a(47),m=a.n(x),O=a(48),g=a.n(O),y=a(24),C=a.n(y),_=a(3),w=function(e){var t=e.data,a=t.confirmed,r=t.recovered,n=t.deaths,c=t.lastUpdate;return a?Object(_.jsx)("div",{className:C.a.container,children:Object(_.jsxs)(p.a,{container:!0,spacing:3,justify:"center",children:[Object(_.jsx)(p.a,{item:!0,component:b.a,xs:12,md:3,className:g()(C.a.card,C.a.infected),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(_.jsxs)(v.a,{variant:"h5",children:[" ",Object(_.jsx)(m.a,{start:0,end:a.value,duration:2.5,separator:","})]}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body",children:"Number of active cases of Covid"})]})}),Object(_.jsx)(p.a,{item:!0,component:b.a,xs:12,md:3,className:g()(C.a.card,C.a.recovered),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(_.jsxs)(v.a,{variant:"h5",children:[" ",Object(_.jsx)(m.a,{start:0,end:r.value,duration:2.5,separator:","})]}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body",children:"Number of recoveries of Covid"})]})}),Object(_.jsx)(p.a,{item:!0,component:b.a,xs:12,md:3,className:g()(C.a.card,C.a.deaths),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(_.jsxs)(v.a,{variant:"h5",children:[" ",Object(_.jsx)(m.a,{start:0,end:n.value,duration:2.5,separator:","})]}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body",children:"Number of deaths caused by Covid"})]})})]})}):"Loading...."},k=a(23),S=a(49),D=a.n(S),N="https://covid19.mathdro.id/api",B=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,n,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,s=n.deaths,u=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(66),E=a(102),R=a.n(E),J=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=e.country,s=Object(r.useState)([]),d=Object(k.a)(s,2),l=d[0],j=d[1];Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}));var f=0!==l.length?Object(_.jsx)(A.b,{data:{labels:l.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:l.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null,p=a?Object(_.jsx)(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,n.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state is ".concat(o)}}}):null;return Object(_.jsx)("div",{className:R.a.container,children:o?p:f})},L=a(265),M=a(263),P=a(103),V=a.n(P),Y=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),n=Object(k.a)(a,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]),console.log(c),Object(_.jsx)(L.a,{className:V.a.formControl,children:Object(_.jsxs)(M.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(_.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))]})})},q=a(65),G=a.n(q),K=a.p+"static/media/image.9e5d4fc7.png",W=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(a);case 2:r=t.sent,e.setState({data:r,country:a}),console.log(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(_.jsxs)("div",{className:G.a.container,children:[Object(_.jsx)("img",{className:G.a.image,src:K,alt:"COVID-19"}),Object(_.jsx)(w,{data:t}),Object(_.jsx)(Y,{handleCountryChange:this.handleCountryChange}),Object(_.jsx)(J,{data:t,country:a})]})}}]),a}(n.a.Component),Z=W;o.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(Z,{})}),document.getElementById("root"))},65:function(e,t,a){e.exports={container:"App_container__31WaE",image:"App_image__3KYvy"}}},[[242,1,2]]]);
//# sourceMappingURL=main.0d928e6e.chunk.js.map