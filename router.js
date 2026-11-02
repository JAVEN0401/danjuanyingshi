/* hash 路由：#/ 首页 | #/cat/分类id 子页 | #/search 搜索库 */

function catLinksHtml() {
  return SITE.categories.map(function (c) {
    return '<a class="cat-chip" href="#/cat/' + encodeURIComponent(c.id) + '">' +
           c.emoji + ' ' + esc(c.name) + '</a>';
  }).join("");
}

function route() {
  var hash = location.hash || "#/";
  var parts = hash.replace(/^#\/?/, "").split("/");
  var view = parts[0] || "";

  document.getElementById("view-home").hidden = true;
  document.getElementById("view-cat").hidden = true;
  document.getElementById("view-search").hidden = true;

  if (view === "cat") {
    var cat = catById(parts[1] || "");
    document.getElementById("catTitle").textContent = cat.emoji + " " + esc(cat.name);
    var list = SITE.entries.filter(function (e) { return e.cat === cat.id; });
    document.getElementById("catCount").textContent = "共 " + list.length + " 部";
    renderEntries(list, document.getElementById("catList"));
    document.getElementById("view-cat").hidden = false;
    document.title = cat.name + " - " + SITE.title;
  } else if (view === "search") {
    document.getElementById("view-search").hidden = false;
    document.title = "搜索库 - " + SITE.title;
    doSearch();
  } else {
    document.getElementById("view-home").hidden = false;
    document.title = SITE.title;
    renderEntries(SITE.entries.slice(0, 8), document.getElementById("latest"));
  }

  window.scrollTo(0, 0);
}

function doSearch() {
  var kw = document.getElementById("q").value.trim().toLowerCase();
  var fc = document.getElementById("fCat").value;
  var fp = document.getElementById("fPan").value;
  var fs = document.getElementById("fStatus").value;

  var list = SITE.entries.filter(function (e) {
    if (fc && e.cat !== fc) return false;
    if (fs === "done" && e.status !== "完结") return false;
    if (fs === "updating" && e.status === "完结") return false;
    if (fp && !e.links.some(function (l) { return l.type === fp; })) return false;
    if (kw) {
      var cat = catById(e.cat);
      var hay = (e.title + " " + cat.name + " " +
        e.links.map(function (l) { return l.type + " " + l.url + " " + (l.code || ""); }).join(" ")
      ).toLowerCase();
      if (hay.indexOf(kw) === -1) return false;
    }
    return true;
  });

  document.getElementById("searchCount").textContent =
    "找到 " + list.length + " 个结果" + (kw ? "（关键词：" + esc(kw) + "）" : "");
  renderEntries(list, document.getElementById("results"));
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("siteTitle").textContent = SITE.title;
  document.getElementById("notice").textContent = SITE.notice;
  document.getElementById("notice2").textContent = SITE.notice;
  document.getElementById("catGrid").innerHTML = catLinksHtml();
  document.getElementById("catGrid2").innerHTML = catLinksHtml();

  document.getElementById("fCat").innerHTML += SITE.categories.map(function (c) {
    return '<option value="' + c.id + '">' + c.emoji + " " + esc(c.name) + '</option>';
  }).join("");

  ["q", "fCat", "fPan", "fStatus"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", doSearch);
  });

  window.addEventListener("hashchange", route);
  route();
});
