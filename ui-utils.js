
// ================== TOAST ==================
function toast(msg, duration = 3000) {
  const toast = document.createElement("div");
  toast.innerText = msg;
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #333;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    z-index: 9999;
    font-size: 14px;
    opacity: 0.95;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    transition: all 0.5s ease-in-out;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, duration);
}

// ================== CONFIRM BOX ==================
function confirmBox(msg, callback) {
  let confirmDiv = document.createElement("div");
  confirmDiv.innerHTML = `
    <div style="
      position: fixed; top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.4);
      display: flex; align-items: center; justify-content: center;
      z-index: 9998;
    ">
      <div style="
        background: white; padding: 20px 25px;
        border-radius: 8px; max-width: 90%;
        text-align: center; font-size: 15px;
      ">
        <div style="margin-bottom: 15px;">${msg}</div>
        <button id="confirm-ok" style="margin-right: 10px;">OK</button>
        <button id="confirm-cancel">Hủy</button>
      </div>
    </div>
  `;
  document.body.appendChild(confirmDiv);

  confirmDiv.querySelector("#confirm-ok").onclick = () => {
    callback();
    confirmDiv.remove();
  };
  confirmDiv.querySelector("#confirm-cancel").onclick = () => {
    confirmDiv.remove();
  };
}

// ================== LOADING ==================
function showLoading() {
  if (document.getElementById("loading-overlay")) return;
  const overlay = document.createElement("div");
  overlay.id = "loading-overlay";
  overlay.innerHTML = `
    <div style="
      position: fixed; top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.5);
      z-index: 9997;
      display: flex; align-items: center; justify-content: center;
    ">
      <div style="
        width: 40px; height: 40px;
        border: 4px solid white;
        border-top: 4px solid transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      "></div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(overlay);
}

function hideLoading() {
  const el = document.getElementById("loading-overlay");
  if (el) el.remove();
}
