// document.querySelector("h1").innerHTML = "Hi Sumon"; //javascript foramte
// $("h2").text("Hello MOstak"); //jQuery foramte

// text manipulation
// $("#headin").html("<p>Naeem</p>");
// const text01 = $("<p></p>").html("<b>hello Vai Miuje</b>");
// $("#para").append(text01);

// $("#para").prepend("hi");

// attribute manipulation
document
  .querySelector("a")
  .setAttribute(
    "href",
    "https://chatgpt.com/c/67be97a5-8324-8002-8179-f041f6bb1934"
  );
const link = document.querySelector("a").getAttribute("href");
console.log(link);
const ss = $("a").attr("href");
console.log(ss);
$("a").attr(
  "href",
  "https://chatgpt.com/c/67be97a5-8324-8002-8179-f041f6bb1934"
);
