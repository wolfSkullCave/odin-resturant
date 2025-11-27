function pageLoad(element) {
  const divContent = document.querySelector(".content");
  divContent.innerHTML = "";
  divContent.appendChild(element);
}

export { pageLoad };
