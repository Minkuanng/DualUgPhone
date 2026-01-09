const { app, BrowserWindow, session } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#000', // Màu nền đen cho đỡ chói lúc khởi động
    webPreferences: {
      webviewTag: true, // QUAN TRỌNG: Cho phép dùng thẻ webview thay cho iframe
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // Ẩn menu mặc định của ứng dụng cho gọn
  win.setMenuBarVisibility(false)
  
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
