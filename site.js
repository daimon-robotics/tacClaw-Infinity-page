"use strict";
for (const anchor of document.querySelectorAll("[data-resource]")) {
  const value = (window.TACCLAW_LINKS?.[anchor.dataset.resource] || "").trim();
  if (!value) continue;
  let url;
  try { url = new URL(value); } catch { continue; }
  if (!["https:", "http:"].includes(url.protocol)) continue;
  anchor.href = url.href;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.removeAttribute("aria-disabled");
  anchor.classList.remove("pending");
  anchor.querySelector(".resource-detail")?.remove();
}
document.getElementById("copy-citation")?.addEventListener("click", async () => {
  const text = document.getElementById("bibtex").textContent;
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "BibTeX copied.";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("bibtex"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = "Citation selected. Use your browser’s Copy command.";
  }
});
