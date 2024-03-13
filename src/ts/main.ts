import * as bootstrap from "bootstrap";

import "@styles/styles.scss";

// don"t touch
// -----------------------
export function init() {
  const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
  let dropdownList = [] as bootstrap.Dropdown[];
  dropdownElementList.forEach(dropdownElem => dropdownList.push(new bootstrap.Dropdown(dropdownElem)));
}
// -----------------------
