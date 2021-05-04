/*
	krpano Embedding Script
	krpano 1.18.2 (build 2014-12-18)
*/
/* krpano 1.16.6 gyro plugin (build 2013-08-09) 
for devices with Gyro sensor (iPhone4 and iPad2 with iOS4.2+)
by Aldo Hoeben / fieldOfView.com
contributions by 
        Sjeiti / ronvalstar.nl
        Klaus / krpano.com
        
http://fieldofview.github.com/krpano_fovplugins/gyro/plugin.html
This software can be used free of charge and the source code is available under a Creative Commons Attribution license:
        http://creativecommons.org/licenses/by/3.0/     
*/
var krpanoplugin=function(){function z(){E=!1;s=null;void 0===k?l=!0:k&&!l?(window.addEventListener("deviceorientation",J,!0),c.control.layer.addEventListener("touchstart",K,!0),c.control.layer.addEventListener("touchend",A,!0),c.control.layer.addEventListener("touchcancel",A,!0),l=!0,B=-L(),u=p=g=0,n=c.view.camroll):l=!1}function C(){k&&l&&(window.removeEventListener("deviceorientation",J,!0),c.control.layer.removeEventListener("touchstart",K),c.control.layer.removeEventListener("touchend",A),c.control.layer.removeEventListener("touchcancel",
A));D&&c.call("tween(view.camroll,0)");l=!1}function M(){l?C():z()}function F(){window.removeEventListener("deviceorientation",F,!1);c.device.realDesktop||(k=!0,l&&(l=!1,z()),null!=e.onavailable&&c.call(e.onavailable,e))}function K(){G=!0}function A(){G=!1}function L(){var b=t?top.orientation:window.orientation;isNaN(b)&&(b=screen.width>screen.height,b=c.device.mobile?b?90:0:b?0:90);return b}function J(b){if(!G&&l){var e=L(),m,a=b.alpha*v,h=b.beta*v,d=b.gamma*v,j;j=Math.cos(a);var a=Math.sin(a),f=
Math.cos(h),h=Math.sin(h),q=Math.cos(d),d=Math.sin(d),a=[a*d-j*h*q,-j*f,j*h*d+a*q,f*q,-h,-f*d,a*h*q+j*d,a*f,-a*h*d+j*q];0.9999<a[3]?(j=Math.atan2(a[2],a[8]),a=Math.PI/2,d=0):-0.9999>a[3]?(j=Math.atan2(a[2],a[8]),a=-Math.PI/2,d=0):(j=Math.atan2(-a[6],a[0]),d=Math.atan2(-a[5],a[4]),a=Math.asin(a[3]));m={yaw:j,pitch:a,roll:d};var d=w(m.yaw/v),a=m.pitch/v,f=d,h=c.view.hlookat,q=c.view.vlookat,k=c.view.camroll,t=h-p;j=q-u;if(E){D&&(n=w(180+Number(e)-m.roll/v));if(70<Math.abs(a)){f=b.alpha;switch(e){case 0:0<
a&&(f+=180);break;case 90:f+=90;break;case -90:f+=-90;break;case 180:0>a&&(f+=180)}f=w(f);180<Math.abs(f-d)&&(f+=f<d?360:-360);b=Math.min(1,(Math.abs(a)-70)/10);d=d*(1-b)+f*b;n*=1-b}B+=t;g+=j;90<Math.abs(a+g)&&(g=0<a+g?90-a:-90-a);p=w(-d-180+B);u=Math.max(Math.min(a+g,90),-90);180<Math.abs(p-h)&&(h+=p>h?360:-360);p=(1-r)*p+r*h;u=(1-r)*u+r*q;180<Math.abs(n-k)&&(k+=n>k?360:-360);n=(1-r)*n+r*k;b=w(p);e=u;d=w(n);isNaN(b)||(c.view.hlookat=b);isNaN(e)||(c.view.vlookat=e);isNaN(d)||(c.view.camroll=d);0!=
g&&0<y&&(0==j?1==y?x=g=0:(x=1-(1-x)*c.control.touchfriction,g*=1-Math.pow(y,2)*x,0.1>Math.abs(g)&&(x=g=0)):x=0)}else if(null==s)s=m;else if(m.yaw!=s.yaw||m.pitch!=s.pitch||m.roll!=s.roll)s=null,E=!0,H&&(g=-a)}}function w(b){b%=360;return 180>=b?b:b-360}function I(b){return 0<="yesontrue1".indexOf(String(b).toLowerCase())}var c=null,e=null,t=!1,k,l=!1,y=0,H=!1,D=!1,r=0.5,G=!1,E=!1,s=null,B=0,g=0,p=0,u=0,n=0,x=0,v=Math.PI/180;this.registerplugin=function(b,g,m){c=b;e=m;if("%"!=c.build.charAt(0)&&("1.0.8.14">
c.version||"2011-03-30">c.build))c.trace(3,"gyro plugin - too old krpano version (min. 1.0.8.14)");else{t=c._have_top_access;if(void 0===t){t=!1;try{top&&top.document&&(t=!0)}catch(a){}}window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",F,!1);e.registerattribute("available",!1,function(){},function(){return k});e.registerattribute("enabled",!0,function(a){I(a)?z():C()},function(){return l});e.registerattribute("velastic",0,function(a){y=Math.max(Math.min(Number(a),1),0)},function(){return y});
e.registerattribute("vrelative",!1,function(a){H=I(a)},function(){return H});e.registerattribute("camroll",!1,function(a){D=I(a)},function(){return D});e.registerattribute("friction",0.5,function(a){r=Math.max(Math.min(Number(a),1),0)},function(){return r});e.registerattribute("onavailable",null);e.enable=z;e.disable=C;e.toggle=M}};this.unloadplugin=function(){window.removeEventListener("deviceorientation",F,!1);C();c=e=null}};

function createPanoViewer(e){function ot(e){return(""+e).toLowerCase()}function ut(e,t){return e[d](t)>=0}function at(){var t,r,i,s,o,u,a,f=n.location;f=f.search||f.hash;if(f){t=f[z](1)[j]("&");for(r=0;r<t[M];r++)i=t[r],s=i[d]("="),s==-1&&(s=i[M]),o=i[z](0,s),u=ot(o),a=i[z](s+1),u==L?e[L]=a:u=="flash"?e.flash=a:u==g?e[g]=a:e.addVariable(o,a)}}function ft(e){return e[P]=at,e}function lt(){var l,c,h,m,g,y,b,E,S,x;if(s==0){function T(){var e,n,i,s,o,u,a;if(t[rt]){e=t[rt]["Shockwave Flash"];if(typeof e=="object"){n=e.description;if(n){i=v,t[R]&&(s=t[R]["application/x-shockwave-flash"],s&&(s.enabledPlugin||(i=p)));if(i){o=n[j](" ");for(u=0;u<o[M];++u){a=parseFloat(o[u]);if(isNaN(a))continue;return a}}}}}if(r[Y])try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(e){n=e.GetVariable("$version");if(n)return parseFloat(n[j](" ")[1][j](",").join("."))}}catch(f){}return 0}function C(){var e,t,i=p,s=n[N]("div");for(e=0;e<5;e++)if(typeof s.style[["p","msP","MozP","WebkitP","OP"][e]+"erspective"]!=W){i=v,e==3&&r.matchMedia&&(t=r.matchMedia("(-webkit-transform-3d)"),t&&(i=t.matches==v));break}return i}function k(){var e,t,r=w,i=p;try{e=n[N]("canvas");for(t=0;t<4;t++){r=e.getContext(["webgl","experimental-webgl","moz-webgl","webkit-3d"][t]);if(r)break}r&&(i=v)}catch(s){}return r=w,e=w,i}l=p,c=p,h=p;if(e.isDevice("iphone|ipad|ipod")&&i[d]("opera mini")<0)a=f=v;else{u=T(),u>=10.1&&(o=v),l=C(),c=k(),m=ot(t.platform),g=0,y=0,b=0,E=i[d]("firefox/"),E<0&&(E=i[d]("gecko/")),E>=0&&(g=parseInt(i[F](1+i[d]("/",E)),10)),h=!!r[tt],E=i[d](tt),E>0&&(b=parseInt(i[F](E+7),10),h=v),E=i[d](Z),E>0&&(y=parseInt(i[F](E+8),10),g>=18&&(y=4)),l&&(y>0&&y<4&&(l=p),g>3&&g<18&&y>1&&(c=l=p),c||(m[d](et)<0&&g>3&&y<1&&(l=p),b>9&&b<20&&(l=p)));if(l||c){a=v,S=i[d]("blackberry")>=0||i[d]("rim tablet")>=0||i[d]("bb10")>=0,x=(t.msMaxTouchPoints|0)>1;if(y>=4||S||x)f=v}}s=1|l<<1|c<<2|h<<3}}var t,n,r,i,s,o,u,a,f,l,c,h,p=!1,d="indexOf",v=!0,m="addEventListener",g="wmode",y="externalMouseEvent",b="target",w=null,E="targetelement",S="onerror",x="getElementById",T="bgcolor",N="createElement",C="flashbasepath",k="enable_mousewheel_js_bugfix",L="html5",A="never",O="params",M="length",_="onmousewheel",D="only",P="passQueryParameters",H="prefer",B="consolelog",j="split",F="slice",I="onready",q="xml",R="mimeTypes",U="externalMouseEvent2",z="substring",W="undefined",X="always",V="srcElement",$="vars",J="useHTML5",K="fallback",Q="mwheel",G="basepath",Y="ActiveXObject",Z="android",et="mac",tt="chrome",nt="stopPropagation",rt="plugins",it="preventDefault",st="lastIndexOf";return t=navigator,n=document,r=window,i=ot(t.userAgent),s=0,o=p,u=0,a=p,f=p,e||(e={}),l=e[P]===v,e.swf||(e.swf="krpano.swf"),e.js||(e.js=w),e[q]===undefined&&(e[q]=e.swf[j](".swf").join(".xml")),e.id||(e.id="krpanoSWFObject"),e.width||(e.width="100%"),e.height||(e.height="100%"),e[T]||(e[T]="#000000"),e[g]||(e[g]=w),e[b]||(e[b]=w),e[L]||(e[L]="auto"),e[Q]===undefined&&(e[Q]=v),e[$]||(e[$]={}),e[O]||(e[O]={}),e[I]||(e[I]=w),e[G]?e[C]=e[G]:(c="./",h=e.swf[st]("/"),h>=0&&(c=e.swf[F](0,h+1)),e[G]=c),e.isDevice=function(e){var t,n,r,s="all",o=["ipad","iphone","ipod",Z];for(t=0;t<4;t++)i[d](o[t])>=0&&(s+="|"+o[t]);e=ot(e)[j]("|");if(e==w)return v;n=e[M];for(t=0;t<n;t++){r=e[t];if(s[d](r)>=0)return v}return p},e.addVariable=function(t,n){t=ot(t),t=="pano"||t==q?e[q]=n:e[$][t]=n},e.addParam=function(t,n){e[O][ot(t)]=n},e[J]!==undefined&&(e[L]=e[J]),e[J]=function(t){e[L]=t},e.isHTML5possible=function(){return lt(),a},e.isFlashpossible=function(){return lt(),o},e[S]||(e[S]=function(t){var n=e[E];n?n.innerHTML='<table width="100%" height="100%"><tr style="vertical-align:middle;"><td><center>ERROR:<br/><br/>'+t+"<br/><br/></center></td></tr></table>":alert("ERROR: "+t)}),e.embed=function(c){var h,P,j,z,J,G,Z,ft,ct,ht;c&&(e[b]=c),e[E]=n[x](e[b]);if(!e[E])e[S]("No Embedding Target");else{l&&at(),e[Q]==p&&(e[$]["control.disablewheel"]=v),e[B]&&(e[$][B]=e[B]),lt(),h=ot(e[L]),P=e.flash,P&&(P=ot(P),P==H?h=K:P==K?h=H:P==D?h=A:P==A&&(h=D)),j=o,z=a,J=a,J&&o&&s&8&&(n.domain==""||(s&4)==0)&&(J=p),h==A?z=p:ut(h,D)&&(j=p),ut(h,X)?(o=j=p,a=z=v):z&&(h=="whenpossible"||ut(h,H)&&J||ut(h,"auto")&&f)&&(j=p);if(j&&o){function pt(e){function N(e){function a(){r[m]?(r[m]("DOMMouseScroll",c,p),r[m]("mousewheel",c,p),n[m]("mousedown",f,p),n[m]("mouseup",l,p)):(r.opera?r.attachEvent(_,c):r[_]=n[_]=c,n.onmousedown=f,n.onmouseup=l)}function f(e){e||(e=r.event,e[b]=e[V]),u=e?e[b]:w}function l(e){var t,i,s,a,f,l,c,h;e||(e=r.event,e[b]=e[V]),t=0,i=o[M];for(t=0;t<i;t++){s=o[t];if(s){a=n[s.id];if(a&&s.needfix){f=a.getBoundingClientRect(),l=a==e[b],c=a==u,h=e.clientX>=f.left&&e.clientX<f.right&&e.clientY>=f.top&&e.clientY<f.bottom;if((l||c)&&h==p)try{a[U]&&a[U](0,"mouseUp")}catch(d){}}}}return v}function c(t){var i,u,a,f,l,c;t||(t=r.event,t[b]=t[V]),i=0,u=p,t.wheelDelta?(i=t.wheelDelta/120,r.opera&&s&&(i/=4/3)):t.detail&&(i=-t.detail,s==p&&(i/=3));if(i){a=0,f=o[M];for(a=0;a<f;a++){l=o[a];if(l){c=n[l.id];if(c&&c==t[b]){try{c.jswheel?c.jswheel(i):c[y]?c[y](i):c[k]&&(c[k](),c[y]&&c[y](i))}catch(h){}u=v;break}}}}e[Q]==p&&(u=p);if(u)return t[nt]&&t[nt](),t[it]&&t[it](),t.cancelBubble=v,t.cancel=v,n[m]||(t.returnValue=p),p}var i,s=ot(t.appVersion)[d](et)>=0,o=r._krpMW,u=w;o||(o=r._krpMW=new Array,a()),i=e[g],o.push({id:e.id,needfix:s||!!r[tt]||i=="opaque"||i=="transparent"})}var i,s,o,u,a,f=encodeURIComponent,l="",c=e[$],h=e[O],S=e.id;for(;;){s=n[x](S);if(!s)break;S+=String.fromCharCode(48+Math.floor(9*Math.random())),e.id=S}e[g]&&(h[g]=e[g]),e[T]&&(h[T]=e[T]),e[q]!==undefined&&(c[q]=e[q]),e[g]=ot(h[g]),h.allowfullscreen="true",h.allowscriptaccess=X,i="browser.",l=i+"useragent="+f(t.userAgent)+"&"+i+"location="+f(r.location.href);for(i in c)l+="&"+f(i)+"="+f(c[i]);i="initvars",c=e[i];if(c){l+="&"+i+"=";for(i in c)l+="%26"+f(i)+"="+f(c[i])}h.flashvars=l,e[C]&&(h.base=e[C]),o="",u=' id="'+S+'" width="'+e.width+'" height="'+e.height+'" style="outline:none;" ',a="_krpcb_"+S,!e[I]||(r[a]=function(){try{delete r[a]}catch(t){r[a]=w}e[I](n[x](S))});if(t[rt]&&t[R]&&!r[Y]){o='<embed name="'+S+'"'+u+'type="application/x-shockwave-flash" src="'+e.swf+'" ';for(i in h)o+=i+'="'+h[i]+'" ';o+=" />"}else{o="<object"+u+'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="'+e.swf+'" />';for(i in h)o+='<param name="'+i+'" value="'+h[i]+'" />';o+="</object>"}e[E].innerHTML=o,N(e)}u>=11.4&&(G=v,ot(t.platform)[d](et)>=0&&ot(t.vendor)[d]("apple")>=0&&(Z=i[d]("webkit/"),Z>0&&(Z=parseFloat(i[F](Z+7)),!isNaN(Z)&&Z>0&&Z<534&&(G=p))),G&&e[g]==w&&!e[O][g]&&(e[g]=s&8?"window":"direct")),pt(e)}else if(z&&a){function dt(t){function i(e,t,r){var i,s=n.getElementsByTagName("head");s&&(s=s[0]),s||(s=n.body),s?(i=n[N]("script"),i.type="text/javascript",i.async=v,i.onload=t,i[S]=r,i.src=e,s.appendChild(i)):r()}function s(){return typeof embedpanoJS!==W}function o(){s()?(e[$][q]=e[q],e[O]=e,e.htmltarget=e[b],embedpanoJS(t)):u()}function u(){t[S]("HTML5 Version not available!")}var r=t.js;r||(r=t.swf,r=r[F](0,r.toLowerCase()[st](".swf")+1)+"js"),s()?o():i(r,o,u)}dt(e)}else ft="",ct=h!=A,ht=o==p&&(h==A||!ut(h,X)&&!ut(h,D)),ht&&(ft+="Adobe Flashplayer"),ht&&ct&&(ft+=" or<br/>"),ct&&(ft+="HTML5 Browser with CSS3D or WebGL support"),ft+=" required!",e[S](ft)}},ft(e)}function removepano(e){var t,n,r,i,s=document.getElementById(e);if(s){t=window._krpMW;if(t)for(n=0;n<t.length;n++){r=t[n];if(r&&r.id===e){t.splice(n,1);break}}s.unload&&s.unload(),i=s.parentNode,i&&i.removeChild(s)}}function embedpano(e){createPanoViewer(e).embed()};
/*
	krpano HTML5 Viewer
	krpano 1.18.2 (build 2014-12-18)
*/
var krpanoJS={version:"1.18.2",build:"2014-12-18"};
function embedpanoJS(e){eval(function(d){var e=String.fromCharCode,n=1,k=d.length,b=null,g=null,a=0,h=0,m=0,c=0,j=0,l=0,f=0;try{e.apply(null,(new Uint8Array(4)).subarray(2))}catch(p){n=0}g=n?Uint8Array:Array;for(b=new g(4*k/5);a<k;)m=d.charCodeAt(a++)-35,c=d.charCodeAt(a++)-35,j=d.charCodeAt(a++)-35,l=d.charCodeAt(a++)-35,f=d.charCodeAt(a++)-35,56<m&&m--,56<c&&c--,56<j&&j--,56<l&&l--,56<f&&f--,f+=85*(85*(85*(85*m+c)+j)+l),b[h++]=f>>24&255,b[h++]=f>>16&255,b[h++]=f>>8&255,b[h++]=f&255;g=new g(b[2]<<
16|b[1]<<8|b[0]);k=8+(b[6]<<16|b[5]<<8|b[4]);a=8;for(h=0;a<k;){m=b[a++];c=m>>4;for(j=c+240;255===j;c+=j=b[a++]);for(l=a+c;a<l;)g[h++]=b[a++];if(a===k)break;f=h-(b[a++]|b[a++]<<8);c=m&15;for(j=c+240;255===j;c+=j=b[a++]);for(l=h+c+4;h<l;)g[h++]=g[f++]}b.length=0;k=g.length;d="";if(n)for(a=0;a<k;a+=32E3)d+=e.apply(null,g.subarray(a,a+32E3));else for(a=0;a<k;a+=32E3)d+=e.apply(null,g.slice(a,a+32E3));return d}("^@R*g@XfD_rdIIVFK^g(Fi/_1F09)hDSU,/4*3k)16d:$JS+uF8wKeX#=/sm/w-SQGe2A:Gf,;N-wK*P1s+%,Fj.f78Ze'K/q2Sq#<urtB67R:BQ][KB>,M%6[UGw6[UGx1:B?X1r7,<D89i>D22aFG^[Ma2MYl0E/.xY0n.3G/we_Q1q:T)GaQeWCQ3FgCNV1g3/Tm80<Zn[6*Y7NCM[J(CTVB:#7G:%2it)QCPQJV1Pd$@+Kwu3r+cY>0#DPEC2>Sk6^#9&/9GHd#/W[O/w?_YD-?t5#IZ4v1OU_,/pE%b6^#B)/5vV^D9.*U-w#s'#?1_RD071U3Jgp21rwxLDovEZk]-5<]P*QiJP6-##AcNq.SQc[Dn*a(Bn=BJC3BW.I^ZRRu#QY&6A^'W3/'8x1qr58CW'#b/u[70Do9S5E(qS,#&]@mED6P+#<aC(@=U1r@v3@^7@JA>BX)T0B6?8G@=h4N#&fbv'ig3w'ijVhHbnnY6ahVu)is*2/;@TB#%Ktp#,*H'97JFq#/YcF07,FG3HlIL:TpRXqgg;`19a4XB6nqrC9`BhFKo?NHGF+9AZI5m19W-mJPBb'6^#?(/8uT.=a=@M+AF&aB:T$-9MYUlC5F.F-wK-dB;^:L6b&Sb##5;e#%8po#>?bR7EHwDE`HOA1feCJBQ][76c?gZBQxXJG-Pv$-EflaBPgov#(7iK/xi9`$Ecrm1qh^9Bt`<jD6[W<-[[AqYY5YL/56]gh._`QGe2G,FML;ZCprjxH=$cp;/6290MFbDC9U-]#0^dYH,*x4CVCvt%omxH<ebujGe2,-I'GM3&RB,3##$_Tq/#4c<-j&vCTV^o9=SQRCUxV>3&_m].(*q..#'Kh##$LOVM/<?.'RF4-w7Ub#uvOHq/s`n.(b*,-vD,^C3:lR/w6i?Gf8%A<PE1aDo6We$Q^@hBYb[x9Wm9<'wmucfq:dIG.;hLB6[l/D8D-64ijGu*`dq-##IpurG&6#-w7/]FhZ+=-vt.L6#J,m#%Bd:#$cf^##[vr+1?5tqfN)d-wI)O7#E_]/:KI;06]Uq(/,R.'ifX?##N^N$h7ZiBSx(YD6@;q0t;t.Aw*Y305ahg##,`6/9N/^#((I*`+XmJ@IF286NeC.6QH/G@:B4T@qp@W74xXKm:a&(l=e)7C+TF8B8M=J#?M(HBNuQxBQZCp7'/P'B6QLv4FA,P<fjJn2Ma#M(O6Zu#]X9;#+8pFDL,b(H#wMNB6>d>(/1a[B6d:q2K_I'CLR9Z0l(.]6*NJc/959fCPuxn-AH)H#(0wJC3'J^HV=UA#?+#t(U,5k/@B*_#[r1&$G@XO-w7V/6IvBK.T'p;19N'Y6$**P.<GPu,gu(1-b.(G#wg_D#%0O<#,#fEH,)xO#,k2&06hvF#.x3L-w7Vc7'QaRBSh7H##B/@4h$;oPua[(BY4CSY#,G^$sRU?s*V@E6A^3&/:gbI6b&`+FKHtN19N.<@=9rq@t'>L2h%0.2PqJ)>dwq/#o[2l3/ZR#Q*)R$0<QhZ6#$C*Qaivw08Cwj1O8l$,I'=6i6hkH3J0J^CNX'P;gqiwBQx$>19a3a%BbE]/r#F5tAF*VCVV?G6]w9s=Eo;/3e$pr<N[k=3qQdW'<rS+05a6K##uvu##:=c(<M`C2908P##2nc3JBV`C<1e_3g-$-$@66L?;(@]#$skh##oa/'odWm/AG^p#^*`SAlW;S%<-_G4&eK;02)OS;cnQR%`O@/6[Uv-6Yw-Z6*^T_#v1O:2MYf.CPQDR0n.7,#;%BZ3eb)WE/S@`0orNC&5;&<1PRaJ6^#Q./:9UID9jBXG/87:)cjT319W/=$)i?g2h%3*#&>[b$V`ohB8$J+86d7SBn=2##2D;T6cw9?B;nw[#$a?B#@T#i$V_D$acmseCNUuS:q2:_12e1r%X;H86+/s&BnOF,HAvtiB>m9O6*NMkpLpl2pLvI'6bh44A#EcE19:Ir%0HTJ=&K-J19n*K-bm0f#)w8MHASY+8s%&GHH,xi[S?k[#>C(`I'v2a@=2@8FAvYUE2c:=JPvPd6WbY#o5B=(###fB8ZkM,BSHP&K=:jNCm*4gF]G/g2j)+K#**>O2mUl*(9Qu.BS_;eB6Pmw#(1HXHSYZxG)9Xp6bJA&1:bGi4L[Jub]WSWb]`S5EH3CXF,<s1/xsnU0nuUtb%VcR2hAld1;5prjD>BM06K@r6YxRg&<1;0Gd=AD.'G*M&:]ZMK(/ohF,M&BRv)$uI;DWk5^eH=L8&+.;n%R(EWHGN;,7bL&lj;1#4-,U/8[,.6cFbs1f_5e/8[)R#(8,AH7AsC/987)(:ekc(rf=$(U>5hAqA9^Bp?S3#jA4wCUll608=)[%SnX>#tAGr'2?9$/92sUB=VT$6^#Qr%qVI:$#OO+e89v[#)n$BJp1pw(jB_c##cMM7C)Al%''ASGe0`A#[@@7-;kiJ#W@+H6cGLpFi2]4FMVP?npL[T02VbRhf:8R7BS_7%p#Sw$pS5ph.VS3#$upK#?.@+.a5n<$vRDBY=q-f6X9[u:gebt#ZKYi$5Wr`/@#IuBhE0>C565bJ^U5a2R#?%<)Y'-C5sA0CPdN.C8k3tq.niw08EvDCSslr@v4e)2mV5W4%pZ_$/?Z@FDPB<.)^v^#0_i4/=f3-19KM?%K6?K;icZbJ6;s4#vet3#_voP#-^G)AZ%;F32p'-E2PCwkA8+0BR4&@#.vI6@;[U.1sgXD0mC9E5^.e0##7Es#(mp%19M[0rc0g5FI[BoG-Q)5Isp7S0:2au@Bk+b$A2vXH&;^?C5N*t7obQ--;4ve6s-_q1OUhpEDAX?6b8h]<l^p2/x=)NI'G6H0nuUg6s+B,]m9EZ6s+vM05LjRD/qu2$@ZWrCPW'uhJ1Ye/93/`)ca)=/AC_]#;vXECPe*i#[V?o#[i9n#-2=#D2DjI#Z1cU##&'$-]m?D##dbM$,-UIQ;03%BpA?_(5@gP%0Zd^:q7H7G^5:KB=Mdj;HEq;##ZhP.Z].m##6nV-AuV=$;EB_(9d%k(q=BP%=S:pFAN1ADnCe<9@O/=-wx.iK#ixiC9`6pD7OSwCNV)=6a2,x99*#G-wQs2<0C%)194W=5C?bl.$7E/<Lt`)2LRHmfluqJ0mB$v-wK-T:kQsxD006>14D?u/95ggH*k>[sD%CTGfYSUH*MIpDo0H$Hc`%I&uO-hJ&c05##%'^#*^RtBsvKkDQO#WK?5[*2LMm8+2uTk#7Lg?H<_Rq&8X%eep$Bs#aNTAB<X6w(Puu#$fPj;BYIxhBS_-A22WS_%?uCj:T_q/Avg-r4G@(4#[/'Kr+WdV08F(pH+]18HEilK/wHI%<dgeF:kNIRL;%TGEjkW%Gs,suCUx&IDRF;q/qw`n06K@l6;/K96;/#2CPVtqr+j^0C3od@#K72,6*MvREk^Q$dVkIJ2Q8eP1sF%AHF,i`2he</.#2>iDQwpmDSQgfq.]v8G-l]E2L76GC3k[1CV3#<._iM8#<W<KH,+_FCPQY]BWYeaD8's7FKf-SEl?AN(9KC%6+/Dr_/ZAD5>;-85)3ZD$2dF&DogxwEk7dS3%=p9U.d<:U.h)r3J(P%CO1:h(K.#33IsK(&5`x-CkKh1K#iP[B=`WuFhYcJ1O`BD6*].-NO(-r4F9liC^4<ZC^4<P)6XNR-@[ne#5j)TFMLAXF1#j56^VHkB=L@EH+.o;G&fqVM+kc6AZ%DF@uo?v4*hpx#cPi]CPb6o34tKa6+/DeB>41T.;h`P#+^5FGe(cx#2Lxn@uxOEJplJO#')Z3nS0@1Do9j$Gb)1*;H3bT3fUf1'Mb'^2KsSaF]t3;@81-o6+0x5C$Z+`2iNjM#FpPRG.;]G#4n2aFM;>2DpQ@Q:/:l`#@`+[#@(d%#tA<gFh,H%@=2@:Bu.mmFMLGE#?4^-#TkOL#Ix9l/r>k7B6>m,6$ul`BH7,UDo0;nCNKSL#_o/RK83voHc<o$HEiG2H$%cD%U&kXC+06q%;>mh2_fdMK;B8x=t=MpC[`nMGwUVx6'C>6fx5nQ08F/O1s4(RCU<JE=iZ;:6'b0-%]t]`I'S'%2ne;D2d2<EG`mj48?HqKGvbq(Bu7ex%owO;#LsvpBExZJ@9XG[<a'/v&T^.Dq/`9d##Kx_#XJk06[UH'6[]^@q/jm^6[UH)6[UH/6[UH-6[UH*6Z+*&F,;T96(A.$F?q;hCjr:e6FfFo$X#[60='AN#-It1EJ[p/16j:&19aqW6*NJe2H10h#)w/G147/QAqdc.G^G.6&ut/qE-Ejr%TOQR(4@6-#;vR_D0ILcE=svCJ[elW0nv.(-Wtpp1:SdvEN'@`F?h2$Cm)wX#&=[&##$CQ-@o1Z&<M7Y6b=R>#-.a]0n?v.$e1Dl6^#[2JwGAc8?c7nK<ulf%U'wr7Pl+W7D:qC5_j0+NHB3-2K`'?5A'uY3/022#$b0)#>Q@FH^)jt0or^J(//4h/A*Qj63nw/-;>)fsCe=i#B;)@1/.d)$s&9X5-[8j*b&S<%p0sF_sL;YEMn?V6,#M&l>W;7(JGt].(Ker(JGQr#vrOpRTOOI7(twvE/90e+ap,9Lk3Qc08F/+D:S^f2Md+9/vJ]U,?9E806i)rC98o##,v?l2hB3?'iu*2>Biji6bGjX-Zju%#(.lP5c%hl10O[(6*k9i9tZ:6Ef4h]-^)I9$@w>SG)dQ,2cwj)6[:D@I8KvkDM_)R/%IhO$:Fn?6[UvA6G,D+0n>(f6b?v&4j&S%k%a[DE-EhtfP9#1E-X$xu=fxo#H^]G6cP_9ED-Et#>QhRM0*b(H['Ru2e-9S/93.u1f_Tk7<Eb0#$mG/#-K`606g=62+x_AT3EJ`03fRLC98ox920NF1;PDm1:RTq7X/U5HhVDL3(tk:#$)u$K>.Ook'El9A4$B$_gauMClmeD$ClUpD2(Bi#@;1$$@msXEB+/]BSU#j#&@w)(/6($BlRZeJ6<%mIp??+IYgbn$o6;?A[-BuCVF0(J&XX_$s)FZ#.PJ.IYgXk)Qo1pFFGWo;+rRV),*sQGJ80N>>,Z`%87ChG>&'O#4n.o07-ZaB6ojj7oav9#%&q.#-poc0nv$=5@=_6#%VAX)p5ni2hnEj-c9d19Xp#QH@I__&R7R(##m1<%'qN*B8_2`2iEKC(JFnZ#'2M]9j<CTCDwrED6GA%(L1H.&lob,q0g]c1:B?Y@=DL:D2Da03N4RF6atXR@tDhVBVw`t1;5pb@=g5.q/,;,4gKwQ6atXV@tDeUBVwlx1;Q1Y7XSKsG>oR22mS@U%ST-H@tDZs#)l@I1:eaq7XxdwGvOeT4/keX6alN82N9m3HrZ5e6alN8q0::XB;[Pq6*FLM@v5A_C3MttCk/=$F*C<2I>;=?2em`Z#eGoL0XsX*0XjR00XNqT@=Arqq.g@V7t8q,96PH3;KdsCBs<c*#:tMA7t8k*96P</;Ke,HFxbTM@v##,2M#.wFxbTO@v##,(5$R0-%Ks<#AZ3>##-2$Fx`q_4iLd#(ldk3(lmq4-x*fn#&H#PGYB3BGYA-a5J@,%2171'##-c/2p#Dw-x*lt#&d5UHrY36HrY*4HrZ2O32HX]-%C/C#]v9F##65#IS9lZ#]%;[#[q7<'2U2nBt/rnB6Z+8#%:uO#%:xP#'2N.X]L7<CQgQ</lw%n/lw%o/lvxoeoLw?E>]f(1:,50-[97I#Av*4GYJkaGYJ8P)+,9x20<;]E->ZDBn+-BCk0HDEduvKCk'QHC3bBDBn*q?Edv)KBQZEC#&Yk-*DFl50YT)j1Ts:?0u8_I'22<;0XE@L&loLH13>+`0Wdl@/lg3V0WdrB/PKa2BQf$BCNKQ6CNbO<##H7B=i#vu0Ww<:34:ER&ljhJ#>Q]DC&]9nBR4r4$#D6C[oj*AJ;7TjIYiQg.SVUNC3C@t2h8ieJ5.j31sU>9(kw9*(lEQ.(53W0(WI=s(l*?+(lNW/4FJpnGu^ZwCVKkQLJ8Dr,v>2h,v>/<),(Rh##G=$#wVXX#v%F+'v_/c1W3pX(Z%6g6[<-p>)-Rq$^JT;H$$d?#[.4dH*rO'#1[7N1Ta.06*2A8,.8_x?aus_6*DM:+0Zuo%fh&T0Ww(H0X3+A19E%?0jf:SBn;5J0b%SO$$gw5C3X3@Bn=3D2L&ujBn3w;##%Zq(Tg)i7BJ&PdV4LWD>Y8T'Oi^f;e)H11rx(L'Mp<DH]mIK/r#1',YXQDFgpJpBuvnD92$2>L2%BhV/-3A(0lB##+pFpC5,tG#(h-GC%)qR3oc0m/wMmk#6P#'0Wmqa1lC%319f#g#5]F0(fd*3A$d>H(fd*4A*4#%(fe/H5_vR5%p4m`'rcP:4EW^D85',1#$XT$'Q5Fc2+x[A3`TX'##[Hc$P<DZC9.xVR:dQe-&mmdEmAB1q/>FVH*MI]HGFR=BYfg*/pG:=Ekw<JBl]-7&PN5>'kaG'##/N@6$4W23D<on@=U+o@u+Ja4'MjK##5Y3'oZKp97Ae`@s`QR5[5_k<^iLT?F.(Dg=ETYA]N#oHG4+A19V0lBvY)5F*M5,#&IofXBBOw4*FE31:@Kn2RHoH+]WHs+]Y`K6c4o]?Ww#.CV+6'B=rprBp=_'1U&pv1U&?]3'@R4F1#o;FF%Q:H*i/3CN_%h2L$t/8QQ%R#>Ci-$9AO;EfwDEH,=5I([X<(K#g@[6b1LBs+ZT'-7ipp/vs3=3jOZXH,=3A'NPX1#>?+@#SI`a,>8)j3.a/S#%%uB1r[cODg,T%6aZP[$=WxMEk96%6[TDJ-GXQs'N1a1f;7ws:kQgtHG=F@HIWXDEh$pGb%Qq5AZ%AC32o?mEfbXgCjriTXxp_s0ikBiCln1=.>MO##/P6#B<Q$qJ0,i[1piKw-['`v-aqi%H*r;+rJ6`g=]K@S(/FwP$@HR/D0n.?BA=,1949T3Fi/MrLk3?]K6T>-KDcivB6oO=Do:'D+HS.v6c'F6)8+I22hwn5.8L(+(/F:%H+>KF1;PNc039ERI8q;B$+)f56c$@E1OWPpH]k//5'xuD#(13BB5/^t0VCMH6XKi.HtQgAGBxM#Bm=17$Z_$8&ln5j08FP'J8>3l#4`r%-;53(-;4DW#2X-J6'm)5BQxP:'ik_(L:KFk6+JLx0C&V+F/_`c##H=qUJ*=rIH_aC20b?>#$3F3IH_aI1?feSI>@n87#>QE/xiNpQH4H*DM^eX1VFa>7t&t2J5v[H1:KE[20<JcC3?qgq/>tfIWn3g1sLvi1sLisDKRGJ0tN:K*`[-p*`^M^1VGEj*`]?-1:xdC]A9gCFdqIfCTp4G#&Y6s(JGKqB1u).1sb$/3PwJu>>.9/1sVth*bUpM#&Yd<c=jMrc=m3c1s`,qc=jJqc=m*`1sLvoc=jJqc=m9e1sV&pc=jw^8lrXw1sLrW#aNuaIt<fTHd%Jd6%1s=c?G(F#$d.>+&Rix#>YGLCVFOi#:0LwCUuk0rc1OhAZ%;B4/l8hFLvG*-wlt*Bv+j7FiT8-8@2hHC0CU@0ia.=;ILm6@sr^T1g#73ExRQ&6;LIHAZ%8EHXT(HK<l5X=c/991;'p4/p2c3$Y='F%t1:Q]5+sr6b*f$#<Ed4+&`W4D2D'#1;H&jB6]6Z<HsOo$x2dCG#SI'H?b:i$teX[#2Nu4Fi;G$H?bRG#%)Of#%V_f#$bJ`#vF,x*40Qk(;EbT=0H&QGf3sm&vv4@GvpO.B8JL'6$ufo(e//>7BKwR6bSo+B<==U2L/uk1OV$>7'-a0-ETFD#%&gc*i7D?2L%Nc*HF<#9610h+iiE?C5HMU2gp&>98RDt177BHq.wN*2Mv@>2hR?G2L&5h9t?_QC3Bcb2c`#^6`xFM9t$RdD21ZK%Xa;_:FdnCJ?i82HWa)B6'U&7(QjQ>#vUc1X'gJ16cn,c9mhmKCPZMeCa=@qIYiRBCP;r.IU)s58s7gv*)%)N(Qb/c3i[nN)c_<`#%1$N$=oBk$uiu`$x:e5I[UJ#/93.L#$<'Q2KbGCbC,Y.)dHlM/PHXX=L)liBtGk#%4WO4IX5AIGenpo)8mljs`-iDHc+<L/<rZjD01#T16MW@4xv0a)ewxC#Ya<C#d@m14A6bF2cXN4#=AO-EmDc6D07rf6Zc&<:N]0]#-2k`08Dj5###TTsEh,26>`q?6_9.9Bmo-F2,#6L7qZ1DH[%#D#ZCg;?ATia18<T3#R_hf=d#Fu>),Wk$Y*-X$cKGm6'ErN-;4MF[ow0P#$8dN(S>/E34:B3I7udZB>bg(G-*q$1sLsj%8:aj186r*1sbB:L8$lvB<<d&06I9l=h1'020;mQDKRR8<lMkp=h0Sa(;C/ZX*8dB:pvnD97K.]/>[<u06/CU#&fRq5YNAUG`H-V0u^U7#TI<mH,+@BHEhx5JWSYo#fW$P6A]atDZ9aEmVM,>B>J^3.5:t??AAgT>`tm2+]n.(Bsv3e08h0@GD7j;>`vL7X%hBa:Nf.k20<]m0#0-n$Xd&G#*:w+6,YNx#S7lY5%OoC#$l/a#OP?x6d:UxDp?5,msGEf>wIA7O(CV38;U9@#0qT%H*L`jH+vOHQvXO*=d#uf28moD#a&JA8;UDb##<3[#j5SuJ2.8A1S]B5Bt+7_#=JQMC9rK@#HVwY6[UH7nS&2RI`9CC1:Lc*#$dFd##89)#E/YR<jo$WFxk[>23*NE/[&X6,XrnNCrr6I7DE8c6[)A=21@3]5^-RZAZ%>w,wVkG#$sn/#&#HX#/#&xG&AbtG)v^=?#BXe8<<hf304,D-rl8/-rqku6*Fbb1P%6;6,h998$HR>G&@>]6%1uaGA.7S#/s'Y2i<ECItX>:0qO8eWGD'?1qUj>CU.n,K#gk9CkKh;H,=.:H*rS3/93G#2j;k9q.`=26[_YF/r#7F0D>YiIv,o46)#jrIurOH$rr5_$VV]_Bj4r9-VTg26_D/56)5jXBM8ES$ZS(mH=qgiB6[Lj06R>1:@/LLG'A/,#^)St0kd`m/xlFo-d%9M##*6W=,hX?1VtT)(Ommu(QAj,<fF]EBt%cG(PNT-g#02OGf8(0HEfvr0Y]d7<eme46dKC8VLMn<EN`IP1qr6i#$lfk#<a+*Fi0fi:8^l.@v2D9/pE2/#8(x*06h$r3.lM'.&7P](W6xl=G:%I.&I]_<eArGGgBa($&]f%?w;TpJ;XDK1Q2<Q?XWr^It(dqAqntO>^t%V#$asq#$bK*#+RQ[6ce&>#+wpb6cHm-$`LXr@v3ao%Y,bUK?OL'=AY02/9FqZ2h@t,YAGE12&?L$olgU$$?0$wL/ASBAPE0?$@GEv<DFQKXxp(0T2-GmT2-PpT2.%BjCkgPno=:MKMme$Bt2['B<TTh(sCK4#U1=r0#B&m7qH%n7t-8GcYJo;cYJx>cYL0N>`hC+20N%.$,`[tB8JBt>^rN6#x,6)$W<_D8B*3xC(DQ#2MdO1:q'c?(QA^(QGP5LB8C3OJsL%>1;G?t#VA9F0StV1/u?@'6bx]P$rr8X$rr5T$ru&^18I'h0,l%O07,Iv$alr3?*,dM'21+.1pl86UVr8jDn=,n/977c(<D/=##PA8?;U^K?*+<7(<-M^-F[Jn#$m:d#$d+T#+e8v9t%Y8#wi_e##Mn:#$:l@4'2Jv?<@2C4^i^2?*+Q>&g(Rt1V_%t#blZsfP?3U##3HM#?Ci?4,b8G&PNew7p'.t##5`9(s&wQ(l.0BMoEJN16kxsB9*.q16kx^6vN7$2L76HEDwOxGwMPO0GOuv5C?bk0'=A25ERbUIX5ANBMlwe0mCtY05Mie:PKh#>(0c2:O&eCB#%jb6_93k%9x=f/mdl#MK1%r:Pj2A.'b)L16k#LVd-F+Doh82Fa]RS(fd*>:SJ)&9iYQx-$+Le.V:&WD0[_?foYI1+Iw5Y/q/a3/PS0O)6VA68u_+F6Wb?B8@sviFi'ZY9ig``B<<^'6*;xk(OZas&x/x_E31P3@=:,E08I`S(2Z0;-]Yjh),@YW$(i3$:/*L&@t9V1-A>bx%pkmk%ht(mE,.+46<7WxFirS)CQgTM0)Pag6CB6:7CEw%5dmJlG-,Dm?_MR4'iof1&RK*R#Cg%+D+kv27t^-eC3C2[GGe3Rpi6'ihin]H2ckAM-to`?#$as>(Jm2WAuEGFDp$LE#%9<O##]3#(;9ZZ&7Y^I?VL^G##Xm<7`b&fBjZc,8#K`%4c$e8-t]_>0nnDdHU.[*#BD/g/we+E1q1m@ID9@;1od_AGx[2_H,*l4HO;QfB6ART3Ghkj4Dl/S/r.6FB4`d[7SsV[CN:d70?7_^Fi2G3HcX.6I$Pt^8n3CV/lo)$G-,g0CR&f`/xNBH<dsfI1;`@J22tdX##>6Y-wnMc,>86WCUx&2=d&rX(TiOX-@'+h#(_HTDaIlo$*YrmJq^Yn6F:0VDKwtp7BSeb#*(b&2Me6J9no_J6081)6arsYK7,VC'3>4=%T;7iB>J]A06i[>3dmqvhM)2<0#^B217q,3.81.R2o1Eb&lj<D)OsOK6d(:D#4m?EDn*s.0?H;P1f][^1f^(EK3fO^>YR&C/s_0P#Y,DD1=-#tC:f^2uY#Hx#BcHLRS=(k#$tUs,Z(hP%*SgYJPT(#4/k]?#ZVIv,up)gZ;3K>4gN@'28OCU#%%II&nHJb'N8eN)LvR+#:V%cCW(>8CUxYTZ;)'BKM<29'2/^8#+pFp/sa#)#^VDcpNHt,15wq3Gdcnf)iU/2@rv'r2L%,v_pp;K2LHt+5e)Sh,[kQc0?GZ-%Se#/(0/kg?%H:606mff-xcgp#wiAW$=Gt'*)?04(79&[8]J>f5<g6],YSgO>v;0V)--md##[%(6*35cKOP=H$Xn^0+B((M*m+J6*3FFH3.*?=K3.VNGdcluFi&pQ7;b5r5d]+I3/(YjJlusCD0-ulBY/E4-wK*O06]VdDQtOP=gYcf2Q7$f4+B2Q&PN2O*HWH_D1qis1rR`AFMVx;/vs375Tr%m08Bb`(NcFi(s:#x<hwRCCVFww'<NEnJ.E:X8]8j_Hcb4,=ab[J,C:a#7*$3PTMQ9596C7($<%XB$(`KNJqb`2qfX-(K6V[R/vs3?3N4H[K68VwFjFEb/w6cUB<W&MH%nK#141KR9S>Zr-[[J].GS@FHEiL_B>@rl#/#$'BY]Z'CZ.*VVKXv40?83Dq0;Ed0?7_W:kQaxEl$2(Ge1j$7DUUlI_O:5H%qHuCUu%1CriK)*PX41/s:ac##o6Z)on:s$[;mx6*iulIZ#Ee#G3g^0v#@N'2=?j(5*9'<k$S`Ek-'X#;v[10n)36-@]&g)VvZk0tWFLFL#iH&VM[HBNcC@02*ON5'6k/[7hti1Yds$0?6Dl/94)R+dRhwD0-(g'j+n=(67Wi&7no?0)?8tFZ'888>66VDo9SPVKFSpCTkbF33cW[j`;eqBp-@O#>AaW#uPD<Ce86KBmxe>6b&Sg4r902CPl<619E(A7%5p[bI?UoCO%Xm06g4/6t^lP2he)L*F:hY##,)]8wL%.6#?Vg2K`*p0t<eXB<2<KC5Zd;1Tul-2QfXF8r[1L$=79(%6l$07#E_aD2N#=21@dABShAWBn;=Y4_9hP'U)wnD0S^WAwcw%3eG4I(LVIj$>rsQMIrw&B?2dZ0u06mc#0F8BNcC>h.WR8a)%5tk%plN'=BQP6wC/aJ9F8x14M)%+9QDG.(kfP1;Q,v1sKQ$850a2m$b8lSPplC02+B0(rl<I]$^hxH[92JH,+@=]lF5t/K=le2M,5$l#6gEFi(rvFNAk0#$#)M0vxbc*(Bqd-^'7kB6#`h06J`f6^PDT$h954Jp3#m3IDw:GH3*.GF_*eT3s8S(fh*ECkKt1Bp=1L=cpJt2i69f#(82R9MGMVJq`h##>@G72T.qe#=&@A2TRT'4302.364)12T.M8-;;8,2TRW(3mk202T/$h#$dR?$x<S_JoP.'3Fj+o'ilpm2TRV3.#&o]1qGc=n>E0`CUfQ&HF77qJqgQ;#&vM^LfIw?#$k)k#',*L)GCb+>YG.b#'2V^QrUP@Jr/612cX8=#&?'_##?D#38OXB'MSbM#E(Ht.qN*c*eov3'l78L#%7L9*DI*&#YYde#$2@wMcFF%#>Pl>(sNlB=L:5K1:fH6Vo+M&FMDD,CTikm&5=[24+(=w<`WRN(o>*QGf7i;#]S&v*1S_=5D;,s+.R/cFMW37#Y]630RY_d#w$`D15C(Y1f`)/$,e['2q;YU7BL0/#UL$tGlD8g5g:HO#8RMj@v'5U#:0fQ2Q8qh9R?cU#$t?,#&HGMCfleo0ia.:#wA%l97$YT#,3TZB6G_j2;q9G3/0/?0u/Tn#$t'G#-`q^FKoBO,ZILI08FeL&'Zp>13>:44*`3;GD]SC3dvn.b,(c`LK,[eIJkIo4T#M*4`Xo'fQ;uX%U=5%%:*'>2L[BA2YI9CCW(=bgR*b^(Mv7^We?xS@>.vr'pX8`0ukK5$t3LI2dq&crH5S4@tA5_#PxL+ZrLQN+&/,842X5.cuSBN#'DY[]P*Wpg1Z;Z'2E:T.u';c##?(>%1jxf4LYd.:gxnf:h#GeK39bX6+W+f(sFO$Ng?3J1qrG?F5%Yw96b-c>DY%h:8g(K8*1ca9nCpL,#OPY8s7fI:Pk=NZu(>,2vk0]9p1Qi9p)<O6'LVkAt#6G@?Xv-#.wWs96u*[G230m'Qn*9HESbCFKpp#B=rg-;KXFC96uZpG-,ftHFrRY2PDIJCl$Gw6^NRm06lpT7Yt:&7L9658wp4w6YxN3Kj:hO0n>(2mVeep%Ui,A#$ki.(6B]t1:xm9#$iFK3G]]10.ngf19xd+G/&1BG.Vf?UOjT)##$_S3.<jL2G=[e2G=i/:J=d?:5MDr5@vX%-^or#qJ,G<K#g3oGe2>3Em)D$Fi2-;#v.1:)L*H0]TK?R7<E0p;KuWe_ho_F96:SJ@oZo=#+.s3/9DA+8TdA1I#0Ra`cC2)1JJ9^-?VCR#>l+u#DW=q/s0OC>S[tTG'#0d6%T,E>ulHe#>H+?(p03W*Pj=m20($i#?Lri#%1Jq##ETU#3H5$CJ4lj#@9M32J#p+%9[(J#&Gj=3N6@q=DgkNG/S3W3M/HmCgCSD$WTaF9=ZU34JWC*FZ1[fDH&2su)OUZB`;FA?7S69$(>=ZCrb>vCPd-*6*4UPCrOir(2db#]URJIDQw^kV.xD,1r[lNBtDb(8%NET>>L'x/q/`W6albG##:r6LVn^9D7FvE-hV[tK#f1#??.BR6A`tg(Njs*LTm/n:U)wVCKLR@8m>h3,rLR5/q(1-/:Au&2L765eqsVL,YWDd#7rE7B?36<i2kxFC:IjE.:+Fq#L+NMBXivpENtOq3mkIx/5/I)GeV&t#$c+.(kpp.EJGK<]6q/*drG%(DdRI`I#'SDFF#_+34k=Xd<i@3,utxuB?5J67<DuN1v&4K9V2>kAlW8[#-;wdCVrR5Ht@5;Cf[kGFL?2,.oiCE5fnAZ/95Wh#$c2i#8J]BDn(R92h$R7=gql,(;CK6%F>>ee7c+GO'D^o#>J60-`u3o(/<1i-Z)[*.SRgd-GXQT1h,@%.<6ca##5u<$W^A;J^THkIVq_fD6]2I,EZA]2T_Ax2(/^D6VISpHrY*+UJniG@tE@8FMVi/GYfNIfQHD(FL#VtHX$Qf2L'DWEltDk#D++5B1sD2l=e(SBBgJKBQwQ^,(*EqFjd)bK68bI#%Sh:XxV*+H1V)S$Nqt0FL3LIpNQ:I6c6_QDnL'a.tOjB/H79M6d3WZC:f]E??%MZ<h>5=6`o.I2iWm>DQm0DAqR4b<-V&14'Y/c(*wr7Ge;83F00>oCN:c9#-';tFj-FM9k&aFFEAtf:qGFb#Ye<pGaZ@ZCNV8GW`acM##'GK(6::^.CE]l+KnE5Gf7ha-[w=qH,h8<<N`(<##PA8<[JiktFnf4<JaGc;6a9B18)+<.'wH:#$vHR3d6LT%87J7*D@-[c#T.j%SRP//PHfM%87Db%87G1*)$we%87GL6VJ0.%SRG=LJ60pCPbt,1:L]Y2i3HW<(sFKC5H0*@=Kuq4EP(p3jQD>8='=&C9TOW.?xGU##*EN2hBDV@Y96_Gfo9iCVXM7#@po&%T0?8)n68L#fhLK=BdKP'if`7'ntMXCik6$8$@cVB8_mRG(u:,.SYS4#Y,2M19i?o)O*$^7^xGeGm/(V^2<Rw2L&p%B6u&[B6]'UC3rA[.81GD##dSd2j;7wJqgho#<s6TD09NYB6[kOBQwwQDMN%96%EC/EjKu>BSUE3#+evl6*a-+#^2aT1JBQhC3V74MM>^p6*2g,C@`XFD*g%D;fw]kKK`u##.]msHF7f.H#.*4B>8,+ftQPH#2C?AFgpGvCM]*>$#bq3sD<2l-FIE2IBe8#DonL5Fi^'*%6lDMDoKd*FKmu+G.V:2DoKMn-GF':Do9A'DRF#uDfwU.*d+G]b)#5)B<Q*aCVFj<-Di/6C9`sxBtAftCVOv;Ge.a_'3um[-TV7>H#.?0Bm)nCac^)$G]iHHB=`WdEnOgiH*rJ-.'tGB->l:F8lgDZ.[ix3#v?]:(5KM+'uvV5L:07Y@Bb$mCfeB%DH7@*,Y]p<%SQnq-WF8X(5WQ*8$?wY3NaTnPv@ar##RNh#[7;/H*rM8Ei3D='ifcd#>b5]#[na'G-,Z(I'nLxF_c>U6u%=U1h1Q>J^VG1#M96AHFo/Q##'#w%`iwN1mE$lhJEwS6atnSG.:v+@8L?eBp,0.G:P?3BWav6H*MCZD.3NMY'*'t89AUx/lgi_#SoFhdY6r;Do7-F7E,C4CfPc3-VQ88B<NI_7(Hb>,>8.M#@&KD%8Wn8#Tb4TsevunItUpq(7]jI(7tSmL3R_)3/BaD6#IpP2e6Wg##')C(2d3s%r>TeAZ$pN,J#I1#<lBU1;>viK#j/fJx=.0#)32/2/YU/5);AB<`NMu)cb+[PDWx'/8^Q]/8P<e3jOQ`9@*gV;GeF/>>YB`:5N`6#)lC#32qG4&7GQc2LvTH#'q:8IYgJuK#h7/K'YL)APF>wJt?@?*K[RR2h@aW2MXs?6awG22oqgmND9O?7?^nW6*kgx=a.$;->kB?#-'0/D0J.&16=Z;=G/'<13W`6-;6I,4AQ_&#)t1M7Sc.]6j8OB4K0k&1I(xG>[ea)4nbYi06f]&1khL5rH*0%DK7(NGK>0Z/95a`06Lm`A[P=94KDv(FM`J2AZh0mZrM((MG85Y;Mg:V8s:K3&(_uqO&5p0%p-`C#`a7c'MP3^6bS1k4+&aJ8n`RE4M25/3J0,K(/-L*C5FKFGdcMCFGFIbSlqStGG#p4K#j.hCO84'-#O?c*M*T6#@'&`#@q7o##R^l-?iI&2,L;g#rdZn'2/OX#E(w)C;'_S(Pe$8-[8)L898X#GYA-h#ee9m-^ptOf4k>'-w7)%6E:-*D4Ub'2L%WBMi`o0/5-Ym%:BMe#+RQ7@tDY@6<xUX'O>a7#GNDh/pE3i#+eT)8q)[/66%]F9t#bnDog&Z<-39I#fY;H;6`R);Xu$.Ho7[$2(8^4s(MXU6cu=26A]7W-]4ex04l3d2hAp#2rL^+S6I:j/:efY2j)U<#0fg[141_87'W&2#/CXO9iYfD##.Hh#xX*O:$O0_06J4;$ak>>QVS0Ogkm]dJno`(5%4NY.'@$;2Jtts:(@;4T2GZ(#$c^o)/M6n4G+2mMh#0J1g#Q(#(-P].836o4/kaZ#[rSR#D4ne0>/sB*a*jKA5EM+#>Ad60QgGQ##;X6'GqhRlukb8>DYla$WJ'KLO`1E@t'xg;X4<fa`Tt%3jOQnHrXO&7<CuJ#&dK1Fxk*D>MhT=I:NPPI'IS')-eAZ##_tq[Z,7KEk6h@6*sg(hhj[pB8:L6$rr7J#@nkM3mW1N=]iPI5D<D6$S-GPJw^qV7t-8t0p7nf$<Jq9I>]a)8$-C8Gg9`k&ljMN#w`9j#4+7+@t'ib7sgs.'ihBA2MJlL-Zqw*6s'Xa#aA[f&PNIu#&GK`(fbq7#w`7l$&h'_8s%Y)&RYbC3Ic=f1C=+lPuXsi0p7gB$<u`X$;<Kf-EiJ+$Vo-6COItv@t:=q#[B*#++@ki:36N)6bJ5u$;`@u:J:f)*)=wf#Zr(;),1RL#%^Ad%%rO^G_CYe##.Hi<Ie$;0u[Kl*IvI@(Oc=f(4X/.AsS-g3.tKk$;P>?#0?oh2j)U,/:K9m#&YU4gis-9$;;%<#0R0i0;D1@D2Cdq19UqqGuhSd32o?P$;;FC'k(KA/U^.a#@T9x#>]QV$-X&g'2/bW#HglF2mS<Zol_I#07u6SND0F##')M]j`1fR19r.R;lHXRD,r4lh.v.oK#j+g>PCTkG>&$J%S`IX2iX)vuDW_(#x#RN$<<_)*.O/X)PK;uC4Ix$@t;`[#vjW`<d2?jF,*CvVhU]?BR4O?;mu:K.U5hh1/,2`+IGa(-@IoL#$ugp#@9-b#BN+^Gv$)I3r*>W#8wSVrGRKdEHbR;ij.lU#Fgc]5^3Q*&U]5F3He`rG>/'k#[K-J%ZN3#2Ms&L%``q^9%F)S,#82d)-hud#x>+W*`f[w%g7*'6Yx5e$$1LFd?BCj#vE7+0Q_sp$X>C*#ZcrN+1ZAt%L<&o2Mbe,%ownR#eOM:&ljKK#';;Z3Fsol>>noW2imIp&WV4j16qe;&OnqM4FI4H;;H*6-wQs6FjGV7't'C(12^n8iGA<O6%M556*Ec9hpsrw6EaVe@BV8@@t@XL(4EVt3i_N8'W)%V#*L^o5dma?8SqVW:Zb$CCF2d,C<8ra2T]&$='of<6cul)`5(JSDp=g_7Htll5dl(47;dubJ8RDk$ZqeIMcOMW+H0[84G-:P#+,CZCVFm4[q),ECPe1F#w^GB+'siP,>>4O#@[[l3IWs,##ba-#(RFo2cYES3G/>mFj8@<B3v0S2cY-N*)$tTk],_>:JB]e%;#TDCOeOj4hHp#3.j/R-[nd(4#g$R2Q8e-/92rq1khL7q/M,*8QEp:#kE@`DnC0`#CZ`[2-LTLt'>dL##vnO2T7;i_gbO4CTrNcLK+Ur##&mY(4q.H/9ND;###oS#B'U4CVMt+X`Lf]6bAg#ew)0&Ix6XU?Fh2Q3B.ms2MX,V:3%].0#BdW@;Z*Y-*/N&AZ%GLH<iYV2GtO62heSo#+R^`A#Dmh/nLsa*D^tS=f[@rK>I4p#p5tfHxvlD'O>kd'O5(N'TlPt6,@i[8VrDOHYOX.XxV0<El>k7(1DJx#2`&MGe1lG?AWh]+APh<=0H]j6c3/-#C-cd_J78D1rRZ)+L?IH9n('(?tEe+#vu>I#9F1vG)=lQ(N`pL)4_GZ#_.)3K#gHV%qp<O0CgtkDn:c96cES+#CHMnF'fpn18=iQ#;.R*6[hJ=@oZpE#)4kc1BRWD2MdGg#,<p=H&#Mg+]b1v#'NC<87iq3#3%G%A#W]T@ux1:/leTr3.3N=/5-];/5-rA/5.i6FKe&q#Okh53IWd6#'Drb.ohMgQXCBE/leFI5'-ea3.<ir##QeP$2OX/U.d2Y;,/?x2d9We/PH6-*DIrd(OnW4.>0^i#$*-U$0iMK3/';c#%'8s##?OK$((au+*8X5AeUl1$VW+15&UF:Hg4t/CJ5A)lY)&*#%rRH3DV#1#FdUICN:c[2j=#2G)IN%5^&3?R<AV,'7;BX..J?hiJFF&>E2i0I'%G67?/e+##GA;$5afKI@YDDAZ%>E5,ms'075p`%WF.^]QB*P%;^bYsEM(FB8Hl*,).+A#(-ia<+Q/u&q5Xh>>@2W=cw]o)2Cbe#<,+x2ik.n#$:lO3/7$:#2gJl_KrY4`,`l>1IrLN1TCNa#%'FI##$+L(OT1pAvw`F16F`J#(.uw6_V1cS5^Y.(1AeR'mQNrZt,2]1CF:x.t3sT,`S>,63JT]6b0n6#SIiu6^r@O#So,)6_Yj6.Z%/D#A63+##.-_2p0RM-rm>2CVUn2#1O<%=d*sqBSTBMCe8oI)ch>%,Ekk/6_lp9$nGeY+&%b9FjHotEl#%l##,/W%U1#Y(0btG$#+I'##>,$#8[JX5'[6i2iF%v#$t,q#$jvn#(/@kA(b801OUhq*F3G+-`)t$1;I+(8;qjB/wSp+(9mco#%%@I2eZPhk]oL#C5FZb#$t'(##3<M89f[33+;m03FVv)3FVvH3jQFU'ptQ:=a/.^(4RE0(Ox;P$-+>rdAsKK,YS2D#]-uV##@3ci6AKK18HPHCV=m*H,).e#1?qbt%XgOHk1w&JYo7<Ek9a$-F,7N*dZU`.812/=5GL@6Z.:aEkw=Q>YIfr8$XSU6Y'D)$a+HIcBnZO6Z.9w1%@MuDQS)t:fZG,BQlZO.*4#l,$o4h#%grW1Ljcw>(LS51VtgE-Zq^,1rReb*`[C$*`]K(FKdWe+*Uo;#o('Cl'RN?@VgM?4F/px6*<MZ40;`x8#0+<-w7)Z=`x8s@Sg9n$abWXE/A/6BsNYG8#A)%6^#RqA5-1)$g)7r0NgZJ2VB0^Vcg.kH#?8a-G+?D)0%HwCSWB0Jw5s77#VOY2i*9/Y$W?)JcpFP(RuMs'O>IT>#7o+)h)Zq'6O:[>?`=;#?%$q7aZe-E<QAWBiTukK=,<CE-8@.#vqv*2q$K&HKvJbE1o4d7ommsG?Y&_EEaEX86Z(09Fj%YHRgx`8[<#P$0`P/Dd?_RCrL_68wW;Q#'be:;n(xU#Lkg2BAZll6Z-AFH*JQYB6lJv$o*W65>26E@p%*PJw6SPCPtUQXfe2R03&Ne8wU@`BW1wH20CI_CJI+/06ku@$G7r(/w?_V5av+n6b?]r,E$#78rqk-6+0k#/<C5)CJD9A#+-vLN3*Sp##%sw#g$FFsMTv,10*IK$F<^<Q&m)_#$Nvk&^XmV@8$_u,#2p[#$i4<(kQ<+#$cV9.U,DH#>q>o8$6-J/FEUGA#TlQ##;)*%/0b9=%jh3:fUpjCh3mB##.js4L8VEtal6]#YbEn=*S5A@;[j+#VK8+4cH74#aTe.EMu%l@DlsJm`km(D1bEv6fE8[WDXkeAUxGx7C?'O06JUmUpXj`Cp2W8>dh1`,v23v(8k0#.*$d+<`rCP#295d(/-QVJ%?:t3/Kg2*)$i=#[JYh7;F)VDG11S,'JBf5ujB&5uiK?B6ASoB5q.gTiH`b5av+s6ajn`$wGgaJPQvvKRlA'2gM^E1:+KS,-E-(2RR.K,e7pu,e7mtPx(^MoSg8[Vhpp&10HH=Cm)Z0D<u`NCwYVkCjtA$'4#$c=05orJ^TIYaj2f$.(UUV>Cdif#CJ]N16DR<6bA8W@;Gr)@v4gu$VlMC#'*[H^2&tQ##7o27CG7r#(C3OC-VgoCjr=gED-Jj#%D&f#*EB(6bG$`$:=ixHa7=5(J_m5#;'4rC9[uH784E-784?+X*Out2cYj.7X/@.BjuP<5dn2a@IXSAA%,?CI7t_N#[98o##?II%*;nl`cL29nS+f>V+`5&k@pX6>?@G#(UM@k4*<U#V+_n/),J:Y33ZW'U.m;UQr]:2:JCl[#B=C/VG%/R$;?A1*JlM7'rPG9#HIpFBEfH_6*UH@)6ROT)n71b#*K$lHERwq@on'E##WvU#x<n^6*IP&#2avt1/8L;d^C3(6*ok_.BPb]##TZZ#6fXC),)vE1Wb'3(;4:l7<i8:K3oc?BXB?C#v=0>4L-NXD5@@S?e`$[6F^+0C5L9&$Y4.5G^uZaDe+/b$v9Kv##dVZ+]W/7/[.CP6ARDJCPl<919jvpCN;.k08MaNJwRY.3-^2)/wdnb08MaPJwHs@@Cx+E@v4aN4FfUF)d%&L-b>+:#%D1]#'+I2LRq`c9tSuM#>PJ-#;8]U]Q(o^3.Wx(#AmGXPdn?83/KhB#Cfnq49g*'AZ%MI@uuo)7sgsSCM+RN2hw^?D2Cw%0;MCY@=hAG/;)n&=+)jf7'RW&<km4l0X6rB2nHYC&ll-92mUc$+1#pl-b>#T<bgGuB7)Iu1Li/m6[_`QW`bl$2t10WC(+*8$b;eGB;^7KA?RG42i?@./w/?:0k=Xj7#EbM4F_(0#%@RM2evd'2evd62hdEF(l3?*#x*bO4UM0nbd-H@##Dn8[^3dD3.WvAC3O0Afl@3OBo$/aK9Bj&H+#W8/x*<j4.Rlg9X6:eEk^l<BD$+q16ePv&AMI[Ej9%,$rt[5#<E0;C:1El*JuHJ=,&Ac-w9<b*k$m4#_?ie4%pYu&o5;7C2nLfCgit>.'l[DC`T[xGf]@KF1?2$NID7O#';xU1/)GsHcOO8FEwqu)GCKr#(hqDCjp`a'2/b]#'=P(;G8ITHBJ85o5pq)EbL,%EbUuU*E=(`.<p=c.uM5vBOVEZlI(s9)e*><3MoTp6^#D?$;HLb>Hq>i/wY+_)Kj_00QialEdEVEI:Em'OhPVw##Q]]#mXn`H,F?Y&Bo_<JZjM,CM[ds7toU,E?,<xC%N<THrb[r&nwfV#&H#W1JA7u#?E0T1Or3_##B8D&Xj^S4Foob27.J+##?+s02)PU#[Vqv#Qfc//wHk[12]bn6]g`fO1/`T0nI,oE,Pd306fXE#'hDea(_>lCOx_)3#m+X16kc'#vbj0=D9eIC5I;-3.k6#?<Si1CLnMX4+LUi08b:nBSh48#@'#?&mr>&(4Y)($5*ok/qRGi5Bod>Sw&5<'6-+P-;6+N15*2E$<nLF5$]=tq9C?B/@T&<4Fii1-W_:p3I]SDI;V^M<0&5M$>qT=5-l6,1MfCh$bCl/Af-x/V1_(XB[n8jG[DcaBZb`5-[j_;+1=qO14Uj)$Z:@C6VwodDHfs$#e#u:15%NO<)O6S##J^i06i;x5?S>O14iE/&<CX[0=+k#.W&jA#(9q1/N[jRc=k_M4+,%O#0[1-BmYQh##dwT'0-&B6*7:r(:]n#7BS`fu^Ku'6+/r76*EGd2H0d9?;HQ6-G2KOAR0,jA?7J>EJZB(CpRR@BMOv>#BKmLIt4fpDo:%Rc'k>5-%0k]BV,T]/r-WO(;3.OCk_ZG6bg47##7x'$2F_-:/(FgCNMCeBnV_j6+B%k6$6f+C4v^bEe'$e1Oi9:G%1MX-+Ohr$#=<s##?>f*D?S#4+^T1/95?X1KFKlG7f4e&55F2/95T<#**JL/@PtjnD1,xH[.2uHZrW94*E#Y#-;EkG',=UZ[lAsBW#LD%U=0#3`VEU%:&tg2iDWF++u2/#$CtI6*<AECjk-@B6?;[,uxD7?;,$@(<@8u=,8v%Jw(-6<k+ZL0n$'u#xt<U4(oUu$@trO6]JpQ#.8AR>uln]MQ*s%0n?phG)9hv6xFC#7`C713t5gf4,H+fF,+_h6c+RJ#buv<EJ]LdG)'nxEJGwfW`<Mf##&Q4#5&((?c'(]6bJ@s+]WNx%89$Q6A-g,#)bhe41>3.IBuHH0o;@%F%h]x@DOIJA')a^#TmkUC5Gb$0#%0h2Q^-7<b.lEB8K/R?Vm8]#P;S202*.omFUE<K6U2,n8b@N-vLTcIor=s*4%uL2Qp6Zl#MJ@%qU[`%s>eEsEqcdC;q6W,x&w&2iaxAH$iB+3cSLt@UN*I0nw>_.ojgmC2v+hPv]I22dVPeBn1uE$vv>aCgLIM3.iai/wNK/7tw/D/qRG$c>u?g4F]pD4+9,P-aeJWJP6*?#%KHF(5bZCCefM8Y/(*jH%0=V5`9,u4cI&;Hj5DF19l8SGHEF/DUsKf5H-bs%Sjc3'EocK*D?V;%Sw_?0tm%L##5)/(7Yx@-Bs+W#&Qd++CYiu'2<,^#.8Vj4Hq%f<-0._06/D7C7Y^@iSgSc3auTU#s2_&Bn:5tBn2@gCIAJW19Vw-26]OSJ4puu#?=d-EGe4[2j(uAHVO6O3/Kg2O%pj8#GF;I:U#:N)GQp/-_&*d#wLYT-wT7e'MSqG$t<U<bLs/#_k-KGj42Ce@v#*K&m)pO#fUQ1ClmVV0n.NECj9ljr+i??#)n2^D0I(*GB[T*CjO$rG>KF%6XBc.14gLaGd,1c#(C3p6`f1BHAOtm]%l)N0n>(_6bA5#4xm*V#$XMx&H?1*G`^bqClmMfD7qHahK+`D#&m-/'3mZgA1wx46*pHP)7#?3(9J_m8U,*=C#Avl2MZC?Cu]m(191iCG):2)#/4s@F*DZ4G2<4VD5VM(@81pW#%7M$0uqm4+A<BVZV1rQWCwmGZV1rN&53YUZV1rC(ri5_F95b=K?63j.&?r%;Hmc'#v4t=1m#W3J50:h%]OKxBQ>H4/wHfV2+x'TCNhW)1f_6L/9576%;wDJ9ok1p##0$JBY/<1-xrY-)hkYL>fc<n6aoS@$RPl@Cqf+9##dLF3IWBhB>=MAF]kux7Dt&`4%q)fe:k3%AtNGS##pME+bvLV#fLniCd`s>CMbF46dWd_Gf%o3S:H-TE-dQJHcO</@=UM8Cu<a4Fa@G$#,Nms6b83-#+gI_DKU<*#(/YK/n86YUj@QQCiEb*AZ%OO,QD5*1:AhLB>@sBD06&0D2UDYakR=]C2uZ8/x*3^K9hM?7Bfht*dELX,YTuYE-f<a%J0t8:g.@>:/_.Z<div,0:W2v(V^6a)1lE(#Ep3q.`m`<^ub^g,uqiJ$r(5%IT6w&6s4Jc+E%nvpnn*c,wWGq2.CEcEeifVJXd_G-*o3+=`x/(#0q>K;Nv:KG+L%(%ASAvG'Ypjb1d9%CRJoWCS5trC[vLZ*D?I.*Gg]N?c&G6C;l925#6^P%EomWT4%a%##-@H3iLN+X.i;[6cKF_=28u'19M_&-GOOc7?:E`I`ZuHQaVTcBZPR[2LJ$72LeE@jafkiCjkd48lm>/3/ML?pnogs;l-Zm.)%.9%$3t&Fi',D#hEF$08=.D]YMst6+A>Z19W7@3E,vm#%(jf02J$@$LRoA0?IFW(VHT9LNFa69:wJaD3w>rG']5EFKg1Z$RmFBHZb](#(C^IK7b;7Q]Z3vi2txEBufmI6Yxv^s`do34FiR;s)*Xj$&iZq/t53x#`3%<C9`9kC9_IMBtDR#CU4bZ#lAk;2dBcp)0xpk:g@I%,>whJ/qLv'&Q0<f33PEV5a.;26b2vG8pxNq0?Ogq1rIV>#YlK]'vVil:qMLb0L?855)*Kw6abkO19N3b8B+HWK6U%`),_i8#1R7O1OV?w6b:OT;M[KM05m-9DnCe^0%(cET1j+]B=VT+hh3Of6b&S4H;#:5BX0l;@Bt0uH?r->)-[:>FAO6D-wTSZ)KICLl[5+D85HOoCVFMqEk_5.G_+GO34V,tQV7tB+'&swa17XWS4m1v/8d^//5>2H$ikX,CJ=rH#)l+J6^Nh(.Bv&nI;_H`Iv=sSC<jKc7BS.h1j=iY5g+4dC3m=kM0L2_K#g*fE.9^]H&*SqCkL)H$v,dx@DQG7'nuAN6j/?l/95L(**uk<##$%@#upB17;XaCOAHV([DP:k2LSm^J6ZU>7Sphq#Co.:AgXkO6b;$j-sk^&.#FJD5HdDp/leV&@?(>A3.s5S.YBEv#*r0.4+C[BG-<6S3dZRa3`_.(##5g^QBEPiB?573DBB2MGB,%R1plSe8mPep(;Cd?KYf#`#*_OZ6^t^<-$;=R%8=B<#U=V#+AF)=38OX=;d46U&PQ*IBtDQkUJ)5qRphv%G1wOA3(t?W2ckQa#v&Hr*g1J4$>G2uXxjpY6[Uv=6>?L(.#2gx#_%uk6;0>GGH&2[-+l4$#[CE/6;KLF%Xx]CEI)_s#[_Q3.ST&<3P7Mut^-,Z+BNmV-w7%v1;&F&-AX=H2GjtJ#G;'6G+TLQ7XQG@@xbX1/T)rh*`[j<4`+PS-w$SQ##'QE#xO$Me9H[E/r#X8`LYb<B=VvHqt'Fv9nf.d0&`(lD;ItE@tDtC#bT4XJ]?pm#87sUG)1.'G+8SkHAQBn&>Ew-89Auo$&hF]6clB^(kMi+<d'x>0?=%($X<_M1t$/AG_0q4Q;8167SP#L1(d+#EfxVdIom&4$V_`PEg%5.Ap:o1-wJ$;;qoNqEe2]YK?;JF%<2APDT7EX;Q`Fb19j:'#v1D&#VvQefTrC($#D$+^3u`4#]%Fd-$(6G5AD?pD+ltVF_uS<@t'5TGu^-2A4wN>#CSlR6b8lY##%).'tRf>+L>6U&DI;42S9,sDgR2%Cjk3n%87wX7EI*Yo59<oCMYPVCchNMFGBmg$;IhU2L$CYhffn$9j;(e#xH;?#&csC,[)R_BkLwK=2uBF'65YL8]PrZ$tmvN6GP[wLt$@F)J^?4#@``]#$tC]&6E[P(46e4*du%Z(ra%j#2qA%rk.m6UrePdb%Za,##ir+I_r#K6+8xxuY#$+CL(`bCOBscG1nCQ-vNSH6[V);^Oc<-4a*@%JRfcd$;A9K=0='o08FqY/;]=x/5d)I&/cJ<HcO<DtiQ)2K-:5EG)<gG3I*E5bxOqP2Mdvi@aWrW4d+fq.ae#J#$m''#$sl=#+'/XK<IhN-*KkE#D>hf/o=sdeal#.17C[;$'/W1/w;Ur'&oULc`ZfvMh^0(C:5*tC_L2YCB5]wC'kvFL1N)p;nHnL<HW`E<PST?.$oQs'25W;#x+$E?f,e9aEN>H-X2X>##`A^(U=9i0<dtX#'=(bJm2YK#]xFA&Q8_b.p2kS7<E%+uZ21MC.]l;NDq?X6rtr]#=Aa/+A;vA#ZGHr.u01?*k9(=J#u-3Chx<ILK=Rj##1Y//W2$-##BMc<NU](=%an.%7G@iBWWp8F1=g`Bu/;xCN0AY**WF)ND/PL.<R`b&6-xh#DEFukxGs(CFgHoBmxeOB67aF##N%j-EpYv.UktL##5M7$=bb(6(74J#/V-c<)av7'k8O[#3m4nsO+)rCH)<6E+/gR#$s.(O,O-<&US)A-sBuM+BK]U0'5E-&mB4kpQUH[%StXc&-.`qSP3F`FgwF8F)(ugIoUt0TM5N*6:MB.BLWD9IEixu#$*D>*N`f<#=tGTTiufr$<.R?$RH*pJhLo2'2g?e###(o&q>`=qTl-W##lf>(kOpR'n'F_/qAi)#>E?P(9X4I&Fgn4(/,8:##5[w#v@9w%m$c0H?:T>#KHhRI+ArF3b*]e5Z7Z23fgu7$AgL/@SHjO(/.8&/9G<^$;GEj2MmO-$vd6_(ft:&-*ZZ=#Z2nO(5IEpQG6xTHB)RPFiSUM'Z't)6+4hI'PwiUEG5RT##'5G#?Uub8%<D+##(l3(Ttc$#?r1J0,bhu##Qu)6)4Kd]n5?,0n7,q=A06a%TWqk##%3j)7*rJ#IbfD2H20VD2]b+`,Cp/V3s%6NDBiW%S[7D*4+,7#xPW'EhI^)G`_+-%].C&D5V5O<eddg4V0JY_/PX-'MK+ZNEQ?t&lpg>$$Hv:G'-xn#U+Rw?VD&e[p3<&#xRqH#wrB_3`aCR'r55-#`ZsTEJ]]`*`ceh)ok4./TcfA/ldUfd)k41Cjl$MGepgR1:.3hbAF])08>n2Bt0cMB67qU$XYs,#&Q;XaiEQ01/<L/-Z(UXJ6ZPi<gM776Z06*4)R-nmV^[jF1<$&0UmZt#$v$i#&A;H%8I29#x>wU#]wm.#Zs4`0G4PHBn=^K##=Ai'ww(h8s$6Y/v+;P6*<FV#=0)U;R14E#Bh)YGYA?[#$Fs0%G(SpXBlw;_j1B]q0@ZF/w9GA#Acp%*ajoxmZ3;R#Zk2r#GsrcBRl/7o5(4>PvRjq_fY7F#v(f3#=:G.I_t:6#&ZT#W+800B8Lvp=cqM15d,0#Qv#$@B6Rhp+lr(QDo9s7B<Whh%T4g]7Cw^g1/%tW8&Wd-/w-_b06_nWK84*O(q%AZ@v4k11m23L5wF>;Do6Nb-&GB#$*>V66w)kp@Yn@<BnVVp#&H>U%ooe21O3V:#$w=O0t5s+##'K1-&KaI&0<<Q3-nN@2i<sAB6d4B##npn7Cw^g8PBM,0*5:/2h%]r)h=lW+FT8R'r,,0#lo[34A5ok%ovCq4*EdGol?jP/q&MU0SrN?4+9&p#0fX01U&<_BSHRn#1<L.3-?NN#Gt#d06^21#-27[BXM>i#?MiU$;Cxi#$V78$><nC#&J;*?x^'1#$25S#$Wpg%q_e.#+evj217'x##)O2'#+F'Do9wo'k>aa'oQEs'#=Q^o4ZX&Do9Nl##c^QF.?Zm/v2qXEdsuHLJ/5I##mqrC#b&<7SF+T#c,DRG.To@$VgsC.BY`'#0`&.I<75w2he>d#C6L31OLh42LR'hOxZCd##u]l5+Z5;Bof@*#(oCW1Sl)]1OUt1BLMw%Btivqg1dNYF3II=1Ta.=cufa$#[0Jt'5.DO78*tg#?^&Q<P*CqBt%JEqfG7a2h[<94c5j20S:w=4FT/8#ar*Z6@KcT)0?ax#WVt51l?HH#-@vB2H0Z^0ib6V4*_h15(5,C1f^*W3ICh=.ohlC/5.7N3dl@2f5-]t#$*:h1dYP><D<J8KMY-A#/X3iIBeA)Cs&:s4C($dNDduE(Tl'/97Sx25k]v-D669j#xX*E6d^7J##=6#(3&Jr%Tw4KaN9M-/Q8q%FGV/v-^)?0McaYL$HOm(/;,:6C%IC$6W8ATD2=Zt7NRu%Q=M+d0Hmpm_2u++Fb+[Ss88C-TQ:I7##3_@$,mnk;gj)v$$QB#3e=8#(3M6A(O0x)*kYl,,-HZU#*bq[DY>;j61n6Y62(etVH>CxCQXjd0kuWF+l%%<rgDhJMfmtWTmVEGCg6$od>tcYU6-h`5AqO+'[nM>##4<>=h`ko5CG%d(UVd?(U*]8%B,(w5BE,sStUXU1YaU]D3mcWed)tu19Une%`*_'DN$)M'r$>b0nO_j0o&GPKtWx#K<HfZnGf4WqZ3$89MJTCDKpdYo8JBQ2-J+<(qiD$%0%h2CNV1U.sIM:op+UDUKC7d3I*HE'6YRa6va33*T.nR02*XF2h57;DKd(ch3<Xw#-9P:0X*(Em#:0xC5?JjBx=&'s7t]m5e)_I#dpJ>Bp+ExA`jH9Bn1cN.#)5d+EoWUY=ot5CPt_0C8d`g#oa%wNGKdP6qVSt[@w^?#>Ob'#V:I3I=2*0Ki`?#(U'?F/s+4[CouNqCNr#iPvE+e+Mmbu'-NHcDnJ)#-@0CnSUa0>BY4=[CFr8QBAX#<TMeed#lgb/3Jgqb#@'xl4K_8q@tDeFWCwA$ND7Cb#A4$]2fN+sD0dg-3FDpU##Gx;#cDa84]Px]$;E%;*I+NI/w?_;#)-T?A#;4tICBF`%r.VF#>CZR#PE`.08<t>M+rir$3kbsC3;T]@U*IX*DTSi(3iF9&BFmsHI<U5q72j.9OS8P)gR@Cg7ttP4*3B-2L'RS4FJZ55x(ko6reT,08F#t(qI0'%rls_C*Ef[7B]loZ`wx6DcL_tuYIXO/w@EvRs2a(T&:j?2YaGB4&Q)NL/QUs(kK&SLTj5YJplLiC7&:9DW)2@_.g0/TiStCHG4O:-wm%x5FDME-tq7o#&m;^$W81`7=>2U5e:<6Bt@YA_Qor?:kZ^)@ow)FEqt-:HE@bDnp1vtF1Vjb#*G-27<Dwm6aivDF00]ABSZww-[f3r#<W'xBt2*gH+[`'C3r_iBSKva+]X,2/8uU#0t*(23/_qC2P2_XSEV/P>3Q=_1oojwIYK8a1N<Cw97$YY#*(1G0t/_b$`eW*),(UD/ldiYQ^MgG+bxI6F00]TBR:%i-]b@cLgCZa#N@.kB6o]q%9u=YM-VlE@8BA$.#DC%@@TmBBQchL-^jDq:3eOW#'9jfHvp@->^^ta>^^t]>^^u+CrFl>#%C&N#%0pL#%_81DKK<Ar+jMrBcCM_VG.)3G3g6fIB@5U9O9ht/5.RIC7fqkDofx2@SL(a$]a)+2Q[%-5H1p6#B_$G8@W6P0MDRXjk/n5#(1U+GqkVa19^a*$7>i7I'%4xFANjY2nI87*D@0_Z]8R:#(Sqr6Q$/;78+#N2cZgN)n`M-#bPHx4A5kd#$<^d7v(aFCdDKR2K`(g%8ItN)nddP(U5HE%64E;1:.n'2o<A>H@H4);+rCQ&G$dS1ln)f075ji+cU>0#BWPYuu?1u6>ITg6b/]-2nbwJK2)QxVG.$.$_Xi>/w@UTB6Rq?/q(W8#%&sw#+R,t2K_RWBsb@_3.QC@##>A/W)#T]#wRCL1M6]s9M@*u4H^]N++w'e*/$_a,(s<f-%oTh#ZEsl$A][n5>4r,08=&)),26g5Zx2iBn=0DBk`.71:'3['jY1v%=9Y<lY`D0-^-mo-F.eXQ;w`8$=t3L5YM9GDq0JmEI)*?H,V[L)RpRR#[%/-GJRl:CWnH&>Z2B(8$spSpm_oj$VUi-CgO-m#o9%-MVfEH##DDX#@.=:AlsG@#4QKAI`KtGHF7V)T=ZijGfbio#wKMwfP$*6R8gPW#@7CwC:fAv(/+eC##BHT#jZW&6+8JbH7g2.opFx7##OH5(W5vg)0OS8(Ul*o#)afG06f]j$Z@595*-,n#Co7XEPMQmB6epk104tW85WGn-ck#_B6xeB/nxggmV%[ZL2L5)q/V7%#?NRD%m=VtH=/MF6b,fI._UiH##(rH^5;5;AZ^wEFi2.:&53+q>#&nO(UVva%GrJL2Mcx;+*g&XCJ5>WXEXbc2,&Fn8V(0$DLo=B08CbU&7K(FVHPEQ.EQwn#+KiSHF+)c#YYf;'/'Z$erKH..vuC0CN2,DK#g$a,-](O#?NHuKBN;LU4jVWrso1mVI3jP##Gv&#xPAeCfQOLC3B<i%H]tr3IY:-Y'rf26bW/006Otl$NPe<6[V#;#vMpN$M#$Ho;x<xo;x9I':/`k%U<[sQs2%6*OOls.'m#L4^#<d$Fa051<_2F5[k_wo4atP*K+KZ/E$V6)Tc@c1MomX#?OE$->e1I(/0nq*/BN4#`=1*/$&li7p:qG.C)+v##EBJ(:$YJ$TpSM60SKVHcXkWK(/rJPY;3V,CO6Z0u/2397^4B0?7uB/r,AR6;9Y`$FVarI97&oo<GaFDnD['$gXHU8lg;PP?iY1R9VkJ4]g<h'1N+/gR8k5-b%kJ-b#)4S4k'jN`U3k#9kG3Gf885:OOFD21-jZrdXSkUgxCX:fVRNKjh1%/wUI@#':FA/wQu?12`0JH>NY$0Ftn^2W>:#$VU[54A6,e/9lbD#].@3UfOe$(UF?M)L.TR$&8oJD2W%s##&*J+GLG5#(-DTUgRS&(/m$$40X+a^1b,r]P*[%C>pD5,v'8H)R/7,)o(#r)Mb2R+LZp+#^9aK*`Z`L#E1LK0qd=+#+n`^Y$)FO1Q;Eu#%^A##$utT##=%Q#L*6PW)Nd6PujTU#(qW(:fVhP5iH'eK?8LG8^Z:2I99B^*E)vCT2#Eo$<ds9'x>NQ#;mtD6d$Rs(UNG@-]m--2Ih17$WCKl)nk&2)RM]X4b^B/6W7$R/we.H6W4$mZXc`9#(AUl5v8#+Cx:S0lKGd@6F$v&*42#?)7#W8)RRnr#Cw;E-[[I]#&G_)k,=2%##>jE#%9QBB6E7(#(rq819a?d19jEe1:.9r/sM.(%U2,*#(]4gD^g9jO(gQFe8:*p#'VW8lv9%_EYsIoF]N+O4De0wJpr)W'MP0U'Z3LL]+gt*Lhb`x+a1)./6ja(023#%BpEMY(/.Bn&nu^fK83B7#4<R;C.op.$XRH$F&Huq)i9VG#:0XjJ:Ra.92Q]A5E>gdWFB?AXDML7r==Sj3)V;8#1t&`Ep[62$>`0Ci,Oco&57OV#_HD]KiN%B#YY:RVl#ph1rRYY=-[hPG/3mX2T%]j,upGrCf-*nC@rnIIo_/v19Mq3#$it[3UCvpAd6)N1O1F73*ZGhI>9g319NgO$Cra3F(muUBO`BUeY%l4&5?BF+Kjtq&GvQw19N7IQ(q$]:QWDG##>=?08:[B8T$&)0n@;dbdHN[O]isx$jU0@o4WoeB6AR9/tdQD1/'@9HHvY:#ItoM@SR$)BuJ?5<D3_(B3vCd+E%>G$>WBT#Ym%vF]Dxv.SoEJ'w$AZ)9Fp6'w-Gd*ev79(ri]/(nxp<&s-Qo<D5'gG+&DM$24F7GC^b>0#[pw(8oWt7=fbRIohcrBJv-c89@RXC$lu,(xY#F0:bN)12V9J/wJ'v&t*-$JR^C[g3iOm6*;fqk][_j6*^%3*3nx6#-S)SCT.gY3GhL9X/5xO#[CoW/mjWi9=$'x7;;hP6]vR_#OsR5G[D)u<;70EcF:d60?7ZI*F:r'P$Bc,#Anu*UQH*(###./)cp-n#PM;hI'%4q#Zs[:6E1)nS4kJ_#>e@6Bp.wX*/dLd(8i8G(4=SI#8wrX):9#.R:QLA%uQ0pBV8UKC&S0JW(n=ucgUK_5ifN?CW$<[),C*A$egAjlZfZE##GNo#'VfaZDSl23?jsxBp2Jp=bkY1BmuP/*I70Y#QS+X6%(7f#Cs1Lh.WU%h.VjhEqbj[1g#-:8DkM`_JY5P1FjX>HFo=BG.%Bs#2U;54A?&i022v,##ec(FKa,W*HEn#7:Zr_#ZkKL/r#kD^iNTR7XZ`N3R@fVBp3_1#qP+CBsM;?EmfRY#AZ#.$Vj@iC^=C)-$di#%Vo3:#'a>DC9Y$J/@$^G^6-3IND_CC,0:B`%Soc(BUAeA-$a0g%Z>2MEhQjK-$Dtd%Z=m8I$boU-$ux`%s6*@#?`@=^1dhF7^xugK-LNRBQll[Bn4':Z:wR72Kda?%p6SA27o)H#%@cd-V]]e#?r7D3E-0^Ejk3$hffK)3IiBHXA999#YY5D/wIM=#`XcD6h4Z#6*J_o(9j8w#hkN3CdV^8BhVnTGe2+uG-Z&5%A=<4#x=L+:1uH):1u%E#%rKU#$lc%;cT,R(5lgf/[8`uP%-P,#$t*>#&7V$##D`M%<rm$3jTXw#?MeX=VUq?Xb1-;#E_RP19U4P#um4Br+Ljo?f^]EH+[i*Ge3gD&p0>v#@&4i=]KmhZrUeA##$FV)0M'HBRX6ABnP$h#B)^)##-J$J*[2@=A0tcFpca[ZV3,b=]KA3#)34h#>PQu(&.d?-%W.$(/rg.#A=NUC46Wn#';E2)GCe&)GFPT6bUBYDG_C;PC<_nRq^k,(T_DfDM_vA(sIQ4Gm*uE?-WUWA]8Ot##Tsg6b/&Y1N[GtIs6kT%87GN4op$tMe7l+G'o5JEajBGLgP/'2G?voFiB<C$rqf[#(^brG'O)#>.]b+6*EW@#J;OEGe2.X@%8t(6*j6:)n*`jFKKB--VQw`E//+E#%)Xo#%)g_#@iE]#EUeO1:4Mq#6Y'3s`*h9#[=gCM,(*f;4B,T6Y-:U7C5-D]6I3_)/F4>#?V>@#G*Tf0n%Ch#>X;a*e?CD+*mXG-[TPf#?HXc#aShgn7eXV#@g;T#@pGW#E(7P62Ubv#r@',[8Ajv/qo*F'xELn28O0l##-1u4%q$LHGkr9%TXBR/qLn-ZV>-1$l4LtB2ox:f?T7O-;C_`%,u*%2o2,#C3Pi]%hsPT`,_YA@+-eWHNtbq*I]B,($?*5.<p@C78`63#ZM.;8V.(:-dC/?H,+HP3-lqI32$f%3F;d83N4J1'uFa`#aAkk'5B2BD&WIq.=XJb(K@>:'K*b3V,Rpn#)c0g11(>t$VLNBGe25-B<N4`,[jNO%Su5U8UNRW1:]ZUA%<La$4@`u@BSbh#H]#2-&)D8#%02G6Yh5(#?r:>^3DOD%w_Rj-Zinm#GwVxBD2OZ08E74(q*wH,fb:a'j4wB#=qhd),Uk>8Q'YP#;K5+/wn73$G&`7C3O<TC3O?VFKHu'=]sF?7=JOOND(1'LfJ5*B84[5#-oD;VcSLmD,hRRCgLI?mj[=I?;8uk&o]e]YI+H=_1`)TA5$4_(<9bP&+ao,(JFq1(3(J/L^pKP6ch'OC56JhD22h2(JIr7(:4,I(qk;Z)Sk6'-*lE$#@)@k03s31_1(_q_0G6@*GB(*_/<I&5.Fi4aWQnw`v(+e[?_x5_.w(V%19UnH?J8;$4n2BiISql6bAK`%<w6>$V`JX$V_^F9MK`7%kf`knSNwa^jF$/.E,ac#YvZ+(&8)E(sa5B#CHW'2M`NQ#&td]5bbpc5H.7Y#.GOUSW47[%9P0=6UV/c1xrT[hL_xYRgNS6+EpBN)GC_&g=iq4&@<1;YG*2R7@H;V/_=?t/q/:m-<:..->l2cBQliO-Fx-@-F0IV8965E0'c>wZV39j17u`1#((<(3k)%XF%etD@p3Y=;GxeR051QAE52Fa#Z1g/CTp4x11<h^YZ)bY6Y*?i6*2QK`f9Mh$;R_0/Sw6D,Yt`K2T8o6reU2H2h,h])lR7M##ApU$<nLH18l1Z0U)UO0MLVN$:-RdC=3)d0ME%3YF5KH##N3A=a,X=-wH>.#wTfl#C%VD06]Ul08Cb9-w-p'.(Wk$CVkMx/wAch$PXV>/[ga=#>EEHmb:WH-C/)fB>7t#DoL2>#S1OZDo'An5]rh%DKVbn2SWiKG^F>i(hx&/VgDte$rtp5#fL.Bk)P[x*E=#D9iY]Q/Q>AH*-aj_%pWwr3/E/j%8?oA#i0HXE5?V@>ucf[#%Rks#'+:h'209vlY).C#$(;0(9nA-2oO$V@C.]IA&&C_A?Br%FK]#7#:0FUuI-XR3f9V$&^]+'CrF`8A'FwW)GC0w#&>wJ#$kC-FiW?/#4vV'$#XIn/pabr6_hHL>*s*c<e5q7@,jPm13#.9.u9YP+&%j.$((_^/paV#.83_#13#.*6;2<M08CwA.+oT3&nQs$A7QHe-#F3?+9;kd%9F$q#Y$=KZ<./N&7/ht$VWE`#GG7*[pO-Tbpka<0<`0t#pl$neVAmB0j=su._M;.CfwL;#?(V?EpwF+l#`gb-x,pvE33)Cr<];d_.`x@(7v1B#@8anHW5vP2L)<p(UC-5+M)X%(qh.h(rS=.B:iD?2Md3;P$N5`A5KeH2RY0VgNKGU0=r5m08:n,4FKAZFNAlq18g#?/:pW'@EjG=2h'Mw4FSS[C4].+6c4`[#&YTBe8t,$6F^7u##cM-^OH$E#&PQ3JP6'X%XivB5[Q8#FGiQj0n>1N@r?kJ3F)W81O4jl(V(.Q#0`h[5`(P6#%;P0#&Z8U(JFng#&&%7##1`J(rS?B.(UkP#+o,3F,=f&#$v2'##&s>#fL(B5>2aFic4QO#?i0Q##%-`(V$/Q#%`t^Y`XBe6;.VhEG5cs#I6G*6cPS(-?9[A$^uFQ,[=rO^M+Ip#ZOnKE/A[hCNtO@95H]B.>^nL/xJG&#)E=cS9PN_#$aS0C6stq2mR[8(qeRQ-GD#J%=N&ZH=q*f12^7A6Z._f3dmQn&POw.<LtM#2N:J'&53*s1Jv/8(Uk9G/?qZ[,#8*./wdx+#%8^d#&Ha/%orcHE/A=s6c#1n#&laP+%w5n+%wB7*`[jV94S$;6=_(66u?:99l46>6u?:'*DAlO9rXRr#%:JY##%mu$>gd^;JdDP;JdDs6F^(@#@ME&CMl]`+AN#S##*@8Aq5c[G'PZGAPEY<7YsnTG$e:6Js0kU#>VX1(:eCR(4EJnL42=QG)L=+2VfCLF56lD1:RWp(4Ne?)P2bh9#vCx5eLJq(/.PT/@[an%?(nR5?.__FJUu+0tW7Y##%Us#lC]rn#*ZM/9Ksv#JW0$/mN=pqK.FF,>:@_3,W0Gfx;R//50$X5^1Mb'ij)gJw@@bITvlXtEkpg.qZb2f80Na6%9H#m=_bDPvxq?c)HG^%#]j8-tRh*&a<i'tAKPC2d9Wb#xdDM0Q10RDgI1j3WKCs.oi4IA0W@'FB_vFFM%N]&5U/H$MYHS326hgMJN;s%<Q_67oaq'Z#DU_>ZV>Y##@'f$r_M-p7$m4(/Z8n&jC5:D:TlBk)+k702HRl-AQ60-VXxQ0Sb;d-XC9l/liBP#/Qbl7<E0t13+r_b``$,@Wb,b-;5fE1Aj=x]$?#r?;f%S<j7ea/91uB+c(>4)1NK,+bu83#3CxS9,SJ^C)[4'%r9-c##(XpCUQBc6EaUk##&-7#T3s<1;#d0aPkWn@ulM--]+>Uc>$Eo)29ZP#ooCxD^Tw>Cg_UdE-9w/#5a&U4bp)>Bp+EM#$m(Y#'+_Mj)O@56cP%Q6be>*9D&>D##&Q2)88^lg6KB67'`3l5C>T/6$3W?-At;U=R8#)1U8RK0p7WJeS_e:$vvDi#$jh###7xdEI9to6$71Yfl?a]*-j3$EI9tf6$6kj###]6%<);NGu`;,=cfH./PJEg5(#J0##6OL(;74h(;2V6(7ur;2P2P97&pj_GBo7qGBm?r6*s51GgbUX3.F*75vx&H>`vBk#(/o,:o=+]]:,ZiDH6bt>`w''#-q_cE//+o*Jf-UDL$5S0N%op0n%#`=am3%#0oaNE-Y'g06RS(-?VDO$Z%66NEHo:]X*oq:AZ2iG('I,FxsL:1:B?hO',>m/x*=FKAI0#HWaYM7<EX$%va<+2L#I8%Wa(afPdaxG>=mD#Y5GC3Jeb52h@$B4A6h/4A7>^2g]o?BmX2h2g]oT3/E/j&m#7V4K_j$&gr%O)IY43#$c[G>vD`I(:d,;#C]FE.%<9#HAOD3D5^:46aE1QYY6HxD>Y]mW([<m4&eJ/#s]Gc3`TQB7on:D%NnTS6cml+0>Kg)#(1*@F&c;;HP%#3DKq8jF*;DW/r,:`F&^sr26JLI6[:*#0Y&WN#$c]&$&hIV26Wn[2L-_sYP=7'6bfYh142://lmP6#mHH2C3F'>BnV8A1KPE-?VD2LGDZf@06hE_G'@r[Ck9T@4Hir@1:,ct7v:a1DEq(K6c+cb@Y-o4=b4U14)@'p(fdWA6cEY-2L[h4%87o(6_exD=baHY%88I76be5'5_us6E`R+I3DBjb/TElh14:Cf64uVK]VLH:$s8;a'mkP#/qLnn>&d9bie%G=78Iat5^.e1I:X#'`jl]L)h<wJHGYVc(OR'v8$dePBs[c/h[Pmkr$.MHr$1';1s`)[A6T0r0O/-_%qW^qgk80'$^T#@FGICZ#[we?j`0s95`gR&(J^Ww#7LgoHFk/m*)TF6%-^-E&5jQZ'ij@N#0a9F=%jwI2l9rR%5]5slYVMv##45h33w2A1/%_IY_9gx%:_<%6>%BS$7.0BBigUbGeJJr#]OA>#%D9($vS.geT%.#3D9O;,xL],##67d*H`t&*3^WU*3gmT*4$#V/$qd:/m/xC2nPTZ^xn)16as#T0fU#*BR+6DWW+*X0NYjHCNb>_hf;CP$c]pIDH*m]D--eXCKLRuC3;&=8RmFS[ux[K0qDZA*`[*=##,/w`ighwD)NJ>b@v[H5$Lw;'3NV)(q2G.(q9L##>#G4r1L$EK-<460<IDnHwgCj.6@Wa.#15H.CEdEMeTve<`tYZ-b#V'#$a_;VGChi#r60vBt'Ik6asMb>v3Dk6*E_a6G,CoBM^fbBQkd/6*D,9=Di30:S:X?/s*tu%pfUE)LS2b$#r,FHG_,8&Q<Of((1Ie9R(6;86R'<?[E$]IUO^E:fYbQ%:sLSCEl'5(fcOX,RP*N$VUfF#$t?mJT<<Wrh/<V@8U-B%JEJ)4GG)h384G'7(epv]P4h$06PDK#EB*rS7E5IS7D`>#Ach%SRhZn@C.>w@tDtID5V&tEmZ+v6bA;%7D^.3T2m,2#%'6P@8;X?(:(I:#Tt+s6+14n5C>Z3;lX2b1gnCn.'uG(2Ih9hgO/6]gR,;w1-,D=W)k)/;H7%-(pL'nM2>p4BQRqBC0rjd6)>9V@rPeS##(Xv#bm*)hJo@36$c^2>?DWVNfW[`E/S87DQ,[q@o[)C),`Y_#]OgY(/,Nt6VK:o6*o1g7v;&IDbFi@^lD8I-wwY.-x)/E/pE+K8wMpYDIcP=G`6?,Dki5xX+D#/bbl2L),UG+%ox9Y+h`rf(Octl%;<.V-VdV?06o%2%M&PT02;]gEeMcXK<xN^4L?Q&K30:KDOCgQ6%TDn6*h^[&f,.NjE-+(#[^Y[92*d_-]v:q3`UQ##W#4ZBML450CgQ]$XcQ5Efv;M$XNnXEbAhIEfx7WEc?7w$tGC*6%R-e*4$<C#7hmMjD_/AF,+>%a)lm+#5A[B92Gc'%=AY('kCb1#vS^u#MV+A.+ot$$<)1Q$R7N:(fdB5D60I<R=Pq^%`ahtM,+2m962MoF]ahdF]bO(07I5rD2Dp-#vj49CLR=VDo:,(Eka+D'=g?8E3NMM+M&FP#RVa#G(0Ku'nBXd&ln]e0?6G1/<:gT5E]hH'21dF8U+HU$*dtUDR+3-$$&,#1s9d,Q+LYDH*MIDA+K]*#'C/SUYvc.CJG0P+]c+>.x_7.##dqR$BuO(:qLV*#$1f5,$%0:DnFGuFi)@ODg.#SW.6V;CW6PP&oV,xGe5.j.<TxR1$WSjFMDG-B>.s=##*QX'm*fW1S6v83)CNP#?k)mb.j``5Y_=j%+gK5(pR_G'2JU::JI32$P543D1)qvWgnR6&wGv$6*`ig%:0$Za/J3PGe.Wn.#DT?'lCv&4`JII4_;Kb@or3R#Cic?d@^Mb4,$tpDaUe33[Y<+K?8OpFLMhWGHaTvD)u9nZc0]/@t;@HIx-MBH+Ro-790D)1rOqB5dol;Gfj<a7<jX`uY,#L19vWB)p.19+j(Jc#pFDIB8]1ae-NKx1;Ln*5-HDx),([UmL.*R08FYHTR_R<HC1.)>YG/`CmDvGFj-s_(TC`L#ht5iH-gEmH*MCmP4E=RH?s<-J6W),F2&5i+1ixe*5N(g#[bdChn:(R17b$<::4]d=Z3==B6AKi$^K8DEPAJY$8%`V?acsvC56a>/p<;]N,:P<Zf$=W2NFu`=PNqm<ge`pU@;TG=F+p,=K%pt'MJdVVkrxF14D*:)j#vbBofgXk_p4?%gdZ$GvAwU*-cfR<g&SbBsA9p#%V[VVp2-X17s0-$+3XF/p;xa+kqN%?u__(N)LTu#hWO%:VRsS%:^Ba9UGgd,JP'w#:^`->-a18/=_1KZsFX17^oovBhu%`7@m-BAdX8`4QoK0J$FFZ,`e(<7<0a,0i`VL2hBS]0'<]KB5KgE0?tT'10-Wl1;s%,#%VxaULnw/#&?<P##/I;6^#jsMG+1[+M.sRSqW,O3ujwe4G5fT4GZ0EN`LRX-AbR$##+@k8V]_R38]Fc-XIhHB8K#[#@nh<Eat4,igJl*$CE9p18/De5`M:f3=#_GNb$j))H@>Q+hA%P(9oHW&-LOFDnCea8le(C*/PH'#9X(u/94qd%VcvkB>cjqddCLK7'J,ACT9OU1F)tQ=Kt]h7xkOL4Whxb=h9ch/%K)BlYLiV:m.?QB_3'7f,q'GbA2?R*3LAf13G[D#,48p6',NN0O[+W##>/$5KPI]K1vpTms=uRS[Du*Bmuv)Bx,:PkO4bZ5)CoN41DYNB6N]G2K`+$r3XIUAZ%DbO%fes#Va7$12]u,.sHr#_fYAB#t:[^=tb9N7823W#;jDca8)ZI1EO&0e>@umO%mM33espE+A<?URS3gh#Bj2@W:r[)BKW>e4G,a->Q4_`<+-vg:mKG0Ejia:(5JYhs(T8.4+&?>HFo-^1O`4(IYXNwAruH>FMBFwCiw_K['_LJq=qkW.Po/r-@Kk^$;<qJG/QJdZ(X7;2hdqeV-H+&&7p;lj3+ru32oE[&,dMoZ*-'OC98oSJrbG(op$b`Z>hG67s]Sh.U4e4fQ25R5DOQt(fjVr08E986aujm=G^Y85>iT7V/05K4'3)q08hFFik=r#$;LVV#%(-%-XU$&NF-wxIU,llH*DD&GeCv,(fc1_1Jfah%d#mH)GC/@$swtD#EGZj),($<9qKG*6`6ep$6c11N`C,5#agXvVG%Q,Pfeq;$VV/.PA:j8iFnubOD@$AW)=uECQshFfPZK&##5ZR#(9Ec<0[cr1g?a3IwFPi=C>^[H<kBS/6u-65$plR8mJ^g(:I.].#B]?ifHZ##&f%)b0mP:JWMV)0=0K75.2vXm&m.a#(/7iA2iS^-[j*Q(qDl&#WNEaC56=8eZH8B4gK9%&K`9c*)$TnZrNg#$uTEB&5OCQ+%vjBB)s0V#(C[+B[['61OX.E-Gbg3##)O;$(Kf@B6o%'A,67]<`t90(k512-[Kw$l>$N:#VR'1B>P<v3mwFx0HMHVH%H&+6]$rS5(,GK2M<fU,Yf#o$-<0Uq%gK=3`T^r5[o:7<D6R)+GZm+J?LDf?adK)oP1%<nS8;G6,n>xEk-u8&5<K_#an8;%87qm2pGk2J?:AMF2.M:(masK#8%*/-Fo2h?WTLxFi;MN/PQwb(kWv-Vh3BsG'Rd=D6x-M%8FH<(MsL-#^*w[c3q=&EDKB[B8:$g##dCmN)'xwW([d:^iq`I3.PCD-*d*+(&`^v@?5#TAZ%DEA).</CUgb?^bmWFE0qW/nok*o##&kX'DVZ4$cpK$@tDc/cYA7_$s@tJ''QTO1:B7_#K3mi1Evq<E4::=6c&In_AS%H<8^Km4EcIpHAO&&QiN`-5_cG@0XaOP6;/jZK1#^Ef)PJ:4GGi]Dn&r?+-&gq(qjO92/P&l%86o-%8:5;#>,5,C>T#tjCw]v6?HrSl=cq3TODf#F]w8H(#g3v1k(7:#$tBrH;RnM';5GD0>)LC(JY6>TK*J%]TTmo(JY,[##HeQ#kxt$Zs@$q$Z.d1>>>eSO]QRILZ'ut19x:'<fN090u7<p(l&FM>'s9<1:T)K(4X?j#.kmE@t'm)BClYN.(kSZ%qt-mk%M*)#>>f7=B&7[@t9?M]4mxl#^)PLpBZifRZgtg8w.lq$3ec?oLc^6+A;p,lY:#@#=^uQ,>8,Q3GAJ#+%vnB%UD5*kBH>%$>VN:##,^T#>G5]#CAlNIpQT#G/SZ9)15f$)i/s5#1wUH3N4RCT3O/v#$1@x2Ju72'ip9uXYLQM/PHi<2G?&g2LrZ7.Y9Ks#*r3W13?#j>CA2j5'>Xk$e[:<1;D;1D0[kocuSc2_f=dndrI,:/VGhk#&H,R^iAJp)GM`d/V#d&#$t+uSQnu$#?O0$$bU1DBbFok&58Ks28WiV#>G2p#A/0#&9(wb-rti-##'SQFa&nZ3lT`Z##.%75D+Dh6x-rUeT-w>gN&$>SnF;M#'`i`K1vTDmVJb9'Vld65B_fn2Q-XeoOt21&DSJ#;O_UW.#1JS##F=N.CjnGa`R7O#N'g8(fcX*(/,XbG#gX-(fdNQB3uXdI'/mZ%:0$ZJFk1aCC2J#uZE@96tK`//xSvHBAD$B+hD>c.X68l##7Ko)PA#C$M+O<4(16d.81&h.'e[$H>^ae(9t6Z#DN;*C=N;h22>`j#$N%4t]&vH#D[$+03&C6CPVr#26AsD]lYGd/u.`1&m=o_17s026(;AN@:ghO,nbZf##<K018w@p(/:YG#4E7W4gKaD#Y>8-F7_a./J=Y'/93@HB7D`H18&60##7EfHxX8b17j*4/tZKn**dCA2H#QN'0QuBol9$w0KD@b?aeR)#$KbN)Q>Ek##I$j<0P(:9U2xu(fdZ906i/H(QZ0#%]+/G*D?N=2+x(g(h8[v'P7>X4%qZfPuV_/##,0g#&847#$;RC)Kblq9<K`pK7oVUDdfe-Fh-m4#ks@1(hR4ScuUj8]u1OjH*1s/G)9G;rvf6wC8/Rq19a3>/9l[/(3;%?o:j-AIt/lJ<F6Sn@tCIHCPb6n-@@#7##Po7&'#)g>ueiV-ww5H##>i7%W;HJ?acd3#Z(Wdic^(b+0jLJ0R.1FoU)o'B7YJj>J+L(omMK#(3l[R%JkF]B8Ih:*e%Tu'B/wxs`*CJ-;bG?#b4+Rs(I3`78ji`$'%5YsCe8(-Wx)q('FVJ#O<=I1Dh-t-<U?p#&d5KC7Yw<KNSNu#w3F/?C#,hBSW'o9;Q'OC5a0xs&=e1,?x$,%qMP1'MN7J#FfuG<NleQ(7S,a/9jC35v2,N-vL80I:6^'#%UN^(tQg_?EPq*FcaoO#f'f<78*fr##%'j$G7'V4$<_UZXlU^(/Em5$EX;G6546DBuP%4eO,$+bDGkAK#/`O2(plR9kf'G&QVl7=+2jkH?G6w#&rG;7#?$s$;CHE%Ab&03`a8f0?82<)d,FT%Lt#<IC*`.NERQmE-Nw=QV9Zb/92tT#v)/>*OrTZ#1MkZ1:[Bkic4%4=B)x<+GLPJ3PIYj(hwK*)qsJhC3X6TCPV2_+L'o5+,bX:#-$V$217095^egG#*^*oO&dF[#%rMC#$$S58?kUtHBoPB*D?It##@jq)1D5a(4C1A+2A5&0Sb[Z*)ij)#NZ`uH?(?n:K0Z@5(#Qgo:3?Y2]1(A7:I4VX%a]v':qV27#>Zd'3#'=#=xs+-Xx@:7#Eb7CJdl;>I#Z014r`I**n-(#(0wKF2oruIU=%OEc-JR2Yxf9?#bCYX_;h$t6B^v#^;GWU4/jW7#>s>2hwTOF&W-e5fQZH8Ua@V6P;/S3.*^<1C*uc4xmR2JPQ8g#&Z5UXJe>X6]YSxK#iKpntQtK50&%T-VOOs2/d=(J(P*<*`ox)#`N+`.oh'm#YrwO#+#=05(*E8MG+$.$,/U<-^)s4Gu%J^1;H&t1;5pjlAMT3HJ8Gf3.*''/udeB<xi-iWFe9UC`_@$G'IScF*0Or##s'9#%ww`3IYkg(;@A#%.bI6C^##Q<EV#j6c`s>%>=efl=rD53IWZH3.b,Ek]-9$l[XpM#ZHnl'gVf#0)YpH$Fj15B6#?7B6o13Bv+lgFi`wL`+Xp6$=$><$cT6J6ce3X:`F=CQ]BA+Bn;J,3O^s4.>MQ?5[7*V+.Ra0Gdj4Z#An)I%c`%E)N7J)6b2eg2nGHY?P8_<1plTDI>MLI>E^&###[?2BSgNu24H.L##-%?%A--u0MDTSq:YLZ24H%[C`0?I?r`HQ?r`WV?r`6K?r`KR?r`ZW?r_T*3La=I/95E=?L20R<N[ntBQYmJ^(7)+4hnOX0jjY<BSx:TJs(hX0#i>Wl?ipE#(CgM<VdaIJ?@BM$>KQcIrfti_f>^Z*D?S:#%)%b#$c`)jt^LdDQP@P/u6:9<Nd<7CrbA26(ic3+Il9ACO7n:.V;in#)?sY?`[U9C*()o@pj[--\x3ecjJAc.er/9:Pj+GZX,-Z(Tm'4l*?a(UfI(n[@h%rPaT%AO)2f5HaO$VbZg&S)khC2H,>Cshx;-^(w<>^5#@VcIEJa4Tgx/v3*GC9]S%Bn?`a#IGP%0<W,K'8n96>VU;(-p`Ak>[CGnrG#p2#+*)a4+/kG4]ae5DKR:V>e>dV>YWe*#AIIY=Dp<p/6G2dBu/5dqhdf'+)sKPb^/r#iLH2k>YG='NL41A3g<80rGTV=2MF&R2k#r_<k+$?B6PQ.FDb1?;KRSZBSx:=Bp,]OCO@`H28F'^06i`F=f&vS5addE#AOTf79T[wVSXI06aU3M0t*L)#)bwvBFPol(PaK1#B-NE/95wI/nA<_95PjmFn)`QBSgg;#@2D1El>tn##&0H#K@3c.ZY@W&7lkO7^gREHFni+=%kb'=l*xND6]2]q[Kp:Fj&6*-AQ*bE`[=:<jxZx5gPah-*UbM$_<ae1sP,'$M#3c??u+-/qUvj:LnxD9r+5X1sVO[#AnUwqfN8nC6(s,C6(rpK'3mLqi0v,.os'F#PJ>)Bu.aeGlD6C<3Ib*<8]*f;Hc0B(L%&h10lDq,+K6Z0nHN1'kL;O$#<Bk'l%v7Smd:F,>=J:'CZsd1@Q6.1@Q5e,'^p+,_?,-##vZ=?adK<BSg-i6iiU+%fp[$,>J?K,^,*JQee+bQecxA5VbItGcTOjMRbC]ItE2r4jJwXli?IohLsgf#%0Jru>Q,&/U1glHthEKHs%'63k:d^JP7xuC5WL(hlK?rDn3gpHF7A&CVDtA$1AwAmdLmWBIA797_Zj[;+txq^=1oV0?6`u_p%BB>_J$&plb]f89@we.SmbB/9O&fqKgex+_Q@`A?0.k17)O2OA,gLf5^LQ(3i+'$`.67BH;m+K6Ui@G&[bP.8>qH4b^Aw3Kmb]BnEog1Q?LB6Z?Cq=adBd6b7A0CU,CS0;a/sArFT]@)]X>t0?XZ/950d6a(g,(W<7x#Zr(SIv=S9=in265d0?3uv,pt5dmTe5dvZa5e)aS5e5ZiK6V7IZrLI'a&7`dk*bcJF]o'%o$E/XD-7j_-b,(;ULP_Fr+UC=:9dFx0B`rQBR0gi(W:Jl:Tdk9/oY/o]NfHR1sLmV1sLpW1s`#XXZn]Y?r_j[#97<2IWg:YIWp@ZJ9GLX##&<+#&52q6J*dxC<1f97'0fP8q+[21ZaLiJeT;>HxneZ-*FCT#Ou[)/q0C1B8LK>)GD</=CJnX;GeLRDKpq%DgRD@?[b,O;`K;$@XejP0u(PGJ$1Ai;QVLPBn2`YBREYRA[mHqDoqFK?[CYS343Y?(JGw&/>lUg4FB@]'ijCJ(5V6j8;fnwBm._vJ$1>rBQl.p#/p8B9t2fB.#MO2eT@cv)i'&97Wh8q6?;[(:.wIV6`>W-*.URa-E^Onr0=<;.SLY>:.up;EDoQ`+h)+q0n,&o0eS95E3;@$B8J=p1;eS+$#D#hW<6,6CUxpE^3d;I(/-[-FjFlp(s$J`=*5k?FKk/E+M+:Q2lba5=J,[r%onln-ESp=1/8S9-^);#]4l$1#+Q-<9GXbg1<(rQiL-a$;KF<r&[28;XF,?-0A6`ZJ?R,sB683NENtgCAR8jO&R7&wjE[w[##0YY$vGw%2MYg:d#lSN3L:H)5YVh#=^,9UjhW*U1s9s1#(qO0Ht?[+2MY>H6`f.XI87SC=04WjCPd0,6c?n/#V9a'6_2&H=0=_7BSg<oAPFicBixx;)LVI+(8V_i#*sVxIC*S#Es.84HELM`#<Mvk'jGWx,ur1-CUfJvqULKB#-9J52hwHF*OxP`B=2RHF%w0J(kITU#Z`r*BR;otU7Pl^BQeQ=ZwmW/Hte#(6)A+R$/u,r/v<Yq(SaX9L;eVhJ9mHqJ5ZHLIt<Z5C(C>M3D9JrIoV]&-ZUPq##'mD#?1]M6)$%L(8_G&8Y':D6WoY^6,1-;(9lMVJ#eV%I>KPh)GFS+3Hdwf66?5C5IE]SK6UuD8PK1q$(VWn%/V9$<.?B')JK2J%=9FP:3H]BS@B6H1JKUCCW-a+#9NrL2qTnmHC&3mK#iAVBuxd/&PN6k$V`%5-[e`[@>mqx3g76I#m=X3Oxm,6#[T4R#[B2Lv$].d5VFHwH0v#SEK_B=-WqlN06/D8O&d8WDcRl1=FDWQ3.juj#*/l>17%<E)3uPH%1q$Q9M>d3*`kHs<HW`ECl`ua*N`A,%8-]9BM/>?B?UHfRSOL/nCjV80neHIUqU8:$se6_&o,549T<j&J$+t--ETG,o6BD%o4YF[(3C$j)Prkd2SWuI+%vo-)2M_R7L0*a1Tje%#)eEGHA)?4-$M@Q#>HMH'SZU$>v2'Z##5aRqgJ&q#$rim##6ftG)--4a)$G<2cXhs*E6Cl7<a4*O]>h[HVl3M##2:+'r>89TQtx20t2uW18E*L.`pNSCj*u#`gN&<IYiKiIX=lUJ9p[7(W?`c#+ut#>CA`kGHb;8#Zfc.'k1pY&g70D>j#P+$ruK,#2KSpnL^Ie3DWHk%:^BA%Sbae08D-C5AaQkBQ>Hj*F<^*86B,t$DqX)ke[.%?WRJE#'2j??WR64#%9Zx#(Bbh6[+Q;@'4u8(9^8o(qPVs)n:ft+h3G$$$MV?&h%.u]mj)j#*mm1WscY=/8]&+2jN'=IYv<c2L.':'20Ou7/7It1Oi01/9Cpe6^#Wl=Tgo#DC#9eux/(5;05vsEjm6#(UO]A$o2R;1:1c%((:Uj-(J%?#v&jV(Q)e8#Ke%N1UC`E/H8UPiW68lBtTC[8$=AmaEF.e.U#H6BmuuC#(qt10EM^RGe'?#]QMYYK6UMe2P<@L0;2n^(L)SR%8S4S26JB)#$M)]m'tj)Bp++'EcpvTAmh+YC)R4_Zr_n`n@]U8DJhq.G?eHZ%<$:$2JbV)Gj0Zu19E?U'*T]</w4%e5(lJwA8sNx>A+ug>A+r_->c9I03xWo7vjS.K6UP6]'Y=_=cEEMHED&,Jq^Y@2NA(.4+&aLBnFe47Jl>e5^hkN#Zh,p5ec-W(JFlo*+C=P%p/*n/8Z[<G@)dJ)6@8&BYfg9Nv8Xb>>lOS%uA&V0-).82Q87PCFupY(JI/U@tE*1##f2A#>6.uHFo-A#&[,Kr6rvQ/osU?giN-u'?;;OBjlOc16&/x2T./:%89=A12q^H#D4SVBk<mR=h+0b(:gc.#]kaN@T5&21s574)hE9-)1<N//&XT?$;V:</&bZH$;Qhp-]XT&<JsEQC9HPx%2JxM^ipNWO]e.4O]d$^qt^?-Oxxlb#R_^m0?70o%p3%,RCQk[8$4D5BR&pL3-?kkd&k^o7Bc.2#<IEq5(#KlI9fF?#/;UPF0@*]Bp*hPD2]I@6&gKv2T.]I%888#6&lu]6#$R@6pl?gH,n-t)GD?*/6a+CIC*`%b+c/N:h*sum=XZF#Z-@d#]O0]<dxOu6(BE0+,;=N,+L,g-]lT=#>j?C(O_%Z#8@2BWeFkt#@K6G%p$jO$=cfr/PH2m#D.?S4;eRYJ9mHrrFsv&/92V3)8wIt3Q3FxJR^7LbVIO%K6U).%8n%,+K#$B#.4oXH%H^5m3x?PG[N;QBtbUg$:P;eK6V-/$[6[)p1qQZCj15-79:Ma3f^cqCPtt*X>3S/6*31a).Wm'#$Y)8(0+c-#X86%CsvapCd$*VE<ZYb$ttZ`E0GjXY>a9P6dWpT5ej5aIYMFU$&j^L5e;S?.EO['RWhk=4C8BHRSGcX(qd,;2nu0d'20_=CO^E&;._GEo(@]u>AfSu0#&KeT1p]xOd9@O##4fx)pp,]#L:+iT>i.P#&Z'9L5Qca6gxv*##YG3JW46VHB(L$(7`WZ$*`'J@Sn/Qic58).&CLZ#Z,-X(W)v87^o7r1AkqOh.j6/JJ')rBudW6+:TZLB?:0XA5Y5.CVUjm2NM:iSe?L,)GC-@4%tIT?wZ]7=a4:s/92P1&s$CC0?JZN(hpF?$;;hO-'kIN#$c>g'kWoZ%W*B/`G:4?#AfUvh?&QM#Y[e,&+9_-g45DW%UT:3%#fYJ17oMP%0msC&lk_<Bb4^RG#AZo@'+FN'vC0QSW@9IJ]X=lBZYe47*-wwTjru<$CW'P&PsbYCg_b`%'d16nS=X<Cm8FCCm'aM2iv%4,uo>;X)3*J:J`%&##+Vk$E+>?u>#1O#vDqc(V_mL$*bS:#IZP5BQXii2gsMr7:%Wu/C=N'#RLLSEffc'CPc_&&[6)x6+B(o'21L:6*p*FGHb5h6*NJg4A?Bx/PH`j3`UgRBjc;)It>FhfSYB+P]jV06#Zk(;,7x,#+p:>6w2FCBoi:fH?lAED7D156*<A`*3:X&0t<(?,&[T,olO+/(9Q3q#N$0+E3i_?1:P[7-]d(xY^DJ9h#jKM&6ls9&7$k`#uwDx-*DW$+0/;P6]w5<#wgpN06Lc+#va'Y#@@hB.9.OZ/pM&A12@2$-$UMA'3w/7%t^Uh+^T/0+^T/0+^SuA#x.1v#/MRu18A<21><:W0/X&S1GpLX06gku/93J,6H1XmaDI;>-uk9Ks`kaR2H19rTCRZBBSf=)5DO3>@SF79-(H&h(j2:Vgu8Jd6uvqcG-3x.@U1b(#,d:M0?8?,#Yuf5*m&Rr(WlmY#Bh)_13WfF2u[>f#9+xKBQ[5b##eR.'k:ZU#)aIr(JYgbJ[>D`*`n6T&Pamp&692W#>pu_+a1Ii#/14Ds`EPe#xeC5$%HHO@,>qe@'*Z>+A<*;m#_HmH?jxVH?Cmw4,5M[G'o/@/s9e95Z/0-4IICLJ%?M42S'e+BnOHLBY54cBnOsZB[-^cP%=b(*bA#B&PQV<3.E^NB22Tk4+'/B5vt,#1QQ%%H?(@<[oe6N&R,mZ5B&^Tu?=_R1:UwL#YY8p#YapV$4?mMEaXGhW(nM^#'VW;6<>hv-]s.B->c/J%ouic)h1_l.(Ea(#>Yb1.'m'A<).X@$e^,_&ce9W;t+1$&6k6[&PsI4%T9KX5do8-#CBpcB2U%77#iIU]4mtR$VcDDQxp1<._:IjBvqar$<7C<ED@e3Jjt->->cGr24x5)(OL_;S%sIR/xGVOC3;rB#$r;q2hZtg0WvqX0ZmG'C5VC_@#HUs5_t/_,eAuB0X39[#$u[F(fqA@(U(8N#wIF7ULXCJ0ikbM1k(p<+c1vT6RYa6CNCYkC(wnU%SQxF#*(-f=02q5(3ER4(O4DL<e7d[6[fYP-CoRk#)l:/1PHb;(UAG>$5aciF0-+='rcP1.BRju#&?0$#%I]O#?IO>#Q7m9CWLnM2UjUN9%bCe%F?Ya6Ervj?awchB=0oPBSi#m+H/Fu6+%FD#8%3@DmG;:B`.h1F#Ou@%os,76,e;j6b8a&$rqxYm$>G+)S/otBQxk9^weu82cY=,2cXErCAJsS5AEN?BnP$9#%Dbq#+h*rBnP(u=&Q;I*Hejr(qKKR#5*;62mSkPN+j9,##1;b(qS.+-F#_B#&mW<A8)$Y#';a3`qgL:Vqll/_JE?`+bDL?$iG9L0qD]x88DbW$>:$'4BMWv$>i5H9jE3j;==mtI8=4&K6Tfu$#K^kFL*Br#&+g]HrtcU#_h'6>(dn4BX0U$#BV`SQVRWp#0_Z,G'%/LFL/,rWQ?_,BSh?56*bt2e7k>%)6PY>$&CgP[onbWZAK=8`MT#688fNiaD+aa-?t2-Q<f`h#$u`h$x)^S3&Uoh5CDX#(<(6)(7uc6(6,(%(6/Q%(2tF]#l]U2AmJlR#Ac[$5'[6V#@2Ii#$mC[#%'_b#$m28##)pt$Z.#$2Wc4%2L&;<#$c9I#$d+8]n/;b924cc(SVhO#4)FrQ;8Z^1DLn5#&+X+u]#WI16`sG(7cV4(SD[M-Bioa$>`9A(fbt%,@;wx*,eCP_tXOEBY2<$8ksclfB8E1j@Q(_(.9:1EUu,XR;sHK5h+>c6ZeIc6i]mG-$0rW#bq(l2j+F`#0QIoC5I,xLgj=W$(h?gDB01YlCcJ0FZevTclimBgk-(0#>CjF-$3X#$W/HY().Ti&evvlZX=/]#$tDHLg)Qd.ae$:erL7v6<v$QMGa;:*3J+'9<L@sB4:kkEjh*]#1lc:6W=(_2e_3$4D[dIW+^/VG&AlH),(NW*)$Bt32oIM&RZ,s##?V-4Dc(%D+krgiJe]O'MKF-'MKC-'MK.''MJNY3LlKJHaxu,+3f0#5C?bl@'>98#[IFk2heJw#%'HF#')&@#xFUQP?0NO/93CI=c9r6?b21e1NFj[qke(o06R=wk%L)l6reU4#?3?v#_cvWGH)Hf:1bN<t^ZOF##6nV(UZr@'R^u:EO.B'%C6k[*D?P7gPW7[2cYRGC?,A(Z;)TvE[aDI+]Vwm/qi$B+xrv?F]EFs^iB-f>>-0M@=QU/*)$w8qRk:>=e(RD#;w3#WH8aZ7C+>VBgIr]cx85lBlJg0@'_3CCq#D:FH?W_/q1&v#>XpE%t7l^T>2#.*b(ClBp.RJ#stGY<v:wa<v:wb<v:wO-(N1b%9kWh(iHQ5#]?l%#]?l%#]?l%#]['H#[<tA'PC6[$$fV4)G`<PsCx61k%^]m#$^cd#CAP4icF916(HV5$@=l7icF916(HV5#_]Y5icF?36(HG0$wu(9h.in06(HG0$?oS3fP6,,%$,5:6a(7S19uCDp35>R#&ZT9TnI=w-;6(IC9g-j,BwnO#WEg/8.PdTF][4.%K.PeC2bEJCk'CA6rgo[K#gX[31VbM6_2%h#%:B_dVIGB$53Dg19M3n#Dvg<19iO3*O6>t)8IS&#K0oO9,g1m0YIdxEL-[T%p5w&#gwM?14V670VBl[:8A:l&9a/]Bp,^x0p9FpHA?$u:9H[QBQdPT6(J3a*O?5nB<Nfv0tE-x7-oQS/w?qqD0TTJ;7%I[6o_'<D2KXI#*''q5uik)H*%bIpQ;l'El<A--?UVr(kx6%2H9cR7BoAW5e;pT6*d;M*OGBK*O56IQEjTh6@:DC4*JS[(S/w)#:'IVhg>W2K,9D[=DMYY.EDV8'2`D,l'SfF3-?eLB6HGO1:CXx#%M0u#460<0XcGE;QVFGNT(2)#I#oB0VDt5GWZUos%A.3CJm<g/Vw1j/lk*6-w7(OJmR25CNV2?Js)432epdra&o%L19aqGCNt<T?EYpq6cBl&>'rs[3.Vap%4)%71:TJc##5i:)Sdlf$p@sga.A2#'il'.$0N%,4_B7Y6WtK(IaQpM1sTs.)p^x*#H8;>-VP2.+]WQ(F'Se_90<3l6c-^mBSh8QBR+WSDKbj?`6>E(1VPKh0XEkT3+4,J0fKK<BR;oV19hwe(U.er(9iiM*Q`w(/Vf/Z@qEk-#[i7E#%2b5##d@D?*d&r0WmC#(:]-c#<sv<^iJm=O';b##Anx;Rm1xJXo34@O^kMk/9Hc]G.D+LCPdMfC*N.N6)%rWC55q)6asMnC5HNBqgpR$#w_O,XH,EnC5Ix_H&#kr=04QwL.t%Q6F_K.PD13n67W.sCrFn*#BDp@c,Zg'6evX*6*;]e##Y(u$^uF9H?Fb#ID@x_0Q`Do*DA2?08Icd#@r5UBX0%x0v0>p&vZAD2McMK0Dvj[Ejql:4A7GaBp)3I#$CrACUpeX1l#[E(;L'd2MP`/),1-U#&%Un##:i/$On]Y?c[iw6V2a13`UaM16V^sBp-G9##C4n33PEE%iSfu$VkN(()wgh20a[2'j>Ww:.v(S#$^Vm$srD).<K,='l8h>#wr11'j`Yt?$1RR96o*d(S-A4(8_D&$L/((J5$TjN`iLEK:k$#$f#xwapSRxCBl#OMcF,[(Mo?/P7Au8BS.nXC4f*BO_0ZiBQdnG3f8jW%oo([.=)><CMuiCCXap1CXaow)e4GA3&2(^CT2T<C5QTj(02AX-x5H;1hFVf(1BeW#(9t9Cdm?iBSqC((02AX-xPZ.luMhq'q&T2$wj'sI^c0KBQn%]0U6*x2GbMX1/?20(NiWC/[$WnfplZ<=lF[[ogC,L2TT<peTfSm&w<t>/9Fx-Lg'7wB6#cX/9GhE*-iQw#$axn#>F<6%NH0eBM:+uH'oi-#MBT$ngsk(Ejtg@B<S_VBuRq+JxPWS#%'_U#?ssf##'JO8'$(]Bn'Ja^7s&,FKeT8R_w-v1OLh517;d0$%8nZ;,.`:R>;EWFxsX?_0D8j@`EB&@U'MIi1$Ecn;N.4-YGYL(j`Th++tcp?s+k`(OdIN&X<Hv;mrBtBIF7HFKg?7,iONCB6Z1b1635T30,VKW_7DW<D4Qs4f<[NG-bpM#^=hu^aLHQ0p'tE<F@u*##)R6#/MkM0?5@aST-?K,PM2N5#)Pk#x[7v6ajH1%qOPn'2SWH-$@Z?$$7T2Zkefe[fb$jC9g8'jid_T/8K6R,Y]8Lu$,ARe8/MH(U#5/2h$[c$c-5Y#@(cfs`[fq#&XEZ3g'&P:TY/u</4oKC;6h4B89xZ03s)=?teL,.:-J/(LCZo`/Ce;^vqDM)Gn&+#NP/V_Pj6$#]6Q94B<hH$&fkgV-ktn$gG*<06h(#NZS:c%#ddo19F4f%3PXS:C$t#I;;>(#%7TieU$IVZ<PRW#>I0t$Jc^&JgFd366#v0/VFx;'S?sM##>?=07@GcJVCcL1plT;EmFs/AX4toI'Yo<#>QOJ$&/FqDEC9m),)92E^eW4;xg=O##DqR%>Ou<6'=<6(5Iqk#DW>UBShmF0ijc&0iiu5C5HDR#>[G5)6cGm28Nfs#>e(.Fl6c#.XbG%$%O@QI-:QgDn1DD#v+$K%:K6A)GC9a$>rj4C0V4/#$sc,lbQwTGeHsZ$<xf[CMn[sUELYj2$3k$gjq*A#%(md,wl):g2')^$kc410nvJ9A[$T;C9icb#[rlF.^wX1I'nl.PI<3'6,si>W39Ws8W,Kf5_Y[0%8Dp]&e.ab3.t*<OIBV/6]$4^.uK_*###,)&p7Q03Iaj2#&6&A#%BN:#'Vl_,usK0F0Td%CMm@?21RNr##$>#4dTMw3.YOB#AZ+5##nL@2LL$Y'p;pp-[x$x#&S]#->YHLJs(0['2fk7l;jVJO)/12PF2ET7qL&nu>'=c(skqFH@.pC>-0-%3TL5%+Cp$G#&Z8Z[N#;1#BaxXr2capXbiqa0:w*->-0Q:bck'006J`HB8JC/8X'@H8Zl:0a`obI;mx#F$*+;8%oobL17:.X.<I#]%8F@&(3C=#3-gfaD;m,0d]jC[D$tb/1l@e'7B?K/8Y,pi5YM_/#&45f%8=NJ#4p?.9nH`L,vZ7'(;@rd%=&:rGoss_6c4oaB=U-N#$`.V3N89g(;@]]#Zr(2^hs_YVN`7u&ljh>.uV'C&ljh>(4w-$2o<AFZ&JfS%vlVA@>#o0=1*+eCW/YE*JG&.GHv/6Ek^g(S4juc##*NaQb(JFGdcs%Dn't]#O2<4G-,Z'Do9Xv##1_o<jqDUDRIuV2p0OH^1bg73c&0$Fi2D<F1(AH.WniM$x'tn5+MqoFH-6WB>JE6H#7GTl>iVTBMPl5$uKk1F1#qMu#-(?0WgS?#&AC>##HDh2G=0gGx.frDn=M:/<lZm(fd-=H*grI+A;gN#+eq$1rRY@nS+U-.?Zj8##)7i(n<O/#]<wCE('df$;r@;R(wCZCVOQ)Ek,hb#(Q^$Do*te#Zhx1=I'YY*`ZgY8mdX0$%=O2)c_9'h.pUF#*8ifEk9g&Es+[06-3YA/5-g*%on'T:/).##2&v^)c_BE##oQ4VhUY1B66Uu.'en6ahoj:6'<k4#)nVj2px?s'kS@Y-*?]P%8:ar#QFeb>FoGD^439g]mHsf#b0_tBssiY^27KX.DIKG#(fDN1hh;gTV`k5#-;_W6b82jktM:+HGU#hK6VLSRH+HfH$^k._[)ZZG>ojg#$]V.'kcYhSlP[e#<q+2GvOsW##PKY)TPm)$`E2^/5xhJ6bJBi*3gX,2S`JmcL6Mc/5RX&#cK%`1;GYS-^)SH##*NV%7K*%0#/^88TdK6EB=/+*?m;U/>uM>1O7r`29C;;##lU4%Sm@p$3(9HE=_$90=Lj7#'D][/q/_a##+;o7BSfg;+r:XBp-At#$ug9#%`;@#%;#<##Bfu(VvT#/TmEt$sCiK%&8>WISh?q'km#RG#)eY(PwBD$+UUOH;PE3DG_x4IShg6DG_x4I8L^5DG_x4I8Lp;DG_x4K2EA<?;V<$ISi)>DG_x4Kj&fDD,Cr4KMaJ=D,Cr4ISi&=<a'KsKMaiGD,CLR6ev9OuE0q[65'Q@<%A8Yo/)3h'4E?U#@')wr-@Ft#>w+c(7KfpB>.q(B>.tR$V^VU&+kwV-VO[^%=Uwb06eJM2K`fw3PgeO(H2C?$;?;&-BMl7&6h,X##(#:#J`.%DQu1;(:+:&#$E736akjY#[C4J#)m$(6''mX2P=vdf4r?B:rK(v@paTw%XgcFCe01Ki0BRE5lP-6Z<^ww%U=5W#'#'?Ac$hjq@&*X%qi1I`JsxN#Z<CBFKqb=8xJShFMw^T>?<8=.W^sH'@A,?6fMj^E(h@L4pSiqSmYpqN)'=X/TN3@DckJd(Os62$D%6.'Mfe>N`u6qBZPRnCk9H+,v1FI/s+3e#>`;:0Sb+U##28=0p':X##DVE)M]@C#LH._2I$5vBWt*s(/+bO-;AGu#<I6O-Wq[XTSN_Z$rxTW#w.+4sXp8H;/[VN?Y_hMH<C5Q@VYwN$;Y=1#1*C>D9.+M`>R2XBv+8oBUAkP$;f&h-beR%#-;F_K#hE;.80ow##V[G#]3rIH,+I<G'0<G/Ur&L##8sO#]<wV4CoMMBvOp<%:*wt#';VZ+]Vp8>^2('#GVHEF%sZ<&+pq/=X+WN(P*4=CfOs78nF-xW*EeFLh3(g5@#x1<IH^c6x@F(&%irS#$kD+giPRO$&&A,3IbCx#vL`.1JIu3#@2@vJ6drSIqQTKJPWqg$]&FxE.8.5BR_;)C5V_hOQ?I^&ll=-#q04Q(/-HF3jOB>%pL&YC5FEDQ:s(7SdNmP/95^_J[s,+(PE4E$L=I)F>_e9Y=fOr1:KES2L$t23-[663e<Nl6+:(`skHWk0<%*m)GC_X)GD'-)GC_e)GD'.)GC_T)GD'/)GC_h)GD'0)GC_V)GFS#6+K.uK<cVu8Tl/O<e4uB/wHoIi<uL1#D$bCK.`i:F3&c[#@VL##L.+</95da/94Qk<h%:2HC4M5-Zjn.A90GZh/S08$=%H#>#KVc#u2./W(^RqGeV(rF_/KREd,aHO-:0j_Si0X##2-F)7_Pj#2S$<Y.,bl6jT&ZH^^))4FgL>B3g[&G@PK:#&#d=##'DN*Oe1rDLYs[4+/m3##)L,*PEY#Y(0gG4G,AG5(liE#,=#b06i]l#3@`O7=HxO4G>]k##(;d*Pk(+5Cw1/?VIDV4G,ST3.3ZKGCgh14O*rrE31P3C.qo2B68?k#*3N20#9AP8t=;5CD?n`EHm#KF*MoaGBf8V#G4)nCji,u/T#(7R.FR02iv7:a3UY7Cv+fif&jmdK)t8TBvl]4=M60/7BfrtCOvXm*6]GOn8+Bv#+ZKI61Ki:N0tfo$#i?D$6(8'6YZe5Q;x763)$v_5f`>m0Oc*O(LowLZs_7>#&[@Ih$'Tl,uo>hK6>o=$3:<9>F.%qJx9u`%f<9.Ge2A.FKGXq%BUr&7=CA_$@)VU/P[wY4+djp(RQ5g7v9qQ1#M%tP0kpUhQV]j=xqd31U_T_#$cb<u]H<=B(#fS##J-##*p1'E-BK5Fo6_*,Y_h8]4hu$6+/oi6+0j+*g5YU#5I4_*Aou+I&?4E04906np_Ep&PNu)uva=-CS#*`CVh'U(O.an(OV*`$g;(m8Pgv7X5tVV$;M;q#`pBwC2t>k4d52)<DWhT$w3iH%pWn-$;>2E&17XD-vLPm##44x06Ji*HYOvU$rs1/%1sfQb&3$?@TR2I#%sX8Jl6#J*Jb(=(+TF1.%)KIh5^Tr-wlS6+L;Gb-*wPS(j+7r#?`R_#Z(XGF&=#b7t$GNH>swjKN/Du$ruqx&Tf(YH<(mt/.s%WU0L1Z'5&c`#$;+8(U*eA'bc.P>>,eaED@1fc[1C0$;E3^#a8tw=]Jk?Z%=aj@we:%0fl>q6`feK#36i0aK:/RJplb[Q='_D(1/N<#YZtc>Jc*hCV+hs%AaWRBQmEj8Q1?7=hgd30=E9OGG&mEDoq5%D13>?SRii`#@(04=%uf`#v`7ZBn?JZ$UuG8.oic;19X/Q#0e1<FK[k@eVLY'8UCC,#$FpR08H3)$dCr/8]emT4+:Im%VK5X+']F]&o#KNc>'q*)Rahk)7FBq#AQf>O(AW,DGVvj-AQ`g**]0$$^?Hw.hjIb20b8u+]bVcBKQK*#(RxV-[b=j#v#J)/wJXTg1dw?#SD,^$rsFm1r^1%#Thwk3jO9iCk8X$CkIW=#U1e*55QIiH>N)3B=N%w##?EM(2YS.#Wo#W?r`;f&ljAQ?s^3k$M=%0D79OcD'h3@Cr0RQ+xsW[o6IMp/LMKHK1w)sjFarX3S#X6C[Q.HObnx+n?TD[I(B>`?)r1m2mR##-wT8#`c<Wg$&e,6cQo89$;B@:$hIhwJQ<1X&R[()=&>PZ#$S0Y6b0w&.WKNlhf>s;%H6ob^m+:F#$PJ>%+YDuCXsJlCJ5((F%uM-%(#AIFcN4i.Dgax4aDRX;F;+U.6I]],?wt.4%uI6$l<GeCCUMQ*k?6t((LLO+cwF5#iF3/]m/jV$</BV#-%j9rQDB'H4h7+2j+-.(4E,s#LC>j0WeEp6u$(82RO_e16Gx3=gkdX2T?:U-#ap`+&#bY%]blq2iNa))L)X&#iQM&/s:HVqiKvlFB4@M/qLg_-;G+X+MB3h+d?o8.#DxDIT@x)#^N%QGFIVu1JA&6-;]s5#onolG?0&u-rup%1@&=dCs?pjj*-4:i,D3:$-Wvk)GDH3Gu$4e&S3017HCc$5_lGu(V$sv$&pb)'2/Y[e9]5S#&Ph@Ue#DGeSN>aD0TLMn7b4Z'kVug*kZH*+L;Z,*O??)$-qf2HMfRgM&@#>M&?vYX%jlb#>PPb(UIXY/V%,kJnr1ql^:_Z'MK(Pg,H^c6'36t4Geqj(JFq$$>X_'$u_#f$s6sP785sa2n%JY(9es#@=^cUCe&#?CW-9jFv6[U9<Cv=#O<%<FgXJ8OxYl(8Ze9>-FRH/0pTl^7)4:_=28:3E3T+`VKn9s6*3>/97JG+_iej%IYMgm/AP`A6^F6[8W@>KHD4;b3f&nY#(Q^#E3RmY#1U:lK1d9:#$vG:a(bu,$FR^w1plPI#1dblA]9HuiZ=qVAWo*kC5Fw+#x%.u163w$6csqE-?t-6##9s,27#HZ,v+ICN,1//iWQ,v2A6Q.Cm9_X0p9IqCNtK./qr;vCkBE9D0Zhw)j,23-&8hP#w`,-r-nnU0MIRZ>e,^p08J@f5Dan8J7>M(B6o75GeVl>FHiX)Bp+7O1Ta,$#'=FC%G1a>'5rHLdLWaCBnVC3(O'JC)ml5&#Kn-YCfPxuF]sm[LXH2e:g5Dx#paxSb+YABQ]?dv6eew,B8J%K1Tn$I*3YZ33NXacFd-mxn@7Rv0WdxA07u[#B6_tl#1>iGqf`Sq-;bwR`/MjTc%Lf2Lj#;jAlsERuY+)d&d60Gc00mjc>+4>$;(uIB2]fI1/ATxB2]fI14'wVB2]fI14U?[B2]f9Kr8@2pjM'q#N#MeHXoA9EgwfFG>fWOpF)8OluMd'4xm2IaapHp#ENHIJsfEl(VZ?#8&A^$JbE[<5_Y-#C5+Fp19Xp5#?j<XX()>f#w_#rDHBxF#>nn*2k[mTUvN2=eggm,3G)LG$<:JF$qc#H19sN##wdc1Jhw=+Cg'i>p+M+/3t,Jph.i]d8T]HvAX*[-?6q9%YY5%/#&S:x'MLN>/959A$Y9<DYhkukB8&'cEk#LKaU*cZ79j4c$;KN+2Q`@omYIjhEnDO+'n'Fr#%_/@##1>'#`a=vGx$c[,H)NoI7tYC'kcM`AnK=A#[r?O=bVva4ZES'BQ>kp&m-a5(OdTq#WsMwZu9P;-X^=t#YtAF#U'[_c`f[7C5FOs&PVFo$9/p,t@EnOfP6i-&9T&+uA4b_uA40N79CFL4bfpp+`Cbh##:a@(NdU.'k;fk34NOetD9'8B>%lbj-#.H#@(bh07.pZ,`mCt#&Y['Cq7Ke-Bi-69:pJ1'MRx19V+PD;jtiXAXmYk8X35L<LR9i:Qo>XFM)Y/Btn8O(2VIH2S:0JZrt#Q@`*gR%9+EQDRk>nDp$:;#*Nm<DnBXP2Sk:K@`2]g#*9u>B87(&alPt&G.;,-3059-F:8.bIx:g-I'I1?-GXbT+]Y=J#+Pc+CTgR@Bp2W.QGIUV305Q5F*K*:q/<BcH?tXfHGD/Y05a:mB8[th1OUn5D(H6NH4,;?EjV[RB<ttsIS<.5AprO=GeCm[Es.>vB6?;g.*4$RW;vwG.^kA9$B%;68XjGS:RFS^=fJ'a>FxCH#u>u>MS9-]:aWT/=J/*hAY2M`8t*#S=%tT:7xX`GGgK/j.+-XMk]/h:-Gkxn(ff+m-GXll/PRc?DHw6^BkC`hF00PE-Gt]8#%rnj#((:6=]T?a3GalY#FwZ&FigJP#AoY4su5BV#$d686I%9@2Kjv[GexW*-d0oJ#+[MrBns4w#Ws18G_=UiI(i5`08F%s6b&8%AwF[]1khl/$@tV=31BodBr#*,GYB6o3+u'NE;KX,#&fe?o#6B_fqK*-0s4lc0MrhR&547t0WuK113l[51khk.$ru2b19WHiJ#E@II#3$k0SBH81V[UU0v%CT0#D[E#2Nf+06`TQ0X#/'#[hK7=J'QQ0Z.e'#$d@G'$PIC6cns3K5SA,C9MQsG-v0H#>[G4#LWd]),)0QBC@$JaIo:Ceox8#$Q?gm,>JES#wSKV$@ZN?IC:82JP7/xJP6>bC<$<[AN0cib'2SJ#>G;W';>JP17oPU$pA2vZkw6t#%;+%#$bvX-#@#1S5pX$j.#1KDPwP=4YI:`##(l(#5aedEJ+=3CbB'f)GC@p###'#8XN)J;7mw>B2&sLaG5_M##%h9$vOhZ;S-HY>)[$I.)Pv$-+uC($t[nx#&]]%,uosT4AQ6/#.oso-w7W#-;4YJcc-VSJ8>3pFgg(x08Dk)##otM-w7VA-;4YZG&./(8SfB8(;i7v26qi?##Z#S(s6A3&[#0LGfeo=$V_]s%XW00,YSOPGHjT_=gtC%DM`r6#)naM6b$cw8]B,2CD/7[E-6MY#Z<0g-'7)t#>KXj-ct672,+K`-Gl$FFxsjW3Q,Hq1-ZowIT1g&&PNl),YSm<2cX>E9P]:oC/+2).^lfF1q1Q6C5wGPCqA#4>-9Eh3D9So-VlO_##cfS1q.6k8swK,B6+'aC3WIf09#t8-,;gM)/F>a##,Z-IOvYZ7obCv/PH27#+L$r9=)/j$%+nq0aV)g02`f=6*EG5lokPKBnkR?-BAR`3I]PD*f,cF#(`lK-rk]:b&(ls-x*wm#%M1GQtF0<0rLP@0<RK7#v*ZT#)V`_6*T$Ko@Tq2CF7lb6b#3'%2SP_6atTgfxO;n26JLQ6bxf_1:$U*(;:#W<e-:-6cKnh-@RO9p;u0g0Q`>kg7+CIP6r;*#%DOf#)uCI6[T;>$d)hHGu]Xk##9/A=Kkt60u?w_7X/t?CC09c6b/(U##(ej2LR-nGYBn,1:(_w35-s[BM9#]%on[t(fe5U@v5&4#$b$.#*EDL6]6=B#')JGD01;4#0RBXIm0HFDR.j0$>kh0;M>4aeTq=?#L5&^3.NQnBp-]H#rvF1J%X/R$-<N^()B6XCU%EK'2B*B)T+L>)RMA-][d[GBQen=B8Sn38l^FL02G8I(UOdX]VVaI0tE6g07.6]/lds**`[Ne*`^JDC9V9a+xs#P##;UA#[IF:BiUl8HECwx#'44+CJ5Ou?VCSI$#`vAj(SeCB=`[#Gerjc)gpG?*`]j>B=s2N&nR>]*E@pB(5?lt#bPIIFM^S4'QGh^#YY>_##+`v#,WouEmHX6+,L`9$bTl<L0=['###A-)MKA>$/Hf1+A;uj0MWTl#kOx'2pwVDD2AqL#@Sb&'rnkI2ileS#9,C_B6odWBR4nS16_OS#wr)w#(J@nBU_N26Ej[m#+R0X26^,_##_Fb)n6&A#^B_%21@->#*CQu6*@(h$/ZViI'IM4X*cVrTFE*1CEOUZ9X?1705jG#_1@>^C2Q/#HbNkh3DlpD.EHob3D[8:#Q6]xCW:%5Bo?=q#`2o[SP1EG23%Z?O1d1QKS1J7@8-m.2LD*O1U/Tm13[;e34[OCXIC<U,@:IW$n67AQE_FVFa;aZ'dI7_#')90%8?nv-;ULE$h@.eq?PPj6b9l28X^_U3a3YI#cE#Cf4`WJ/?kcW#$VtLXnZ;UR8@u/#C5vI;lb;(##.(o#r#ceBp=e/2MSJ@-wT2e#HiR)2iWmL`G(YuuZbvmBR4mWt^ced#BiZ#BkCf.:O-KgC)S>66[8g?Z;**lF0g=Z%)_@tZt+5lflZ@M'2CJj4iG1A0ib=ICW-)9$[;dBF2U58h)rMs1BhKuCWZWdoTP3&$;:n0$AxnuGu^?pH,0Jh&PNnspMZkK$.K,d@T3M-<a/av$QpJ>.^lfGY$VKb$;X=CBn=BIGBf#Q+)GSVL?Sc#0MQ<*/;IuU##E1Z-c;J?+>G[*D2CE70XaFR6bJG)L27E[*D@-+*D@3-*D@$&*D@-.*D@30*D@$+*D@-)*D?Pa7<3b4:UC5<,HNYY4gKtEmqVJ>GA.iViDLM522Q=<E-kbl-8P^nqh7ScIokSY#9h%84Eu>%0=Q#(B8]I.BX,;M2o_dfu#.P#DKoKX#-DRS/rPXl#Ybfr2h$[v15wjW171543-[-33Hw8l/PSb`#2Kj,I.UdlI3b;I-,TH7%p=*J3m3>2),:?2+]dg[R>k@f6&exF6&kQ+#*L[CI#)F#I&Im$>DZku7t8NwI&S[G_J#gFD/Fs@I4qmoDn1b>H#>.WCSu3(LKwoe$tZ.Kikw9';PwNvFBk.SiHb-FZL:f^C5+Et9p1Zo&PNcbic6Cs08Ff4B#//73-KV5I^%;00o(UG6,Z7H#Yv4>8>h1:@u&j1F%f9Z6d>@'#BckxI`[@Z33XTZ6'*eI(6b^3AqRx3B>[=L+]^pauv<1x0YK$Y0T@R*1;,5t1<(m&1;,6406fkJ%$)q_1OUdW2nc*/1J@h6)g'd-##?Iu2M(q4&Pp%B141Y&1<(mhAP</0?VCa]#(L<?J9r9Q06kq/%xIWpJ9XSX#f`[AE3_h@9+a:M0MDO9&=nL%6x$Uo#$jto(@QO)Bsv9xB>6UX@ovZ(7<Eh2CUf6,6d:P(6[<@%3-^`)HJX5<6_;;m>H'-a@?d]>0#T?l6I-e/-t-If9jrC1IT-=F05Mic5^gW70#aaP4fY$SGW#PO@8-[3#]@4H(fcLE@dnf0&Pt*D8&Jcj>B4/%CW)EM(:=p^uw1lt>*2qj>Fo9p?(O?_AY:Tj1ml=x;l.3u<NAQ[9q%;:(Mdt1#&(gM7w@;Q:RG+R=EoFr'pPMM=FL6`23hqr##G?e#Ad/f2,$8n1:r%%#+JZ-1;k/t##8sO)p]b`G+hJ91r@2<l%PFV=[u<a6[n0aGGen=6dFJe(O8E]1q:wD&:&?KW@AOtd@>wl0j1KU-GFIO$s-9=(W5),(:4A;#+m$FE/?&&(VPP)#2#PQI]f9K4B=UL0?406ODHJiC3W.$FGVjP$Y2J7<b9E=m[39#C=4#i24vxK;H3c8X]<#A(rQ>p8[_f'KC9%oCloBe.CM>$%<#eBO^+*O6*F3r-DuIO$rwS8W-N-73-TA-C5FHN#%BG@$V]jm%i)9LE)[e+GDQS%(;18`*Ns&;ItGRYGBGRA@xXHh)GCQl%qW_m%on.1;QiXd@ocddAA':<BEg&SE(q@,$t+3M1m#OZ$$]PE*)6Kc&6bBc,-D]f+h0e/'oH?x-(e%v,#^7`)Qs.+'o--q1nLhq##^49-FPxj#Zi:@+h2/]2R+n_rfZo#0#fLMX@<2%VJ]SfMd0V3hq9/5C3;VV(fd_'6^Jw#(;2x2#eOYQGQO7MGHM-T<`P^v6cPBd*P-E$#kNS7C3XKG6:;K(F]k2b,r^rNA%XlI6c7fT#Tu:Z1:/KeWCHA_16+MT1;Z2l15xH66&f'v66G3vH)EKP/saRkq/NpX7D`3W5aRwt15xHD0pfGc2iv(57td=i(:71s7C4CmRS3eo27+hbBX7iM)SKgU'mO(](9cwI%)3-h2`PGaCO.tl$)0>+C3U:o$)S)6R`^OT$;Mo4C_qStD2/*t#2amp)hs8Gl=mM:QE1?7$;MhN#H/AFj(tOhi,)U^5Cv)2>T<jd$Z9C_d>Ne=##,o[.'>3l5>ZT1#)q3%W([E<W)>dm.'7$0/:(a]?^5W2)GDW513sr<6Xm7ZE/?)wCm?oK?snDTW,HF9Lfx`M)#+3a(/@Et#8[GZD>+HB&PNDG$;O]Z$Sk`[DDF4jDC.A^DC.A]D5o%KpjDeBc`6(:##@w=#`G*P1T:@XZrLT+/59uc#:DWOG$+hVB=MpuB8Htw&AJ6q6*oF4#wI=?sCeE3##XAm#Fc_#]r(9%EDCnk$V(5%ja6g-V;aH-np:%7^[@wiC''-<6*p'O19N`cRoUUg&ko<^oQQ)4,JRvJEHQW?0tD=1FHJGu7=?lK3JQIJ#S&@Z$^?n#2ik)K4*Yc3B8CGoB81;YH(>(TH(>(vGDC7?$G:ADFGXwpBI?E0FGF@5##)br's`=>8?vtLF$GOwCK__Bq;[d&MH1Y=-rlGr<,)vV.e/=r07NuZCNt9`+'0bm*k6lo#UfJF1B@s2EGaKx%^p`NEE4ZKB8:66#$Xg*&RK54'N:4M%GVFt3`9L<r2HsM0?J*f22>iU3DCEY5<^RQ#[g@h.os97%f`2cB=7fD4xmLB#Ym8>1Mn.(HW7v8#[Xmb4+)h<AZK$s5,huS#]og$#$+QO20F9A#$M)>$<rq_&mjXL#@Amo]]xYW5w=s7)GDKCBfU3(NJnkT5vfV&-x,BjX^,w<-[p@2O&Zmu-]#F6O&Zmu-],L9O&Zmu-]5SfWen1C6d&uU6*8eU*3Il0(V[pg08F2K1h?hQ$;V=B#(.(jl=dVKSnNx5CFpO96*MuF$k@BWCllNt/wji+(OS2$$,dhNJ9`K+02w$t$3j1g`gSD:3fgI[$ERhe-Er0Kt`oEEWKB?W19g849nC9&18P@pCK)jn,vZFf8LcdgA5$HuB6odhCnYH4X4&p;1qejv$1jqU,qjj,#&#Gl@q#%5/$h^@#%K8n#x[QR%E1$Q08<re/H5e'BR&YW#rGwZQfVW9j*1A..8J,n$Q_q19+rG'$u:p:#Z-x;&3P5v=KOhQ$xMdND7;aH/mita5jE<f:.v$r6<96J#sMpuO%^bX$tYK4##Fd9(#9w;#VvHj6Q64Q#>wkB#7LgCGZ59h7#`Ms%SWi:&%s6fKH%hDC>O8pG-<?i]P.p^#L]3.b]2`sc&'fg?V`vwK1Q&NdIN<m%Uas>%V'-a)GM,S%^CUeRSF,s%*KKxs)G&2B4iQq5^-bOK#ibv$G?nTe.RX1%Sa3Y$$$/W][Df&%SrVL#?`@YEe^9A#=h+[D;?IKh2RPj##M_P#asM'Y##Y-hJ)r1Cjj@f/98b6#ld)CKkl'EgW6gm2L%6Lj=TLSF1ajM-WU4RfnqeoK#mDE$e8TjK4h6OCJ=r=UK`23$u*M;#v_JJ<QQfeD1s-v/9lifm;-Gb#D<.rD:'5)]Pc9%C9c-g#>uS-;NM_-(fc)u+CJnu+CKAZ+A?Ta#JZXq6bAs$4`Q*pCr_h)CrCU80tMEs2h8ft.oh%omZ7*eP@>3M,%D:x%SRGYd;lJI*)mx>(g*V@#0gS@&PN6.(gO4M<jqGhHcYHS34k(=rd3e##&[xn%or,jCVXv.CVRlR)p1ve#+-duEjk<2##Xm+#eesCX)]4Is+pou(MOS?l=cv',>B+])R15c*Psbw#D-&s4+%$W19iBp#^Tjr14<c>0Wdix(1(Ul+AAij'4r5]HuE@`Y^:;hl;3b.Bu/fMD2BkV08;2w#&m0+)c_=IoP0h&$?dDcBJwJ,)GC9d#*L^o5`(u#BX9kWCNtI3/Pdt_#$`.4pPu60LO<TeD,:7B),*)HCk9Ww-F53@a),^&%J6s4]px5B]6ql)#Z>oD8q)Vv14943<'mXv0X3(Y16vS?s`O06EF^)PSsR$415,t:#Z:YK3.iK?.<wqo##5G-4/mGs+AWd_TOo69F+&7i36mfX[=]IZ0&L8rEfvN*G`px%+_I1q+A_*a+LoRY)R7@g$A4D>/qV&`B>[h-0t30h0o(Uf9PBN@CkS0x06VGki[T_<#+q'mD0KK?#%;]*##8*##Bh)o0YWh-7Wsn=BNd<iBg[Z40Xs[I%SS$wGb^q_+A>VW1;GHe?40dLBmnR;V.h9I#$m2>$;?xY#4=ql2mSnY6[;[w9QkC#C>^+sn,]H6#>GDo&>9)_C3XQ(#*LRX19c.j#3iZ26[<0q>)-Uc##m2J;G7`:6reh`###G/+0S@A=0Ok'C36Fj(9RwJB##u5C34(KdAder19fNC-FoCDWFormJ4w5I2TS%o;I'?5#%',q#%'2s#%0E:#$b'`(/nY^24A1a&5WCn$wvT=t^>S/8E1AxrbhnM#%TE<J:Dw%CtH*i`Mp+Y7%=[5'M[3$#8eiS*>&;:)g0V`lc17sEfxB1&PY-,,HVPp-@IHn#KxaV1:&OI19eUC#<vF,0MDLO7vT0]19r9l-@T79)GO7t&9]%W/5.CG2m-M%Ck.I7.tQ0G#&7ub##$ON/9sua#&Ir+1J@lf##2B*24%tW.S^xO(g3c5(TpRO,e'eM#P1#nB3YXF??mdn%qUQW1K50##8[a76b'xK:JQ>j#-xrHD9W([6?6SLWAFf$Nb6+_2/PFu/5-??eS1?X$J5>`92I3nBht5.1O3Ig-Z`Gac]^%w8?d;l>If=d6*6fg)6NI;#mwV(&Q8eF##npx/VecM%<>n5VHkoJ/XQSf,C+.A,m%fj#An8Q*Qo_)&5>-4)1'`b[[CRLGeVeVCs.U9pW&OXE)/$;1B]x_BnOsA#%Mk//5VDRB=rg13I#(0b@xYc'Smb7HADQ/<P;tv3/@QBB:<@dBnOKZ#$P5Q'BKq4)GC/3#Z%o+B>5l6Ck9H:/U^1jCoZGe$=El=#?1<n9UpbLB5o3FK6VLN5#20:'Q&$,[FlPL&6q^]+'hC#jb?6jjax%6+&%wa$#Ta^3Goi83d4r%D=V2e6[:G?/phs14E:F?4aUO2j'pvFK6V8-2/FiVK<v5g^oR-;Ob@Y?/wv7m$VV/R(/,=e_laQ((JGC_uON8<XfZN5_U+Qw6;.t+'K6TN&53YX,uuPlCPbe-1lIWI1;'tW-[9.WDe5Vd#9A*)6]-xQ3.t8K2L'5M#%'aZ5w[CsB4#:r-to6??XHaH#$bH]#%(0VojR?'CNtk61;nh[J$U^UD0S@`16,x%8[BuaCk6>2H*Ak&BQw:eWb[*kCgCL/#f+E#;n7huCPd8R14Lk414C^vLk1if16mL=.1oHJ?Z];dC9`E(-AOZv#%0#w##Go807>gr#&%+e#%:W*##qsn2L&'7[N6U9D)i>tN)(V;BUu_*Dn=>uGe1U]#E2&kB`j-B(//)[CVY)8C7uZ8+s;Sc6n`5,)GC2[Kig;G#3r4i44dK-2mK,nK#k;;$^LvW$?^nGJ]6$<H*MD:CQNSKIC3u/2GX@k'25*-.C3M&)LH,0@;>qsD6>fc)148J/[JpAR[m-u3g7E&P'&r(`ct==AZ%GL?hT&#2T;J.5#VH_5H.rsBW'3^I8LdFd5RuZDDVO?/pY6dBn<RM2g3'A$@WQ6+if)S+JLW`18/5o#(/+Z>7XLk7xNVJ?aQMt9TijG17B=i2k$f+r0<9h#$d*kR@I0K89f0a#=JTs<1dbU<09SZ8>T:X1:Ur5#.wn/<Lw0EBk;]$9UJVF>'Oi.#5iH%:Q8,C;NXo4;jLd]-$bI)8ZP7]8#'g*$@&P.19W<HQVI124*2nakZb<57Ud@4#%T^-##Yl57tvu@BUSKs'MJLA<DUgvg5uMY8t)sQ:9.?e=fHU8q.^,@HF-/gFK[++1o$l;9:dm%.BwdF#+S#W9:A7c##.t1$$-,/=f7wl7wn,I7tJNx<LT%n4/#Ta*)$[.#2DSL;OChb7vq)X#-;=]EkxTN97:d89V,%Y>'7Pc#X`_&N-fN[;jOojWD142:SqR514Cq;5)MMc+^Hro)/Z<W*,WX5#[BTPH+v/$+&J=*7W_s16^V4v06md[%qM8fD6>=BBMTlpD)(*U.JdDo@tCpD3Difc3dJMpOAGr@6XG3UoRb29#(IiE1H-+TgOc^0Rv7:D%:2i]'O?+/;Ird<WDRlF>&H9H6AaYI$#'Bf0=I1Z'0ATr>Eg0T7S[Q9#?2;.6$-P%5E?%_Y%K08Y=sM7)MT*L>&ltL4,OJN%U,Z4XfH>/851-'#Fxg;;RLSl/q2Uc$<R6q#%IkA+A<;SV+`,f%YJ8X0(^-KgLvaEYO#a<B<Q*aCVFj<'MLn=Do'SO#>o%4@C0b`G-u<Q#f(hpC2o'<Fi^KI#8thPXLSoB2cXeb2cXC+5YV<E#es&v-^A&>/93Im6b+Te(U-HG(8iT6#'3NX3eaW93fT2A4Fg,?i%W,:4G5:C$s&[8G'v'-2L$t8$V^K<4G#,B3f/p=2ib#E1GD@8@x=OlD2D]SC56P.rc7eCkctu6Ogf_,7Xds*08.mJCT/uwMn&ff6b1wQ6aijO1&c[/Jq[ju$t<R`D6>`f#gN-=*)$HvT3cvH###oO(q5>m#QobhD6>$d##cPaJ[8gu-#wY2H0$gs6ZC1Z$]8LeR;5OJ2MZ$i##:]64jg=BC/#LsR8+p`2H3/92i<ZLh?9-aGS1+J-t_FS1j-pZh)X#.6b&S#(he>xU.ld52nFqP9'A%M6d]qa.BuHVl^(@i8Eh>'#%0-0#&Q'G]lXmoG*n#ODp+s#6G-s4K7,>pCxQV46EWp<%6E9N:PjJm217B?1:),G08Fff6d<PrQhA470t2x>6$ugC$X=kPCNU2lI_(H&BYldoM+fJXHHfewCm)Sr#v)3^#PA_=1iQl&=+,A/6k=9^FiW.K>17?'F,2s;2MYwP#M0a-B<;AQ/oR&%;O_TF%%hnt:S919#,v=XDogv##&IATn>Wb56`49jRSX[08PCwo0?K>[#I4xi6^UuA#[[_BV4S9kH;6a?I;ERh'M^R1(8,VW(81o8(;D]l*l?q9(,:SN#mXtvCVs<IX_a^./7JTv799J)5fS=h=inu.(U1m-#6uKLI6?Fl<=`@.1s`(ku_C0tH+/>u$b:f@>-jV-CMd5<D9.+@-^)p[5vI]e6#IFQoH0NG2,43g85?Y$#'Lp3<3E$8#L^>OYDEGCDe7*m7bWvK2Md1)=L3&*#nY-I*D?Jk6#J*maO%u4D2E*S#dpc<7(=iL2G=AW#$vD362Y5ZHA>J96b/YUD@_vOCm)g1(mW_T/wO)H(O7K9#N,sM6*Oqb&7At1?s%)4#94M_B=MZmFN[Ncj0=bq##l(1$0qAhF@1CnEEBxnF(W:MH]k=i#$juG<DkB3/r.*'cwlIMcwlh,#-Dmu0?8+Ka)B*f@t<'`p3=-j^=9VV2Q84M)GE][@t;_+#$jGS&Pj:WLs1e]1;ugVB:CF16,Pk@GBQsNAnf*U08Fj,(h`GS#A6b](fe>$#TOI]eW>dO(q%rJ1VlQDAO-U&#&/7^#$l60#$cTL.<@)ghh0un#'bRh=]Mv;0VCLt=A0b-=A0=$=A/_C1/40?7?K-kgk=ca/RK((,[V+W,[W7&18-?L#D<cJCNtg^6tO5O)-r3`#5_q&6_2/6G',@0aD[h^u&4ia%9<TU%p>'_Ap^5M9p1VMELxuA3g$:?#$t/D#97vT2hZte1s`2#DQPT#5c9Zd4,S93#%&j20ip?xRxtJG/u6:&9n[kb%.P^[IV/Y,27-&h-?k-P#%s2S1s;Y66[h]pB5^D0+A;eJ#%:*v2QSI$6^aeL0ia13&PNNh)iLYi:cwQ,RUZBt#+]l`8qFCdiGHkJ99sxQ=dh]QB8J?t/t8H7>w/uo.t3oT>wVEE9kMb-9t-1+2j;Re'ij+q1kqh<??dOsCUIv1??U;H21IabB<KWf(W/26@A:Y^#?i,.DMhT`0;>rv>_%^Q>a(](#-V'p:pv=-o6Q_Mt$hG$/93/C1UBV_7sTSu6Y6=/)GD<@>c+W.2x4g2H*'5W#&vaLoOsxC#(81lH*/,m022]j+m>N/B6d4sH*)Mp%qW'_$``n_17Ve%#Y^xX3M9p8r+MI(qRjo=BDk9:<jnh0##UV).AL<tfl@m)-`Fr&*Dp1/(8EZk$/Gm(<bd5m:m/D_#w^4E(U8/-6a3P2#YYH_kxY,kftfi&B6Iu#24J$/Bt&:q7^xGoCu/VK0UkVl6a3cn17Kg-BR&$d?FOF2@<jGh(ncf;)hN#w5+4XB(/0qWB<alYB6[.'%oo7gBjY4O;,nU4<6G@2=*R)f=G]cf<e^6wl_.K52K_Qx6a5di'j=t7#gYP6=-u@r=,0YM/R;12uw(?1/723b3oxim/tx9?CSu&c7pL.+27I(7##-29)c_9N<+,d2JQ2^m7qKS3#$c`H##3:3.BwI*(0t;>(E>g-8Tv];<g'Ve@?4^K#(07'IX1wO<eK%K#+SMGJ9t&3#7N>?/wJdO1Tu5>0o^q<(5N<$=FsA`/wPeg-@np.1/B)u#6qpK0Qb`A#@%:)#'b=Z8Z=lgCNt=#0p9JVFdZTGE6s(+/:BL?3.O`07BU'OU.ca,?oiY^<eJxI<eHv;(/,=i(/+o]$?:*v&JG4Q*a;`lQE<<116#l3<Nv8L2Ps%D'ip=`QdK:AK5<*X)GC-<#/NB_7(6TjE_rPX8w(776ARFNENMB.C6(KoB88k$#$baI8jw30D65CJ06(X:16d468$Q9oB6LC]&544;A4V)qEjgwY(RYV67ZUj0HF<gWhTQ_:B6$DP08i7(XKju';-EtH/925(-[eHFjawtM#%8sw#&ZNJa4>A@3g-#=B8^ZS/qp:01R)>T#JDRC/w]pAJ6DsU07,I=3Gxo$(fchs.oguW#'G3F2G=0/,#0ks#_68Q.SL,*#%pNF#&5mM#$vP3#$mId#$<Q`(47g>##98FR7o-N##,Kn##*.t$:uvI1:_iLIYg=R#_ZQ/06U66#&xqTfP$&J##?(>(<.1q*m`/`-?a<W#^=Llp1hLMBK?3OF04o93+$V0.xhbl06iV]PYB^v#A.@]HF.Ts+%wKe.oi1dB5nr[K<owQE323lCPdvQKR@qS62CXv62CXv62CY,K@9n=<kVqB02Dw]>YxoUB8JX'Ip-3i8$+r05BpM&#$cW@I8[f+3Ik6)Gv=XMWDjRt-b$r%#$dKs#Ygiq&oi8m6[h%Z=*H@-6Ge#i.BPbJ#&PgD%op6H@v,DO#%)Xt#%00,#)l7F7#a'g,aOQ`(5f]%/9F4;#+Re%B8Sxf.=Eo;I.Er6'2/wsGYB6<6<F5gJ#up)B2K1TIrp$x88A3@Irp%F8?F>)#&Pe8Ls(Eq7,IvJ8d'3gND'?6`eGUW#<W0J06fcM=/f?kI&xtKB6Z`S16,gk;cc8>(N<S`/XTuU'2IN`q2Og]17`k.9W^lQB6]%$1:(GE>HKHhBQx(#19l;C?acmOB6]:+1:qxM>dgQqBQx=*1;$ps89fh]16RH`Ejqteki,$FBQx[41B;Mi&U79f17Mb-I',$KBQw+^19c8C<37_JBQwS&Ncq>m2G=1Tb'EM6Gx'9QN)6-[(W2rh/tKjT#)nE46_2*Y8<78I2e?W'<VQm(o8&/?#-DRN06h1'.oi]51;GMG9vU_w:E'i5;Q`[3jb(Jq16m@92Mc&>7?i8;Bpah^<Njjw/>llr,[t/Q##%]/-]3rOEHk$n(fbqe,@+V9NlS&t1r@kd>;I=>F,L$*&POFqBp;vF;Q`LqBn<=bcvXp?HN@an/uQR->-BB?IFgFf2nl''D0RbO#-MQjJ?qg=0mn`D#,d__16d9e#*kJM16jPW%4aB58<<4c<GDM?(QTV@(ovG&/r6)^5FcTa6`@k,5Y_Ow#Zhx3f=@fbBh[099=$%-H;,0^'23u@06i-F/uHH[#*2px06gsj3JhVG&PS=R?aljC<O4jHX]J;4?amGkBZY]'B8J.9B6o6V9W_I5;QVRv6)J(W;QVS$6*bte?EGg[B6I7>D6?$W9N;(C>HLY5(:-Sa*3O*k#$`.JC0Ud.Cq#4?B<F>2BR^xg),(&+>#4Qj=/KGo@B`%a-b@.]%s=fO+xt28@$qx0@7(v;HrY*Ys+@1<CL-xF32r>4B2CbaF07[4OE)opBRU>3BC[^ZUh?E]3Jqw[#w^ft#Z4J)#6ge<@'(o:MG]Yu$mp=q=04E1*KGcw$(26-3`JqG96j7P6vZVeJpG1e8?XU[#0fKF.^uo(Bn0xj#A*tb2hGh8#_dVfB9.1B*)$ps1<BOG#uur]#d7x[GdcluFi&pQ06TXq0P:B,6u64#Ss4/<@[Rbj#&Y9C0+CnbB8A-lO%^R9<)/$qE-3`8B8S3]#$sobjJs>eD2HW&8Xk.F3=f)QJQa(G6$uVQA#9<WJ$NKu-@Ifw(<%xm5,h'>B4:ke0%nkJ#KOoi%gHBr#$alxcY5'B0up*D#'j1i?VCIjG*u(p0q3;U#6=hH=(2/8u?Eb9Ge7sq)7_Di3M'^Hav5Ko(fc#PY%'V3)2stpFL'K=GIr=L4cv8Kb8m?1;IMZ?)-pIB#$b3D07>kJ?Yr5r%t7pn'M^0B$<fma`3lnn),`*)AZQKF.,>;b#&oD-COZAB#*2Zq6_#V$B>J/0/:grx<1dOk1Pnr$,Y_F_#^9l4BQ]['D2Cdr66nUx6'qYRGDB846[`CcqJX>^B8Jx5YP_PgB89Nx1O1Fx9@'Z-@A72>'@1*ZB6odfGZ4[$DMMo7##OvB.#1*.##Cx@#?`%4@ZLRQ'MXto-Ehsx##UfE%o%4KEN:;.ENVF;C56T;-t_PZ##p^82mCH(f'q7JBT$fB(5C(?7`W*EBNkhw#-U1;G&AiKBQlZ?-wJ`(DM`j?BW3M0Da]SHGvZ9/HapSk6%/Hj#%@RC_XXX&B;e5(HYEIb$EGSK6+qapq<-jrH*8^LEvP6ekE(Gs0(UR8BR=F*08F]`N*HL<#&>vH###YfN=QWE2ncjsBSp)i#1er06^GQ-6,ecG(s8[F*eqL^(rsIC+3&5&$$?5o3HY=*2LI_;B1speF]G*NBSp.ER#YXB8?Nxo(;wB<<flr46H045$U?p@BShaA6,I)tHVtjI3b(sX:TdkqBn4b50mD/_0vROe<3;XF<h@.'6(684.[keV7:8^+%p2@v-BVb:>uvoR3/LDBn8O4V'OOWx.>'(RBMR?OC9B%c]XktvCK1A8H*g**B2osTHw$wEBS^`rNEgrk#-M%?6`]%B=xg5J(g=C=&7up_3+a/.JR':fF0[3nOL-.1C7uWE;fe=jCttM65]X)oBSgQx&8rPm#%(gI1fqU3$?6&e;pL&g6^#Eh02SdjC;D3C1:2qm)RX]>3e=d>&544aC9noE,`mvM&PNE/12SS_(JFxj12JMA?.Uh3Bp,)YRX@3&BS_666)7ws#;IOM@AIAA1::VZ2-bi($D_M36b_F/#$l)A##oZ-[Ye5eC2uZ%Bp5'o&YN(>Bp,t)).0u47'qHm/u$0w/@&]#(7?a/)6_ce#5XBf.okpxFMDD2HB*=.]?RH[BQx%#@C0ORZ>q`8B5xR##Za1MC0;-vJ$8dR6]gt#96*UX0v[Xr/9?*M9m_sxnS+hk3EH2q*I.XC?*Jb*C1)27J?Eu+/94f'-D5qJ97K'uBR*Nj]Qt?8=_4o6$Vgxn:rqImJ`UNK2O^x:6K&$i%(KB*;6DIP:%*Fe6Ge;eBWp#^4fH5=4:5TGCO%Le-]b=(:q/6c+I3u<$h_m)*`^4^BSg?A9(+=E6]$Yv0Wmu@$_Ll'`cdvG.Woi1/P^)L%/H0JCPd-I#>V%f%`Y>H0$QLoB5G>E6arud1?(I/7'8ce5dvYn##(u'$Yi5p7?`A9?7>r[bDr;E+FdGsCL@-HV[E]+)dt,&#*(dP2O-:V0tM7c/s=/3/p>-dG>&,12.1##$u34p7Vd(B#YuTB';8%7/v'wu[9R@j'4>LJdV2Ah#X')dF1#w%$rs4d(N*=52g:eFO^sC6JMw_W+_Sl`#Fmt(/w-JC(fmI<AprL4BR)>?#v-;R2MYi2p-Y^9EBs8o7v@Ca-d+Pw-^'7]#@^#l#&d)O,r&omrHZjS>CC:R;fRu%C25ukEJS;A,Ydt@$nj^.CEUE-EO5RUD0I@_DZrV=:q/3#[_R^?:q)ts19E_R<xkXdjd$T<gLv@$KMKsw)9EFh#8i,bh=S64/>N*a(4N.[#wI=U1qlA.#H%ma6bI5k-*o&L#&%Zp/nMi&#$Gs6,-raI,.#qj'oH?w-(e%v,#]s>)nf:f'o--p$t>jEDMq>TLpX7F<hd7RAQg(V5bMIc];CBh:q)74DW+s]D6[vlNEp9U#^1w;,Y]h:6rxK%6wCGw6).xF(nc20#bB(^D2DLc1OjigBY*,;B7mtgA5<7C#?V]cR<W.p3-JdG7'o@K#''j^D6Gt8D4joi6asSi1Mn+tHRp</,Z$@sq.foJ=d$V&1;#dT1qfhX6`d9SmtWvo2K14gSPT>Bn8B@03OCsjPC*AV,@,1$2P4mREJZFLlwS@B&8#`R2I_O>33>?*14D?g`*&BiK5hsRQ;PiP$Qq`K06M/w3.WjM/Q,N&GB,$k3`TYr+]`Sv<m$sD6+HJi2P3(NrFiR)qg'MoK#g^maD7_P(:`,C/uXU/%UEXd:4-W*G5`JI;1B190i`T&<bR=W]u1_F6b8mVqgp55B:V2g08:n7#&.c1#'idD;+s-nA+Of]?:$HJEff_l6fVNe6,<i1#Y$OE%<QZFG'7u[0Xk-g6ZeI)G^o1b3-K/t2i,i(F4)f#EHZ#OG'mBt6WO2&2xxdmEdtUf1;3pr(;0mT(:bTPfxad%FEK[e6Z+*%EfkC2*4kV@<k=6(08m&7$mKME5'8q-1JC$W6+xqS#)eMhG_09o7D1f+1J@f6GDU<q#%htk9kiQe9k`_A'klvk#%)Bv9if)_X`h5?K#gZo6bS;1#$jcwGa4Ae0uHHP(3bt.(4@p@4*58)B2'u17F`QwB6S-*1L+^w2H-W)(:P3;(:P3>-*`GA#>NHO$',((0S9@/HTEhH2^;k*(UnD;#.FSj1;,j[#(.v#D0v:%16vC(D0TjNC5Xe15R^m3E/XQx#$cg)#$lm7IVq_[[8RHa#(CHEGI9xbDa'nd5YM0p:J<pT$G/mY18DR?33c$>Z?o+:1<'HF08:BK30o$=&53W$0irwt##c#g-dpI[4M50i8?bV2C&f:98?c;,CS)mf2MZIk0nB+Y3L4*.Ob-rn&RIR%&T::RJrb:J2N0/?19^lQ-C/(Du>R3h-?:I@mrUAe#-0Im<E(^=?*J0O<Gd0rJouEm(#pX*#9f5,Brwhp;dWsQ%8Wh(gT'L.J$CSb2MF)J4+9Cs%n0`o[S.F'$=>-=0XiHp#S@&uZxt(]67s7Ek@i%U0.R$`K#gpe#(A2FG:Wv5pLpbg3/^2vH@7/rBuvH]08<pO#0g<E6+h^pB??BB$)g,22KbHA#>H[K$m4#%?*]<OO^F'TCADR`@:'4I;ndWuZZ'']-sL;%78OV#&eiQH9M>I6QvlKs+'CDGC5I2p9;=,V0pm<<U#6,s#%Vnv#$lYQ2Na6v6a#<;8%N2cCSELu;=uBF9<X(S(:q$;Hc*_QI^upT(XkMSBoHCleS-%LBmuuvBShsH918qn&_<+p6]x4D0<o)]#,2*)LV+km5%Xg>7@.M<0ot-$'68<1C/R@4Bmxeg#&dSrlZY6Q4,?%lBQ>G`3g42H7W`&21(/`=r+r^^=A2cgBp-sGY#6O'4(821FCG5SSlN&5JqgD3%oo435?x8<2LnJc*m0O6)MBfJ)1;gq)ht,</AcrEI;`QgdutJi>>7r[6_M;J/PL862Ju%;BourV.Zo6N3):,j>&GX60vFa0#i&g`)ckip>H_3%Bio]e-w7Vr#ar3QBvrm;#[Tsa:q)t-7SP76:k>qP1A<.x_gaLZBSxvV3f08sG)$Wq8#&s,ICkO=(fcOk]vwEJ/p1NQ0n>2,'7iTt/tH?U120*[JP6/n8PH>2%#G.86,Pvp#0:7`VHP.2/nH@xkbMdSBQZ@o6G$kZ/W;mfBR'ui#]tEe08I;W#,2stB6omC##jd-,IWW,)7FOL8XNxSE)0#/k%_5jOe&;;B89IQ,wccE##:5RS=k;x6+LTZI^p,q97B$kI^ah,/tphW.E#`O(/Q5Z8s5?VK8'AM-hkNS2Mo#@%G>K&)(@2M1m<sX;QiO6*`ZoG(5cfw16rpEnW/i):1#^6I8H55'B&r5/sKbv06/D7:JDrL:nD<?6*8`+#-xVRBr#eTEk$rB<Nbs9#Lskx>-0peBSTR<L29Vt**w0YB;nG]B4;KjB4V'OtA1`AFgmt+$$?5_[7hR;<5(>16+ef[3/>nt(SHDS(8,^4(7TqV#wZ7nDcNB]<3I:)#%hXd(M-At(JVoT#mYKCZI`LcBQ>GE,?w[#+Awvc.XkKc*+)/T#b&v<6^mJ]#)g+%9<LOZ-[8*o##h,B.<ok%)GN^h3JVL.XDTj9HcW9B#46iCZVqkTon?^S$&sv>6dQSa(W-P`7txZuIpQMC#(BkC?*?DbBp=CCBSg3mE(lJI<LG;(9<OAJ4GH;;t,7%6K2>lB.?J)8,$]).D,/p+lBA,,-wK_G0mD5a0vIO8#$mM;$]3Q;-[Gd?A[Oe,.w=H1?T]u86c[)d?EdT?C3W1^6dESk._(x,C3WUj6[_iP4+Agg-)hB=3IET:GHX/i97T*QBmYPL*fZ7q6cSoJ%_bR):q3$2Bp=915'_]'2/3^'n&:Z4-rla.-rkYV?bIOS-rl;m-rkoaANU_NBmuv=C3X4%16Z7'Dn1efC3W=b1:LfK@'D2[Bn<7b17)QGTU^W/18JG@#)n*,0VIB.(8M4>G*-=%9<^oK%xR+$C5XLGC?7'YdZClHC3:o-4Fp2D&9BOa0Ti-+=-7$[1QiF#-wA_k.`K6)6`.cS?cgv`46_(0C569HF7<uZ6[_PwC3rhrED-rAPx1KEND)*ZENltQQ^Yh25^h2D6Zbf^#@IP30Vj659GRV9CM?lWC3;)'H&;T:#$v$@#&e,Jbk'o@##)rj<g(7w6*5aB#,2*DB<W7&#crBxC9T4pBI1Q+>ud37>ucn)>ug:9C3E=c16a5O(RGS7(6w9N#c:uo16vFX=0Put9t=u.#6J4LDddx.32p'86s)0b6[qZ'C8Y4K@v3el&53(U#)n?318SWp)9G$G.(t,T#>eEc&/cISeS(4g_a.6N0Wos?B<Y,.qf>A80nub617j$bGHY;=Cq==N#-.a-+A;mN#&H'(IdLQB#%KH$#%^WA#$b$-#)u-l1;-Pr$)[m2=0(wv3KZ.Q:q2FeC3WXk06iBIGuxwr-s0o6*F*LL)ee&f#wrXl#v.R6(:ql#$+9u`Fh+Gq.D'-o6Vin;-FwZ(6<c70#A]F$##AeIIW[aoBYf.o6$307&PNuX&PN3KBMq$X*O$cm%:gHBsN9XgK<p0AG[(Q5J]GX%##%9d2ivFf@S?dk###G/(UXZT-bf2F#@/W(#'V?,XG?oF#$jZv#$$Sp/&#OABNn;t#A]FA##HDf3`TU5<3Rr<#$<^d$=k-A]ZQ&9#>Cqu$qu/U6dN[x.;VMga(ViXC'w13(6Od-(3Le(&GH0q8wBrq*`[+d6X1.j##65c78+476X)dY#Ae/L78+pCI^N^m?tPk2>H@oPG-F,l2Kj*-3D<(e#<':&G-E-V>HTTiHb:=F#Yql-(87RH#02Ja6'>a6DohA.CK0l0+xrvQ#$bx8KRHS:C@;U:JQ+ts7%o)V=%viV$=t3R1:R=36[=>p(VS,I#x*bE3D9GX->wl;'e3bb).+kh7qSMY,[P#0(JRS,.Z]-D44-L01sF_m8[,=X>*39MDKR(*#AX<X126fo,>:7d8[&M:%KR,W>UL(f5>2*T#-L%qBp,3lA5n^YBp,k&/92x?#885</xcbR_h0Fj=2^3rGaY_w79KW45cVZ=9t:U:#'aYOJ70)2MP2a2BmxZe23VQ$)dJGuBn$%O%bf6^_>Dd%0?7`?p3P;1CNs=_SlO+<GfS+?-^-a>)KZKo3/M:`5w+^7*jpUC#+6gh9t=>[/WbOB7;eP*fTiuU[B2pU6GI($uYr8U(;JCj%crr<2-q8k_g:H:5?05U(+kK/BWck53/0,843)Z_6a4.D3$9rm3#G,9149:/#8K_?/ldu702*(8/5-,A##RTh%^055)c_I'#.5x>A#V#s=g`g*>@(b$=a,]=cL-ep'j:=e#:L(OB8_;ct^R=j7Ba$l##uY:L?pcA4ZIJ8BR4O2Fix]Y(t.p&#D#muB`RNn%QFQFH=%hFGw`_`Ofb,8Fj#:+O_B6wO`,b0O`#Z=OmRY1IVb,T-GXrMmwL@v6_w+P3t%UY4FLME19p,h#*^cCBmwFg/w6d:5>9+($Y06RC1I=&C8YZ'O'Oi]##%v(go<Xd.&'21>^(wU:TlI9#4:,V'2C6/-wH@X#]^0OK6Sa3%&Em+0;/P95]s[5eIwY7;Hv:J]biG=2j(u32ili-;+sL,BqSkM2T_i[@u$7v@tB8`*NkoX/U1d>##+/;#]A$aVlOOB6#:(x%8ROxH2o/KHVX@^(5j^s#0O;]XMv^EBkO`HSP1]u2WFeB+MtIK-,PwP+0.0+5_>BZ##.nQ@un#4#$)JOcia[95>ov;#$5DhA]on[&KQkE),(;aP?^97ChURNCfc=@#O7=WRA'cM#_f[];d<Zx.80o(P^JOD6;Kl53eWZ,#$%ol%9ShYBR4%MP^S(+.p$/t##El7%Tse<h=dOx1LO[HPu]Ph$$;612iO,UBPX2D*`^DSA^8T'm],CZ##>V1&JuUqBNULEBNUL*-*@[E$<7%0'P%2X2G=-dfmj&XJlZKh?]b&qBhBtTU7rc*s*1g)A6juv*d,o`'NB1H3JVC:CkQIn#'%u8B6ek9#+?HFC^/K^B64jC,Y]8X#%26*.oqwk2Qx[FIe^RVCk'FDX*f^JCJc(HCg(1^E/@4m#rnZEE/ex4hJ%^L.p[>qs(TV>27=sk>'VjW/r#q=Cm<Cb-@'4cAW/<r7).Q#(3s8kl--DU6c4ch0ug'[1423X+',.?G./pTFEThel%9qv06iPl6`GwLE*3bt5#F#Q0YJ@&-FYKQWbRL+'3pTd+f3;#Cln#B#2Cf_E->vO2k$$W+_K*(#(fGJ0thr<GBGH@#>><#(Us`-FhjsK1U]jm#?(oc##(Ok.amGd:-]mw1sMPl6+/Dq6b8`l1s`]pn7xuFK72W^d:xrP,@_tH#?0ma#fFan<NR_8Cshw?uY,-m$`&0;BR;Ot2O>rqBp-8MBo-1fqU)2tC0(CASh+5uB2^DSQED_O26SHd?EJ0O&Nd`$Fxs'E?x(8R6awUCAq-u)Bn*:nFF6Wp/pr)@Gf*6RGBGwDBmntA@13-j.-u<UHbnY2A^/mDMs6:FIWd..7_4Sq0vF,uP-$IR1s[.Q.)eg&B5D+78-hpv6*NLVN-^a6C3l2n2Z0%n6*<*01Verom<Cg&##&q.L3[3[0VBv46X<GkA4w0r(/9%//TjO`<`[I8'm3lT#b%rgS4k854_D]o##cP,#%Ul?$*#<$0p5w9$2c@LSoJ9.$#D90O9>Ri_5nMmCNjC.#=@0l1sU25)8w=p(:4g[)hAs#(5=MH2j24_/PJ1AC3:7r$wG^u6l'?(&*b=,+d.AS0Ln<poP`a396jF5&lqia#p[Pb=A9EwQ,cVp6^]U,#:_w<8j_?bZrM+H)ciKU:VwQU4;=^C2Mc&Z(7Ro](:4Em8UjXU20T%/U.uoN#Zg:^.t*P$##)rd2KWMfe8L+i2eBm0NO(9jBnXgOeC_X707#7c3g7?vB8J9L3JTVPbk'o3%A.-tE-,N5%r7+l$xTlZK=1v4Bw#5c#s-nZBp.(C4Eui3IT&.ZB8IO8.tPq592am>@um[mEJa=U1O*v5$VUe)3-^G0u5p&*X&$xL*N_wp2KUC5bxtx26EW&r#5]C,2q*D]77[Df+&%<wIW[*)2iO.Sa.'M(5TDhk+Ph,H6bfDX(fl1(&@$;E/r#[94]RVh06m;j*4ZD_$_aSN;>18h3/s-=2i-767Xdj+0E))i1Dr?@2V9_A97OX,7(Fi74xmO.3`WA.2K_[2BWis`##PsZ'M^<s?VFlA6[rOb0g9>TKLKX,89F?06$4b-Z;j'&J7)mE2L%PH5#CEQ%U99Cj7f^]##'0n*0D%@*PtF4,b^BO9<EGl60pr&H;[im6^kO/-s`OG61[@^/x3wn7E*G](W2?1#A*tBe8h<j#$bT<#$kZ=#$,AI(RQH;#@wn@D,qrw#$(^t0=NN0U31[7pB7Wr1GG?1;KvmA.)&JfAp9&`;M[f71EAWN16F`t1715R08Fdj%KLe@EHm8dI<^u&J)W`_-[eP?$VV/.0/IU0@s4BG16[*H#S(N?#/sbQ1Ufqa6_THu6,.W^Jn/g'IH?U9CMY3:CqG7L&PN1.ML8^pIvOSh6+8x)#AdKL78+ii93)@g4,6Ls$rsIQ6Z#ik)2C+RAr)Ux@unV)&5Ym#>CAE=5b2kb$6B1_5l_(M>H.[L7)`Q#F+d67IW[rn#wh)<$&qL*7)_[FR;FX4:3%]x0#]a4$@a.p6C'mP>H:BO7v;MG:j[oVOHLm@7tG#BJm#6r06igr#vF3JJ;STl#%2^m$;ZXc/Vo]m#)%;iI_gB'JM[L5#1+Q.hf7i)9p41NI#30&(BcA?%8:`s5(uVQ7#C;8(<5Kd#$V(d6A]BZFBhNs/ldeJ#Wpl+&Ynb.J9Q0l96Y^:;L*GqWDJ]w1WDPL7<EL8*)%juB@WucN*^>FG'A+t<`QmC6_TIP.80g#08EQS5+FdlG'6kr#v*3b#7Ud>/Q58s98Rv&2I&ch/:B4<8,sXs1WClvI1dm[#CS+SHw0[fJ9H6l20;9?9?@4oJ9t`<HwA)HZW7khISaM'06``_%dpw/06q[321@+:#v)(:#.OY@8PCObHx;9L0ve'p*-G,K-^pqE##OCQ.DeOD#Acs]l>&77Hw]v-14C_B7#C25(R>G5%DMtQ9imqg8+?c07t0#]#UMgAgiMO2##'YT(:4I#2T75besJ:(0p[b$`gA#j1Q<tk#Fp:Z7v1tN?VDAA(R?.h=0F-D7)R>b.DnaT#$aUi#]c_i#@0)N[TdA]#Yb-2't<3r)L)oQ#%f3GnoEx.'4>MO'SL%`B`e?ks)v8+6*W:Q(o%_<3.*k/E+(NH7<I0j/pFD]$%b`K6h?tIh/S-e$t[x:E`I9QG'>Ws4bomqEJXf=#ZD?S3-?[7*)%^_C173,CO7ep3eNZI2i<jM08J<.%b4pXE`dk.HWmlA#S%>Ns`*GW'Ols7'O>6]##YM,*5?Z)&NUG;0CC2l<+#j]Y?MKO$s+=O$lP@UG'd8<5w]JM#%98$E`ba/7u*=KGIx0mH$2?/1VFj5I`R@b1V>2i+]aJ$##m@B(Nk1k*le5e<eeDv0YKn12M*L&?VDgl0H_nWGDBU<#0KJPBw&u^G2+WmBpsC2BpsCM6+f%<(r_]i,-;]d(q+WY#-Is8BifjE#C]u*G09lit^ck4[p^_c$:DF;Nf8o6K,[:/8?xcJ;ip,$6^&Ho0,'XwK#k^S-?VPq#B2`_4q`f=;q?S@/o1xg=-*Ma&6o6p(04/':3C<c6_%M=21Re<'9t,gpi%'^0tNh'.=#?T50PFr1U_fH/wJ/Y$M>jZA6g2p&m91:'YlKHJ[@J/&Tj2]BMC=<J;3;o4b:x3<a`--Cli[i8qGWt5[=Gb19YAU8nXj=I(iYac&2HhkgSjR),,Co-+3*r##4E%-*:Wo#]7Beie&Dcig:gk+W`5_[i:$QBDKPNhl?m34_S2#JdQFL$F'gd^50WhBs)-f^=0r]1l[t&_AoJ###X)4#@@IA],vcR),:pM%B9D;'*J>3[stkFGQ]'WbaBPUv6BESCJ]UQ.#Ban#$42s$/GVfYFP`jG>qea7Ys=K4aCF3)_]+B-x=6r#./Nr6Z+^C(fbtt[uGsd2IHMhMarD^#(CL:H<hM]U&uCX#D+nxB5Y[oRS3wqbxhPm%xheF.oh6PkA$x)&@a0S)GCYtbA&fO+0A[N-+6s^%9@_l#9*]ZC30M^?:u?1oShXK&PNui&PN>qX_us9oQ[f'*FE5ltK5i;4FCFf(fcKh4%:KQ-t?UlIq)i^bwdJN#'Vib),(1etADBj$.&HU9iZwr@q8rM3*QAvBKPNjaEj]'(0jT3on+Dwt@rOi#YP/$1L<on7BJ2QGYE.BB6nr51:%Qs#.rR^B6nr61:f$##E/_g(fcUkuW;k)#-;:UHGFI>*D?Rv1Mqak%vCT/q/C1N(:$&9Bn`DC0X*Tb%@1UY1:kgJ&Utf)FFO:*FG59L:U1Lk##Q#L3D:4%3D9x#RQ<Zk6F]hT$v'O;#&S1/q=^LcQ/$#/C3XW`FF.P]r&D'%6*WY+FGXI_CkBrwqk=[01PDj7)_m?05+<IFuU'C##@/e>)H@YY#87/>#_&AE1V,0R5^hIkFEK6r0tWsG#=ffv6;/B86;6<s@t(#L1Up$Q5^hLlEfk_WD07<R#ZE$;(:*3?$nYn`+%w6_+%vbhc>^9^#PBdZ(/+emksI70-^)HeJw]t56c4_f5)a:L6bG<6+M'%.6*`vS1/C'S0X-(5$kDssK6TlxEcGS_b%mh*#ChECAhKdYATfHS6bSJV7BmlZ0l+i'SPT]u'52-.6+#VZ#B0ZJ#6#-^##,*l'isOK#c71-6EMgN-^)O?PArxgv/YljKMsZ<#N$>*O]>k#0p^l&A^A/C$QpFV4mQZg#%Tg$)ONXRB8bd5$+SaY96Xgw4A6=#$MFL3###A-$*g$72LI003.*E6cp@IM/5-u>/5-%m.peD620F83#?1j`2eC&-)JtQ7'Qv1SCUx.[#-o-42iG=jI0SxPGL3C$%)X?CJR$TPA[+WG#MlfVZAJYk6;51K33Hp-;^wK?6$sZ<RWrY_BQm4cG#0t+FKf,?$l7Gk^1c#GBnO2r5HZ>a2+xUM8lM@5AZ%L<;dY6t.'>g&(LB.ZK2*(*2mx_Cqf2FI^J`HvDMJD(('<d-89AO3C*owL=]W#4/wn1BGYK*l/5?=e#[rF=#&QHKIohju'28IM2c[7U$#d89a1wK9H?*cP)ca,SB871C%#P(6K#jQw$4$Z9b(mvJ2x&Jd.%hbK#'2sG'MK=.DLDMc@=3K^0fPA)DP.#7k]?*a#>Xio*k+w:+LW^R%vlF2;g#<dBp,EoK<>D[$?99uKbJ'B]qf1B1/.nV;^HCB/r*rK##''r%?:F:@sBfr#3OmZD=KZ<BQYgt(5^l%$r15)&ljZ1i+[a@$q6YD06i$?.NL*x@x*I<CRY<0LJ%[a##.pS+h.px+Kd`F+h)iG+h1k*)Qk*I#;#buBfFn@+-s*^%V^gkk*;TU02*[E1Bec_j.r`4#&Rrb0`upeV1E'-K<OjQk@q<(^RL+E#_7GY(JFw%#?@k1&:JJ&DGLLOJ;@akCqtLOq#?c%CEji-F_7/I6;a)c(U3la.X<WV79s(bJm&l/$bTi;=^w;uFg*Dfpid9PX%Yqo06KKr#@B_a3DilA#@1oI9iZ];@wUZmA]jH&AZq0xAZZ,>hKc>-###2_##9p23k_>kC.ot%2,P/s+bB`c20CttDGLG<#>_Q2#OnG<2iEKC[,)O`A@)mOUg.HC#%BZn#)6QODTs0E6*Vkm#w(SJ$C//M6*5Uo$BFRY3.<$.6@C+eM(Wf(H,F6A08kQ#$5EgX0mC3C0to`'#0*+$4/kbDPq$b(dZ'JF##5`n;6_DJ$twj2#[BuF2i*7)1IEavR/$eocv'i[(k+iA$BSOuQT/sgH*MCmCUjcW%s)*[BWYeaHc:D'*-a/A(VX'V$XUokEtUa/JlQX3qfn=x$x]Io.oh%K4VIno#*1=11rXM^.t62N##>Q$7[5U:Ff7BGFK^`&APE]=#(Qi['igw-:RIGX+A>u,I<8&81/&@G),('D#$01Y^q14mFMVqN:N]bj.dW,3JpLf=Bu.mkEHl'$#]J-%@93C_#;HKs)GCA=3*Ref#@1mmubpJB??gtk#$uJ)omx?;$bN0f@B`;sT(t+n%T<BdS;_w66^dCt(9[wI5_dqn7Vj'Hj.X@^00[YL7=?oT3dvn(8PbcN8o'Ma?;:PG#?(%q-+ph5$s5ta$'dB7244SJ*f6#/@wx9C&55HL3N5(v##=>i$$mop:W3<mEHFem`j/*VJw4'9$w)]Yp1^G`%<k7RfPv^m%ow:=8V_gB:MKm:@p4Mc6'IkXC)nCbXknDeF]xsD#_[4qNa#qYTo7'3Ccixp*5E5R;m1>FLJx@hhf<R7#pNcMY>PZ`5>IGH$hx(DC57Ep)R,Z6(k/l`%5f3+/n/0YD++SoOD^-brWS8^#elx0I<9%T),)^91G&Z8.'YCT#(xPB04,$$6:_ZU`Fu;$+E90#f4h-X#*(Ew@uqZ<#>j+hGe2(tHEhxa7MwM)7O8%N5d8F)3r*aqYc`^I#')0+%S[5s#$Wsi'jJ`L#UIK`6b&Sj.ogrSJnsCJ95x[^obRmT/62b[MG,]A6Xh$w(#g3t$FQhJD7B%L]4n0Q2vWiq$MXX6VcJ]gHL(ZXKD,Cb(P6L0&WPwYI4uo:#Bt_Fr(k+F.pH_x6ahQ'-$XpI&Pq``#)ses6SpUw'ific$tZ/b#?)XN075<n$rsWc+I*UD20CJt$WR1W##+Sq%KIMaY#5@+c,wLbH*4aF0=#$0cAJ`]Z&'^k8d&_*7ok:N#$VFC&qm1+=^5pH$VajpfP[.&pt,qV6r.Q#-iWO(VRwJQSInmI0<TvN%7`_JF@6;1#%)0L%T=$T$6'F]e97^YBL2g+N'nu(G$obk#vKeJ#wRC;:fV&c##Tgt$^K=;LJ/a7)ES%D%p+61#%7U<dks@R6^(cG%SZ?>&AeF8uuuQ0t]KA4#W2gk-o#[pnot15$XZ&Ll=e+-$M+U0b:/av85^KK#&dK1Z7d69#,Wk#Jr-$8lv*bE%UpEAuIcB/%87qxCASKx<fl2v'OXpL^M6tj.Xb+o#&vW3dDim#YYcF2C5mpEH&:Hf(V'sX.X5TQT2TS50RYiq##'ji&u&aF16rpK$NE`)SlK5Z#@V;)$`T`v6[Us1##'F?%VYpKiFnrN/p,/3%9[fd6boJ]06QA1IVk8ZK#/kcKk4f[%r0/p%=9FP^/gr/1:NN]0i`WN#YeNh7[x/(Gw*UX6<tS[06Lgm4BWmHH0v)l/92/&G'[j>HGF+:Yl]]FiHLnj)Ic7x'3]F?#KdhnDL/ls/UM1^)GC2r$>KQGIfuOMD_mH)UL>:Z6ZkMW:A[l`6bSDffn(&K1q8Gt)0A5Z%*8LVK#g+U0$u2;X%WVtBka?]$*lo..#gF;=]g0VY#-WE'x<7g%R744r+UsqDbbf93D='1$5;Z/aD%i@6h4VUiGk]S&8ltD:K]:GI8:Q<&54@.5?7cj%op4(6^';x%8L8:3kX4cj`BQH#%0E$#&6,i#$ZL_#YpeA27#Iq##5/C#g(8pCUxVo10+C(?ZjI4#)r>@_3Kg6&RTQMJPG+p#:m0KU_IhTE*Q5`6bKx::QdI9:/rrFcw)(/(gkVK/95<R:JW=C0:a)a?C`(4Je%$H?Cr4GG`oer(:l?R.Yril#.xj-0n.6=FXx)-scDLi+]koa(rw)&Bn<49GBf(t%:bCv#ZuoJ'mk@f(-`f@#WXoOP#s@?(/>Hh5X6KEGMN]UFNAkN/95ap$;@:#277'*##e.,Jd,R`)ExI4G+8g^#E;jPE664/2j2%0j))FxC<<on/A3IB)d'UF%*93&BB_(<D.EchG>+3<%Ug?BKOem5C5Gci`GC?L3++G&uuA+8#DN4qBfC32@=Vf&6bU?TCP(Y`12dj51:Gga(<F^$$,HUGbVu>j##0`U)6r<)#-:AL-^(-t2Q;)T?C1`)#08U009&-21Arfi/'8I9UK.vCfR]jk&7ei>##:Qb(UiVL$<RRlDQcKm$V`bIAwGn`CNtDe)ctuA$%9%I-vLTTWF>n#VHo+[8RQ=HZV:6x)o5?@#:pl$G'Kq]*l9I3#)76&G)1%$G$Y:BF,=G>/x>-.@t7t;GDU3,ARKMjEI9X0GWenB6#IophT4o=6Z+H$GSVEU6g;_*0X)FA2JbRlQbR-3#%B?##7j6,7CdW_@t2CI2K^[:L:1NBF/LhJGi<'ZF/LkKGd<-G/rQ4/7;c7m-A#PXW`PjK$UGV9&@E1adsWN2B>87>5$0[a7WKj&E__OD'vU,aIS;5s(3eQv(5m3w(5#ns<fl+lCq,Uh.'5+d#YqaHHYwpHEk^G**)$PJ#@)%'2,G&m#?OjP6bPI<#9<fKiFo-9#+ST'C:/4S10>a(%=fP$IMEE02H)23,0Ku**,gl`*?Y_@=c_IRCWKFZ]1&-)1R&ai<OaTqKK07;5@%e,QrWm2#87/G[9t5S$;]vh8$wE:93?@WBDVqK6iWpW0cY/5ZV43+D4=Ite1HE3C/DNf$JPPrBl>UrM=_sh,Z#Fa#A)x<B5=YTa-;<X-<u7d5AcMbCj0pb5hKUM##.Ku#S7;H9ko1-NgQ',6*vF))nllP#Qs,)/t9bv##>&s7DaKWhWTgC.&xPGB8:1l*)V#W-b#]8[Tn:Z#>,'.C9`BhFKo?NHGF+9AZI5l>D*Q66rfEKV[l,g7>1`f=cQjZ2mxOZG>+(06*D]iK6952#%7oq$=A6[F]SZF(Tf4u(;_5Y*KBam(6PWH2Mk5E20U70D`iE..Yf#*B<?TID_5?u,YS2Q;J?,7Q..(`Gv=aYavc<06]w4h/:Au%##;@,'nTef4+8X1?upbn%UWnZ#vD+8/x,j<cw0wa###`7#>BumITN+I(JGXp(JI32>)=tQ$s$x2#>sNf3%G#6(2e8[-#VeJ#)vvu3f]Ju2p0OS<`sjd,$Zk##?omH'9aEUB6ASY%8X`J#F#4(6`OKaGEkVp1x8Y@DL.t$+LEiN+harO#9ElpI`vIr$#TaNfRBB4%:0.M#?;4:/wSrw##S:V$[)MY(fc.u^iV=-%qT*=65:xu2uR/T(/+b=%T#Pt$4%#DR1^^I&m&q?$[Ex:DKwL>Aos0IJolq`It=s+HcNr%02*S=FM.Zb0EaunDSaiv5xjDi=%uWpDo6B^/Zk9+#D6n2FBSZL3bW$e#Yw,[$tN_8ba.Jt##2UI$tN_9$$$2`#'+l/&ljT9##9vt%Kvvm16T>r#Z/'<)6YXH(&.pN-*O[]$;=^.2T]%TL1rdo5P2vxu##26#';P]'ih<?4+VkI.<p?I#(JRmA+P[m;ix>h1plB9+^AD#Sm/#q#YlJ/,>8g<;fHWW-sU8$#&v)W[0If*'j4nX0?KJ`6x@+RRoO#d;e18h#/OagHGOXA5vnumq.cZ;^Npsj#$a?q_KX^A#AlZ43,_`$Get1b#[@@G02ikV1n%rJ-rmt6.'uUk$&t)OEdc*)($Q66(Vqxq'lIAW6$+Q102W_De8(e;e8(U6%8[kr%8[+s#@/OS#@&ITMGtx.&5<OJI,,vPGYK<>3H5+12G=bf%>u;Q#@0,27=@_Y.5rWN-vcAS7SXMRF%vnQ#(JIi4U(rVBQZD0KZc7B:/MS7FgukcVd#F%$XEh@5^@gxP^-f1-rlg%EorwV7B6E85dY`D$vdca=).k'$<sn%#^bl)9M>P(#>SmZ#>,58/ldXVI;'C]/4`;'7Pc+lC:/-*EjkV`&n'*X#(3r#688Ie-[]dr#.u[bSla53/wn1HfnfdC##A9F$@)cai.eIe$;:Gd(4.qJ7p04n5uid^$<pJo#>U1r$'EAVK#gKK*3CSp#8l$h0M2FSu>#YuJHd@5-#o?dA>(dP6a1dS(2d-F(N/M&-[p?0#)lCJ@tC%B3mF.SgjXvt0n>(@/tBMg@w[7#.<Z)2k)Zp-ZZNwq08jMS6[i)./92s,t]9YL7`;@9IF7pHH*JdM7<Du)+]WH%0MDM*]P5Vv(RU<+)RKma(&/)=#L3=+3.dad(Mcc]#%AI.LfJD>LfIpr&R0ml$$IN@S5`%t-e;Ww@L)u3#&AIX##QJl:.vUPIw9r?-+g:C,&;,a##ZPcR7oTGFm37**4.LP&&<O$9xBFu%T':p$S2R2B89v;$o$=+JBxB6idhsX#vMKV#'F*RdeDhCCj<U,9sxUdBio]x$;%(28?/o/./>$4-vFag(N'5##w713,w;OA-q@EA6[iI-jdS(U@s4Ar,>9g5Cj%+17_QC8A-XZ82mRTt#%%@6qmIfX08=-K9m5<DMPUB^p3:'1#&Pq)$;:jO)ew9n%;na3m>QcO5um9+(QU1e#V;?H&U5D3+xs2UB_clG1U8(Z.=#I>)GJO](k@bn/U(^B#&Gk(a_h]t`);IP#)vU(G'?L7/9cT?##/`G7BSfeT4/(pBp-?l***2D+3g/]5dvZf5e)D:H)lAvH*r;+4)uZaX]ZTe#K5udB6]T<%W<pEQ=h`Y#$M&NLfh$i$)@Q*$p]B[##Gi6)LXN'%>gU@5>22ELJ@)[%%.)w)GD6@YY5.)nqZ>),wI?Q'mt@_-%..E&p)Sg#$WEX$rr#S$9A0?2i19x#w[IK2e??*4)=o74'Vg)K4GO96pQDt,TxAK1g4TfY#unC#%gE4&7-g=##-XY#mc69NE-7%#%&s%P#;ps$Dr<?sE97I/pcKjt&swOB65l]6(T3n6bSrk&lkC^/mVo/6*SVB#[TsH(K&M6<g8cl2LUd-#9K:DsdfG'(/0=1(5K2=9t,nt60]i_j(O=Y&Q9QN,'ETb-ZjnNqIoD/#/A]q5<U-D.4>15.'b2KHcO=,Jw>vDBrdsh6jxjJSQ$/T2eQgQ&TpFN5$%c/#?u$r#$Xg50kAh9##mk_)67b]#YuiLDQs),<*0@H02qqm%$jDi03odm#X=VeUK%R7%pA<p-F.d=u??ew#[>Z,#(7^).6x#>ac-wIGeZ@2'H/ddB>/#xj,NhnGlrVjO^IjM$.+W8ebxTgYuS/eq.[5rEfwSHG)9#,27P3Y6bR)%*4bq1#U*5P)r5wtE1&blHs(7n'21HR(V.i+(3W&K#?LoaDK^kTBOcpe$VrhI%IOC80hLo2gikcqF,@iB(5HL+$b*dAYvMBhlwbh(drWg30Sk9j3+ZqAk]F6`.`Ii>%rgGM%x[6t2im/BZ;PLB$AA[vF%e*jF1D9S-+[rt%X_$sF1D9Sr1`S2EfxZg$s[12.#'Kq-AdT+Ex.B%3`TQ-,Y[>_#*<g008D9JB:0N=*D@0*@)t.skxGnQ3F-W>-*LkrCPuN2&54:#5sg<X[Sw>Wgk&OV,&B)uUM+or0>0N]6$+Y_.)[S$+'BOf'x*+f%r#BKgkvXk0;SYQ;G&TpCp%,I-+[5`#x%;6##Dh:-aoib3cW'k3j,&v0tNd]##:>A`7VA75fJc/0tN:K4xlx?3ha-i0tWaA#2(i:d%$AHbbbrg/?hCUA]A:uEdrqs/9m#D#&PgSS4ktHS4mMk0nm$'##:Ig<kO<3EfXb$;0u'aEJ=HvSlL3E5>2(J#+TI`1V#PR#&GsOQ_%Rt4]S(D-*@c`$Yt3d#>mx:C4mRt'ipe`'ion:F]EhiF]EF[[7iOQF]E@YnRx8*nRxS65YM7&#&7]4##'#?(9mx+(qN4-$TJ3I6asO5#Ym@a28i[?###-L#g(#*B6f-B5Zx/Y1Ta1D)e*`3###,L#,,X`C3bTT#-DKnC3OHGtxp-i5ZTDu#7(TBFs;79Px::]$$]#<R:Q]7$=,*8*b*Z$.v.hWs(i#P(&*Yk%df:3eqaN_=,Tc&2tUHI#A/Qnm;I^V$<HxB$TL@S6VIK]+BdE_(9Tj)'+cUYf_+>v10wO]#%1Q0%8g;v&WhqC2Lm-3drO[S$,.$Yu35vK##fQ>.Z%T@.Sx>w&PM>:<dg0_%s;P]*D?vq%pYb0C34-d%qMA(#]w)'#$`/0,?#=q(j>iS#`3i+1LL>S*`b1T(5X8>)16t<%WrcmB;Z]QGUZ%E@tD]aQXN-;,vF)V-AF4pX^I>`-x*r4##5)B%Y+Ob'm4D@##,YgpxgxB,xT;S#$b503E]7D3.EmM4A5h4-=T2N#$Wdc$=>_a##9Yo*/c2.223<3##0?$4gKw]B6;[R-wT=(&RgZc/nWjS;uuF#<JP%>Fi2V.8m#GDr.)YI'SSW_6d0CE/7q-=27t?/1iIK9*`ZRT#(7Y^<M2-OIS:<-7>)5;S7)[ld;X.A0WnL$#],99jCn-x%J0e<3Z%:2JS>0p%/-$[EO7h@6s3vx&Ts/Lb^8E^**%2p.BchV&:A$;F]?@P2JN6`Roa6h&F^[6_kdMv4]QAD#&d&Tk],x>#/)4:E5*TL7:v_L2L*u[%X/`02KptJ>[oxk1E'j*Cqf)p35,me5(n6;X'9qo$>2&Z#>F64#8F=KZ*FR0++,H^DRjlB%(Klq-w$pN0moOcDoeF9Fig-3-Fa4%(j2QD-Z(6dS;`%+B=Lfo.Yg3kUJ0Z1-Ab-.$;<>x$BY=7Cpr+sB8.O[0tH(V(g:dZ#ci<)7ILl@*r^fV#(%p6k%U+iI8WMTB>A6vdr[2;%)s?`hf@dQTnw.%d]k6)5rOpu)j6qq20i&L3bW'^$]3<BC%`b;4^<06HQW]P,'5Mos+IX9DU?o7GHEKi;l(n4`qJwM#[o#%##$sQ+*<We($%5d#Zr@AgiMj($rvIu%fhH>F_vT+?Y9@GZ#BdK.9o7-'oed_1$foh0moOl/TjVH*acOJ/YP?V#],F)##b&X%odoG0<YXd3D:KG%4O;g/;%Q-+*E3f$L870(lVt5##OP;$<wR;ClsU^,#/6*K2VcT$-37%Dodpj#)_m:t@jZogj,;>+b>27&YwWSD.Wf^$s2&/&#r?kk^j&g,]92R#%BX;#Ywaj#rZF$>kjY@n2^6MFi_)VApA2D'jk1['D3GQVK)iR)ew7H(g7s$2n7V[:m5ktuYPS,5>^qI#]bZs19mhN-]m7U0j,m^#uB)MN(lbUEWmv,1:Xm/(3jj*#bQ$*JldP0-;Ci5%)FW^7CcQs#%Tf'1M1>n3/&e$6XBc?08H$3$)@pOF.Xbc/TVMmR,&o96kuDZ2dKdp3)gmn3E,v_.whHW#B+LHP>a$V7lPF>P61q$#%icf#(]o'FKcb_FKcb_FKcb_FKcb^FKcbKl^@>U5v.Mo##]BH9noITFP6`qGDT+MGk/2.HAQ=I69[TxC:/-.FiVu4CJ.9X1;5q5X&*paHwnQm6[_N5c?Z?I;Ifk+IEdPR6bg/D9vK8JI[C1x/96##.otJYBX9qTG`q^((Oh@YH<1*IDK_#P5]'l'javV1##tAo;7xE5IklAT7<EU;P#OGF?Ajj]GC'q*(5BS-0RP%A#')sR/5-.e(JI;@:VSBGI[;=11;OT,#bdmBd:g#%EENqOJ;=b')chJT$tY1I%8Amg#.XuSICTSeF&<R$tDgKW6X1((],ml)93deT#(1ZM85gM)J'.l_Fj5j+%SRfj8Y6060iib02o2#.NX6rg6EqTF8q0E6*gt^EG)x/+/xsw_u*WYU2Kk.p5_jm?d3]-T6boM0I$F]SI$F]PI$F]XHw'U6$C(U/H_+SHI3iZqK2*]b6lBvl9#sDm#/GD76AR@N9/R0n8q)W,1;XN)Gfuo`GD@m>PuYa428:Z510OZ^Jqfj#7'$C&H@'ehHw?-)#%ek=a19`t/:BbSu=h8`7@O:xEI2Me2MQBq#'+LIH;$WE27GVRI8Ug/DK7(r7(l'c#(xCs6X9[u2,#:5FF*xN6G4ka##HtV/x#SR##JHO3dZRpAP<5B#)+JP6XBbxB1sJg##Jd4&r0hf(fd')6'wmlH$3cbI#3#xHZjudJIMX&JIMX#JIMX*J5v`W)9)pa/VdZg#%q8u#%U&r#&?P9#Yv#%5i?$lLfvp3MT.)vGBS%n86d.086d.xH]Zh3ICB35I<DK*%#gC`0Ta;O.=6'J#6T1<2MQF/H%xuX:Q>F#:Q>Ea:R*A_I#]3-:Q$pl:XB)I%]kT`LJAPY'MK+6PujZn6cl$P/]D-Q#?0*F)jua8#[@@YHw)dO#JhIV8x+lL16Iv0(;d,;b*9u<8qcQ4:5O.NGM?;K-^-3$3QQTB&POFe0J4a$8U06G09f#)/t]l^H$C'U>Ehff1:wZ1&s-X%4*<'h14_n?96E:E#&&(,#.AZ,6*jf-0_01hpQV=00BjO>IS@9k&9x8$8qLDA(s@l.#Y5A/Bj=Y0:5NlC:m.Sq?AWj[9p3`AF6t6OEqX/E16O`m6_q/v6]xAA*,oB#`G)2J@C#3aBp-Y3`ia)qEa_4b&PaCqSP;V.2n4eOCA.kP&RgKm&Q2TT(8BeV#cm3Q5PZL,2$T5-7)(i.0n>(gmXqwSd=]8SFDd&)G?m<3G7Xi$FS9vc7]X,3A4LsUBT=wm0?G1M-Dt@=2/P%%%87>-:fV%'#*1:/@=A`kG*?-iA#V$*1f]O?1f]I=,upYD@paT#0qGo%'ikba@=MRm164T+<`NUh#(/281Ktk+1R(O92k?J578*gE#$at)#$amj##%'^7[?3F8V/YM9ZSpB:kFI@'20O&8jwfl),)0*104HZ&53YEf`r4:0MFq@1NY&X##?_P)kDhU(71[v(7(%d##PAX0qZ%9Ch9iU#$bm@###2(-[/:'#9Q^r<e7-$2MX)U9ov5_FBr@N#(8u+9_Mm7>d0B29n9(9044op3*^5X$1($f9W:7P@?OpQ&55?R2L&&;#4+nh9sU@T@?XvR&54C72^De4-YVqe0.?qhEe1^u'3pAE;dm^o,a?:3l(YUF?DhQ5@v2VI0UbLD6#]Kv?[XmP0UscZ+)Y[p$rp'j/qVNG9W:-X@tN4)9sUB^#UN<=;5Znn(JFi[XFX6V9k@[']PF$;-rkbN#x-JW#'j;N=BYgB3FI:Kpk1^4ZVA-o#AbMFEJJ=a0n-O)EN(L-06hs@H;#Gc$OeTR=ESvB>_RmI/91p#(+KgH2T^h(._&l4&St#=%SSR7@tCD(2o(9'@r?7E=HX&r##T5A)Rgb,$9&*%0i`kX9+r<.3DU/n#VmEd-t$dQb)<HB>YGP,b)*;vCfPc31f]F7##><d##>2:()JB*.DBBFMc[il+)QtL.*-f[$u_[M';[.1F,=-3'3-,X0<$N,)GXF=&8rPSj)0V>4DR+F###ca4%pZZ%9Q]P#P8%-=%jX;V+s7d=M/@s6d7v7#$1f_:PWcm=fK8lF,;T;8R,]eqJ7p7%2B%`F7(H6F*2>7c?R42#YcrS,Ir?,#wxWpF?UT&EHax+5es7r/m_2d1NZ$P6x$MK1QX8KR*Z2A##9Pg,dtqI(l/m77)Cwt=%k7R=%k1P=%k_VMfE3]J9Pfe,#'3(1M$R_G_D2xJ9PepBx42.7?/o1O(]Q?H?hB3I)%Cp0peds[<n(KF*Di]28-DS7Wa-p:L*tIF*Tw42iunv=c@paDAhW%DH[AK,`f(/HE@7K21@*H6j_V2IccTJuv_w.5D(VUIShD^tB-c'GA.%`<`Njp'5T5L7_Jc>2hJre16+MQB3,(:#SnF,2g(@39ACm<0wx+31VcN2+P`O-2i,+fCNb7SLO;ODGBp:24F_ZkLL>6%dWDN)/q(sH&7KEicu]hR[^`-46,YqX21@'q_K3_X3-Sfa#Am/ASk=LI2:25Y22Pog@SGNhc/,gv96b$c6^jhM62hl$F3kp(BwZk=0u8aT#&d*A+A<p5I/EuJJ`a)v1pm*2#$i4T2id>w.tH5/#(CaL:eJ3A.#0R^PYK]`$M9-XFxaI*9C=@N5pmc:/oc6c4G6wpExNd17BYDP5Iac+p(X-Du#>BB$twOD%rTBe=Fk/6-xP3[D/DGV'jIJ-$e0&sDE.jiG0#'7WFn$[#%/r2G(SXVkA-rcG0hG.B[?snSr6t#4&#U)20aqEF^JMogO8a)*DvAd#MSBK4]To10?7r;BsUWL(rHLt#u,GRCPt^H3-@9qpd+Jj.:$gv2dKwaR^S$iH,s.]6+m2q#b/r2$uTH=O`-&x=CGxm.:[?4l)M3a6cb@j)0F1.2Q]<V1iB8'6[X<x=FDXKBFR.60P(7`*d*mcTM]%-B8K>u#(Tq*1,1%j4+@?k32oAsm%D3I.2LgOTc7F[=&l0L#':,sB?o1u)QbKY6EVdg%xNbv0jVqo#94SZ3N4RAv$?EN&QOqn&-GX:ub,AL<KLXFFi24R&<U1$o:(vh;cwPo9418I0lNtPK2]fL#-)<B3/L/RB67wX%SSZc#[[R:J9(w@oPhp?$)q(.CYpY3-;4P->?L^f#cjl]3`TRm##DnH&4o'a2xn$5.oh$3[?5*hD2XW_(:1]v-+$QR#??@Z#q^b_=A0IJrtlAUF(m,,t^-?B#Jlhw0i`ek),;dM#32=.C5Xe%4cPlR1l[F&6a9x.B=`arCNaZ_6W-EX#x<nZ64Z5;BT$WLEfm0/-w.ReBuOwmCit*XD0TWFDJgG[)2KDn6T&Ik1*C1D1(7d01&,@97E$_A%.?<P2Md+9.pI/$@':jv0:P+<-;4FlB2TkU.`$vx##4e*%FI=E*D?PL#@V1q##BJi.;h>8^k4QU#*`9.6FVoW*4Lm1-,#7@#@`K2#%`g:##^,='ANRr+]W+.##[*X%HILo<1XSp$=7Qn-[^mdJQa4^`Y41H$X@KgPYr[)2n#6%LN3vcu)<>i%VB^=5YZQ]7u*UgI;g10I;g0l?<70'dWuCB]s82T6c-P3#(fIB7N2S9.VsS/6b8lj/q[S2eSBv<#Z^5W-,l=='MWEw)T=757^xv#Bxrn4:5NPT*bkD+q44F<.&RovJX6tu2j&8d%.?m)9CuST-]jGO,>8*md<a9i$=$;`7Z9nGCO%?&2OZf'H,1&h1?/BG3UKOo7;dYRHv:wC2Okmi#*:sq0qwYu7Yj7B;+r0u-<3C20mABp7T(b?H[?sk;h0FQ]P)w=#$km;#&ZMqu)NK+#&Gb?Qd'KgWLH`H3jOXZ92>VN#`IB12dgvv3*-)r3EH476#J3g0mAA+(KF>C@=hDH_dml]1s<c;FMK`V#uew?.#<_*(j7*J)07gY8qj=B6#%6?&ljAn#Acw*kb9J=H*KD?#$b7j#c<Q^CTiZ'H>IJaP@9^xDooGd7#5t/>>,%IAu<YLB=KO<+_R4iC/#qV)R(Gj2S<J4,]^)x2M]`E-@ImQ85rHN)S@`-#+.Mr3c]SU27v+v##$.>-]m8r#B2^4e%(g^ZD7NL#Y_KOLVo/EG',7K0mn>T2Q8dU#>Gi7-@RiC##(tQ(:a7.GJvevI#3-'+]Yqt2Lp(f0&wVoK'*1#t]*PP$'GQw9M>xX@f_c_T2v(tTk9Jj#/,0#CVOAlG-xw-Bp+4'C:/4u#N6lX0tN6[.#KDj#A7xp=)MssDl.m-+]Vm^4Fg;v@r@<h9m`SS6K8k(BSKZ`6_''qcc5,8),75M3Q+(SP#DC<#@2D:<(o^F#1<TvI]KTDIX4a1J6W),F2&5i+1ixe*Pnj9#*&cF-wTw)=ABE2#<av9'kr[&fPn./1KP3E/R]cg?XRk[@s3BH'2/Ta+]]2E%pmcTIT9NeIe.;U.-VIdImsZr*D?I82sHEx0r0]@05a>9##$bl5+='M;G772##)F.<kHYcHCsp?2Ju7.W([8/#964FF1#j56Z,36Dmnip#*3T<FKmnU#3wU0$E5J>9nUNqFKpl]>+&'NBoqSX@u>ci9qn23Kq5E(IxU5eV3O>v.'4^i:/YnN#5o:*<#HC`(B?/&6ajtf-c)=Pt*fY*C[<aY*eotH;hAOT@9ukYol:T<#WjHZ3N4N[&8Z'qj`WR64/kbM4%qBNGYp0+N).TI-w$il-w$rk-wKWH.?#e)/Tq7l%#pbSCj2(57?8CQhfBMTG'XGa#kVo&2/RBOBmlMU1;&QWL34s1E-+U&69CE`6+h6I0YB#P,ZcO]3fqCr'L37xCUXP=&tw^p8Tc5L=iZ;:JW4xo$6^c9G&fsd&6j1D4)I'O@#+lH$tUDN$s&XP*O<o)$605E0<wban9;E*7'b.0#LF/h>Z`v[LgX]#4AK_c-*fRr$;_?d)1PLf$c*w2D0:3tZV23>+KrxQ#+*iK(/,%1#&Ph>]lN_l#?io8gW?CMK3mGxnp0^5APVJ+$T%?n6Yd[<149:26s4#L$=%8;#[Bl%uZYD=#>@'`%t/7bMMVMR$b4TdG.:upO^d1g16O)@9]YVi/wQh<#&>d]##usF'27.<+Dp/'#LQ1cB>4f:C3;S1$rssC%Vm'/Cjrh<#ENDB6cHQI2pqB_'2/QC)GT;x$ILD.ZO?oM##EHL;6iX*G3C2^PYW3dJPRi^G0;+F/s^kWFi6xP#87fa&9%rw#&Pq6m`FR>0'd2c0nGF17$q2Q#Z<@80TZ0p('4ME#S[8QW`ErO1;(&&(kpUp#j:,;P)_Z>F'v_wEKU$#VojC8-X8B`#`OkeJ>5SRIpm^@I#0S4*a*E&=%l<&;MjoHC4.ek:5McZ#[_)>#ZFfM&;)B=<EgU0(JKZB-^)gT&R7FK#`?L1GwS?p*)$KK###u>(;-s&#)<GSCqejpuucSJ8nA*,#>E$B#(_GmTWSTe6?7(4N<0/]Km/YwH^12%/r'U4#Ybuw$SPu)3*60nHG4O:.#,be29@<###R%23QiD--,Y49-=`8Q#&&56#(0k23'ebs2iX-E#[7<$2hn^r12]kq1=.S0DQcICYFdxc-wU'_#&csU+A3j73aSRS'ig0uae&>X'MPmo@tB`j4cG]P2i>LC07m%)#'2JV2cYT`5$7mi2he<h18Y%w3Im@m($>R*(<)cH*.FA]4c,;N7SIBP5(6em3b)Mfu^iJT4'M^*4b-nH4m?<m3IZaf5(52G9iZwo3KkGr2L[/[$BlI*2rhN;3(*c,3J9,M#>KxY#*6NU-vKg*$/6Z:ElveD141pa%#[*)@rlwR'A5gqBBLws-vK;p#]kaa-h8'_02a*^L;P-n1I`CZF%ve@B2/GM&8tJ9TOA0i#ZDr+(3K'`;L_BX0FS>'8iU3L,>A`ticR's19WqU&=NZ;#0hZ&H#>1I7Bed1$:2tG]:l4K),/`7*P?KJ5E-x?&R5q;_vPpK(/;5F2nFe)d3'9L6^F7W6_'[+ZHNCpf69rb&PL9'/98+-,Z98O$*O>dGe.;h$'7^)6_oIv#+m($DQcJ/1k^_>Y>54=##]Bx$??5a14Ls_ZW.n8QV/%8=bCVm%qL-j_/YcZ#>PA*q$;[a'3iGJ'j0^w-$Z`-&P^6:($Q-U#%&Qh9N`C$iK&]a,?XlR'N2`O1/&f(1/%n_,7IG%19Z)VMX:D#:K3vr%^'//t0<,X##V7+#Fm$5.TQl908:op#%;d^#)=tfI/EufIdqdt06M^w#Z<@72j2A&`b>#p`b?YCEkS?V$s-j.#H5RE8Jj;T<dxb`##6Y#$4:ar05P6O6*?d'-*Efa#][]I#xRLZ,]CMD;gbCQ1UIu2<FvvY`gZ%F#v>v3%=2Vn]o1tF(8NbDA#VX7#$kH='kNg:$[4M<:Xp[d<eR<M`OLnMBb@OO2p*_VC&-bm;i/lQBmlQ2HF*Z[#?LoBHsh;O4AnDa@r,LB9id4IAm;UA/pG_X1f^4>IpZPgJ:ej_3Ispr:L[eK%os5F#]](:3/K?SMcOx2#/1XQ^?qs.#B)>_*km-^=&ftM$Ow/o6*==Z#$$J$(<,^_-dppclvL04(4`1X#=eKY8:i(a#8ouT2hnED3fT5F19WpG.Xt.?##xBZ%:9*^08AE8'8?KlRT(-:G@:^A##q=r223pQ##,-F##c`I&s6O%_J#,@$WS%V+`;(P##Dn8#J3^FBKoc-Bf(jB'#&'cVSWF,)HnB'#mwJbC5F_,L1UMn;GH$&33@;>#L5'9HGUi/)h7?I$)q$t<t9ib6Xq1,fl%U96[[wE$KSnX1:]sBLkV(P3h$1@%87A^'20%U'2/xf'20%h'2/Q.L.pQL#a)VwFFeSPF,=Lg?XexV+'a8)5]+YF#$mEdJ=JhG7D(/*pR1]5G$B::H&6Kn1;#i6J#w[B1:^Nqm;U[%06i?$0CjSn06i8vJ/aw.06i8xt)qaJ06iH?Me15*Me1&^NH02so),V50B*l+16*;W##:;%4Et/GcL85d08Gm[B#63gFEh)Y#$bK%##)5V*I$w+2Sr#8/Mf<Y$R-CVAwVLnK8a-M89H:a.=F3PM,%:5fq)/#GBo7bEJ]wtItB8p#A4@46bSGn6>5ts7(5D'5es2p2j;.6C5F[05CBBb#)f%MD'l$sCkL@Id>7dn&lm?U6b/Ye.vkUs,ZD;=-`2[BgN`l)$;Kfm2hA2OdQ3i7(fc*:,c8PwK6Va%eoJmP=*Rmb6Z2]t#6oPj3KPYS6+iGt$VWI9G/Rd:8#.Pv6.E/GA/Yun##ui_##2L1#GD-I05P3'(T(`H$?vPW0i`bs##_%V$?#pS@S@;F##,-7#.m:K6$PJV:J:l#l8G2Eqf1u7#$QX`(%M?A'w?Sx,f;Mw#3di.C=EK$##EAf$=jbHH`gA$Q@T&re8=J0D6J*,HFo&`=]`[J#0e9tCrn)m.>9fnj/VBtDon#j)Lgi(8wsdUF/B.RU.c`_<)6=p#rdjuHrY^rG5`]S$R]3SG-,fxJm1&l%c=S=K6;Tt9X-.Q0]wAehh?a#Cji+]8?kSIDF=oJHBOx_1;RT0TiOI;7vi/IJ'dQdCVOu]FL>u>%8?qK3QQTt).Xik,uoK1F1ZbA##ZPc4A5w*GxR+_=GKA]6dUCe'0cN/8?q&Y>exLiHd-aP1k)/);12s@0(PB5aV_q9D5R`FrGwjiQv+O3UaON2/w?l3D06wm%*g2aq)gE_?*d^-0tH(l3`b(KHb5gH6'MCsK6Ux<+,4N7#3#Z4Hb:lh(8Q=f0=>pm##0o(#K6ilGfo9iCVXM'##<78#SlWm4YftKHEG8x/['63jmt$FCm*8G0mH'[>Acx0CPhYQ6&/4M4A5uU,>F_=19uD9#&fG.P,SO[%qstB#I#P*4+B)S'MJUL#uxZ6$L>ZBtN2%BWsG]G4,?'T^Uhk)6_MC)]SNwTK1mjf8FQ`'fWN(U06M5a#EJl=3-ZZO#9O1i3iI7*7?nkhEHW.1;G7qmjs_I<6`fRhCkL<C5`Bjt3>ug.7<Cm392$x_BTsL%%C#oKC#/j&hxCd]#%T``*jUQH3/B`jfVGvA6u$(L7<ENQ<f</`Bp.5]&S(mHh)Le@ED.k76))`c6b&RhrKv#M5xqIlHAPLb0Jm(_;ipGe&WJsLBooWPLq(BVFKIXL@>Y`6A#*wX@?;.+Vgsm@sD3PO,)xCf6,28*#7`Yl3*QAi.oh,'#0g6S1qCQ(Hb=O?#F#47HGce,G/]F8H&61G4xoidH*LougOvCl4-^g7H*iM;eqNNnlurI5(5]G`(6jgI-aK7=#&Z0)ZrLMl'rAkaHEiL-m:mV4#9k.T+]VvrW`?RK.)0iC##9Gx8s7/FH9;7:t@tg&H9H.mI'L*1)65Vv#Hhk<7q#bq,upGwGxil9s`3aRLjYZ&lY;IV#YZ.?(Vg=%)Mx-P#[[RkB<XO4LfSCa$9SAu0ck`.##1eE#n_OTDogp(B>8,a#HVXbF1Yow^U^[l%omxA##8cv)MsB##@IO>ZrM7LYY5lXVo<o6[CdNc#(1'vH6cea-;4`]#(&GV7xgtO3/'2Y>>9%8BR<P,07Nu.21wmI##,aS3D;^5BmoEr)J`'W##6]JK611%JWU<)RtZsC6%=p56;N;nB6e9q#&I)%`SS(MFIo#<#Xfm$FchT^_^eW]1q(g5QNJAKDVbV_=k/V7CUi,#%U/qJAarZR)W1qF##<.;#p6ap6,36L#?UuqDn4&n:qqEh@9XbV#h5#a5H-3)B86Lp?%=`o@tH-3$[VpB2heE<#>H#1n8OFW#@'mO$=QDJ#$jY.*FhPP#CA:c=%jX@GHI:%#;.$NK6Xqq#xO$?e@r>xLuE9Lg5r&-'io[4-,LF$#`w$6HtQfbn1itQJ;J@_=%n%p#Z/jN(/I9H1s4-?##=A1.;_fa##$;I#Z_r@IpZPS(/+eA#$Y/5#]v1d##/UW1sLp^BMC+9K69:[$@=Oj6;.JxIux)MIux)1<,Q6].%FOG'rc[O##-,@)8w(i)T>jl$uh$mB6I_;BQelt#>L(`#HwSxrDJ?j#ZiN(+iA7i15BrvR:hDQ#$tC*u$+@:$<-Yi#FYgxg1pcODn*aoGx[1g(JFri$W%qK7$;#2<iTMI)M:2mBHD8*UhkLZPbvU0.#)2vd]5lZ2l+dl.(Ne/Gxe833.sAW/Zs^0#%KR9J4vG;#LOm&Yud(Z#*gL-:J<TR#Yqx^F0TW/=xsPJDMMA^H:r7B),+#IDML^J>;C^YK83%16cg8,##I6Y-C&#SbO,'cDS(#8G.V7#M7@5O6,@&uGvntSJ6j8U+'k%.idu-],upU.(7M+,$</WtJSN^-5`:]E?NUu+G@r<kaFV+G$sB64$$ZG[NsTN?##tou;/S:>7.8e*7=I[c2cXq452QAthiSvJ850fF)cafa7>*@C#%/U'#&d`g*`[0gsR:th#(SOg5uV?1K#nRm#/'JP3fk@Q.akdlh29((uT=7N##UTN%7J'J49*pK0hm)F1q(s5Dt9)g(fbw=*`b$r(3S_o.<R_Q&;a?%2gbebe7b_-#/N-R5`1W@65vxV6d[RY<faB^6*x$Q$Y5poJ^Tw)VLC4bC?%eb9X$UnBQHWB6Z,j*7w?Ai6*V>3)6l)a##ZJF4gLN<B@6=5:TZ7L@r%pK#%_8F#+TbkI_t:G##,D-#@_`_-vKJu$9g;3[@[M;#*3j=CUtbc#3#^bH*Lm*GZ>p7J^WH:ASuxxGf[r+#BkXm6sG2BC4ZY)HYW_fP>20m(/.8&/AYc-'kNJ,#)wj=Doo]J2LR3=(/+btO'Ool##R8<L;@;SDS's,J>7q('20OpFj^PHXxTB:PY`KT&lr29'wlH7&RC/v8@)1,7@ck>PZ(GfB;n;uY*h2n),(XUcE<w&C;1mr'l8,AO8U`eE4B(T4..M/93rd4N(s)N#=smM5k*Q2DC.)QD0gDme[:+ampYEf@uxU&HDt'@0#/qgC3kk:6`sX4#G2ZB*kfG</w-]K),.`I)0j>h<JP+@F+w]-$fw)/Bp+X5BR6=u19hN*32_8r+d$^CT>aLMBSW;j*3`+A.Bl@Q#(7rd=34Bh19cc%26D,H#)l4II`>`i<lN@v6Z<65#=c;#BEw7,H-sF*FqJ8#6,2>`$<nL6u'UDf#(BwqCEt'g&PNW7,>P4Q.$xK4?YiZ[UH_M^05e=l.?x=f*D[=&)Kl/#$O:h&0<OBO.XWf$##&9h$#gmMXH3uVKjJ;O##*3G#ck(]ZV1F6#$]<8##9VP/X9dKLJEK@$vQ2Ok_og7?;d>s&D$om3]r$)L/4oG=ad*I:TYqH$;U]=K:a0N,?#,J#>[@=5(vR4,*GN%+E_4Z#kZ8>:f`XxMd1.N#?3C016jP]%#l:%TiGJm3`_Kc3`^^G3)if?+,;bY#i_&$OIZCX/Q[w:'pE#t$.hP@BxF`KBg^b178,rkI'Yo<#>QOJ$u2lIK3oUi]u&rA##D@;%IkIQ6'A'K#e1Ua-_FkL#)G*CF))GrmVo4<ATU#?F2846H[RvSBfCZ9R`U;;:gwe%+]W.%0NLw,.>MgX.?QBF@t<E;#59TNba[e_(3:wXPw=mh(/mpJ@umqI#0/ZT-Zj,L$ZZm@3.=&)##L8T.#25cmV1-c.?5gj#'VMNh7TRM5-IxO6YxP(>?sHt)-xOkH;?hh#@[xA/95BlBG9Kx/r,76&lkL-0Iw3DCoTe>0t+rJ-w7XS4)SN>c>pe:/Nc4b(/+`K##qUr$uTE^6:DAhA#gca-=0(P#A8+^I#^Y@9X/Co3dogI%4rZn,x.vF#')Dc+]a3EmufM>8=_qQBGW=*+I<7XbbIv[GdUbK%X.vfB3]]A+ABFd++llJ/%Ii(@;KYmH'&)C+_IF<#(xfA0L-FoH_[dY:9PO>.[4FvHj.mr1q/atH]<gABjCOAGD-$$QGkv5I?_(&qBLe;H<af+W)XJ92RdoP/2IZO#&?/8###$2^O5k&;NPnc:9Q%m)T0[)[`4jI1O_nm6d3-OH^A`s<fhnD#c5[t-w7cZ6s&,c8Uj1RHJL,gH;6(sYe[TW6G5J+Aw5%-6d3-RY^L`Y#)3^8#vxL$Hxvjv0n,k;6_Mpu-G`-mmrXf8-]+DZSr2$N;7vtE15m6oHZ_f;'20_..uCr'#%:0#1ruiw07,M+2ZbGN2im,DP$N54?VKG)+h&XqG_`^o6cul.%XxNq`lfQD-wKg`#&vGa-;5rK@rYkk3fjY-/AWe.#&?#g##.+=5bRU:._2'K*dO3T$tbFN%lS?iC,6EU%8=n,/:BC.1OUhN/:p[T#,F/AF,>$T#/aBbI#1L`Ha`Ck2hwaR;==O#5vx'3Hxt/t0p:&H`$5(4;0=G:0n>_WCQxnN5)'MMDM:-AB8LdHCQhT%6^S%P)NNno%Hnf?2heus$6G@:6VV3j0?JX5-]%.^IDQ%GqRP'8El>j,+5At'6^NS?1rwV'SqYr:HG,AVDOI/;HQaK;5(bWS8^>+jGq5(K35Hip87il:1s+%5G.cr2$R.058PDU42iG@$<i3ZTI'%Gf5urYi=G`CV06el.#1aq'H+WiU#IRHUENMxl7X^ZB4#m)$[8K8cC5Hv'l?M7m#Anbw(8,WmDSC&:-BZ@S-?LJ2$=P-*o9eNSJ^X.&0pbXh>e%quI>O:p<d0tT2/`oi#D=1&Qj@pG,YXDY-wTsh1;H&vsCwqO`[?dv#$k9W##'hQ$vv>Ok.e0<'a^B%0:%K9G]I>.4FeT>#2-hu1JAqO0AZ`5TpBW-6)nA53IY7F#$t#r##x&q(:Wf,*/DCP-ErFstDC*GioKjK57[cD$/nXm/95jcBSfQ*N,0Z`&PX(dG+b,.06^.92Ms/O-[9bnic7k89Xe1/62(@`_R#<W#*(L&5,ki3(46Sg(VXBb4FSaEYuv.W.Sh^&]qc45ZWJ?:Gi)f43-'XV]'c>]aD4U=#&=3H9M?;:9M>Ix,2=Ti6cY_MBs?(D#[MCZ#(/M[6bK%)-vLb3.'v-aJS[vGD,Co'3UK1l6^#heN1sc+H]ma=#+e;m163mN#+RB7H^':s##V_6#*D^(HwPecHZr2tTU>r;##%rn2p7.v+xrvU#-;nmBYSZ5(/,n+9Kl.iH[.vf$'7T+/AjQ58=(nN7B6pl5anLB4]QEX4%pYfGF`*gHZr3UB1w5I4-s+XOA%@T17*`w)40/'Ljo-h6YwwaK2F(*NnIkUISmQG$<77W7'NRu-@R[[5>J]U7CbbrH`_b_Iu.[<6c.Vx4+)Z,#3x*M:J>cm3N4O:-vLot(PDcp-A42ep5H:>%9*AGiVDuZ/;Yt:3/&r[%UDEdB257k#Og9A7Q:_#3.6OA2h%0u??6b20i;AJ$tY74&qxN;D0^m6EsY^hI_t:w7ok=p0n,Rk$<&$M$<nM706i<bJnJF^=Vj<86*UE?3e$vx#g-[JJ4qN9HZ'Dk+ABod&dE'*ENLRNt@WJZ&<')l/u#bA(s$J`(7cl;#O<>Z8[0`//we0noR$0u1fbk2.*4$2#(8iM7?RXe5_EE:7SIdpBQPMU=dEio#;HQxuwS$fDG(_X)7+qL=,B>[6*7uJ#b,4MIBl88##+IH#P0LKB=a#5Et)YOhl#Sa/lh9f$W[72t[jZuMGGW0N3HgY:9QbRBsP_9Bt9c7mr]bZ3I'93C99%[BQw1`;g<8n50+;4R:w5Xka)EIBS-Y<I'U_bq/<g214`<;4+Ag@5'SsC14`383N5*5L)hRt%ULw]$E]6Z6].>@@36'&RBf?WB64/O$G0cx15.KL6b0wL/?jQ<1O(_9'2/uOMJt,d@l$oZ/wJd<3Hg>R0oD?=I'QuvBQ?&@0q5wv.upfnhH5Uk3.EENBQnww06&f,4c,PIC98b$L3PG33g-#6B@l5Y;Qa70BsX=SB.>U]BpCVI8VSXuBbP)oBQb2U(76W)3fg&tRBU1WCrbj.8d8XI/wJdMM@=U?7@.J;6b0waH*7HV-[8=4qIu68/TN2@#(J`KB5?I@Bw*xn&5<15#H2't6@kMs#Rj5;06pF76*OeE6^s3x)5;3r#6u9VH*=c`B<+1xBSTs$$s)Dr&#sjK;)QHxF]qGx07%?RDondmCNY&k"));
e.params||(e.params=e);e.vars&&(e.params.vars=e.vars);embedhtml5(e.params,"krp:p/x;.5nlM>xgSXfsM.JeNJ{l40u3{ByzW;c&w'|>u*F0fn,;j7K^R?#Vz]I#Y9&6qAHj{uZqr@rB{E+I/3`t5f(vK7#[-5`#$ggYyAw5Mv,+!w`-cnS^@Zq7qnHp(WO`fBUvqM>eQ]$ hH%B7F7EyThSbyW+m2p;p@Ih`fY6K`16^n3dp<g,G-|gLY/)lpL+xrq6OdMD4}:37AWb7k5y-kAGt2Z>_?s>,^M-2C}UWeQ)@BvccrLMLl4mJK'oI1)]0WYHm{g<#Dt7`*AHj$n]cHz&:[oeLJlhp}foK,8l&PTy5OMf9S|#i+$ik4.;M1z8. %:sw_9BU=v1l<UE:G/O{%8<O2>y`]iMfl8HlS*0fgE2:%^=!HGQQpbqOidx.m#[*o;3yc/i/`ulr3x%J+y>O.U0e6H9d?N;6,iZDC/;Ouf5^QNy5bd^&B<JXv^5&@>3E!@KI'^QOR,x~v5+EY[5.En<3fM/@km$v)Jqy?Dk11?]/:t||^ LKlB>Dt$xnod>gXB4%Q.oN_Fx7[pTD>70Pj:clF<g%LkkBs'N?)dDF7v@.yPI$=:%>_T8<RR `YLHx@!5EU'Y/'b,GmmF9XZCMAS+[3t*<q5^<IEo2Pt>b^I.h4~Yy%/zt1F^O6YNBvl$%7zqwzn<K=KEO1vuDLLvWl%7DK:DBYSd(_:3vM<J(N_bGnY%7!/z83dqK8uc<=5t'z!#fESv~lO2Z~)uaQsi579bV4tgG*D.3G2a;X1i{?pCrD]7ZAZcTd wEzt'Bk?B[|KM6aG'a7H8n aLoau49go-A)vb|sV)+7=N7s;;8oEz:=):uYKlY8&Xsy~)iwT-=%h>BVCz)}]e?e4r)5eoUK]FV[HzbM;4{Q?{uOL'wRfg,Uhg2de^UhIH`-*jAo$JwS_FfG1^'Iex=j$%QO}YUK_?1F^NCM{%)pIq~~h}&A,5+*@hOKY%oEJT;/sIWS$%rB`SH2_-vr%D=wrPP31ZRDPV97}d|$wD PnFYo:6kij}zXhYBZ4+y{sjRh%gm>V[8yOl5^GL,oJ>[DyWn]D]>?p5rD=M|,it5~:%Tpfp(;ZWTOr|~0>^BEAef ozCMpS90n}MICiuQ+kIs3t.<M%'2#*3Ydp#pR8sFQ*-uchKayW(U}iE'Pe{{FO &|].U1%6EfKd}7e qqs(0ueB!Bo$fOf^=?lUo}]WGu]Cj[.#TxyL1 %.yD,%(SC,a3xzrP]2 gj}^eBcnUZo4Jqb-]Yy$zc3KfEo9oWyp(ZrchRksL6AC5TMq{bPgm(&zElf|?(J$q.A(nT3?:}TK_7*hU<VO#7+&~ . x0VPqNQ.GgFnDF3+/HY%);~m}Oua6l][{.:>*IbRk'Ym4?&(Sb#iE~O:<{g*H>nMZ>|ve</+{;},E5yy#6yue@k.g'_%^h}4aQu%fGpiPCwji=WHUvq1=LW]+l=XV7U<6~`a|J%dDN'[o>g6*.r?RE:'aM:R`+?jmKa>ZRHnU_g7Mp%g,0mljRJfq][{ZA)D}ZdP5}-OQBR(]QY;i[BnLcXzOJe8$&EX%~*sag0gWU MJ>m._LmF/B*z*I_RM;'<ACpMKY:-_gQ.l7@<XhY}!p)M@8/@ytXBYGxHVioP4<1EDzsxx@iK8?j7W;,=j'QR:-M0hD ZA[6K>T [Ha!qgB3^Gy'^]~a')<1dp69NX>ly`qx<bz%6C#qzmq,9Z25.wTR]l&-0]-MA:<C)iUlJD^wP@5,3]BH~:QyRt&S4}`7@bW-Lzjg[Ys$cyP=HMMF;:uc;U1D}]56?xvxtsq8_MZpYw!>6oPVn,N2N$joX96&y7EsUXyu+gV)#*L7zq4x]Qps@Sk~YPQU9b|*,+mSH]G}7z}<dM;|'~8(-]Wqv]H4A7/7L] UR0Hn(+e~9(IK{ObD~iZ_$^D;:-|dd(8vL?-bKB[aI NS1DL8>yNF2?a~DcW8bN~RrX|H<n8QSBUyZ`sy|=cgaWBJy^pKxwUC5Q*#zkE%UVTuU%c3Qgy|cxMF]l4qNSUY%8p*m(1yKEn|zb<o::(JZq5iX?~j?cA/UG7-!$TOyl,;Nc}P*qI%o}p](Eo68rwUis.L{}3M&ep;9ax.7K)3(L.0d.q4i?K4[i[G= : !SIKIkNN/IUAe;<4Vl9{v3N$HY-)O/n` NW#Dh BJ@vT}$h3go A={_nPsn2>@8]>CB4Xaq{(IqE:V`7Q&qX94$v>_0tZ$`RZmO93n.S&#dL%Zms4pd+PNWP=`iso:1F-cZ1!97%[{X:2|Z6D,y;&y6Id2J>yVv2-^&&,]w4$G]XE5aW9?|/D]He!{r>lxP28K$'|v9%I63_A4xgta1 Az5^!)->AM!0p-n%_o=,MJMx8-1*#!`T1MSyI-?j,iyT-!We#?z%-YlbM GAMyw!/SZB6[|1-BD4={|B,6E2z.E9^pxagh)<(n42JL}_yU|oEl*L}+m%.>[A ZnJtC%ma+^fkAc_0MvRj,1Vokl+qE&cqCw`7iW_V!=+7b$/$oD A,0fryVew)Rjw,nXUaR|D0/,0H*sY;p*bt?osoRj)PX{mwEiKI.So.ZhE>4|O&Q{{3h|qt%f!MzD}/Or[%kQBpsgfRk6tF[[zz>0FAQbETj&& ^S|ShcsWEor9KnXn-ht'eyN})~GQ|n(xh~zpt(_]V#zZa:du(.Td5fx(CoLkWl[M]be(&tR}4:y+XwYrZrEC#M-Vg%M{{ROu|Z*M 6P8~q5of0n{ij|(2#>3m2])`ol9OIC5]|@HT+yD,$oL'uL_7x7L},Z(7uzBj)|U-_i62M{s)t{irG31.2R%'K'TI+ $3Z+*ceKJ:kbFIxPQe6W5rT@eM~Bo?DX.g=.ER:%1:Of%bT +>rgUxW/`q57rn!WA?LWc+xn=$H E(gu'vW4i?lEzVe@QMmvb${w'j[b9QOdq17} l6=3!WsY#j_Rf&G.RR%pA:i&@imJJ4vu=cN2X7A%R'r289S#x#dU'^HTA>I!:}?R>}=.5C_]q79b]<erOY9CiBFi2|:qe7ITcRZ)9yc/H|AQVj}MeIez=NL%g@{~4=Zo7k8:H`Rca<ol#lW8EJMzuX{9TT[|SXE$6uF5qx<])}R>k+?%OD)/j DM;N)`KyRY`:uqvJgUTH5+ O5 6dMM:-%`azv43?@3?dz?M-8/JiYsC$h0+&m%oW2QiXIiUk`n4Bf%jL.B{#[6c[I1T55u4,J|ZUKb#gwx!R+_.-rec)GTUEh+:bG1)t}^eOn{z@WU0U! m;HV]UBCn#su:S(KkeA|xT8+Ey2D{fM?w^.Ie.[|M>S0E_r[|osL%;<;S.)P'Skmr!YQcoc@a ,{H~**sMIdvFq[5A.,M9P,*^$-m20Voq/p'qsM5}#W;I(zGbQp6n,Jc`cNTV)_NZoq?6YHzf/wzGsw2^u=4txb:X^/xt0Br o,Z`g?Ggq|Gc3bg!87uqqwkP/$Hw9V2t1^B*`@(1T*2rX:W%qq.9-a.2O?Z^K=$4jPBN[F=Fgs^v$N];#e,qzUg_KHWv8)[d[_AnlB&sE$2NDzVke7M{Lewn'9lBIFHrOaFWnx'm:A/,%>F!)(-97e2S`RT[:b{4Rl!>LV#w:o(YS{3T/<$=ul0mWxj+d^^_JD{Rw*8S,EOJ`r7c:91{s>&*cz1r2D<(oIh_gyP.&DjZ*EUdaBnc^kws%g;&f:;LvQ-+[/sw3IU y9XG4BMKgv=yNcDf/.^}mY;z4]v_1Nl]jY-f9_-UrBtC;H9!E<pLl$xnpYUddQ2PX~528iU,vN;>gSbLOUQ't Y(sYX$@TXfQ%bHmOW}5eZ#MxN{r}MtS^@KYA4z/dgd#tRx[F1^0VHY>@>Im[y;wH'w`UW^dj.jNzFIngvNEwlYo0s^5@Yotc$q> `1C#3[X@=md/=3x]u8IW|i80&~/g{3jB}yGwz0C*JFhealzu=Lf|o<Cn>2SmiQMYlGxE wiT0Y#4d%id'p+&V|]_7z86S/0C%Y%N+@2id4K%(v}!uYQ0xl8KO'or;~z#KO-uyAMX:yQ3.A)R=@OB>XPq@sX`a7nHD.S)7uLN&'L'&78R(a`,!s1u*JU}'0dW{t|&s`bY?S-_nq^S4x6Bj`(yGg3!|i/-^lpAE$ZL9*=< A7*=O).KS/Jw=b'f0$0km:;bb+]|mXy:Qyp0Ows*YGSGpE`?hv0$c!^?@5;Lp@5F=+?c~ B&rQ:m;o@8I*z.9v,8:_&lz:^3I6l'k@|1]obD%d> 9fo`%m(gSH[1Rk@wcQ2u@3qj(-. ]y~5`*^wNUrXxM- ~&p_0RKC~#2@*o6@tGu#,+dy7fMaWZP.EQIQ%2Q:PpFJkMg6a^Y=;N^26Xi^{'S } VeuWv{jxJ`#mKT.stv,7/bS;uDuwAHlv(Td_Gr6y4}E6bW[DC,.*n.ZhLLC6KtO@j+=tWg)r;[ Op[eCe,ZPhrdW`d+S{ydVYF23g BN;=`QL8BQ(9~yhL2fE3w=R`B;o3dX>Oi%9KCBIDw3/qNyZ3)tO g[x[M=3'Q~NQ)^hkivOh<499hfa} %]Lr=Ej<[*aI^PUJQ3W-=R]98NJTEC)Qg=[p30g%P (_iX/'m(J?$Qfh53Q;;4&jMlI!r)6h*Xt|%noh6p9*)W1pNEzTRW*J@Q^ubeetGuf,J4E&dGu!S6-RX*;wV H<D>FU;|K%=^S~:kW({bDwFSrt#y_}l'4ZaI!JCQFAl];r-ytCC'>UCG;-uk^ww~'i;~mPw/<@A.InH*R*I7ny$<(%DvS(Kq/t7rDIB&M+An[qd4QjT3%r6/Cb)49kMmF>(djVgxk`Y{;+Ss6m'-}9uuIllQ[gC*k+-d`X,,)FqkQa)b+f@i2kA8&ZM5#Dlwp9:%}~A!vtjh52y;F2y(U5<q1K>@c3tz]a'M:rw%u`pY*pLu7Ss+{ZFaQR%c7=NI5a+XBN_?esJx -#8vf$E]!QUoPw`G8yP2MwAeLX7[?D72-|#ys~H=be~}@2U3-LaWsN`(A&hF@JY6AT$G/]~8Zy6/&ei2;uDQBf5Ls0P&wOG8S:,mJOp4cS%rtn@QXQld:V*jH0u-{Lj7lS_~`n^BY^H~]46W4,Zp7h=PtY/DRdcWSUk(:Z6=6XU!,=e7nue].+N.TiJYqK5/YjE8q,C>2kN;JjzjuD)z jxn7HOP{h@@ ;U 1F~evTWf8>W(9cpb7KNoU0J~fg^a'e>#q&`YZS@s,gp4B:xd%TQ'K$+Gz(C^q2DSj_#BI}&Qx)vhXO8qFl9:qs~,+mPW^ydjPP4)PB /f[Kt &W9x2/frlWIsj`oOA}'HVj>lF_ )_,Oy&Cn ab)]b9mNqh-JqZ/bvot9<<4Y>Y<9gy]T9]X`W-Z;Ze<r=6oJsd>G^Du=!!Zc0>tf*M!Tq:#z0n?Bg[7&P|=Q:d7o?$rr-&%>s=jmu=dKZyQT.q4}/}FaZUU]7&TLV1J0`+HtPOH0{ouI;I RXchPl'*ILh6cpW)9/CPIle|I<M#;Pnk(~yWjZ-)^B#a9ET('`?>v$X>c'T3s!|hR+Y5D8OZ/P;0cF=&%tNu@EI}c@(pnk>EsAp(qd^3EoEl_;cgdu[w}FT/]Ea63q%H-B)*#f:*R}4]0WSq'ifvBU~R>!/TDf]Y+`|%3wI'K=R-eCu CqAr06<+<5.C/K1FgVENuB-F@d?y`Cre$D)+sTvJ+|bctNf}@2[FI#}pDz]f!3-U?SKPJQt9x^ExJX }FJ8T:$(n'WLi{@>4!%XhHF-LjO.G!6z'.Yd+NffUut[0t<hT1Fk+Nv-'@iY7*Ka(Y{U4cwDV# 9._'O~)QJx?aqDkR^1tdP>n:e BN@j0{B.3gTP9Y>:*r1 JNB.4frhz_YR;PAZU~V/2{&dXE#Kp}x[h^+LGPkhq3=`%1|/LPcZZntwd7:#=]L+yP|iwU9lAFLtde(im~HGa?ij@tKz4:H_zzygD(o9Rv['jbxk?9(lC&`c9D+?][L7l1Hi_FBG4b58frfF4~lP(d]&NFN$q;`YFW'4G{5>5oI6Q%3XbzLX`cC5U1E>Wl-PKB^lnUg?uPxS.@!-AlI[An+i1RxJ? 20U<_L9|ckcVg.*%0EF}{?ZU#nA?vexaF:Qp__!kEP9m_m!kN(?>N&#I^PfCRU|0q8Dvy/>+saV-ix#0st^r5&/h^S9f!J{k)hm77#VR~#,j0a'yL?ZV$+3'5/A-1z/{1XS%d8!`iA2$K9iZ`YOS^E=]eI9<tDeF_N@wvX]U1C>_bb'?r(G.LT1fPD?Q|CW?$WOeXv)`iq1UK<Vv*yrW3|=C02^~mvfvt]`H^E*`tik]dCBcoD+I9q3-|LQUGlji'A{e~uV+zMY}~a;'>@?;2xudu:8-51z:i+ktm>SsN35;Sa{nyZIs ;Tp*8,rd@V1M8,%gk|#h9k1C_[Kvq8>d7^0GVUj]FF6F'EgMM(TEPRB/F9TODZ65Q,b[#{b~O!v.ZR:PG%6'bY@1bA|*$n4l~7P6b~2J-;?2}YWrK`'SA:%-svTT[Xf-w5NnZDdeb`WczV$#L9AvOoGuNzSeO2o/e +ufOh~VCJaWT2>oz2G^Dy76?/)qyE0$X_33e9^BWj8`V)I:m(2+IGV~'mgn,Y;#W:+n}5]<`h861A1pk2$[XhH.g+3N?<oX|}KJRunk9R,92]/JG(n*e}c:P)!c_Lq~E(YhgPF9;5fZ:..-u@{}311rTo9kP$d#I6OFCE*k[u+QRP&#@1`q=OH")}
;

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/Interior360/js/Interior360.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./src/main/webapp/components/Interior360/js/Interior360.js":
/*!******************************************************************!*\
  !*** ./src/main/webapp/components/Interior360/js/Interior360.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _aria = __webpack_require__(/*! ../../../resources/dev/js/utils/aria */ "./src/main/webapp/resources/dev/js/utils/aria.js");

var _index = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");

var _browserDetection = __webpack_require__(/*! ../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");

/* global jQuery, console, site, embedpano, removepano */

var panoId = 0;

(function ($, window) {
  var Interior360 = {
    krpanoURL: '/etc.clientlibs/jlr/clientlibs/',
    pano: null,
    panoID: null,
    buttonClass: 'button-secondary',
    firstFocusableControl: null,
    deviceControls: null,
    userActivated: false,
    _windowWidth: null,
    _windowHeight: null,
    grabPadding: 80,
    gyroEnabled: false,
    _hasLoaded: false,
    keyboardLimiter: false,
    uiSelectors: {
      interior: '.Interior360__panorama',
      initContainer: '.Interior360__panorama-init-container',
      galleryButton: '.Interior360__pano-gallery-alternative-link',
      zoomControls: '.Interior360__zoom-controls',
      zoomInButton: '.Interior360__zoom-in',
      zoomOutButton: '.Interior360__zoom-out',
      gyroButton: '.Interior360__accelerometer-control',
      resetButton: '.Interior360__reset-control',
      desktopInstructions: '.Interior360__panorama-init-container--desktop',
      touchInstructions: '.Interior360__panorama-init-container--mobile',
      headerBox: '.headerBox'
    },
    _uniqId: null,
    _panoId: null,

    init: function init() {
      var _this = this;

      this.panoID = 'krpanoSWFObject-' + this.$element.attr('id');
      this._tabbedContainer = this.$element.parents('.TabbedContainer').not('[data-total="1"]');
      this._isInsideTabbedContainer = this._tabbedContainer.length;
      this._hasHeaderBox = !!this.ui('headerBox').length;

      this._uniqId = Math.floor(Math.random() * 100);

      this.deviceControls = this.ui('zoomControls');

      if ((0, _browserDetection.isMobileDevice)() && (0, _browserDetection.isBreakpointSmall)() && !(0, _browserDetection.isIe11)()) {
        this.buttonClass = 'button-tertiary';
      }

      if ((0, _browserDetection.isMobileDevice)() && !(0, _browserDetection.isIe11)()) {
        this.deviceControls = this.ui('gyroButton');
      }

      this._determineFirstFocusableControl();
      this._togglebuttonStyling();
      this._calculateHeight();

      $(window).on('resize.interior-' + this._uniqId, function () {
        clearTimeout(_this.resizeTimeout);
        _this.resizeTimeout = setTimeout(function () {
          _this._calculateHeight();

          if (_this.$element.find('Interior360__panorama-load-container').length) {
            if (_this.userActivated === true) {
              _this.$element.find('Interior360__panorama-load-container').remove();
              _this._initToggleWrapper();
            }
          }

          if ((0, _browserDetection.isBreakpointSmall)() && !_this.$element.find('Interior360__panorama-load-container').length) {
            setTimeout(function () {
              _this._setFullscreen();
            }, 600);
          }

          if (_this._isInsideTabbedContainer) {
            _this.$element.parents('.TabbedContainer').TabbedContainer('adjustTabbedContainerHeight');
          }
        }, 250);
      });

      $(window).on('closeNotificationBar', function () {
        setTimeout(function () {
          _this._calculateHeight(true);
        }, 100);
      });
      this._initPanoSetup();
      // if (!window.krpanoJS) {
      //   (0, _index.getCachedScript)(this.krpanoURL + 'krpano-1.18.2.js').done(function () {
      //     _this._initPanoSetup();
      //   });
      // } else {
      //   this._initPanoSetup();
      // }
    },
    _togglebuttonStyling: function _togglebuttonStyling() {
      this.ui('galleryButton').removeClass('button-secondary button-tertiary').addClass(this.buttonClass);
    },
    _initPanoSetup: function _initPanoSetup() {
      this._initPanoViewer();
      this._initToggleWrapper();
      this._initControls();
      this._calculateHeight();
      this._setupGoAnimation();
      this._addA11yEvents();
    },
    _determineFirstFocusableControl: function _determineFirstFocusableControl() {
      if (this.ui('galleryButton').length > 0) {
        this.firstFocusableControl = this.ui('galleryButton');
        return;
      }

      if ((0, _browserDetection.isMobileDevice)() && !(0, _browserDetection.isIe11)()) {
        this.firstFocusableControl = this.ui('resetButton');
      } else {
        this.firstFocusableControl = this.ui('zoomOutButton');
      }
    },
    _addA11yEvents: function _addA11yEvents() {
      var _this2 = this;

      this.pano.addEventListener('keydown', function (event) {
        if (_this2.keyboardLimiter === false) {
          if (event.keyCode === _aria.KeyCode.LEFT || event.keyCode === _aria.KeyCode.RIGHT || event.keyCode === _aria.KeyCode.UP || event.keyCode === _aria.KeyCode.DOWN) {
            _this2._startDraggingPano();
            _this2.keyboardLimiter = true;
          }
        }

        if (event.keyCode === _aria.KeyCode.TAB && !event.shiftKey) {
          event.preventDefault();
          _this2.firstFocusableControl.focus();
        }
      });

      this.pano.addEventListener('keyup', function () {
        _this2._stopDraggingPano();
        _this2.keyboardLimiter = false;
      });

      this.firstFocusableControl.on('keydown', function (event) {
        if (event.keyCode === _aria.KeyCode.TAB && event.shiftKey) {
          event.preventDefault();
          _this2._activateFocusOnKrpanoElement();
        }
      });
    },
    _setupGoAnimation: function _setupGoAnimation() {
      var _this3 = this;

      var dirs = ['up', 'right', 'down', 'left'];
      var i = 0;
      var lastClass = null;

      var go = function go() {
        _this3.$element.find('.Interior360__load-button').removeClass(lastClass);
        _this3.$element.find('.Interior360__load-button').addClass(dirs[i]);

        lastClass = dirs[i];
        i += 1;

        if (i >= dirs.length) {
          i = 0;
          _this3._animationTimeout = setTimeout(go.bind(_this3), 3000);
        } else {
          _this3._animationTimeout = setTimeout(go.bind(_this3), 1000);
        }
      };

      this._animationTimeout = setTimeout(go.bind(this), 1000);
    },
    _calculateHeight: function _calculateHeight(force) {
      var _this4 = this;

      var utilityHeight = (0, _index.getStickyNavHeight)(this.$element.offset().top);
      var currentHeight = $(window).height();
      var currentWidth = $(window).width();

      // if inside tabbed container, remove height of tabs offset at mobile/tablet
      var notDesktop = (0, _browserDetection.isBreakpointMedium)() || (0, _browserDetection.isBreakpointSmall)();
      if (notDesktop && this._isInsideTabbedContainer) {
        var tabOffset = parseFloat(this._tabbedContainer.css('margin-top'));
        currentHeight -= tabOffset;
      }

      if (!site.stickyNavigationEnabled) {
        utilityHeight = $('#header').height();
      }

      if (!(this._windowWidth === currentWidth && (0, _browserDetection.isMobileDevice)() && !(0, _browserDetection.isIe11)()) || force) {
        var pano360Height = currentHeight - utilityHeight;

        if ((0, _browserDetection.isBreakpointSmall)()) {
          pano360Height = Math.floor(9 / (16 / $(window).width()));
        }

        if (this._isInsideTabbedContainer) {
          var height = pano360Height;

          if ((0, _browserDetection.isBreakpointSmall)() && this._hasHeaderBox) {
            height = '';
          }
          this.$element.height(height);
        }

        this.$element.find('.Interior360__panorama-holder').height(pano360Height);

        if ((0, _browserDetection.isBreakpointSmall)()) {
          this.$element.find('.Interior360__panorama').css('opacity', 0);
        } else {
          this.$element.find('.Interior360__panorama').height(pano360Height);
        }

        this._centerHeaderBox();

        if ((0, _browserDetection.isBreakpointSmall)()) {
          setTimeout(function () {
            _this4.$element.find('.Interior360__panorama').height(pano360Height).css('opacity', 1);
          }, 600);
        }
        this._windowWidth = currentWidth;
        this._windowHeight = currentHeight;
      }
    },
    _setFullscreen: function _setFullscreen() {
      var _this5 = this;

      var utilityHeight = (0, _index.getStickyNavHeight)(this.$element.offset().top);
      var currentHeight = $(window).height();

      if (!site.stickyNavigationEnabled) {
        utilityHeight = $('#header').height();
      }

      var pano360Height = currentHeight - utilityHeight;

      if (this._isInsideTabbedContainer && (0, _browserDetection.isBreakpointSmall)()) {
        this.$element.height(pano360Height);
        this.$element.parents('.TabbedContainer').TabbedContainer('adjustNavPosition', pano360Height);
      }

      if ((0, _browserDetection.isBreakpointSmall)()) {
        this.$element.find('.Interior360__panorama').css('opacity', 0);
      } else {
        this.$element.find('.Interior360__panorama').height(pano360Height);
      }

      this.$element.find('.Interior360__panorama-holder').height(pano360Height);
      this._hideHeaderBox();

      if ((0, _browserDetection.isBreakpointSmall)()) {
        setTimeout(function () {
          _this5.$element.find('.Interior360__panorama').height(pano360Height);
          _this5.$element.find('.Interior360__panorama').css('opacity', 1);
        }, 550);
      }
    },
    _activateFocusOnKrpanoElement: function _activateFocusOnKrpanoElement() {
      // Give the pano focus, for a11y keyboard interactions
      document.getElementById(this.panoID).focus();
      window.activekrpanowindow = this.panoID; // eslint-disable-line no-param-reassign
    },
    _initToggleWrapper: function _initToggleWrapper() {
      var _this6 = this;

      // Overlay the component and show the 'start' button
      // position: this.$element.data('loadposition')

      var caption = (0, _browserDetection.isMobileDevice)() && !(0, _browserDetection.isIe11)() && !!this.ui('touchInstructions').length ? this.ui('touchInstructions').text() : this.ui('desktopInstructions').text();

      var loadButton = $('<button>', {
        class: 'Interior360__load-button'
      }).append('\n        <span class="Interior360__init-container">\n          <span class="Interior360__init-container-caption">' + caption + '</span>\n          <div class="Interior360__init-container-icon">\n            <div class="Interior360__icon Interior360__icon--up"></div>\n            <div class="Interior360__icon Interior360__icon--left"></div>\n            <div class="Interior360__icon Interior360__icon--right"></div>\n            <div class="Interior360__icon Interior360__icon--down"></div>\n          </div>\n        </span>\n      ');

      var left = '';
      if (this._hasHeaderBox && !(0, _browserDetection.isBreakpointSmall)() && !(0, _browserDetection.isBreakpointMedium)() && $(window).width() <= 1400) {
        left = this.ui('headerBox').offset().left + this.ui('headerBox').width() - this.$element.offset().left + (this.$element.width() - (this.ui('headerBox').offset().left + this.ui('headerBox').width() - this.$element.offset().left)) / 2;
      }

      loadButton.find('.Interior360__init-container').css({
        left: left
      });

      loadButton.on('click', function (event) {
        event.preventDefault();

        // Remove the overlay
        var elementHeight = _this6.$element.outerHeight();

        $('.Interior360__panorama-load-container').remove();

        _this6._activateFocusOnKrpanoElement();

        if ((0, _browserDetection.isBreakpointSmall)()) {
          _this6._setFullscreen();
        } else {
          _this6.$element.css('height', elementHeight);
          _this6._hideHeaderBox();
          _this6._stopDraggingPano();
        }

        _this6.buttonClass = 'button-secondary';
        _this6._togglebuttonStyling();

        // activate user controls
        _this6._krpanoControlsEnabled();
      });
      this.userActivated = true;

      this._activeToggle = (0, _browserDetection.isBreakpointSmall)() ? this.ui('interior') : this.$element;

      if (this.$element.find('Interior360__panorama-load-container').length > 0) {
        this.$element.find('Interior360__panorama-load-container').html('');
      } else {
        this._activeToggle.append('<div class="Interior360__panorama-load-container"></div>');
        $('.Interior360__panorama-load-container').append(loadButton);
      }
    },
    _initPanoViewer: function _initPanoViewer() {
      var _this7 = this;

      // variables
      var settings = {};
      var componentData = this.$element.data();
      var imageURL = componentData.panoimageurl;

      // field of view settings
      settings['view.hlookat'] = componentData.panoviewhlookat;
      settings['view.vlookat'] = componentData.panoviewvlookat;
      settings['view.maxpixelzoom'] = componentData.panoviewmaxpixelzoom;
      settings['view.limitview'] = componentData.panoviewlimitview;
      settings['view.fovmin'] = componentData.panoviewfovmin;
      settings['view.fovmax'] = componentData.panoviewfovmax;
      settings['view.fov'] = componentData.panoviewfov;
      settings['view.fovtype'] = 'MFOV';

      // control settings
      settings['control.fovspeed'] = componentData.panocontrolfovspeed;
      settings['control.fovfriction'] = componentData.panocontrolfovfriction;
      settings['control.touchfriction'] = componentData.panocontroltouchfriction;
      settings['control.touchzoom'] = componentData.panocontroltouchzoom;
      // settings['control.usercontrol'] = 'off';

      // auto rotate
      settings['autorotate.enabled'] = componentData.panoautorotateenabled;
      settings['autorotate.waittime'] = componentData.panoautorotatewaittime;
      settings['autorotate.speed'] = componentData.panoautorotatespeed;

      // preview image location
      settings['preview.url'] = imageURL + 'preview.jpg';

      // 3d object type for image wrap
      settings['image.type'] = 'CUBE';

      // multi resolution for zoom levels
      settings['image.multires'] = 'true';
      settings['image.tilesize'] = 512;

      /*
        * resolution max zoom
        *
        * LRA-23946: Changed the sizes to use the data atrribute as the image
        * size has changed in the latest iterations of the krpano software
        * The sizes are: 3200 (new) 3184 (old).
      */
      settings["image.level['0'].tiledimagewidth"] = componentData.maxzoomsize;
      settings["image.level['0'].tiledimageheight"] = componentData.maxzoomsize;
      settings["image.level['0'].cube.url"] = imageURL + 'mres_%sl3_%v_l3_%s_%v_%h.jpg';

      // resolution middle zoom
      settings["image.level['1'].tiledimagewidth"] = 1536;
      settings["image.level['1'].tiledimageheight"] = 1536;
      settings["image.level['1'].cube.url"] = imageURL + 'mres_%sl2_%v_l2_%s_%v_%h.jpg';

      // resolution min zoom
      settings["image.level['2'].tiledimagewidth"] = 768;
      settings["image.level['2'].tiledimageheight"] = 768;
      settings["image.level['2'].cube.url"] = imageURL + 'mres_%sl1_%v_l1_%s_%v_%h.jpg';

      // resolition - mobile images
      settings['mobile.cube.url'] = imageURL + 'mobile_%s.jpg';

      if ((0, _browserDetection.isMobileDevice)() && !(0, _browserDetection.isIe11)()) {
        // gyro plugin
        settings['plugin[gyro].name'] = 'gyro';
        settings['plugin[gyro].devices'] = 'html5';
        settings['plugin[gyro].url'] = this.krpanoURL + 'clientlib-krpano.js';
        settings['plugin[gyro].enabled'] = 'false';
        settings['plugin[gyro].camroll'] = 'false';
        settings['plugin[gyro].friction'] = 0.2;
        settings['plugin[gyro].velastic'] = 0;
      }

      // events
      settings['events.onviewchanged'] = function () {
        _this7._checkZoomButton();
      };
      settings['events.onmousedown'] = function () {
        _this7._startDraggingPano();
      };
      settings['events.onmouseup'] = function () {
        _this7._stopDraggingPano();
      };

      if (this.$element.find('.Interior360__panorama').length === 0) {
        this.$element.find('.Interior360__panorama-holder').prepend('<div class="Interior360__panorama"></div>');
      }

      this.$element.find('.Interior360__panorama')[0].id = 'pano_' + panoId;

      if (this._panoId) {
        removepano(this._panoId);
      }

      // embed the panorama
      embedpano({
        id: this.panoID,
        swf: this.krpanoURL + 'pano.swf',
        xml: this.krpanoURL + 'clientlib-krpano/resources/pano.xml',
        target: 'pano_' + panoId,
        html5: 'prefer',
        consolelog: false,
        mwheel: false,
        passQueryParameters: true,
        onerror: this._krpanoError,
        onready: function onready() {
          _this7._krpanoReady();
        },
        vars: settings,
        wmode: 'opaque'
      });

      this._calculateHeight();

      this._panoId = 'pano_' + panoId;
      panoId += 1;

      // API krpano object
      // Using getElementById stops multiple instances of interior360 from working on one page
      // Switch to getting only child of ui.interior selector and use unwrapped DOM element not the jQuery wrapped version

      this.pano = this.$element.find('.Interior360__panorama').children(':not(.Interior360__panorama-load-container)').get(0);

      if (this.pano && this.pano.set) {
        this.pano.set('control.mousetype', 'drag');
      }

      this._hasLoaded = true;
    },
    _startDraggingPano: function _startDraggingPano() {
      if (!(0, _browserDetection.isBreakpointSmall)()) {
        clearTimeout(this._draggingTimer);
        this._hideHeaderBox();
      }
    },
    _stopDraggingPano: function _stopDraggingPano() {
      var _this8 = this;

      if (!(0, _browserDetection.isBreakpointSmall)()) {
        this._draggingTimer = setTimeout(function () {
          _this8._resetHeaderBox();
        }, 2000);
      }
    },
    _initControls: function _initControls() {
      var _this9 = this;

      // Initate button
      this.ui('gyroButton').on('click tap', function (event) {
        event.preventDefault();
        if (_this9.gyroEnabled) {
          _this9._krpanoGyroDisabled();
          _this9.gyroEnabled = false;
        } else {
          _this9._krpanoGyroEnabled();
          _this9.gyroEnabled = true;
        }
      });

      // Zoom in button (events for desktop only)
      this.ui('zoomInButton').mouseup(function () {
        _this9._krpanoStopZoom();
      }).mousedown(function () {
        _this9._krpanoZoomIn();
      }).click(function () {
        _this9._krpanoZoomIn();
      });

      // Zoom out button (events for desktop only)
      this.ui('zoomOutButton').mouseup(function () {
        _this9._krpanoStopZoom();
      }).mousedown(function () {
        _this9._krpanoZoomOut();
      }).click(function () {
        _this9._krpanoZoomOut();
      });

      // reset button
      this.ui('resetButton').on('click tap', function (event) {
        event.preventDefault();
        _this9._reset();
      });
    },
    _krpanoReady: function _krpanoReady() {
      // Check initial zoom button states
      this._checkZoomButton();
    },
    _krpanoError: function _krpanoError(e) {
      console.log(e); // eslint-disable-line
    },
    _krpanoControlsEnabled: function _krpanoControlsEnabled() {
      if (this.pano) {
        this.pano.set('control.usercontrol', 'all');
      }

      this.deviceControls.show().transition({ opacity: 1, duration: 500 }, 'ease');
      this.ui('resetButton').show().transition({ opacity: 1, duration: 500 }, 'ease');
    },
    _krpanoGyroEnabled: function _krpanoGyroEnabled() {
      this.ui('gyroButton').addClass('gyro-enabled');
      this.ui('gyroButton').attr('aria-label', this.ui('gyroButton').attr('data-aria-label-active'));

      if (this.pano) {
        this.pano.set('plugin[gyro].enabled', 'true');
      }
    },
    _krpanoGyroDisabled: function _krpanoGyroDisabled() {
      this.ui('gyroButton').removeClass('gyro-enabled');
      this.ui('gyroButton').attr('aria-label', this.ui('gyroButton').attr('data-aria-label-inactive'));

      if (this.pano) {
        this.pano.set('plugin[gyro].enabled', 'false');
      }
    },
    _krpanoAutorotateEnabled: function _krpanoAutorotateEnabled() {
      if (this.pano) {
        this.pano.set('autorotate.enabled', 'true');
      }
    },
    _krpanoAutorotateDisabled: function _krpanoAutorotateDisabled() {
      if (this.pano) {
        this.pano.set('autorotate.enabled', 'false');
      }
    },
    _krpanoZoomIn: function _krpanoZoomIn() {
      if (this.pano) {
        this.pano.set('fov_moveforce', '-1');
      }
    },
    _krpanoZoomOut: function _krpanoZoomOut() {
      if (this.pano) {
        this.pano.set('fov_moveforce', '+1');
      }
    },
    _krpanoStopZoom: function _krpanoStopZoom() {
      if (this.pano) {
        this.pano.set('fov_moveforce', 0);
      }
    },
    _checkZoomButton: function _checkZoomButton() {
      if (this.pano) {
        // check zoom in status
        if (this.pano.get('view.fov') === this.pano.get('view.fovmin')) {
          this.ui('zoomInButton').removeClass('enabled');
        } else {
          this.ui('zoomInButton').addClass('enabled');
        }

        // check zoom out status
        if (this.pano.get('view.fov') === this.pano.get('view.fovmax')) {
          this.ui('zoomOutButton').removeClass('enabled');
        } else {
          this.ui('zoomOutButton').addClass('enabled');
        }
      }
    },
    _onEnterViewport: function _onEnterViewport() {
      // TODO: need to track this component for these to be used
      this._activate();
    },
    _onExitViewport: function _onExitViewport() {
      // TODO: need to track this component for these to be used
      this._deactivate();
    },
    _activate: function _activate() {
      if (this.userActivated) {
        if (this.gyroEnabled) {
          this._krpanoGyroEnabled();
        }

        if (this.$element.data('panoautorotateenabled')) {
          this._krpanoAutorotateEnabled();
        }
      }
    },
    _deactivate: function _deactivate() {
      this._krpanoGyroDisabled();
      this._krpanoAutorotateDisabled();
    },
    _reset: function _reset() {
      var _this10 = this;

      // reset krpano plugin
      if (this.pano) {
        this._deactivate();
        this.gyroEnabled = false;
        this.pano.set('view.hlookat', this.$element.data('panoviewhlookat'));
        this.pano.set('view.vlookat', this.$element.data('panoviewvlookat'));
        this.pano.set('view.fov', this.$element.data('panoviewfov'));
      }

      // reset view
      this.userActivated = false;
      clearTimeout(this._draggingTimer);
      this._resetHeaderBox();
      this.$element.removeClass('enabled');

      this.buttonClass = 'button-secondary';
      if ((0, _browserDetection.isMobileDevice)() && (0, _browserDetection.isBreakpointSmall)() && !(0, _browserDetection.isIe11)()) {
        this.buttonClass = 'button-tertiary';
      }
      this._togglebuttonStyling();

      this.deviceControls.transition({ opacity: 0, duration: 100 }, 'ease', function () {
        _this10.deviceControls.hide();
      });

      this.ui('resetButton').transition({ opacity: 0, duration: 100 }, 'ease', function () {
        _this10.ui('resetButton').hide();
      });

      if ((0, _browserDetection.isBreakpointSmall)()) {
        this._calculateHeight(true);
        setTimeout(function () {
          _this10._initToggleWrapper();
        }, 500);
      } else {
        this._initToggleWrapper();
      }
    },
    _centerHeaderBox: function _centerHeaderBox() {
      if (!(0, _browserDetection.isBreakpointSmall)() && this._hasHeaderBox) {
        this.ui('headerBox').width('auto').height('auto').HeaderBox();

        var headerHeight = this.ui('headerBox').height();
        var headerPos = (this.$element.height() - headerHeight) / 2;

        this.ui('headerBox').css({
          top: headerPos
        });
      }
    },
    _hideHeaderBox: function _hideHeaderBox() {
      var _this11 = this;

      if (this._hasHeaderBox) {
        this.ui('headerBox').transition({ opacity: 0 }, 400, 'ease', function () {
          _this11.ui('headerBox').hide();
        });
      }
    },
    _resetHeaderBox: function _resetHeaderBox() {
      if (this._hasHeaderBox) {
        this.ui('headerBox').show();
        this.ui('headerBox').transition({ opacity: 1, duration: 400 }, 'ease');
      }
    },
    _destroy: function _destroy() {
      $(window).off('resize.interior-' + this._uniqId);
      clearTimeout(this._draggingTimer);

      if (this.$element.find('Interior360__panorama-load-container').length > 0) {
        this.$element.find('Interior360__panorama-load-container').remove();
      }

      if (this._isInsideTabbedContainer && (0, _browserDetection.isBreakpointSmall)()) {
        this.$element.parents('.TabbedContainer').TabbedContainer('adjustNavPosition');
      }

      this.deviceControls.hide();
      this.ui('resetButton').hide();
      this.ui('headerBox').css({ opacity: 1 }).show();
      clearTimeout(this._animationTimeout);

      if (this._isInsideTabbedContainer && !this._hasLoaded) {
        if (this._panoId) {
          removepano(this._panoId);
        }
        this._panoId = null;
      }
    }
  };

  jQuery.createComponent('Interior360', Interior360);

  $('.Interior360').each(function (index, element) {
    var comp = $(element);
    if (!comp.parents('.TabbedContainer').length) {
      comp.Interior360();
    }
  });
})(jQuery, window, document);

/***/ }),

/***/ "./src/main/webapp/resources/dev/js/utils/aria.js":
/*!********************************************************!*\
  !*** ./src/main/webapp/resources/dev/js/utils/aria.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var KeyCode = exports.KeyCode = {
  BACKSPACE: 8,
  DELETE: 46,
  DOWN: 40,
  END: 35,
  ESC: 27,
  HOME: 36,
  LEFT: 37,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  RETURN: 13,
  RIGHT: 39,
  SPACE: 32,
  TAB: 9,
  UP: 38
};

/***/ }),

/***/ "./src/main/webapp/resources/dev/js/utils/browserDetection.js":
/*!********************************************************************!*\
  !*** ./src/main/webapp/resources/dev/js/utils/browserDetection.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var breakpoints = exports.breakpoints = {
  small: 740,
  medium: 900,
  wider: 1000,
  current: null
};

var getDeviceOrientation = exports.getDeviceOrientation = function getDeviceOrientation() {
  var $window = $(window);
  return $window.width() > $window.height() ? 'landscape' : 'portrait';
};

var getLargerBreakpoint = function getLargerBreakpoint(width) {
  return width <= breakpoints.medium ? 'medium' : 'large';
};

var getBreakpointSize = exports.getBreakpointSize = function getBreakpointSize() {
  var oldCalc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var width = oldCalc ? $(window).width() : window.innerWidth;
  return width <= breakpoints.small ? 'small' : getLargerBreakpoint(width);
};

var isBreakpointSmall = exports.isBreakpointSmall = function isBreakpointSmall() {
  var oldCalc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return getBreakpointSize(oldCalc) === 'small';
};

var isBreakpointMedium = exports.isBreakpointMedium = function isBreakpointMedium() {
  var oldCalc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return getBreakpointSize(oldCalc) === 'medium';
};

var isMobileDevice = exports.isMobileDevice = function isMobileDevice() {
  return 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch || navigator.msMaxTouchPoints; // eslint-disable-line
};

var isNotMobileDevice = exports.isNotMobileDevice = function isNotMobileDevice() {
  return !isMobileDevice();
};

var isTabletDevice = exports.isTabletDevice = function isTabletDevice() {
  return (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent.toLowerCase())
  );
};

var isIOS = exports.isIOS = function isIOS() {
  return (/(ipad|iphone|ipod)/i.test(navigator.userAgent.toLowerCase())
  );
};

var isNotIOS = exports.isNotIOS = function isNotIOS() {
  return !isIOS();
};

var isWindowsPhone = exports.isWindowsPhone = function isWindowsPhone() {
  return navigator.userAgent.toLowerCase().indexOf('windows phone') !== -1;
};

var getAndroidVersion = exports.getAndroidVersion = function getAndroidVersion() {
  var ua = navigator.userAgent;

  if (ua.indexOf('Android') >= 0) {
    return parseFloat(ua.slice(ua.indexOf('Android') + 8));
  }

  return false;
};

var getBrowserUserAgent = exports.getBrowserUserAgent = function getBrowserUserAgent() {
  var _navigator = navigator,
      userAgent = _navigator.userAgent;

  return userAgent;
};

var detectBrowsers = exports.detectBrowsers = function detectBrowsers() {
  var userAgent = getBrowserUserAgent();
  var browsers = {
    isChrome: userAgent.indexOf('Chrome') > -1,
    isMsEdge: userAgent.indexOf('Edge') > -1,
    isExplorer: userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1, // MSIE = IE10 and below, Trident = IE11
    isFirefox: userAgent.indexOf('Firefox') > -1,
    isSafari: userAgent.indexOf('Safari') > -1,
    isOpera: userAgent.toLowerCase().indexOf('op') > -1
  };

  if (browsers.isChrome && browsers.isSafari) {
    browsers.isSafari = false;
  }

  if (browsers.isChrome && browsers.isOpera) {
    browsers.isChrome = false;
  }

  return browsers;
};

var isIe = exports.isIe = function isIe() {
  return document.querySelector('html').classList.contains('ie');
};

var isMsEdge = exports.isMsEdge = function isMsEdge() {
  return detectBrowsers().isMsEdge;
};

var isIe11 = exports.isIe11 = function isIe11() {
  return !window.ActiveXObject && 'ActiveXObject' in window;
};

var getViewportSize = exports.getViewportSize = function getViewportSize() {
  var test = document.createElement('div');

  test.style.cssText = 'position: fixed;top: 0;left: 0;bottom: 0;right: 0;';
  document.documentElement.insertBefore(test, document.documentElement.firstChild);

  var dims = { width: test.offsetWidth, height: test.offsetHeight };
  document.documentElement.removeChild(test);

  return dims;
};

var scrollToElement = exports.scrollToElement = function scrollToElement(element, options, callback) {
  var $element = element instanceof jQuery ? element : $(element);

  // Options are optional
  var opts = options || {};

  // Set defaults
  opts = $.extend({
    adjustment: 0,
    ease: 'easeOutSine',
    duration: 800,
    container: $('body, html')
  }, opts);

  // Has an element been supplied?
  if ($element.length === 0) {
    return false;
  }

  // Scroll to the target element allowing for the utility menu
  opts.container.stop().animate({
    scrollTop: $element.offset().top - opts.adjustment
  }, opts.duration, opts.ease, function () {
    if (callback) {
      callback();
    }
  });

  // For unit tests
  return opts;
};

/**
 * Detect Modern Browser by availability of BigInt feature.
 *
 * @return {boolean}
 */
var hasBigIntSupport = exports.hasBigIntSupport = function hasBigIntSupport() {
  return typeof BigInt === 'function';
};

/***/ }),

/***/ "./src/main/webapp/resources/dev/js/utils/index.js":
/*!*********************************************************!*\
  !*** ./src/main/webapp/resources/dev/js/utils/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preventActionOnDeepLink = exports.generateCurrentDate = exports.equaliseHeights = exports.addScriptForBazaarVoice = exports.localStorageAvailable = exports.addDxElementLoadingSpinner = exports.removeDxLoadingSpinner = exports.addDxLoadingSpinner = exports.DxRequestNextAnimationFrame = exports.dxSetTimeout = exports.replaceAll = exports.isEmpty = exports.tablistNavigation = exports.checkDefined = exports.isElementVerticallyScrollable = exports.randomiseElements = exports.convertElementCollectionToArray = exports.eventTrigger = exports.balanceElementHeight = exports.lockTabbables = exports.getTabbable = exports.isLandRover = exports.scrollIfNotInViewport = exports.isInViewport = exports.template = exports.getTransitionEndEvent = exports.measureTextWidth = exports.throttle = exports.loadIgnoredResponsiveImages = exports.limitNumber = exports.enableScroll = exports.disableScroll = exports.getEasingValue = exports.getRandomString = exports.elementInViewport = exports.isPageInXPMFrame = exports.hasPlaceholderSupport = exports.canvasDrawBgCover = exports.getObjectKeys = exports.addParameterToURL = exports.getUrlParameter = exports.removeHTMLTags = exports.mobileAccordionsActivated = exports.insideTabbedContainer = exports.isPageInIframe = exports.checkDeepLink = exports.scrollTo = exports.getStickyNavHeightV2 = exports.getStickyNavHeight = exports.getHeight = exports.getCachedScript = exports.isRtl = exports.googleMapStyles = exports.stickyNavigationTransitionPoint = exports.stickyNavigationEnabled = undefined;

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _arguments = arguments; /* global appReadyTimer */

var _browserDetection = __webpack_require__(/*! ./browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");

var _aria = __webpack_require__(/*! ./aria */ "./src/main/webapp/resources/dev/js/utils/aria.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $navHeader = $('#header, .dxnav-header');
var stickyNavigationEnabled = exports.stickyNavigationEnabled = $navHeader.attr('data-nav-type') === 'sticky';
var stickyNavigationTransitionPoint = exports.stickyNavigationTransitionPoint = 200;
var templateCache = {};

var googleMapStyles = exports.googleMapStyles = [{
  featureType: 'administrative.locality',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#666666'
  }]
}, {
  featureType: 'landscape.man_made',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#f8f6f4'
  }]
}, {
  featureType: 'poi',
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'road.highway',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#afaba4'
  }]
}, {
  featureType: 'road.highway',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#e6e6e6'
  }]
}, {
  featureType: 'road.highway',
  elementType: 'labels',
  stylers: [{
    saturation: -15
  }]
}, {
  featureType: 'road.highway.controlled_access',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#afaba4'
  }]
}, {
  featureType: 'road.highway.controlled_access',
  elementType: 'labels.icon',
  stylers: [{
    saturation: -100
  }]
}, {
  featureType: 'road.local',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#ffffff'
  }]
}, {
  featureType: 'road.local',
  elementType: 'labels.icon',
  stylers: [{
    saturation: '77'
  }]
}, {
  featureType: 'transit',
  elementType: 'labels.icon',
  stylers: [{
    saturation: '-100'
  }]
}, {
  featureType: 'water',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#c5d7de'
  }, {
    lightness: -9
  }]
}];

var isRtl = exports.isRtl = function isRtl() {
  var html = document.getElementsByTagName('html')[0];
  return html.classList.contains('rtl');
};

var getCachedScript = exports.getCachedScript = function getCachedScript(url, options) {
  var newOptions = $.extend(options || {}, {
    dataType: 'script',
    cache: true,
    url: url
  });

  return $.ajax(newOptions);
};

var getHeight = exports.getHeight = function getHeight(elem) {
  return elem ? elem.clientHeight : 0;
};

// make sure to pass 'oldCalculation = false' to use the new refined calculation
// or use getStickyNavHeightV2()
var getStickyNavHeight = exports.getStickyNavHeight = function getStickyNavHeight(yPos) {
  var oldCalculation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var yPosition = typeof yPos !== 'number' ? 0 : yPos;
  var sharedHeader = $('.dxnav-header');
  var $header = sharedHeader.length ? sharedHeader : $('#header');
  var $inPageNav = $('.InPageNavigation');
  var $inPageNavSticky = $('.InPageNavigation--sticky');
  var $inPageNavBar = $('.InPageNavigation__bar');
  var dxNavPrimary = document.querySelector('.dxnav__primary');
  var breakpoint = (0, _browserDetection.getBreakpointSize)();
  var checkStickyNav = $header.length > 0 ? $header.css('position') === 'fixed' : false;
  var inPageNavTop = $inPageNav.length > 0 ? $inPageNav.offset().top : null;
  var isStickyNav = sharedHeader.length ? true : checkStickyNav;
  var height = 0;

  if (!isStickyNav) {
    return height;
  }

  // hard coding values here to prevent having to repeatedly clone and measure the header
  var oldNavBreakpoint = 960;

  // added $inPageNav.css('display') check for LRA-10851
  if (inPageNavTop !== null && yPosition >= inPageNavTop && breakpoint === 'large' && $inPageNav.css('display') !== 'none') {
    return $inPageNav.outerHeight();
  }

  var windowWidth = window.innerWidth;

  // this is the old navigation, only shown when NaaS is down, hard coding values to prevent having to clone/measure the DOM elements for performance reasons
  var getNavigationHeight = function getNavigationHeight() {
    if (windowWidth >= oldNavBreakpoint && yPosition < 200) {
      return 106;
    }
    return 50;
  };

  var getNaaSHeight = function getNaaSHeight(old) {
    var primaryNavHeight = void 0;

    if (old) {
      primaryNavHeight = getHeight(dxNavPrimary);
    } else {
      primaryNavHeight = document.querySelector('.dxnav-scrollDown') === null && !$inPageNavSticky.length ? getHeight(dxNavPrimary) + parseInt(sharedHeader.css('top'), 10) : 0;
    }

    var breadcrumbNavHeight = getHeight(document.querySelector('.dxnav__breadcrumbs-container'));
    var notificationHeight = getHeight(document.querySelector('.notificationBarsWrapper'));
    var inPageNavigationHeight = 0;
    if ($inPageNav.length) {
      if ($inPageNavSticky.length) {
        breadcrumbNavHeight = 0;
        if (parseInt($inPageNavBar.css('top'), 10) === 0) {
          inPageNavigationHeight = $inPageNav.innerHeight();
        }
        if (parseInt($inPageNavBar.css('top'), 10) < 0) {
          inPageNavigationHeight = Math.max($inPageNav.outerHeight() + parseInt($inPageNavBar.css('top'), 10), 0);
        }
      }
    }
    return primaryNavHeight + breadcrumbNavHeight + notificationHeight + (old ? 0 : inPageNavigationHeight);
  };

  if (sharedHeader.length) {
    height = getNaaSHeight(oldCalculation);
  } else {
    height = getNavigationHeight();
  }

  return height;
};

// should be used until merged with getNavigationHeight
var getStickyNavHeightV2 = exports.getStickyNavHeightV2 = function getStickyNavHeightV2(yPos) {
  return getStickyNavHeight(yPos, false);
};

var scrollTo = exports.scrollTo = function scrollTo(target, duration, callback, easing, ignoreStickyNav) {
  var yOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  var newDuration = typeof duration !== 'number' ? 800 : duration;
  var newCallback = typeof callback !== 'function' ? null : callback;
  var newEasing = typeof easing !== 'string' ? 'easeOutSine' : easing;
  var position = 0;

  if (typeof target === 'number') {
    // Px value
    position = target;
  } else {
    // Element
    var $targetEl = target || $('body');
    position = $targetEl.offset().top;
  }

  if (ignoreStickyNav !== true) {
    position -= getStickyNavHeight(position);
  }

  $('html, body').stop().animate({ scrollTop: position + yOffset }, newDuration, newEasing).promise().done(newCallback);
};

var checkDeepLink = exports.checkDeepLink = function checkDeepLink(href) {
  var deepLink = false;
  var speed = 2.5;

  var hashPos = href.indexOf('#');
  if (hashPos + 1 < href.length && hashPos !== -1) {
    var id = href.substring(hashPos, href.length);
    if ($(id).length === 1) {
      var location = $(id);
      var duration = location.offset().top / speed;

      // LRA-13794 | AccordionContainer | Open accordion first if deeplink is inside
      if ($('head [name="accordionOnMobile"]').length && (0, _browserDetection.isBreakpointSmall)()) {
        var accordionParent = location.closest('.accordion-group');
        var accordionTitle = accordionParent.find('.accordion-group-title');

        if (accordionParent.length && accordionTitle.length) {
          // Open accordion if closed
          if (!accordionParent.hasClass('open')) {
            accordionTitle.click();
          }

          // Take into account the height of the accordion title
          location = location.offset().top - accordionTitle.outerHeight();

          scrollTo(location, 800, null, 'easeOutSine');
          deepLink = true;
          return;
        }
      }

      if (location.parents('.TabbedContainer').length) {
        var $container = location.closest('.TabbedContainer');
        var $tabs = $container.find('.tab');
        var $tabLinks = $container.find('.tab-link');
        var tabIndex = 0;

        $tabs.each(function (i, el) {
          var $location = $(el).find(location);
          if ($location.length) {
            tabIndex = i;
          }
        });

        $tabLinks.each(function (i, el) {
          if (i === tabIndex) {
            $(el).click();
          }
        });

        location = $container.offset().top;
        duration = location / speed;

        scrollTo(location, 800, null, 'easeStartFastEndSlow');
        return true; // eslint-disable-line
      }

      // LRA-12701 | L462 Test | Open accordion first if deeplink is inside
      if ($('body').hasClass('vehiclesDiscovery')) {
        var _accordionParent = location.parents('.AccordionContainer');
        var element = $(location);

        if (_accordionParent.length) {
          var accordionHeader = _accordionParent.find('.header');

          if (!accordionHeader.hasClass('accordion-open')) {
            accordionHeader.click();
          }

          if (accordionHeader.is(':visible')) {
            if (!location.is(':visible')) {
              element.css('display', 'block');
              location = location.offset().top - accordionHeader.outerHeight();
              element.css('display', '');
            } else {
              location = location.offset().top - accordionHeader.outerHeight();
            }
          }
        }
      }

      scrollTo(location, duration, null, 'easeStartFastEndSlow');
      deepLink = true;
    } else {
      // eslint-disable-next-line no-console
      console.error('Could not find deep link element with id: ' + id);
    }
  }
  return deepLink; // eslint-disable-line
};

var isPageInIframe = exports.isPageInIframe = function isPageInIframe() {
  return window.self !== window.top;
};

var insideTabbedContainer = exports.insideTabbedContainer = function insideTabbedContainer(el) {
  var isInsideTabbedContainer = !!el.parents('.TabbedContainer').not('[data-total="1"]').length;

  if (isInsideTabbedContainer) {
    return el.parents('.TabbedContainer');
  }

  return false;
};

var mobileAccordionsActivated = exports.mobileAccordionsActivated = function mobileAccordionsActivated() {
  return $('head [name="accordionOnMobile"]').length;
};

var removeHTMLTags = exports.removeHTMLTags = function removeHTMLTags(s) {
  return s.toString().replace(/[<>=;]/g, '');
};

var getUrlParameter = exports.getUrlParameter = function getUrlParameter(sParam) {
  function decode(s) {
    return decodeURIComponent((s || '').replace(/\+/g, ' '));
  }

  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');

  for (var i = 0; i < sURLVariables.length; i += 1) {
    var sParameterSplit = sURLVariables[i].split('=');
    if (decode(sParameterSplit[0]) === sParam) {
      return decode(sParameterSplit[1]);
    }
  }

  return null;
};

var addParameterToURL = exports.addParameterToURL = function addParameterToURL(url, param) {
  var newUrl = url + (url.split('?')[1] ? '&' : '?') + param;

  return param !== '' ? newUrl : url;
};

var getObjectKeys = exports.getObjectKeys = function getObjectKeys(obj) {
  var keys = [];
  for (var i in obj) {
    //eslint-disable-line
    if (obj.hasOwnProperty(i)) {
      // eslint-disable-line
      keys.push(i);
    }
  }
  return keys;
};

/* eslint-disable */
var canvasDrawBgCover = exports.canvasDrawBgCover = function canvasDrawBgCover(ctx, img, x, y, w, h, offsetX, offsetY) {
  if (_arguments.length === 2) {
    x = y = 0;
    w = ctx.canvas.width;
    h = ctx.canvas.height;
  }

  // default offset is center
  offsetX = typeof offsetX === 'number' ? offsetX : 0.5;
  offsetY = typeof offsetY === 'number' ? offsetY : 0.5;

  // keep bounds [0.0, 1.0]
  if (offsetX < 0) {
    offsetX = 0;
  }
  if (offsetY < 0) {
    offsetY = 0;
  }
  if (offsetX > 1) {
    offsetX = 1;
  }
  if (offsetY > 1) {
    offsetY = 1;
  }

  var iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,
      // new prop. width
  nh = ih * r,
      // new prop. height
  cx,
      cy,
      cw,
      ch,
      ar = 1;

  // decide which gap to fill
  if (nw < w) {
    ar = w / nw;
  }
  if (nh < h) {
    ar = h / nh;
  }
  nw *= ar;
  nh *= ar;

  // calc source rectangle
  cw = iw / (nw / w);
  ch = ih / (nh / h);

  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  // make sure source rectangle is valid
  if (cx < 0) {
    cx = 0;
  }
  if (cy < 0) {
    cy = 0;
  }
  if (cw > iw) {
    cw = iw;
  }
  if (ch > ih) {
    ch = ih;
  }

  // fill image in dest. rectangle
  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
};
/* eslint-enable */

var hasPlaceholderSupport = exports.hasPlaceholderSupport = function hasPlaceholderSupport() {
  var el = document.createElement('input');
  return 'placeholder' in el;
};

var isPageInXPMFrame = exports.isPageInXPMFrame = function isPageInXPMFrame() {
  return typeof window.Tridion !== 'undefined' && typeof window.Tridion.Web.UI.SiteEdit !== 'undefined';
};

var elementInViewport = exports.elementInViewport = function elementInViewport(element, adjust, windowInnerHeight) {
  var $element = element instanceof jQuery ? element : $(element);

  if (!$element.length) {
    return false;
  }

  var $window = $(window);
  var scrollTop = $window.scrollTop();
  var windowHeight = $window.height();
  var adjustTop = void 0;
  var adjustBottom = void 0;

  // Element specifics
  var elOffset = $element.offset();
  var elTop = elOffset.top;
  var elBottom = elTop + $element.height();

  // Default value
  var defaultAdjust = (0, _browserDetection.getBreakpointSize)() === 'small' ? 20 : 50;

  // LRA-11494 Fix iOS issue with window height.
  // Temporarily add option to allow this so QA is not
  // required on StoryGallery + StoryArticleEnhancedImageBlock
  if (typeof windowInnerHeight !== 'undefined' && windowInnerHeight) {
    windowHeight = window.innerHeight ? window.innerHeight : windowHeight;
  }

  // Set viewportBottom
  var viewportBottom = scrollTop + windowHeight;

  // Allow adjust to be set different from top/bottom
  if ((typeof adjust === 'undefined' ? 'undefined' : (0, _typeof3.default)(adjust)) === 'object') {
    adjustTop = adjust.top;
    adjustBottom = adjust.bottom;
  } else {
    adjustTop = adjust || defaultAdjust;
    adjustBottom = adjust || defaultAdjust;
  }

  return !(viewportBottom < elTop + adjustTop || scrollTop > elBottom - adjustBottom);
};

var getRandomString = exports.getRandomString = function getRandomString(length) {
  var formattedLength = parseInt(length, 10) || 0;
  formattedLength = formattedLength < 0 ? 0 : formattedLength;

  var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var chosen = [];

  for (var i = 0; i < formattedLength; i += 1) {
    chosen.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }

  return chosen.join('');
};

var getEasingValue = exports.getEasingValue = function getEasingValue(ratio) {
  var formattedRatio = ratio < 0 ? 0 : ratio;
  formattedRatio = formattedRatio > 1 ? 1 : formattedRatio;

  // Convert the ratio to a number of radians. 0 maps to -PI, 0.5 maps to
  // 0, 1 maps to PI
  var radians = formattedRatio * (2 * Math.PI) - Math.PI;

  // Convert this to a value using a cosine curve. Note that cosine gives
  // a value between -1 and 1, so we need to add 1 and divide by 2 to
  // keep it between 0 and 1
  return (Math.cos(radians) + 1) / 2;
};

var disableScroll = exports.disableScroll = function disableScroll() {
  var $window = $(window);
  var scrollTop = $window.scrollTop();

  $window.on('scroll.disableScroll mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll', function (event) {
    event.preventDefault();
    $window.scrollTop(scrollTop);
  });
};

var enableScroll = exports.enableScroll = function enableScroll() {
  var $window = $(window);

  $window.off('scroll.disableScroll mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll');
};

var limitNumber = exports.limitNumber = function limitNumber(value, min, max) {
  if (min > max) {
    var oldMin = min;
    min = max; // eslint-disable-line
    max = oldMin; // eslint-disable-line
  }

  return Math.max(min, Math.min(max, value));
};

var loadIgnoredResponsiveImages = exports.loadIgnoredResponsiveImages = function loadIgnoredResponsiveImages($images) {
  $images.removeAttr('data-picture-ignore');
  window.richsponsiveImage();
};

var throttle = exports.throttle = function throttle(fn, threshhold, scope) {
  var thresh = threshhold || 250;
  var last = void 0;
  var deferTimer = void 0;

  return function () {
    var context = scope || undefined;

    var now = +new Date();
    var args = _arguments;
    if (last && now < last + thresh) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, thresh);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};

/** *
 * Measure text width using Browser.
 *
 * @param text
 * @param parent
 * @return {number}
 * @deprecated Please use CMS Powered solution in future.
 */
var measureTextWidth = exports.measureTextWidth = function measureTextWidth(text, parent) {
  if (!text) {
    return 0;
  }

  var par = parent || document.body;
  var container = document.createElement('div');

  container.style.position = 'absolute';
  container.style.visibility = 'hidden';
  container.style.height = 'auto';
  container.style.width = 'auto';
  container.style.padding = '0';
  container.style.whiteSpace = 'nowrap';
  container.innerHTML = text;

  par.appendChild(container);
  var width = container.clientWidth;
  par.removeChild(container);

  return width;
};

var getTransitionEndEvent = exports.getTransitionEndEvent = function getTransitionEndEvent() {
  var el = document.createElement('fakeelement');
  var transitions = {
    transition: 'transitionend',
    OTransition: ' oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };

  for (var transition in transitions) {
    // eslint-disable-line
    if (el.style[transition] !== undefined) {
      return transitions[transition];
    }
  }

  return false;
};

/* eslint-disable */
var template = exports.template = function template(str, data) {
  // Figure out if we're getting a template, or if we need to
  // load the template - and be sure to cache the result.
  var fn = !/\W/.test(str) ? templateCache[str] = templateCache[str] || template(document.getElementById(str).innerHTML) :

  // Generate a reusable function that will serve as a template
  // generator (and which will be cached).
  new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" +

  // Introduce the data as local variables using with(){}
  "with(obj){p.push('" +

  // Convert the template into pure JavaScript
  str.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "',$1,'").split("<%").join("');").split("%>").join("p.push('") + "');}return p.join('');");

  // Provide some basic currying to the user
  return data ? fn(data) : fn;
};
/* eslint-enable */

var isInViewport = exports.isInViewport = function isInViewport(element) {
  var win = $(window);

  var viewport = {
    top: win.scrollTop() + getStickyNavHeight(),
    bottom: win.scrollTop() + win.height(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();

  var bounds = element.offset();
  bounds.right = bounds.left + element.outerWidth();
  bounds.bottom = bounds.top + element.outerHeight();

  return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
};

var scrollIfNotInViewport = exports.scrollIfNotInViewport = function scrollIfNotInViewport(element, displayToBottom) {
  if (!isInViewport(element)) {
    // Not in view
    var scrollToPos = displayToBottom ? element.offset().top - $(window).innerHeight() : element.offset().top - getStickyNavHeight();
    $('html,body').animate({ scrollTop: scrollToPos }, 800);
    return true;
  }
  return false;
};

var isLandRover = exports.isLandRover = function isLandRover() {
  return !!$('body#landrover').length;
};

var getTabbable = exports.getTabbable = function getTabbable(elem, customSelectors) {
  var defaultSelectors = ['input:not([disabled]):not([hidden])', 'select', 'a[href]', 'textarea', 'button', '[tabindex]:not([tabindex^="-"])'];

  var selectorTypes = customSelectors ? defaultSelectors.concat(customSelectors) : defaultSelectors;
  var selectors = elem.querySelectorAll(selectorTypes.join(','));
  selectors = (0, _from2.default)(selectors);
  selectors = selectors.filter(function (selector) {
    var tabbable = true;
    if (!selector.offsetParent || selector.offsetWidth === 0 || selector.offsetHeight === 0) {
      tabbable = false;
    }

    function isInvisible(el) {
      if (el.style.visibility === 'hidden' || el.style.display === 'none') {
        tabbable = false;
      } else if (el.parentNode && el.parentNode !== document.body) {
        isInvisible(el.parentNode);
      }
    }
    isInvisible(selector);
    if (tabbable) {
      return selector;
    }
    return false;
  });
  return selectors;
};

var lockTabbables = exports.lockTabbables = function lockTabbables(tabbables) {
  tabbables.forEach(function (el, i) {
    el.addEventListener('keydown', function (e) {
      if (e.keyCode !== _aria.KeyCode.TAB) {
        return;
      }
      e.preventDefault();
      if (i === 0) {
        if (tabbables.length === 1) {
          tabbables[0].focus();
        } else if (e.shiftKey) {
          tabbables[tabbables.length - 1].focus();
        } else {
          tabbables[i + 1].focus();
        }
      } else if (i === tabbables.length - 1 && !e.shiftKey) {
        tabbables[0].focus();
      } else if (e.shiftKey) {
        tabbables[i - 1].focus();
      } else {
        tabbables[i + 1].focus();
      }
    });
  });
};

var balanceElementHeight = exports.balanceElementHeight = function balanceElementHeight(elements) {
  var allowedOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var columns = {};
  if (!elements) {
    return columns;
  }
  var elementsArray = [].slice.call(elements);
  var heightTotal = 0;
  var heightsArray = elementsArray.map(function (element) {
    var elementHeight = element.getBoundingClientRect().height;
    heightTotal += elementHeight;
    return elementHeight;
  });
  var getBalancedIndex = function getBalancedIndex(array, target) {
    var runningTotal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var isRecursive = !!array[index] && runningTotal + array[index] <= target - allowedOffset;
    return isRecursive ? getBalancedIndex(array, target, runningTotal + array[index], index + 1) : index;
  };
  var splitIndex = getBalancedIndex(heightsArray, heightTotal / 2) + 1;
  columns.columns1 = elementsArray.slice(0, splitIndex);
  columns.columns2 = elementsArray.slice(splitIndex, elementsArray.length);
  columns.heightsArray = heightsArray;
  return columns;
};

var eventTrigger = exports.eventTrigger = function eventTrigger(elem, eventType) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var bubbles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var event = new CustomEvent(eventType, { detail: detail, bubbles: bubbles });
  elem.dispatchEvent(event);
};

var convertElementCollectionToArray = exports.convertElementCollectionToArray = function convertElementCollectionToArray(collection) {
  if (collection instanceof NodeList || collection instanceof jQuery) {
    return collection instanceof NodeList ? [].slice.call(collection) : collection.get();
  }
  return false;
};

var randomiseElements = exports.randomiseElements = function randomiseElements(elementsCollection) {
  var elements = convertElementCollectionToArray(elementsCollection);
  if (!elements || !elements.length) return;
  var clonedElements = elements.map(function (element) {
    return element.cloneNode(true);
  });
  clonedElements.sort(function () {
    return Math.random() - 0.5;
  });
  elements.forEach(function (element, inc) {
    return element.parentNode.replaceChild(clonedElements[inc], element);
  });
};

var isElementVerticallyScrollable = exports.isElementVerticallyScrollable = function isElementVerticallyScrollable(el) {
  return el && el.scrollHeight > el.offsetHeight;
};

var checkDefined = exports.checkDefined = function checkDefined(item) {
  return item !== undefined && item !== null;
};

var tablistNavigation = exports.tablistNavigation = function tablistNavigation(tablist) {
  var orientation = tablist.getAttribute('aria-orientation');
  var isVertical = orientation && orientation === 'vertical';
  var tabs = tablist.querySelectorAll('[role="tab"]');
  var keys = _aria.KeyCode;

  var focusFirstTab = function focusFirstTab() {
    return tabs[0].focus();
  };
  var focusLastTab = function focusLastTab() {
    return tabs[tabs.length - 1].focus();
  };

  var focusPreviousTab = function focusPreviousTab(currentTab) {
    var tabIndex = [].concat((0, _toConsumableArray3.default)(tabs)).findIndex(function (element) {
      return element === currentTab;
    });
    if (tabIndex === 0) {
      focusLastTab();
    } else {
      tabs[tabIndex - 1].focus();
    }
  };

  var focusNextTab = function focusNextTab(currentTab) {
    var tabIndex = [].concat((0, _toConsumableArray3.default)(tabs)).findIndex(function (element) {
      return element === currentTab;
    });
    var tabsLengthZeroIndex = tabs.length - 1;
    if (tabIndex === tabsLengthZeroIndex) {
      focusFirstTab();
    } else {
      tabs[tabIndex + 1].focus();
    }
  };

  var handleTablistKeydownEvents = function handleTablistKeydownEvents(event) {
    var key = event.keyCode;
    switch (key) {
      case keys.END:
        event.preventDefault();
        focusLastTab();
        break;
      case keys.HOME:
        event.preventDefault();
        focusFirstTab();
        break;
      case keys.LEFT:
      case keys.UP:
        if (isVertical) {
          event.preventDefault();
          focusPreviousTab(event.currentTarget);
        }
        break;
      case keys.RIGHT:
      case keys.DOWN:
        if (isVertical) {
          event.preventDefault();
          focusNextTab(event.currentTarget);
        }
        break;
      default:
        break;
    }
  };

  var handleTablistKeyupEvents = function handleTablistKeyupEvents(event) {
    var key = event.keyCode;
    switch (key) {
      case keys.LEFT:
        focusPreviousTab(event.currentTarget);
        break;
      case keys.RIGHT:
        focusNextTab(event.currentTarget);
        break;
      default:
        break;
    }
  };

  tabs.forEach(function (tab) {
    tab.addEventListener('keydown', handleTablistKeydownEvents, false);
    if (!isVertical) {
      tab.addEventListener('keyup', handleTablistKeyupEvents, false);
    }
  });
};

var isEmpty = exports.isEmpty = function isEmpty(obj) {
  for (var key in obj) {
    // eslint-disable-line
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
};

var replaceAll = exports.replaceAll = function replaceAll(string, search, replacement) {
  return string.split(search).join(replacement);
};

var dxSetTimeout = exports.dxSetTimeout = function dxSetTimeout(cb, time) {
  setTimeout(cb, time);

  if (window.appReadyEvent.initiated) {
    appReadyTimer.add(time);
  } else {
    window.appReadyEvent.timeout += time;
  }
};

var DxRequestNextAnimationFrame = exports.DxRequestNextAnimationFrame = function DxRequestNextAnimationFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb());
  });
};

var loadingSpinnerToggleButtonStateAndContent = function loadingSpinnerToggleButtonStateAndContent(target) {
  var targetElement = target;

  if (target.tagName === 'BUTTON') {
    targetElement.disabled = true;
  }
  targetElement.classList.add('loading');

  var children = targetElement.children;

  [].concat((0, _toConsumableArray3.default)(children)).forEach(function (child) {
    var element = child;
    element.style.opacity = 0;
  });
};

/**
 * addDxLoadingSpinner
 * @param {HTMLElement} target The button/link that the loading spinner should be inserted into
 */
var addDxLoadingSpinner = exports.addDxLoadingSpinner = function addDxLoadingSpinner(target) {
  if (!target) {
    return;
  }

  var iconMarkup = '<div class="DxLoading" aria-hidden="true"><div class="DxLoading__icon" aria-expanded="true"></div></div>';
  var loadingIcon = document.createRange().createContextualFragment(iconMarkup);

  loadingSpinnerToggleButtonStateAndContent(target);

  target.appendChild(loadingIcon);
};

/**
 * removeDxLoadingSpinner
 * @param {HTMLElement} target The button/link that the loading spinner should be removed from
 * @param {string || HTMLElement} replace The string you would like to replace the loading spinner with (expected to be the text originally in the button)
 */
var removeDxLoadingSpinner = exports.removeDxLoadingSpinner = function removeDxLoadingSpinner(target) {
  var targetElement = target;

  if (target.tagName === 'BUTTON') {
    targetElement.disabled = false;
  }
  targetElement.classList.remove('loading');

  var loadingIcon = targetElement.querySelector('.DxLoading');
  targetElement.removeChild(loadingIcon);

  var children = targetElement.children;

  [].concat((0, _toConsumableArray3.default)(children)).forEach(function (child) {
    var element = child;
    element.style.opacity = 1;
  });
};

var addDxElementLoadingSpinner = exports.addDxElementLoadingSpinner = function addDxElementLoadingSpinner(target) {
  if (!target) {
    return;
  }

  var iconMarkup = '<div class="DxLoading" aria-hidden="true">\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 88 88" style="enable-background:new 0 0 88 88;" xml:space="preserve">\n    <path fill="#FFFFFF" style="opacity: .2;" d="M44,5c21.5,0,39,17.5,39,39S65.5,83,44,83S5,65.5,5,44S22.5,5,44,5 M44,0C19.7,0,0,19.7,0,44s19.7,44,44,44 s44-19.7,44-44S68.3,0,44,0L44,0z"/>\n    <path fill="#F0F0F0" d="M85.5,46.4c-1.4,0-2.5-1.1-2.5-2.5C83,22.5,65.5,5,44.1,5c-1.4,0-2.5-1.1-2.5-2.5S42.7,0,44.1,0 C68.3,0,88,19.7,88,43.9C88,45.3,86.9,46.4,85.5,46.4z">\n      <animateTransform attributeName="transform" type="rotate" from="0 44 44" to="360 44 44" dur="1.5s" repeatCount="indefinite"></animateTransform>\n    </path>\n    </svg>\n  </div>';
  var loadingIcon = document.createRange().createContextualFragment(iconMarkup);

  loadingSpinnerToggleButtonStateAndContent(target);

  target.appendChild(loadingIcon);
};

var localStorageAvailable = exports.localStorageAvailable = function localStorageAvailable() {
  try {
    if (typeof window.localStorage !== 'undefined') {
      try {
        window.localStorage.setItem('feature_test', 'yes');
        if (window.localStorage.getItem('feature_test') === 'yes') {
          window.localStorage.removeItem('feature_test');
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

var addScriptForBazaarVoice = exports.addScriptForBazaarVoice = function addScriptForBazaarVoice(scriptURL) {
  if (scriptURL.trim() !== '' && document.querySelectorAll('script[src=\'' + scriptURL + '\']').length === 0) {
    var bazaarVoiceScript = document.createElement('script');
    bazaarVoiceScript.setAttribute('src', scriptURL);
    document.head.appendChild(bazaarVoiceScript);
  }
};

var equaliseHeights = exports.equaliseHeights = function equaliseHeights(elements) {
  var maxHeight = 0;
  [].concat((0, _toConsumableArray3.default)(elements)).forEach(function (element) {
    // eslint-disable-next-line no-param-reassign
    element.style.height = 'auto';
  });
  [].concat((0, _toConsumableArray3.default)(elements)).forEach(function (element) {
    var height = element.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });
  [].concat((0, _toConsumableArray3.default)(elements)).forEach(function (element) {
    // eslint-disable-next-line no-param-reassign
    element.style.height = maxHeight + 'px';
  });
};

var generateCurrentDate = exports.generateCurrentDate = function generateCurrentDate() {
  var today = new Date();
  return Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes());
};

var preventActionOnDeepLink = exports.preventActionOnDeepLink = function preventActionOnDeepLink(event) {
  var linkLocation = event.currentTarget.getAttribute('href');
  if (checkDeepLink(linkLocation)) {
    event.preventDefault();
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50cy9JbnRlcmlvcjM2MC9qcy9JbnRlcmlvcjM2MC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9hcmlhLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2Jyb3dzZXJEZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOlsicGFub0lkIiwiJCIsIndpbmRvdyIsIkludGVyaW9yMzYwIiwia3JwYW5vVVJMIiwicGFubyIsInBhbm9JRCIsImJ1dHRvbkNsYXNzIiwiZmlyc3RGb2N1c2FibGVDb250cm9sIiwiZGV2aWNlQ29udHJvbHMiLCJ1c2VyQWN0aXZhdGVkIiwiX3dpbmRvd1dpZHRoIiwiX3dpbmRvd0hlaWdodCIsImdyYWJQYWRkaW5nIiwiZ3lyb0VuYWJsZWQiLCJfaGFzTG9hZGVkIiwia2V5Ym9hcmRMaW1pdGVyIiwidWlTZWxlY3RvcnMiLCJpbnRlcmlvciIsImluaXRDb250YWluZXIiLCJnYWxsZXJ5QnV0dG9uIiwiem9vbUNvbnRyb2xzIiwiem9vbUluQnV0dG9uIiwiem9vbU91dEJ1dHRvbiIsImd5cm9CdXR0b24iLCJyZXNldEJ1dHRvbiIsImRlc2t0b3BJbnN0cnVjdGlvbnMiLCJ0b3VjaEluc3RydWN0aW9ucyIsImhlYWRlckJveCIsIl91bmlxSWQiLCJfcGFub0lkIiwiaW5pdCIsIiRlbGVtZW50IiwiYXR0ciIsIl90YWJiZWRDb250YWluZXIiLCJwYXJlbnRzIiwibm90IiwiX2lzSW5zaWRlVGFiYmVkQ29udGFpbmVyIiwibGVuZ3RoIiwiX2hhc0hlYWRlckJveCIsInVpIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiX2RldGVybWluZUZpcnN0Rm9jdXNhYmxlQ29udHJvbCIsIl90b2dnbGVidXR0b25TdHlsaW5nIiwiX2NhbGN1bGF0ZUhlaWdodCIsIm9uIiwiY2xlYXJUaW1lb3V0IiwicmVzaXplVGltZW91dCIsInNldFRpbWVvdXQiLCJmaW5kIiwicmVtb3ZlIiwiX2luaXRUb2dnbGVXcmFwcGVyIiwiX3NldEZ1bGxzY3JlZW4iLCJUYWJiZWRDb250YWluZXIiLCJrcnBhbm9KUyIsImRvbmUiLCJfaW5pdFBhbm9TZXR1cCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJfaW5pdFBhbm9WaWV3ZXIiLCJfaW5pdENvbnRyb2xzIiwiX3NldHVwR29BbmltYXRpb24iLCJfYWRkQTExeUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJLZXlDb2RlIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiX3N0YXJ0RHJhZ2dpbmdQYW5vIiwiVEFCIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwiX3N0b3BEcmFnZ2luZ1Bhbm8iLCJfYWN0aXZhdGVGb2N1c09uS3JwYW5vRWxlbWVudCIsImRpcnMiLCJpIiwibGFzdENsYXNzIiwiZ28iLCJfYW5pbWF0aW9uVGltZW91dCIsImJpbmQiLCJmb3JjZSIsInV0aWxpdHlIZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJjdXJyZW50SGVpZ2h0IiwiaGVpZ2h0IiwiY3VycmVudFdpZHRoIiwid2lkdGgiLCJub3REZXNrdG9wIiwidGFiT2Zmc2V0IiwicGFyc2VGbG9hdCIsImNzcyIsInNpdGUiLCJzdGlja3lOYXZpZ2F0aW9uRW5hYmxlZCIsInBhbm8zNjBIZWlnaHQiLCJfY2VudGVySGVhZGVyQm94IiwiX2hpZGVIZWFkZXJCb3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZla3JwYW5vd2luZG93IiwiY2FwdGlvbiIsInRleHQiLCJsb2FkQnV0dG9uIiwiY2xhc3MiLCJhcHBlbmQiLCJsZWZ0IiwiZWxlbWVudEhlaWdodCIsIm91dGVySGVpZ2h0IiwiX2tycGFub0NvbnRyb2xzRW5hYmxlZCIsIl9hY3RpdmVUb2dnbGUiLCJodG1sIiwic2V0dGluZ3MiLCJjb21wb25lbnREYXRhIiwiZGF0YSIsImltYWdlVVJMIiwicGFub2ltYWdldXJsIiwicGFub3ZpZXdobG9va2F0IiwicGFub3ZpZXd2bG9va2F0IiwicGFub3ZpZXdtYXhwaXhlbHpvb20iLCJwYW5vdmlld2xpbWl0dmlldyIsInBhbm92aWV3Zm92bWluIiwicGFub3ZpZXdmb3ZtYXgiLCJwYW5vdmlld2ZvdiIsInBhbm9jb250cm9sZm92c3BlZWQiLCJwYW5vY29udHJvbGZvdmZyaWN0aW9uIiwicGFub2NvbnRyb2x0b3VjaGZyaWN0aW9uIiwicGFub2NvbnRyb2x0b3VjaHpvb20iLCJwYW5vYXV0b3JvdGF0ZWVuYWJsZWQiLCJwYW5vYXV0b3JvdGF0ZXdhaXR0aW1lIiwicGFub2F1dG9yb3RhdGVzcGVlZCIsIm1heHpvb21zaXplIiwiX2NoZWNrWm9vbUJ1dHRvbiIsInByZXBlbmQiLCJpZCIsInJlbW92ZXBhbm8iLCJlbWJlZHBhbm8iLCJzd2YiLCJ4bWwiLCJ0YXJnZXQiLCJodG1sNSIsImNvbnNvbGVsb2ciLCJtd2hlZWwiLCJwYXNzUXVlcnlQYXJhbWV0ZXJzIiwib25lcnJvciIsIl9rcnBhbm9FcnJvciIsIm9ucmVhZHkiLCJfa3JwYW5vUmVhZHkiLCJ2YXJzIiwid21vZGUiLCJjaGlsZHJlbiIsImdldCIsInNldCIsIl9kcmFnZ2luZ1RpbWVyIiwiX3Jlc2V0SGVhZGVyQm94IiwiX2tycGFub0d5cm9EaXNhYmxlZCIsIl9rcnBhbm9HeXJvRW5hYmxlZCIsIm1vdXNldXAiLCJfa3JwYW5vU3RvcFpvb20iLCJtb3VzZWRvd24iLCJfa3JwYW5vWm9vbUluIiwiY2xpY2siLCJfa3JwYW5vWm9vbU91dCIsIl9yZXNldCIsImUiLCJjb25zb2xlIiwibG9nIiwic2hvdyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJfa3JwYW5vQXV0b3JvdGF0ZUVuYWJsZWQiLCJfa3JwYW5vQXV0b3JvdGF0ZURpc2FibGVkIiwiX29uRW50ZXJWaWV3cG9ydCIsIl9hY3RpdmF0ZSIsIl9vbkV4aXRWaWV3cG9ydCIsIl9kZWFjdGl2YXRlIiwiaGlkZSIsIkhlYWRlckJveCIsImhlYWRlckhlaWdodCIsImhlYWRlclBvcyIsIl9kZXN0cm95Iiwib2ZmIiwialF1ZXJ5IiwiY3JlYXRlQ29tcG9uZW50IiwiZWFjaCIsImluZGV4IiwiZWxlbWVudCIsImNvbXAiLCJCQUNLU1BBQ0UiLCJERUxFVEUiLCJFTkQiLCJFU0MiLCJIT01FIiwiUEFHRV9ET1dOIiwiUEFHRV9VUCIsIlJFVFVSTiIsIlNQQUNFIiwiYnJlYWtwb2ludHMiLCJzbWFsbCIsIm1lZGl1bSIsIndpZGVyIiwiY3VycmVudCIsImdldERldmljZU9yaWVudGF0aW9uIiwiJHdpbmRvdyIsImdldExhcmdlckJyZWFrcG9pbnQiLCJnZXRCcmVha3BvaW50U2l6ZSIsIm9sZENhbGMiLCJpbm5lcldpZHRoIiwiaXNCcmVha3BvaW50U21hbGwiLCJpc0JyZWFrcG9pbnRNZWRpdW0iLCJpc01vYmlsZURldmljZSIsIkRvY3VtZW50VG91Y2giLCJuYXZpZ2F0b3IiLCJtc01heFRvdWNoUG9pbnRzIiwiaXNOb3RNb2JpbGVEZXZpY2UiLCJpc1RhYmxldERldmljZSIsInRlc3QiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImlzSU9TIiwiaXNOb3RJT1MiLCJpc1dpbmRvd3NQaG9uZSIsImluZGV4T2YiLCJnZXRBbmRyb2lkVmVyc2lvbiIsInVhIiwic2xpY2UiLCJnZXRCcm93c2VyVXNlckFnZW50IiwiZGV0ZWN0QnJvd3NlcnMiLCJicm93c2VycyIsImlzQ2hyb21lIiwiaXNNc0VkZ2UiLCJpc0V4cGxvcmVyIiwiaXNGaXJlZm94IiwiaXNTYWZhcmkiLCJpc09wZXJhIiwiaXNJZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlzSWUxMSIsIkFjdGl2ZVhPYmplY3QiLCJnZXRWaWV3cG9ydFNpemUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJjc3NUZXh0IiwiZG9jdW1lbnRFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImRpbXMiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJlbW92ZUNoaWxkIiwic2Nyb2xsVG9FbGVtZW50Iiwib3B0aW9ucyIsImNhbGxiYWNrIiwib3B0cyIsImV4dGVuZCIsImFkanVzdG1lbnQiLCJlYXNlIiwiY29udGFpbmVyIiwic3RvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJoYXNCaWdJbnRTdXBwb3J0IiwiQmlnSW50IiwiJG5hdkhlYWRlciIsInN0aWNreU5hdmlnYXRpb25UcmFuc2l0aW9uUG9pbnQiLCJ0ZW1wbGF0ZUNhY2hlIiwiZ29vZ2xlTWFwU3R5bGVzIiwiZmVhdHVyZVR5cGUiLCJlbGVtZW50VHlwZSIsInN0eWxlcnMiLCJjb2xvciIsInZpc2liaWxpdHkiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwiaXNSdGwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldENhY2hlZFNjcmlwdCIsInVybCIsIm5ld09wdGlvbnMiLCJkYXRhVHlwZSIsImNhY2hlIiwiYWpheCIsImdldEhlaWdodCIsImVsZW0iLCJjbGllbnRIZWlnaHQiLCJnZXRTdGlja3lOYXZIZWlnaHQiLCJ5UG9zIiwib2xkQ2FsY3VsYXRpb24iLCJ5UG9zaXRpb24iLCJzaGFyZWRIZWFkZXIiLCIkaGVhZGVyIiwiJGluUGFnZU5hdiIsIiRpblBhZ2VOYXZTdGlja3kiLCIkaW5QYWdlTmF2QmFyIiwiZHhOYXZQcmltYXJ5IiwiYnJlYWtwb2ludCIsImNoZWNrU3RpY2t5TmF2IiwiaW5QYWdlTmF2VG9wIiwiaXNTdGlja3lOYXYiLCJvbGROYXZCcmVha3BvaW50Iiwid2luZG93V2lkdGgiLCJnZXROYXZpZ2F0aW9uSGVpZ2h0IiwiZ2V0TmFhU0hlaWdodCIsIm9sZCIsInByaW1hcnlOYXZIZWlnaHQiLCJwYXJzZUludCIsImJyZWFkY3J1bWJOYXZIZWlnaHQiLCJub3RpZmljYXRpb25IZWlnaHQiLCJpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJtYXgiLCJnZXRTdGlja3lOYXZIZWlnaHRWMiIsInNjcm9sbFRvIiwiZWFzaW5nIiwiaWdub3JlU3RpY2t5TmF2IiwieU9mZnNldCIsIm5ld0R1cmF0aW9uIiwibmV3Q2FsbGJhY2siLCJuZXdFYXNpbmciLCJwb3NpdGlvbiIsIiR0YXJnZXRFbCIsInByb21pc2UiLCJjaGVja0RlZXBMaW5rIiwiaHJlZiIsImRlZXBMaW5rIiwic3BlZWQiLCJoYXNoUG9zIiwic3Vic3RyaW5nIiwibG9jYXRpb24iLCJhY2NvcmRpb25QYXJlbnQiLCJjbG9zZXN0IiwiYWNjb3JkaW9uVGl0bGUiLCJoYXNDbGFzcyIsIiRjb250YWluZXIiLCIkdGFicyIsIiR0YWJMaW5rcyIsInRhYkluZGV4IiwiZWwiLCIkbG9jYXRpb24iLCJhY2NvcmRpb25IZWFkZXIiLCJpcyIsImVycm9yIiwiaXNQYWdlSW5JZnJhbWUiLCJzZWxmIiwiaW5zaWRlVGFiYmVkQ29udGFpbmVyIiwiaXNJbnNpZGVUYWJiZWRDb250YWluZXIiLCJtb2JpbGVBY2NvcmRpb25zQWN0aXZhdGVkIiwicmVtb3ZlSFRNTFRhZ3MiLCJzIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZ2V0VXJsUGFyYW1ldGVyIiwic1BhcmFtIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic1BhZ2VVUkwiLCJzZWFyY2giLCJzVVJMVmFyaWFibGVzIiwic3BsaXQiLCJzUGFyYW1ldGVyU3BsaXQiLCJhZGRQYXJhbWV0ZXJUb1VSTCIsInBhcmFtIiwibmV3VXJsIiwiZ2V0T2JqZWN0S2V5cyIsIm9iaiIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJjYW52YXNEcmF3QmdDb3ZlciIsImN0eCIsImltZyIsIngiLCJ5IiwidyIsImgiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImFyZ3VtZW50cyIsImNhbnZhcyIsIml3IiwiaWgiLCJyIiwibWluIiwibnciLCJuaCIsImN4IiwiY3kiLCJjdyIsImNoIiwiYXIiLCJkcmF3SW1hZ2UiLCJoYXNQbGFjZWhvbGRlclN1cHBvcnQiLCJpc1BhZ2VJblhQTUZyYW1lIiwiVHJpZGlvbiIsIldlYiIsIlVJIiwiU2l0ZUVkaXQiLCJlbGVtZW50SW5WaWV3cG9ydCIsImFkanVzdCIsIndpbmRvd0lubmVySGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwiYWRqdXN0VG9wIiwiYWRqdXN0Qm90dG9tIiwiZWxPZmZzZXQiLCJlbFRvcCIsImVsQm90dG9tIiwiZGVmYXVsdEFkanVzdCIsInZpZXdwb3J0Qm90dG9tIiwiYm90dG9tIiwiZ2V0UmFuZG9tU3RyaW5nIiwiZm9ybWF0dGVkTGVuZ3RoIiwiY2hhcnMiLCJjaG9zZW4iLCJjaGFyQXQiLCJqb2luIiwiZ2V0RWFzaW5nVmFsdWUiLCJyYXRpbyIsImZvcm1hdHRlZFJhdGlvIiwicmFkaWFucyIsIlBJIiwiY29zIiwiZGlzYWJsZVNjcm9sbCIsImVuYWJsZVNjcm9sbCIsImxpbWl0TnVtYmVyIiwidmFsdWUiLCJvbGRNaW4iLCJsb2FkSWdub3JlZFJlc3BvbnNpdmVJbWFnZXMiLCIkaW1hZ2VzIiwicmVtb3ZlQXR0ciIsInJpY2hzcG9uc2l2ZUltYWdlIiwidGhyb3R0bGUiLCJmbiIsInRocmVzaGhvbGQiLCJzY29wZSIsInRocmVzaCIsImxhc3QiLCJkZWZlclRpbWVyIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcmdzIiwiYXBwbHkiLCJtZWFzdXJlVGV4dFdpZHRoIiwicGFyZW50IiwicGFyIiwiYm9keSIsInBhZGRpbmciLCJ3aGl0ZVNwYWNlIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjbGllbnRXaWR0aCIsImdldFRyYW5zaXRpb25FbmRFdmVudCIsInRyYW5zaXRpb25zIiwiT1RyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsInRlbXBsYXRlIiwic3RyIiwiRnVuY3Rpb24iLCJpc0luVmlld3BvcnQiLCJ3aW4iLCJ2aWV3cG9ydCIsInNjcm9sbExlZnQiLCJyaWdodCIsImJvdW5kcyIsIm91dGVyV2lkdGgiLCJzY3JvbGxJZk5vdEluVmlld3BvcnQiLCJkaXNwbGF5VG9Cb3R0b20iLCJzY3JvbGxUb1BvcyIsImlzTGFuZFJvdmVyIiwiZ2V0VGFiYmFibGUiLCJjdXN0b21TZWxlY3RvcnMiLCJkZWZhdWx0U2VsZWN0b3JzIiwic2VsZWN0b3JUeXBlcyIsImNvbmNhdCIsInNlbGVjdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaWx0ZXIiLCJzZWxlY3RvciIsInRhYmJhYmxlIiwib2Zmc2V0UGFyZW50IiwiaXNJbnZpc2libGUiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsImxvY2tUYWJiYWJsZXMiLCJ0YWJiYWJsZXMiLCJmb3JFYWNoIiwiYmFsYW5jZUVsZW1lbnRIZWlnaHQiLCJlbGVtZW50cyIsImFsbG93ZWRPZmZzZXQiLCJjb2x1bW5zIiwiZWxlbWVudHNBcnJheSIsImNhbGwiLCJoZWlnaHRUb3RhbCIsImhlaWdodHNBcnJheSIsIm1hcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJhbGFuY2VkSW5kZXgiLCJhcnJheSIsInJ1bm5pbmdUb3RhbCIsImlzUmVjdXJzaXZlIiwic3BsaXRJbmRleCIsImNvbHVtbnMxIiwiY29sdW1uczIiLCJldmVudFRyaWdnZXIiLCJldmVudFR5cGUiLCJkZXRhaWwiLCJidWJibGVzIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY29udmVydEVsZW1lbnRDb2xsZWN0aW9uVG9BcnJheSIsImNvbGxlY3Rpb24iLCJOb2RlTGlzdCIsInJhbmRvbWlzZUVsZW1lbnRzIiwiZWxlbWVudHNDb2xsZWN0aW9uIiwiY2xvbmVkRWxlbWVudHMiLCJjbG9uZU5vZGUiLCJzb3J0IiwiaW5jIiwicmVwbGFjZUNoaWxkIiwiaXNFbGVtZW50VmVydGljYWxseVNjcm9sbGFibGUiLCJzY3JvbGxIZWlnaHQiLCJjaGVja0RlZmluZWQiLCJpdGVtIiwidGFibGlzdE5hdmlnYXRpb24iLCJ0YWJsaXN0Iiwib3JpZW50YXRpb24iLCJnZXRBdHRyaWJ1dGUiLCJpc1ZlcnRpY2FsIiwidGFicyIsImZvY3VzRmlyc3RUYWIiLCJmb2N1c0xhc3RUYWIiLCJmb2N1c1ByZXZpb3VzVGFiIiwiY3VycmVudFRhYiIsImZpbmRJbmRleCIsImZvY3VzTmV4dFRhYiIsInRhYnNMZW5ndGhaZXJvSW5kZXgiLCJoYW5kbGVUYWJsaXN0S2V5ZG93bkV2ZW50cyIsImtleSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVUYWJsaXN0S2V5dXBFdmVudHMiLCJ0YWIiLCJpc0VtcHR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwicmVwbGFjZUFsbCIsInN0cmluZyIsInJlcGxhY2VtZW50IiwiZHhTZXRUaW1lb3V0IiwiY2IiLCJ0aW1lIiwiYXBwUmVhZHlFdmVudCIsImluaXRpYXRlZCIsImFwcFJlYWR5VGltZXIiLCJhZGQiLCJ0aW1lb3V0IiwiRHhSZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibG9hZGluZ1NwaW5uZXJUb2dnbGVCdXR0b25TdGF0ZUFuZENvbnRlbnQiLCJ0YXJnZXRFbGVtZW50IiwidGFnTmFtZSIsImRpc2FibGVkIiwiY2hpbGQiLCJhZGREeExvYWRpbmdTcGlubmVyIiwiaWNvbk1hcmt1cCIsImxvYWRpbmdJY29uIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJyZW1vdmVEeExvYWRpbmdTcGlubmVyIiwiYWRkRHhFbGVtZW50TG9hZGluZ1NwaW5uZXIiLCJsb2NhbFN0b3JhZ2VBdmFpbGFibGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJhZGRTY3JpcHRGb3JCYXphYXJWb2ljZSIsInNjcmlwdFVSTCIsInRyaW0iLCJiYXphYXJWb2ljZVNjcmlwdCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJlcXVhbGlzZUhlaWdodHMiLCJtYXhIZWlnaHQiLCJnZW5lcmF0ZUN1cnJlbnREYXRlIiwidG9kYXkiLCJVVEMiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsInByZXZlbnRBY3Rpb25PbkRlZXBMaW5rIiwibGlua0xvY2F0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFD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QU4sRUFGRixFQUdFSCxNQUFNSSxVQUFOLEVBSEYsRUFJRUosTUFBTUssV0FBTixFQUpGLEVBS0VMLE1BQU1NLGFBQU4sRUFMRixDQURGO0FBU0QsQ0FYTTs7QUFhQSxJQUFNQyw0REFBMEIsU0FBMUJBLHVCQUEwQixDQUFDdGhCLEtBQUQsRUFBVztBQUNoRCxNQUFNdWhCLGVBQWV2aEIsTUFBTWtlLGFBQU4sQ0FBb0JaLFlBQXBCLENBQWlDLE1BQWpDLENBQXJCO0FBQ0EsTUFBSTlNLGNBQWMrUSxZQUFkLENBQUosRUFBaUM7QUFBRXZoQixVQUFNVSxjQUFOO0FBQXlCO0FBQzdELENBSE0sQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW50ZXJpb3IzNjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0ludGVyaW9yMzYwL2pzL0ludGVyaW9yMzYwLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICghQlVHR1kgJiYgJG5hdGl2ZSkgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbiIsImltcG9ydCB7IEtleUNvZGUgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2FyaWEnO1xuaW1wb3J0IHsgZ2V0Q2FjaGVkU2NyaXB0LCBnZXRTdGlja3lOYXZIZWlnaHQgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IGlzTW9iaWxlRGV2aWNlLCBpc0JyZWFrcG9pbnRTbWFsbCwgaXNCcmVha3BvaW50TWVkaXVtLCBpc0llMTEgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2Jyb3dzZXJEZXRlY3Rpb24nO1xuXG4vKiBnbG9iYWwgalF1ZXJ5LCBjb25zb2xlLCBzaXRlLCBlbWJlZHBhbm8sIHJlbW92ZXBhbm8gKi9cblxubGV0IHBhbm9JZCA9IDA7XG5cbigoJCwgd2luZG93KSA9PiB7XG4gIGNvbnN0IEludGVyaW9yMzYwID0ge1xuICAgIGtycGFub1VSTDogJy9yZXNvdXJjZXMvcHVibGljL2pzL2xpYnMva3JwYW5vLycsXG4gICAgcGFubzogbnVsbCxcbiAgICBwYW5vSUQ6IG51bGwsXG4gICAgYnV0dG9uQ2xhc3M6ICdidXR0b24tc2Vjb25kYXJ5JyxcbiAgICBmaXJzdEZvY3VzYWJsZUNvbnRyb2w6IG51bGwsXG4gICAgZGV2aWNlQ29udHJvbHM6IG51bGwsXG4gICAgdXNlckFjdGl2YXRlZDogZmFsc2UsXG4gICAgX3dpbmRvd1dpZHRoOiBudWxsLFxuICAgIF93aW5kb3dIZWlnaHQ6IG51bGwsXG4gICAgZ3JhYlBhZGRpbmc6IDgwLFxuICAgIGd5cm9FbmFibGVkOiBmYWxzZSxcbiAgICBfaGFzTG9hZGVkOiBmYWxzZSxcbiAgICBrZXlib2FyZExpbWl0ZXI6IGZhbHNlLFxuICAgIHVpU2VsZWN0b3JzOiB7XG4gICAgICBpbnRlcmlvcjogJy5JbnRlcmlvcjM2MF9fcGFub3JhbWEnLFxuICAgICAgaW5pdENvbnRhaW5lcjogJy5JbnRlcmlvcjM2MF9fcGFub3JhbWEtaW5pdC1jb250YWluZXInLFxuICAgICAgZ2FsbGVyeUJ1dHRvbjogJy5JbnRlcmlvcjM2MF9fcGFuby1nYWxsZXJ5LWFsdGVybmF0aXZlLWxpbmsnLFxuICAgICAgem9vbUNvbnRyb2xzOiAnLkludGVyaW9yMzYwX196b29tLWNvbnRyb2xzJyxcbiAgICAgIHpvb21JbkJ1dHRvbjogJy5JbnRlcmlvcjM2MF9fem9vbS1pbicsXG4gICAgICB6b29tT3V0QnV0dG9uOiAnLkludGVyaW9yMzYwX196b29tLW91dCcsXG4gICAgICBneXJvQnV0dG9uOiAnLkludGVyaW9yMzYwX19hY2NlbGVyb21ldGVyLWNvbnRyb2wnLFxuICAgICAgcmVzZXRCdXR0b246ICcuSW50ZXJpb3IzNjBfX3Jlc2V0LWNvbnRyb2wnLFxuICAgICAgZGVza3RvcEluc3RydWN0aW9uczogJy5JbnRlcmlvcjM2MF9fcGFub3JhbWEtaW5pdC1jb250YWluZXItLWRlc2t0b3AnLFxuICAgICAgdG91Y2hJbnN0cnVjdGlvbnM6ICcuSW50ZXJpb3IzNjBfX3Bhbm9yYW1hLWluaXQtY29udGFpbmVyLS1tb2JpbGUnLFxuICAgICAgaGVhZGVyQm94OiAnLmhlYWRlckJveCdcbiAgICB9LFxuICAgIF91bmlxSWQ6IG51bGwsXG4gICAgX3Bhbm9JZDogbnVsbCxcblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnBhbm9JRCA9IGBrcnBhbm9TV0ZPYmplY3QtJHt0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJyl9YDtcbiAgICAgIHRoaXMuX3RhYmJlZENvbnRhaW5lciA9IHRoaXMuJGVsZW1lbnQucGFyZW50cygnLlRhYmJlZENvbnRhaW5lcicpLm5vdCgnW2RhdGEtdG90YWw9XCIxXCJdJyk7XG4gICAgICB0aGlzLl9pc0luc2lkZVRhYmJlZENvbnRhaW5lciA9IHRoaXMuX3RhYmJlZENvbnRhaW5lci5sZW5ndGg7XG4gICAgICB0aGlzLl9oYXNIZWFkZXJCb3ggPSAhIXRoaXMudWkoJ2hlYWRlckJveCcpLmxlbmd0aDtcblxuICAgICAgdGhpcy5fdW5pcUlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcblxuICAgICAgdGhpcy5kZXZpY2VDb250cm9scyA9IHRoaXMudWkoJ3pvb21Db250cm9scycpO1xuXG4gICAgICBpZiAoaXNNb2JpbGVEZXZpY2UoKSAmJiBpc0JyZWFrcG9pbnRTbWFsbCgpICYmICFpc0llMTEoKSkge1xuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzID0gJ2J1dHRvbi10ZXJ0aWFyeSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc01vYmlsZURldmljZSgpICYmICFpc0llMTEoKSkge1xuICAgICAgICB0aGlzLmRldmljZUNvbnRyb2xzID0gdGhpcy51aSgnZ3lyb0J1dHRvbicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9kZXRlcm1pbmVGaXJzdEZvY3VzYWJsZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuX3RvZ2dsZWJ1dHRvblN0eWxpbmcoKTtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZUhlaWdodCgpO1xuXG4gICAgICAkKHdpbmRvdykub24oYHJlc2l6ZS5pbnRlcmlvci0ke3RoaXMuX3VuaXFJZH1gLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9jYWxjdWxhdGVIZWlnaHQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLiRlbGVtZW50LmZpbmQoJ0ludGVyaW9yMzYwX19wYW5vcmFtYS1sb2FkLWNvbnRhaW5lcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlckFjdGl2YXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ0ludGVyaW9yMzYwX19wYW5vcmFtYS1sb2FkLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB0aGlzLl9pbml0VG9nZ2xlV3JhcHBlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0JyZWFrcG9pbnRTbWFsbCgpICYmICF0aGlzLiRlbGVtZW50LmZpbmQoJ0ludGVyaW9yMzYwX19wYW5vcmFtYS1sb2FkLWNvbnRhaW5lcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX3NldEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuX2lzSW5zaWRlVGFiYmVkQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnBhcmVudHMoJy5UYWJiZWRDb250YWluZXInKS5UYWJiZWRDb250YWluZXIoJ2FkanVzdFRhYmJlZENvbnRhaW5lckhlaWdodCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHdpbmRvdykub24oJ2Nsb3NlTm90aWZpY2F0aW9uQmFyJywgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9jYWxjdWxhdGVIZWlnaHQodHJ1ZSk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCF3aW5kb3cua3JwYW5vSlMpIHtcbiAgICAgICAgZ2V0Q2FjaGVkU2NyaXB0KGAke3RoaXMua3JwYW5vVVJMfWtycGFuby0xLjE4LjIuanNgKS5kb25lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9pbml0UGFub1NldHVwKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5pdFBhbm9TZXR1cCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfdG9nZ2xlYnV0dG9uU3R5bGluZygpIHtcbiAgICAgIHRoaXMudWkoJ2dhbGxlcnlCdXR0b24nKS5yZW1vdmVDbGFzcygnYnV0dG9uLXNlY29uZGFyeSBidXR0b24tdGVydGlhcnknKS5hZGRDbGFzcyh0aGlzLmJ1dHRvbkNsYXNzKTtcbiAgICB9LFxuXG4gICAgX2luaXRQYW5vU2V0dXAoKSB7XG4gICAgICB0aGlzLl9pbml0UGFub1ZpZXdlcigpO1xuICAgICAgdGhpcy5faW5pdFRvZ2dsZVdyYXBwZXIoKTtcbiAgICAgIHRoaXMuX2luaXRDb250cm9scygpO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlSGVpZ2h0KCk7XG4gICAgICB0aGlzLl9zZXR1cEdvQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLl9hZGRBMTF5RXZlbnRzKCk7XG4gICAgfSxcblxuICAgIF9kZXRlcm1pbmVGaXJzdEZvY3VzYWJsZUNvbnRyb2woKSB7XG4gICAgICBpZiAodGhpcy51aSgnZ2FsbGVyeUJ1dHRvbicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5maXJzdEZvY3VzYWJsZUNvbnRyb2wgPSB0aGlzLnVpKCdnYWxsZXJ5QnV0dG9uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTW9iaWxlRGV2aWNlKCkgJiYgIWlzSWUxMSgpKSB7XG4gICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVDb250cm9sID0gdGhpcy51aSgncmVzZXRCdXR0b24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVDb250cm9sID0gdGhpcy51aSgnem9vbU91dEJ1dHRvbicpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfYWRkQTExeUV2ZW50cygpIHtcbiAgICAgIHRoaXMucGFuby5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmtleWJvYXJkTGltaXRlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLkxFRlQgfHxcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuUklHSFQgfHxcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuVVAgfHxcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuRE9XTlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnREcmFnZ2luZ1Bhbm8oKTtcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRMaW1pdGVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5UQUIgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlQ29udHJvbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5wYW5vLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdG9wRHJhZ2dpbmdQYW5vKCk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRMaW1pdGVyID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5maXJzdEZvY3VzYWJsZUNvbnRyb2wub24oJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuVEFCICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLl9hY3RpdmF0ZUZvY3VzT25LcnBhbm9FbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfc2V0dXBHb0FuaW1hdGlvbigpIHtcbiAgICAgIGNvbnN0IGRpcnMgPSBbJ3VwJywgJ3JpZ2h0JywgJ2Rvd24nLCAnbGVmdCddO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgbGV0IGxhc3RDbGFzcyA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGdvID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5JbnRlcmlvcjM2MF9fbG9hZC1idXR0b24nKS5yZW1vdmVDbGFzcyhsYXN0Q2xhc3MpO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5JbnRlcmlvcjM2MF9fbG9hZC1idXR0b24nKS5hZGRDbGFzcyhkaXJzW2ldKTtcblxuICAgICAgICBsYXN0Q2xhc3MgPSBkaXJzW2ldO1xuICAgICAgICBpICs9IDE7XG5cbiAgICAgICAgaWYgKGkgPj0gZGlycy5sZW5ndGgpIHtcbiAgICAgICAgICBpID0gMDtcbiAgICAgICAgICB0aGlzLl9hbmltYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChnby5iaW5kKHRoaXMpLCAzMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9hbmltYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChnby5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5fYW5pbWF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZ28uYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgfSxcblxuICAgIF9jYWxjdWxhdGVIZWlnaHQoZm9yY2UpIHtcbiAgICAgIGxldCB1dGlsaXR5SGVpZ2h0ID0gZ2V0U3RpY2t5TmF2SGVpZ2h0KHRoaXMuJGVsZW1lbnQub2Zmc2V0KCkudG9wKTtcbiAgICAgIGxldCBjdXJyZW50SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgIC8vIGlmIGluc2lkZSB0YWJiZWQgY29udGFpbmVyLCByZW1vdmUgaGVpZ2h0IG9mIHRhYnMgb2Zmc2V0IGF0IG1vYmlsZS90YWJsZXRcbiAgICAgIGNvbnN0IG5vdERlc2t0b3AgPSBpc0JyZWFrcG9pbnRNZWRpdW0oKSB8fCBpc0JyZWFrcG9pbnRTbWFsbCgpO1xuICAgICAgaWYgKG5vdERlc2t0b3AgJiYgdGhpcy5faXNJbnNpZGVUYWJiZWRDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgdGFiT2Zmc2V0ID0gcGFyc2VGbG9hdCh0aGlzLl90YWJiZWRDb250YWluZXIuY3NzKCdtYXJnaW4tdG9wJykpO1xuICAgICAgICBjdXJyZW50SGVpZ2h0IC09IHRhYk9mZnNldDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzaXRlLnN0aWNreU5hdmlnYXRpb25FbmFibGVkKSB7XG4gICAgICAgIHV0aWxpdHlIZWlnaHQgPSAkKCcjaGVhZGVyJykuaGVpZ2h0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKHRoaXMuX3dpbmRvd1dpZHRoID09PSBjdXJyZW50V2lkdGggJiYgaXNNb2JpbGVEZXZpY2UoKSAmJiAhaXNJZTExKCkpIHx8IGZvcmNlKSB7XG4gICAgICAgIGxldCBwYW5vMzYwSGVpZ2h0ID0gY3VycmVudEhlaWdodCAtIHV0aWxpdHlIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGlzQnJlYWtwb2ludFNtYWxsKCkpIHtcbiAgICAgICAgICBwYW5vMzYwSGVpZ2h0ID0gTWF0aC5mbG9vcig5IC8gKDE2IC8gJCh3aW5kb3cpLndpZHRoKCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9pc0luc2lkZVRhYmJlZENvbnRhaW5lcikge1xuICAgICAgICAgIGxldCBoZWlnaHQgPSBwYW5vMzYwSGVpZ2h0O1xuXG4gICAgICAgICAgaWYgKGlzQnJlYWtwb2ludFNtYWxsKCkgJiYgdGhpcy5faGFzSGVhZGVyQm94KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLkludGVyaW9yMzYwX19wYW5vcmFtYS1ob2xkZXInKS5oZWlnaHQocGFubzM2MEhlaWdodCk7XG5cbiAgICAgICAgaWYgKGlzQnJlYWtwb2ludFNtYWxsKCkpIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5JbnRlcmlvcjM2MF9fcGFub3JhbWEnKS5jc3MoJ29wYWNpdHknLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5JbnRlcmlvcjM2MF9fcGFub3JhbWEnKS5oZWlnaHQocGFubzM2MEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jZW50ZXJIZWFkZXJCb3goKTtcblxuICAgICAgICBpZiAoaXNCcmVha3BvaW50U21hbGwoKSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCcuSW50ZXJpb3IzNjBfX3Bhbm9yYW1hJykuaGVpZ2h0KHBhbm8zNjBIZWlnaHQpLmNzcygnb3BhY2l0eScsIDEpO1xuICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fd2luZG93V2lkdGggPSBjdXJyZW50V2lkdGg7XG4gICAgICAgIHRoaXMuX3dpbmRvd0hlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9zZXRGdWxsc2NyZWVuKCkge1xuICAgICAgbGV0IHV0aWxpdHlIZWlnaHQgPSBnZXRTdGlja3lOYXZIZWlnaHQodGhpcy4kZWxlbWVudC5vZmZzZXQoKS50b3ApO1xuICAgICAgY29uc3QgY3VycmVudEhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuICAgICAgaWYgKCFzaXRlLnN0aWNreU5hdmlnYXRpb25FbmFibGVkKSB7XG4gICAgICAgIHV0aWxpdHlIZWlnaHQgPSAkKCcjaGVhZGVyJykuaGVpZ2h0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhbm8zNjBIZWlnaHQgPSBjdXJyZW50SGVpZ2h0IC0gdXRpbGl0eUhlaWdodDtcblxuICAgICAgaWYgKHRoaXMuX2lzSW5zaWRlVGFiYmVkQ29udGFpbmVyICYmIGlzQnJlYWtwb2ludFNtYWxsKCkpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5oZWlnaHQocGFubzM2MEhlaWdodCk7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQucGFyZW50cygnLlRhYmJlZENvbnRhaW5lcicpLlRhYmJlZENvbnRhaW5lcignYWRqdXN0TmF2UG9zaXRpb24nLCBwYW5vMzYwSGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQnJlYWtwb2ludFNtYWxsKCkpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCcuSW50ZXJpb3IzNjBfX3Bhbm9yYW1hJykuY3NzKCdvcGFjaXR5JywgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5JbnRlcmlvcjM2MF9fcGFub3JhbWEnKS5oZWlnaHQocGFubzM2MEhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLkludGVyaW9yMzYwX19wYW5vcmFtYS1ob2xkZXInKS5oZWlnaHQocGFubzM2MEhlaWdodCk7XG4gICAgICB0aGlzLl9oaWRlSGVhZGVyQm94KCk7XG5cbiAgICAgIGlmIChpc0JyZWFrcG9pbnRTbWFsbCgpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLkludGVyaW9yMzYwX19wYW5vcmFtYScpLmhlaWdodChwYW5vMzYwSGVpZ2h0KTtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5JbnRlcmlvcjM2MF9fcGFub3JhbWEnKS5jc3MoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgfSwgNTUwKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2FjdGl2YXRlRm9jdXNPbktycGFub0VsZW1lbnQoKSB7XG4gICAgICAvLyBHaXZlIHRoZSBwYW5vIGZvY3VzLCBmb3IgYTExeSBrZXlib2FyZCBpbnRlcmFjdGlvbnNcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFub0lEKS5mb2N1cygpO1xuICAgICAgd2luZG93LmFjdGl2ZWtycGFub3dpbmRvdyA9IHRoaXMucGFub0lEOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfSxcblxuICAgIF9pbml0VG9nZ2xlV3JhcHBlcigpIHtcbiAgICAgIC8vIE92ZXJsYXkgdGhlIGNvbXBvbmVudCBhbmQgc2hvdyB0aGUgJ3N0YXJ0JyBidXR0b25cbiAgICAgIC8vIHBvc2l0aW9uOiB0aGlzLiRlbGVtZW50LmRhdGEoJ2xvYWRwb3NpdGlvbicpXG5cbiAgICAgIGNvbnN0IGNhcHRpb24gPSAoaXNNb2JpbGVEZXZpY2UoKSAmJiAhaXNJZTExKCkgJiYgISF0aGlzLnVpKCd0b3VjaEluc3RydWN0aW9ucycpLmxlbmd0aCkgPyB0aGlzLnVpKCd0b3VjaEluc3RydWN0aW9ucycpLnRleHQoKSA6IHRoaXMudWkoJ2Rlc2t0b3BJbnN0cnVjdGlvbnMnKS50ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGxvYWRCdXR0b24gPSAkKCc8YnV0dG9uPicsIHtcbiAgICAgICAgY2xhc3M6ICdJbnRlcmlvcjM2MF9fbG9hZC1idXR0b24nXG4gICAgICB9KS5hcHBlbmQoYFxuICAgICAgICA8c3BhbiBjbGFzcz1cIkludGVyaW9yMzYwX19pbml0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiSW50ZXJpb3IzNjBfX2luaXQtY29udGFpbmVyLWNhcHRpb25cIj4ke2NhcHRpb259PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJJbnRlcmlvcjM2MF9faW5pdC1jb250YWluZXItaWNvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkludGVyaW9yMzYwX19pY29uIEludGVyaW9yMzYwX19pY29uLS11cFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkludGVyaW9yMzYwX19pY29uIEludGVyaW9yMzYwX19pY29uLS1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiSW50ZXJpb3IzNjBfX2ljb24gSW50ZXJpb3IzNjBfX2ljb24tLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiSW50ZXJpb3IzNjBfX2ljb24gSW50ZXJpb3IzNjBfX2ljb24tLWRvd25cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgYCk7XG5cbiAgICAgIGxldCBsZWZ0ID0gJyc7XG4gICAgICBpZiAodGhpcy5faGFzSGVhZGVyQm94ICYmICFpc0JyZWFrcG9pbnRTbWFsbCgpICYmICFpc0JyZWFrcG9pbnRNZWRpdW0oKSAmJiAkKHdpbmRvdykud2lkdGgoKSA8PSAxNDAwKSB7XG4gICAgICAgIGxlZnQgPSAoKHRoaXMudWkoJ2hlYWRlckJveCcpLm9mZnNldCgpLmxlZnQgKyB0aGlzLnVpKCdoZWFkZXJCb3gnKS53aWR0aCgpKSAtIHRoaXMuJGVsZW1lbnQub2Zmc2V0KCkubGVmdCkgKyAoKHRoaXMuJGVsZW1lbnQud2lkdGgoKSAtICgodGhpcy51aSgnaGVhZGVyQm94Jykub2Zmc2V0KCkubGVmdCArIHRoaXMudWkoJ2hlYWRlckJveCcpLndpZHRoKCkpIC0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKS5sZWZ0KSkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgbG9hZEJ1dHRvbi5maW5kKCcuSW50ZXJpb3IzNjBfX2luaXQtY29udGFpbmVyJykuY3NzKHtcbiAgICAgICAgbGVmdFxuICAgICAgfSk7XG5cbiAgICAgIGxvYWRCdXR0b24ub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBvdmVybGF5XG4gICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB0aGlzLiRlbGVtZW50Lm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgJCgnLkludGVyaW9yMzYwX19wYW5vcmFtYS1sb2FkLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuXG4gICAgICAgIHRoaXMuX2FjdGl2YXRlRm9jdXNPbktycGFub0VsZW1lbnQoKTtcblxuICAgICAgICBpZiAoaXNCcmVha3BvaW50U21hbGwoKSkge1xuICAgICAgICAgIHRoaXMuX3NldEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmNzcygnaGVpZ2h0JywgZWxlbWVudEhlaWdodCk7XG4gICAgICAgICAgdGhpcy5faGlkZUhlYWRlckJveCgpO1xuICAgICAgICAgIHRoaXMuX3N0b3BEcmFnZ2luZ1Bhbm8oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xhc3MgPSAnYnV0dG9uLXNlY29uZGFyeSc7XG4gICAgICAgIHRoaXMuX3RvZ2dsZWJ1dHRvblN0eWxpbmcoKTtcblxuICAgICAgICAvLyBhY3RpdmF0ZSB1c2VyIGNvbnRyb2xzXG4gICAgICAgIHRoaXMuX2tycGFub0NvbnRyb2xzRW5hYmxlZCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnVzZXJBY3RpdmF0ZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLl9hY3RpdmVUb2dnbGUgPSBpc0JyZWFrcG9pbnRTbWFsbCgpID8gdGhpcy51aSgnaW50ZXJpb3InKSA6IHRoaXMuJGVsZW1lbnQ7XG5cbiAgICAgIGlmICh0aGlzLiRlbGVtZW50LmZpbmQoJ0ludGVyaW9yMzYwX19wYW5vcmFtYS1sb2FkLWNvbnRhaW5lcicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCdJbnRlcmlvcjM2MF9fcGFub3JhbWEtbG9hZC1jb250YWluZXInKS5odG1sKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRvZ2dsZS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJJbnRlcmlvcjM2MF9fcGFub3JhbWEtbG9hZC1jb250YWluZXJcIj48L2Rpdj4nKTtcbiAgICAgICAgJCgnLkludGVyaW9yMzYwX19wYW5vcmFtYS1sb2FkLWNvbnRhaW5lcicpLmFwcGVuZChsb2FkQnV0dG9uKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2luaXRQYW5vVmlld2VyKCkge1xuICAgICAgLy8gdmFyaWFibGVzXG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuICAgICAgY29uc3QgY29tcG9uZW50RGF0YSA9IHRoaXMuJGVsZW1lbnQuZGF0YSgpO1xuICAgICAgY29uc3QgaW1hZ2VVUkwgPSBjb21wb25lbnREYXRhLnBhbm9pbWFnZXVybDtcblxuICAgICAgLy8gZmllbGQgb2YgdmlldyBzZXR0aW5nc1xuICAgICAgc2V0dGluZ3NbJ3ZpZXcuaGxvb2thdCddID0gY29tcG9uZW50RGF0YS5wYW5vdmlld2hsb29rYXQ7XG4gICAgICBzZXR0aW5nc1sndmlldy52bG9va2F0J10gPSBjb21wb25lbnREYXRhLnBhbm92aWV3dmxvb2thdDtcbiAgICAgIHNldHRpbmdzWyd2aWV3Lm1heHBpeGVsem9vbSddID0gY29tcG9uZW50RGF0YS5wYW5vdmlld21heHBpeGVsem9vbTtcbiAgICAgIHNldHRpbmdzWyd2aWV3LmxpbWl0dmlldyddID0gY29tcG9uZW50RGF0YS5wYW5vdmlld2xpbWl0dmlldztcbiAgICAgIHNldHRpbmdzWyd2aWV3LmZvdm1pbiddID0gY29tcG9uZW50RGF0YS5wYW5vdmlld2Zvdm1pbjtcbiAgICAgIHNldHRpbmdzWyd2aWV3LmZvdm1heCddID0gY29tcG9uZW50RGF0YS5wYW5vdmlld2Zvdm1heDtcbiAgICAgIHNldHRpbmdzWyd2aWV3LmZvdiddID0gY29tcG9uZW50RGF0YS5wYW5vdmlld2ZvdjtcbiAgICAgIHNldHRpbmdzWyd2aWV3LmZvdnR5cGUnXSA9ICdNRk9WJztcblxuICAgICAgLy8gY29udHJvbCBzZXR0aW5nc1xuICAgICAgc2V0dGluZ3NbJ2NvbnRyb2wuZm92c3BlZWQnXSA9IGNvbXBvbmVudERhdGEucGFub2NvbnRyb2xmb3ZzcGVlZDtcbiAgICAgIHNldHRpbmdzWydjb250cm9sLmZvdmZyaWN0aW9uJ10gPSBjb21wb25lbnREYXRhLnBhbm9jb250cm9sZm92ZnJpY3Rpb247XG4gICAgICBzZXR0aW5nc1snY29udHJvbC50b3VjaGZyaWN0aW9uJ10gPSBjb21wb25lbnREYXRhLnBhbm9jb250cm9sdG91Y2hmcmljdGlvbjtcbiAgICAgIHNldHRpbmdzWydjb250cm9sLnRvdWNoem9vbSddID0gY29tcG9uZW50RGF0YS5wYW5vY29udHJvbHRvdWNoem9vbTtcbiAgICAgIC8vIHNldHRpbmdzWydjb250cm9sLnVzZXJjb250cm9sJ10gPSAnb2ZmJztcblxuICAgICAgLy8gYXV0byByb3RhdGVcbiAgICAgIHNldHRpbmdzWydhdXRvcm90YXRlLmVuYWJsZWQnXSA9IGNvbXBvbmVudERhdGEucGFub2F1dG9yb3RhdGVlbmFibGVkO1xuICAgICAgc2V0dGluZ3NbJ2F1dG9yb3RhdGUud2FpdHRpbWUnXSA9IGNvbXBvbmVudERhdGEucGFub2F1dG9yb3RhdGV3YWl0dGltZTtcbiAgICAgIHNldHRpbmdzWydhdXRvcm90YXRlLnNwZWVkJ10gPSBjb21wb25lbnREYXRhLnBhbm9hdXRvcm90YXRlc3BlZWQ7XG5cbiAgICAgIC8vIHByZXZpZXcgaW1hZ2UgbG9jYXRpb25cbiAgICAgIHNldHRpbmdzWydwcmV2aWV3LnVybCddID0gYCR7aW1hZ2VVUkx9cHJldmlldy5qcGdgO1xuXG4gICAgICAvLyAzZCBvYmplY3QgdHlwZSBmb3IgaW1hZ2Ugd3JhcFxuICAgICAgc2V0dGluZ3NbJ2ltYWdlLnR5cGUnXSA9ICdDVUJFJztcblxuICAgICAgLy8gbXVsdGkgcmVzb2x1dGlvbiBmb3Igem9vbSBsZXZlbHNcbiAgICAgIHNldHRpbmdzWydpbWFnZS5tdWx0aXJlcyddID0gJ3RydWUnO1xuICAgICAgc2V0dGluZ3NbJ2ltYWdlLnRpbGVzaXplJ10gPSA1MTI7XG5cbiAgICAgIC8qXG4gICAgICAgICogcmVzb2x1dGlvbiBtYXggem9vbVxuICAgICAgICAqXG4gICAgICAgICogTFJBLTIzOTQ2OiBDaGFuZ2VkIHRoZSBzaXplcyB0byB1c2UgdGhlIGRhdGEgYXRycmlidXRlIGFzIHRoZSBpbWFnZVxuICAgICAgICAqIHNpemUgaGFzIGNoYW5nZWQgaW4gdGhlIGxhdGVzdCBpdGVyYXRpb25zIG9mIHRoZSBrcnBhbm8gc29mdHdhcmVcbiAgICAgICAgKiBUaGUgc2l6ZXMgYXJlOiAzMjAwIChuZXcpIDMxODQgKG9sZCkuXG4gICAgICAqL1xuICAgICAgc2V0dGluZ3NbXCJpbWFnZS5sZXZlbFsnMCddLnRpbGVkaW1hZ2V3aWR0aFwiXSA9IGNvbXBvbmVudERhdGEubWF4em9vbXNpemU7XG4gICAgICBzZXR0aW5nc1tcImltYWdlLmxldmVsWycwJ10udGlsZWRpbWFnZWhlaWdodFwiXSA9IGNvbXBvbmVudERhdGEubWF4em9vbXNpemU7XG4gICAgICBzZXR0aW5nc1tcImltYWdlLmxldmVsWycwJ10uY3ViZS51cmxcIl0gPSBgJHtpbWFnZVVSTH1tcmVzXyVzbDNfJXZfbDNfJXNfJXZfJWguanBnYDtcblxuICAgICAgLy8gcmVzb2x1dGlvbiBtaWRkbGUgem9vbVxuICAgICAgc2V0dGluZ3NbXCJpbWFnZS5sZXZlbFsnMSddLnRpbGVkaW1hZ2V3aWR0aFwiXSA9IDE1MzY7XG4gICAgICBzZXR0aW5nc1tcImltYWdlLmxldmVsWycxJ10udGlsZWRpbWFnZWhlaWdodFwiXSA9IDE1MzY7XG4gICAgICBzZXR0aW5nc1tcImltYWdlLmxldmVsWycxJ10uY3ViZS51cmxcIl0gPSBgJHtpbWFnZVVSTH1tcmVzXyVzbDJfJXZfbDJfJXNfJXZfJWguanBnYDtcblxuICAgICAgLy8gcmVzb2x1dGlvbiBtaW4gem9vbVxuICAgICAgc2V0dGluZ3NbXCJpbWFnZS5sZXZlbFsnMiddLnRpbGVkaW1hZ2V3aWR0aFwiXSA9IDc2ODtcbiAgICAgIHNldHRpbmdzW1wiaW1hZ2UubGV2ZWxbJzInXS50aWxlZGltYWdlaGVpZ2h0XCJdID0gNzY4O1xuICAgICAgc2V0dGluZ3NbXCJpbWFnZS5sZXZlbFsnMiddLmN1YmUudXJsXCJdID0gYCR7aW1hZ2VVUkx9bXJlc18lc2wxXyV2X2wxXyVzXyV2XyVoLmpwZ2A7XG5cbiAgICAgIC8vIHJlc29saXRpb24gLSBtb2JpbGUgaW1hZ2VzXG4gICAgICBzZXR0aW5nc1snbW9iaWxlLmN1YmUudXJsJ10gPSBgJHtpbWFnZVVSTH1tb2JpbGVfJXMuanBnYDtcblxuICAgICAgaWYgKGlzTW9iaWxlRGV2aWNlKCkgJiYgIWlzSWUxMSgpKSB7XG4gICAgICAgIC8vIGd5cm8gcGx1Z2luXG4gICAgICAgIHNldHRpbmdzWydwbHVnaW5bZ3lyb10ubmFtZSddID0gJ2d5cm8nO1xuICAgICAgICBzZXR0aW5nc1sncGx1Z2luW2d5cm9dLmRldmljZXMnXSA9ICdodG1sNSc7XG4gICAgICAgIHNldHRpbmdzWydwbHVnaW5bZ3lyb10udXJsJ10gPSBgJHt0aGlzLmtycGFub1VSTH1rcnBhbm8tZ3lyby0xLjE2LjYuanNgO1xuICAgICAgICBzZXR0aW5nc1sncGx1Z2luW2d5cm9dLmVuYWJsZWQnXSA9ICdmYWxzZSc7XG4gICAgICAgIHNldHRpbmdzWydwbHVnaW5bZ3lyb10uY2Ftcm9sbCddID0gJ2ZhbHNlJztcbiAgICAgICAgc2V0dGluZ3NbJ3BsdWdpbltneXJvXS5mcmljdGlvbiddID0gMC4yO1xuICAgICAgICBzZXR0aW5nc1sncGx1Z2luW2d5cm9dLnZlbGFzdGljJ10gPSAwO1xuICAgICAgfVxuXG4gICAgICAvLyBldmVudHNcbiAgICAgIHNldHRpbmdzWydldmVudHMub252aWV3Y2hhbmdlZCddID0gKCkgPT4geyB0aGlzLl9jaGVja1pvb21CdXR0b24oKTsgfTtcbiAgICAgIHNldHRpbmdzWydldmVudHMub25tb3VzZWRvd24nXSA9ICgpID0+IHsgdGhpcy5fc3RhcnREcmFnZ2luZ1Bhbm8oKTsgfTtcbiAgICAgIHNldHRpbmdzWydldmVudHMub25tb3VzZXVwJ10gPSAoKSA9PiB7IHRoaXMuX3N0b3BEcmFnZ2luZ1Bhbm8oKTsgfTtcblxuICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuZmluZCgnLkludGVyaW9yMzYwX19wYW5vcmFtYScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5JbnRlcmlvcjM2MF9fcGFub3JhbWEtaG9sZGVyJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cIkludGVyaW9yMzYwX19wYW5vcmFtYVwiPjwvZGl2PicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5JbnRlcmlvcjM2MF9fcGFub3JhbWEnKVswXS5pZCA9IGBwYW5vXyR7cGFub0lkfWA7XG5cbiAgICAgIGlmICh0aGlzLl9wYW5vSWQpIHtcbiAgICAgICAgcmVtb3ZlcGFubyh0aGlzLl9wYW5vSWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWJlZCB0aGUgcGFub3JhbWFcbiAgICAgIGVtYmVkcGFubyh7XG4gICAgICAgIGlkOiB0aGlzLnBhbm9JRCxcbiAgICAgICAgc3dmOiBgJHt0aGlzLmtycGFub1VSTH1wYW5vLnN3ZmAsXG4gICAgICAgIHhtbDogYCR7dGhpcy5rcnBhbm9VUkx9cGFuby54bWxgLFxuICAgICAgICB0YXJnZXQ6IGBwYW5vXyR7cGFub0lkfWAsXG4gICAgICAgIGh0bWw1OiAncHJlZmVyJyxcbiAgICAgICAgY29uc29sZWxvZzogZmFsc2UsXG4gICAgICAgIG13aGVlbDogZmFsc2UsXG4gICAgICAgIHBhc3NRdWVyeVBhcmFtZXRlcnM6IHRydWUsXG4gICAgICAgIG9uZXJyb3I6IHRoaXMuX2tycGFub0Vycm9yLFxuICAgICAgICBvbnJlYWR5OiAoKSA9PiB7IHRoaXMuX2tycGFub1JlYWR5KCk7IH0sXG4gICAgICAgIHZhcnM6IHNldHRpbmdzLFxuICAgICAgICB3bW9kZTogJ29wYXF1ZSdcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9jYWxjdWxhdGVIZWlnaHQoKTtcblxuICAgICAgdGhpcy5fcGFub0lkID0gYHBhbm9fJHtwYW5vSWR9YDtcbiAgICAgIHBhbm9JZCArPSAxO1xuXG4gICAgICAvLyBBUEkga3JwYW5vIG9iamVjdFxuICAgICAgLy8gVXNpbmcgZ2V0RWxlbWVudEJ5SWQgc3RvcHMgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIGludGVyaW9yMzYwIGZyb20gd29ya2luZyBvbiBvbmUgcGFnZVxuICAgICAgLy8gU3dpdGNoIHRvIGdldHRpbmcgb25seSBjaGlsZCBvZiB1aS5pbnRlcmlvciBzZWxlY3RvciBhbmQgdXNlIHVud3JhcHBlZCBET00gZWxlbWVudCBub3QgdGhlIGpRdWVyeSB3cmFwcGVkIHZlcnNpb25cblxuICAgICAgdGhpcy5wYW5vID0gdGhpcy4kZWxlbWVudC5maW5kKCcuSW50ZXJpb3IzNjBfX3Bhbm9yYW1hJykuY2hpbGRyZW4oJzpub3QoLkludGVyaW9yMzYwX19wYW5vcmFtYS1sb2FkLWNvbnRhaW5lciknKS5nZXQoMCk7XG5cbiAgICAgIGlmICh0aGlzLnBhbm8gJiYgdGhpcy5wYW5vLnNldCkge1xuICAgICAgICB0aGlzLnBhbm8uc2V0KCdjb250cm9sLm1vdXNldHlwZScsICdkcmFnJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hhc0xvYWRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIF9zdGFydERyYWdnaW5nUGFubygpIHtcbiAgICAgIGlmICghaXNCcmVha3BvaW50U21hbGwoKSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZHJhZ2dpbmdUaW1lcik7XG4gICAgICAgIHRoaXMuX2hpZGVIZWFkZXJCb3goKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX3N0b3BEcmFnZ2luZ1Bhbm8oKSB7XG4gICAgICBpZiAoIWlzQnJlYWtwb2ludFNtYWxsKCkpIHtcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3Jlc2V0SGVhZGVyQm94KCk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfaW5pdENvbnRyb2xzKCkge1xuICAgICAgLy8gSW5pdGF0ZSBidXR0b25cbiAgICAgIHRoaXMudWkoJ2d5cm9CdXR0b24nKS5vbignY2xpY2sgdGFwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmd5cm9FbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy5fa3JwYW5vR3lyb0Rpc2FibGVkKCk7XG4gICAgICAgICAgdGhpcy5neXJvRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2tycGFub0d5cm9FbmFibGVkKCk7XG4gICAgICAgICAgdGhpcy5neXJvRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBab29tIGluIGJ1dHRvbiAoZXZlbnRzIGZvciBkZXNrdG9wIG9ubHkpXG4gICAgICB0aGlzLnVpKCd6b29tSW5CdXR0b24nKVxuICAgICAgICAubW91c2V1cCgoKSA9PiB7IHRoaXMuX2tycGFub1N0b3Bab29tKCk7IH0pXG4gICAgICAgIC5tb3VzZWRvd24oKCkgPT4geyB0aGlzLl9rcnBhbm9ab29tSW4oKTsgfSlcbiAgICAgICAgLmNsaWNrKCgpID0+IHsgdGhpcy5fa3JwYW5vWm9vbUluKCk7IH0pO1xuXG4gICAgICAvLyBab29tIG91dCBidXR0b24gKGV2ZW50cyBmb3IgZGVza3RvcCBvbmx5KVxuICAgICAgdGhpcy51aSgnem9vbU91dEJ1dHRvbicpXG4gICAgICAgIC5tb3VzZXVwKCgpID0+IHsgdGhpcy5fa3JwYW5vU3RvcFpvb20oKTsgfSlcbiAgICAgICAgLm1vdXNlZG93bigoKSA9PiB7IHRoaXMuX2tycGFub1pvb21PdXQoKTsgfSlcbiAgICAgICAgLmNsaWNrKCgpID0+IHsgdGhpcy5fa3JwYW5vWm9vbU91dCgpOyB9KTtcblxuICAgICAgLy8gcmVzZXQgYnV0dG9uXG4gICAgICB0aGlzLnVpKCdyZXNldEJ1dHRvbicpLm9uKCdjbGljayB0YXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfa3JwYW5vUmVhZHkoKSB7XG4gICAgICAvLyBDaGVjayBpbml0aWFsIHpvb20gYnV0dG9uIHN0YXRlc1xuICAgICAgdGhpcy5fY2hlY2tab29tQnV0dG9uKCk7XG4gICAgfSxcblxuICAgIF9rcnBhbm9FcnJvcihlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH0sXG5cbiAgICBfa3JwYW5vQ29udHJvbHNFbmFibGVkKCkge1xuICAgICAgaWYgKHRoaXMucGFubykge1xuICAgICAgICB0aGlzLnBhbm8uc2V0KCdjb250cm9sLnVzZXJjb250cm9sJywgJ2FsbCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRldmljZUNvbnRyb2xzLnNob3coKS50cmFuc2l0aW9uKHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDUwMCB9LCAnZWFzZScpO1xuICAgICAgdGhpcy51aSgncmVzZXRCdXR0b24nKS5zaG93KCkudHJhbnNpdGlvbih7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA1MDAgfSwgJ2Vhc2UnKTtcbiAgICB9LFxuXG4gICAgX2tycGFub0d5cm9FbmFibGVkKCkge1xuICAgICAgdGhpcy51aSgnZ3lyb0J1dHRvbicpLmFkZENsYXNzKCdneXJvLWVuYWJsZWQnKTtcbiAgICAgIHRoaXMudWkoJ2d5cm9CdXR0b24nKS5hdHRyKCdhcmlhLWxhYmVsJywgdGhpcy51aSgnZ3lyb0J1dHRvbicpLmF0dHIoJ2RhdGEtYXJpYS1sYWJlbC1hY3RpdmUnKSk7XG5cbiAgICAgIGlmICh0aGlzLnBhbm8pIHtcbiAgICAgICAgdGhpcy5wYW5vLnNldCgncGx1Z2luW2d5cm9dLmVuYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfa3JwYW5vR3lyb0Rpc2FibGVkKCkge1xuICAgICAgdGhpcy51aSgnZ3lyb0J1dHRvbicpLnJlbW92ZUNsYXNzKCdneXJvLWVuYWJsZWQnKTtcbiAgICAgIHRoaXMudWkoJ2d5cm9CdXR0b24nKS5hdHRyKCdhcmlhLWxhYmVsJywgdGhpcy51aSgnZ3lyb0J1dHRvbicpLmF0dHIoJ2RhdGEtYXJpYS1sYWJlbC1pbmFjdGl2ZScpKTtcblxuICAgICAgaWYgKHRoaXMucGFubykge1xuICAgICAgICB0aGlzLnBhbm8uc2V0KCdwbHVnaW5bZ3lyb10uZW5hYmxlZCcsICdmYWxzZScpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfa3JwYW5vQXV0b3JvdGF0ZUVuYWJsZWQoKSB7XG4gICAgICBpZiAodGhpcy5wYW5vKSB7XG4gICAgICAgIHRoaXMucGFuby5zZXQoJ2F1dG9yb3RhdGUuZW5hYmxlZCcsICd0cnVlJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9rcnBhbm9BdXRvcm90YXRlRGlzYWJsZWQoKSB7XG4gICAgICBpZiAodGhpcy5wYW5vKSB7XG4gICAgICAgIHRoaXMucGFuby5zZXQoJ2F1dG9yb3RhdGUuZW5hYmxlZCcsICdmYWxzZScpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfa3JwYW5vWm9vbUluKCkge1xuICAgICAgaWYgKHRoaXMucGFubykge1xuICAgICAgICB0aGlzLnBhbm8uc2V0KCdmb3ZfbW92ZWZvcmNlJywgJy0xJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9rcnBhbm9ab29tT3V0KCkge1xuICAgICAgaWYgKHRoaXMucGFubykge1xuICAgICAgICB0aGlzLnBhbm8uc2V0KCdmb3ZfbW92ZWZvcmNlJywgJysxJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9rcnBhbm9TdG9wWm9vbSgpIHtcbiAgICAgIGlmICh0aGlzLnBhbm8pIHtcbiAgICAgICAgdGhpcy5wYW5vLnNldCgnZm92X21vdmVmb3JjZScsIDApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfY2hlY2tab29tQnV0dG9uKCkge1xuICAgICAgaWYgKHRoaXMucGFubykge1xuICAgICAgICAvLyBjaGVjayB6b29tIGluIHN0YXR1c1xuICAgICAgICBpZiAodGhpcy5wYW5vLmdldCgndmlldy5mb3YnKSA9PT0gdGhpcy5wYW5vLmdldCgndmlldy5mb3ZtaW4nKSkge1xuICAgICAgICAgIHRoaXMudWkoJ3pvb21JbkJ1dHRvbicpLnJlbW92ZUNsYXNzKCdlbmFibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51aSgnem9vbUluQnV0dG9uJykuYWRkQ2xhc3MoJ2VuYWJsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIHpvb20gb3V0IHN0YXR1c1xuICAgICAgICBpZiAodGhpcy5wYW5vLmdldCgndmlldy5mb3YnKSA9PT0gdGhpcy5wYW5vLmdldCgndmlldy5mb3ZtYXgnKSkge1xuICAgICAgICAgIHRoaXMudWkoJ3pvb21PdXRCdXR0b24nKS5yZW1vdmVDbGFzcygnZW5hYmxlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudWkoJ3pvb21PdXRCdXR0b24nKS5hZGRDbGFzcygnZW5hYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9vbkVudGVyVmlld3BvcnQoKSB7IC8vIFRPRE86IG5lZWQgdG8gdHJhY2sgdGhpcyBjb21wb25lbnQgZm9yIHRoZXNlIHRvIGJlIHVzZWRcbiAgICAgIHRoaXMuX2FjdGl2YXRlKCk7XG4gICAgfSxcblxuICAgIF9vbkV4aXRWaWV3cG9ydCgpIHsgLy8gVE9ETzogbmVlZCB0byB0cmFjayB0aGlzIGNvbXBvbmVudCBmb3IgdGhlc2UgdG8gYmUgdXNlZFxuICAgICAgdGhpcy5fZGVhY3RpdmF0ZSgpO1xuICAgIH0sXG5cbiAgICBfYWN0aXZhdGUoKSB7XG4gICAgICBpZiAodGhpcy51c2VyQWN0aXZhdGVkKSB7XG4gICAgICAgIGlmICh0aGlzLmd5cm9FbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy5fa3JwYW5vR3lyb0VuYWJsZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50LmRhdGEoJ3Bhbm9hdXRvcm90YXRlZW5hYmxlZCcpKSB7XG4gICAgICAgICAgdGhpcy5fa3JwYW5vQXV0b3JvdGF0ZUVuYWJsZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZGVhY3RpdmF0ZSgpIHtcbiAgICAgIHRoaXMuX2tycGFub0d5cm9EaXNhYmxlZCgpO1xuICAgICAgdGhpcy5fa3JwYW5vQXV0b3JvdGF0ZURpc2FibGVkKCk7XG4gICAgfSxcblxuICAgIF9yZXNldCgpIHtcbiAgICAgIC8vIHJlc2V0IGtycGFubyBwbHVnaW5cbiAgICAgIGlmICh0aGlzLnBhbm8pIHtcbiAgICAgICAgdGhpcy5fZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmd5cm9FbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFuby5zZXQoJ3ZpZXcuaGxvb2thdCcsIHRoaXMuJGVsZW1lbnQuZGF0YSgncGFub3ZpZXdobG9va2F0JykpO1xuICAgICAgICB0aGlzLnBhbm8uc2V0KCd2aWV3LnZsb29rYXQnLCB0aGlzLiRlbGVtZW50LmRhdGEoJ3Bhbm92aWV3dmxvb2thdCcpKTtcbiAgICAgICAgdGhpcy5wYW5vLnNldCgndmlldy5mb3YnLCB0aGlzLiRlbGVtZW50LmRhdGEoJ3Bhbm92aWV3Zm92JykpO1xuICAgICAgfVxuXG4gICAgICAvLyByZXNldCB2aWV3XG4gICAgICB0aGlzLnVzZXJBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnZ2luZ1RpbWVyKTtcbiAgICAgIHRoaXMuX3Jlc2V0SGVhZGVyQm94KCk7XG4gICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdlbmFibGVkJyk7XG5cbiAgICAgIHRoaXMuYnV0dG9uQ2xhc3MgPSAnYnV0dG9uLXNlY29uZGFyeSc7XG4gICAgICBpZiAoaXNNb2JpbGVEZXZpY2UoKSAmJiBpc0JyZWFrcG9pbnRTbWFsbCgpICYmICFpc0llMTEoKSkge1xuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzID0gJ2J1dHRvbi10ZXJ0aWFyeSc7XG4gICAgICB9XG4gICAgICB0aGlzLl90b2dnbGVidXR0b25TdHlsaW5nKCk7XG5cbiAgICAgIHRoaXMuZGV2aWNlQ29udHJvbHMudHJhbnNpdGlvbih7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxMDAgfSwgJ2Vhc2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGV2aWNlQ29udHJvbHMuaGlkZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudWkoJ3Jlc2V0QnV0dG9uJykudHJhbnNpdGlvbih7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxMDAgfSwgJ2Vhc2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudWkoJ3Jlc2V0QnV0dG9uJykuaGlkZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc0JyZWFrcG9pbnRTbWFsbCgpKSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZUhlaWdodCh0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5faW5pdFRvZ2dsZVdyYXBwZXIoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2luaXRUb2dnbGVXcmFwcGVyKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jZW50ZXJIZWFkZXJCb3goKSB7XG4gICAgICBpZiAoIWlzQnJlYWtwb2ludFNtYWxsKCkgJiYgdGhpcy5faGFzSGVhZGVyQm94KSB7XG4gICAgICAgIHRoaXMudWkoJ2hlYWRlckJveCcpLndpZHRoKCdhdXRvJykuaGVpZ2h0KCdhdXRvJykuSGVhZGVyQm94KCk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gdGhpcy51aSgnaGVhZGVyQm94JykuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGhlYWRlclBvcyA9ICgodGhpcy4kZWxlbWVudC5oZWlnaHQoKSAtIGhlYWRlckhlaWdodCkgLyAyKTtcblxuICAgICAgICB0aGlzLnVpKCdoZWFkZXJCb3gnKS5jc3Moe1xuICAgICAgICAgIHRvcDogaGVhZGVyUG9zXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfaGlkZUhlYWRlckJveCgpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNIZWFkZXJCb3gpIHtcbiAgICAgICAgdGhpcy51aSgnaGVhZGVyQm94JykudHJhbnNpdGlvbih7IG9wYWNpdHk6IDAgfSwgNDAwLCAnZWFzZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnVpKCdoZWFkZXJCb3gnKS5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfcmVzZXRIZWFkZXJCb3goKSB7XG4gICAgICBpZiAodGhpcy5faGFzSGVhZGVyQm94KSB7XG4gICAgICAgIHRoaXMudWkoJ2hlYWRlckJveCcpLnNob3coKTtcbiAgICAgICAgdGhpcy51aSgnaGVhZGVyQm94JykudHJhbnNpdGlvbih7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA0MDAgfSwgJ2Vhc2UnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2Rlc3Ryb3koKSB7XG4gICAgICAkKHdpbmRvdykub2ZmKGByZXNpemUuaW50ZXJpb3ItJHt0aGlzLl91bmlxSWR9YCk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZHJhZ2dpbmdUaW1lcik7XG5cbiAgICAgIGlmICh0aGlzLiRlbGVtZW50LmZpbmQoJ0ludGVyaW9yMzYwX19wYW5vcmFtYS1sb2FkLWNvbnRhaW5lcicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCdJbnRlcmlvcjM2MF9fcGFub3JhbWEtbG9hZC1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzSW5zaWRlVGFiYmVkQ29udGFpbmVyICYmIGlzQnJlYWtwb2ludFNtYWxsKCkpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5wYXJlbnRzKCcuVGFiYmVkQ29udGFpbmVyJykuVGFiYmVkQ29udGFpbmVyKCdhZGp1c3ROYXZQb3NpdGlvbicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRldmljZUNvbnRyb2xzLmhpZGUoKTtcbiAgICAgIHRoaXMudWkoJ3Jlc2V0QnV0dG9uJykuaGlkZSgpO1xuICAgICAgdGhpcy51aSgnaGVhZGVyQm94JykuY3NzKHsgb3BhY2l0eTogMSB9KS5zaG93KCk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYW5pbWF0aW9uVGltZW91dCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc0luc2lkZVRhYmJlZENvbnRhaW5lciAmJiAhdGhpcy5faGFzTG9hZGVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9wYW5vSWQpIHtcbiAgICAgICAgICByZW1vdmVwYW5vKHRoaXMuX3Bhbm9JZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGFub0lkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgalF1ZXJ5LmNyZWF0ZUNvbXBvbmVudCgnSW50ZXJpb3IzNjAnLCBJbnRlcmlvcjM2MCk7XG5cbiAgJCgnLkludGVyaW9yMzYwJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjb21wID0gJChlbGVtZW50KTtcbiAgICBpZiAoIWNvbXAucGFyZW50cygnLlRhYmJlZENvbnRhaW5lcicpLmxlbmd0aCkge1xuICAgICAgY29tcC5JbnRlcmlvcjM2MCgpO1xuICAgIH1cbiAgfSk7XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuIiwiZXhwb3J0IGNvbnN0IEtleUNvZGUgPSB7XG4gIEJBQ0tTUEFDRTogOCxcbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIEVORDogMzUsXG4gIEVTQzogMjcsXG4gIEhPTUU6IDM2LFxuICBMRUZUOiAzNyxcbiAgUEFHRV9ET1dOOiAzNCxcbiAgUEFHRV9VUDogMzMsXG4gIFJFVFVSTjogMTMsXG4gIFJJR0hUOiAzOSxcbiAgU1BBQ0U6IDMyLFxuICBUQUI6IDksXG4gIFVQOiAzOFxufTtcbiIsImV4cG9ydCBjb25zdCBicmVha3BvaW50cyA9IHtcbiAgc21hbGw6IDc0MCxcbiAgbWVkaXVtOiA5MDAsXG4gIHdpZGVyOiAxMDAwLFxuICBjdXJyZW50OiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGV2aWNlT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gIHJldHVybiAkd2luZG93LndpZHRoKCkgPiAkd2luZG93LmhlaWdodCgpID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xufTtcblxuY29uc3QgZ2V0TGFyZ2VyQnJlYWtwb2ludCA9IHdpZHRoID0+IChcbiAgd2lkdGggPD0gYnJlYWtwb2ludHMubWVkaXVtID8gJ21lZGl1bScgOiAnbGFyZ2UnXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QnJlYWtwb2ludFNpemUgPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBvbGRDYWxjID8gJCh3aW5kb3cpLndpZHRoKCkgOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgcmV0dXJuICh3aWR0aCA8PSBicmVha3BvaW50cy5zbWFsbCkgPyAnc21hbGwnIDogZ2V0TGFyZ2VyQnJlYWtwb2ludCh3aWR0aCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcmVha3BvaW50U21hbGwgPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgcmV0dXJuIGdldEJyZWFrcG9pbnRTaXplKG9sZENhbGMpID09PSAnc21hbGwnO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQnJlYWtwb2ludE1lZGl1bSA9IChvbGRDYWxjID0gdHJ1ZSkgPT4ge1xuICByZXR1cm4gZ2V0QnJlYWtwb2ludFNpemUob2xkQ2FsYykgPT09ICdtZWRpdW0nO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlRGV2aWNlID0gKCkgPT4ge1xuICByZXR1cm4gKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbmV4cG9ydCBjb25zdCBpc05vdE1vYmlsZURldmljZSA9ICgpID0+IHtcbiAgcmV0dXJuICFpc01vYmlsZURldmljZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzVGFibGV0RGV2aWNlID0gKCkgPT4ge1xuICByZXR1cm4gLyhpcGFkfHRhYmxldHwoYW5kcm9pZCg/IS4qbW9iaWxlKSl8KHdpbmRvd3MoPyEuKnBob25lKSguKnRvdWNoKSl8a2luZGxlfHBsYXlib29rfHNpbGt8KHB1ZmZpbig/IS4qKElQfEFQfFdQKSkpKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSU9TID0gKCkgPT4ge1xuICByZXR1cm4gKC8oaXBhZHxpcGhvbmV8aXBvZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTm90SU9TID0gKCkgPT4ge1xuICByZXR1cm4gIWlzSU9TKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNXaW5kb3dzUGhvbmUgPSAoKSA9PiB7XG4gIHJldHVybiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPT0gLTEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFuZHJvaWRWZXJzaW9uID0gKCkgPT4ge1xuICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKHVhLmluZGV4T2YoJ0FuZHJvaWQnKSA+PSAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodWEuc2xpY2UodWEuaW5kZXhPZignQW5kcm9pZCcpICsgOCkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJyb3dzZXJVc2VyQWdlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlckFnZW50IH0gPSBuYXZpZ2F0b3I7XG4gIHJldHVybiB1c2VyQWdlbnQ7XG59O1xuXG5leHBvcnQgY29uc3QgZGV0ZWN0QnJvd3NlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJBZ2VudCA9IGdldEJyb3dzZXJVc2VyQWdlbnQoKTtcbiAgY29uc3QgYnJvd3NlcnMgPSB7XG4gICAgaXNDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xLFxuICAgIGlzTXNFZGdlOiB1c2VyQWdlbnQuaW5kZXhPZignRWRnZScpID4gLTEsXG4gICAgaXNFeHBsb3JlcjogdXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA+IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPiAtMSwgLy8gTVNJRSA9IElFMTAgYW5kIGJlbG93LCBUcmlkZW50ID0gSUUxMVxuICAgIGlzRmlyZWZveDogdXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xLFxuICAgIGlzU2FmYXJpOiB1c2VyQWdlbnQuaW5kZXhPZignU2FmYXJpJykgPiAtMSxcbiAgICBpc09wZXJhOiB1c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvcCcpID4gLTFcbiAgfTtcblxuICBpZiAoYnJvd3NlcnMuaXNDaHJvbWUgJiYgYnJvd3NlcnMuaXNTYWZhcmkpIHtcbiAgICBicm93c2Vycy5pc1NhZmFyaSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGJyb3dzZXJzLmlzQ2hyb21lICYmIGJyb3dzZXJzLmlzT3BlcmEpIHtcbiAgICBicm93c2Vycy5pc0Nocm9tZSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGJyb3dzZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSWUgPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdpZScpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTXNFZGdlID0gKCkgPT4ge1xuICByZXR1cm4gZGV0ZWN0QnJvd3NlcnMoKS5pc01zRWRnZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0llMTEgPSAoKSA9PiB7XG4gIHJldHVybiAoIXdpbmRvdy5BY3RpdmVYT2JqZWN0ICYmICdBY3RpdmVYT2JqZWN0JyBpbiB3aW5kb3cpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFZpZXdwb3J0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHRlc3Quc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjogZml4ZWQ7dG9wOiAwO2xlZnQ6IDA7Ym90dG9tOiAwO3JpZ2h0OiAwOyc7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGVzdCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gIGNvbnN0IGRpbXMgPSB7IHdpZHRoOiB0ZXN0Lm9mZnNldFdpZHRoLCBoZWlnaHQ6IHRlc3Qub2Zmc2V0SGVpZ2h0IH07XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0ZXN0KTtcblxuICByZXR1cm4gZGltcztcbn07XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxUb0VsZW1lbnQgPSAoZWxlbWVudCwgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgJGVsZW1lbnQgPSBlbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5ID8gZWxlbWVudCA6ICQoZWxlbWVudCk7XG5cbiAgLy8gT3B0aW9ucyBhcmUgb3B0aW9uYWxcbiAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIFNldCBkZWZhdWx0c1xuICBvcHRzID0gJC5leHRlbmQoe1xuICAgIGFkanVzdG1lbnQ6IDAsXG4gICAgZWFzZTogJ2Vhc2VPdXRTaW5lJyxcbiAgICBkdXJhdGlvbjogODAwLFxuICAgIGNvbnRhaW5lcjogJCgnYm9keSwgaHRtbCcpXG4gIH0sIG9wdHMpO1xuXG4gIC8vIEhhcyBhbiBlbGVtZW50IGJlZW4gc3VwcGxpZWQ/XG4gIGlmICgkZWxlbWVudC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBTY3JvbGwgdG8gdGhlIHRhcmdldCBlbGVtZW50IGFsbG93aW5nIGZvciB0aGUgdXRpbGl0eSBtZW51XG4gIG9wdHMuY29udGFpbmVyLnN0b3AoKS5hbmltYXRlKHtcbiAgICBzY3JvbGxUb3A6ICRlbGVtZW50Lm9mZnNldCgpLnRvcCAtIG9wdHMuYWRqdXN0bWVudFxuICB9LCBvcHRzLmR1cmF0aW9uLCBvcHRzLmVhc2UsICgpID0+IHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBGb3IgdW5pdCB0ZXN0c1xuICByZXR1cm4gb3B0cztcbn07XG5cbi8qKlxuICogRGV0ZWN0IE1vZGVybiBCcm93c2VyIGJ5IGF2YWlsYWJpbGl0eSBvZiBCaWdJbnQgZmVhdHVyZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaGFzQmlnSW50U3VwcG9ydCA9ICgpID0+IHtcbiAgcmV0dXJuICh0eXBlb2YgQmlnSW50ID09PSAnZnVuY3Rpb24nKTtcbn07XG4iLCIvKiBnbG9iYWwgYXBwUmVhZHlUaW1lciAqL1xuXG5pbXBvcnQgeyBpc0JyZWFrcG9pbnRTbWFsbCwgZ2V0QnJlYWtwb2ludFNpemUgfSBmcm9tICcuL2Jyb3dzZXJEZXRlY3Rpb24nO1xuaW1wb3J0IHsgS2V5Q29kZSB9IGZyb20gJy4vYXJpYSc7XG5cbmNvbnN0ICRuYXZIZWFkZXIgPSAkKCcjaGVhZGVyLCAuZHhuYXYtaGVhZGVyJyk7XG5leHBvcnQgY29uc3Qgc3RpY2t5TmF2aWdhdGlvbkVuYWJsZWQgPSAkbmF2SGVhZGVyLmF0dHIoJ2RhdGEtbmF2LXR5cGUnKSA9PT0gJ3N0aWNreSc7XG5leHBvcnQgY29uc3Qgc3RpY2t5TmF2aWdhdGlvblRyYW5zaXRpb25Qb2ludCA9IDIwMDtcbmNvbnN0IHRlbXBsYXRlQ2FjaGUgPSB7fTtcblxuZXhwb3J0IGNvbnN0IGdvb2dsZU1hcFN0eWxlcyA9IFtcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnIzY2NjY2NidcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdsYW5kc2NhcGUubWFuX21hZGUnLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2Y4ZjZmNCdcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdwb2knLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgdmlzaWJpbGl0eTogJ29mZidcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2FmYWJhNCdcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjZTZlNmU2J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBzYXR1cmF0aW9uOiAtMTVcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3MnLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2FmYWJhNCdcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3MnLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLmljb24nLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBzYXR1cmF0aW9uOiAtMTAwXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5sb2NhbCcsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjZmZmZmZmJ1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQubG9jYWwnLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLmljb24nLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBzYXR1cmF0aW9uOiAnNzcnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdCcsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMuaWNvbicsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIHNhdHVyYXRpb246ICctMTAwJ1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcbiAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjYzVkN2RlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAtOVxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGlzUnRsID0gKCkgPT4ge1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcbiAgcmV0dXJuIGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdydGwnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYWNoZWRTY3JpcHQgPSAodXJsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IG5ld09wdGlvbnMgPSAkLmV4dGVuZChvcHRpb25zIHx8IHt9LCB7XG4gICAgZGF0YVR5cGU6ICdzY3JpcHQnLFxuICAgIGNhY2hlOiB0cnVlLFxuICAgIHVybFxuICB9KTtcblxuICByZXR1cm4gJC5hamF4KG5ld09wdGlvbnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEhlaWdodCA9IChlbGVtKSA9PiB7XG4gIHJldHVybiAoZWxlbSA/IGVsZW0uY2xpZW50SGVpZ2h0IDogMCk7XG59O1xuXG4vLyBtYWtlIHN1cmUgdG8gcGFzcyAnb2xkQ2FsY3VsYXRpb24gPSBmYWxzZScgdG8gdXNlIHRoZSBuZXcgcmVmaW5lZCBjYWxjdWxhdGlvblxuLy8gb3IgdXNlIGdldFN0aWNreU5hdkhlaWdodFYyKClcbmV4cG9ydCBjb25zdCBnZXRTdGlja3lOYXZIZWlnaHQgPSAoeVBvcywgb2xkQ2FsY3VsYXRpb24gPSB0cnVlKSA9PiB7XG4gIGNvbnN0IHlQb3NpdGlvbiA9IHR5cGVvZiB5UG9zICE9PSAnbnVtYmVyJyA/IDAgOiB5UG9zO1xuICBjb25zdCBzaGFyZWRIZWFkZXIgPSAkKCcuZHhuYXYtaGVhZGVyJyk7XG4gIGNvbnN0ICRoZWFkZXIgPSBzaGFyZWRIZWFkZXIubGVuZ3RoID8gc2hhcmVkSGVhZGVyIDogJCgnI2hlYWRlcicpO1xuICBjb25zdCAkaW5QYWdlTmF2ID0gJCgnLkluUGFnZU5hdmlnYXRpb24nKTtcbiAgY29uc3QgJGluUGFnZU5hdlN0aWNreSA9ICQoJy5JblBhZ2VOYXZpZ2F0aW9uLS1zdGlja3knKTtcbiAgY29uc3QgJGluUGFnZU5hdkJhciA9ICQoJy5JblBhZ2VOYXZpZ2F0aW9uX19iYXInKTtcbiAgY29uc3QgZHhOYXZQcmltYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR4bmF2X19wcmltYXJ5Jyk7XG4gIGNvbnN0IGJyZWFrcG9pbnQgPSBnZXRCcmVha3BvaW50U2l6ZSgpO1xuICBjb25zdCBjaGVja1N0aWNreU5hdiA9ICRoZWFkZXIubGVuZ3RoID4gMCA/ICRoZWFkZXIuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnIDogZmFsc2U7XG4gIGNvbnN0IGluUGFnZU5hdlRvcCA9ICRpblBhZ2VOYXYubGVuZ3RoID4gMCA/ICRpblBhZ2VOYXYub2Zmc2V0KCkudG9wIDogbnVsbDtcbiAgY29uc3QgaXNTdGlja3lOYXYgPSBzaGFyZWRIZWFkZXIubGVuZ3RoID8gdHJ1ZSA6IGNoZWNrU3RpY2t5TmF2O1xuICBsZXQgaGVpZ2h0ID0gMDtcblxuICBpZiAoIWlzU3RpY2t5TmF2KSB7XG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIC8vIGhhcmQgY29kaW5nIHZhbHVlcyBoZXJlIHRvIHByZXZlbnQgaGF2aW5nIHRvIHJlcGVhdGVkbHkgY2xvbmUgYW5kIG1lYXN1cmUgdGhlIGhlYWRlclxuICBjb25zdCBvbGROYXZCcmVha3BvaW50ID0gOTYwO1xuXG4gIC8vIGFkZGVkICRpblBhZ2VOYXYuY3NzKCdkaXNwbGF5JykgY2hlY2sgZm9yIExSQS0xMDg1MVxuICBpZiAoaW5QYWdlTmF2VG9wICE9PSBudWxsICYmIHlQb3NpdGlvbiA+PSBpblBhZ2VOYXZUb3AgJiYgYnJlYWtwb2ludCA9PT0gJ2xhcmdlJyAmJiAkaW5QYWdlTmF2LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcbiAgICByZXR1cm4gJGluUGFnZU5hdi5vdXRlckhlaWdodCgpO1xuICB9XG5cbiAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAvLyB0aGlzIGlzIHRoZSBvbGQgbmF2aWdhdGlvbiwgb25seSBzaG93biB3aGVuIE5hYVMgaXMgZG93biwgaGFyZCBjb2RpbmcgdmFsdWVzIHRvIHByZXZlbnQgaGF2aW5nIHRvIGNsb25lL21lYXN1cmUgdGhlIERPTSBlbGVtZW50cyBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBjb25zdCBnZXROYXZpZ2F0aW9uSGVpZ2h0ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3dXaWR0aCA+PSBvbGROYXZCcmVha3BvaW50ICYmIHlQb3NpdGlvbiA8IDIwMCkge1xuICAgICAgcmV0dXJuIDEwNjtcbiAgICB9XG4gICAgcmV0dXJuIDUwO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hYVNIZWlnaHQgPSAob2xkKSA9PiB7XG4gICAgbGV0IHByaW1hcnlOYXZIZWlnaHQ7XG5cbiAgICBpZiAob2xkKSB7XG4gICAgICBwcmltYXJ5TmF2SGVpZ2h0ID0gZ2V0SGVpZ2h0KGR4TmF2UHJpbWFyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByaW1hcnlOYXZIZWlnaHQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR4bmF2LXNjcm9sbERvd24nKSA9PT0gbnVsbCAmJiAhJGluUGFnZU5hdlN0aWNreS5sZW5ndGgpID8gZ2V0SGVpZ2h0KGR4TmF2UHJpbWFyeSkgKyBwYXJzZUludChzaGFyZWRIZWFkZXIuY3NzKCd0b3AnKSwgMTApIDogMDtcbiAgICB9XG5cbiAgICBsZXQgYnJlYWRjcnVtYk5hdkhlaWdodCA9IGdldEhlaWdodChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHhuYXZfX2JyZWFkY3J1bWJzLWNvbnRhaW5lcicpKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25IZWlnaHQgPSBnZXRIZWlnaHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbkJhcnNXcmFwcGVyJykpO1xuICAgIGxldCBpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0ID0gMDtcbiAgICBpZiAoJGluUGFnZU5hdi5sZW5ndGgpIHtcbiAgICAgIGlmICgkaW5QYWdlTmF2U3RpY2t5Lmxlbmd0aCkge1xuICAgICAgICBicmVhZGNydW1iTmF2SGVpZ2h0ID0gMDtcbiAgICAgICAgaWYgKHBhcnNlSW50KCRpblBhZ2VOYXZCYXIuY3NzKCd0b3AnKSwgMTApID09PSAwKSB7XG4gICAgICAgICAgaW5QYWdlTmF2aWdhdGlvbkhlaWdodCA9ICRpblBhZ2VOYXYuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQoJGluUGFnZU5hdkJhci5jc3MoJ3RvcCcpLCAxMCkgPCAwKSB7XG4gICAgICAgICAgaW5QYWdlTmF2aWdhdGlvbkhlaWdodCA9IE1hdGgubWF4KCRpblBhZ2VOYXYub3V0ZXJIZWlnaHQoKSArIHBhcnNlSW50KCRpblBhZ2VOYXZCYXIuY3NzKCd0b3AnKSwgMTApLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJpbWFyeU5hdkhlaWdodCArIGJyZWFkY3J1bWJOYXZIZWlnaHQgKyBub3RpZmljYXRpb25IZWlnaHQgKyAob2xkID8gMCA6IGluUGFnZU5hdmlnYXRpb25IZWlnaHQpO1xuICB9O1xuXG4gIGlmIChzaGFyZWRIZWFkZXIubGVuZ3RoKSB7XG4gICAgaGVpZ2h0ID0gZ2V0TmFhU0hlaWdodChvbGRDYWxjdWxhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0ID0gZ2V0TmF2aWdhdGlvbkhlaWdodCgpO1xuICB9XG5cbiAgcmV0dXJuIGhlaWdodDtcbn07XG5cbi8vIHNob3VsZCBiZSB1c2VkIHVudGlsIG1lcmdlZCB3aXRoIGdldE5hdmlnYXRpb25IZWlnaHRcbmV4cG9ydCBjb25zdCBnZXRTdGlja3lOYXZIZWlnaHRWMiA9ICh5UG9zKSA9PiB7XG4gIHJldHVybiBnZXRTdGlja3lOYXZIZWlnaHQoeVBvcywgZmFsc2UpO1xufTtcblxuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG8gPSAodGFyZ2V0LCBkdXJhdGlvbiwgY2FsbGJhY2ssIGVhc2luZywgaWdub3JlU3RpY2t5TmF2LCB5T2Zmc2V0ID0gMCkgPT4ge1xuICBjb25zdCBuZXdEdXJhdGlvbiA9ICh0eXBlb2YgZHVyYXRpb24gIT09ICdudW1iZXInKSA/IDgwMCA6IGR1cmF0aW9uO1xuICBjb25zdCBuZXdDYWxsYmFjayA9ICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpID8gbnVsbCA6IGNhbGxiYWNrO1xuICBjb25zdCBuZXdFYXNpbmcgPSAodHlwZW9mIGVhc2luZyAhPT0gJ3N0cmluZycpID8gJ2Vhc2VPdXRTaW5lJyA6IGVhc2luZztcbiAgbGV0IHBvc2l0aW9uID0gMDtcblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ251bWJlcicpIHsgLy8gUHggdmFsdWVcbiAgICBwb3NpdGlvbiA9IHRhcmdldDtcbiAgfSBlbHNlIHsgLy8gRWxlbWVudFxuICAgIGNvbnN0ICR0YXJnZXRFbCA9IHRhcmdldCB8fCAkKCdib2R5Jyk7XG4gICAgcG9zaXRpb24gPSAkdGFyZ2V0RWwub2Zmc2V0KCkudG9wO1xuICB9XG5cbiAgaWYgKGlnbm9yZVN0aWNreU5hdiAhPT0gdHJ1ZSkge1xuICAgIHBvc2l0aW9uIC09IGdldFN0aWNreU5hdkhlaWdodChwb3NpdGlvbik7XG4gIH1cblxuICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoXG4gICAgeyBzY3JvbGxUb3A6IHBvc2l0aW9uICsgeU9mZnNldCB9LFxuICAgIG5ld0R1cmF0aW9uLFxuICAgIG5ld0Vhc2luZ1xuICApXG4gICAgLnByb21pc2UoKVxuICAgIC5kb25lKG5ld0NhbGxiYWNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0RlZXBMaW5rID0gKGhyZWYpID0+IHtcbiAgbGV0IGRlZXBMaW5rID0gZmFsc2U7XG4gIGNvbnN0IHNwZWVkID0gMi41O1xuXG4gIGNvbnN0IGhhc2hQb3MgPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hQb3MgKyAxIDwgaHJlZi5sZW5ndGggJiYgaGFzaFBvcyAhPT0gLTEpIHtcbiAgICBjb25zdCBpZCA9IGhyZWYuc3Vic3RyaW5nKGhhc2hQb3MsIGhyZWYubGVuZ3RoKTtcbiAgICBpZiAoJChpZCkubGVuZ3RoID09PSAxKSB7XG4gICAgICBsZXQgbG9jYXRpb24gPSAkKGlkKTtcbiAgICAgIGxldCBkdXJhdGlvbiA9IGxvY2F0aW9uLm9mZnNldCgpLnRvcCAvIHNwZWVkO1xuXG4gICAgICAvLyBMUkEtMTM3OTQgfCBBY2NvcmRpb25Db250YWluZXIgfCBPcGVuIGFjY29yZGlvbiBmaXJzdCBpZiBkZWVwbGluayBpcyBpbnNpZGVcbiAgICAgIGlmICgkKCdoZWFkIFtuYW1lPVwiYWNjb3JkaW9uT25Nb2JpbGVcIl0nKS5sZW5ndGggJiYgaXNCcmVha3BvaW50U21hbGwoKSkge1xuICAgICAgICBjb25zdCBhY2NvcmRpb25QYXJlbnQgPSBsb2NhdGlvbi5jbG9zZXN0KCcuYWNjb3JkaW9uLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IGFjY29yZGlvblRpdGxlID0gYWNjb3JkaW9uUGFyZW50LmZpbmQoJy5hY2NvcmRpb24tZ3JvdXAtdGl0bGUnKTtcblxuICAgICAgICBpZiAoYWNjb3JkaW9uUGFyZW50Lmxlbmd0aCAmJiBhY2NvcmRpb25UaXRsZS5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBPcGVuIGFjY29yZGlvbiBpZiBjbG9zZWRcbiAgICAgICAgICBpZiAoIWFjY29yZGlvblBhcmVudC5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICBhY2NvcmRpb25UaXRsZS5jbGljaygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRha2UgaW50byBhY2NvdW50IHRoZSBoZWlnaHQgb2YgdGhlIGFjY29yZGlvbiB0aXRsZVxuICAgICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb24ub2Zmc2V0KCkudG9wIC0gYWNjb3JkaW9uVGl0bGUub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgIHNjcm9sbFRvKGxvY2F0aW9uLCA4MDAsIG51bGwsICdlYXNlT3V0U2luZScpO1xuICAgICAgICAgIGRlZXBMaW5rID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxvY2F0aW9uLnBhcmVudHMoJy5UYWJiZWRDb250YWluZXInKS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGxvY2F0aW9uLmNsb3Nlc3QoJy5UYWJiZWRDb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHRhYnMgPSAkY29udGFpbmVyLmZpbmQoJy50YWInKTtcbiAgICAgICAgY29uc3QgJHRhYkxpbmtzID0gJGNvbnRhaW5lci5maW5kKCcudGFiLWxpbmsnKTtcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMDtcblxuICAgICAgICAkdGFicy5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgIGNvbnN0ICRsb2NhdGlvbiA9ICQoZWwpLmZpbmQobG9jYXRpb24pO1xuICAgICAgICAgIGlmICgkbG9jYXRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YWJJbmRleCA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGFiTGlua3MuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICBpZiAoaSA9PT0gdGFiSW5kZXgpIHtcbiAgICAgICAgICAgICQoZWwpLmNsaWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhdGlvbiA9ICRjb250YWluZXIub2Zmc2V0KCkudG9wO1xuICAgICAgICBkdXJhdGlvbiA9IGxvY2F0aW9uIC8gc3BlZWQ7XG5cbiAgICAgICAgc2Nyb2xsVG8obG9jYXRpb24sIDgwMCwgbnVsbCwgJ2Vhc2VTdGFydEZhc3RFbmRTbG93Jyk7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB9XG5cbiAgICAgIC8vIExSQS0xMjcwMSB8IEw0NjIgVGVzdCB8IE9wZW4gYWNjb3JkaW9uIGZpcnN0IGlmIGRlZXBsaW5rIGlzIGluc2lkZVxuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygndmVoaWNsZXNEaXNjb3ZlcnknKSkge1xuICAgICAgICBjb25zdCBhY2NvcmRpb25QYXJlbnQgPSBsb2NhdGlvbi5wYXJlbnRzKCcuQWNjb3JkaW9uQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKGxvY2F0aW9uKTtcblxuICAgICAgICBpZiAoYWNjb3JkaW9uUGFyZW50Lmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFjY29yZGlvbkhlYWRlciA9IGFjY29yZGlvblBhcmVudC5maW5kKCcuaGVhZGVyJyk7XG5cbiAgICAgICAgICBpZiAoIWFjY29yZGlvbkhlYWRlci5oYXNDbGFzcygnYWNjb3JkaW9uLW9wZW4nKSkge1xuICAgICAgICAgICAgYWNjb3JkaW9uSGVhZGVyLmNsaWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFjY29yZGlvbkhlYWRlci5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgaWYgKCFsb2NhdGlvbi5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgICAgIC0gYWNjb3JkaW9uSGVhZGVyLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdkaXNwbGF5JywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbi5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAtIGFjY29yZGlvbkhlYWRlci5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzY3JvbGxUbyhsb2NhdGlvbiwgZHVyYXRpb24sIG51bGwsICdlYXNlU3RhcnRGYXN0RW5kU2xvdycpO1xuICAgICAgZGVlcExpbmsgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihgQ291bGQgbm90IGZpbmQgZGVlcCBsaW5rIGVsZW1lbnQgd2l0aCBpZDogJHtpZH1gKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlZXBMaW5rOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG5leHBvcnQgY29uc3QgaXNQYWdlSW5JZnJhbWUgPSAoKSA9PiB7XG4gIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnNpZGVUYWJiZWRDb250YWluZXIgPSAoZWwpID0+IHtcbiAgY29uc3QgaXNJbnNpZGVUYWJiZWRDb250YWluZXIgPSAhIWVsLnBhcmVudHMoJy5UYWJiZWRDb250YWluZXInKS5ub3QoJ1tkYXRhLXRvdGFsPVwiMVwiXScpLmxlbmd0aDtcblxuICBpZiAoaXNJbnNpZGVUYWJiZWRDb250YWluZXIpIHtcbiAgICByZXR1cm4gZWwucGFyZW50cygnLlRhYmJlZENvbnRhaW5lcicpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vYmlsZUFjY29yZGlvbnNBY3RpdmF0ZWQgPSAoKSA9PiB7XG4gIHJldHVybiAkKCdoZWFkIFtuYW1lPVwiYWNjb3JkaW9uT25Nb2JpbGVcIl0nKS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSFRNTFRhZ3MgPSAocykgPT4ge1xuICByZXR1cm4gcy50b1N0cmluZygpLnJlcGxhY2UoL1s8Pj07XS9nLCAnJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gKHNQYXJhbSkgPT4ge1xuICBmdW5jdGlvbiBkZWNvZGUocykge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoKHMgfHwgJycpLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgfVxuXG4gIGNvbnN0IHNQYWdlVVJMID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gIGNvbnN0IHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc1VSTFZhcmlhYmxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNQYXJhbWV0ZXJTcGxpdCA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcbiAgICBpZiAoZGVjb2RlKHNQYXJhbWV0ZXJTcGxpdFswXSkgPT09IHNQYXJhbSkge1xuICAgICAgcmV0dXJuIGRlY29kZShzUGFyYW1ldGVyU3BsaXRbMV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFBhcmFtZXRlclRvVVJMID0gKHVybCwgcGFyYW0pID0+IHtcbiAgY29uc3QgbmV3VXJsID0gdXJsICsgKHVybC5zcGxpdCgnPycpWzFdID8gJyYnIDogJz8nKSArIHBhcmFtO1xuXG4gIHJldHVybiBwYXJhbSAhPT0gJycgPyBuZXdVcmwgOiB1cmw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0S2V5cyA9IChvYmopID0+IHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBmb3IgKGxldCBpIGluIG9iaikgeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGtleXMucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IGNhbnZhc0RyYXdCZ0NvdmVyID0gKGN0eCwgaW1nLCB4LCB5LCB3LCBoLCBvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgeCA9IHkgPSAwO1xuICAgIHcgPSBjdHguY2FudmFzLndpZHRoO1xuICAgIGggPSBjdHguY2FudmFzLmhlaWdodDtcbiAgfVxuXG4gIC8vIGRlZmF1bHQgb2Zmc2V0IGlzIGNlbnRlclxuICBvZmZzZXRYID0gdHlwZW9mIG9mZnNldFggPT09ICdudW1iZXInID8gb2Zmc2V0WCA6IDAuNTtcbiAgb2Zmc2V0WSA9IHR5cGVvZiBvZmZzZXRZID09PSAnbnVtYmVyJyA/IG9mZnNldFkgOiAwLjU7XG5cbiAgLy8ga2VlcCBib3VuZHMgWzAuMCwgMS4wXVxuICBpZiAob2Zmc2V0WCA8IDApIHtcbiAgICBvZmZzZXRYID0gMDtcbiAgfVxuICBpZiAob2Zmc2V0WSA8IDApIHtcbiAgICBvZmZzZXRZID0gMDtcbiAgfVxuICBpZiAob2Zmc2V0WCA+IDEpIHtcbiAgICBvZmZzZXRYID0gMTtcbiAgfVxuICBpZiAob2Zmc2V0WSA+IDEpIHtcbiAgICBvZmZzZXRZID0gMTtcbiAgfVxuXG4gIHZhciBpdyA9IGltZy53aWR0aCxcbiAgICBpaCA9IGltZy5oZWlnaHQsXG4gICAgciA9IE1hdGgubWluKHcgLyBpdywgaCAvIGloKSxcbiAgICBudyA9IGl3ICogciwgICAvLyBuZXcgcHJvcC4gd2lkdGhcbiAgICBuaCA9IGloICogciwgICAvLyBuZXcgcHJvcC4gaGVpZ2h0XG4gICAgY3gsIGN5LCBjdywgY2gsIGFyID0gMTtcblxuICAvLyBkZWNpZGUgd2hpY2ggZ2FwIHRvIGZpbGxcbiAgaWYgKG53IDwgdykge1xuICAgIGFyID0gdyAvIG53O1xuICB9XG4gIGlmIChuaCA8IGgpIHtcbiAgICBhciA9IGggLyBuaDtcbiAgfVxuICBudyAqPSBhcjtcbiAgbmggKj0gYXI7XG5cbiAgLy8gY2FsYyBzb3VyY2UgcmVjdGFuZ2xlXG4gIGN3ID0gaXcgLyAobncgLyB3KTtcbiAgY2ggPSBpaCAvIChuaCAvIGgpO1xuXG4gIGN4ID0gKGl3IC0gY3cpICogb2Zmc2V0WDtcbiAgY3kgPSAoaWggLSBjaCkgKiBvZmZzZXRZO1xuXG4gIC8vIG1ha2Ugc3VyZSBzb3VyY2UgcmVjdGFuZ2xlIGlzIHZhbGlkXG4gIGlmIChjeCA8IDApIHtcbiAgICBjeCA9IDA7XG4gIH1cbiAgaWYgKGN5IDwgMCkge1xuICAgIGN5ID0gMDtcbiAgfVxuICBpZiAoY3cgPiBpdykge1xuICAgIGN3ID0gaXc7XG4gIH1cbiAgaWYgKGNoID4gaWgpIHtcbiAgICBjaCA9IGloO1xuICB9XG5cbiAgLy8gZmlsbCBpbWFnZSBpbiBkZXN0LiByZWN0YW5nbGVcbiAgY3R4LmRyYXdJbWFnZShpbWcsIGN4LCBjeSwgY3csIGNoLCB4LCB5LCB3LCBoKTtcbn07XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmV4cG9ydCBjb25zdCBoYXNQbGFjZWhvbGRlclN1cHBvcnQgPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcmV0dXJuICgncGxhY2Vob2xkZXInIGluIGVsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1BhZ2VJblhQTUZyYW1lID0gKCkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdy5UcmlkaW9uICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LlRyaWRpb24uV2ViLlVJLlNpdGVFZGl0ICE9PSAndW5kZWZpbmVkJztcbn07XG5cbmV4cG9ydCBjb25zdCBlbGVtZW50SW5WaWV3cG9ydCA9IChlbGVtZW50LCBhZGp1c3QsIHdpbmRvd0lubmVySGVpZ2h0KSA9PiB7XG4gIGNvbnN0ICRlbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSA/IGVsZW1lbnQgOiAkKGVsZW1lbnQpO1xuXG4gIGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgJHdpbmRvdyA9ICQod2luZG93KTtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcbiAgbGV0IHdpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XG4gIGxldCBhZGp1c3RUb3A7XG4gIGxldCBhZGp1c3RCb3R0b207XG5cbiAgLy8gRWxlbWVudCBzcGVjaWZpY3NcbiAgY29uc3QgZWxPZmZzZXQgPSAkZWxlbWVudC5vZmZzZXQoKTtcbiAgY29uc3QgZWxUb3AgPSBlbE9mZnNldC50b3A7XG4gIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyAkZWxlbWVudC5oZWlnaHQoKTtcblxuICAvLyBEZWZhdWx0IHZhbHVlXG4gIGNvbnN0IGRlZmF1bHRBZGp1c3QgPSAoZ2V0QnJlYWtwb2ludFNpemUoKSA9PT0gJ3NtYWxsJykgPyAyMCA6IDUwO1xuXG4gIC8vIExSQS0xMTQ5NCBGaXggaU9TIGlzc3VlIHdpdGggd2luZG93IGhlaWdodC5cbiAgLy8gVGVtcG9yYXJpbHkgYWRkIG9wdGlvbiB0byBhbGxvdyB0aGlzIHNvIFFBIGlzIG5vdFxuICAvLyByZXF1aXJlZCBvbiBTdG9yeUdhbGxlcnkgKyBTdG9yeUFydGljbGVFbmhhbmNlZEltYWdlQmxvY2tcbiAgaWYgKHR5cGVvZiB3aW5kb3dJbm5lckhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93SW5uZXJIZWlnaHQpIHtcbiAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB3aW5kb3dIZWlnaHQ7XG4gIH1cblxuICAvLyBTZXQgdmlld3BvcnRCb3R0b21cbiAgY29uc3Qgdmlld3BvcnRCb3R0b20gPSBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQ7XG5cbiAgLy8gQWxsb3cgYWRqdXN0IHRvIGJlIHNldCBkaWZmZXJlbnQgZnJvbSB0b3AvYm90dG9tXG4gIGlmICh0eXBlb2YgYWRqdXN0ID09PSAnb2JqZWN0Jykge1xuICAgIGFkanVzdFRvcCA9IGFkanVzdC50b3A7XG4gICAgYWRqdXN0Qm90dG9tID0gYWRqdXN0LmJvdHRvbTtcbiAgfSBlbHNlIHtcbiAgICBhZGp1c3RUb3AgPSBhZGp1c3QgfHwgZGVmYXVsdEFkanVzdDtcbiAgICBhZGp1c3RCb3R0b20gPSBhZGp1c3QgfHwgZGVmYXVsdEFkanVzdDtcbiAgfVxuXG4gIHJldHVybiAoISh2aWV3cG9ydEJvdHRvbSA8IGVsVG9wICsgYWRqdXN0VG9wIHx8IHNjcm9sbFRvcCA+IGVsQm90dG9tIC0gYWRqdXN0Qm90dG9tKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tU3RyaW5nID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgZm9ybWF0dGVkTGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoLCAxMCkgfHwgMDtcbiAgZm9ybWF0dGVkTGVuZ3RoID0gZm9ybWF0dGVkTGVuZ3RoIDwgMCA/IDAgOiBmb3JtYXR0ZWRMZW5ndGg7XG5cbiAgY29uc3QgY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgY29uc3QgY2hvc2VuID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXR0ZWRMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNob3Nlbi5wdXNoKGNoYXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpKSk7XG4gIH1cblxuICByZXR1cm4gY2hvc2VuLmpvaW4oJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEVhc2luZ1ZhbHVlID0gKHJhdGlvKSA9PiB7XG4gIGxldCBmb3JtYXR0ZWRSYXRpbyA9IHJhdGlvIDwgMCA/IDAgOiByYXRpbztcbiAgZm9ybWF0dGVkUmF0aW8gPSBmb3JtYXR0ZWRSYXRpbyA+IDEgPyAxIDogZm9ybWF0dGVkUmF0aW87XG5cbiAgLy8gQ29udmVydCB0aGUgcmF0aW8gdG8gYSBudW1iZXIgb2YgcmFkaWFucy4gMCBtYXBzIHRvIC1QSSwgMC41IG1hcHMgdG9cbiAgLy8gMCwgMSBtYXBzIHRvIFBJXG4gIGNvbnN0IHJhZGlhbnMgPSAoZm9ybWF0dGVkUmF0aW8gKiAoMiAqIE1hdGguUEkpKSAtIE1hdGguUEk7XG5cbiAgLy8gQ29udmVydCB0aGlzIHRvIGEgdmFsdWUgdXNpbmcgYSBjb3NpbmUgY3VydmUuIE5vdGUgdGhhdCBjb3NpbmUgZ2l2ZXNcbiAgLy8gYSB2YWx1ZSBiZXR3ZWVuIC0xIGFuZCAxLCBzbyB3ZSBuZWVkIHRvIGFkZCAxIGFuZCBkaXZpZGUgYnkgMiB0b1xuICAvLyBrZWVwIGl0IGJldHdlZW4gMCBhbmQgMVxuICByZXR1cm4gKE1hdGguY29zKHJhZGlhbnMpICsgMSkgLyAyO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVTY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gIGNvbnN0IHNjcm9sbFRvcCA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XG5cbiAgJHdpbmRvdy5vbihcbiAgICAnc2Nyb2xsLmRpc2FibGVTY3JvbGwgbW91c2V3aGVlbC5kaXNhYmxlU2Nyb2xsIERPTU1vdXNlU2Nyb2xsLmRpc2FibGVTY3JvbGwgdG91Y2htb3ZlLmRpc2FibGVTY3JvbGwnLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICR3aW5kb3cuc2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZVNjcm9sbCA9ICgpID0+IHtcbiAgY29uc3QgJHdpbmRvdyA9ICQod2luZG93KTtcblxuICAkd2luZG93Lm9mZignc2Nyb2xsLmRpc2FibGVTY3JvbGwgbW91c2V3aGVlbC5kaXNhYmxlU2Nyb2xsIERPTU1vdXNlU2Nyb2xsLmRpc2FibGVTY3JvbGwgdG91Y2htb3ZlLmRpc2FibGVTY3JvbGwnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW1pdE51bWJlciA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IHtcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IG9sZE1pbiA9IG1pbjtcbiAgICBtaW4gPSBtYXg7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBtYXggPSBvbGRNaW47IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxuXG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkSWdub3JlZFJlc3BvbnNpdmVJbWFnZXMgPSAoJGltYWdlcykgPT4ge1xuICAkaW1hZ2VzLnJlbW92ZUF0dHIoJ2RhdGEtcGljdHVyZS1pZ25vcmUnKTtcbiAgd2luZG93LnJpY2hzcG9uc2l2ZUltYWdlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoZm4sIHRocmVzaGhvbGQsIHNjb3BlKSA9PiB7XG4gIGNvbnN0IHRocmVzaCA9IHRocmVzaGhvbGQgfHwgMjUwO1xuICBsZXQgbGFzdDtcbiAgbGV0IGRlZmVyVGltZXI7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gc2NvcGUgfHwgdGhpcztcblxuICAgIGNvbnN0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaCkge1xuICAgICAgLy8gaG9sZCBvbiB0byBpdFxuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgICAgZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH0sIHRocmVzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBub3c7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuXG4vKiogKlxuICogTWVhc3VyZSB0ZXh0IHdpZHRoIHVzaW5nIEJyb3dzZXIuXG4gKlxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBwYXJlbnRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgQ01TIFBvd2VyZWQgc29sdXRpb24gaW4gZnV0dXJlLlxuICovXG5leHBvcnQgY29uc3QgbWVhc3VyZVRleHRXaWR0aCA9ICh0ZXh0LCBwYXJlbnQpID0+IHtcbiAgaWYgKCF0ZXh0KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb25zdCBwYXIgPSBwYXJlbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgY29udGFpbmVyLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IHRleHQ7XG5cbiAgcGFyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICBwYXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcblxuICByZXR1cm4gd2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VHJhbnNpdGlvbkVuZEV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gIGNvbnN0IHRyYW5zaXRpb25zID0ge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJyBvVHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICB9O1xuXG4gIGZvciAoY29uc3QgdHJhbnNpdGlvbiBpbiB0cmFuc2l0aW9ucykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKGVsLnN0eWxlW3RyYW5zaXRpb25dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0cmFuc2l0aW9uXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gKHN0ciwgZGF0YSkgPT4ge1xuICAvLyBGaWd1cmUgb3V0IGlmIHdlJ3JlIGdldHRpbmcgYSB0ZW1wbGF0ZSwgb3IgaWYgd2UgbmVlZCB0b1xuICAvLyBsb2FkIHRoZSB0ZW1wbGF0ZSAtIGFuZCBiZSBzdXJlIHRvIGNhY2hlIHRoZSByZXN1bHQuXG4gIHZhciBmbiA9ICEvXFxXLy50ZXN0KHN0cikgP1xuICAgIHRlbXBsYXRlQ2FjaGVbc3RyXSA9IHRlbXBsYXRlQ2FjaGVbc3RyXSB8fFxuICAgIHRlbXBsYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cikuaW5uZXJIVE1MKSA6XG5cbiAgICAvLyBHZW5lcmF0ZSBhIHJldXNhYmxlIGZ1bmN0aW9uIHRoYXQgd2lsbCBzZXJ2ZSBhcyBhIHRlbXBsYXRlXG4gICAgLy8gZ2VuZXJhdG9yIChhbmQgd2hpY2ggd2lsbCBiZSBjYWNoZWQpLlxuICAgIG5ldyBGdW5jdGlvbihcIm9ialwiLFxuICAgICAgXCJ2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTtcIiArXG5cbiAgICAgIC8vIEludHJvZHVjZSB0aGUgZGF0YSBhcyBsb2NhbCB2YXJpYWJsZXMgdXNpbmcgd2l0aCgpe31cbiAgICAgIFwid2l0aChvYmope3AucHVzaCgnXCIgK1xuXG4gICAgICAvLyBDb252ZXJ0IHRoZSB0ZW1wbGF0ZSBpbnRvIHB1cmUgSmF2YVNjcmlwdFxuICAgICAgc3RyLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csIFwiIFwiKVxuICAgICAgICAucmVwbGFjZSgvJyg/PVteJV0qJT4pL2csIFwiXFx0XCIpXG4gICAgICAgIC5zcGxpdChcIidcIikuam9pbihcIlxcXFwnXCIpXG4gICAgICAgIC5zcGxpdChcIlxcdFwiKS5qb2luKFwiJ1wiKVxuICAgICAgICAucmVwbGFjZSgvPCU9KC4rPyklPi9nLCBcIicsJDEsJ1wiKVxuICAgICAgICAuc3BsaXQoXCI8JVwiKS5qb2luKFwiJyk7XCIpXG4gICAgICAgIC5zcGxpdChcIiU+XCIpLmpvaW4oXCJwLnB1c2goJ1wiKVxuICAgICAgKyBcIicpO31yZXR1cm4gcC5qb2luKCcnKTtcIik7XG5cbiAgLy8gUHJvdmlkZSBzb21lIGJhc2ljIGN1cnJ5aW5nIHRvIHRoZSB1c2VyXG4gIHJldHVybiBkYXRhID8gZm4oZGF0YSkgOiBmbjtcbn07XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmV4cG9ydCBjb25zdCBpc0luVmlld3BvcnQgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCB3aW4gPSAkKHdpbmRvdyk7XG5cbiAgY29uc3Qgdmlld3BvcnQgPSB7XG4gICAgdG9wOiB3aW4uc2Nyb2xsVG9wKCkgKyBnZXRTdGlja3lOYXZIZWlnaHQoKSxcbiAgICBib3R0b206IHdpbi5zY3JvbGxUb3AoKSArIHdpbi5oZWlnaHQoKSxcbiAgICBsZWZ0OiB3aW4uc2Nyb2xsTGVmdCgpXG4gIH07XG4gIHZpZXdwb3J0LnJpZ2h0ID0gdmlld3BvcnQubGVmdCArIHdpbi53aWR0aCgpO1xuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW1lbnQub2Zmc2V0KCk7XG4gIGJvdW5kcy5yaWdodCA9IGJvdW5kcy5sZWZ0ICsgZWxlbWVudC5vdXRlcldpZHRoKCk7XG4gIGJvdW5kcy5ib3R0b20gPSBib3VuZHMudG9wICsgZWxlbWVudC5vdXRlckhlaWdodCgpO1xuXG4gIHJldHVybiAoISh2aWV3cG9ydC5yaWdodCA8IGJvdW5kcy5sZWZ0IHx8IHZpZXdwb3J0LmxlZnQgPiBib3VuZHMucmlnaHQgfHwgdmlld3BvcnQuYm90dG9tIDwgYm91bmRzLnRvcCB8fCB2aWV3cG9ydC50b3AgPiBib3VuZHMuYm90dG9tKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsSWZOb3RJblZpZXdwb3J0ID0gKGVsZW1lbnQsIGRpc3BsYXlUb0JvdHRvbSkgPT4ge1xuICBpZiAoIWlzSW5WaWV3cG9ydChlbGVtZW50KSkge1xuICAgIC8vIE5vdCBpbiB2aWV3XG4gICAgY29uc3Qgc2Nyb2xsVG9Qb3MgPSBkaXNwbGF5VG9Cb3R0b20gPyBlbGVtZW50Lm9mZnNldCgpLnRvcCAtICQod2luZG93KS5pbm5lckhlaWdodCgpIDogKGVsZW1lbnQub2Zmc2V0KCkudG9wXG4gICAgICAtIGdldFN0aWNreU5hdkhlaWdodCgpKTtcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBzY3JvbGxUb1BvcyB9LCA4MDApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0xhbmRSb3ZlciA9ICgpID0+IHtcbiAgcmV0dXJuICEhKCQoJ2JvZHkjbGFuZHJvdmVyJykubGVuZ3RoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUYWJiYWJsZSA9IChlbGVtLCBjdXN0b21TZWxlY3RvcnMpID0+IHtcbiAgY29uc3QgZGVmYXVsdFNlbGVjdG9ycyA9IFtcbiAgICAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbaGlkZGVuXSknLFxuICAgICdzZWxlY3QnLFxuICAgICdhW2hyZWZdJyxcbiAgICAndGV4dGFyZWEnLFxuICAgICdidXR0b24nLFxuICAgICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXG4gIF07XG5cbiAgY29uc3Qgc2VsZWN0b3JUeXBlcyA9IChjdXN0b21TZWxlY3RvcnMpID8gZGVmYXVsdFNlbGVjdG9ycy5jb25jYXQoY3VzdG9tU2VsZWN0b3JzKSA6IGRlZmF1bHRTZWxlY3RvcnM7XG4gIGxldCBzZWxlY3RvcnMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JUeXBlcy5qb2luKCcsJykpO1xuICBzZWxlY3RvcnMgPSBBcnJheS5mcm9tKHNlbGVjdG9ycyk7XG4gIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5maWx0ZXIoKHNlbGVjdG9yKSA9PiB7XG4gICAgbGV0IHRhYmJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoIXNlbGVjdG9yLm9mZnNldFBhcmVudCB8fCBzZWxlY3Rvci5vZmZzZXRXaWR0aCA9PT0gMFxuICAgICAgfHwgc2VsZWN0b3Iub2Zmc2V0SGVpZ2h0ID09PSAwKSB7XG4gICAgICB0YWJiYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSW52aXNpYmxlKGVsKSB7XG4gICAgICBpZiAoZWwuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicgfHwgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRhYmJhYmxlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBpc0ludmlzaWJsZShlbC5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaXNJbnZpc2libGUoc2VsZWN0b3IpO1xuICAgIGlmICh0YWJiYWJsZSkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0b3JzO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2tUYWJiYWJsZXMgPSAodGFiYmFibGVzKSA9PiB7XG4gIHRhYmJhYmxlcy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSAhPT0gS2V5Q29kZS5UQUIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgaWYgKHRhYmJhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0YWJiYWJsZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGFiYmFibGVzW3RhYmJhYmxlcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhYmJhYmxlc1tpICsgMV0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpID09PSB0YWJiYWJsZXMubGVuZ3RoIC0gMSAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgICB0YWJiYWJsZXNbMF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICB0YWJiYWJsZXNbaSAtIDFdLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJiYWJsZXNbaSArIDFdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGJhbGFuY2VFbGVtZW50SGVpZ2h0ID0gKGVsZW1lbnRzLCBhbGxvd2VkT2Zmc2V0ID0gMCkgPT4ge1xuICBjb25zdCBjb2x1bW5zID0ge307XG4gIGlmICghZWxlbWVudHMpIHtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuICBjb25zdCBlbGVtZW50c0FycmF5ID0gW10uc2xpY2UuY2FsbChlbGVtZW50cyk7XG4gIGxldCBoZWlnaHRUb3RhbCA9IDA7XG4gIGNvbnN0IGhlaWdodHNBcnJheSA9IGVsZW1lbnRzQXJyYXkubWFwKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIGhlaWdodFRvdGFsICs9IGVsZW1lbnRIZWlnaHQ7XG4gICAgcmV0dXJuIGVsZW1lbnRIZWlnaHQ7XG4gIH0pO1xuICBjb25zdCBnZXRCYWxhbmNlZEluZGV4ID0gKGFycmF5LCB0YXJnZXQsIHJ1bm5pbmdUb3RhbCA9IDAsIGluZGV4ID0gMCkgPT4ge1xuICAgIGNvbnN0IGlzUmVjdXJzaXZlID0gISFhcnJheVtpbmRleF0gJiYgcnVubmluZ1RvdGFsICsgYXJyYXlbaW5kZXhdIDw9ICh0YXJnZXQgLSBhbGxvd2VkT2Zmc2V0KTtcbiAgICByZXR1cm4gaXNSZWN1cnNpdmUgPyBnZXRCYWxhbmNlZEluZGV4KGFycmF5LCB0YXJnZXQsIHJ1bm5pbmdUb3RhbCArIGFycmF5W2luZGV4XSwgaW5kZXggKyAxKSA6IGluZGV4O1xuICB9O1xuICBjb25zdCBzcGxpdEluZGV4ID0gZ2V0QmFsYW5jZWRJbmRleChoZWlnaHRzQXJyYXksIGhlaWdodFRvdGFsIC8gMikgKyAxO1xuICBjb2x1bW5zLmNvbHVtbnMxID0gZWxlbWVudHNBcnJheS5zbGljZSgwLCBzcGxpdEluZGV4KTtcbiAgY29sdW1ucy5jb2x1bW5zMiA9IGVsZW1lbnRzQXJyYXkuc2xpY2Uoc3BsaXRJbmRleCwgZWxlbWVudHNBcnJheS5sZW5ndGgpO1xuICBjb2x1bW5zLmhlaWdodHNBcnJheSA9IGhlaWdodHNBcnJheTtcbiAgcmV0dXJuIGNvbHVtbnM7XG59O1xuXG5leHBvcnQgY29uc3QgZXZlbnRUcmlnZ2VyID0gKGVsZW0sIGV2ZW50VHlwZSwgZGV0YWlsID0ge30sIGJ1YmJsZXMgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudFR5cGUsIHsgZGV0YWlsLCBidWJibGVzIH0pO1xuICBlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRFbGVtZW50Q29sbGVjdGlvblRvQXJyYXkgPSAoY29sbGVjdGlvbikgPT4ge1xuICBpZiAoY29sbGVjdGlvbiBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbiBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gW10uc2xpY2UuY2FsbChjb2xsZWN0aW9uKSA6IGNvbGxlY3Rpb24uZ2V0KCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbWlzZUVsZW1lbnRzID0gKGVsZW1lbnRzQ29sbGVjdGlvbikgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGNvbnZlcnRFbGVtZW50Q29sbGVjdGlvblRvQXJyYXkoZWxlbWVudHNDb2xsZWN0aW9uKTtcbiAgaWYgKCFlbGVtZW50cyB8fCAhZWxlbWVudHMubGVuZ3RoKSByZXR1cm47XG4gIGNvbnN0IGNsb25lZEVsZW1lbnRzID0gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICBjbG9uZWRFbGVtZW50cy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmMpID0+IGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmVkRWxlbWVudHNbaW5jXSwgZWxlbWVudCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzRWxlbWVudFZlcnRpY2FsbHlTY3JvbGxhYmxlID0gKGVsKSA9PiB7XG4gIHJldHVybiAoZWwgJiYgKGVsLnNjcm9sbEhlaWdodCA+IGVsLm9mZnNldEhlaWdodCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrRGVmaW5lZCA9IGl0ZW0gPT4gaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0gIT09IG51bGw7XG5cbmV4cG9ydCBjb25zdCB0YWJsaXN0TmF2aWdhdGlvbiA9ICh0YWJsaXN0KSA9PiB7XG4gIGNvbnN0IG9yaWVudGF0aW9uID0gdGFibGlzdC5nZXRBdHRyaWJ1dGUoJ2FyaWEtb3JpZW50YXRpb24nKTtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IG9yaWVudGF0aW9uICYmIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnO1xuICBjb25zdCB0YWJzID0gdGFibGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYlwiXScpO1xuICBjb25zdCBrZXlzID0gS2V5Q29kZTtcblxuICBjb25zdCBmb2N1c0ZpcnN0VGFiID0gKCkgPT4gdGFic1swXS5mb2N1cygpO1xuICBjb25zdCBmb2N1c0xhc3RUYWIgPSAoKSA9PiB0YWJzW3RhYnMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcblxuICBjb25zdCBmb2N1c1ByZXZpb3VzVGFiID0gKGN1cnJlbnRUYWIpID0+IHtcbiAgICBjb25zdCB0YWJJbmRleCA9IFsuLi50YWJzXS5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50ID09PSBjdXJyZW50VGFiKTtcbiAgICBpZiAodGFiSW5kZXggPT09IDApIHtcbiAgICAgIGZvY3VzTGFzdFRhYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWJzW3RhYkluZGV4IC0gMV0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9jdXNOZXh0VGFiID0gKGN1cnJlbnRUYWIpID0+IHtcbiAgICBjb25zdCB0YWJJbmRleCA9IFsuLi50YWJzXS5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50ID09PSBjdXJyZW50VGFiKTtcbiAgICBjb25zdCB0YWJzTGVuZ3RoWmVyb0luZGV4ID0gdGFicy5sZW5ndGggLSAxO1xuICAgIGlmICh0YWJJbmRleCA9PT0gdGFic0xlbmd0aFplcm9JbmRleCkge1xuICAgICAgZm9jdXNGaXJzdFRhYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWJzW3RhYkluZGV4ICsgMV0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGFibGlzdEtleWRvd25FdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlIGtleXMuRU5EOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb2N1c0xhc3RUYWIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleXMuSE9NRTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9jdXNGaXJzdFRhYigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5cy5MRUZUOlxuICAgICAgY2FzZSBrZXlzLlVQOlxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZm9jdXNQcmV2aW91c1RhYihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5cy5SSUdIVDpcbiAgICAgIGNhc2Uga2V5cy5ET1dOOlxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZm9jdXNOZXh0VGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRhYmxpc3RLZXl1cEV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2Uga2V5cy5MRUZUOlxuICAgICAgICBmb2N1c1ByZXZpb3VzVGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5cy5SSUdIVDpcbiAgICAgICAgZm9jdXNOZXh0VGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVGFibGlzdEtleWRvd25FdmVudHMsIGZhbHNlKTtcbiAgICBpZiAoIWlzVmVydGljYWwpIHtcbiAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZVRhYmxpc3RLZXl1cEV2ZW50cywgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChvYmopID0+IHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXBsYWNlQWxsID0gKHN0cmluZywgc2VhcmNoLCByZXBsYWNlbWVudCkgPT4ge1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KHNlYXJjaCkuam9pbihyZXBsYWNlbWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgZHhTZXRUaW1lb3V0ID0gKGNiLCB0aW1lKSA9PiB7XG4gIHNldFRpbWVvdXQoY2IsIHRpbWUpO1xuXG4gIGlmICh3aW5kb3cuYXBwUmVhZHlFdmVudC5pbml0aWF0ZWQpIHtcbiAgICBhcHBSZWFkeVRpbWVyLmFkZCh0aW1lKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYXBwUmVhZHlFdmVudC50aW1lb3V0ICs9IHRpbWU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBEeFJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUgPSAoY2IpID0+IHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IoKSk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZGluZ1NwaW5uZXJUb2dnbGVCdXR0b25TdGF0ZUFuZENvbnRlbnQgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IHRhcmdldEVsZW1lbnQgPSB0YXJnZXQ7XG5cbiAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgIHRhcmdldEVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRhcmdldEVsZW1lbnQ7XG4gIFsuLi5jaGlsZHJlbl0uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGQ7XG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGFkZER4TG9hZGluZ1NwaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCBUaGUgYnV0dG9uL2xpbmsgdGhhdCB0aGUgbG9hZGluZyBzcGlubmVyIHNob3VsZCBiZSBpbnNlcnRlZCBpbnRvXG4gKi9cbmV4cG9ydCBjb25zdCBhZGREeExvYWRpbmdTcGlubmVyID0gKHRhcmdldCkgPT4ge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGljb25NYXJrdXAgPSAnPGRpdiBjbGFzcz1cIkR4TG9hZGluZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxkaXYgY2xhc3M9XCJEeExvYWRpbmdfX2ljb25cIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiPjwvZGl2PjwvZGl2Pic7XG4gIGNvbnN0IGxvYWRpbmdJY29uID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaWNvbk1hcmt1cCk7XG5cbiAgbG9hZGluZ1NwaW5uZXJUb2dnbGVCdXR0b25TdGF0ZUFuZENvbnRlbnQodGFyZ2V0KTtcblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQobG9hZGluZ0ljb24pO1xufTtcblxuLyoqXG4gKiByZW1vdmVEeExvYWRpbmdTcGlubmVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgVGhlIGJ1dHRvbi9saW5rIHRoYXQgdGhlIGxvYWRpbmcgc3Bpbm5lciBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tXG4gKiBAcGFyYW0ge3N0cmluZyB8fCBIVE1MRWxlbWVudH0gcmVwbGFjZSBUaGUgc3RyaW5nIHlvdSB3b3VsZCBsaWtlIHRvIHJlcGxhY2UgdGhlIGxvYWRpbmcgc3Bpbm5lciB3aXRoIChleHBlY3RlZCB0byBiZSB0aGUgdGV4dCBvcmlnaW5hbGx5IGluIHRoZSBidXR0b24pXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVEeExvYWRpbmdTcGlubmVyID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0O1xuXG4gIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICB0YXJnZXRFbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG5cbiAgY29uc3QgbG9hZGluZ0ljb24gPSB0YXJnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5EeExvYWRpbmcnKTtcbiAgdGFyZ2V0RWxlbWVudC5yZW1vdmVDaGlsZChsb2FkaW5nSWNvbik7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGFyZ2V0RWxlbWVudDtcbiAgWy4uLmNoaWxkcmVuXS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZDtcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGREeEVsZW1lbnRMb2FkaW5nU3Bpbm5lciA9ICh0YXJnZXQpID0+IHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpY29uTWFya3VwID0gYDxkaXYgY2xhc3M9XCJEeExvYWRpbmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDg4IDg4XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDg4IDg4O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgPHBhdGggZmlsbD1cIiNGRkZGRkZcIiBzdHlsZT1cIm9wYWNpdHk6IC4yO1wiIGQ9XCJNNDQsNWMyMS41LDAsMzksMTcuNSwzOSwzOVM2NS41LDgzLDQ0LDgzUzUsNjUuNSw1LDQ0UzIyLjUsNSw0NCw1IE00NCwwQzE5LjcsMCwwLDE5LjcsMCw0NHMxOS43LDQ0LDQ0LDQ0IHM0NC0xOS43LDQ0LTQ0UzY4LjMsMCw0NCwwTDQ0LDB6XCIvPlxuICAgIDxwYXRoIGZpbGw9XCIjRjBGMEYwXCIgZD1cIk04NS41LDQ2LjRjLTEuNCwwLTIuNS0xLjEtMi41LTIuNUM4MywyMi41LDY1LjUsNSw0NC4xLDVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNVM0Mi43LDAsNDQuMSwwIEM2OC4zLDAsODgsMTkuNyw4OCw0My45Qzg4LDQ1LjMsODYuOSw0Ni40LDg1LjUsNDYuNHpcIj5cbiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgZnJvbT1cIjAgNDQgNDRcIiB0bz1cIjM2MCA0NCA0NFwiIGR1cj1cIjEuNXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XG4gICAgPC9wYXRoPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5gO1xuICBjb25zdCBsb2FkaW5nSWNvbiA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGljb25NYXJrdXApO1xuXG4gIGxvYWRpbmdTcGlubmVyVG9nZ2xlQnV0dG9uU3RhdGVBbmRDb250ZW50KHRhcmdldCk7XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGxvYWRpbmdJY29uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbFN0b3JhZ2VBdmFpbGFibGUgPSAoKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cubG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmZWF0dXJlX3Rlc3QnLCAneWVzJyk7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZlYXR1cmVfdGVzdCcpID09PSAneWVzJykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZmVhdHVyZV90ZXN0Jyk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRTY3JpcHRGb3JCYXphYXJWb2ljZSA9IChzY3JpcHRVUkwpID0+IHtcbiAgaWYgKHNjcmlwdFVSTC50cmltKCkgIT09ICcnICYmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBzY3JpcHRbc3JjPScke3NjcmlwdFVSTH0nXWApKS5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBiYXphYXJWb2ljZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGJhemFhclZvaWNlU2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgc2NyaXB0VVJMKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGJhemFhclZvaWNlU2NyaXB0KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsaXNlSGVpZ2h0cyA9IChlbGVtZW50cykgPT4ge1xuICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgWy4uLmVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gIH0pO1xuICBbLi4uZWxlbWVudHNdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBpZiAoaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICBtYXhIZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9KTtcbiAgWy4uLmVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHttYXhIZWlnaHR9cHhgO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUN1cnJlbnREYXRlID0gKCkgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiAoXG4gICAgRGF0ZS5VVEMoXG4gICAgICB0b2RheS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgdG9kYXkuZ2V0VVRDTW9udGgoKSxcbiAgICAgIHRvZGF5LmdldFVUQ0RhdGUoKSxcbiAgICAgIHRvZGF5LmdldFVUQ0hvdXJzKCksXG4gICAgICB0b2RheS5nZXRVVENNaW51dGVzKClcbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJldmVudEFjdGlvbk9uRGVlcExpbmsgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgbGlua0xvY2F0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgaWYgKGNoZWNrRGVlcExpbmsobGlua0xvY2F0aW9uKSkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==