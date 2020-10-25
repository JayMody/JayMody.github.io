(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},21:function(e){e.exports={particles:{number:{value:50,density:{enable:!1,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:32.48308849205381,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1}},22:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(3),r=a.n(i),s=a(10),l=a(2),c=a(1),m=a(8),u=a(5),d=a(6),b=a(9),g=a(7),f=a(11),h=function(e){function t(){return Object(u.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.i,a=e.x,n=e.y,i=e.rot,r=e.scale,s=e.trans,l=e.bind,m=e.data[t],u=m.title,d=m.tags,b=m.text,g=m.pic,f=m.linkstyle,h=m.links;return o.a.createElement(c.a.div,{className:"card-container",key:t,style:{transform:Object(c.b)([a,n],function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")})}},o.a.createElement(c.a.div,Object.assign({className:"card"},l(t),{style:{transform:Object(c.b)([i,r],s)}}),o.a.createElement("div",{className:"content-container"},""!==g&&o.a.createElement("img",{className:"round-img",src:g,alt:"pic"}),o.a.createElement("h2",null,u),d.length>0&&o.a.createElement("div",{className:"tag-container"},d.map(function(e,t){return o.a.createElement("span",{className:"tag",style:{background:e.color},key:t},e.text)})),o.a.createElement("h5",{dangerouslySetInnerHTML:{__html:b}}),h.length>0&&o.a.createElement("ul",{className:f},h.map(function(e,t){return o.a.createElement("li",null,o.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:e.icon},e.text))})))))}}]),t}(o.a.Component),p="#FFD166",y="#EF476F",k="#62B1D0",w=[{title:"Jay Mody",text:"Hello there!\nYou've stumbled across my personal website.\n<b>Swipe</b> to learn more about me.",pic:"images/avatar.jpg",linkstyle:"icons",links:[{text:"",url:"https://github.com/jaymody",icon:"fab fa-github"},{text:"",url:"https://linkedin.com/in/jaykmody",icon:"fab fa-linkedin-in"},{text:"",url:"mailto:JayKMody@gmail.com",icon:"fas fa-envelope"},{text:"",url:"jaymody_resume.pdf",icon:"fas fa-file"}],tags:[{text:"Coder",color:p},{text:"Student",color:y},{text:"Musician",color:k}]},{title:"A little about me ...",text:'I\'m a third year <b>software engineering student</b> at <b>McMaster University</b>.\n\n Please know that this website is just for fun, and is not a portfolio. That\'s what my <a target="_blank" href="jaymody_resume.pdf">Resume</a>, <a target="_blank" href="https://www.linkedin.com/in/jaykmody">LinkedIn</a>, and <a target="_blank" href="https://github.com/jaymody">Github</a> are for :).\n\nHowever, I\'d be remiss if I didn\'t mention that I was a <b>top 5 finalist</b> in a <b>$1,000,000 AI competition</b> and want to work with interesting people to tackle interesting problems.\n\nIf you want to collaborate, think I can add value, or just want to have a chat, reach out to me at my <a href=mailto:JayKMody@gmail.com>email</a> (or schedule a chat with me using the blue button in the bottom right). Enough about my credentials, what else am I up to?',pic:"",linkstyle:"ilink",links:[],tags:[]},{title:"\ud83c\udfb5\ud83c\udfb5\ud83c\udfb5",text:"I play a lot of different instruments, but as of late I'm really enjoying picking up my <b>guitar</b> \ud83c\udfb8. I'm currently learning how to solo over various chord progressions popular in <b>classic rock</b> and <b>blues</b> (I'm a massive <b>Led Zeppelin</b> fan).\n\nIn high school, I was part of a specialized musical arts program where I was <b>double bass</b> major for 4 years (aka big cello). Here's me performing <a target=\"_blank\" href=\"https://youtu.be/4nVHOQA9EjM\">Air on the G String by Bach</a> on the double bass.",pic:"images/music.png",linkstyle:"ilink",links:[],tags:[{text:"Guitar",color:k},{text:"Drums",color:y},{text:"Bass",color:p}]},{title:"Books are cheatcodes for life",text:"I recently finished reading <b>Atomic Habits</b> by James Clear (great read for those looking to get their \ud83d\udca9 together). \n\nI'm currently cracking away at <b>Coddling of the American Mind</b>, a book about how bad ideas with good intentions are ruining a generation.\n\nIf you have any recommendations for books/articles that really shifted the way you think (or just a good fiction book tbh), drop em in my <a href=mailto:JayKMody@gmail.com>email</a>, I'd be super grateful :).",pic:"https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png",linkstyle:"ilink",links:[],tags:[]},{title:"segmentation fault 11",text:"If you've ever had your <b>python</b> question answered on StackOverflow, check the responders user tag, there's a very tiny (but non-zero!) chance it might be me!\n\nIt wouldn't be an exaggeration to say <b>StackOverflow</b> has done more for my career than my education (no shade to McMaster University, it's an awesome school!), so in my spare time, I sometimes go on StackOverflow and answer people's presssing programming questions.",pic:"https://cdn4.iconfinder.com/data/icons/miu-gloss-social/60/stackoverflow-512.png",linkstyle:"ilink",links:[{text:" StackOverflow Profile",url:"https://stackoverflow.com/users/11070463/jay-mody",icon:"fab fa-stack-overflow"}],tags:[]},{title:"Opensource",text:"As someone who relies and greatly benefits from open source software, the least I can do is give back. Here's a short list of project I've made contributions to (filling issues, fixing bugs, adding features, updating documentation, etc ...):",pic:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",linkstyle:"ilink",links:[{text:" numpy-ml",url:"https://github.com/ddbourgin/numpy-ml",icon:"fab fa-github"},{text:" huggingface/transformers",url:"https://github.com/huggingface/transformers",icon:"fab fa-github"},{text:" tensorflow/estimator",url:"https://github.com/tensorflow/estimator",icon:"fab fa-github"},{text:" tensorflow/tensorflow",url:"https://github.com/tensorflow/tensorflow",icon:"fab fa-github"},{text:" huggingface/tokenizers",url:"https://github.com/huggingface/tokenizers",icon:"fab fa-github"}],tags:[]},{title:"Video Games",text:"When it comes to video games, I've play a bit of everything: real-time strategies, massive open world games, online shooters, and classics like <b>animal crossing</b> and <b>mario</b>. Lately I've been really into linear narrative driven games (<b>Last of Us I and II</b>, or really anything made my Naughty Dog).\n\nOh, I also occasionally play some not-so friendly games of <b>Smash Bros</b> with my friends (as the picture indicates, I'm a Donkey Kong main).\n\nHowever, the crown for favourite game of all time definetly goes to <b>Skyrim</b>.",pic:"images/donkey.png",linkstyle:"ilink",links:[],tags:[]}].reverse(),v=(a(18),a(19),function(e){return{x:0,y:-5*e,scale:1,rot:16*Math.random()-8,delay:100*e}}),x=function(e){return{rot:0,scale:1.5,y:-1e3}},I=function(e,t){return"perspective(1500px) rotateX(10deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")};var j=function(){var e=Object(n.useState)(function(){return new Set}),t=Object(l.a)(e,1)[0],a=Object(c.c)(w.length,function(e){return Object(s.a)({},v(e),{from:x(e)})}),i=Object(l.a)(a,2),r=i[0],u=i[1],d=Object(m.a)(function(e){var a=Object(l.a)(e.args,1)[0],n=e.down,o=Object(l.a)(e.delta,1)[0],i=(e.distance,Object(l.a)(e.direction,1)[0]),r=e.velocity,s=i<0?-1:1;!n&&r>.2&&t.add(a),u(function(e){if(a===e){var i=t.has(a);return{x:i?(200+window.innerWidth)*s:n?o:0,rot:o/100+(i?10*s*r:0),scale:n?1.1:1,delay:void 0,config:{friction:50,tension:n?800:i?200:500}}}}),n||t.size!==w.length||setTimeout(function(){return t.clear()||u(function(e){return v(e)})},600)});return r.map(function(e,t){var a=e.x,n=e.y,i=e.rot,r=e.scale;return o.a.createElement(h,{i:t,x:a,y:n,rot:i,scale:r,trans:I,data:w,bind:d})})},O=function(){return o.a.createElement(j,null)},_=(a(20),window.particlesJS);r.a.render(o.a.createElement(O,null),document.getElementById("root")),_("root",a(21))}},[[12,1,2]]]);
//# sourceMappingURL=main.f8ec1961.chunk.js.map