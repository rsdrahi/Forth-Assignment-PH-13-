// console.log('js connected');

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const jobsSectionCard = document.getElementById('jobs-section');
// console.log(jobsSectionCard.children.length);

function allTotalCount () {
  totalCount.innerText = jobsSectionCard.children.length
}

allTotalCount();

jobsSectionCard.addEventListener("click", function (event) {
  const cards = event.target.closest(".card")
  // console.log(cards)

  if (event.target.classList.contains("interview-btn")) {
    cards.dataset.status = "interview";
    const statusButton = cards.querySelector(".status");
    // console.log(statusButton);
    statusButton.innerText = 'interview';
  }

  if (event.target.classList.contains("rejected-btn")) {
    cards.dataset.status = "rejected";
    const statusButton = cards.querySelector(".status");
    // console.log(statusButton);
    statusButton.innerText = "rejected";
  }

});

document.getElementById("all-btn")
  .addEventListener("click", function () {
    // console.log('button clicked');
    const alCards = document.querySelectorAll(".card");
    for (const cards of alCards) {
      // console.log(cards);
      cards.classList.remove("hidden")
    }
  });

document.getElementById("interview-btn")
  .addEventListener("click", function () {
    // console.log("interview clicked")
    const allCards = document.querySelectorAll(".card");
    // console.log(allCards)
    for (const cards of allCards) {
      if (cards.dataset.status === "interview") {
        cards.classList.remove("hidden");
      }
      else {
        cards.classList.add("hidden");
      }
    }
  });

document.getElementById("rejected-btn")
  .addEventListener("click", function () {
    // console.log("rejected clicked")
    const allCards = document.querySelectorAll(".card");
    // console.log(allCards);
    for (const cards of allCards) {
      if (cards.dataset.status === "rejected") {
        cards.classList.remove("hidden");
      }
      else {
        cards.classList.add("hidden");
      }
    }
  });
