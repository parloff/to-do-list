const dButton = document.querySelector(".dropdown-button");

dButton.addEventListener("click", () => {
  //Toggle button height
  dButton.style.height = dButton.style.height === "25vh" ? "" : "25vh";
  //Toggle button width
  dButton.style.width = dButton.style.width === "24vw" ? "" : "24vw";
  //Toggle button background color
  dButton.style.backgroundColor =
    dButton.style.backgroundColor === "" ? "" : "";
  //Drop down content element
  const dropdownContent = document.querySelector(".dropdown-content");
  //Drop down content display
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});
