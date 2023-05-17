const settings_page = document.getElementById("settings-page");

function close_settings() {
  settings_page.style.visibility = "hidden";
  content.style.visibility  = "visible";
  content.style.display     = "block";
}

function show_settings() {
  settings_page.style.visibility = "visible";
  content.style.visibility  = "hidden";
  content.style.display     = "none";
}