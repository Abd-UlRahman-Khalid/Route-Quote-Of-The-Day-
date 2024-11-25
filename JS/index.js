var qouteArray = [
  {
    qouteTitle: "Oscar Wilde",
    qouteContent: "Be yourself; everyone else is already taken.",
  },

  {
    qouteTitle: "Marilyn Monroe",
    qouteContent: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
  },

  {
    qouteTitle: "Frank Zappa",
    qouteContent: `So many books, so little time.`,
  },

  {
    qouteTitle: "Albert Einstein",
    qouteContent: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
  },

  {
    qouteTitle: "Marcus Tullius Cicero",
    qouteContent: "A room without books is like a body without a soul.",
  },

  {
    qouteTitle: "Bernard M. Baruch",
    qouteContent: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
  },

  {
    qouteTitle: "William W. Purkey",
    qouteContent: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
  },

  {
    qouteTitle: "Dr. Seuss",
    qouteContent: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
  },
  {
    qouteTitle: "Mae West",
    qouteContent: `You only live once, but if you do it right, once is enough.`,
  },
  {
    qouteTitle: "Mahatma Gandhi",
    qouteContent: `Be the change that you wish to see in the world.`,
  },
];

// Get Elements from Html
const qTitle = document.getElementById("QTitle");
const qContent = document.getElementById("quote");
const btn = document.getElementById("btn");

qTitle.innerHTML = ``;
qContent.innerHTML = ``;

// Get Randome Number
function getRandomNum() {
  return Math.floor(qouteArray.length * Math.random());
  // used Math.floor to convert the floating-point number into integer
}

//   Adding Event Listener to my Button
btn.addEventListener("click", () => {
  console.log(getRandomNum());
  getRandomNum();
  let randomNum = getRandomNum();
  qTitle.innerHTML = qouteArray[randomNum].qouteTitle;
  qContent.innerHTML = `" ${qouteArray[randomNum].qouteContent} "`;
});
