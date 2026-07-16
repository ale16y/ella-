/* Contenido y comportamiento del viaje. Puedes editar las frases sin tocar el marcado HTML. */
const phrases = [
  'Greybi, tu presencia tiene la calma de los lugares a los que siempre quiero volver.',
  'Me encanta cómo haces que lo cotidiano tenga un brillo que antes no conocía.',
  'Tu inteligencia no necesita anunciarse: se nota en la forma tan bonita en que miras el mundo.',
  'Admiro la valentía con la que eliges tus sueños, incluso cuando el camino exige mucho de ti.',
  'Tu sonrisa no solo ilumina: también pone todo en su lugar.',
  'Hay una nobleza inmensa en tu manera de cuidar lo que amas.',
  'Me siento orgulloso de la mujer firme, sensible y auténtica que eres.',
  'Tus ojos tienen esa rara cualidad de convertir un momento simple en un recuerdo.',
  'Tu forma de pensar me inspira porque siempre encuentra profundidad donde otros pasan de largo.',
  'Qué privilegio es conocer a alguien tan genuina como tú.',
  'En tu fortaleza hay dulzura, y en tu dulzura hay una fuerza que admiro profundamente.',
  'Me encanta que no intentes parecerte a nadie; Greybi, tú eres tu propia luz.',
  'Tu tranquilidad es uno de mis lugares favoritos.',
  'Cada vez que luchas por lo que quieres, confirmas la grandeza que hay en ti.',
  'Eres de esas personas que dejan el mundo un poco más amable sin hacer ruido.',
  'Tu risa tiene el don de mejorar hasta los días más nublados.',
  'Admiro tu carácter: decidido, hermoso y fiel a lo que sientes.',
  'Contigo aprendí que la admiración también puede sentirse como hogar.',
  'Tu sensibilidad es una forma preciosa de inteligencia.',
  'Me hace feliz verte ser tú, con esa libertad tan tuya.',
  'Hay detalles tuyos que guardo con el cuidado con que se guardan las cosas irrepetibles.',
  'Tu ternura con los gatos revela un corazón que sabe querer de verdad.',
  'No hay nada común en la forma en que habitas el mundo.',
  'Tu mirada tiene una paz que me hace querer quedarme un poco más.',
  'Me encanta tu manera de convertir tus ideas en caminos posibles.',
  'Eres belleza, sí; pero la que más me conmueve empieza siempre por dentro.',
  'Gracias por enseñarme, sin proponértelo, que el amor puede ser sereno y enorme a la vez.',
  'Tu autenticidad es una de las cosas más elegantes que conozco.',
  'Cada logro tuyo me alegra como si una estrella nueva apareciera en mi cielo.',
  'Admiro que tengas la fuerza de defender lo que crees.',
  'Tu voz tiene una forma muy especial de hacerme sentir cerca.',
  'Eres una combinación perfecta de determinación y corazón.',
  'Me gusta pensar que hasta el universo se detiene un segundo cuando sonríes.',
  'Tu forma de amar a los tuyos dice mucho de la calidad de tu alma.',
  'A tu lado, hasta el silencio se siente acompañado.',
  'Tu curiosidad hace que conversar contigo sea siempre descubrir algo nuevo.',
  'Me enamora la honestidad con la que eres tú misma.',
  'Tu dulzura nunca borra tu carácter; lo vuelve todavía más admirable.',
  'Te quiero por todo lo que eres y también por todo lo que despiertas en mí.',
  'Tu esfuerzo tiene una belleza silenciosa que no dejo de notar.',
  'Me siento afortunado de poder celebrar tus pasos, grandes y pequeños.',
  'Hay una luz en ti que no depende de ninguna circunstancia.',
  'Me encanta cómo tus sueños tienen tu misma personalidad: valientes y llenos de vida.',
  'Eres refugio sin dejar de ser aventura.',
  'Tu paciencia es una forma de cariño que valoro muchísimo.',
  'Gracias por existir de una manera tan tuya, tan imposible de reemplazar.',
  'En cada desafío que atraviesas, encuentro otra razón para admirarte.',
  'Tu corazón sabe ser suave sin dejar de ser fuerte.',
  'La vida se siente más bonita desde que tiene momentos contigo.',
  'Me encanta la intención bonita que pones en las cosas que te importan.',
  'Tú haces que querer a alguien se sienta como una certeza tranquila.',
  'Tu inteligencia tiene calidez, y eso la hace todavía más especial.',
  'Eres de esas personas que inspiran sin darse cuenta.',
  'Tu forma de mirar a quienes amas está llena de una ternura que conmueve.',
  'Me gustan tus ideas, tus gestos y la verdad con la que caminas.',
  'Contigo, la admiración nunca se queda sin motivos.',
  'Tu perseverancia me recuerda que los sueños también se construyen con valentía.',
  'Tu sonrisa es una de mis coincidencias favoritas con el mundo.',
  'Nunca dejaré de agradecer el día en que nuestras historias se encontraron.',
  'Tienes una elegancia que viene de ser fiel a tu esencia.',
  'Me encanta que puedas ser calma y tormenta, siempre real, siempre tú.',
  'Tus abrazos tienen la habilidad de hacer que todo parezca menos difícil.',
  'Eres el tipo de persona que deja huellas bonitas en cada lugar al que llega.',
  'Qué bonito es admirar a quien también se sabe levantar una y otra vez.',
  'Tu manera de escuchar demuestra un corazón atento y enorme.',
  'Greybi, tienes una belleza que se revela más mientras más se te conoce.',
  'Me hace bien saber que en el mundo existe alguien como tú.',
  'Tu fortaleza no es distancia; es la raíz de todo lo que eres capaz de dar.',
  'Admiro cómo conviertes las dificultades en razones para crecer.',
  'Tu cariño tiene una delicadeza que se queda conmigo.',
  'Amo la paz que aparece cuando estoy cerca de ti.',
  'Eres especial no por intentar brillar, sino porque brillas siendo natural.',
  'Tu corazón tiene la rara virtud de sentirse inmenso incluso en los gestos pequeños.',
  'Me encanta el respeto con el que cuidas tus propios sueños.',
  'Tu mirada es uno de esos lugares donde quisiera detener el tiempo.',
  'Eres una mujer admirable, y decirlo nunca será suficiente.',
  'Tu compañía convierte el presente en un lugar donde quiero estar.',
  'Me inspira que sigas adelante con esa mezcla tuya de coraje y sensibilidad.',
  'No hay versión de un buen día que no mejore al saber de ti.',
  'Tu autenticidad hace que todo a tu alrededor se sienta más verdadero.',
  'Me encanta la forma en que amas a los gatos: paciente, noble y llena de cuidado.',
  'Tu forma de reír es una pequeña celebración que quiero escuchar muchas veces.',
  'Cada conversación contigo confirma que tu mente es tan hermosa como tu corazón.',
  'Hay mucha magia en alguien que sabe ser tan fuerte y tan dulce a la vez.',
  'Tu esencia tiene una calma que no se parece a ninguna otra.',
  'Me siento orgulloso de ti, de tus luchas y de la persona que eliges ser cada día.',
  'Lo mejor de admirarte es que siempre encuentro algo nuevo que querer más.',
  'Gracias por hacer de este universo un lugar más bonito simplemente estando en él.'
];

