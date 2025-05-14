
// 1. Tự động gọi tab theo hash URL
window.addEventListener("DOMContentLoaded", () => {
  const hash = location.hash.replace("#", "") || "home";
  switchTab(hash);
});

// 2. Bắt sự kiện khi bấm nút Back/Forward
window.addEventListener("hashchange", () => {
  const hash = location.hash.replace("#", "");
  switchTab(hash);
});

// 3. Hàm đổi tab: ẩn hết, hiện cái cần
function switchTab(tabId) {
  const allTabs = document.querySelectorAll(".tab-content");
  allTabs.forEach((el) => el.classList.add("hidden"));

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.remove("hidden");
  }
}

// 4. Khi click tab, đổi hash luôn
document.querySelectorAll("[data-tab]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");
    location.hash = target;
  });
});
