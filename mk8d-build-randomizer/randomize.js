var selectcar = Math.floor(Math.random() * 41);
var selectcharacter = Math.floor(Math.random() * 46);
var selectwheel = Math.floor(Math.random() * 22);
var selectglider = Math.floor(Math.random() * 15);
var selectcolor = Math.floor(Math.random() * 9);
var selectmetal = Math.floor(Math.random() * 2);
var selectgirl = Math.floor(Math.random() * 3);
var selectboy = Math.floor(Math.random() * 3);
var selectzelda = Math.floor(Math.random() * 2);

var car = cars[selectcar];
var character = characters[selectcharacter];
var wheel = wheels[selectwheel];
var glider = gliders[selectglider];
var color = colors[selectcolor];
var nocolor = "None";
var metal = metals[selectmetal];
var girl = squidgirls[selectgirl];
var boy = squidboys[selectboy];
var zelda = zeldas[selectzelda];

document.getElementById("car").innerHTML = car;
document.getElementById("character").innerHTML = character;
document.getElementById("wheel").innerHTML = wheel;
document.getElementById("glider").innerHTML = glider;

if (selectcharacter === 7 || selectcharacter === 8 || selectcharacter === 11)
  document.getElementById("color").innerHTML = color;
else if (selectcharacter === 20)
  document.getElementById("color").innerHTML = metal;
else if (selectcharacter === 36)
  document.getElementById("color").innerHTML = girl;
else if (selectcharacter === 37)
  document.getElementById("color").innerHTML = boy;
else if (selectcharacter === 38)
  document.getElementById("color").innerHTML = zelda;
else
  document.getElementById("color").innerHTML = nocolor;'
