// Accordion
document.querySelectorAll(".acc-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-acc");
    const panel = document.getElementById(id);

    // close others
    document.querySelectorAll(".acc-btn").forEach((b) => {
      if (b !== btn) b.classList.remove("acc-open");
    });
    document.querySelectorAll(".acc-panel").forEach((p) => {
      if (p !== panel) p.style.display = "none";
    });

    // toggle current
    const isOpen = btn.classList.toggle("acc-open");
    panel.style.display = isOpen ? "block" : "none";

    // icon
    document.querySelectorAll(".acc-icon").forEach((i) => (i.textContent = "+"));
    btn.querySelector(".acc-icon").textContent = isOpen ? "–" : "+";
  });
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();
