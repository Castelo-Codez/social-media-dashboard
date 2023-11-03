import "../style/output.css";

let $themeSwitcher = document.querySelector("button");

if (window.localStorage.getItem("theme")) {
    document.documentElement.classList.add(
        window.localStorage.getItem("theme")
    );
    $themeSwitcher.classList.add("change-theme");
}
$themeSwitcher.addEventListener("click", (e) => {
    $themeSwitcher.classList.toggle("change-theme");
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.contains("dark")
        ? $theme("dark", true)
        : $theme("");
});

function $theme(theme = "", $status = false) {
    if ($status) {
        window.localStorage.setItem("theme", theme);
    } else {
        window.localStorage.removeItem("theme");
    }
}
