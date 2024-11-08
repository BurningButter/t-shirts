const c = document.getElementById("gen");
const ctx = c.getContext("2d");
const fonts = ["Open Sans", "Itim", "Playfair Display", "Creepster"];
let shirt = new Image;
shirt.src = "shirt.png";
let cat = new Image;
let quote = "";
let font = 0;

async function newCat() {
  getData().then(result => {
    cat.src = result
  });
}

async function newQuote() {
  quote = "";
  // let rand = Math.round(Math.random() * 3)
  let rand = 0;
  if (rand == 0) { // This...
    quote += "This";
    rand = Math.round(Math.random() * 2)
    if (rand == 0) { // ...shirt...
      quote += " shirt";
      if (rand == 0) { // ...features...
        quote += " features";
        rand = Math.round(Math.random())
        if (rand == 0) { // ...a...
          quote += " a";
          rand = Math.round(Math.random())
          if (rand == 0) { // ...silly...
            quote += " silly";
            rand = Math.round(Math.random())
            if (rand == 0) { // ...creature.
              quote += " creature.";
            }
            else if (rand == 1) { // ...thingy.
              quote += " thingy.";
            }
          }
          else if (rand == 1) { // ...alien lifeform.
            quote += "n alien lifeform.";
          }
        }
        else if (rand == 1) { // ...this...
          quote += " this";
          rand = Math.round(Math.random())
          if (rand == 0) { // ...lil dude.
            quote += " lil dude.";
          }
          else if (rand == 1) { // ...silly creature.
            quote += " silly creature.";
          }
        }
      }
      else if (rand == 1) { // ...reminds me of...
        quote += " reminds me of";
        rand = Math.round(Math.random())
        if (rand == 0) { // ...cats.
          quote += " cats.";
        }
        else if (rand == 1) { // ...candy.
          quote += " candy.";
        }
      }
    }
    else if (rand == 1) { // ...cat...
      quote += " cat";
      rand = Math.round(Math.random())
      if (rand == 0) { // ...loves...
        quote += " loves";
        rand = Math.round(Math.random() * 2)
        if (rand == 0) { // ...pizza.
          quote += " pizza.";
        }
        else if (rand == 1) { // ...sleeping.
          quote += " sleeping.";
        }
        else if (rand == 2) { // ...other cats.
          quote += " other cats.";
        }
      }
      else if (rand == 1) { // ...hates...
        quote += " hates";
        rand = Math.round(Math.random())
        if (rand == 0) { // ...this shirt.
          quote += " this shirt.";
        }
        else if (rand == 1) { // ...Julius Caesar.
          quote += " Julius Caesar.";
        }
      }
    }
    else if (rand == 2) { // ...image...
      quote += " image";
      rand = Math.round(Math.random())
      if (rand == 0) { // ...is...
        quote += " is";
        rand = Math.round(Math.random() * 3)
        if (rand == 0) { // ...cat.
          quote += " a cat.";
        }
        else if (rand == 1) { // ...creature.
          quote += " a creature.";
        }
        else if (rand == 2) { // ...funny.
          quote += " funny.";
        }
        else if (rand == 3) { // ...not funny.
          quote += " not funny.";
        }
      }
      else if (rand == 1) { // ...represents...
        quote += " represents";
        rand = Math.round(Math.random())
        if (rand == 0) { // ...my life.
          quote += " my life.";
        }
        else if (rand == 1) { // ...nothing.
          quote += " nothing.";
        }
      }
    }
  }
  /*
  else if (rand == 1) { // You...
    quote += "You";
  }
  else if (rand == 2) { // Life...
    quote += "Life";
  }
  else if (rand == 3) { // Cats...
    quote += "Cats";
  }
  */
  rand = Math.round(Math.random() * 100);
  if (rand == 69) { // HACK CLUB / HIGH SEAS
    rand = Math.round(Math.random());
    if (rand == 0) { // HACK CLUB
      quote = "HACK CLUB";
    }
    else if (rand == 1) { // HIGH SEAS
      quote = "HIGH SEAS";
    }
  }
  rand = Math.round(Math.random() * 10);
  if (rand == 2) { // :D
    quote += " :D";
  }
}

async function newFont() {
  let newFont = Math.round(Math.random() * (fonts.length - 1));
  while (newFont == font) {
    newFont = Math.round(Math.random() * (fonts.length - 1));
  }
  font = newFont;
}

function generateImage() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(shirt, 43.5, 0);
  ctx.font = "11px " + fonts[font];
  ctx.fillStyle = "black";
  ctx.fillText(quote, 250 - 2 * quote.length, 320);
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

async function catButton() {
  await newCat();
  generateImage();
}

async function quoteButton() {
  await newQuote();
  generateImage();
}

async function fontButton() {
  await newFont();
  generateImage();
}

async function allButton() {
  newCat();
  newQuote();
  await newFont();
  generateImage();
}