// console.log('js connected');

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

// job total count
const jobsSectionCard = document.getElementById('jobs-section');
// console.log(jobsSectionCard.children)
// console.log(jobsSectionCard.children.length);

function allTotalCount () {
  totalCount.innerText = jobsSectionCard.children.length
}

allTotalCount();

// card status change

jobsSectionCard.addEventListener("click", function (event) {
  // console.log('clicked')
  const cards = event.target.closest(".card")
  // console.log(cards)

  if (event.target.classList.contains("interview-btn")) {
    // console.log("interview btn")
    cards.dataset.status = "interview";
    const statusButton = cards.querySelector(".status");
    // console.log(statusButton);
    statusButton.innerText = 'INTERVIEW';
  }

  if (event.target.classList.contains("rejected-btn")) {
    // console.log("rejected btn")
    cards.dataset.status = "rejected";
    const statusButton = cards.querySelector(".status");
    // console.log(statusButton);
    statusButton.innerText = "REJECTED";
  }

});

// all filter button
document.getElementById("all-btn")
  .addEventListener("click", function () {
    // console.log('button clicked');
    const alCards = document.querySelectorAll(".card");
    for (const cards of alCards) {
      // console.log(cards);
      cards.classList.remove("hidden")
    }
  });

  // interview count

let countInterviewBtn = 0;

const interviewButtons = document.querySelectorAll(".interview-btn");

for (const buttons of interviewButtons) {
  // console.log(buttons);
  buttons.addEventListener("click", function () {
    countInterviewBtn++;
    interviewCount.innerText = countInterviewBtn;
  });
}

// rejected count
let countRejectedBtn = 0;
const rejectedButtons = document.querySelectorAll(".rejected-btn");

for (const buttons of rejectedButtons) {
  // console.log(buttons);
  buttons.addEventListener("click", function () {
    countRejectedBtn++;
    rejectedCount.innerText = countRejectedBtn;
  });
}

// interview filter

const hiddenDiv = document.getElementById('hidden-div');

document.getElementById("interview-btn")
  .addEventListener("click", function () {
    // console.log("rejected clicked")
    let count = 0;
    const allCards = document.querySelectorAll(".card");
    // console.log(allCards)
    for (const cards of allCards) {
      if (cards.dataset.status === "interview") {
        cards.classList.remove("hidden");
        count++;
      }
      else {
        cards.classList.add("hidden");
      }
    }
    // hidden div
    if (count === 0) {
      hiddenDiv.classList.remove('hidden')
    } else {
      hiddenDiv.classList.add('hidden')
    }
  });

  // rejected filter

document.getElementById("rejected-btn")
  .addEventListener("click", function () {
    // console.log("rejected clicked")
    let count = 0;
    const allCards = document.querySelectorAll(".card");
    // console.log(allCards);
    for (const cards of allCards) {
      if (cards.dataset.status === "rejected") {
        cards.classList.remove("hidden");
        count++
      }
      else {
        cards.classList.add("hidden");
      }
    }
    // hidden div
    if (count === 0) {
      hiddenDiv.classList.remove('hidden');
    } else {
      hiddenDiv.classList.add('hidden');
    }
  });

  // delete btn
jobsSectionCard.addEventListener("click", function (event) {
  // console.log("clicked delete btn")
  if (event.target.closest(".delete-btn")) {
    // console.log("delete btn click")
    const cards = event.target.closest(".card");
    // console.log("cards")
    cards.remove();
    totalCount.innerText = jobsSectionCard.children.length
  }
});
  

  

// console.log(hiddenDiv);
// const cardsHidden = document.querySelectorAll(".card");
// // console.log(cardsHidden);


// function cardsFilter() {
//   let itemList = [];
//   for (const cards of cardsHidden) {
//     if (cards.dataset.status === "interview") {
//       cards.classList.remove('hidden')
//       itemList.push(cards);
//     }
//     else {
//       cards.classList.add('hidden')
//     }
//   }
//   if (itemList.length === 0) {
//     hiddenDiv.classList.remove('hidden');
//   } else {
//     hiddenDiv.classList.add('hidden');
//   }
// }

// cardsFilter();
