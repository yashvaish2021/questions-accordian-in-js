const questions = window.document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (!item.isEqualNode(question)) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
