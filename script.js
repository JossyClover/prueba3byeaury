const numStars = 150;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('stars');
  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (1 + Math.random() * 3) + 's';
  document.body.appendChild(star);
}

const frases = [
  'El universo conspira a favor de los que sueñan.',
  'Somos polvo de estrellas buscando sentido.',
  'Cada estrella guarda un deseo.',
  'En la oscuridad también hay belleza.',
  'Brilla como si todo el universo te mirara.'
];

const fraseEl = document.getElementById('frase');
let index = 0;

function cambiarFrase() {
  fraseEl.textContent = frases[index];
  index = (index + 1) % frases.length;
}

cambiarFrase();
setInterval(cambiarFrase, 8000);