(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a){a.projectList=[{title:"Polluted Cities",githubCode:"https://github.com/oznerek/Polluted-cities",githubLink:"https://oznerek.github.io/Polluted-cities/",description:" Application shows the most polluted cities in the chosen country. The application uses external APIs from which data about the air condition is retrieved.",tools:["Java Script","HTML5","CSS3","Bootstrap 4","RWD","REST API","React","React-Router","Redux Form","jQuery"],addClass:"polluted"},{title:"Food House",githubCode:"https://github.com/oznerek/foodhouse",githubLink:"https://oznerek.github.io/foodhouse",description:"Sample restaurant page. Uses external APIs (generating a list of dishes). We can place an order on the site, which is processed out on the employees side. The site has a simple mySQL database for storing data.",tools:["Java Script","HTML5","CSS3","Bootstrap 4","Sass","RWD","REST API","React","React-Redux","jQuery","mySQL","Express"],addClass:"foodhouse"},{title:"Portfolio",githubCode:"https://github.com/oznerek/portfolio",githubLink:"https://oznerek.github.io/portfolio/",description:"Website created to show all my projects and skills in one place.",tools:["Java Script","HTML5","CSS3","Sass","RWD","React","jQuery"],addClass:"portfolio"},{title:"Luxus",githubCode:"https://github.com/oznerek/luxus",githubLink:"https://oznerek.github.io/luxus",description:"This is the fake website of Lexus, created for learning.",tools:["Java Script","HTML5","CSS3","Sass","RWD","React","React-Router","jQuery"],addClass:"luxus"}]},19:function(e,a,t){e.exports=t(28)},28:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(17),r=t.n(s),c=t(1),i=t.n(c),o=t(2),m=t.n(o),d=function(){return m()("#home").on("scroll",function(e){this.scrollTop>147&&m()([document.documentElement,document.body]).animate({scrollTop:m()("#contact").offset().top},2e3)}),n.a.createElement("section",{id:"home",className:"home scrollspy"},n.a.createElement("div",{className:"home__container"},n.a.createElement(i.a,{bottom:!0,duration:1500,delay:500},n.a.createElement("div",{className:"home__picture"})),n.a.createElement("div",{className:"page__title"},n.a.createElement(i.a,{delay:300},n.a.createElement("h2",{className:"page__title-text"},"Hello"))),n.a.createElement(i.a,{delay:1e3},n.a.createElement("div",{className:"home__description"},n.a.createElement("div",{className:"name"},"I'm ",n.a.createElement("br",{className:"mobile__break"})," Micha\u0142"),n.a.createElement("div",{className:"position"}," Front End Developer"),n.a.createElement("div",{className:"home__buttons"},n.a.createElement("a",{href:"#skills",className:"button"},"Skills"),n.a.createElement("a",{href:"#project",className:"button"},"Projects")))),n.a.createElement("img",{alt:"",src:"img/home.svg",className:"page__title-img"})))},u=t(4),p=t(5),g=t(7),h=t(6),E=t(8),v=function(e){function a(){var e,t;Object(u.a)(this,a);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return(t=Object(g.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).state={showMobileMenu:!1,menuList:[{name:"Home",href:"#home",active:!0},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Project",href:"#project"},{name:"Contact",href:"#contact"}]},t.showMobileMenu=function(e){t.setState({showMobileMenu:!t.state.showMobileMenu})},t}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=["toggle__nav"],t=["navigation navigation__mobile"],l=m()(window).width();function s(){l>768&&m()(".navigation__mobile, .toggle__nav").removeClass("active")}return this.state.showMobileMenu&&(a.push("active"),t.push("active")),s(),m()(window).resize(function(){l=m()(window).width(),s()}),m()(window).bind("scroll",function(){var e=m()(window).scrollTop();m()(".scrollspy").each(function(){var a=m()(this).offset().top,t=a+m()(this).height(),l=document.documentElement.clientHeight;if(e>=a-l/2&&e<=t){var n=m()(this).attr("id");m()('a[href="#'+n+'"]').parent().addClass("active").siblings().removeClass("active")}})}),n.a.createElement("section",{className:"navi"},n.a.createElement("nav",{className:"nav"},n.a.createElement("div",{className:"nav__container"},n.a.createElement("div",{className:"left"},n.a.createElement("img",{alt:"",src:"img/logo.png",className:"nav__logo"}),n.a.createElement("p",{className:"nav__name"},"Michal Oznerek")),n.a.createElement("div",{className:"right"},n.a.createElement("ul",{className:"navigation"},this.state.menuList.map(function(e){return n.a.createElement("li",{key:e.name,className:e.active?"navigation-item active":"navigation-item"},n.a.createElement("a",{href:e.href},n.a.createElement("span",{className:"navigation-text "},e.name)))})),n.a.createElement("div",{className:"nav__link"},n.a.createElement("a",{href:"http://github.com/oznerek",target:"_blank"},n.a.createElement("img",{alt:"",src:"img/github.svg",className:"github"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/micha%C5%82-oznerek/",target:"_blank"},n.a.createElement("img",{alt:"",src:"img/linkedin.svg",className:"linkedin"})),n.a.createElement("div",{className:a.join(" "),onClick:this.showMobileMenu},n.a.createElement("div",{className:"toggle__nav--box"},n.a.createElement("span",{className:"toggle__line"})))))),n.a.createElement("ul",{className:t.join(" ")},this.state.menuList.map(function(a){return n.a.createElement("li",{key:a.name,className:a.active?"navigation-item active":"navigation-item"},n.a.createElement("a",{href:a.href,onClick:e.showMobileMenu},n.a.createElement("span",{className:"navigation-text "},a.name)))}))))}}]),a}(l.Component),_=function(){return n.a.createElement("section",{id:"about",className:"about scrollspy"},n.a.createElement("div",{className:"about__container"},n.a.createElement("div",{className:"page__title"},n.a.createElement(i.a,{delay:300},n.a.createElement("h2",{className:"page__title-text"},"About me"))),n.a.createElement("div",{className:"about__description"},n.a.createElement("img",{alt:"",src:"img/aboutme.jpg",className:"page__title-img"}),n.a.createElement(i.a,{delay:300},n.a.createElement("p",{className:"page__descriptions first"},n.a.createElement("span",{className:"heading"},"Hi, I'm Micha\u0142 Oznerek and I'm Front End Developer"),"My programming story started many years ago, while still in technical school. After a long break after school, I decided to go back to programming and start all over again. I focused on learning Front End because I like to see the results of my work right away.")),n.a.createElement(i.a,{delay:300},n.a.createElement("p",{className:"page__descriptions"},"In my work so far, I've been involved in building websites based on popular CMS (Wordpress) as well as in smaller projects that used popular libraries. All sites were based on projects delivered in PSD, XD formats. I often made various types of advertising banners, landing page, or also newsletters.")))))},b=t(10),f=t.n(b),N=function(){return n.a.createElement("section",{id:"skills",className:"skills scrollspy"},n.a.createElement("div",{className:"skill__container"},n.a.createElement("div",{className:"page__title"},n.a.createElement(i.a,{delay:300},n.a.createElement("h2",{className:"page__title-text"},"Skills")),n.a.createElement("img",{alt:"",src:"img/skills.png",className:"page__title-img"})),n.a.createElement("div",{className:"skills__container description"},n.a.createElement(i.a,{delay:1e3},n.a.createElement("div",{className:"page__descriptions"},"In my everyday work I use mainly basic tools, i.e. HTML5 / CSS3 / JavaScript. Depending on the project, I also use popular libraries or CMS. I am not afraid of new challenges and I am constantly expanding my knowledge and learning new tools. Currently I am learning Vue.js")),n.a.createElement(f.a,{bottom:!0,duration:1500},n.a.createElement("div",{className:"skills__container"},n.a.createElement("div",{className:"skills__block"},n.a.createElement("div",{className:"skills__block--header"}," Languages "),n.a.createElement("div",{className:"skills__block--list"},n.a.createElement("div",null,"JavaScript"),n.a.createElement("div",null,"PHP"),n.a.createElement("div",null,"HTML5 / CSS3"))),n.a.createElement("div",{className:"skills__block"},n.a.createElement("div",{className:"skills__block--header"}," Framework / Libraries "),n.a.createElement("div",{className:"skills__block--list"},n.a.createElement("div",null,"React"),n.a.createElement("div",null,"jQuery"),n.a.createElement("div",null,"Sass"),n.a.createElement("div",null,"Bootstrap"),n.a.createElement("div",null,"Vue"))),n.a.createElement("div",{className:"skills__block"},n.a.createElement("div",{className:"skills__block--header"}," Other "),n.a.createElement("div",{className:"skills__block--list"},n.a.createElement("div",null,"MySQL"),n.a.createElement("div",null,"Wordpress"),n.a.createElement("div",null,"Git"),n.a.createElement("div",null,"RWD"),n.a.createElement("div",null,"Photoshop"))))))))},k=function(e){var a=e.data,t=a.addClass,l=a.title,s=a.description,r=a.githubLink,c=a.githubCode,i=a.tools;return n.a.createElement(f.a,{bottom:!0,duration:1500},n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"project__container-photo "},n.a.createElement("div",{className:"project__photo "+t},n.a.createElement("div",{className:"project__photo-icon"},n.a.createElement("div",null,n.a.createElement("a",{target:"_blank",href:r},n.a.createElement("i",{className:"fa fa-globe"}))),n.a.createElement("div",null,n.a.createElement("a",{target:"_blank",href:c},n.a.createElement("i",{className:"fas fa-code"})))))),n.a.createElement("div",{className:"project__about"},n.a.createElement("div",{className:"project__about-name"},l),n.a.createElement("div",{className:"project__about-description"},s,n.a.createElement("div",null,n.a.createElement("span",{className:"project__about-tools"},"Tools:"),i.map(function(e){return n.a.createElement("span",{key:e,className:"project__about-tech"},e)}))))))},y=t(18),j=function(){return n.a.createElement("section",{id:"project",className:"projects scrollspy"},n.a.createElement("div",{className:"projects__container"},n.a.createElement("div",{className:"page__title"},n.a.createElement(i.a,{delay:300},n.a.createElement("h2",{className:"page__title-text"},"Projects")),n.a.createElement("img",{alt:"",src:"img/rwd.jpg",className:"page__title-img"})),n.a.createElement("div",{className:"projects__descripion"},n.a.createElement(i.a,{delay:300},n.a.createElement("div",{className:"page__descriptions"},"At work I pay attention to the attention to detail and quality of written code. All projects are fully responsive (RWD) and based on modern technologies selected specifically for the product.")),n.a.createElement("div",{className:"projects__main"},y.projectList.map(function(e){return n.a.createElement(k,{key:e.addClass,data:e})})))))},w=function(){return n.a.createElement("section",{id:"project-companies",className:"projects"},n.a.createElement("div",{className:"projects__container"},n.a.createElement("div",{className:"page__title"},n.a.createElement(i.a,{delay:300},n.a.createElement("h2",{className:"page__title-text"},"Customers"))),n.a.createElement("div",{className:"companies__row"},n.a.createElement(i.a,{delay:300},n.a.createElement("img",{alt:"",src:"img/generali.png",className:"companies__img"})),n.a.createElement(i.a,{delay:300},n.a.createElement("img",{alt:"",src:"img/mcdonalds.svg",className:"companies__img"})),n.a.createElement(i.a,{delay:300},n.a.createElement("img",{alt:"",src:"img/SOS.svg",className:"companies__img"})),n.a.createElement(i.a,{delay:300},n.a.createElement("img",{alt:"",src:"img/promot.svg",className:"companies__img"})),n.a.createElement(i.a,{delay:300},n.a.createElement("img",{alt:"",src:"img/mentz.png",className:"companies__img"})),n.a.createElement(i.a,{delay:300},n.a.createElement("img",{alt:"",src:"img/axa.png",className:"companies__img order1"})),n.a.createElement(i.a,{delay:300},n.a.createElement("img",{alt:"",src:"img/UBB.svg",className:"companies__img order2"})),n.a.createElement(i.a,{delay:300},n.a.createElement("img",{alt:"",src:"img/truestory.png",className:"companies__img"})))))},S=t(3),C=t.n(S),x=t(14),M=t(9),O=t(11),I=function(e){var a=e.name,t=e.label,l=e.error,s=Object(O.a)(e,["name","label","error"]);return n.a.createElement("span",{className:"message__field"},n.a.createElement("label",{htmlFor:a,className:"message__label"},t),n.a.createElement("input",Object.assign({id:a,name:a,className:"message__input"},s)),l&&n.a.createElement("div",{className:"validate"}," ",l," "))},L=function(e){var a=e.name,t=e.label,l=e.error,s=Object(O.a)(e,["name","label","error"]);return n.a.createElement("span",{className:"message__field"},n.a.createElement("label",{htmlFor:a,className:"message__label"},t),n.a.createElement("textarea",Object.assign({id:a,name:a,className:"message__input  message__input-message"},s)),l&&n.a.createElement("div",{className:"validate"}," ",l," "))},z=function(e){function a(){var e,t;Object(u.a)(this,a);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return(t=Object(g.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).state={contact:[{title:"Phone number",fill:"xxx-xxx-xxx"},{title:"Email",fill:"oznerek@gmail.com",link:"mailto:oznerek@gmail.com"},{title:"Address",fill:"Silesia"},{title:"GitHub",fill:"github.com/oznerek",link:"http://github.com/oznerek"},{title:"Linkedin",fill:"Micha\u0142 Oznerek",link:"https://www.linkedin.com/in/micha%C5%82-oznerek/"}],data:{name:"",email:"",subject:"",message:""},errors:{},sendMessage:""},t.schema={name:C.a.string().required().label("Name"),email:C.a.string().required().email().label("Email"),subject:C.a.string().required().label("Subject"),message:C.a.string().required().label("Message")},t.doSubmit=function(e){t.setState({sendMessage:"Success, Your message was send"})},t}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.state,a=e.contact,t=e.sendMessage;return n.a.createElement("section",{className:"contact scrollspy",id:"contact"},n.a.createElement("div",{className:"contact__container"},n.a.createElement("div",{className:"page__title"},n.a.createElement("h2",{className:"page__title-text"},"Contact"))," ",n.a.createElement("div",{className:"contact__header"},"Feel free to contact me"),n.a.createElement("div",{className:"contact__content"},n.a.createElement("div",{className:"contacts"},a.map(function(e){return n.a.createElement("div",{key:e.title,className:"contacts__row"},n.a.createElement("p",{className:"contacts__title"},e.title),e.link?n.a.createElement("a",{href:e.link,target:"_blank",className:"contacts__fill link"},e.fill):n.a.createElement("p",{className:"contacts__fill"},e.fill))})),n.a.createElement("form",{className:"message",onSubmit:this.handleSubmit},n.a.createElement("span",{className:"message__row"},this.renderInput("name","Name"),this.renderInput("email","Email","email")),this.renderInput("subject","Subject"),this.renderTextarea("message","Message"),this.renderButton("Send Message"),t&&n.a.createElement("div",{className:"validate__success"},t)))))}}]),a}(function(e){function a(){var e,t;Object(u.a)(this,a);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return(t=Object(g.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).state={data:{},errors:{}},t.validate=function(){var e=C.a.validate(t.state.data,t.schema,{abortEarly:!1}).error;if(!e)return null;var a={},l=!0,n=!1,s=void 0;try{for(var r,c=e.details[Symbol.iterator]();!(l=(r=c.next()).done);l=!0){var i=r.value;a[i.path[0]]=i.message}}catch(o){n=!0,s=o}finally{try{l||null==c.return||c.return()}finally{if(n)throw s}}return a},t.handleSubmit=function(e){e.preventDefault(),console.log("text");var a=t.validate();t.setState({errors:a||{}}),a||t.doSubmit(t.state.data)},t.validateProperty=function(e){var a=e.name,l=e.value,n=Object(M.a)({},a,l),s=Object(M.a)({},a,t.schema[a]),r=C.a.validate(n,s).error;return r?r.details[0].message:null},t.handleChange=function(e){var a=e.currentTarget,l=Object(x.a)({},t.state.errors),n=t.validateProperty(a);console.log(n),n?l[a.name]=n:delete l[a.name];var s=Object(x.a)({},t.state.data);s[a.name]=a.value,console.log(s[a.name]),t.setState({data:s,errors:l})},t.onFocus=function(e){m()(e.target).parent().addClass("active")},t.onBlur=function(e){e.target.value||m()(e.target).parent().removeClass("active")},t}return Object(E.a)(a,e),Object(p.a)(a,[{key:"renderButton",value:function(e){return n.a.createElement("div",{disabled:this.validate(),onClick:this.handleSubmit,className:"btn message__btn"},e)}},{key:"renderInput",value:function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",l=this.state,s=l.data,r=l.errors;return n.a.createElement(I,{type:t,name:e,label:a,value:s[e],onChange:this.handleChange,onFocus:this.onFocus,onBlur:this.onBlur,error:r[e]})}},{key:"renderTextarea",value:function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",l=this.state,s=l.data,r=l.errors;return n.a.createElement(L,{type:t,name:e,label:a,value:s[e],onChange:this.handleChange,onFocus:this.onFocus,onBlur:this.onBlur,error:r[e]})}}]),a}(l.Component)),R=function(){return n.a.createElement("section",{className:"footer scrollspy",id:"footer"},n.a.createElement("div",{className:"footer__author"},n.a.createElement("p",null,"Copyright by Micha\u0142 Oznerek ",n.a.createElement("sup",null,"\xa9")," - 2019-2020")),n.a.createElement("div",{className:"footer__powered"},"Powered by",n.a.createElement("a",{href:"http://unsplash.com",className:"footer__link"}," ","Unsplash.com")))};var P=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(v,null),n.a.createElement(d,null),n.a.createElement(_,null),n.a.createElement(N,null),n.a.createElement(j,null),n.a.createElement(w,null),n.a.createElement(z,null),n.a.createElement(R,null))};r.a.render(n.a.createElement(P,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1f30125a.chunk.js.map