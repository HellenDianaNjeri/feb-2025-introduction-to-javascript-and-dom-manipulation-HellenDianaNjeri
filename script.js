function changeText() {
  const description = document.getElementById("description");
  description.textContent = "The text has been updated dynamically with JavaScript!";
}

function toggleHighlight() {
  const para = document.getElementById("highlight-me");
  para.classList.toggle("highlight");
}

function toggleElement() {
  const container = document.getElementById("message-container");
  const existing = document.getElementById("dynamic-msg");

  if (existing) {
    container.removeChild(existing);
  } else {
    const msg = document.createElement("p");
    msg.id = "dynamic-msg";
    msg.textContent = "This element was added dynamically!";
    container.appendChild(msg);
  }
}
