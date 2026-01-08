function togglePassword(btnId, inputId){
  const btn = document.getElementById(btnId);
  const input = document.getElementById(inputId);
  if(!btn || !input) return;

  btn.addEventListener("click", () => {
    const isPw = input.getAttribute("type") === "password";
    input.setAttribute("type", isPw ? "text" : "password");
    btn.textContent = isPw ? "Masquer" : "Afficher";
    btn.setAttribute("aria-pressed", String(isPw));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  togglePassword("togglePw", "password");
});
