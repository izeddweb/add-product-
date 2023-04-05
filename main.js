//     set variable
const body = document.querySelector("body");

//     ******************************* Star Header  1 -1

//  create header elements
const header = document.createElement("header");
const div = document.createElement("div");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

//  create text Node to li
let textLinks = ["Home", "About", "Servises", "Contact"];

// append elements to header
function addingElementsHeader() {
  body.prepend(header);
  header.prepend(div);
  header.appendChild(nav);
  nav.appendChild(ul);
  // adding classes to elements
  body.className = "body";
  header.className = "header";
  div.className = "logo";
  nav.className = "nav-bar";
  ul.className = "list-item";

  for (t = 0; t < textLinks.length; t++) {
    const li = document.createElement("li");
    let xText = document.createTextNode(`${textLinks[t]}`);
    li.className = "item";
    li.appendChild(xText);
    // styling elements   -1  li
    for (let i = 0; i < textLinks.length; i++) {
      li.style.cssText =
        "height:100%;width:100%;padding:0 15px;list-style:none;font-size:20px;margin: 0 10px;cursor:pointer;";
      ul.appendChild(li);
    }
    // li.appendChild(textItem);
  }
}
addingElementsHeader();

// create text Node logo
const textLogo = document.createTextNode("logo");

// adding text Node to logo
div.appendChild(textLogo);

// styling elements   -1   body
body.style.cssText =
  "background-color :#eee; height:100%;width:100vw;";
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
ul.style.cssText = "height:100%;width:100%;display:flex;list-style-type:none;";

//  end header

// ******************************************** star main section 2

// create element main section

const main = document.createElement("main");
const mainContent = document.createElement("div");

// styling element main
main.style.cssText = " width:100%;height:auto;";
mainContent.style.cssText =
  " width:80%;height:auto;margin:0 auto;display:flex;flex-wrap: wrap;justify-content :center; padding-top: 105px;";

// create function
function addingElementsMain() {
  for (let i = 1; i <= 15; i++) {
    const productsCard = document.createElement("div");
    // adding text node to product
    const productName = document.createTextNode(`Product Name:`);
    const products = document.createElement("span");
    // styling productsCard

    productsCard.addEventListener("mousemove", hoverEffects);
    function hoverEffects() {
      productsCard.style.backgroundColor = "red";
      productsCard.style.transition = ".7s";
    }

    hoverEffects();
    productsCard.style.cssText =
      " background-color:#e8e8e8; width:320px;height:320px;padding :10px;margin :10px auto;box-shadow:0 0 10px #00000069;display:flex;align-items:center;justify-content:center;flex-direction: column;";

    products.style.cssText = "display:block;font-size:50px; text-align:center;";
    products.prepend(`${i}`);
    productsCard.appendChild(products);
    productsCard.appendChild(productName);
    productsCard.className = "products-card";
    mainContent.appendChild(productsCard);
  }
  main.appendChild(mainContent);
  body.appendChild(main);
}

addingElementsMain();

// adding classes to elements main
mainContent.className = "main-content";
main.classList.add("main");

//  end main section
//  ************************************ star footer section

// create element footer and textNode
const footer = document.createElement("footer");
const footerPara = document.createElement("p");
const textPara = document.createTextNode(" Copyright 2023 --zed .D");
// styling elements

footer.style.cssText =
  "background-color :#26ff00; height:60px;width:100vw;display:flex;justify-content:center; align-items:center;";
footerPara.style.cssText ="background-color :#26ff00; height:60px;width:100vw;display:flex;justify-content:center; align-items:center;";

// assign class to footer elements
footer.className = "footer";
footerPara.className = "footer-para";

// appendelement to body
function addingFooter() {
  footerPara.appendChild(textPara)
  footer.appendChild(footerPara);
  body.appendChild(footer);
}

addingFooter();
