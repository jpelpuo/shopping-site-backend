(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{75:function(e,t,n){e.exports=n(91)},80:function(e,t,n){},81:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(27),i=n.n(c),o=(n(80),n(10)),l=n(9),u=(n(81),n(20)),s=n(12),m=n(2),f=n(98),d=n(93),p=n(94),b=n(3),v=r.a.createContext({token:null,login:function(e,t){},logout:function(){}});function h(){var e=Object(m.a)([""]);return h=function(){return e},e}function E(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);return E=function(){return e},e}function j(){var e=Object(m.a)(["\n    float: left;\n"]);return j=function(){return e},e}function O(){var e=Object(m.a)(["\n    line-height: 1.5;\n    vertical-align: center;\n"]);return O=function(){return e},e}function g(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 40%;\n\n    @media screen and (max-width: 768px){\n        width: 90%;\n    }\n"]);return g=function(){return e},e}var x=f.a.Text,w=f.a.Row,y=f.a.Label,C=Object(b.a)(f.a)(g()),N=Object(b.a)(x)(O()),S=Object(b.a)(y)(j()),k=Object(b.a)(w)(E()),I=Object(b.a)(u.b)(h()),G=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useContext)(v),c=Object(a.useState)(null),i=Object(l.a)(c,2),o=i[0],u=i[1];return r.a.createElement(C,{onSubmit:function(a){a.preventDefault();var r=e.current.value,c=t.current.value;if(r||c){var i=JSON.parse(localStorage.getItem(r));if(i){i.email;if(c===i.password){var o=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,r=0;r<a;r++)t+=n.charAt(Math.floor(Math.random()*a));return t}();n.login(o,r)}else u("Invalid Credentials!")}else u("User does not exist")}},className:"mx-auto border p-3 mt-5"},r.a.createElement("h3",null,"Login"),o&&r.a.createElement(d.a,{variant:"danger"},o),r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(S,null,"Email"),r.a.createElement(f.a.Control,{type:"email",ref:e})),r.a.createElement(f.a.Group,{controlId:"formBasicPassword"},r.a.createElement(S,{className:""},"Password"),r.a.createElement(f.a.Control,{type:"password",ref:t})),r.a.createElement(k,{className:""},r.a.createElement(p.a,{variant:"primary",type:"submit"},"Login"),r.a.createElement(N,{className:"text-muted align-middle"},"Dont have an account?",r.a.createElement(I,{to:"/register"}," Register here!"))))},A=n(57),H=n.n(A),P=n(65),_=n(66),T=n(95);function B(){var e=Object(m.a)([""]);return B=function(){return e},e}function F(){var e=Object(m.a)(["\n    line-height: 1.5;\n    vertical-align: center;\n"]);return F=function(){return e},e}function W(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);return W=function(){return e},e}function R(){var e=Object(m.a)(["\n    float: left;\n"]);return R=function(){return e},e}function D(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 35%;\n\n    @media screen and (max-width: 768px){\n        width: 90%;\n    }\n"]);return D=function(){return e},e}var M=f.a.Label,J=f.a.Text,L=f.a.Row,q=Object(b.a)(f.a)(D()),z=Object(b.a)(M)(R()),U=Object(b.a)(L)(W()),Y=Object(b.a)(J)(F()),V=Object(b.a)(u.b)(B()),X=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),o=Object(l.a)(i,2),u=o[0],s=o[1],m=Object(a.useState)(!1),b=Object(l.a)(m,2),v=b[0],h=b[1],E=Object(a.useRef)(),j=Object(a.useRef)(),O=Object(a.useRef)(),g=Object(a.useRef)(),x=function(){var e=Object(_.a)(H.a.mark((function e(t){var n,a,r,i,o,u,m,f,d,p,b,v,x;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s(!0),n=E.current.value,a=j.current.value,r=O.current.value,i=g.current.value,n&&a&&r&&i){e.next=8;break}return e.abrupt("return");case 8:if(r===i){e.next=11;break}return c("Passwords do not match"),e.abrupt("return");case 11:return o=n.split(" "),u=Object(P.a)(o),m=u[0],f=u.slice(1),d=Object(l.a)(f,1),p=d[0],b={firstName:m,lastName:p,email:a,password:r},e.next=16,fetch("https://secret-anchorage-57474.herokuapp.com/api/user/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)});case 16:return v=e.sent,e.next=19,v.json();case 19:if(!(x=e.sent).error){e.next=24;break}return c(x.error.message),s(!1),e.abrupt("return");case 24:h(!0),s(!1),c(null);case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(q,{className:"mx-auto border p-4 mt-5",onSubmit:x},r.a.createElement("h3",null,"Sign Up!"),n&&r.a.createElement(d.a,{variant:"danger"},n),v&&r.a.createElement(d.a,{variant:"success"},"User added! You can now login"),r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(z,null,"Name"),r.a.createElement(f.a.Control,{type:"text",ref:E})),r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(z,null,"Email"),r.a.createElement(f.a.Control,{type:"email",ref:j})),r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(z,null,"Password"),r.a.createElement(f.a.Control,{type:"password",ref:O})),r.a.createElement(f.a.Group,{controlId:"formBasicPassword"},r.a.createElement(z,{className:""},"Confirm Password"),r.a.createElement(f.a.Control,{type:"password",ref:g})),r.a.createElement(U,null,r.a.createElement(p.a,{variant:"primary",type:"submit"},u?r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{as:"span",size:"sm",animation:"border"}),"Adding user"):"Register"),r.a.createElement(Y,{className:"text-muted align-middle"},"Already have an account?",r.a.createElement(V,{to:"/auth"}," Log in!"))))},K=n(61),Q=n(100),Z=n(99),$=n(34),ee=n(15),te=r.a.createContext({products:[],cartItems:[],wishlist:[],addToCart:function(e){},removeFromCart:function(e){},addToWishlist:function(e){},removeFromWishlist:function(e){},searchedProducts:[],searchInitiated:!1,search:function(e){},clearCart:function(){},clearWishlist:function(){},checkout:function(e){},history:[],clearHistory:function(){}});function ne(){var e=Object(m.a)(["\n    display: inline-block;\n    width: 1.5rem;\n    height: 1.55rem;\n    text-align: center;\n"]);return ne=function(){return e},e}function ae(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    margin: 0 auto;\n\n    @media screen and (max-width: 768px){\n        margin: 1rem 0;\n    }\n"]);return ae=function(){return e},e}function re(){var e=Object(m.a)(["\n    width: 90% !important;\n    margin-right: 0.8rem;\n\n    @media screen and (max-width: 768px){\n        width: 85% !important;\n    }\n"]);return re=function(){return e},e}function ce(){var e=Object(m.a)(["\n    margin: 0 auto;\n    width: 60%;\n\n    @media screen and (max-width: 768px){\n        margin: 0.8rem 0;\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n    }\n"]);return ce=function(){return e},e}function ie(){var e=Object(m.a)(["\n    text-decoration: none !important;\n    color: lightgray;\n"]);return ie=function(){return e},e}var oe=Object(b.a)(u.b)(ie()),le=Object(b.a)(f.a)(ce()),ue=Object(b.a)(K.a)(re()),se=b.a.div(ae()),me=b.a.span(ne()),fe=function(){var e=Object(a.useContext)(v),t=e.token,n=e.logout,c=Object(a.useContext)(te),i=c.cartItems,o=c.search,l=Object(a.useRef)();return r.a.createElement(Q.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top"},r.a.createElement(Q.a.Brand,{href:"#home"},"Buy Stuff From Here !"),r.a.createElement(Q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(Q.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(Z.a,{className:"mr-auto"},r.a.createElement(oe,{to:"/home"},"Home")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{className:"mr-auto"},r.a.createElement(oe,{to:"/wishlist"},"Wishlist")),r.a.createElement(Z.a,null,r.a.createElement(oe,{to:"/history"},"Purchase history"))),r.a.createElement(le,{inline:!0,className:"",onSubmit:function(e){return function(e){e.preventDefault();var t=l.current.value;o(t)}(e)}},r.a.createElement(ue,{type:"text",placeholder:"Search products",className:"",onChange:function(){var e=l.current.value;""===e&&o(e)},ref:l}),r.a.createElement(p.a,{variant:"outline-info",type:"submit"},r.a.createElement($.a,null))),r.a.createElement(se,null,r.a.createElement(Z.a,{className:"mr-auto"},r.a.createElement(oe,{to:"/cart"},r.a.createElement(ee.d,{size:"1.5rem"}),r.a.createElement(me,{className:"rounded-circle bg-danger"},i.length)))),r.a.createElement(Z.a,null,t&&r.a.createElement(p.a,{className:"ml-2",onClick:function(){n()}},"Logout"),!t&&r.a.createElement(oe,{className:"btn btn-primary",to:"/auth"},"Login"))))},de=n(96);function pe(){var e=Object(m.a)(["\n    display: flex;\n    width: 100%;\n    margin-top: 5rem;\n"]);return pe=function(){return e},e}function be(){var e=Object(m.a)(["\n    padding: 0;\n"]);return be=function(){return e},e}var ve=Object(b.a)(de.a)(be()),he=b.a.div(pe()),Ee=function(e){var t=e.children;return r.a.createElement(ve,{fluid:!0},r.a.createElement(fe,null),r.a.createElement(he,{className:""},t))},je=n(101);function Oe(){var e=Object(m.a)(["\n    font-weight: light;\n"]);return Oe=function(){return e},e}function ge(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n"]);return ge=function(){return e},e}function xe(){var e=Object(m.a)(["\n    font-weight: lighter;\n"]);return xe=function(){return e},e}function we(){var e=Object(m.a)(["\n    font-weight: bold;\n"]);return we=function(){return e},e}function ye(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"]);return ye=function(){return e},e}function Ce(){var e=Object(m.a)(["\n    height: 270px;  \n\n    @media screen and (max-width: 768px){\n        height: 300px;\n    }\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    width: 17%;\n    margin: 1rem 1rem;\n    box-sizing: border-box;\n    transition: all 0.2s;\n\n\n    @media screen and (max-width: 768px){\n        width: 80%;\n        height: 10% !important;\n        margin: 0.5rem auto;\n    }\n\n    &:hover{\n        transform: scale(1.05, 1.05)\n    }\n"]);return Ne=function(){return e},e}var Se=je.a.Img,ke=Object(b.a)(je.a)(Ne()),Ie=Object(b.a)(Se)(Ce()),Ge=b.a.div(ye()),Ae=b.a.span(we()),He=b.a.span(xe()),Pe=b.a.div(ge()),_e=b.a.span(Oe()),Te=function(e){var t=e.product,n=Object(a.useContext)(te),c=n.addToCart,i=n.cartItems,o=n.removeFromCart,l=n.addToWishlist,m=Object(a.useContext)(v).token,f=Object(s.g)();return r.a.createElement(ke,{className:""},r.a.createElement(u.b,{to:"/product/".concat(t.id),style:{color:"black",textDecoration:"none"}},r.a.createElement(Ie,{src:t.image,variant:"top"})),r.a.createElement(je.a.Body,null,r.a.createElement(Ge,null,r.a.createElement(Ae,null,t.name),r.a.createElement(He,null,r.a.createElement("span",{className:"mr-1"},t.currency),t.price),r.a.createElement(_e,{className:t.inStock?"text-success":"text-danger"},t.inStock?"In stock":"Out of stock")),r.a.createElement(Pe,null,r.a.createElement(p.a,{variant:"primary",size:"sm",title:"Add to cart",onClick:function(){return e=t.id,void(m?c(e):f.push("/auth"));var e},className:"mr-1"},r.a.createElement(ee.b,null)),r.a.createElement(p.a,{variant:"danger",size:"sm",title:"Remove from cart",className:"mr-1",onClick:function(){return e=t.id,void o(e);var e},disabled:!i.includes(t.id)},r.a.createElement(ee.c,null)),m&&r.a.createElement(p.a,{variant:"secondary",size:"sm",onClick:function(){return e=t.id,void l(e);var e}},r.a.createElement(ee.a,null),r.a.createElement("span",{className:"ml-1"},"Add to wishlist")))))};function Be(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow:row wrap;\n    justify-content: center;\n    width: 100%;\n\n    @media screen and (max-width: 768px){\n        flex-flow:column nowrap;\n        justify-content: center;\n    }\n"]);return Be=function(){return e},e}function Fe(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow:row wrap;\n    width: 100%;\n"]);return Fe=function(){return e},e}var We=b.a.div(Fe()),Re=b.a.div(Be()),De=function(e){var t=Object(a.useContext)(te),n=t.products,c=t.searchedProducts;return r.a.createElement(We,null,r.a.createElement("h2",{className:"ml-5 font-weight-bolder"},"Browse All Products"),r.a.createElement(Re,{className:""},0!==c.length?c.map((function(t,n){return r.a.createElement(Te,Object.assign({key:n,product:t},e))})):n.map((function(t,n){return r.a.createElement(Te,Object.assign({key:n,product:t},e))}))))};function Me(){var e=Object(m.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n"]);return Me=function(){return e},e}var Je=b.a.div(Me()),Le=function(e){return r.a.createElement(Je,null,r.a.createElement(De,e))},qe=[{id:"1234566",name:"Apple iPhone 11",image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022219953",price:2e3,category:"Computer electronics",inStock:!0,description:["Apple device","Great smartphone","Runs iOS","Great build quality"],condition:"New",currency:"GHC"},{id:"1234567",name:"Samsung Galaxy S20",image:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg",price:2500,category:"Computer electronics",inStock:!0,description:["Samsung Device","Runs Android","Great build quality","Great performance"],condition:"New",currency:"GHC"},{id:"1234568",name:"Apple iPhone 11 Pro Max",image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188",price:4e3,category:"Computer electronics",inStock:!0,description:["Apple device","Great smartphone","Runs iOS","Great build quality","Great Camera"],condition:"New",currency:"GHC"},{id:"1234569",name:"Microsoft Surface Duo",image:"https://cdn.vox-cdn.com/thumbor/bX8IzXC5O0uKPCLwIYBPnnXi_bg=/0x0:6000x6000/1200x0/filters:focal(0x0:6000x6000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21729329/Feature_006_Text.jpg",price:5e3,category:"Computer electronics",inStock:!0,description:["Microsoft Surface device","Dual Screen","Runs Android","Good for productivity"],condition:"New",currency:"GHC"},{id:"1234570",name:"Microsoft Surface Headphones 2",image:"https://cdn.vox-cdn.com/thumbor/VjbdHgfj-61DunbYKXVF7RR_jEQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19993344/C0E84DFF_8EB1_403C_9CA6_B8B7FF1B8EEF.jpeg",price:1500,category:"Noise Cancelling Headphones",inStock:!0,description:["Microsoft Surface device","Noise cancelling headphones","Great build quality","Great sound"],condition:"New",currency:"GHC"},{id:"1234571",name:"Sony WH-1000XM4",image:"https://cdn0.vox-cdn.com/hermano/verge/product/image/9373/image__17_.png",price:1800,category:"Noise Cancelling Headphones",inStock:!0,description:["Sony device","Best active noise cancellation","Long-lasting battery life","Great sound"],condition:"New",currency:"GHC"},{id:"1234572",name:"Apple Airpods Pro",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634652000",price:1e3,category:"Noise cancelling earbuds",inStock:!0,description:["Apple device","Active noise cancellation","Great sound","Great fit"],condition:"New",currency:"GHC"},{id:"1234573",name:"Apple Watch Series 5",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWUR2_VW_PF+watch-40-alum-gold-cell-5s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1566450019949,1569365646259",price:2e3,category:"Computer electronics",inStock:!0,description:["Apple device","Great screen","Great fit","Great battery life"],condition:"New",currency:"GHC"},{id:"1234574",name:'Apple Macbook Pro 16"',image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825197207",price:11120,category:"Computer electronics",inStock:!0,description:["Apple device","Great build","Great performance","Great typing experience"],condition:"New",currency:"GHC"},{id:"1234575",name:"Microsoft Surface Book 3",image:"https://cdn.shopify.com/s/files/1/0036/4806/1509/products/m100001532_29f95740-7a5e-4aae-8845-2c0911ff5ba0_1000x1000@2x.jpg?v=1588852855",price:1e4,category:"Computer electronics",inStock:!0,description:["Microsoft Surface device","Detachable screen","Great build quality","Great typing experience"],condition:"New",currency:"GHC"}];function ze(){var e=Object(m.a)(["\n    margin: 0.5rem 0;\n"]);return ze=function(){return e},e}function Ue(){var e=Object(m.a)(["\n    width: 60%;\n    display: flex;\n    flex-flow: column wrap;\n"]);return Ue=function(){return e},e}function Ye(){var e=Object(m.a)([""]);return Ye=function(){return e},e}function Ve(){var e=Object(m.a)([""]);return Ve=function(){return e},e}function Xe(){var e=Object(m.a)([""]);return Xe=function(){return e},e}function Ke(){var e=Object(m.a)([""]);return Ke=function(){return e},e}function Qe(){var e=Object(m.a)([""]);return Qe=function(){return e},e}function Ze(){var e=Object(m.a)([""]);return Ze=function(){return e},e}function $e(){var e=Object(m.a)([""]);return $e=function(){return e},e}function et(){var e=Object(m.a)([""]);return et=function(){return e},e}function tt(){var e=Object(m.a)(["\n    @media screen and (max-width: 768px){\n        width: 100%;\n    }\n"]);return tt=function(){return e},e}function nt(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    width: 80%;\n\n    @media screen and (max-width: 768px){\n        flex-flow: column wrap\n    }\n"]);return nt=function(){return e},e}function at(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n"]);return at=function(){return e},e}var rt=je.a.Img,ct=(je.a.Text,je.a.Subtitle),it=je.a.Title,ot=je.a.Body,lt=b.a.div(at()),ut=Object(b.a)(je.a)(nt()),st=Object(b.a)(rt)(tt()),mt=Object(b.a)(it)(et()),ft=b.a.span($e()),dt=b.a.span(Ze()),pt=b.a.div(Qe()),bt=b.a.ul(Ke()),vt=b.a.li(Xe()),ht=b.a.span(Ve()),Et=b.a.span(Ye()),jt=b.a.div(Ue()),Ot=Object(b.a)(p.a)(ze()),gt=function(){var e=Object(s.h)().productId,t=Object(a.useContext)(te),n=t.addToCart,c=t.cartItems,i=t.removeFromCart,o=t.addToWishlist,u=Object(a.useContext)(v).token,m=Object(s.g)(),f=qe.filter((function(t){return t.id===e})),d=Object(l.a)(f,1)[0];return r.a.createElement(lt,null,r.a.createElement("h2",{className:"ml-5 font-weight-bolder"},"Product Details"),r.a.createElement(ut,null,r.a.createElement(st,{src:d.image,variant:"left",width:"600"}),r.a.createElement(ot,{className:"d-flex flex-column"},r.a.createElement(mt,{className:"font-weight-bolder"},d.name),r.a.createElement(ft,null,r.a.createElement("span",null,d.currency),d.price),r.a.createElement(dt,null,d.category),r.a.createElement(Et,null,r.a.createElement("span",null,"Condition: "),d.condition),r.a.createElement(ht,{className:d.inStock?"text-success":"text-danger"},d.inStock?"In stock":"Out of stock"),r.a.createElement(pt,{className:"mt-3"},r.a.createElement(ct,{className:"font-weight-bolder"},"About this product"),r.a.createElement(bt,null,d.description.map((function(e,t){return r.a.createElement(vt,{key:t},e)})))),r.a.createElement(jt,null,r.a.createElement(Ot,{variant:"primary",onClick:function(){return function(e){u?n(e):m.push("/auth")}(d.id)}},r.a.createElement(ee.b,null)," Add to Cart"),r.a.createElement(Ot,{variant:"danger",onClick:function(){return function(e){i(e)}(d.id)},disabled:!c.includes(d.id)},r.a.createElement(ee.c,null)," Remove from Cart"),u&&r.a.createElement(Ot,{variant:"secondary",onClick:function(){return function(e){o(e)}(d.id)}},r.a.createElement(ee.a,null)," Add to wishlist")))))};function xt(){var e=Object(m.a)([""]);return xt=function(){return e},e}function wt(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n"]);return wt=function(){return e},e}function yt(){var e=Object(m.a)([""]);return yt=function(){return e},e}function Ct(){var e=Object(m.a)([""]);return Ct=function(){return e},e}function Nt(){var e=Object(m.a)([""]);return Nt=function(){return e},e}function St(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);return St=function(){return e},e}function kt(){var e=Object(m.a)([""]);return kt=function(){return e},e}function It(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n"]);return It=function(){return e},e}var Gt=je.a.Img,At=Object(b.a)(je.a)(It()),Ht=Object(b.a)(Gt)(kt()),Pt=b.a.div(St()),_t=b.a.span(Nt()),Tt=b.a.span(Ct()),Bt=b.a.span(yt()),Ft=b.a.div(wt()),Wt=Object(b.a)(p.a)(xt()),Rt=function(e){var t=e.product,n=Object(a.useContext)(te).removeFromCart;return r.a.createElement(At,{className:"my-2"},r.a.createElement(Ht,{src:t.image,variant:"left",width:"180",height:"180"}),r.a.createElement(je.a.Body,null,r.a.createElement(Pt,{className:""},r.a.createElement(je.a.Title,null,r.a.createElement(_t,null,t.name)),r.a.createElement(Tt,{className:t.inStock?"text-success":"text-danger"},t.inStock?"In stock":"Out of stock"),r.a.createElement(Bt,null,r.a.createElement("span",null,"Unit Price: GHC "),t.price),r.a.createElement(Ft,{className:""},r.a.createElement(Wt,{variant:"danger",onClick:function(){return e=t.id,void n(e);var e}},"Remove")))))},Dt=n(97);function Mt(){var e=Object(m.a)([""]);return Mt=function(){return e},e}function Jt(){var e=Object(m.a)([""]);return Jt=function(){return e},e}function Lt(){var e=Object(m.a)(["\n    width: 20%;\n\n    @media screen and (max-width: 768px){\n        width: 100%;\n    }\n"]);return Lt=function(){return e},e}function qt(){var e=Object(m.a)(["\n    width: 70%;\n    justify-content: center;\n\n    @media screen and (max-width: 768px){\n        width: 80%\n    }\n"]);return qt=function(){return e},e}function zt(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: row;\n\n    @media screen and (max-width: 768px){\n        flex-flow: column wrap;\n    }\n"]);return zt=function(){return e},e}function Ut(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    width: 100%;\n    justify-content: center;\n"]);return Ut=function(){return e},e}var Yt=b.a.div(Ut()),Vt=b.a.div(zt()),Xt=b.a.div(qt()),Kt=b.a.div(Lt()),Qt=Object(b.a)(p.a)(Jt()),Zt=Object(b.a)(p.a)(Mt()),$t=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),u=Object(l.a)(i,2),s=u[0],m=u[1],b=Object(a.useState)(!1),v=Object(l.a)(b,2),h=v[0],E=v[1],j=Object(a.useState)(!1),O=Object(l.a)(j,2),g=O[0],x=O[1],w=Object(a.useRef)(),y=function(){return x(!1)},C=Object(a.useContext)(te),N=C.cartItems,S=C.products,k=C.clearCart,I=C.checkout;Object(a.useEffect)((function(){var e=N.map((function(e){return S.filter((function(t){return e===t.id}))})).map((function(e){return e[0]}));c(Object(o.a)(e));var t=e.reduce((function(e,t){return e+t.price}),0);m(t)}),[N]);var G=function(){var e=w.current.value,t={date:new Date,items:Object(o.a)(n),cardDetails:e,totalAmount:s};I(t),E(!0),x(!1),setTimeout((function(){E(!1),k()}),5e3)};return r.a.createElement(Yt,{className:""},r.a.createElement("h2",{className:"ml-5 font-weight-bolder"},"Cart Items"),r.a.createElement(Vt,null,r.a.createElement(Xt,{className:"ml-5"},0!==n.length?n.map((function(e,t){return r.a.createElement(Rt,{key:t,product:e})})):r.a.createElement("div",null,r.a.createElement("h5",{className:"text-muted"},"Nothing to see here"))),r.a.createElement(Kt,{className:"ml-2 p-2"},r.a.createElement("div",null,"Total Amount: GHC ",s),r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement(Qt,{className:"mr-2",onClick:function(){return x(!0)},disabled:0===n.length},r.a.createElement(ee.d,null)," Checkout"),r.a.createElement(Zt,{variant:"danger",disabled:0===n.length,onClick:function(){k()}},r.a.createElement(ee.c,null)," Clear Cart")),h&&r.a.createElement(d.a,{variant:"success",className:"mt-3"},"Items Checked out")),r.a.createElement(f.a,{onSubmit:G},r.a.createElement(Dt.a,{show:g,onHide:y},r.a.createElement(Dt.a.Header,{closeButton:!0},r.a.createElement(Dt.a.Title,null,"Checking out")),r.a.createElement(Dt.a.Body,null,r.a.createElement(f.a.Label,null,"Enter Card Details"),r.a.createElement(f.a.Control,{type:"text",ref:w})),r.a.createElement(Dt.a.Footer,null,r.a.createElement(p.a,{variant:"secondary",onClick:y},"Close"),r.a.createElement(p.a,{variant:"primary",onClick:G},"Checkout"))))))};function en(){var e=Object(m.a)([""]);return en=function(){return e},e}function tn(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n"]);return tn=function(){return e},e}function nn(){var e=Object(m.a)([""]);return nn=function(){return e},e}function an(){var e=Object(m.a)([""]);return an=function(){return e},e}function rn(){var e=Object(m.a)([""]);return rn=function(){return e},e}function cn(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);return cn=function(){return e},e}function on(){var e=Object(m.a)([""]);return on=function(){return e},e}function ln(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n"]);return ln=function(){return e},e}var un=je.a.Img,sn=Object(b.a)(je.a)(ln()),mn=Object(b.a)(un)(on()),fn=b.a.div(cn()),dn=b.a.span(rn()),pn=b.a.span(an()),bn=b.a.span(nn()),vn=b.a.div(tn()),hn=Object(b.a)(p.a)(en()),En=function(e){var t=e.product,n=Object(a.useContext)(te).removeFromWishlist;return r.a.createElement(sn,{className:"my-2"},r.a.createElement(mn,{src:t.image,variant:"left",width:"180",height:"180"}),r.a.createElement(je.a.Body,null,r.a.createElement(fn,{className:""},r.a.createElement(je.a.Title,null,r.a.createElement(dn,null,t.name)),r.a.createElement(pn,{className:t.inStock?"text-success":"text-danger"},t.inStock?"In stock":"Out of stock"),r.a.createElement(bn,null,r.a.createElement("span",null,"Unit Price: GHC "),t.price),r.a.createElement(vn,{className:""},r.a.createElement(hn,{variant:"danger",onClick:function(){return e=t.id,void n(e);var e}},"Remove")))))};function jn(){var e=Object(m.a)([""]);return jn=function(){return e},e}function On(){var e=Object(m.a)(["\n    width: 20%;\n\n    @media screen and (max-width: 768px){\n        width: 90%;\n    }\n"]);return On=function(){return e},e}function gn(){var e=Object(m.a)(["\n    width: 70%;\n    justify-content: center;\n\n    @media screen and (max-width: 768px){\n        width: 80%\n    }\n"]);return gn=function(){return e},e}function xn(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: row;\n\n    @media screen and (max-width: 768px){\n        flex-flow: column wrap;\n    }\n"]);return xn=function(){return e},e}function wn(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    width: 100%;\n    justify-content: center;\n"]);return wn=function(){return e},e}var yn=b.a.div(wn()),Cn=b.a.div(xn()),Nn=b.a.div(gn()),Sn=b.a.div(On()),kn=Object(b.a)(p.a)(jn()),In=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),u=Object(l.a)(i,2),s=u[0],m=u[1],f=Object(a.useContext)(te),p=f.wishlist,b=f.products,v=f.clearWishlist;Object(a.useEffect)((function(){var e=p.map((function(e){return b.filter((function(t){return e===t.id}))})).map((function(e){return e[0]}));c(Object(o.a)(e))}),[p]);return r.a.createElement(yn,{className:""},r.a.createElement("h2",{className:"ml-5 font-weight-bolder"},"Your Wishlist"),r.a.createElement(Cn,null,r.a.createElement(Nn,{className:"ml-5"},0!==n.length?n.map((function(e,t){return r.a.createElement(En,{key:t,product:e})})):r.a.createElement("div",null,r.a.createElement("h5",{className:"text-muted"},"Nothing to see here"))),r.a.createElement(Sn,{className:"ml-2 p-2"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(kn,{variant:"danger",disabled:0===n.length,onClick:function(){return v(),m(!0),void setTimeout((function(){m(!1)}),5e3)}},r.a.createElement($.b,null)," Clear Wishlist")),s&&r.a.createElement(d.a,{variant:"success",className:"mt-3"},"Wishlist Cleared"))))},Gn=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(e),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],r=["January","February","March","April","May","June","July","August","September","October","November","December"],c=n.getDay(),i=n.getDate(),o=n.getMonth(),l=n.getFullYear();return t?"".concat(a[c],", ").concat(r[o]," ").concat(i,", ").concat(l):"".concat(a[c],", ").concat(r[o]," ").concat(i)};function An(){var e=Object(m.a)([""]);return An=function(){return e},e}function Hn(){var e=Object(m.a)([""]);return Hn=function(){return e},e}function Pn(){var e=Object(m.a)([""]);return Pn=function(){return e},e}function _n(){var e=Object(m.a)([""]);return _n=function(){return e},e}function Tn(){var e=Object(m.a)([""]);return Tn=function(){return e},e}function Bn(){var e=Object(m.a)([""]);return Bn=function(){return e},e}function Fn(){var e=Object(m.a)(["\n    width: 100%;\n"]);return Fn=function(){return e},e}var Wn=Object(b.a)(je.a)(Fn()),Rn=b.a.div(Bn()),Dn=b.a.div(Tn()),Mn=b.a.div(_n()),Jn=b.a.ul(Pn()),Ln=b.a.li(Hn()),qn=b.a.div(An()),zn=function(e){var t=e.purchaseHistory;return r.a.createElement(Wn,{className:"my-2"},r.a.createElement(je.a.Body,null,r.a.createElement(Rn,null,r.a.createElement("span",{className:"font-weight-bolder"},"Purchase Date: "),Gn(t.date)),r.a.createElement(Dn,null,r.a.createElement("span",{className:"font-weight-bolder"},"Card Used: "),t.cardDetails),r.a.createElement(Mn,null,r.a.createElement("span",{className:"font-weight-bolder"},"Items Purchased"),r.a.createElement(Jn,null,t.items.map((function(e,t){return r.a.createElement(Ln,{key:t},e.name)})))),r.a.createElement(qn,null,r.a.createElement("span",{className:"font-weight-bolder"},"Total Amount: GHC "),t.totalAmount)))};function Un(){var e=Object(m.a)([""]);return Un=function(){return e},e}function Yn(){var e=Object(m.a)(["\n    width: 20%;\n\n    @media screen and (max-width: 768px){\n        width: 90%;\n    }\n"]);return Yn=function(){return e},e}function Vn(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    width: 70%;\n"]);return Vn=function(){return e},e}function Xn(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n\n    @media screen and (max-width: 768px){\n        flex-flow: column nowrap;\n    }\n"]);return Xn=function(){return e},e}function Kn(){var e=Object(m.a)(["\n    display: flex;\n    width: 100%;\n    flex-flow: column nowrap;\n"]);return Kn=function(){return e},e}var Qn=b.a.div(Kn()),Zn=b.a.div(Xn()),$n=b.a.div(Vn()),ea=b.a.div(Yn()),ta=Object(b.a)(p.a)(Un()),na=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useContext)(te),u=i.history,s=i.clearHistory,m=Object(a.useState)([]),f=Object(l.a)(m,2),p=f[0],b=f[1];Object(a.useEffect)((function(){b(Object(o.a)(u))}),[u]);return r.a.createElement(Qn,null,r.a.createElement("h2",{className:"ml-5 font-weight-bolder"},"Your Purchase History"),r.a.createElement(Zn,null,r.a.createElement($n,{className:"ml-5"},0!==p.length?p.map((function(e){return r.a.createElement(zn,{purchaseHistory:e})})):r.a.createElement("div",null,r.a.createElement("h5",{className:"text-muted"},"Nothing to see here"))),r.a.createElement(ea,{className:"ml-2 p-2"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(ta,{variant:"danger",onClick:function(){s(),c(!0),setTimeout((function(){c(!1)}),5e3)},disabled:0===u.length},r.a.createElement($.b,null)," Clear History")),n&&r.a.createElement(d.a,{variant:"success",className:"mt-3"},"History Cleared"))))};var aa=function(){var e=localStorage.getItem("authToken")||null,t=localStorage.getItem("authEmail")||null,n=Object(a.useState)(qe),c=Object(l.a)(n,1)[0],i=Object(a.useState)(e),m=Object(l.a)(i,2),f=m[0],d=m[1],p=Object(a.useState)(t),b=Object(l.a)(p,2),h=b[0],E=b[1],j=Object(a.useState)([]),O=Object(l.a)(j,2),g=O[0],x=O[1],w=Object(a.useState)([]),y=Object(l.a)(w,2),C=y[0],N=y[1],S=Object(a.useState)([]),k=Object(l.a)(S,2),I=k[0],A=k[1],H=Object(a.useState)([]),P=Object(l.a)(H,2),_=P[0],T=P[1],B=Object(a.useState)(!1),F=Object(l.a)(B,2),W=F[0],R=F[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(h));if(e&&(x(Object(o.a)(e.cartItems)),N(Object(o.a)(e.wishlist)),A(Object(o.a)(e.history))),!f){var t=JSON.parse(sessionStorage.getItem("cartItems"));t&&x(Object(o.a)(t.cartItems))}}),[f]),Object(a.useEffect)((function(){if(f){var e=JSON.parse(localStorage.getItem(h));e.cartItems=Object(o.a)(g),e.wishlist=Object(o.a)(C),e.history=Object(o.a)(I),localStorage.setItem(h,JSON.stringify(e))}else{var t=JSON.stringify({cartItems:Object(o.a)(g)});sessionStorage.setItem("cartItems",t)}}),[g,C,I]),r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(v.Provider,{value:{token:f,logout:function(){localStorage.removeItem("authToken"),localStorage.removeItem("authEmail");var e=JSON.parse(localStorage.getItem(h));e.cartItems=[],localStorage.setItem(h,JSON.stringify(e)),d(null),E(null)},login:function(e,t){localStorage.setItem("authToken",e),localStorage.setItem("authEmail",t),E(t),d(e)}}},r.a.createElement(te.Provider,{value:{addToCart:function(e){x([e].concat(Object(o.a)(g)))},cartItems:g,products:c,search:function(e){R(!0);var t=qe.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));T(t)},searchedProducts:_,searchInitiated:W,removeFromCart:function(e){if(1!==g.length){var t=Object(o.a)(g);t.splice(t.indexOf(e),1),x(Object(o.a)(t))}else x([])},addToWishlist:function(e){C.includes(e)||N([e].concat(Object(o.a)(C)))},wishlist:C,removeFromWishlist:function(e){if(1!==C.length){var t=Object(o.a)(C);t.splice(t.indexOf(e),1),N(Object(o.a)(t))}else N([])},clearCart:function(){x([])},clearWishlist:function(){N([])},checkout:function(e){A([e].concat(Object(o.a)(I)))},history:I,clearHistory:function(){A([])}}},r.a.createElement(s.d,null,f&&r.a.createElement(s.a,{path:"/auth",to:"/home"}),r.a.createElement(s.a,{path:"/",to:"/home",exact:!0}),r.a.createElement(s.b,{exact:!0,path:"/auth",component:G}),r.a.createElement(s.b,{exact:!0,path:"/register",component:X}),r.a.createElement(s.b,{exact:!0,path:"/home",render:function(e){return r.a.createElement(Ee,null,r.a.createElement(Le,e))}}),r.a.createElement(s.b,{exact:!0,path:"/product/:productId",render:function(e){return r.a.createElement(Ee,null,r.a.createElement(gt,e))}}),r.a.createElement(s.b,{exact:!0,path:"/cart",render:function(e){return r.a.createElement(Ee,null,r.a.createElement($t,e))}}),r.a.createElement(s.b,{exact:!0,path:"/wishlist",render:function(e){return r.a.createElement(Ee,null,r.a.createElement(In,e))}}),r.a.createElement(s.b,{exact:!0,path:"/history",render:function(e){return r.a.createElement(Ee,null,r.a.createElement(na,e))}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(90);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(aa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.58abf08c.chunk.js.map