//META{"name":"HideClearVisionVersion"}*//

class HideClearVisionVersion {
  start() {
    this.hideVersionText();
    // Also observe DOM changes to hide if Discord re-renders
    this.observer = new MutationObserver(() => this.hideVersionText());
    this.observer.observe(document.body, { childList: true, subtree: true });
  }
  stop() {
    if (this.observer) this.observer.disconnect();
  }
  hideVersionText() {
    // Select all elements possibly containing ClearVision version text
    const selectors = [
      'div[class*="version"]',
      'span[class*="version"]',
      'div[class*="watermark"]',
      'span[class*="watermark"]',
      'div[class*="notice"]',
      'span[class*="notice"]',
      'div[aria-label*="ClearVision"]',
      'div[data-testid*="watermark"]',
    ];
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (el.textContent.includes("ClearVision")) {
          el.style.display = "none";
          el.style.visibility = "hidden";
          el.style.height = "0";
          el.style.width = "0";
          el.style.overflow = "hidden";
          el.style.pointerEvents = "none";
        }
      });
    });
  }
}
