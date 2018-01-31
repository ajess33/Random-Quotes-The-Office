
var quotesArray = [

  ["I am Beyonce, always.", " ~ Michael Scott ~"],

  ["Am I going to tell them? No, I am not going to tell them. I don't see the point of that. As a doctor, you would not tell a patient if they had cancer.", "~ Michael Scott ~"],
  ["I ground up four extra-strength aspirin and put them in Michael's pudding. I do the same thing with my dog to get him to take his heartworm medicine.", "~ Ryan ~"],
  ["I'm always thinking one step ahead, like a carpenter that makes stairs.", "~ Andy Bernard ~"],
  ["If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.", "~ Michael Scott ~"],
  ["Well, just tell him to call me ASAP as possible.", "~ Michael Scott ~"],
  ["Occasionally, I'll hit somebody with my car. So sue me.", "~ Michael Scott ~"],
  ["The only difference between me and a homeless man is this job. I will do whatever it takes to survive.", "~ Creed Bratton ~"],
  ["Yeesh.", "~ Michael Scott ~"],
  ["I wish there was a way to know you were in theh good old days before you actually left them.", "~ Andy Bernard ~"],
  ["Finishing that 5k was the hardest thing I've ever done. I ate more fettuccine alfredo, and drank less water, than I have in my entire life", "~ Michael Scott ~"],
  ["Cage Matches? Yeah, they work. How could they not work? If they didn't work, everybody would still be in the cage.", "~ Michael Scott ~"],
  ["Cool beans man. I live by the quarry. We should hang out by the quarry and throw things down there!", "~ Creed Bratton ~"],
  ["One day Michael came in complaining about a speed bump on the highway. I wonder who he ran over then.", "~ Jim Halpert ~"],
  ["Wikipedia is the best thing ever. Anyone in the world can write anythign they want about any subject. So you know you're getting the best possible information.", "~ Michael Scott ~"],
  ["I'm not superstitious but I am a little stitous.", "~ Michael Scott ~"],
  ["Best boss I ever had.", "~ Jim Halpert ~"],
  ["I would not miss it for the world. But if something else came up I would definitely not go.", "~ Michael Scott ~"],
  ["I don't hate it. I just don't like it at all, and it's terrible.", "~ Michael Scott ~"],
  ["Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.", "~ Michael Scott ~"],
  ["And I knew exactly what to do. But in a much more real sense, I had no idea what to do.", "~ Michael Scott ~"],
  ["I am Beyonce, always.", "~ Michael Scott ~"],
];

function newQuote() {
  // generates a random number for the quote
  random = Math.floor(Math.random() * (quotesArray.length));
  for (var i = 0; i < quotesArray.length; i++) {
    document.getElementById("quote").innerHTML = quotesArray[random][0];
    document.getElementById("person").innerHTML = quotesArray[random][1];
    return quotesArray[random];
  }
};

function tweetQuote() {
  window.open('https://twitter.com/intent/tweet?text=' + quotesArray[random]);
};

var nextQuoteButton = document.getElementById("new-quote");
nextQuoteButton.addEventListener("click", newQuote);
newQuote();

var tweetButton = document.getElementById("tweet");
tweet.addEventListener("click", tweetQuote);

