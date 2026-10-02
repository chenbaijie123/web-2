// 更新时间函数
function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2,'0');
    const day = String(now.getDate()).padStart(2,'0');
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');
    const timeStr = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    document.getElementById("time-box").innerText = `当前时间：${timeStr}`;
}

window.onload = function () {
    // 页面加载完成
    document.getElementById("username").innerText = "Hi！我是技术爱好者";

    // 启动时钟
    updateTime();
    setInterval(updateTime, 1000);

    // 本地访客计数
    let count = localStorage.getItem("visitCount") || 0;
    count++;
    localStorage.setItem("visitCount", count);
    document.getElementById("visit-count").innerText = count;

    console.log("✅ 个人主页加载成功");
    console.log("👁️ 当前访问次数：" + count);
}
