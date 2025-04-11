function checkWebsiteStatus() {
    fetch('https://umaii.f5.si', { mode: 'no-cors' }) // CORSの問題に対処する必要がある場合
        .then(response => {
            const statusElement = document.querySelector('#website-status .status');
            const messageElement = document.querySelector('#website-status .message');
            if (response.ok) {
                statusElement.textContent = '稼働中';
                statusElement.className = 'status status-up';
                messageElement.textContent = '';
            } else {
                statusElement.textContent = '停止中';
                statusElement.className = 'status status-down';
                messageElement.textContent = `HTTPエラー: ${response.status}`;
            }
        })
        .catch(error => {
            const statusElement = document.querySelector('#website-status .status');
            const messageElement = document.querySelector('#website-status .message');
            statusElement.textContent = '停止中';
            statusElement.className = 'status status-down';
            messageElement.textContent = `エラー: ${error}`;
        });
}



// 定期的にステータスをチェック
setInterval(checkWebsiteStatus, 10000);

// 初回読み込み時に実行
checkWebsiteStatus();
