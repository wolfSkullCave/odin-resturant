// page-load.js
// This method is imported in the other modules.
// This method adds elements to the DOM.

function pageLoad() {
  const divContent = document.querySelector(".content");

  const clear = () => (divContent.innerHTML = ""); // clears the content div
  const add = (element) => divContent.appendChild(element); // adds an element to the DOM
  const addClass = (className) => {
    divContent.className = "content";
    divContent.classList.add(className);
  };
  return { clear, add, addClass };
}

export { pageLoad };
