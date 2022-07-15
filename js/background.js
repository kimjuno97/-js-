const blueprint = ['red','green','skyblue','orange'];
const blueprint2 = ['sandybrown','plum','pink','yellow']
const body = document.querySelector('body');




const random1 = blueprint[Math.floor(Math.random()*blueprint.length)];
const random2 = blueprint2[Math.floor(Math.random()*blueprint2.length)];
body.style.background = `linear-gradient(0.25turn,${random1},${random2})`;

