const settings = document.getElementById("settings-page");

function close_settings() {
  settings.style.visibility = "hidden";
  content.style.visibility  = "visible";
  content.style.display     = "block";
}

function show_settings() {
  settings.style.visibility = "visible";
  content.style.visibility  = "hidden";
  content.style.display     = "none";
}
