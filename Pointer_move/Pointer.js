document.addEventListener("pointermove", (e) => {
  const brightness = (e.clientX / window.innerWidth) * 100;
  document.documentElement.style.setProperty("--brightness", brightness + "%");
});
