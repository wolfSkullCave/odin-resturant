function pageLoad() {
  const divContent = document.querySelector(".content");

  const clear = () => (divContent.innerHTML = "");
  const add = (element) => divContent.appendChild(element);
  const addClass = (className) => divContent.classList.add(className);

  return { clear, add, addClass };
}

export { pageLoad };
