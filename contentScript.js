function addScript(src, local) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = local ? chrome.extension.getURL(src) : src;
  document.documentElement.appendChild(script);
}
addScript("/src/console-listener.js", true);
addScript("alertify.min.js", true);