const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
//
const vines = [
  "look at this graph",
  "oh yes wait a minute mister post man",
  "yeah, i sure hope it does",
  "try me bitch",
  "look at all those chickens",
  "Hi my name's Trey, I have a basketball game tomorrow. Well I'm a point guard, I got shoe game",
  "I wanna be a cowboy baby... I wanna be a cowboy baby.",
  "CHRIS! Is that a weed? No this is a crayon. Im calling the police",
  "...And they were roommates"
];
const weather = [
  "weather sucks",
  "you should go outside and find out",
  "either way theres still global warming",
  "either way you need a tan",
  "use your phone like everyone else"
];
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log("voice is activated");
};

recognition.onresult = function(e) {
  const current = e.resultIndex;

  const transcript = e.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

/// listener

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text =
    "DOES.. NOT.. COMPUTE!! im just messing with you. ask me about the weather or what my favorite vine quote is!";
  if (message.includes("favorite")) {
    const finalText = vines[Math.floor(Math.random() * vines.length)];
    speech.text = finalText;
  }
  if (message.includes("weather")) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  }
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
