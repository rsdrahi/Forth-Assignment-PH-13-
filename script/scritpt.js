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


