(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{75:function(e,t,n){e.exports=n(91)},80:function(e,t,n){},82:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(28),o=n.n(c),i=(n(80),n(22)),l=n.n(i),u=n(30),s=n(12),m=n(9),f=(n(82),n(20)),d=n(11),p=n(2),b=n(98),h=n(93),v=n(94),j=n(95),E=n(3),O=r.a.createContext({accessToken:null,refreshToken:null,login:function(e,t,n,a,r,c){},logout:function(){}});function g(){var e=Object(p.a)([""]);return g=function(){return e},e}function x(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);return x=function(){return e},e}function w(){var e=Object(p.a)(["\n    float: left;\n"]);return w=function(){return e},e}function y(){var e=Object(p.a)(["\n    line-height: 1.5;\n    vertical-align: center;\n"]);return y=function(){return e},e}function C(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 40%;\n\n    @media screen and (max-width: 768px){\n        width: 90%;\n    }\n"]);return C=function(){return e},e}var k=b.a.Text,N=b.a.Row,S=b.a.Label,G=Object(E.a)(b.a)(C()),I=Object(E.a)(k)(y()),T=Object(E.a)(S)(w()),_=Object(E.a)(N)(x()),A=Object(E.a)(f.b)(g()),H=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useContext)(O),c=Object(a.useState)(!1),o=Object(m.a)(c,2),i=o[0],s=o[1],f=Object(a.useState)(null),d=Object(m.a)(f,2),p=d[0],E=d[1],g=function(){var a=Object(u.a)(l.a.mark((function a(r){var c,o,i,u,m,f,d,p,b,h,v;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),s(!0),c=e.current.value,o=t.current.value,c||o){a.next=6;break}return a.abrupt("return");case 6:return i={email:c,password:o},a.next=9,fetch("https://secret-anchorage-57474.herokuapp.com/api/user/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 9:return u=a.sent,a.next=12,u.json();case 12:if(!(m=a.sent).error){a.next=17;break}return E(m.error.message),s(!1),a.abrupt("return");case 17:f=m.accessToken,d=m.refreshToken,p=m.userId,b=m.cart,h=m.wishlist,v=m.history,n.login(f,d,p,b,v,h);case 19:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(G,{onSubmit:g,className:"mx-auto border p-3 mt-5"},r.a.createElement("h3",null,"Login"),p&&r.a.createElement(h.a,{variant:"danger"},p),r.a.createElement(b.a.Group,{controlId:"formBasicEmail"},r.a.createElement(T,null,"Email"),r.a.createElement(b.a.Control,{type:"email",ref:e})),r.a.createElement(b.a.Group,{controlId:"formBasicPassword"},r.a.createElement(T,{className:""},"Password"),r.a.createElement(b.a.Control,{type:"password",ref:t})),r.a.createElement(_,{className:""},r.a.createElement(v.a,{variant:"primary",type:"submit"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{animation:"border",size:"sm",as:"span"}),"Signing in"):"Login"),r.a.createElement(I,{className:"text-muted align-middle"},"Dont have an account?",r.a.createElement(A,{to:"/register"}," Register here!"))))},P=n(66);function F(){var e=Object(p.a)([""]);return F=function(){return e},e}function B(){var e=Object(p.a)(["\n    line-height: 1.5;\n    vertical-align: center;\n"]);return B=function(){return e},e}function R(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);return R=function(){return e},e}function W(){var e=Object(p.a)(["\n    float: left;\n"]);return W=function(){return e},e}function D(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 35%;\n\n    @media screen and (max-width: 768px){\n        width: 90%;\n    }\n"]);return D=function(){return e},e}var M=b.a.Label,L=b.a.Text,q=b.a.Row,z=Object(E.a)(b.a)(D()),J=Object(E.a)(M)(W()),U=Object(E.a)(q)(R()),Y=Object(E.a)(L)(B()),V=Object(E.a)(f.b)(F()),X=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(m.a)(o,2),s=i[0],f=i[1],d=Object(a.useState)(!1),p=Object(m.a)(d,2),E=p[0],O=p[1],g=Object(a.useRef)(),x=Object(a.useRef)(),w=Object(a.useRef)(),y=Object(a.useRef)(),C=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r,o,i,u,s,d,p,b,h,v,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f(!0),n=g.current.value,a=x.current.value,r=w.current.value,o=y.current.value,n&&a&&r&&o){e.next=8;break}return e.abrupt("return");case 8:if(r===o){e.next=11;break}return c("Passwords do not match"),e.abrupt("return");case 11:return i=n.split(" "),u=Object(P.a)(i),s=u[0],d=u.slice(1),p=Object(m.a)(d,1),b=p[0],h={firstName:s,lastName:b,email:a,password:r},e.next=16,fetch("https://secret-anchorage-57474.herokuapp.com/api/user/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});case 16:return v=e.sent,e.next=19,v.json();case 19:if(!(j=e.sent).error){e.next=24;break}return c(j.error.message),f(!1),e.abrupt("return");case 24:O(!0),f(!1),c(null);case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(z,{className:"mx-auto border p-4 mt-5",onSubmit:C},r.a.createElement("h3",null,"Sign Up!"),n&&r.a.createElement(h.a,{variant:"danger"},n),E&&r.a.createElement(h.a,{variant:"success"},"User added! You can now login"),r.a.createElement(b.a.Group,{controlId:"formBasicEmail"},r.a.createElement(J,null,"Name"),r.a.createElement(b.a.Control,{type:"text",ref:g})),r.a.createElement(b.a.Group,{controlId:"formBasicEmail"},r.a.createElement(J,null,"Email"),r.a.createElement(b.a.Control,{type:"email",ref:x})),r.a.createElement(b.a.Group,{controlId:"formBasicEmail"},r.a.createElement(J,null,"Password"),r.a.createElement(b.a.Control,{type:"password",ref:w})),r.a.createElement(b.a.Group,{controlId:"formBasicPassword"},r.a.createElement(J,{className:""},"Confirm Password"),r.a.createElement(b.a.Control,{type:"password",ref:y})),r.a.createElement(U,null,r.a.createElement(v.a,{variant:"primary",type:"submit"},s?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{as:"span",size:"sm",animation:"border"}),"Adding user"):"Register"),r.a.createElement(Y,{className:"text-muted align-middle"},"Already have an account?",r.a.createElement(V,{to:"/auth"}," Log in!"))))},K=n(62),Q=n(100),$=n(99),Z=n(36),ee=n(15),te=r.a.createContext({products:[],cartItems:[],wishlist:[],addToCart:function(e){},removeFromCart:function(e){},addToWishlist:function(e){},removeFromWishlist:function(e){},searchedProducts:[],searchInitiated:!1,search:function(e){},clearCart:function(){},clearWishlist:function(){},checkout:function(e){},history:[],clearHistory:function(){}});function ne(){var e=Object(p.a)(["\n    display: inline-block;\n    width: 1.5rem;\n    height: 1.55rem;\n    text-align: center;\n"]);return ne=function(){return e},e}function ae(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    margin: 0 auto;\n\n    @media screen and (max-width: 768px){\n        margin: 1rem 0;\n    }\n"]);return ae=function(){return e},e}function re(){var e=Object(p.a)(["\n    width: 90% !important;\n    margin-right: 0.8rem;\n\n    @media screen and (max-width: 768px){\n        width: 85% !important;\n    }\n"]);return re=function(){return e},e}function ce(){var e=Object(p.a)(["\n    margin: 0 auto;\n    width: 60%;\n\n    @media screen and (max-width: 768px){\n        margin: 0.8rem 0;\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n    }\n"]);return ce=function(){return e},e}function oe(){var e=Object(p.a)(["\n    text-decoration: none !important;\n    color: lightgray;\n"]);return oe=function(){return e},e}var ie=Object(E.a)(f.b)(oe()),le=Object(E.a)(b.a)(ce()),ue=Object(E.a)(K.a)(re()),se=E.a.div(ae()),me=E.a.span(ne()),fe=function(){var e=Object(a.useContext)(O),t=e.accessToken,n=e.logout,c=Object(a.useContext)(te),o=c.cartItems,i=c.search,l=Object(a.useRef)();return r.a.createElement(Q.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top"},r.a.createElement(Q.a.Brand,{href:"#home"},"Buy Stuff From Here !"),r.a.createElement(Q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(Q.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement($.a,{className:"mr-auto"},r.a.createElement(ie,{to:"/home"},"Home")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{className:"mr-auto"},r.a.createElement(ie,{to:"/wishlist"},"Wishlist")),r.a.createElement($.a,null,r.a.createElement(ie,{to:"/history"},"Purchase history"))),r.a.createElement(le,{inline:!0,className:"",onSubmit:function(e){return function(e){e.preventDefault();var t=l.current.value;i(t)}(e)}},r.a.createElement(ue,{type:"text",placeholder:"Search products",className:"",onChange:function(){var e=l.current.value;""===e&&i(e)},ref:l}),r.a.createElement(v.a,{variant:"outline-info",type:"submit"},r.a.createElement(Z.a,null))),r.a.createElement(se,null,r.a.createElement($.a,{className:"mr-auto"},r.a.createElement(ie,{to:"/cart"},r.a.createElement(ee.d,{size:"1.5rem"}),r.a.createElement(me,{className:"rounded-circle bg-danger"},o.length)))),r.a.createElement($.a,null,t&&r.a.createElement(v.a,{className:"ml-2",onClick:function(){n()}},"Logout"),!t&&r.a.createElement(ie,{className:"btn btn-primary",to:"/auth"},"Login"))))},de=n(96);function pe(){var e=Object(p.a)(["\n    display: flex;\n    width: 100%;\n    margin-top: 5rem;\n"]);return pe=function(){return e},e}function be(){var e=Object(p.a)(["\n    padding: 0;\n"]);return be=function(){return e},e}var he=Object(E.a)(de.a)(be()),ve=E.a.div(pe()),je=function(e){var t=e.children;return r.a.createElement(he,{fluid:!0},r.a.createElement(fe,null),r.a.createElement(ve,{className:""},t))},Ee=n(101);function Oe(){var e=Object(p.a)(["\n    font-weight: light;\n"]);return Oe=function(){return e},e}function ge(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n"]);return ge=function(){return e},e}function xe(){var e=Object(p.a)(["\n    font-weight: lighter;\n"]);return xe=function(){return e},e}function we(){var e=Object(p.a)(["\n    font-weight: bold;\n"]);return we=function(){return e},e}function ye(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"]);return ye=function(){return e},e}function Ce(){var e=Object(p.a)(["\n    height: 270px;  \n\n    @media screen and (max-width: 768px){\n        height: 300px;\n    }\n"]);return Ce=function(){return e},e}function ke(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    width: 17%;\n    margin: 1rem 1rem;\n    box-sizing: border-box;\n    transition: all 0.2s;\n\n\n    @media screen and (max-width: 768px){\n        width: 80%;\n        height: 10% !important;\n        margin: 0.5rem auto;\n    }\n\n    &:hover{\n        transform: scale(1.05, 1.05)\n    }\n"]);return ke=function(){return e},e}var Ne=Ee.a.Img,Se=Object(E.a)(Ee.a)(ke()),Ge=Object(E.a)(Ne)(Ce()),Ie=E.a.div(ye()),Te=E.a.span(we()),_e=E.a.span(xe()),Ae=E.a.div(ge()),He=E.a.span(Oe()),Pe=function(e){var t=e.product,n=Object(a.useContext)(te),c=n.addToCart,o=n.cartItems,i=n.removeFromCart,l=n.addToWishlist,u=Object(a.useContext)(O).accessToken,s=Object(d.g)();return r.a.createElement(Se,{className:""},r.a.createElement(f.b,{to:"/product/".concat(t._id),style:{color:"black",textDecoration:"none"}},r.a.createElement(Ge,{src:t["image "],variant:"top"})),r.a.createElement(Ee.a.Body,null,r.a.createElement(Ie,null,r.a.createElement(Te,null,t.name),r.a.createElement(_e,null,r.a.createElement("span",{className:"mr-1"},t.currency),t.price),r.a.createElement(He,{className:t.inStock?"text-success":"text-danger"},t.inStock?"In stock":"Out of stock")),r.a.createElement(Ae,null,r.a.createElement(v.a,{variant:"primary",size:"sm",title:"Add to cart",onClick:function(){return e=t._id,void(u?c(e):s.push("/auth"));var e},className:"mr-1"},r.a.createElement(ee.b,null)),r.a.createElement(v.a,{variant:"danger",size:"sm",title:"Remove from cart",className:"mr-1",onClick:function(){return e=t._id,void i(e);var e},disabled:!o.includes(t._id)},r.a.createElement(ee.c,null)),u&&r.a.createElement(v.a,{variant:"secondary",size:"sm",onClick:function(){return e=t._id,void l(e);var e}},r.a.createElement(ee.a,null),r.a.createElement("span",{className:"ml-1"},"Add to wishlist")))))};function Fe(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow:row wrap;\n    justify-content: center;\n    width: 100%;\n\n    @media screen and (max-width: 768px){\n        flex-flow:column nowrap;\n        justify-content: center;\n    }\n"]);return Fe=function(){return e},e}function Be(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow:row wrap;\n    width: 100%;\n"]);return Be=function(){return e},e}var Re=E.a.div(Be()),We=E.a.div(Fe()),De=function(e){var t=Object(a.useContext)(te),n=t.products,c=t.searchedProducts;return r.a.createElement(Re,null,r.a.createElement("h2",{className:"ml-5 font-weight-bolder"},"Browse All Products"),r.a.createElement(We,{className:""},0!==c.length?c.map((function(t,n){return r.a.createElement(Pe,Object.assign({key:n,product:t},e))})):n.map((function(t,n){return r.a.createElement(Pe,Object.assign({key:n,product:t},e))}))))};function Me(){var e=Object(p.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n"]);return Me=function(){return e},e}var Le=E.a.div(Me()),qe=function(e){return r.a.createElement(Le,null,r.a.createElement(De,e))},ze=[{id:"1234566",name:"Apple iPhone 11",image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022219953",price:2e3,category:"Computer electronics",inStock:!0,description:["Apple device","Great smartphone","Runs iOS","Great build quality"],condition:"New",currency:"GHC"},{id:"1234567",name:"Samsung Galaxy S20",image:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg",price:2500,category:"Computer electronics",inStock:!0,description:["Samsung Device","Runs Android","Great build quality","Great performance"],condition:"New",currency:"GHC"},{id:"1234568",name:"Apple iPhone 11 Pro Max",image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188",price:4e3,category:"Computer electronics",inStock:!0,description:["Apple device","Great smartphone","Runs iOS","Great build quality","Great Camera"],condition:"New",currency:"GHC"},{id:"1234569",name:"Microsoft Surface Duo",image:"https://cdn.vox-cdn.com/thumbor/bX8IzXC5O0uKPCLwIYBPnnXi_bg=/0x0:6000x6000/1200x0/filters:focal(0x0:6000x6000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21729329/Feature_006_Text.jpg",price:5e3,category:"Computer electronics",inStock:!0,description:["Microsoft Surface device","Dual Screen","Runs Android","Good for productivity"],condition:"New",currency:"GHC"},{id:"1234570",name:"Microsoft Surface Headphones 2",image:"https://cdn.vox-cdn.com/thumbor/VjbdHgfj-61DunbYKXVF7RR_jEQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19993344/C0E84DFF_8EB1_403C_9CA6_B8B7FF1B8EEF.jpeg",price:1500,category:"Noise Cancelling Headphones",inStock:!0,description:["Microsoft Surface device","Noise cancelling headphones","Great build quality","Great sound"],condition:"New",currency:"GHC"},{id:"1234571",name:"Sony WH-1000XM4",image:"https://cdn0.vox-cdn.com/hermano/verge/product/image/9373/image__17_.png",price:1800,category:"Noise Cancelling Headphones",inStock:!0,description:["Sony device","Best active noise cancellation","Long-lasting battery life","Great sound"],condition:"New",currency:"GHC"},{id:"1234572",name:"Apple Airpods Pro",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634652000",price:1e3,category:"Noise cancelling earbuds",inStock:!0,description:["Apple device","Active noise cancellation","Great sound","Great fit"],condition:"New",currency:"GHC"},{id:"1234573",name:"Apple Watch Series 5",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWUR2_VW_PF+watch-40-alum-gold-cell-5s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1566450019949,1569365646259",price:2e3,category:"Computer electronics",inStock:!0,description:["Apple device","Great screen","Great fit","Great battery life"],condition:"New",currency:"GHC"},{id:"1234574",name:'Apple Macbook Pro 16"',image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825197207",price:11120,category:"Computer electronics",inStock:!0,description:["Apple device","Great build","Great performance","Great typing experience"],condition:"New",currency:"GHC"},{id:"1234575",name:"Microsoft Surface Book 3",image:"https://cdn.shopify.com/s/files/1/0036/4806/1509/products/m100001532_29f95740-7a5e-4aae-8845-2c0911ff5ba0_1000x1000@2x.jpg?v=1588852855",price:1e4,category:"Computer electronics",inStock:!0,description:["Microsoft Surface device","Detachable screen","Great build quality","Great typing experience"],condition:"New",currency:"GHC"}];function Je(){var e=Object(p.a)(["\n    margin: 0.5rem 0;\n"]);return Je=function(){return e},e}function Ue(){var e=Object(p.a)(["\n    width: 60%;\n    display: flex;\n    flex-flow: column wrap;\n"]);return Ue=function(){return e},e}function Ye(){var e=Object(p.a)([""]);return Ye=function(){return e},e}function Ve(){var e=Object(p.a)([""]);return Ve=function(){return e},e}function Xe(){var e=Object(p.a)([""]);return Xe=function(){return e},e}function Ke(){var e=Object(p.a)([""]);return Ke=function(){return e},e}function Qe(){var e=Object(p.a)([""]);return Qe=function(){return e},e}function $e(){var e=Object(p.a)([""]);return $e=function(){return e},e}function Ze(){var e=Object(p.a)([""]);return Ze=function(){return e},e}function et(){var e=Object(p.a)([""]);return et=function(){return e},e}function tt(){var e=Object(p.a)(["\n    @media screen and (max-width: 768px){\n        width: 100%;\n    }\n"]);return tt=function(){return e},e}function nt(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    width: 80%;\n\n    @media screen and (max-width: 768px){\n        flex-flow: column wrap\n    }\n"]);return nt=function(){return e},e}function at(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n"]);return at=function(){return e},e}var rt=Ee.a.Img,ct=(Ee.a.Text,Ee.a.Subtitle),ot=Ee.a.Title,it=Ee.a.Body,lt=E.a.div(at()),ut=Object(E.a)(Ee.a)(nt()),st=Object(E.a)(rt)(tt()),mt=Object(E.a)(ot)(et()),ft=E.a.span(Ze()),dt=E.a.span($e()),pt=E.a.div(Qe()),bt=E.a.ul(Ke()),ht=E.a.li(Xe()),vt=E.a.span(Ve()),jt=E.a.span(Ye()),Et=E.a.div(Ue()),Ot=Object(E.a)(v.a)(Je()),gt=function(){var e=Object(d.h)().productId,t=Object(a.useContext)(te),n=t.addToCart,c=t.cartItems,o=t.removeFromCart,i=t.addToWishlist,l=Object(a.useContext)(O).token,u=Object(d.g)(),s=ze.filter((function(t){return t.id===e})),f=Object(m.a)(s,1)[0];return r.a.createElement(lt,null,r.a.createElement("h2",{className:"ml-5 font-weight-bolder"},"Product Details"),r.a.createElement(ut,null,r.a.createElement(st,{src:f.image,variant:"left",width:"600"}),r.a.createElement(it,{className:"d-flex flex-column"},r.a.createElement(mt,{className:"font-weight-bolder"},f.name),r.a.createElement(ft,null,r.a.createElement("span",null,f.currency),f.price),r.a.createElement(dt,null,f.category),r.a.createElement(jt,null,r.a.createElement("span",null,"Condition: "),f.condition),r.a.createElement(vt,{className:f.inStock?"text-success":"text-danger"},f.inStock?"In stock":"Out of stock"),r.a.createElement(pt,{className:"mt-3"},r.a.createElement(ct,{className:"font-weight-bolder"},"About this product"),r.a.createElement(bt,null,f.description.map((function(e,t){return r.a.createElement(ht,{key:t},e)})))),r.a.createElement(Et,null,r.a.createElement(Ot,{variant:"primary",onClick:function(){return function(e){l?n(e):u.push("/auth")}(f.id)}},r.a.createElement(ee.b,null)," Add to Cart"),r.a.createElement(Ot,{variant:"danger",onClick:function(){return function(e){o(e)}(f.id)},disabled:!c.includes(f.id)},r.a.createElement(ee.c,null)," Remove from Cart"),l&&r.a.createElement(Ot,{variant:"secondary",onClick:function(){return function(e){i(e)}(f.id)}},r.a.createElement(ee.a,null)," Add to wishlist")))))};function xt(){var e=Object(p.a)([""]);return xt=function(){return e},e}function wt(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n"]);return wt=function(){return e},e}function yt(){var e=Object(p.a)([""]);return yt=function(){return e},e}function Ct(){var e=Object(p.a)([""]);return Ct=function(){return e},e}function kt(){var e=Object(p.a)([""]);return kt=function(){return e},e}function Nt(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);return Nt=function(){return e},e}function St(){var e=Object(p.a)([""]);return St=function(){return e},e}function Gt(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n"]);return Gt=function(){return e},e}var It=Ee.a.Img,Tt=Object(E.a)(Ee.a)(Gt()),_t=Object(E.a)(It)(St()),At=E.a.div(Nt()),Ht=E.a.span(kt()),Pt=E.a.span(Ct()),Ft=E.a.span(yt()),Bt=E.a.div(wt()),Rt=Object(E.a)(v.a)(xt()),Wt=function(e){var t=e.product,n=Object(a.useContext)(te).removeFromCart;return r.a.createElement(Tt,{className:"my-2"},r.a.createElement(_t,{src:t.image,variant:"left",width:"180",height:"180"}),r.a.createElement(Ee.a.Body,null,r.a.createElement(At,{className:""},r.a.createElement(Ee.a.Title,null,r.a.createElement(Ht,null,t.name)),r.a.createElement(Pt,{className:t.inStock?"text-success":"text-danger"},t.inStock?"In stock":"Out of stock"),r.a.createElement(Ft,null,r.a.createElement("span",null,"Unit Price: GHC "),t.price),r.a.createElement(Bt,{className:""},r.a.createElement(Rt,{variant:"danger",onClick:function(){return e=t.id,void n(e);var e}},"Remove")))))},Dt=n(97);function Mt(){var e=Object(p.a)([""]);return Mt=function(){return e},e}function Lt(){var e=Object(p.a)([""]);return Lt=function(){return e},e}function qt(){var e=Object(p.a)(["\n    width: 20%;\n\n    @media screen and (max-width: 768px){\n        width: 100%;\n    }\n"]);return qt=function(){return e},e}function zt(){var e=Object(p.a)(["\n    width: 70%;\n    justify-content: center;\n\n    @media screen and (max-width: 768px){\n        width: 80%\n    }\n"]);return zt=function(){return e},e}function Jt(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n\n    @media screen and (max-width: 768px){\n        flex-flow: column wrap;\n    }\n"]);return Jt=function(){return e},e}function Ut(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    width: 100%;\n    justify-content: center;\n"]);return Ut=function(){return e},e}var Yt=E.a.div(Ut()),Vt=E.a.div(Jt()),Xt=E.a.div(zt()),Kt=E.a.div(qt()),Qt=Object(E.a)(v.a)(Lt()),$t=Object(E.a)(v.a)(Mt()),Zt=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),i=Object(m.a)(o,2),l=i[0],u=i[1],f=Object(a.useState)(!1),d=Object(m.a)(f,2),p=d[0],j=d[1],E=Object(a.useState)(!1),O=Object(m.a)(E,2),g=O[0],x=O[1],w=Object(a.useRef)(),y=function(){return x(!1)},C=Object(a.useContext)(te),k=C.cartItems,N=C.products,S=C.clearCart,G=C.checkout;Object(a.useEffect)((function(){var e=k.map((function(e){return N.filter((function(t){return e===t.id}))})).map((function(e){return e[0]}));c(Object(s.a)(e));var t=e.reduce((function(e,t){return e+t.price}),0);u(t)}),[k]);var I=function(){var e=w.current.value,t={date:new Date,items:Object(s.a)(n),cardDetails:e,totalAmount:l};G(t),j(!0),x(!1),setTimeout((function(){j(!1),S()}),5e3)};return r.a.createElement(Yt,{className:""},r.a.createElement("h2",{className:"ml-5 font-weight-bolder"},"Cart Items"),r.a.createElement(Vt,null,r.a.createElement(Xt,{className:"ml-5"},0!==n.length?n.map((function(e,t){return r.a.createElement(Wt,{key:t,product:e})})):r.a.createElement("div",null,r.a.createElement("h5",{className:"text-muted"},"Nothing to see here"))),r.a.createElement(Kt,{className:"ml-2 p-2"},r.a.createElement("div",null,"Total Amount: GHC ",l),r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement(Qt,{className:"mr-2",onClick:function(){return x(!0)},disabled:0===n.length},r.a.createElement(ee.d,null)," Checkout"),r.a.createElement($t,{variant:"danger",disabled:0===n.length,onClick:function(){S()}},r.a.createElement(ee.c,null)," Clear Cart")),p&&r.a.createElement(h.a,{variant:"success",className:"mt-3"},"Items Checked out")),r.a.createElement(b.a,{onSubmit:I},r.a.createElement(Dt.a,{show:g,onHide:y},r.a.createElement(Dt.a.Header,{closeButton:!0},r.a.createElement(Dt.a.Title,null,"Checking out")),r.a.createElement(Dt.a.Body,null,r.a.createElement(b.a.Label,null,"Enter Card Details"),r.a.createElement(b.a.Control,{type:"text",ref:w})),r.a.createElement(Dt.a.Footer,null,r.a.createElement(v.a,{variant:"secondary",onClick:y},"Close"),r.a.createElement(v.a,{variant:"primary",onClick:I},"Checkout"))))))};function en(){var e=Object(p.a)([""]);return en=function(){return e},e}function tn(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n"]);return tn=function(){return e},e}function nn(){var e=Object(p.a)([""]);return nn=function(){return e},e}function an(){var e=Object(p.a)([""]);return an=function(){return e},e}function rn(){var e=Object(p.a)([""]);return rn=function(){return e},e}function cn(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);return cn=function(){return e},e}function on(){var e=Object(p.a)([""]);return on=function(){return e},e}function ln(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n"]);return ln=function(){return e},e}var un=Ee.a.Img,sn=Object(E.a)(Ee.a)(ln()),mn=Object(E.a)(un)(on()),fn=E.a.div(cn()),dn=E.a.span(rn()),pn=E.a.span(an()),bn=E.a.span(nn()),hn=E.a.div(tn()),vn=Object(E.a)(v.a)(en()),jn=function(e){var t=e.product,n=Object(a.useContext)(te).removeFromWishlist;return r.a.createElement(sn,{className:"my-2"},r.a.createElement(mn,{src:t.image,variant:"left",width:"180",height:"180"}),r.a.createElement(Ee.a.Body,null,r.a.createElement(fn,{className:""},r.a.createElement(Ee.a.Title,null,r.a.createElement(dn,null,t.name)),r.a.createElement(pn,{className:t.inStock?"text-success":"text-danger"},t.inStock?"In stock":"Out of stock"),r.a.createElement(bn,null,r.a.createElement("span",null,"Unit Price: GHC "),t.price),r.a.createElement(hn,{className:""},r.a.createElement(vn,{variant:"danger",onClick:function(){return e=t.id,void n(e);var e}},"Remove")))))};function En(){var e=Object(p.a)([""]);return En=function(){return e},e}function On(){var e=Object(p.a)(["\n    width: 20%;\n\n    @media screen and (max-width: 768px){\n        width: 90%;\n    }\n"]);return On=function(){return e},e}function gn(){var e=Object(p.a)(["\n    width: 70%;\n    justify-content: center;\n\n    @media screen and (max-width: 768px){\n        width: 80%\n    }\n"]);return gn=function(){return e},e}function xn(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n\n    @media screen and (max-width: 768px){\n        flex-flow: column wrap;\n    }\n"]);return xn=function(){return e},e}function wn(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    width: 100%;\n    justify-content: center;\n"]);return wn=function(){return e},e}var yn=E.a.div(wn()),Cn=E.a.div(xn()),kn=E.a.div(gn()),Nn=E.a.div(On()),Sn=Object(E.a)(v.a)(En()),Gn=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(m.a)(o,2),l=i[0],u=i[1],f=Object(a.useContext)(te),d=f.wishlist,p=f.products,b=f.clearWishlist;Object(a.useEffect)((function(){var e=d.map((function(e){return p.filter((function(t){return e===t.id}))})).map((function(e){return e[0]}));c(Object(s.a)(e))}),[d]);return r.a.createElement(yn,{className:""},r.a.createElement("h2",{className:"ml-5 font-weight-bolder"},"Your Wishlist"),r.a.createElement(Cn,null,r.a.createElement(kn,{className:"ml-5"},0!==n.length?n.map((function(e,t){return r.a.createElement(jn,{key:t,product:e})})):r.a.createElement("div",null,r.a.createElement("h5",{className:"text-muted"},"Nothing to see here"))),r.a.createElement(Nn,{className:"ml-2 p-2"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(Sn,{variant:"danger",disabled:0===n.length,onClick:function(){return b(),u(!0),void setTimeout((function(){u(!1)}),5e3)}},r.a.createElement(Z.b,null)," Clear Wishlist")),l&&r.a.createElement(h.a,{variant:"success",className:"mt-3"},"Wishlist Cleared"))))},In=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(e),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],r=["January","February","March","April","May","June","July","August","September","October","November","December"],c=n.getDay(),o=n.getDate(),i=n.getMonth(),l=n.getFullYear();return t?"".concat(a[c],", ").concat(r[i]," ").concat(o,", ").concat(l):"".concat(a[c],", ").concat(r[i]," ").concat(o)};function Tn(){var e=Object(p.a)([""]);return Tn=function(){return e},e}function _n(){var e=Object(p.a)([""]);return _n=function(){return e},e}function An(){var e=Object(p.a)([""]);return An=function(){return e},e}function Hn(){var e=Object(p.a)([""]);return Hn=function(){return e},e}function Pn(){var e=Object(p.a)([""]);return Pn=function(){return e},e}function Fn(){var e=Object(p.a)([""]);return Fn=function(){return e},e}function Bn(){var e=Object(p.a)(["\n    width: 100%;\n"]);return Bn=function(){return e},e}var Rn=Object(E.a)(Ee.a)(Bn()),Wn=E.a.div(Fn()),Dn=E.a.div(Pn()),Mn=E.a.div(Hn()),Ln=E.a.ul(An()),qn=E.a.li(_n()),zn=E.a.div(Tn()),Jn=function(e){var t=e.purchaseHistory;return r.a.createElement(Rn,{className:"my-2"},r.a.createElement(Ee.a.Body,null,r.a.createElement(Wn,null,r.a.createElement("span",{className:"font-weight-bolder"},"Purchase Date: "),In(t.date)),r.a.createElement(Dn,null,r.a.createElement("span",{className:"font-weight-bolder"},"Card Used: "),t.cardDetails),r.a.createElement(Mn,null,r.a.createElement("span",{className:"font-weight-bolder"},"Items Purchased"),r.a.createElement(Ln,null,t.items.map((function(e,t){return r.a.createElement(qn,{key:t},e.name)})))),r.a.createElement(zn,null,r.a.createElement("span",{className:"font-weight-bolder"},"Total Amount: GHC "),t.totalAmount)))};function Un(){var e=Object(p.a)([""]);return Un=function(){return e},e}function Yn(){var e=Object(p.a)(["\n    width: 20%;\n\n    @media screen and (max-width: 768px){\n        width: 90%;\n    }\n"]);return Yn=function(){return e},e}function Vn(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    width: 70%;\n"]);return Vn=function(){return e},e}function Xn(){var e=Object(p.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n\n    @media screen and (max-width: 768px){\n        flex-flow: column nowrap;\n    }\n"]);return Xn=function(){return e},e}function Kn(){var e=Object(p.a)(["\n    display: flex;\n    width: 100%;\n    flex-flow: column nowrap;\n"]);return Kn=function(){return e},e}var Qn=E.a.div(Kn()),$n=E.a.div(Xn()),Zn=E.a.div(Vn()),ea=E.a.div(Yn()),ta=Object(E.a)(v.a)(Un()),na=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(te),i=o.history,l=o.clearHistory,u=Object(a.useState)([]),f=Object(m.a)(u,2),d=f[0],p=f[1];Object(a.useEffect)((function(){p(Object(s.a)(i))}),[i]);return r.a.createElement(Qn,null,r.a.createElement("h2",{className:"ml-5 font-weight-bolder"},"Your Purchase History"),r.a.createElement($n,null,r.a.createElement(Zn,{className:"ml-5"},0!==d.length?d.map((function(e){return r.a.createElement(Jn,{purchaseHistory:e})})):r.a.createElement("div",null,r.a.createElement("h5",{className:"text-muted"},"Nothing to see here"))),r.a.createElement(ea,{className:"ml-2 p-2"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(ta,{variant:"danger",onClick:function(){l(),c(!0),setTimeout((function(){c(!1)}),5e3)},disabled:0===i.length},r.a.createElement(Z.b,null)," Clear History")),n&&r.a.createElement(h.a,{variant:"success",className:"mt-3"},"History Cleared"))))};var aa=function(){var e=localStorage.getItem("accessToken")||null,t=localStorage.getItem("refreshToken")||null,n=Object(a.useState)([]),c=Object(m.a)(n,2),o=c[0],i=c[1],p=Object(a.useState)(e),b=Object(m.a)(p,2),h=b[0],v=b[1],j=Object(a.useState)(t),E=Object(m.a)(j,2),g=E[0],x=E[1],w=Object(a.useState)([]),y=Object(m.a)(w,2),C=y[0],k=y[1],N=Object(a.useState)([]),S=Object(m.a)(N,2),G=S[0],I=S[1],T=Object(a.useState)([]),_=Object(m.a)(T,2),A=_[0],P=_[1],F=Object(a.useState)([]),B=Object(m.a)(F,2),R=B[0],W=B[1],D=Object(a.useState)(!1),M=Object(m.a)(D,2),L=M[0],q=M[1],z=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://secret-anchorage-57474.herokuapp.com/api/product/all");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.products,console.log(a[0]["image "]),i(Object(s.a)(a)),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){z()}),[]),Object(a.useEffect)((function(){if(!h){var e=JSON.parse(sessionStorage.getItem("cartItems"));e&&k(Object(s.a)(e.cartItems))}}),[h]);var J=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://secret-anchorage-57474.herokuapp.com/api/cart/add/".concat(t));case 3:e.sent,Response.json(),k([t].concat(Object(s.a)(C))),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(h);else{var e=JSON.stringify({cartItems:Object(s.a)(C)});sessionStorage.setItem("cartItems",e)}}),[C,G,A]),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(O.Provider,{value:{accessToken:h,refreshToken:g,logout:function(){localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),v(null)},login:function(e,t,n,a,r,c){localStorage.setItem("accessToken",e),localStorage.setItem("refreshToken",t),v(e),x(t),k(Object(s.a)(a)),P(Object(s.a)(r)),I(Object(s.a)(c))}}},r.a.createElement(te.Provider,{value:{addToCart:J,cartItems:C,products:o,search:function(e){q(!0);var t=ze.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));W(t)},searchedProducts:R,searchInitiated:L,removeFromCart:function(e){if(1!==C.length){var t=Object(s.a)(C);t.splice(t.indexOf(e),1),k(Object(s.a)(t))}else k([])},addToWishlist:function(e){G.includes(e)||I([e].concat(Object(s.a)(G)))},wishlist:G,removeFromWishlist:function(e){if(1!==G.length){var t=Object(s.a)(G);t.splice(t.indexOf(e),1),I(Object(s.a)(t))}else I([])},clearCart:function(){k([])},clearWishlist:function(){I([])},checkout:function(e){P([e].concat(Object(s.a)(A)))},history:A,clearHistory:function(){P([])}}},r.a.createElement(d.d,null,h&&r.a.createElement(d.a,{path:"/auth",to:"/home"}),r.a.createElement(d.a,{path:"/",to:"/home",exact:!0}),r.a.createElement(d.b,{exact:!0,path:"/auth",component:H}),r.a.createElement(d.b,{exact:!0,path:"/register",component:X}),r.a.createElement(d.b,{exact:!0,path:"/home",render:function(e){return r.a.createElement(je,null,r.a.createElement(qe,e))}}),r.a.createElement(d.b,{exact:!0,path:"/product/:productId",render:function(e){return r.a.createElement(je,null,r.a.createElement(gt,e))}}),r.a.createElement(d.b,{exact:!0,path:"/cart",render:function(e){return r.a.createElement(je,null,r.a.createElement(Zt,e))}}),r.a.createElement(d.b,{exact:!0,path:"/wishlist",render:function(e){return r.a.createElement(je,null,r.a.createElement(Gn,e))}}),r.a.createElement(d.b,{exact:!0,path:"/history",render:function(e){return r.a.createElement(je,null,r.a.createElement(na,e))}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(90);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(aa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.16cde36a.chunk.js.map