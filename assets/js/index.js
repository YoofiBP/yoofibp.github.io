const root = document.getElementById("root");

let portfolio = $("#portfolio");
let recommendations = $("#recommendations");
let intro = $("#intro");

let sections = {
  portfolio: portfolio,
  recommendations: recommendations,
  intro: intro,
};

function changeContent(div) {
  for (section in sections) {
    sections[section].detach();
  }
  $("#root").append(sections[div]);
}

changeContent("intro");
