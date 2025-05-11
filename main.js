
let a = 0;
let sittingsIconI = document.querySelector(".sittings-list .sittings-icon i");

if (window.localStorage.getItem("--main-color") !== null) {
  let x = window.localStorage.getItem("--main-color");
  document
    .querySelectorAll(".sittings-list .colors ul li")
    .forEach(function (element) {
      element.style.opacity = "0.2";
    });
  document
    .querySelectorAll(".sittings-list .colors ul li")
    .forEach(function (element) {
      if (window.getComputedStyle(element).backgroundColor === x) {
        element.style.opacity = "1";
      }
    });
  document.documentElement.style.setProperty("--main-color", `${x}`);
} else {
  document
    .querySelectorAll(".sittings-list .colors ul li")
    .forEach(function (element) {
      element.style.opacity = "0.2";
    });
  document.querySelectorAll(".sittings-list .colors ul li")[0].style.opacity =
    "1";
}

if (window.localStorage.getItem("random-background-active-button") !== null) {
  let dat = window.localStorage.getItem("random-background-active-button");
  document
    .querySelectorAll(".sittings-list .random-background span")
    .forEach(function (element) {
      element.style.opacity = "0.3";
    });
  document
    .querySelectorAll(".sittings-list .random-background span")
    .forEach(function (element) {
      if (element.getAttribute("data") === dat) {
        element.style.opacity = "1";
      }
    });
} else {
  document
    .querySelectorAll(".sittings-list .random-background span")
    .forEach(function (element) {
      element.style.opacity = "0.3";
    });
  document.querySelectorAll(
    ".sittings-list .random-background span"
  )[1].style.opacity = "1";
}

if (window.localStorage.getItem("random-background-active-button") !== null) {
  if (
    window.localStorage.getItem("random-background-active-button") === "yes"
  ) {
    console.log("yes is");
    setRandomBackground();
  } else {
    deleteRandomBackground(a);
  }
}

let cards = document.querySelectorAll(".our-team .card");
cards.forEach(function (card) {
  let contact = card.querySelector(".team-contact");
  let xMark = card.querySelector(".fa-xmark");
  let show = card.querySelector(".show");
  contact.onclick = function () {
    show.classList.toggle("active");
  };
  xMark.onclick = function () {
    show.classList.toggle("active");
  };
});



// start to top button

let toTopButton = document.querySelector("#to-top");

window.onscroll = function () {
  if (window.scrollY >= 275) {
    toTopButton.style.display = "flex";
  } else {
    toTopButton.style.display = "none";
  }
};
toTopButton.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// end to top button

// start sittings list

let sittingsList = document.getElementsByClassName("sittings-list")[0];
let sittingsIcon = document.getElementsByClassName("sittings-icon")[0];
sittingsIcon.onclick = function () {
  sittingsIcon.querySelector("i").classList.toggle("fa-spin");
  sittingsList.classList.toggle("show-sittings-list");
  sittingsList.classList.toggle("show-text-shadow-on-sittings-list");
};
let colorsLis = document.querySelectorAll(".sittings-list .colors ul li");
colorsLis.forEach(function (e) {
  e.onclick = function () {
    colorsLis.forEach(function (el) {
      el.style.opacity = "0.3";
    });
    e.style.opacity = "1";
    document.documentElement.style.setProperty(
      "--main-color",
      `${window.getComputedStyle(e).backgroundColor}`
    );
    window.localStorage.setItem(
      "--main-color",
      `${window.getComputedStyle(e).backgroundColor}`
    );
  };
});

// start random background

let randomBackgroundButtons = document.querySelectorAll(
  ".sittings-list .random-background span"
);
randomBackgroundButtons.forEach(function (e) {
  e.onclick = function () {
    randomBackgroundButtons.forEach(function (el) {
      el.style.opacity = "0.3";
    });
    e.style.opacity = "1";
    window.localStorage.setItem(
      "random-background-active-button",
      e.getAttribute("data")
    );
  };
});


function setRandomBackground() {
  a = setInterval(function () {
    let randomNumber = Math.floor(Math.random() * 4);
    document.querySelector(".welcome-page").style.backgroundImage =
      `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.496) 50%,
      rgba(0, 0, 0, 0.726)
    ),` +
      "url('./images/landing-" +
      randomNumber +
      ".jpg')";
  }, 10 * 1000);
}
function deleteRandomBackground() {
  clearInterval(a);
}

let randomBackgroundYesButton = document.querySelector(
  ".sittings-list .random-background .yes"
);
let randomBackgroundNoButton = document.querySelector(
  ".sittings-list .random-background .no"
);
randomBackgroundYesButton.addEventListener("click", function () {
  setRandomBackground();
  window.localStorage.setItem("data", randomBackgroundYesButton.data);
});

randomBackgroundNoButton.addEventListener("click", function () {
  deleteRandomBackground();
  window.localStorage.setItem("data", randomBackgroundNoButton.data);
});

// end random background

// end sittings list

// start our skills

let skillColorOverlayElements = document.querySelectorAll(
  ".our-skills .skill .color .overlay"
);
let persentElements = document.querySelectorAll(
  ".our-skills .skill .color .overlay .persent"
);
window.addEventListener("scroll", function () {
  let locationOfOurSkillsList = document.querySelector(
    ".our-skills .skills-list"
  ).offsetTop;
  if (
    window.scrollY > locationOfOurSkillsList - 640 &&
    window.scrollY < locationOfOurSkillsList +318
  ) {
    skillColorOverlayElements.forEach(function (el) {
      let colorWidth = el.getAttribute("color-width");
      el.style.width = colorWidth;
      persentElements.forEach(function (persent) {
        persent.style.opacity = "1";
      });
    });
  } else {
    skillColorOverlayElements.forEach(function (el) {
      el.style.width = "0%";
    });
    persentElements.forEach(function (persent) {
      persent.style.opacity = "0";
    });
  }
});

persentElements.forEach(function (element) {
  let parent = element.parentElement;
  let data = parent.getAttribute("color-width");
  element.innerHTML = data;
});

// end our skills
