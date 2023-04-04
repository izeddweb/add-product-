//     set variable
const body = document.querySelector("body");

//     Star Header  1 -1

//  create header
const header = document.createElement("header");
const div = document.createElement("div");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

//  create text Node to li
let textLinks = ["Home", "About", "Servises", "Contact"];
// append elements to body
function addingElements() {
  body.prepend(header);
  header.prepend(div);
  header.appendChild(nav);
  nav.appendChild(ul);
  

  for (t = 0; t < textLinks.length; t++) {
    const li = document.createElement("li");
    let xText = document.createTextNode(`${textLinks[t]}`)
    li.className = "item";
    li.appendChild(xText)
    // styling elements   -1  li
    for(let i= 0; i< textLinks.length; i++){
      li.style.cssText =
      "height:100%;width:100%;padding:0 15px;list-style:none;font-size:20px;margin: 0 10px;cursor:pointer;";
      console.log(i);
      ul.appendChild(li);
    }
    // li.appendChild(textItem);
  }
}
addingElements();

// create text Node
const textLogo = document.createTextNode("logo");

// adding text Node to logo
div.appendChild(textLogo);

// styling elements   -1   body
body.style.cssText =
  "background-color :rgb(132 135 131); height:60px;width:100vw;display:flex;justify-content:space-evenly;align-item:center;height:1500px;";
// styling elements   -1   header
header.style.cssText =
  "background-color :#26ff00; height:60px;width:100vw;display:flex;justify-content:space-evenly;align-item:center;position:fixed; ";

// styling elements   -1   logo
div.style.cssText =
  " height:60px;width:20%;text-align:center;line-height:60px;font-size:40px;";

// styling elements   -1   nav
nav.style.cssText =
  " height:100%width:80%;text-align:center;line-height:60px;font-size:30px;";

// styling elements   -1  ul
ul.style.cssText = "height:100%;width:100%;display:flex;";

// adding classes to elements
body.className = "body";
header.className = "header";
div.className = "logo";
nav.className = "nav-bar";
ul.className = "list-item";