const memories = [
  ['assets/retrato-pintura.jpg', 'Una mirada que también es arte.'],
  ['assets/retrato-negro.jpg', 'La belleza de ser auténticamente tú.'],
  ['assets/flores-rosa.jpeg', 'Flores para alguien que hace florecer todo.'],
  ['assets/detalle-ramo.jpeg', 'Hasta los detalles tienen tu luz.'],
  ['assets/retrato-natural.jpeg', 'Tu sonrisa, una constelación cercana.'],
  ['assets/retrato-azul.jpeg', 'Azul profundo, como la calma que transmites.']
];
const phraseContainer = document.querySelector('#phrases');
phraseContainer.innerHTML = phrases.map((phrase, index) => {
  const phraseScene = `<section class="phrase-scene" id="frase-${index + 1}"><span class="constellation" aria-hidden="true"></span><article class="phrase-card glass"><span class="phrase-number">${String(index + 1).padStart(2, '0')} / ${phrases.length}</span><p>${phrase}</p></article></section>`;
  const memory = memories[index / 14];
  const memoryScene = memory ? `<section class="memory-scene"><figure class="memory-frame"><span class="memory-index">RECUERDO ${String(index / 14 + 1).padStart(2, '0')}</span><img src="${memory[0]}" alt="Greybi: ${memory[1]}" loading="lazy"><figcaption>${memory[1]}</figcaption></figure></section>` : '';
  return phraseScene + memoryScene;
}).join('');

// Aparición fluida de cada escena, optimizada mediante IntersectionObserver.
const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting)), { threshold: .55 });
document.querySelectorAll('.phrase-scene, .memory-scene').forEach(scene => observer.observe(scene));

