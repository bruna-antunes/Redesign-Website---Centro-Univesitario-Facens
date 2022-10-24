function toggleButton() {
  const email = document.getElementById('#email').value;
  const senha = document.getElementById('#senha').value;

  if (email && senha) {
    document.getElementById('#login').disabled = false;
    return;
  }
  document.getElementById('#login').disabled = true;
}