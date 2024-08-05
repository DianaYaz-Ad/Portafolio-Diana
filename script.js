/* alert("Holi mundo <3") */

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

//Reconoces una accion porque tiene paréntesis después del nombre de la accón
// a veces tiene el operador . (punto)

typewriter
    .pauseFor(1500) //milisegundos 1.5 segundos
    .typeString('Diana Mejia')
    .pauseFor(800)
    .deleteChars(12)
    .typeString('<strong> Preciosa </strong> e inteligente mujer ')
    .pauseFor(800)
    .deleteAll()
    .typeString('<strong> que solo tiene <span style="color: #27ae60;">25 años </span> ¡Increible!</strong>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<strong> ¡Conocela!</strong>')
    .pauseFor(1000)
    .deleteChars(12)
    .start();



let frase = document.getElementById('frase');


let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

//Reconoces una accion porque tiene paréntesis después del nombre de la accón
// a veces tiene el operador . (punto)

typewriterFrase
    .pauseFor(1500) //milisegundos 1.5 segundos
    .typeString('Que le corten la cabeza')
    .pauseFor(800)
    .deleteAll()
    .typeString('-Reina Roja ')
    .pauseFor(800)
    .start();