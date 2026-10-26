/* Theme bootstrap: runs before React hydrates (loaded via next/script beforeInteractive).
   Mirrors the app default: dark, unless a stored preference or light OS setting says otherwise. */
(function () {
  try {
    var stored = null;
    try {
      stored = localStorage.getItem("gj-theme");
    } catch {}
    var dark = stored ? stored === "dark" : !window.matchMedia("(prefers-color-scheme: light)").matches;
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    var tint = document.querySelector('meta[name="theme-color"]');
    if (tint) tint.content = dark ? "#201c2a" : "#ede8f6";
  } catch {}
})();
