const challenges = [];
challenges[0]= "Turn on tilt controls";
challenges[1]= "Don't use a single item";
challenges[2]= "Use your current items before hitting another box";
challenges[3]= "No drifting";
challenges[4]= "Hop drift only";
challenges[5]= "No purple mini-turbos";
challenges[6]= "Use your least favorite character";
challenges[7]= "Use your least favorite kart";
challenges[8]= "Use your least favorite wheels";
challenges[9]= "Use your least favorite glider";
challenges[10]= "Use your least favorite combo (Character, kart, wheels and glider)";
challenges[11]= "Throw all items forward if possible";
challenges[12]= "Throw all items backward if possible";
challenges[13]= "Use all items immediately";
challenges[14]= "Use an inside drift kart";
challenges[15]= "Use any character in a Standard Kart combo";
challenges[16]= "Can't use shortcuts";
challenges[17]= "Don't use a single item until coin count hits 10 once";
challenges[18]= "Purposely fall off the track once (Can't pass off accidents as purposeful)";
challenges[19]= "Pick your least favorite option during track selection (No random track allowed)";
challenges[20]= "Only use items on the first lap";
challenges[21]= "Only use items on the second lap";
challenges[22]= "Only use items on the third lap (Last lap on Baby Park)";
challenges[23]= "No tricking";
challenges[24]= "Don't use a single item if the Boo is in any item slot";
challenges[25]= "Use a randomized combo";
challenges[26]= "Reroll twice (Do both challenges at once)";
challenges[27]= "Do no challenge for one race";

var selectchallenge = Math.floor(Math.random() * 28);

var challenge = challenges[selectchallenge];

document.getElementById("challenge").innerHTML = challenge;

function Randomize() {
var selectchallenge = Math.floor(Math.random() * 28);

var challenge = challenges[selectchallenge];

document.getElementById("challenge").innerHTML = challenge;}
Randomize()