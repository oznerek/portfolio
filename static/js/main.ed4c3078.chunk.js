(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(24)},24:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),c=t(13),n=t.n(c),r=t(2),i=t(3),m=t(5),o=t(4),_=t(6),d=t(1),p=t.n(d),E=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(_.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){setTimeout(this.showRestPage,7e3)}},{key:"showRestPage",value:function(){p()(".about, .projects, .skills").css("display","block"),p()(".footer, .contact").css("display","flex")}},{key:"render",value:function(){return p()("#header").on("scroll",function(e){this.scrollTop>147&&p()([document.documentElement,document.body]).animate({scrollTop:p()("#contact").offset().top},2e3)}),l.a.createElement("section",{id:"header",className:"header scrollspy"},l.a.createElement("div",{className:"header__loader"},l.a.createElement("div",{className:"text__center"},"Loading . . .")),l.a.createElement("div",{className:"slide__one"}),l.a.createElement("div",{className:"slide__two"},l.a.createElement("div",{className:"text__center text__zoom"},"Welcome on my web")),l.a.createElement("div",{className:"slide__three "},l.a.createElement("div",{className:"background__spiner"},l.a.createElement("div",{className:"spiner"},l.a.createElement("div",{className:"spin__icon-1"}),l.a.createElement("div",{className:"spin__icon-2"}),l.a.createElement("div",{className:"spin__icon-3"}),l.a.createElement("div",{className:"spin__icon-4"}),l.a.createElement("div",{className:"spin__icon-5"}))),l.a.createElement("div",{className:"background__decoration"},l.a.createElement("div",{className:"decoration"},l.a.createElement("div",{className:"decoration1"},l.a.createElement("div",{className:"decoration__text-1"},"Portfolio")),l.a.createElement("div",{className:"decoration2"},l.a.createElement("div",{className:"decoration__text-2"},l.a.createElement("div",null,"Michal"),l.a.createElement("div",null,"Oznerek"))),l.a.createElement("div",{className:"decoration3"},l.a.createElement("div",{className:"decoration__text-3"},"Front End Developer"))))))}}]),a}(l.a.Component),u=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(_.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return p()(window).bind("scroll",function(){var e=p()(window).scrollTop();p()(".scrollspy").each(function(){var a=p()(this).offset().top,t=a+p()(this).height(),s=document.documentElement.clientHeight;if(e>=a-30&&e<=t-30){var l=p()(this).attr("id");"contact"===l||"skills"===l?p()(".nav").addClass("dark__nav"):p()(".nav").removeClass("dark__nav")}if(e>=a-s/2&&e<=t-s/2){var c=p()(this).attr("id");"contact"===c||"skills"===c?p()(".side__navigation").addClass("dark__nav"):p()(".side__navigation").removeClass("dark__nav"),"about"===c?(p()(".information__card").css({animation:"move__right 2s linear 4s forwards","-webkit-animation":"move__right 2s linear 4s forwards","-moz-animation":"move__right 2s linear 4s forwards"}),p()(".flash").css({animation:"photo_flash 3s 2s forwards","-webkit-animation":"photo_flash 3s 2s forwards","-moz-animation":"photo_flash 3s 2s forwards"}),p()(".about__background").css({animation:"blur 1s 2s forwards","-webkit-animation":"blur 1s 2s forwards","-moz-animation":"blur 1s 2s forwards"}),p()(".card").css({animation:"make_photo 3s 2.5s forwards","-webkit-animation":"make_photo 3s 2.5s forwards","-moz-animation":"make_photo 3s 2.5s forwards"}),p()(".buttons").css({animation:"move__right 2s linear 4s forwards","-webkit-animation":"move__right 2s linear 4s forwards","-moz-animation":"move__right 2s linear 4s forwards"})):"skills"===c&&(p()(".skill__image, .skill__information-frame").css({animation:"move__down 2s linear forwards","-webkit-animation":"move__down 2s linear forwards","-moz-animation":"move__down 2s linear forwards"}),p()(".skill__bar").css({animation:"barGrowRight 2s linear forwards","-webkit-animation":"barGrowRight 2s linear forwards","-moz-animation":"barGrowRight 2s linear forwards"}),p()(".diamond").css({animation:"diamond 1s linear 2s","-webkit-animation":"diamond 1s linear 2s","-moz-animation":"diamond 1s linear 2s"}))}if(e>=a-(s-30)&&e<=t-(s-30)){var n=p()(this).attr("id");"contact"===n||"skills"===n?p()(".mouse").addClass("dark__nav"):p()(".mouse").removeClass("dark__nav"),"footer"===n?p()(".mouse").css("visibility","hidden"):p()(".mouse").css("visibility","visible")}if(e>=a-(s/2-100)&&e<=t){var r=p()(this).attr("id");p()('a[href="#'+r+'"]').parent().addClass("active").siblings().removeClass("active")}})}),l.a.createElement("section",{className:"navigation"},l.a.createElement("nav",{className:"nav"},l.a.createElement("p",{className:"nav__name"},"Michal Oznerek"),l.a.createElement("div",{className:"nav__link"},l.a.createElement("a",{href:"http://github.com/oznerek",target:"blank"},l.a.createElement("i",{className:"fab fa-github github"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/micha%C5%82-oznerek/",target:"blank"},l.a.createElement("i",{className:"fab fa-linkedin linkedin"})))),l.a.createElement("ul",{className:"side__navigation"},l.a.createElement("li",{className:"side__navigation-item active"},l.a.createElement("a",{href:"#header"},l.a.createElement("span",{className:"side__navigation-text "},"Header"))),l.a.createElement("li",{className:"side__navigation-item"},l.a.createElement("a",{href:"#about"},l.a.createElement("span",{className:"side__navigation-text"},"About"))," "),l.a.createElement("li",{className:"side__navigation-item"},l.a.createElement("a",{href:"#skills"},l.a.createElement("span",{className:"side__navigation-text"},"Skills"))),l.a.createElement("li",{className:"side__navigation-item"},l.a.createElement("a",{href:"#project"},l.a.createElement("span",{className:"side__navigation-text"},"Project"))),l.a.createElement("li",{className:"side__navigation-item"},l.a.createElement("a",{href:"#contact"},l.a.createElement("span",{className:"side__navigation-text"},"Contact")))),l.a.createElement("div",{className:"mouse"},l.a.createElement("div",{className:"scroll"},l.a.createElement("div",{className:"scroll__icon"})),l.a.createElement("div",{className:"scroll__text"},"Scroll down")))}}]),a}(l.a.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(_.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"about",className:"about scrollspy"},l.a.createElement("div",{className:"about__background"}),l.a.createElement("div",{className:"flash"},l.a.createElement("div",{className:"page__title"},l.a.createElement("p",{className:"page__title-number"},"01"),l.a.createElement("h2",{className:"page__title-text"},"About me")),l.a.createElement("div",{className:"background__information"},l.a.createElement("div",{className:"information__card"},l.a.createElement("h2",{className:"title"},"Who I am"),l.a.createElement("p",null,"Hello, I'm Micha\u0142 and I'm from Silesia."),l.a.createElement("p",null,"I started my adventure with programming many years ago when I went to computer science in a technical school. After a long break, I decided to start everything from the beginning. For 1 year I have been learning independently from online courses, many specialist websites and forums. I spend every day learning at least 4 hours to gain experience and knowledge. I am currently focusing on Front End. In the future I would like to broaden my basic knowledge about Back End. My professional goal is to work as a full stack programmer."))),l.a.createElement("div",{className:"background__card"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__motto"},l.a.createElement("p",null,"If You Can Dream It"),l.a.createElement("p",null,"You Can Do It"))),l.a.createElement("div",{className:"buttons"},l.a.createElement("a",{href:"#skills"},l.a.createElement("button",{className:"btn btn__about"},"Skills")),l.a.createElement("a",{href:"#project"},l.a.createElement("button",{className:"btn btn__about"},"Project"))))))}}]),a}(l.a.Component),N=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(_.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"skills",className:"skills scrollspy"},l.a.createElement("div",{className:"page__title"},l.a.createElement("p",{className:"page__title-number"},"02"),l.a.createElement("h2",{className:"page__title-text"},"Skills")),l.a.createElement("div",{className:"grid"},l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"skill__image"},l.a.createElement("img",{src:"img/html5.png",alt:"html"})),l.a.createElement("div",{className:"skill__information"},l.a.createElement("div",{className:"skill__information-frame"},l.a.createElement("h3",{className:"skill__information-name"},"HTML5"),l.a.createElement("p",{className:"skill__information-experience"}," 1 year")),l.a.createElement("div",{className:"skill__bar html"},l.a.createElement("div",{className:"diamond"})))),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"skill__image"},l.a.createElement("img",{src:"img/css3.svg",alt:"css"})),l.a.createElement("div",{className:"skill__information"},l.a.createElement("div",{className:"skill__information-frame"},l.a.createElement("h3",{className:"skill__information-name"},"CSS3"),l.a.createElement("p",{className:"skill__information-experience"}," 1 year")),l.a.createElement("div",{className:"skill__bar css"},l.a.createElement("div",{className:"diamond"})))),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"skill__image"},l.a.createElement("img",{src:"img/js.png",alt:"java script"})),l.a.createElement("div",{className:"skill__information"},l.a.createElement("div",{className:"skill__information-frame"},l.a.createElement("h3",{className:"skill__information-name"},"Java Script"),l.a.createElement("p",{className:"skill__information-experience"}," 1 year")),l.a.createElement("div",{className:"skill__bar js"},l.a.createElement("div",{className:"diamond"})))),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"skill__image"},l.a.createElement("img",{src:"img/bootstrap.png",alt:"bootstrap"})),l.a.createElement("div",{className:"skill__information"},l.a.createElement("div",{className:"skill__information-frame"},l.a.createElement("h3",{className:"skill__information-name"},"Bootstrap 4"),l.a.createElement("p",{className:"skill__information-experience"},"9 month")),l.a.createElement("div",{className:"skill__bar bootstrap"},l.a.createElement("div",{className:"diamond"})))),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"skill__image"},l.a.createElement("img",{src:"img/react.png",alt:"react"})),l.a.createElement("div",{className:"skill__information"},l.a.createElement("div",{className:"skill__information-frame"},l.a.createElement("h3",{className:"skill__information-name"},"React"),l.a.createElement("p",{className:"skill__information-experience"}," 9 month")),l.a.createElement("div",{className:"skill__bar react"},l.a.createElement("div",{className:"diamond"})))),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"skill__image"},l.a.createElement("img",{src:"img/sass.svg",alt:"sass"})),l.a.createElement("div",{className:"skill__information"},l.a.createElement("div",{className:"skill__information-frame"},l.a.createElement("h3",{className:"skill__information-name"},"Sass"),l.a.createElement("p",{className:"skill__information-experience"}," 5 month")),l.a.createElement("div",{className:"skill__bar sass"},l.a.createElement("div",{className:"diamond"})))),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"skill__image"},l.a.createElement("img",{src:"img/mysql.svg",alt:"mysql"})),l.a.createElement("div",{className:"skill__information"},l.a.createElement("div",{className:"skill__information-frame"},l.a.createElement("h3",{className:"skill__information-name"},"MySql"),l.a.createElement("p",{className:"skill__information-experience"}," 4 month")),l.a.createElement("div",{className:"skill__bar mysql"},l.a.createElement("div",{className:"diamond"})))),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"skill__image"},l.a.createElement("img",{src:"img/node.png",alt:"node js"})),l.a.createElement("div",{className:"skill__information"},l.a.createElement("div",{className:"skill__information-frame"},l.a.createElement("h3",{className:"skill__information-name"},"Node JS"),l.a.createElement("p",{className:"skill__information-experience"}," 3 month")),l.a.createElement("div",{className:"skill__bar node"},l.a.createElement("div",{className:"diamond"})))),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"skill__image"},l.a.createElement("img",{src:"img/jquery.png",alt:"jquery"})),l.a.createElement("div",{className:"skill__information"},l.a.createElement("div",{className:"skill__information-frame"},l.a.createElement("h3",{className:"skill__information-name"},"jQuery"),l.a.createElement("p",{className:"skill__information-experience"}," 3 month")),l.a.createElement("div",{className:"skill__bar jquery"},l.a.createElement("div",{className:"diamond"})))),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"skill__image"},l.a.createElement("img",{src:"img/git.png",alt:"git"})),l.a.createElement("div",{className:"skill__information"},l.a.createElement("div",{className:"skill__information-frame"},l.a.createElement("h3",{className:"skill__information-name"},"Git"),l.a.createElement("p",{className:"skill__information-experience"}," 6 month")),l.a.createElement("div",{className:"skill__bar git"},l.a.createElement("div",{className:"diamond"}))))))}}]),a}(l.a.Component),h=t(7),f=t.n(h),b=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(_.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"project",className:"projects scrollspy"},l.a.createElement("div",{className:"page__title"},l.a.createElement("p",{className:"page__title-number"},"03"),l.a.createElement("h2",{className:"page__title-text"},"Projects")),l.a.createElement("div",{className:"timeLine"},l.a.createElement(f.a,{left:!0},l.a.createElement("div",{className:"project project__left"},l.a.createElement("div",{className:"year"},l.a.createElement("div",null,"2018")),l.a.createElement("div",{className:"project__about"},l.a.createElement("div",{className:"project__about-name"},"Form Creator"),l.a.createElement("div",{className:"project__about-description"},"A very simple application for quickly creating form fields.",l.a.createElement("div",null,l.a.createElement("span",{className:"project__about-tech"},"Java Script"),l.a.createElement("span",{className:"project__about-tech"},"HTML5"),l.a.createElement("span",{className:"project__about-tech"},"CSS3"),l.a.createElement("span",{className:"project__about-tech"},"Bootstrap 4"),l.a.createElement("span",{className:"project__about-tech"},"ReactJS"),l.a.createElement("span",{className:"project__about-tech"},"React-Router"),l.a.createElement("span",{className:"project__about-tech"},"Redux-Form"),l.a.createElement("span",{className:"project__about-tech"},"jQuery")))),l.a.createElement("div",{className:"project__photo formcreator"},l.a.createElement("div",{className:"project__photo-name"},"Form Creator"),l.a.createElement("div",{className:"project__photo-icon"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://oznerek.github.io/form-creator"}," ",l.a.createElement("i",{className:"far fa-eye"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/oznerek/form-creator"},l.a.createElement("i",{className:"fas fa-code"})," ")))))),l.a.createElement(f.a,{right:!0},l.a.createElement("div",{className:"project project__right"},l.a.createElement("div",{className:"year"},l.a.createElement("div",null,"2019")),l.a.createElement("div",{className:"project__about"},l.a.createElement("div",{className:"project__about-name"},"Polluted City"),l.a.createElement("div",{className:"project__about-description"},"Application shows the most polluted cities in the chosen country. The application uses external APIs from which data about the air condition is retrieved."," ",l.a.createElement("div",null,l.a.createElement("span",{className:"project__about-tech"},"Java Script"),l.a.createElement("span",{className:"project__about-tech"},"HTML5"),l.a.createElement("span",{className:"project__about-tech"},"CSS3"),l.a.createElement("span",{className:"project__about-tech"},"Bootstrap 4"),l.a.createElement("span",{className:"project__about-tech"},"ReactJS"),l.a.createElement("span",{className:"project__about-tech"},"React-Redux"),l.a.createElement("span",{className:"project__about-tech"},"RWD"),l.a.createElement("span",{className:"project__about-tech"},"REST API"),l.a.createElement("span",{className:"project__about-tech"},"jQuery")))),l.a.createElement("div",{className:"project__photo polluted"},l.a.createElement("div",{className:"project__photo-name"},"Polluted City"),l.a.createElement("div",{className:"project__photo-icon"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://oznerek.github.io/Polluted-cities/"}," ",l.a.createElement("i",{className:"far fa-eye"})," ")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/oznerek/Polluted-cities"}," ",l.a.createElement("i",{className:"fas fa-code"})," ")))))),l.a.createElement(f.a,{left:!0},l.a.createElement("div",{className:"project project__left"},l.a.createElement("div",{className:"year"},l.a.createElement("div",null,"2019")),l.a.createElement("div",{className:"project__about"},l.a.createElement("div",{className:"project__about-name"},"Food House"),l.a.createElement("div",{className:"project__about-description"},'Sample restaurant page. Uses external APIs (generating a list of dishes). We can place an order on the site, which is processed out on the employees\' side. ("http: // localhost: 3000/epmloyee", this part is finished in 50%). The site has a simple mySQL database for storing data.',l.a.createElement("div",null,l.a.createElement("span",{className:"project__about-tech"},"Java Script"),l.a.createElement("span",{className:"project__about-tech"},"HTML5"),l.a.createElement("span",{className:"project__about-tech"},"CSS3"),l.a.createElement("span",{className:"project__about-tech"},"ReactJS"),l.a.createElement("span",{className:"project__about-tech"},"React-Redux"),l.a.createElement("span",{className:"project__about-tech"},"RWD"),l.a.createElement("span",{className:"project__about-tech"},"REST API")," ",l.a.createElement("span",{className:"project__about-tech"},"CSS3"),l.a.createElement("span",{className:"project__about-tech"},"jQuery"),l.a.createElement("span",{className:"project__about-tech"},"Sass"),l.a.createElement("span",{className:"project__about-tech"},"Node"),l.a.createElement("span",{className:"project__about-tech"},"mySQL"),l.a.createElement("span",{className:"project__about-tech"},"Express")))),l.a.createElement("div",{className:"project__photo foodhouse"},l.a.createElement("div",{className:"project__photo-name"},l.a.createElement("span",null,"Food House")),l.a.createElement("div",{className:"project__photo-icon"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://oznerek.github.io/foodhouse"},l.a.createElement("i",{className:"far fa-eye"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/oznerek/foodhouse"}," ",l.a.createElement("i",{className:"fas fa-code"}))))))),l.a.createElement(f.a,{right:!0},l.a.createElement("div",{className:"project project__right"},l.a.createElement("div",{className:"year"},l.a.createElement("div",null,"2019")),l.a.createElement("div",{className:"project__about"},l.a.createElement("div",{className:"project__about-name"},"Portfolio"),l.a.createElement("div",{className:"project__about-description"},"Website created to show all my projects and skills in one place",l.a.createElement("div",null,l.a.createElement("span",{className:"project__about-tech"},"Java Script"),l.a.createElement("span",{className:"project__about-tech"},"HTML5"),l.a.createElement("span",{className:"project__about-tech"},"CSS3"),l.a.createElement("span",{className:"project__about-tech"},"ReactJS"),l.a.createElement("span",{className:"project__about-tech"},"RWD"),l.a.createElement("span",{className:"project__about-tech"},"jQuery"),l.a.createElement("span",{className:"project__about-tech"},"Sass")))),l.a.createElement("div",{className:"project__photo portfolio"},l.a.createElement("div",{className:"project__photo-name"},"Polluted City"),l.a.createElement("div",{className:"project__photo-icon"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://oznerek.github.io/portfolio/"}," ",l.a.createElement("i",{className:"far fa-eye"})," ")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/oznerek/portfolio"}," ",l.a.createElement("i",{className:"fas fa-code"})," ")))))),l.a.createElement(f.a,{left:!0},l.a.createElement("div",{className:"project project__left"},l.a.createElement("div",{className:"year"},l.a.createElement("div",null,"2019")),l.a.createElement("div",{className:"project__about"},l.a.createElement("div",{className:"project__about-name"},"Luxus"),l.a.createElement("div",{className:"project__about-description"},"This is the fake website of Lexus, created for learning.",l.a.createElement("div",null,l.a.createElement("span",{className:"project__about-tech"},"Java Script"),l.a.createElement("span",{className:"project__about-tech"},"HTML5"),l.a.createElement("span",{className:"project__about-tech"},"CSS3"),l.a.createElement("span",{className:"project__about-tech"},"ReactJS"),l.a.createElement("span",{className:"project__about-tech"},"React-Router"),l.a.createElement("span",{className:"project__about-tech"},"RWD"),l.a.createElement("span",{className:"project__about-tech"},"CSS3"),l.a.createElement("span",{className:"project__about-tech"},"jQuery"),l.a.createElement("span",{className:"project__about-tech"},"Sass")))),l.a.createElement("div",{className:"project__photo luxus"},l.a.createElement("div",{className:"project__photo-name"},l.a.createElement("span",null,"Luxus")),l.a.createElement("div",{className:"project__photo-icon"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://oznerek.github.io/luxus"},l.a.createElement("i",{className:"far fa-eye"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/oznerek/luxus"}," ",l.a.createElement("i",{className:"fas fa-code"})))))))))}}]),a}(l.a.Component),g=t(9),k=t(8),j=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).changeHandler=function(e){var a=e.target.name;t.setState(Object(k.a)({},a,e.target.value))},t.sendMessage=function(){var e=t.state;if(void 0===e.email||""===e.email)p()(".validate__email").css({display:"none",visibility:"hidden"}),t.setState(function(e){return{emptyField:Object(g.a)({},e.emptyField,{email:!0})}});else{p()(".validate__email").css({color:"red",visibility:"visible",display:"inline-block"}),t.setState(function(e){return{emptyField:Object(g.a)({},e.emptyField,{email:!1})}});!function(){var a=p()("#email_label"),s=e.email;a.text(""),function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(s)?t.setState({validateEmail:!0}):(t.setState({validateEmail:!1}),a.text("Incorrect email"),a.css("color","red"))}()}return void 0===e.message||void 0===e.name||void 0===e.subject||void 0===e.email||""===e.message||""===e.name||""===e.subject||""===e.email?(p()(".validate").css({color:"red",visibility:"visible"}),t.setState({validateMessage:"Please complete all form before sending Your message"})):!0===t.state.validateEmail?(p()(".validate").css({color:"green",visibility:"visible"}),t.setState({validateMessage:"Your message was sent"})):void p()(".validate").css({color:"red",visibility:"hidden"})},t.state={validateMessage:"",validateEmail:!1,emptyField:{name:!0,message:!0,subject:!0,email:!0}},t}return Object(_.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"contact scrollspy",id:"contact"},l.a.createElement("div",{className:"page__title"},l.a.createElement("p",{className:"page__title-number"},"04"),l.a.createElement("h2",{className:"page__title-text"},"Contact"))," ",l.a.createElement("div",{className:"contact__content"},l.a.createElement("div",{className:"address"},l.a.createElement("div",{className:"address__title"},"Feel free to contact me"),l.a.createElement("div",null,l.a.createElement("p",{className:"address__title"},"Phone number"),l.a.createElement("p",{className:"address__code"},"xxx-xxx-xxx")),l.a.createElement("div",null,l.a.createElement("p",{className:"address__title"},"Email"),l.a.createElement("p",{className:"address__code"},"oznerek@gmail.com")),l.a.createElement("div",null,l.a.createElement("p",{className:"address__title"},"Address"),l.a.createElement("p",{className:"address__code"},"Silesia"))),l.a.createElement("div",{className:"message"},l.a.createElement("div",null,"Send message"),l.a.createElement("span",{className:"message__line"},l.a.createElement("input",{type:"text",placeholder:"Your Name",name:"name",className:"message__input",onChange:this.changeHandler}),l.a.createElement("input",{id:"email",type:"email",placeholder:"Email",name:"email",className:"message__input",onChange:this.changeHandler})),l.a.createElement("div",{className:"validate__email",id:"email_label"}),l.a.createElement("input",{type:"text",placeholder:"Subject",name:"subject",className:"message__input",onChange:this.changeHandler}),l.a.createElement("textarea",{type:"text",placeholder:"Message",name:"message",className:"message__input message__input-message",onChange:this.changeHandler}),l.a.createElement("button",{className:"btn message__btn",onClick:this.sendMessage},"Send Message"),l.a.createElement("div",{className:"validate"}," ",this.state.validateMessage," "))))}}]),a}(l.a.Component),y=function(){return l.a.createElement("section",{className:"footer scrollspy",id:"footer"},l.a.createElement("div",{className:"footer__author"},l.a.createElement("p",null,"Copyright by Micha\u0142 Oznerek ",l.a.createElement("sup",null,"\xa9")," - 2019"),l.a.createElement("a",{href:"https://oznerek.github.io/portfolio/",className:"footer__link"}," ","Contact"," ")),l.a.createElement("div",{className:"footer__powered"},"Powered by",l.a.createElement("a",{href:"http://unsplash.com",className:"footer__link"}," ","Unsplash.com")))};var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(u,null),l.a.createElement(v,null),l.a.createElement(N,null),l.a.createElement(b,null),l.a.createElement(j,null),l.a.createElement(y,null))};n.a.render(l.a.createElement(w,null),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ed4c3078.chunk.js.map