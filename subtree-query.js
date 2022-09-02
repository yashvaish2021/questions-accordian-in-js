const questionBtn = window.document.querySelectorAll(".question-btn");
const questions = window.document.querySelectorAll(".question");

questionBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    questions.forEach((question) => {
      if (question.classList.contains("show-text")) {
        question.classList.remove("show-text");
      }
    });
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
