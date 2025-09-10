// 监听用户点击扩展程序图标的事件
chrome.action.onClicked.addListener((tab) => {
  // 当图标被点击时，向 Chrome 发送一个命令，
  // 要求在当前活动的窗口中打开侧边栏。
  // 'tab.windowId' 确保了侧边栏在正确的窗口中打开。
  chrome.sidePanel.open({ windowId: tab.windowId });
});
