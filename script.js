const c = document.getElementById("gen");
const ctx = c.getContext("2d");
const fonts = ["Open Sans", "Itim", "Playfair Display", "Creepster"];
let shirt = new Image;
shirt.src = "shirt.png";
let cat = new Image;
let quote = "";
let font = 0;

async function newCat() {
  await getData().then(result => {
    cat.src = result
  });
  await new Promise(r => setTimeout(r, 100));
  console.log("Fetched cat");
}

async function newQuote() {
  quote = "";
  let rand = Math.round(Math.random() * 1)
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
  else if (rand == 1) { // You...
    quote += "You";
    rand = Math.round(Math.random())
    if (rand == 0) { // ...deserve...
      quote += " deserve";
      rand = Math.round(Math.random())
      if (rand == 0) { // ...a good life.
        quote += " a good life.";
      }
      else if (rand == 1) { // ...this cat image.
        quote += " this cat image.";
      }
    }
    else if (rand == 1) { // ...are...
      quote += " are";
      rand = Math.round(Math.random())
      if (rand == 0) { // ...just like this cat.
        quote += " just like this cat.";
      }
      else if (rand == 1) { // ...a great person.
        quote += " a great person.";
      }
    }
  }
  else if (rand == 2) { // Life...
    quote += "Life";
    rand = Math.round(Math.random() * 2)
    if (rand == 0) { // ...could be a dream.
      quote += " could be a dream.";
    }
    else if (rand == 1) { // ... your life was incomplete...
      quote += " is like";
      rand = Math.round(Math.random() * 2)
      if (rand == 0) { // ...without a cat.
        quote += " without a cat.";
      }
      else if (rand == 1) { // ...without this cat.
        quote += " without this cat."
      }
      else if (rand == 2) { // ...until you've seen this cat.
        quote += " until you've seen this cat."
      }
    }
    else if (rand == 2) { // ...is...
      quote += " is";
      rand = Math.round(Math.random() * 3)
      if (rand == 0) { // ...amazing.
        quote += " amazing.";
      }
      else if (rand == 1) { // ...so fun.
        quote += " so fun.";
      }
      else if (rand == 2) { // ...good.
        quote += " good.";
      }
      else if (rand == 3) { // ...beautiful.
        quote += " beautiful.";
      }
    }
  }
  /*
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
  await new Promise(r => setTimeout(r, 100));
  console.log("Generated quote:\n" + quote);
}

async function newFont() {
  let newFont = Math.round(Math.random() * (fonts.length - 1));
  while (newFont == font) {
    newFont = Math.round(Math.random() * (fonts.length - 1));
  }
  font = newFont;
  await new Promise(r => setTimeout(r, 100));
  console.log("Got font");
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
  console.log("Set cat");
}

async function quoteButton() {
  await newQuote();
  generateImage();
  console.log("Set quote");
}

async function fontButton() {
  await newFont();
  generateImage();
  console.log("Set font");
}

async function allButton() {
  newCat();
  newQuote();
  await newFont();
  generateImage();
  console.log("Set all");
}

function download() {
  const link = document.createElement("a");
  link.download = "shirt.png";
  link.href = c.toDataURL();
  link.click();
}