const progress = document.querySelector('#progressBar');
addEventListener('scroll', () => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${(scrollY / max) * 100}%`; }, { passive: true });
document.querySelector('#backTop').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

// Galaxia de Canvas: capas independientes de estrellas y polvo para crear profundidad sin imágenes pesadas.
const canvas = document.querySelector('#cosmos'), ctx = canvas.getContext('2d'); let stars = [], dust = [], pointer = { x: 0, y: 0 };
function resize(){ canvas.width = innerWidth * devicePixelRatio; canvas.height = innerHeight * devicePixelRatio; canvas.style.width = `${innerWidth}px`; canvas.style.height = `${innerHeight}px`; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); const n = Math.min(520, Math.round(innerWidth * innerHeight / 2500)); stars = Array.from({length:n},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,z:.25+Math.random()*1.35,r:Math.random()*1.25+.18,a:.18+Math.random()*.8,t:Math.random()*6})); dust = Array.from({length:70},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:20+Math.random()*80,a:Math.random()*.035})); }
function draw(time){ ctx.clearRect(0,0,innerWidth,innerHeight); const px=(pointer.x-innerWidth/2)*.012, py=(pointer.y-innerHeight/2)*.012; dust.forEach(d=>{ctx.beginPath();ctx.fillStyle=`rgba(197,105,220,${d.a})`;ctx.arc(d.x+px*.2,d.y+py*.2,d.r,0,Math.PI*2);ctx.fill()}); stars.forEach(s=>{const x=s.x+px*s.z, y=s.y+py*s.z; const alpha=s.a*(.65+.35*Math.sin(time*.0013+s.t));ctx.beginPath();ctx.fillStyle=`rgba(244,233,255,${alpha})`;ctx.arc(x,y,s.r*s.z*.72,0,Math.PI*2);ctx.fill(); if(s.z>1.25&&alpha>.55){ctx.strokeStyle=`rgba(241,197,227,${alpha*.35})`;ctx.beginPath();ctx.moveTo(x-3,y);ctx.lineTo(x+3,y);ctx.moveTo(x,y-3);ctx.lineTo(x,y+3);ctx.stroke()}}); requestAnimationFrame(draw) }
addEventListener('resize',resize); addEventListener('pointermove',e=>pointer={x:e.clientX,y:e.clientY},{passive:true}); resize(); requestAnimationFrame(draw);

// Música ambiental generativa: el navegador la inicia solo después de una interacción del usuario.
let audio, master, ambienceOn = false, muted = false, timer;
const soundBtn=document.querySelector('#soundButton'), panel=document.querySelector('#audioPanel'), playBtn=document.querySelector('#playPause'), muteBtn=document.querySelector('#mute'), volume=document.querySelector('#volume');
function note(freq, when, len, gain){const o=audio.createOscillator(), g=audio.createGain();o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(.001,when);g.gain.exponentialRampToValueAtTime(gain,when+.7);g.gain.exponentialRampToValueAtTime(.001,when+len);o.connect(g).connect(master);o.start(when);o.stop(when+len+.1)}
// Canto breve y delicado, con una subida de tono para sugerir aves lejanas.
function birdSong(when, pitch){const o=audio.createOscillator(), g=audio.createGain();o.type='sine';o.frequency.setValueAtTime(pitch,when);o.frequency.exponentialRampToValueAtTime(pitch*1.48,when+.09);o.frequency.exponentialRampToValueAtTime(pitch*1.12,when+.23);g.gain.setValueAtTime(.001,when);g.gain.exponentialRampToValueAtTime(.012,when+.025);g.gain.exponentialRampToValueAtTime(.001,when+.29);o.connect(g).connect(master);o.start(when);o.stop(when+.32)}
function loop(){if(!ambienceOn)return;const now=audio.currentTime+.08;[146.83,174.61,220,196,164.81,196].forEach((f,i)=>{note(f,now+i*1.3,2.4,.022);note(f*1.5,now+i*1.3+.32,1.7,.009)});[.8,2.75,5.3,6.65].forEach((offset,i)=>{const start=now+offset+Math.random()*.22;birdSong(start,1150+i*130);birdSong(start+.38,980+i*105)});timer=setTimeout(loop,7800)}
function startAudio(){if(!audio){audio=new (window.AudioContext||window.webkitAudioContext)();master=audio.createGain();master.gain.value=.38;master.connect(audio.destination)}audio.resume();if(!ambienceOn){ambienceOn=true;loop()}soundBtn.setAttribute('aria-pressed','true');soundBtn.querySelector('.sound-label').textContent='Sonando';panel.classList.add('active');playBtn.textContent='❚❚'}
soundBtn.onclick=startAudio; playBtn.onclick=()=>{if(!audio||!ambienceOn){startAudio();return} ambienceOn=false;clearTimeout(timer);playBtn.textContent='▶';soundBtn.querySelector('.sound-label').textContent='Pausado';};muteBtn.onclick=()=>{if(!audio)return;muted=!muted;master.gain.value=muted?0:volume.value/100;muteBtn.textContent=muted?'×':'⌁'};volume.oninput=()=>{if(master&&!muted)master.gain.value=volume.value/100};addEventListener('pointerdown',()=>{if(!audio)startAudio()},{once:true});

addEventListener('load',()=>setTimeout(()=>document.querySelector('#loader').classList.add('hide'),500));
