// ===== Datos editables =====
var SERVICIOS=[["🪶","Limpieza interna y externa","Eliminación total de polvo y pelusas en coolers, fuentes y disipadores."],["💉","Pasta térmica y metal líquido","Compuesto de alta calidad para una refrigeración perfecta."],["🧊","Pads térmicos","Revisión y reemplazo si es necesario."],["⚡","Optimización de Windows","Más rendimiento y un sistema limpio y ágil."],["🖥️","Armado de PC","Armado, mantenimiento y puesta a punto."],["🎮","Mantenimiento PS3 · PS4 · PS5","Mantenimiento preventivo completo: consola silenciosa y como nueva."],["🔓","HEN en PS3","Instalación y actualización de HEN, con tiendas y homebrew."],["💻","Liberación de netbooks","Desbloqueo de netbooks de gobierno (Juana Manso, Conectar Igualdad)."]];
// e:"ok" = online, e:"soon" = próximamente. Poné la URL en u
var JUEGOS=[{n:"JQ Retro Hub",d:"Emulación retro en el navegador con EmulatorJS, liviana para equipos viejos.",e:"soon",u:""},{n:"Tu próxima web",d:"Acá va a aparecer el próximo emulador o colección de juegos.",e:"soon",u:""}];
var s=document.getElementById("srv"),g=document.getElementById("games");
SERVICIOS.forEach(function(x){var d=document.createElement("div");d.className="card rv";d.innerHTML='<div class="ic">'+x[0]+'</div><h3>'+x[1]+'</h3><p>'+x[2]+'</p>';s.appendChild(d)});
JUEGOS.forEach(function(x){var d=document.createElement("div");d.className="card game rv";d.innerHTML='<span class="bd '+(x.e=="ok"?"":"s")+'">'+(x.e=="ok"?"ONLINE":"PRÓXIMAMENTE")+'</span><div class="ic">🕹️</div><h3>'+x.n+'</h3><p>'+x.d+'</p>'+(x.u?'<a class="go" href="'+x.u+'" target="_blank" rel="noopener">JUGAR →</a>':'');g.appendChild(d)});
var els=document.querySelectorAll(".rv");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}})},{threshold:.1});els.forEach(function(e){io.observe(e)})}else els.forEach(function(e){e.classList.add("on")});

// ===== Túnel de zoom infinito (estilo zoomquilt) =====
var cv=document.getElementById("bg"),cx=cv.getContext("2d"),W,H,N=6,Q=2,T=[],z=0,last=0;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener("resize",rs);
function R(a,b){return a+Math.random()*(b-a)}
function tex(h){var S=640,c=document.createElement("canvas");c.width=c.height=S;var q=c.getContext("2d"),i,hh;
q.fillStyle="hsl("+h+",80%,5%)";q.fillRect(0,0,S,S);q.globalCompositeOperation="lighter";q.lineWidth=2;q.shadowBlur=14;
for(i=0;i<44;i++){hh=h+R(-70,70);q.strokeStyle="hsla("+hh+",100%,"+R(50,68)+"%,"+R(.3,.85)+")";q.shadowColor="hsl("+hh+",100%,60%)";var a=R(0,6.28);q.beginPath();q.arc(S/2+R(-S*.22,S*.22),S/2+R(-S*.22,S*.22),R(30,S*.6),a,a+R(.4,2.6));q.stroke()}
for(i=0;i<70;i++){hh=h+R(-80,80);q.fillStyle="hsla("+hh+",100%,65%,"+R(.4,1)+")";q.shadowColor="hsl("+hh+",100%,60%)";var x=R(0,S),y=R(0,S);q.fillRect(x,y,R(2,5),R(2,5));if(i%5==0){q.fillRect(x,y,R(20,90),2)}}
q.shadowBlur=0;q.globalCompositeOperation="destination-out";
var m=q.createRadialGradient(S/2,S/2,S*.1,S/2,S/2,S*.26);m.addColorStop(0,"#000");m.addColorStop(1,"rgba(0,0,0,0)");q.fillStyle=m;q.fillRect(0,0,S,S);
q.globalCompositeOperation="destination-in";m=q.createRadialGradient(S/2,S/2,S*.3,S/2,S/2,S*.5);m.addColorStop(0,"#000");m.addColorStop(1,"rgba(0,0,0,0)");q.fillStyle=m;q.fillRect(0,0,S,S);
return c}
for(var i=0;i<N;i++)T.push(tex(190+i*28));
function draw(t){var dt=Math.min(t-last,60);last=t;z+=dt/4500;
cx.globalAlpha=1;cx.fillStyle="#02030a";cx.fillRect(0,0,W,H);
var base=Math.max(W,H)*.07,L=[],i,d;
for(i=0;i<N;i++){d=(((z-i)%N)+N)%N;L.push([d,i])}
L.sort(function(a,b){return a[0]-b[0]});
L.forEach(function(l){d=l[0];var sz=base*Math.pow(Q,d),al=d<.8?d/.8:(d>N-1.6?(N-d)/1.6:1);
cx.globalAlpha=Math.max(0,al);cx.save();cx.translate(W/2,H/2);cx.rotate(Math.sin(z*.4)*.12);cx.drawImage(T[l[1]],-sz/2,-sz/2,sz,sz);cx.restore()});
requestAnimationFrame(draw)}
requestAnimationFrame(draw);

// ===== Música: musica.mp3 si existe; si no, sintetizador ambiente =====
var AC,mg,au,muted=false,synOn=false;
function synth(){if(synOn||!AC)return;synOn=true;
mg=AC.createGain();mg.gain.value=muted?0:.5;mg.connect(AC.destination);
var lp=AC.createBiquadFilter();lp.frequency.value=1800;var dl=AC.createDelay();dl.delayTime.value=.375;var fb=AC.createGain();fb.gain.value=.35;dl.connect(fb);fb.connect(dl);dl.connect(mg);lp.connect(mg);lp.connect(dl);
var ch=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],st=0,nt=AC.currentTime+.1;
function f(n){return 440*Math.pow(2,(n-69)/12)}
function nn(n,t,d,ty,v,o2){var o=AC.createOscillator(),gg=AC.createGain();o.type=ty;o.frequency.value=f(n);gg.gain.setValueAtTime(0,t);gg.gain.linearRampToValueAtTime(v,t+.03);gg.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(gg);gg.connect(o2);o.start(t);o.stop(t+d+.05)}
setInterval(function(){while(nt<AC.currentTime+.6){var c=ch[Math.floor(st/16)%4],i=st%16;
if(i%4==0)nn(c[0]-24,nt,.9,"sine",.4,mg);
if(i==0)c.forEach(function(n){nn(n,nt,3.8,"triangle",.07,mg)});
nn(c[i%3]+(i%6<3?12:24),nt,.4,"sawtooth",.035,lp);
nt+=.25;st++}},200)}
document.getElementById("go").onclick=function(){
document.body.classList.add("in");
AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.resume)AC.resume();
au=new Audio("musica.mp3");au.loop=true;au.volume=.6;
au.addEventListener("error",synth);
var p=au.play();if(p&&p.catch)p.catch(function(){});
setTimeout(function(){if(au.readyState==0||au.error)synth()},2500)};
document.getElementById("mu").onclick=function(){muted=!muted;if(au)au.muted=muted;if(mg)mg.gain.value=muted?0:.5;this.textContent=muted?"🔇":"🔊"};
