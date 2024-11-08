const c = document.getElementById("gen");
const ctx = c.getContext("2d");
const fonts = ["Open Sans", "Itim", "Playfair Display", "Creepster"];
let shirt = new Image;
shirt.src = "shirt.png";
let cat = new Image;
let quote = "";
let font = 0;

function newCat() {
  getData().then(result => {
    cat.src = result;
    generateImage();
  });
}

function newQuote() {
  quote = "";
  /*
  let rand = Math.round(Math.random() * 3)
  if (rand = 0) {
    quote += "This";
    let rand = Math.round(Math.random() * 2)
    if (rand = 0) {
      quote += " shirt";

    }
    else if (rand = 1) {
      quote += " cat";
      let rand = Math.round(Math.random())
      if (rand = 0) {
        quote += " loves";
        let rand = Math.round(Math.random() * 2)
        if (rand = 0) {
          quote += " pizza.";
        }
        else if (rand = 1) {
          quote += " sleeping.";
        }
        else if (rand = 2) {
          quote += " other cats.";
        }
      }
      else if (rand = 1) {
        quote += " hates";
        let rand = Math.round(Math.random())
        if (rand = 0) {
          quote += " this shirt.";
        }
        else if (rand = 1) {
          quote += " Julius Caesar.";
        }
      }
    }
    else if (rand = 2) {
      quote += " image";
    }
  }
  else if (rand = 1) {
    quote += "You";
  }
  else if (rand = 2) {
    quote += "Life";
  }
  else if (rand = 3) {
    quote += "Cats";
  }
  rand = Math.round(Math.random() * 2000);
  if (rand = 1337) {
    rand = Math.round(Math.random());
    if (rand = 0) {
      quote = "HACK CLUB";
    }
    else if (rand = 1) {
      quote = "HIGH SEAS";
    }
  }
  else if (rand > 1200) {
    quote += " :D";
  }
  */
  generateImage();
}

function newFont(random) {
  if (random) {
    font = Math.round(Math.random() * (fonts.length - 1));
  }
  else {
    font++;
    if (font > 3) {
      font = 0;
    }
  }
  generateImage();
}

function generateImage() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(shirt, 43.5, 0);
  ctx.font = "11px " + fonts[font];
  ctx.fillStyle = "black";
  ctx.fillText(quote, 200, 320);
  ctx.drawImage(cat, 185, 130, 150, 150)
}

async function getData() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    const result = json[0].url;
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
