// Selectors
const getMenuButton = document.querySelector("#menubutton");
const getToggleMenu = document.querySelector("nav ul");

// Background color selectors
const changeToDarkgrey = document.querySelector(".darkgrey");
const changeToCoral = document.querySelector(".coral");
const changeToTurquoise = document.querySelector(".turquoise");
const changeToPurple = document.querySelector(".purple");
const changeToYellowgreen = document.querySelector(".yellowgreen");

// show/hide menu functions
const showMenu = function () {
  getToggleMenu.style.visibility = "visible";
  getToggleMenu.style.width = "200px";
  getToggleMenu.style.opacity = "1";
};

const hideMenu = function () {
  getToggleMenu.style.visibility = "hidden";
  getToggleMenu.style.width = "0px";
  getToggleMenu.style.opacity = "0";
};

// mouseover menu

getMenuButton.addEventListener("mouseover", showMenu);

getToggleMenu.addEventListener("mouseover", function () {
  showMenu();
});

getMenuButton.addEventListener("mouseover", function () {
  showMenu();
});

getToggleMenu.addEventListener("mouseleave", hideMenu);
getMenuButton.addEventListener("mouseleave", hideMenu);

//Change background color
document.querySelector("#darkgrey").checked = true;

const darkgreyBackground = function () {
  document.body.style.backgroundColor = "darkgrey";
  document.querySelector("#darkgrey").checked = true;
  hideMenu();
};

const coralBackground = function () {
  document.body.style.backgroundColor = "coral";
  document.querySelector("#coral").checked = true;
  hideMenu();
};

const turquoiseBackground = function () {
  document.body.style.backgroundColor = "turquoise";
  document.querySelector("#turquoise").checked = true;
  hideMenu();
};

const purpleBackground = function () {
  document.body.style.backgroundColor = "purple";
  document.querySelector("#purple").checked = true;
  hideMenu();
};

const yellowgreenBackground = function () {
  document.body.style.backgroundColor = "yellowgreen";
  document.querySelector("#yellowgreen").checked = true;
};

//Even Listeners for changing background colors
changeToDarkgrey.addEventListener("click", darkgreyBackground);
changeToCoral.addEventListener("click", coralBackground);
changeToTurquoise.addEventListener("click", turquoiseBackground);
changeToPurple.addEventListener("click", purpleBackground);
changeToYellowgreen.addEventListener("click", yellowgreenBackground);

//keyboard events

document.addEventListener("keydown", function (e) {
  if (e.key === "1") {
    darkgreyBackground();
  } else if (e.key === "2") {
    coralBackground();
  } else if (e.key === "3") {
    turquoiseBackground();
  } else if (e.key === "4") {
    purpleBackground();
  } else if (e.key === "5") {
    yellowgreenBackground();
  }
});
