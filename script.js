function waitForElementToLoad(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

(async () => {
  const bookingNumberInput = await waitForElementToLoad("input#BookingNumber");
  bookingNumberInput.onkeydown = (event) => {
    if (event.target.value.toString().length >= 10) {
      event.preventDefault();
    }
  };
  bookingNumberInput.type = "number";
})();
