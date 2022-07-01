var exp = document.getElementById("export");

if (exp) {
    exp.addEventListener("click", exportCookies);
}

var imp = document.getElementById("import");

if (imp) {
    imp.addEventListener("click", importCookies);
}

function exportCookies() {
    alert(document.cookie.length);
}

function importCookies() {
    alert(document.cookie.length);
}
