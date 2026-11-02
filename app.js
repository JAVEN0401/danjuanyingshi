/* 渲染公共逻辑：所有页面共用 */
function catById(id) {
  return SITE.categories.find(function (c) { return c.id === id; }) || { id: id, name: "未分类", emoji: "📁" };
}

function entryCard(e) {
  var c = catById(e.cat);
  var linksHtml = e.links.map(function (l) {
    var codeHtml = l.code ? ' <span class="code">提取码: <b>' + esc(l.code) + '</b></span>' : '';
    return '<div class="link-row">' +
      '<span class="pan-type pan-' + esc(l.type) + '">' + esc(l.type) + '</span>' +
      '<a href="' + esc(l.url) + '" target="_blank" rel="noopener" class="pan-link">' + esc(l.url) + '</a>' +
      codeHtml + '</div>';
  }).join("");

  return '<article class="entry">' +
    '<h3 class="entry-title">《' + esc(e.title) + '》' +
    (e.status ? '<span class="status ' + (e.status === "完结" ? "done" : "updating") + '">' + esc(e.status) + '</span>' : '') +
    '<a class="cat-badge" href="#/cat/' + encodeURIComponent(e.cat) + '">' + c.emoji + ' ' + esc(c.name) + '</a>' +
    '</h3>' + linksHtml + '</article>';
}

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function renderEntries(list, el) {
  el.innerHTML = list.length
    ? list.map(entryCard).join("")
    : '<p class="empty">没有找到相关资源 ~</p>';
}

function getParam(name) {
  return new URLSearchParams(location.search).get(name) || "";
}
