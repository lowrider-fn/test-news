(function(t){function e(e){for(var n,o,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)o=s[l],i[o]&&d.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==i[u]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},a=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-061ce13e":"20affc42","chunk-c8389326":"c44e4bf9"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=i[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(t),a=function(e){u.onerror=u.onload=null,clearTimeout(c);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}i[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-quick/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2a74":function(t,e,r){"use strict";r.r(e);r("a481"),r("ac6a");var n=r("d307"),i={};n.keys().forEach(function(t){"./index.js"!==t&&(i[t.replace(/(\.\/|\.js)/g,"")]=n(t).default)}),e["default"]=i},"2fc4":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{isAuth:t.isAuth},on:{logout:function(e){return t.logoutHandler()}}}),r("main",[r("router-view")],1)],1)},a=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),s=r("bd86"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("nav",{staticClass:"header__inner"},[r("ul",{staticClass:"header__list"},t._l(t.links,function(e,n){return r("li",{key:n,staticClass:"header__item"},[e.isShow?r("router-link",{staticClass:"link-nav",attrs:{to:{name:e.name}},nativeOn:{click:function(t){return e.action()}}},[t._v("\n                    "+t._s(e.text)+"\n                ")]):t._e()],1)}),0)])])},c=[],l={props:{isAuth:{type:Boolean}},computed:{links:function(){var t=this;return[{name:"News",text:"Что нового",isShow:!0,action:function(){}},{name:"EditNews",text:"Редактировать",isShow:this.isAuth,action:function(){}},{name:"Auth",text:"Авторизоваться",isShow:!this.isAuth,action:function(){}},{name:"Auth",text:"Выйти",isShow:this.isAuth,action:function(){return t.$emit("logout")}}]}}},p=l,d=r("2877"),m=Object(d["a"])(p,u,c,!1,null,null,null),h=m.exports,f=r("2f62");function g(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(r,!0).forEach(function(e){Object(s["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var b={name:"App",components:{Header:h},computed:w({},Object(f["c"])(["isAuth"])),methods:w({},Object(f["b"])(["logout"]),{logoutHandler:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.logout();case 2:this.$router.push({name:"Auth"});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})},_=b,v=Object(d["a"])(_,i,a,!1,null,null,null),y=v.exports,j=(r("7f7f"),r("8c4f")),O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth"},[r("div",{staticClass:"auth__inner"},[r("h1",{staticClass:"h1"},[t._v("\n            "+t._s(t.$route.meta.title)+"\n        ")]),r("form",{staticClass:"auth__form"},[r("Field",{attrs:{label:"Логин",value:t.form.login,placeholder:"Введите логин"},model:{value:t.form.login,callback:function(e){t.$set(t.form,"login",e)},expression:"form.login"}}),r("Field",{attrs:{label:"Пароль",type:"password",value:t.form.pwd,placeholder:"Введите пароль"},model:{value:t.form.pwd,callback:function(e){t.$set(t.form,"pwd",e)},expression:"form.pwd"}}),r("div",{staticClass:"auth__btn"},[r("button",{staticClass:"btn-blue",attrs:{type:"button"},on:{click:function(e){return t.loginHandler()}}},[t._v("\n                    Войти\n                ")])])],1)])])},x=[],S=r("c985");function T(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(r,!0).forEach(function(e){Object(s["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var N={name:"Auth",components:{Field:S["a"]},data:function(){return{form:{login:"",pwd:""}}},methods:k({},Object(f["b"])(["login"]),{loginHandler:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.login(this.form);case 2:this.$router.push({name:"EditNews"});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})},E=N,A=Object(d["a"])(E,O,x,!1,null,null,null),C=A.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"news"},[r("div",{staticClass:"news__inner"},[r("h1",{staticClass:"h1"},[t._v("\n            "+t._s(t.$route.meta.title)+"\n        ")]),t.$route.meta.auth?r("div",{staticClass:"news__control"},[r("button",{staticClass:"btn-link-green",attrs:{type:"button"},on:{click:function(e){return t.openForm()}}},[t._v("\n                Добавить\n            ")])]):t._e(),r("div",{staticClass:"news__item-wrap"}),t._l(t.news,function(e,n){return r("NewsItem",{key:n,attrs:{news:e,isAuth:t.$route.meta.auth},on:{delete:function(r){return t.confirmDelete(e)},edit:function(r){return t.openForm(e)}}})}),t.$route.meta.auth?r("div",[r("NewsConfirm",{attrs:{isShow:t.isDelete,isHide:t.isDelete},on:{"update:isHide":function(e){t.isDelete=e},"update:is-hide":function(e){t.isDelete=e},delete:function(e){return t.deleteNews(t.currentForm)}}}),r("NewsForm",t._b({attrs:{isHide:t.isForm},on:{"update:isHide":function(e){t.isForm=e},"update:is-hide":function(e){t.isForm=e},save:function(e){return t.save(e)}}},"NewsForm",{isForm:t.isForm,isEdit:t.isEdit,currentForm:t.currentForm},!1))],1):t._e()],2)])},I=[],D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"news-item"},[r("div",{staticClass:"news-item__inner"},[r("h2",{staticClass:"h2"},[t._v("\n            "+t._s(t.news.title)+"\n        ")]),r("p",{staticClass:"text-small"},[t._v("\n            "+t._s(t.formatedDate)+"\n        ")]),r("div",{staticClass:"news-item__text-box"},[r("p",{staticClass:"text"},[t._v("\n                "+t._s(t.news.description)+"\n            ")]),r("a",{staticClass:"link",attrs:{href:t.news.url}},[t._v("\n                Читать подробнее "+t._s(t.news.source.name)+"\n            ")])]),r("div",{staticClass:"news-item__img-box"},[r("img",{staticClass:"news-item__img",attrs:{src:t.news.urlToImage,alt:t.news.source.name}})]),t.isAuth?r("div",{staticClass:"news-item__edit"},[r("button",{staticClass:"btn-link-orange",attrs:{type:"button"},on:{click:function(e){return t.$emit("edit")}}},[t._v("\n                Редактировать\n            ")]),r("button",{staticClass:"btn-link-red",attrs:{type:"button"},on:{click:function(e){return t.$emit("delete")}}},[t._v("\n                Удалить\n            ")])]):t._e()])])},F=[],L=(r("28a5"),r("768b")),R={props:{isAuth:{type:Boolean,default:!1},news:{type:Object,required:!0}},computed:{formatedDate:function(){if(this.news.date){var t=this.news.date.split("T"),e=Object(L["a"])(t,2),r=e[0],n=e[1],i=r.split("-"),a=Object(L["a"])(i,3),o=a[0],s=a[1],u=a[2],c=n.split(":"),l=Object(L["a"])(c,2),p=l[0],d=l[1];return"".concat(u," ").concat(this.monthToString(s-1)," ").concat(o," ").concat(p,":").concat(d)}return""}},methods:{monthToString:function(t){var e,r=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];return r.forEach(function(r,n){t===n&&(e=r)}),e}}},$=R,M=Object(d["a"])($,D,F,!1,null,null,null),Z=M.exports;function W(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(r,!0).forEach(function(e){Object(s["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var H={name:"News",components:{NewsItem:Z,NewsConfirm:function(){return r.e("chunk-061ce13e").then(r.bind(null,"7677"))},NewsForm:function(){return r.e("chunk-c8389326").then(r.bind(null,"8e10"))}},data:function(){return{isDelete:!1,isForm:!1,isEdit:!1,defaultForm:{source:{name:"",id:""},title:"",description:"",url:"",urlToImage:""},currentForm:null}},computed:V({},Object(f["c"])(["news"])),mounted:function(){this.getNews()},methods:V({},Object(f["b"])(["getNews","updateNews","deleteNews","addNews"]),{openForm:function(t){t?(this.isEdit=!0,this.currentForm=t):(this.isEdit=!1,this.currentForm=this.defaultForm),this.isForm=!0},confirmDelete:function(t){this.currentForm=t,this.isDelete=!0},save:function(t){this.isEdit?this.updateNews(t):this.addNews(t)}})},z=H,G=Object(d["a"])(z,P,I,!1,null,null,null),J=G.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"not-found"},[r("h1",{staticClass:"h1"},[t._v("\n        "+t._s(t.$route.meta.title)+"\n    ")])])},q=[],U={name:"NotFound"},X=U,K=Object(d["a"])(X,B,q,!1,null,null,null),Y=K.exports,Q=r("2a74");n["default"].use(f["a"]);var tt=new f["a"].Store({modules:Q["default"]});n["default"].use(j["a"]);var et=new j["a"]({mode:"history",routes:[{path:"/",component:J,name:"News",meta:{title:"Новости"}},{path:"*",redirect:"/not_found"},{path:"/login",component:C,name:"Auth",meta:{guest:!0,title:"Авторизация"}},{path:"/article_editing",component:J,name:"EditNews",meta:{auth:!0,title:"Редактирование новостей"}},{path:"/not_found",name:"NotFound",component:Y,meta:{title:"Страница не найдена"}}]}),rt=function(){return tt.getters.isAuth},nt=function(t,e){t.matched.some(function(t){return t.meta.auth})?rt()?e():e({name:"Auth"}):e()},it=function(t,e){t.matched.some(function(t){return t.meta.guest})&&rt()?e({name:"EditNews"}):e()};et.beforeEach(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,r,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r.name){t.next=3;break}return t.next=3,tt.dispatch("checkLogin");case 3:nt(e,n),it(e,n);case 5:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}()),et.afterEach(function(t){return document.title=t.meta.title});var at=et;r("2fc4");n["default"].config.productionTip=!1,new n["default"]({router:at,store:tt,created:function(){if(sessionStorage.redirect){var t=sessionStorage,e=t.redirect;delete sessionStorage.redirect,this.$router.push(e)}},render:function(t){return t(y)}}).$mount("#app")},"611b":function(t,e,r){"use strict";r.r(e);r("55dd"),r("ac6a");var n=r("bf45"),i={findById:function(t,e,r){t.forEach(function(t,n){t.source.id===r&&e(n)})}},a={news:[]},o={getNews:function(t){var e=t.commit,r=localStorage.getItem("news");r&&r.length>0?e("SAVE_NEWS",JSON.parse(r)):(e("SAVE_NEWS",n),localStorage.setItem("news",JSON.stringify(n)))},deleteNews:function(t,e){var r=t.state.news,n=function(e){return t.commit("DELETE_NEWS",e)};i.findById(r,n,e.source.id),localStorage.setItem("news",JSON.stringify(r))},addNews:function(t,e){var r=t.state.news;t.commit("ADD_NEWS",e),localStorage.setItem("news",JSON.stringify(r))},updateNews:function(t,e){var r=t.state.news,n=function(n){var i=r;i.splice(n,1,e),t.commit("SAVE_NEWS",i)};i.findById(r,n,e.source.id),localStorage.setItem("news",JSON.stringify(r))}},s={SAVE_NEWS:function(t,e){return t.news=e},ADD_NEWS:function(t,e){return t.news.push(e)},DELETE_NEWS:function(t,e){return t.news.splice(e,1)}},u={news:function(t){var e=function(t){return Date.parse(new Date(t))};return t.news.sort(function(t,r){return e(r.date)-e(t.date)})}};e["default"]={state:a,mutations:s,actions:o,getters:u}},bf45:function(t){t.exports=[{source:{id:"lenta",name:"Lenta"},author:null,title:"Порошенко рассказал о «формуле Лаврова» по Донбассу - Lenta.ru",description:"Бывший президент Украины Петр Порошенко заявил, что никакой «формулы Штайнмайера» не существует, но есть так называемая формула министра иностранных дел России Сергея Лаврова. Порошенко добавил, что ознакомиться с этим документом ему предложил Владимир Путин,…",url:"https://lenta.ru/news/2019/09/22/formula_lavrova/",urlToImage:"https://icdn.lenta.ru/images/2019/09/22/14/20190922143037306/detail_ef093a5576b440b9d6dca52c810fd973.jpg",date:"2019-09-22T11:33:00Z",content:', « » , . «5 », «-».\r\n , - , , . « , , [ ] », - .\r\n, . , , « », . « : ", . , , ". " , , "», , , « ».\r\n, « » , . , .\r\n« » , - , . , .'},{source:{id:"jhgjhgjgh",name:"Sportbox.ru"},author:null,title:"Российские гимнастки завоевали бронзу ЧМ в упражнениях с мячами - news.Sportbox.ru",description:"Сборная России заняла третье место в групповых упражнения с пятью мячами на чемпионате мира в Баку.",url:"https://news.sportbox.ru/Vidy_sporta/hud_gimnastika/spbnews_NI1081503_Rossijskije_gimnastki_zavojevali_bronzu_ChM_v_uprazhnenijah_s_machami",urlToImage:"https://s-cdn.sportbox.ru/images/shares/1200x600/node/21/1081503.jpg",date:"2019-09-22T11:28:25Z",content:"© « » 2007 2019.16 \r\n «www.sportbox.ru»     ,   ().\r\n № 77-72613  04.04.2018\r\n — www.sportbox.ru\r\n () «www.sportbox.ru»: « »\r\n «www.sportbox.ru»: ..\r\n «www.sportbox.ru»: +7 (495) 653 8419\r\n «www.sportbox.ru»: editor@sportbox.ru"},{source:{id:"wrewrwe",name:"Ria.ru"},author:"",title:"Полиция Гонконга применила слезоточивый газ для разгона протестующих - РИА Новости",description:"Полиция Гонконга применила слезоточивый газ для разгона антиправительственных протестующих, сообщает издание RTHK. РИА Новости, 22.09.2019",url:"https://ria.ru/20190922/1558974895.html",urlToImage:"https://cdn25.img.ria.ru/images/sharing/article/1558974895.jpg?15576015291569150289",date:"2019-09-22T11:04:59Z",content:"https://ria.ru/20190922/1558974895.html\r\nhttps://cdn25.img.ria.ru/images/155760/15/1557601532_0:0:2734:1538_1036x0_80_0_0_de85d6a9b5a4b659f3fb1c2cb1e500e8.jpg.webp\r\nhttps://cdn22.img.ria.ru/i/export/ria/logo.png\r\nhttps://cdn22.img.ria.ru/i/export/ria/logo.png… [+29 chars]"},{source:{id:"rbc",name:"RBC"},author:null,title:"СМИ сообщили об освобождении захваченных у Камеруна российских моряков - РБК",description:"Пираты освободили моряков, в том числе россиян, которых захватили у берегов Камеруна. Об этом сообщает РИА Новости со ссылкой на источник в компании-работодателе. По данным собеседника, моряков ...",url:"https://www.rbc.ru/rbcfreenews/5d8745c19a7947f2f5c36584",urlToImage:"https://s0.rbk.ru/v6_top_pics/media/img/9/09/755691484984099.jpg",date:"2019-09-22T10:34:00Z",content:", , . « » -.\r\n , . , . , .\r\n - .\r\n «» . , , . MC-Schiffahrt ."},{source:{id:"hgfhgfhfhgf",name:"Ria.ru"},author:"",title:"Синоптики рассказали, когда в Москву вернется ясная погода - РИА Новости",description:"Научный руководитель Гидрометцентра Роман Вильфанд рассказал, какая погода ожидает москвичей на следующей неделе. РИА Новости, 22.09.2019",url:"https://ria.ru/20190922/1558974315.html",urlToImage:"https://cdn25.img.ria.ru/images/sharing/article/1558974315.jpg?15321779431569152553",date:"2019-09-22T10:15:09Z",content:"https://ria.ru/20190922/1558974315.html\r\nhttps://cdn25.img.ria.ru/images/153217/79/1532177944_0:179:3324:2048_1036x0_80_0_0_6f47d89e8454818df736348538e05b13.jpg.webp\r\nhttps://cdn22.img.ria.ru/i/export/ria/logo.png\r\nhttps://cdn22.img.ria.ru/i/export/ria/logo.p… [+1 chars]"},{source:{id:"erwewrewr",name:"Aif.ru"},author:null,title:"Пилот, посадивший А321 в кукурузном поле, вернулся к полетам - Аргументы и факты",description:"Дамир Юсупов на этой неделе вернулся к работе в небе",url:"https://aif.ru/society/ptransport/komandir_posadivshiy_a321_v_kukuruznom_pole_vernulsya_k_poletam",urlToImage:"https://images.aif.ru/018/036/b1ab86097604ac91243d92426a3abb65.jpg",date:"2019-09-22T10:02:57Z",content:", 22 - -.   Airbus 321 . - « ».\r\n, . , , .\r\nAirbus A321, , 15    .  , . .\r\n 321 .\r\n « » . ."},{source:{id:"ewqewqeq",name:"Championat.com"},author:"Чемпионат",title:"Семак поздравил Сутормина с дублем в ворота «Рубина» - Чемпионат",description:"Главный тренер «Зенита» Сергей Семак поздравил полузащитника петербургской команды Алексея Сутормина с дублем в ворота «Рубина» (5:0) в матче 10-го тура Российской Премьер-Лиги.  «Поздравляю команду и болельщиков с яркой победой, а Лёшу Сутормина — с дебютным…",url:"https://www.championat.com/football/news-3855959-semak-pozdravil-sutormina-s-dublem-v-vorota-rubina.html",urlToImage:"https://img.championat.com/news2/social/c/97/3855959.jpg",date:"2019-09-22T09:39:15Z",content:"«» «» (5:0) 10- -. \r\n« , «», «». \r\n, «» «», «». .\r\n«», 23 , . «» (10) 10- . - «»."},{source:{id:"vcxvcx",name:"Vesti.ru"},author:"Вести.Ru",title:"Пушков отреагировал на шумиху вокруг разговора Трампа и Зеленского - Вести.Ru",description:"Российский сенатор Алексей Пушков считает, что в споре Дональда Трампа и Джозефа Байдена Киев выбрал сторону действующего президента США.",url:"https://www.vesti.ru/doc.html?id=3191702",urlToImage:"https://cdn-st1.rtr-vesti.ru/p/xw_1529515.jpg",date:"2019-09-22T09:17:00Z",content:'© 2019 ".". : " " (). 77-72266 24.01.2018. , . : .. : info@vesti.ru, : +7(495)232-63-33. 16 .\r\n, , . , , ().'},{source:{id:"rewrwew",name:"Sportbox.ru"},author:null,title:"Марио Фернандес: «Российский футбол сделал огромный шаг вперед» - news.Sportbox.ru",description:"Защитник сборной России и ЦСКА Марио Фернандес рассказал о своей жизни в России и о том, как страна изменилась после ЧМ-2018.",url:"https://news.sportbox.ru/Vidy_sporta/Futbol/Russia/premier_league/spbnews_NI1081435_Mario_Fernandes_Rossijskij_futbol_sdelal_ogromnyj_shag_vpered",urlToImage:"https://s-cdn.sportbox.ru/images/shares/1200x600/node/01/1081435.jpg",date:"2019-09-22T09:05:30Z",content:", -2018. \r\n    ,           . - ,    ?\r\n    ,   , .  .    , ,       .  ,       . ?  ,   - ,   ,   ,   ,    , .     .        ,  -.  ,  .\r\n   -2018?   ,  ? , ,   ,   ,             \r\n , ,    . .    , .    , . ,    , , --, ,   ! ,  ,   ,   .   .\r\n29-    2012 .  20… [+9 chars]"},{source:{id:"iuyiuyiyu",name:"Rsport.ria.ru"},author:"",title:"В ОКР назвали слухами сообщения об угрозе отстранения РФ от Олимпиады-2020 - Спорт РИА Новости",description:"Пресс-секретарь Олимпийского комитета России Константин Выборнов назвал слухами информацию о том, что России грозит отстранение от Олимпиады-2020 в Токио. Спорт РИА Новости, 22.09.2019",url:"https://rsport.ria.ru/20190922/1558973121.html",urlToImage:"https://cdn22.img.ria.ru/images/sharing/article/1558973121.jpg?15250272891569152573",date:"2019-09-22T08:45:26Z",content:"https://rsport.ria.ru/20190922/1558973121.html\r\nhttps://cdn25.img.ria.ru/images/152502/72/1525027293_740:738:3069:2048_1036x0_80_0_0_0f5d45e3273b1072c43e35fd2418594f.jpg.webp\r\nhttps://cdn22.img.ria.ru/i/export/rsport/logo.png\r\nhttps://cdn22.img.ria.ru/i/expor… [+60 chars]"},{source:{id:"sadsf",name:"Versiya.info"},author:null,title:"«Все думают, будто у меня всегда открыт капот»: Владелец рассказал о недостатках и «косяках» LADA Vesta SW - Версия.Инфо",description:"Всего за 2 месяца эксплуатации водитель абсолютно новой &laquo;Весты&raquo; столкнулся с возмутительно длинным списком из недочетов. Владелец LADA Vesta SW Алексей Анюков поделился отзывом на свой автомобиль на авторском одноименном канале. Он уточнил, что пр…",url:"https://versiya.info/avto/125752",urlToImage:"https://versiya.info/uploads/posts/2019-09/1569138485_10-1.jpg",date:"2019-09-22T08:21:20Z",content:"2 «» .\r\nLADA Vesta SW . , « » 2019 106- 1.6. 6500 , – .\r\n LADA Vesta SW : , , , , « », 0,5 , .\r\n . « , », – « » , . , , LADA Vesta SW.\r\n «» 106- , , , . KIA Rio, 123 ..\r\n , , – . , .\r\n «» Vesta SW: , , , , , «» . « , », – .\r\n« » 100 /, , , , «» .\r\n, , . « , ,… [+17 chars]"},{source:{id:"uytuyt",name:"Dni24.com"},author:null,title:'Звезда "Дом-2" Дарья Пынзарь показала новую квартиру в Турции - Независимое интернет-издание "ДНИ"',description:"У Дарьи и Сергея Пынзарь появилась новая недвижимость. Они приобрели двухэтажные апартаменты. Отныне пара не будет брать жилье в аренду на территории чужой страны. (adsbygoogle = window.adsbygoogle || ).push(); Напомним, что семья Пынзарь переехала более года…",url:"https://dni24.com/exclusive/237934-zvezda-dom-2-darja-pynzar-pokazala-novuju-kvartiru-v-turcii.html",urlToImage:"https://dni24.com/uploads/posts/2019-09/1569138484_pynzar.png",date:"2019-09-22T08:05:06Z",content:'. . ., . . , ., . -. , , . - "-2" . , : , , , .\r\n. , . .\r\n- - -. : , .'},{source:{id:"bvcbcv",name:"3dnews.ru"},author:null,title:"Huawei планирует разблокировать загрузчик в смартфонах серии Mate 30 - 3DNews",description:"Во время запуска новых флагманов серии Mate 30, который прошёл на этой неделе в Мюнхене, директор потребительского подразделения Huawei Ричард Ю (Richard Yu) ответил на вопросы журналистов, касающихся в том числе и разблокировки загрузчика.",url:"https://3dnews.ru/994444",urlToImage:"https://3dnews.ru/assets/external/illustrations/2019/09/21/994444/sm.14.800.jpg",date:"2019-09-22T08:02:20Z",content:"Mate 30, , Huawei (Richard Yu) , .\r\n Mate 30 Google, , Play Services. Huawei . , .\r\n« , . , . », — , .\r\n , . , , . , , Mate 30, Google. , Mate 30 Mate 30 Pro ."},{source:{id:"ytryrtytr",name:"Gazeta.ru"},author:null,title:"В партии Зеленского указали на разные ценности ЕС и Украины - Газета.Ru",description:"В партии «Слуга народа» призвали Украину перенять у стран Евросоюза основы децентрализации, организации судебной системы, структуры правоохранительной сферы, но не перенимать чуждые украинцам европейские ценности. Ранее президент Эстонии Керсти Кальюлайд заяв…",url:"https://www.gazeta.ru/politics/2019/09/22_a_12667885.shtml",urlToImage:"https://img.gazeta.ru/files3/915/12667915/123-pic905-895x505-65006.jpg",date:"2019-09-22T07:27:23Z",content:null},{source:{id:"iuiuy",name:"Interfax.ru"},author:null,title:"Отравившийся в Эймсбери британец захотел отсудить у России почти $1,25 млн - Интерфакс",description:"Британец Чарльз Роули, отравившийся летом 2018 года в Эймсбери, как считает Скотленд-ярд, нервнопаралитическим веществом, планирует отсудить у России 1 млн фунтов стерлингов ($1,25 млн), пишет в воскресенье газета Daily Mirror со ссылкой на заявление его адво…",url:"https://www.interfax.ru/world/677415",urlToImage:"https://www.interfax.ru/aspimg/677415.png",date:"2019-09-22T07:19:00Z",content:'. 22 . INTERFAX.RU - , 2018 , -, , 1 ($1,25 ), Daily Mirror .\r\n" , . , , ", - .\r\n , , "". . .\r\n30 2018 . . "", , 2018 , .\r\n .\r\n , , .\r\n . , " ". , , , " ; , , , ".'},{source:{id:"rt",name:"RT"},author:"RT на Русском",title:"Шойгу назвал число военных баз США в мире - RT на русском",description:"Российский министр обороны Сергей Шойгу заявил, что США имеют по всему миру 170 военных баз. По его мнению, Россия может эффективно противостоять Соединённым Штатам благодаря отечественной промышленности и новым разработкам.",url:"https://russian.rt.com/world/news/670495-shoigu-bazi-ssha",urlToImage:"https://cdni.rt.com/russian/images/2019.09/article/5d8717a2ae5ac97b523e5919.png",date:"2019-09-22T07:11:00Z",content:null},{source:{id:"oiuoiu",name:"Mail.ru"},author:"Здоровье Mail.ru",title:"В какое время суток лучше не лечиться. И не заболевать - Здоровье Mail.ru",description:"Внутренние часы нашего организма управляют не только тем, в какое время суток нам хочется спать.",url:"https://health.mail.ru/news/v_kakoe_vremya_sutok_luchshe_ne_lechitsya_i_ne/",urlToImage:"https://health.mail.ru/sharepic/33/370680/?1569054062",date:"2019-09-22T07:00:50Z",content:", . , . , .\r\n . . , , 12 . , , .\r\n .\r\n , : , , .\r\n , ( ), , .\r\n« , », , - (). .\r\n , , , , . , .\r\n , , .\r\n« , , , . , , ».\r\n, , . .\r\n .\r\n , , , .\r\n , , , .\r\n« , , », , ().\r\n« , , , . », .\r\n , (, , ), .\r\n , , , 11 , , .\r\n , .\r\n , , . , , - .\r\n« , », , , .\r\n , (… [+542 chars]"},{source:{id:"bvcvcbc",name:"Amur.info"},author:null,title:"Амурчане активно покупают новые айфоны через интернет / ИА - ИА Амур.инфо",description:"Амурская область оказалась в топе отдаленных регионов по востребованности новых iPhone. Амурчане предпочитают покупать новинку через интернет.",url:"https://www.amur.info/news/2019/09/22/160266",urlToImage:"//img.amur.info/res/news/160266/500x_/ea449d7c4769a899ff6ebfa851d3bf4b.jpg",date:"2019-09-22T06:52:35Z",content:"- iPhone , . , – - , 2019 iPhone – , . « , iPhone – », – - -.\r\n10 Apple – iPhone 11, iPhone 11 Pro iPhone 11 Pro Max. 18 , 20 .\r\n 54 – . – iPhone 11 Max – 124 ."},{source:{id:"rbbvcbvcc",name:"RBC"},author:null,title:"WSJ узнала о предупреждении Эр-Рияду от хуситов о новых атаках Ирана - РБК",description:"По данным газеты, предупреждение о подготовке Ирана к новым ударам йеменские хуситы направили США и Саудовской Аравии. На Западе к их заявлениям давно относятся скептически, но Эр-Рияд предпринял меры по усилению безопасности",url:"https://www.rbc.ru/politics/22/09/2019/5d87103b9a7947e4dd87fc0b",urlToImage:"https://s0.rbk.ru/v6_top_pics/media/img/4/06/755691348390064.jpg",date:"2019-09-22T06:47:00Z",content:"- , . The Wall Street Journal , . , , , .\r\n , « » , .\r\n , , , . WSJ , - .\r\n , - . - ."},{source:{id:"iuyiuyiuy",name:"Svpressa.ru"},author:null,title:"Новости дня: Стали известны цены на спецверсии автомобилей Lada - Свободная Пресса",description:"Появилась информация о стоимости лимитированных спецверсий Lada Granta, Xray и Largus с приставкой #CLUB",url:"https://svpressa.ru/auto/news/244393/",urlToImage:"https://svpressa.ru/p/24/244/244393/p-244393.png",date:"2019-09-22T06:40:00Z",content:"Lada Granta, Xray  Largus   #CLUB.\r\n    7  13 . « », Granta, Xray  Largus   Comfort     . , Xray    712 900  762 900 , Granta — 526 500 — 566 500 , Largus — 692 900 — 715 900 .\r\n , ,  , «» Xray     , , , ,  , , -.\r\n « »  , Volkswagen Jetta — VA3.\r\n :   -  \r\n,… [+46 chars]"}]},c7d4:function(t,e,r){"use strict";r.r(e);var n={isAuth:!1},i={login:function(t,e){var r=t.commit;localStorage.setItem("auth",!0),r("LOGIN")},checkLogin:function(t){var e=t.commit;JSON.parse(localStorage.getItem("auth"))&&e("LOGIN")},logout:function(t){var e=t.commit;localStorage.removeItem("auth"),e("LOGOUT")}},a={LOGIN:function(t){return t.isAuth=!0},LOGOUT:function(t){return t.isAuth=!1}},o={isAuth:function(t){return t.isAuth}};e["default"]={state:n,mutations:a,actions:i,getters:o}},c985:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"field"},[r("label",{staticClass:"field__label"},[t._v("\n        "+t._s(t.label)+"\n    ")]),r("input",{staticClass:"field__input",attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])},i=[],a=(r("c5f6"),{props:{type:{type:String,default:"text"},value:{type:[Number,String]},label:{type:[Number,String]},placeholder:{type:String}}}),o=a,s=r("2877"),u=Object(s["a"])(o,n,i,!1,null,"5306961e",null);e["a"]=u.exports},d307:function(t,e,r){var n={"./auth.js":"c7d4","./index.js":"2a74","./news.js":"611b"};function i(t){var e=a(t);return r(e)}function a(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="d307"}});
//# sourceMappingURL=app.b2470611.js.map