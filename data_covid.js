var f = document.createElement("iframe");
f.src = "https://kopi.dev/widget-covid-19/?dark=true";
f.width = "100%";
f.height = 380;
f.scrolling = "no";
f.frameBorder = 0;
var rootEl = document.getElementById("covid");
console.log(rootEl);
rootEl.appendChild(f);
