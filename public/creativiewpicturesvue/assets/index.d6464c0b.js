var Z=Object.defineProperty;var J=(e,t,s)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var v=(e,t,s)=>(J(e,typeof t!="symbol"?t+"":t,s),s);import{d as g,c as w,u as x,r as m,o as c,a as d,b as r,e as p,w as h,n as N,f as S,g as $,t as u,h as F,T as K,i as H,j as k,v as Y,p as y,k as I,l as R,m as _,q as b,s as Q,x as z,F as E,y as T,z as X,A,B as q,C as M,D,E as ee,G as te,H as se,I as ae}from"./vendor.17430302.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};oe();var re="/creativiewpicturesvue/assets/mail_white.eb84f3d4.svg",ne="/creativiewpicturesvue/assets/phone_white.ef03ddf4.svg",ie="/creativiewpicturesvue/assets/facebook_white.adb81be4.svg";var f=(e,t)=>{const s=e.__vccOpts||e;for(const[a,n]of t)s[a]=n;return s};const le=g({setup(){const e=w(()=>{const{name:s}=x();return s==="home"});return{footerClass:w(()=>({footerClass:!e.value}))}}}),ce=S('<div class="iconFooter" data-v-4e567ada><img class="icon" src="'+re+'" alt="mail icon" data-v-4e567ada><a href="mailto:dimitri.steinbusch@creatiview.be" data-v-4e567ada>dimitri.steinbusch@creatiview.be</a></div><div class="iconFooter" data-v-4e567ada><img class="icon" src="'+ne+'" alt="phone icon" data-v-4e567ada><a href="tel:+32476691674" data-v-4e567ada>+32 (0)476 69 16 74</a></div><a href="https://www.facebook.com/Creatiview-115424323438636" target="_blank" rel="noopener" data-v-4e567ada><img class="facebookIcon" src="'+ie+'" alt="facebook icon" data-v-4e567ada></a><div data-v-4e567ada><a class="webLink" href="https://www.creatiview.be" target="_blank" rel="noopener" data-v-4e567ada>D\xE9couvrir mes r\xE9alisations web</a></div><div data-v-4e567ada><p data-v-4e567ada>TVA: BE0753 863 214</p></div>',5),ue=$("Conditions g\xE9n\xE9rales");function de(e,t,s,a,n,i){const o=m("router-link");return c(),d("footer",{class:N(e.footerClass)},[ce,r("div",null,[p(o,{to:{name:"termsOfUse"}},{default:h(()=>[ue]),_:1})])],2)}var pe=f(le,[["render",de],["__scopeId","data-v-4e567ada"]]);const me=g({emits:["update:modelValue"],props:{modelValue:{type:Boolean,required:!1}},setup(e,{emit:t}){return{localModelValue:w({get:()=>e.modelValue,set:a=>{t("update:modelValue",a)}})}}}),ve={class:"routes"};function _e(e,t,s,a,n,i){const o=m("RouterLink");return c(),d("div",ve,[p(o,{onClick:t[0]||(t[0]=l=>e.localModelValue=!1),to:{name:"home"}},{default:h(()=>[$(u(e.$t("nav.home")),1)]),_:1}),p(o,{onClick:t[1]||(t[1]=l=>e.localModelValue=!1),to:{name:"pictures"}},{default:h(()=>[$(u(e.$t("nav.pictures")),1)]),_:1}),p(o,{onClick:t[2]||(t[2]=l=>e.localModelValue=!1),to:{name:"contact"}},{default:h(()=>[$(u(e.$t("nav.contact")),1)]),_:1})])}var B=f(me,[["render",_e],["__scopeId","data-v-23d43015"]]),fe="/creativiewpicturesvue/assets/clear.6fa14307.svg";const he=g({components:{CvRoutes:B},emits:["update:modelValue"],props:{modelValue:{type:Boolean,required:!0}},setup(e,{emit:t}){return{localModelValue:w({get:()=>e.modelValue,set:a=>{t("update:modelValue",a)}})}}}),ge=e=>(y("data-v-7a8c6836"),e=e(),I(),e),be={class:"phone"},$e={class:"fullMenu"},we=ge(()=>r("img",{class:"clearIcon",src:fe,alt:"clear icon"},null,-1)),Ce=[we],ye={class:"divRoutes"};function Ie(e,t,s,a,n,i){const o=m("CvRoutes");return c(),F(H,{to:"body"},[r("div",be,[p(K,{name:"showFromMiddle"},{default:h(()=>[k(r("div",$e,[r("button",{class:"buttonExit",onClick:t[0]||(t[0]=l=>e.localModelValue=!1)},Ce),r("div",ye,[p(o,{modelValue:e.localModelValue,"onUpdate:modelValue":t[1]||(t[1]=l=>e.localModelValue=l)},null,8,["modelValue"])])],512),[[Y,e.localModelValue]])]),_:1})])])}var Pe=f(he,[["render",Ie],["__scopeId","data-v-7a8c6836"]]);const ke=g({props:{width:{default:"150px"}},setup(e){return{svgWidth:w(()=>({width:e.width}))}}}),Ee=S('<g id="Group_8" transform="translate(-88 -232)" data-v-740fdca2><path id="Intersection_3" d="M119.111,0a119.111,119.111,0,1,0,0,238.222Z" transform="translate(88 232)" fill="#ffa41b" data-v-740fdca2></path><text id="reati" transform="translate(220 470)" fill="#005082" font-size="159" data-v-740fdca2><tspan x="0" y="0" data-v-740fdca2>reati</tspan></text><text id="iew" transform="translate(663 470)" fill="#005082" font-size="159" data-v-740fdca2><tspan x="0" y="0" data-v-740fdca2>iew</tspan></text><path id="Path_8" d="M144,134.025H259.225L144,253.136Z" transform="translate(388.556 217.086)" fill="#ffa41b" data-v-740fdca2></path></g>',1),Ve=[Ee];function Se(e,t,s,a,n,i){return c(),d("svg",{style:R(e.svgWidth),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 802 290"},Ve,4)}var U=f(ke,[["render",Se],["__scopeId","data-v-740fdca2"]]),Me="/creativiewpicturesvue/assets/logo.d9ba577a.svg",xe="/creativiewpicturesvue/assets/menu_icon.27ae4dbf.svg",Fe="/creativiewpicturesvue/assets/menu_white.34f566d6.svg";const Ae=g({components:{CvLogoSvg:U,CvRoutes:B,CvFullMenu:Pe},setup(){const e=_(!1),t=w(()=>{const{name:a}=x();return a==="home"}),s=w(()=>({whiteRoute:t.value}));return{showFullMenu:e,routesClass:s,isHomePage:t}}}),Le=e=>(y("data-v-2d3b2351"),e=e(),I(),e),Ne={class:"logoText"},He=Le(()=>r("img",{class:"desktop logo",src:Me,alt:"ceatiview logo"},null,-1)),Re={key:0,class:"text"},ze={key:0,class:"logoHamburger",src:xe,alt:"hamburger menu"},Te={key:1,class:"logoHamburger",src:Fe,alt:"hamburger menu"};function qe(e,t,s,a,n,i){const o=m("CvLogoSvg"),l=m("RouterLink"),C=m("CvFullMenu");return c(),d("header",null,[r("div",Ne,[He,e.isHomePage?b("",!0):(c(),d("div",Re,[p(o)]))]),r("div",{class:N(["desktop menuRoutes rightMenu",e.routesClass])},[p(l,{to:{name:"home"}},{default:h(()=>[$(u(e.$t("nav.home")),1)]),_:1}),p(l,{to:{name:"pictures"}},{default:h(()=>[$(u(e.$t("nav.pictures")),1)]),_:1}),p(l,{to:{name:"contact"}},{default:h(()=>[$(u(e.$t("nav.contact")),1)]),_:1})],2),r("button",{class:"phone hamburger",onClick:t[0]||(t[0]=V=>e.showFullMenu=!0)},[e.isHomePage?b("",!0):(c(),d("img",ze)),e.isHomePage?(c(),d("img",Te)):b("",!0)]),p(C,{modelValue:e.showFullMenu,"onUpdate:modelValue":t[1]||(t[1]=V=>e.showFullMenu=V)},null,8,["modelValue"])])}var Be=f(Ae,[["render",qe],["__scopeId","data-v-2d3b2351"]]);const Ue={components:{CvFooter:pe,CvHeader:Be}},je={id:"appVue"},Oe={class:"exceptFooter"};function We(e,t,s,a,n,i){const o=m("CvHeader"),l=m("RouterView"),C=m("CvFooter");return c(),d("div",je,[r("div",Oe,[p(o),p(l)]),p(C)])}var Ge=f(Ue,[["render",We]]);const Ze={components:{CvLogoSvg:U}},Je=e=>(y("data-v-12b14814"),e=e(),I(),e),Ke=Je(()=>r("div",{class:"fixedPanel divHeroImg"},null,-1)),Ye={class:"fixedPanel txtCenterHome"},Qe={class:"svgTxt"},Xe=$("D\xE9couvrir les albums");function De(e,t,s,a,n,i){const o=m("CvLogoSvg"),l=m("router-link");return c(),F(H,{to:"body"},[Ke,r("div",Ye,[r("div",Qe,[p(o,{width:"60%"})]),p(l,{class:"linkToPictures",to:{name:"pictures"}},{default:h(()=>[Xe]),_:1})])])}var et=f(Ze,[["render",De],["__scopeId","data-v-12b14814"]]),L=Q.create({baseURL:"/api",withCredentials:!1});class tt{constructor(t,s,a){v(this,"albumId");v(this,"albumName");v(this,"presentationPictureId");this.albumId=t,this.albumName=s,this.presentationPictureId=a}getId(){return this.albumId}getName(){return this.albumName}getPresentationPictureId(){return this.presentationPictureId}}class st{constructor(t){v(this,"album");v(this,"pictures");this.album=t,this.pictures=new Array}addPicture(t){this.pictures.push(t)}getAlbumName(){return this.album.getName()}getPictures(){return this.pictures}getNextPictureId(t){for(let s=0;s<=this.pictures.length;++s)if(this.pictures[s].getPictureId()===t){const n=s+1;return n>this.pictures.length?0:this.pictures[n].getPictureId()}return-1}getPreviousPictureId(t){for(let s=0;s<=this.pictures.length;++s)if(this.pictures[s].getPictureId()===t){const n=s-1;return n<0?0:this.pictures[n].getPictureId()}return-1}}class at{constructor(t,s,a,n,i,o){v(this,"pictureId");v(this,"aperture");v(this,"speed");v(this,"camera");v(this,"iso");v(this,"focalLength");this.pictureId=t,this.aperture=s,this.speed=a,this.camera=n,this.iso=i,this.focalLength=o}getPictureId(){return this.pictureId}getAperture(){return this.aperture}getSpeed(){return this.speed}getCamera(){return this.camera}getIso(){return this.iso}getFocalLength(){return this.focalLength}}class P{static parseAlbums(t){const s=new Array;for(const a of t)s.push(P.parseAlbum(a));return s}static parseAlbum(t){return new tt(t.albumId,t.albumName,t.presentationPictureId)}static parseAlbumPicture(t){const s=P.parseAlbum(t.album),a=new st(s);for(const n of t.pictures){const i=P.parsePicture(n);a.addPicture(i)}return a}static parsePicture(t){return new at(t.pictureId,t.aperture,t.speed,t.camera,t.iso,t.focalLength)}}class j{static async getAllAlbums(){const t=await L.get("/albums");return P.parseAlbums(t.data)}static async getAlbum(t){const s=await L.get(`/albums/${t}`);return P.parseAlbumPicture(s.data)}}const ot={setup(){const e=_(new Array);z(async()=>{e.value=await j.getAllAlbums()});const t=a=>`/api/pictures/${a}`;return{albums:e,getImgSrc:t,albumStyle:a=>({"background-image":`url(${t(a)})`})}}},rt=e=>(y("data-v-24e4f732"),e=e(),I(),e),nt={class:"albums"},it=rt(()=>r("div",{class:"orangeBackground albumSizing"},null,-1)),lt={class:"albumName"};function ct(e,t,s,a,n,i){const o=m("router-link");return c(),d("div",nt,[(c(!0),d(E,null,T(a.albums,l=>(c(),F(o,{to:{name:"album",params:{albumId:l.getId()}},style:R(a.albumStyle(l.getPresentationPictureId())),class:"album albumSizing",key:l.getId()},{default:h(()=>[it,r("p",lt,u(l.getName()),1)]),_:2},1032,["to","style"]))),128))])}var ut=f(ot,[["render",ct],["__scopeId","data-v-24e4f732"]]);const dt=g({setup(){const{t:e}=X(),t=_(""),s=_(""),a=_(""),n=_(""),i=_(""),o=_(""),l=_(""),C=_(!1),V=async()=>{try{if(G(),i.value||o.value||l.value)return;await L.post("/contact",{name:t.value,firstName:s.value,email:a.value,message:n.value}),C.value=!0,t.value="",s.value="",a.value="",n.value="",i.value="",o.value="",l.value=""}catch{alert("D\xE9sol\xE9, une erreur est survenue")}},G=()=>{t.value||(i.value=e("contact.emptyField",{name:e("contact.name").toLowerCase()})),a.value?q.isEmail(a.value)||(o.value=e("contact.errorEmail")):o.value=e("contact.emptyField",{name:e("contact.email").toLowerCase()}),n.value||(l.value=e("contact.emptyField",{name:e("contact.message").toLowerCase()}))};return A(t,()=>{t.value&&(i.value="")}),A(a,()=>{a.value&&q.isEmail(a.value)&&(o.value="")}),A(n,()=>{n.value&&(l.value="")}),{sendFormContact:V,name:t,firstName:s,email:a,message:n,errorName:i,errorEmail:o,errorMessage:l,confirmSend:C}}}),pt=e=>(y("data-v-42b3cdbe"),e=e(),I(),e),mt={key:0},vt={key:0},_t={key:0},ft=pt(()=>r("button",{class:"sendButton",type:"submit"},"Envoyer",-1)),ht={key:0,class:"confirmSend"};function gt(e,t,s,a,n,i){return c(),d(E,null,[r("form",{onSubmit:t[4]||(t[4]=D((...o)=>e.sendFormContact&&e.sendFormContact(...o),["prevent"])),novalidate:""},[r("label",null,[r("span",null,u(e.$t("contact.name")),1),k(r("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.name=o),type:"text",name:"name"},null,512),[[M,e.name]]),e.errorName?(c(),d("span",mt,u(e.errorName),1)):b("",!0)]),r("label",null,[r("span",null,u(e.$t("contact.firstName")),1),k(r("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>e.firstName=o),type:"text",name:"firstName"},null,512),[[M,e.firstName]])]),r("label",null,[r("span",null,u(e.$t("contact.email")),1),k(r("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>e.email=o),type:"email",name:"email"},null,512),[[M,e.email]]),e.errorEmail?(c(),d("span",vt,u(e.errorEmail),1)):b("",!0)]),r("label",null,[r("span",null,u(e.$t("contact.message")),1),k(r("textarea",{"onUpdate:modelValue":t[3]||(t[3]=o=>e.message=o),name:"message"},null,512),[[M,e.message]]),e.errorMessage?(c(),d("span",_t,u(e.errorMessage),1)):b("",!0)]),ft],32),e.confirmSend?(c(),d("div",ht,[r("p",null,u(e.$t("contact.confirmSend")),1)])):b("",!0)],64)}var bt=f(dt,[["render",gt],["__scopeId","data-v-42b3cdbe"]]),$t="/creativiewpicturesvue/assets/me.2a2aee6d.png",wt="/creativiewpicturesvue/assets/facebook.4a12a697.svg",Ct="/creativiewpicturesvue/assets/linkedin.6b29608e.svg";const yt=g({components:{CvContactForm:bt}}),O=e=>(y("data-v-17cb8430"),e=e(),I(),e),It={class:"titleMain"},Pt={class:"mainPage"},kt={class:"allInfo"},Et={class:"info"},Vt=O(()=>r("img",{class:"mePicture",src:$t,alt:"photo of me"},null,-1)),St={class:"meInfo"},Mt=O(()=>r("p",{class:"name"},"Dimitri Steinbusch",-1)),xt={class:"title"},Ft=S('<div class="additionalInfo" data-v-17cb8430><a href="mailto:dimitri.steinbusch@creatiview.be" data-v-17cb8430>dimitri.steinbusch@creatiview.be</a><a href="tel:+32476691674" data-v-17cb8430>+32 (0)476 69 16 74</a><div class="icons" data-v-17cb8430><a href="https://www.facebook.com/Creatiview-115424323438636" target="_blank" rel="noopener" data-v-17cb8430><img class="icon" src="'+wt+'" alt="facebook icon" data-v-17cb8430></a><a href="https://www.linkedin.com/in/dimitri-steinbusch-239878129" target="_blank" rel="noopener" data-v-17cb8430><img class="icon" src="'+Ct+'" alt="linkedIn icon" data-v-17cb8430></a></div></div>',1),At={class:"contactForm"};function Lt(e,t,s,a,n,i){const o=m("CvContactForm");return c(),d(E,null,[r("div",It,[r("h1",null,u(e.$t("nav.contact")),1)]),r("div",Pt,[r("div",kt,[r("div",Et,[Vt,r("div",St,[Mt,r("p",xt,u(e.$t("contact.title")),1)])]),Ft]),r("div",At,[p(o)])])],64)}var Nt=f(yt,[["render",Lt],["__scopeId","data-v-17cb8430"]]);const Ht=g({setup(){const{params:{albumId:e}}=x(),t=parseInt(e),s=_(),a=_(0);return z(async()=>{s.value=await j.getAlbum(t)}),{albumId:e,albumPictures:s,getImgSrc:l=>`/api/pictures/${l}`,setPickingImage:l=>{a.value=l},pickingPictureId:a,resetPicking:()=>{a.value=0}}}}),Rt={key:0,class:"album"},zt={class:"pictures"},Tt=["onClick"],qt=["src"],Bt={class:"settings"},Ut=["src"];function jt(e,t,s,a,n,i){return c(),d(E,null,[e.albumPictures?(c(),d("div",Rt,[r("h1",null,u(e.albumPictures.getAlbumName()),1),r("div",zt,[(c(!0),d(E,null,T(e.albumPictures.getPictures(),o=>(c(),d("div",{tabindex:"0",class:"picture",key:o.getPictureId(),onClick:l=>e.setPickingImage(o.getPictureId())},[r("img",{class:"imgPicture",src:e.getImgSrc(o.getPictureId()),alt:"picture"},null,8,qt),r("div",Bt,[r("p",null,u(o.getAperture()),1),r("p",null,u(o.getSpeed()),1),r("p",null,u(o.getCamera()),1),r("p",null,u(o.getIso()),1),r("p",null,u(o.getFocalLength()),1)])],8,Tt))),128))])])):b("",!0),e.pickingPictureId!==0?(c(),d("div",{key:1,class:"fullScreenViewer",onClick:t[0]||(t[0]=(...o)=>e.resetPicking&&e.resetPicking(...o))},[r("img",{class:"imgFullScreen",src:e.getImgSrc(e.pickingPictureId),alt:"picture fullscreen"},null,8,Ut)])):b("",!0)],64)}var Ot=f(Ht,[["render",jt],["__scopeId","data-v-fa789e3e"]]);const Wt=g({}),Gt=S("<h1>Conditions G\xE9n\xE9rales</h1><h2>1. Propri\xE9taire du site web</h2><p>Ce site web appartient \xE0 Creatiview. Toutes les photos s&#39;y trouvant sont prot\xE9g\xE9es par la loi sur le copyright.</p><h2>2. Votre utilisation des photos</h2><p>Si vous d\xE9cidez d&#39;utiliser une photo pr\xE9sente sur le site web, vous ne pouvez ni la reproduire, ni la modifier, ni l&#39;afficher, ni la transmettre, ni la distribuer de quelconque mani\xE8re que ce soit sans l&#39;accord \xE9crit de Creatiview.</p><p>Vous avez n\xE9amoins l&#39;autorisation de partager l&#39;ensemble des photos sur les r\xE9seaux sociaux ou sites web \xE0 condition de faire une r\xE9f\xE9rence explicite au site &quot;www.creatiview.be&quot;.</p><p>Vous avez n\xE9anmoins l&#39;autorisation de faire imprimer et afficher la photo si elle se trouve dans un espace priv\xE9 et personnel (maison, appartement, ...).</p><p>Vous ne pouvez pas afficher, sans l&#39;accord \xE9crit de Creatiview, une photo dans un bureau, un hall d&#39;entr\xE9e ou tout autre espace public.</p><h2>3. Politique d&#39;indemnisation</h2><p>Si toutefois, vous utilisez les photos pr\xE9sentes sur le site sans accord \xE9crit, vous serez poursuivi pour violation des droits de propri\xE9t\xE9 intellectuelle.</p>",10);function Zt(e,t,s,a,n,i){return Gt}var Jt=f(Wt,[["render",Zt]]),Kt=[{path:"/",name:"home",component:et,meta:{title:"Creatiview Pictures - Home"}},{path:"/pictures",name:"pictures",component:ut,meta:{title:"Creatiview Pictures - Pictures"}},{path:"/contact",name:"contact",component:Nt,meta:{title:"Creatiview Pictures - Contact"}},{path:"/album/:albumId",name:"album",component:Ot,meta:{title:"Creatiview Pictures - Album"}},{path:"/termsOfUse",name:"termsOfUse",component:Jt,meta:{title:"Creatiview Pictures - Conditions g\xE9n\xE9rales"}}];const W=ee({history:te(),routes:Kt,scrollBehavior(){return{top:0}}});W.beforeEach((e,t,s)=>{let a="Creatiview Pictures";e.meta&&e.meta.title&&(a=e.meta.title),document.title=a,s()});var Yt={fr:{nav:{home:"Accueil",services:"Services",projects:"Projets",contact:"Contact",pictures:"Albums"},contact:{name:"Nom",firstName:"Pr\xE9nom",email:"Email",message:"Message",send:"Envoyer",confirmSend:"Merci pour votre message. Je vous recontacte au plus vite !",emptyField:"Le champ {name} est obligatoire",errorEmail:"L'email n'est pas valide.",title:"Photographe amateur & Concepteur Web ind\xE9pendant"}},en:{nav:{home:"Home",services:"Services",projects:"Projects",contact:"Contact"},home:{build:"Let's build",together:"Together",website:"A website that looks like",lookslike:"You",myProjects:"Projects",services:"Services"},services:{subtitle1:"Every project is unique. That's why I invite you to ",subtitle2:"contact me",subtitle3:" to talk about it."}}},Qt=se({messages:Yt,locale:"fr"});ae(Ge).use(W).use(Qt).mount("#app");
