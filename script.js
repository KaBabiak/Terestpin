document.getElementById("login").addEventListener("click", () => overlayOn());
document.getElementById("overlay").addEventListener("click", () => overlayOn());
document.getElementById("accept").addEventListener("click", () => accept());

function overlayOn() {
  document.getElementById("overlay").style.display =
    window.getComputedStyle(document.getElementById("overlay")).display ===
    "none"
      ? "block"
      : "none";

  //     if(st.display === "none"){
  //         overlay.style.display = "block";
  //     }else{
  //         overlay.style.display = "none";
  //     }
}

function accept() {
  document.getElementById("terms").style.display = "none";
}
