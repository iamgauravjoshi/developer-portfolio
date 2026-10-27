/* Theme bootstrap: runs before React hydrates (loaded via next/script beforeInteractive).
   Light is the first-visit default; a saved preference takes precedence. */
(function () {
  try {
    var stored = null;
    try {
      stored = localStorage.getItem("gj-theme");
    } catch {}
    var dark = stored === "dark";
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    var tint = document.querySelector('meta[name="theme-color"]');
    if (tint) tint.content = dark ? "#201c2a" : "#ffffff";
  } catch {}
})();
