function toRandomFlink() {
  const flinkIcons = document.querySelectorAll("div.flink-icon a");
  const randomIndex = Math.floor(Math.random() * flinkIcons.length);
  const randomLink = flinkIcons[randomIndex].href;

  // 在当前窗口中跳转到随机选择的链接
  window.location.href = randomLink;
}
function toApplyFlink() {
  const postCommentDiv = document.getElementById("post-comment");

  // 使用 scrollIntoView 方法将 postCommentDiv 滚动到可见区域
  postCommentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
}
