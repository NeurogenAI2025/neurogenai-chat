function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const message = input.value.trim();
  if (message) {
    const msgElem = document.createElement('p');
    msgElem.textContent = "You: " + message;
    chatBox.appendChild(msgElem);
    input.value = '';
    // Placeholder: call your AI backend here
    const responseElem = document.createElement('p');
    responseElem.textContent = "NeurogenAI: [response]";
    responseElem.style.color = "#00ff99";
    chatBox.appendChild(responseElem);
  }
}
