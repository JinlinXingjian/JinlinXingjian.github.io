window.onload = function () {
    
    fetch('https://api64.ipify.org?format=json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var ipAddress = data.ip;
  
      // 在这里可以使用获取到的IP地址进行进一步的处理
      console.log('访问者的IP地址：', ipAddress);
    })
    .catch(function(error) {
      console.log('获取访问者IP地址失败', error);
    });
  



    if (window.location.href == 'http://localhost:4000/' || window.location.href == 'https://jinlinxingjian.top/' || window.location.href == 'https://www.jinlinxingjian.top/') 
    {
        Snackbar.show({
            actionText: '关闭',
            text: '欢迎来到 金鳞星溅 的小站',
            backgroundColor: '#e27474',
            actionTextColor: '#ffffff',
            pos: 'bottom-center',
            duration: '2000',
            width: '100vw'
        });
        document.querySelector("body").classList.add("indexBgImg")
        window.addEventListener('scroll', function() {
            let scrollTop = window.scrollY;
            let windowHeight = window.innerHeight; 
            let scrollPercent = (1.0-(scrollTop /windowHeight)).toFixed(1);
            scrollPercent=Number(scrollPercent);
            if(scrollPercent < Number(0.6))
            {
                scrollPercent=Number(0.6);
            }
            document.querySelector("#page-header").style.filter="brightness("+scrollPercent+")";
            document.querySelector("#content-inner").style.backdropFilter="brightness("+scrollPercent+")";
        })
    }
}  