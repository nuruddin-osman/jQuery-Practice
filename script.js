// document.querySelector("h1").innerHTML = "Hi Sumon"; //javascript foramte
// $("h2").text("Hello MOstak"); //jQuery foramte

// text manipulation
// $("#headin").html("<p>Naeem</p>");
// const text01 = $("<p></p>").html("<b>hello Vai Miuje</b>");
// $("#para").append(text01);

// $("#para").prepend("hi");

// attribute manipulation
// document
//   .querySelector("a")
//   .setAttribute(
//     "href",
//     "https://chatgpt.com/c/67be97a5-8324-8002-8179-f041f6bb1934"
//   );
// const link = document.querySelector("a").getAttribute("href");
// console.log(link);
// const ss = $("a").attr("href");
// console.log(ss);
// $("a").attr(
//   "href",
//   "https://chatgpt.com/c/67be97a5-8324-8002-8179-f041f6bb1934"
// );

// CSS Style manipulating

// $("p").css("color", "red");
// $("p").css("font-weight", "bold");
// $("p").css("font-size", "4rem");

// $("p").css({ "font-size": "4rem", "font-weight": "bold", color: "green" });

// document.querySelector("p").classList.add("para");
// document.querySelector("p").classList.remove("para1");
// $("p").addClass("para");
// $("p").removeClass("para1");

// Event Listener
document.querySelector(".button1").addEventListener("click", function () {
  document.querySelector(".heading1").innerHTML = "Ami paichi";
});
document.querySelector(".button1").addEventListener("click", function () {
  document.querySelector(".heading1").classList.toggle("para");
});

$(".button2").click(function () {
  $(".heading2").text("Paichi re paichi");
});

$(".button3").click(function () {
  $(".heading3").toggleClass("para");
});

let allBtn = document.querySelectorAll(".button5").length;
for (let index = 0; index < allBtn; index++) {
  document
    .querySelectorAll(".button5")
    [index].addEventListener("click", function () {
      let sum = this.innerHTML;
      document.querySelector(".heading5").innerHTML = sum + " " + "is Clicked";
    });
}

$(".button6").click(function () {
  let sum = this.innerHTML;
  $(".heading6").text(sum + " " + "is Clicked");
});
