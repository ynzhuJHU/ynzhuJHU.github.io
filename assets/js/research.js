(function () {
  var explorer = document.querySelector("[data-research-explorer]");
  if (!explorer) return;
  var topics = explorer.querySelectorAll(".research-topic");
  var stage = explorer.querySelector(".research-explorer-stage");
  var image = stage.querySelector("img");
  var caption = stage.querySelector("figcaption");

  function selectTopic(selected) {
    topics.forEach(function (topic) {
      if (topic !== selected) topic.open = false;
    });
    image.src = selected.dataset.image;
    image.alt = selected.dataset.caption;
    caption.textContent = selected.dataset.caption;
  }

  topics.forEach(function (topic) {
    topic.addEventListener("toggle", function () {
      if (topic.open) selectTopic(topic);
    });
  });
  explorer.classList.add("is-enhanced");
  var initial = explorer.querySelector("details[open]");
  if (initial) selectTopic(initial);
}());
