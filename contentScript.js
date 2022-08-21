function addScript(src, local) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = local ? chrome.runtime.getURL(src) : src;
    document.documentElement.appendChild(script);
}

function addStyles() {
    const linkTag = document.createElement('link');
    linkTag.rel = 'stylesheet'
    linkTag.href = chrome.runtime.getURL('/src/alertify.min.css');
    document.documentElement.appendChild(linkTag)
}

addScript("/src/console-listener.js", true);
addScript("alertify.min.js", true);
addStyles();
