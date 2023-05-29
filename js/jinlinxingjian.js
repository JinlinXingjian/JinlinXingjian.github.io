window.onload = function () {
    if (window.location.href == 'http://localhost:4000/' || window.location.href == 'https://jinlinxingjian.top/' || window.location.href == 'https://www.jinlinxingjian.top/') 
    {
      
      //获取ip呢
        // fetch('http://ip-api.com/json/')
        // .then(function(response) {
        //   return response.json();
        // })
        // .then(function(data) {
        //   var city = data.city;
        //   var country = data.country_name;
        //   let line


        //   if(country=="China"){
        //     line="腾讯云线路"
        //   }
        //   else{
        //     line="GIthub pages线路"
        //   }
        //   let text='欢迎来到 金鳞星溅 的小站,你访问的线路是'+line
        //   Snackbar.show({
        //       actionText: '关闭',
        //       text: text,
        //       backgroundColor: '#e27474',
        //       actionTextColor: '#ffffff',
        //       pos: 'bottom-center',
        //       duration: '2000',
        //       width: '60vw'
        //   });
        //   // 找到目标元素
        //   var footerWrap = document.getElementById('footer-wrap');
        //   var footerCustomText = footerWrap.querySelector('.footer_custom_text');

        //   // 创建 <div> 元素
        //   var divElement = document.createElement('div');
        //   divElement.textContent = '当前访问线路是'+line;

        //   // 将 <div> 元素插入到目标元素中
        //   footerCustomText.appendChild(divElement);

        // })
        // .catch(function(error) {
        //   console.log('获取访问者地理位置信息失败', error);
        // });
        //site-name修改
        document.querySelector('.site-name').textContent='金鳞星溅'
        //滚动变灰
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
document.body.oncopy = function (){
  Snackbar.show({
    actionText: '关闭',
    text: '复制成功',
    backgroundColor: '#e27474',
    actionTextColor: '#ffffff',
    pos: 'top-center',
    duration: '1000',
    width: '20vw',
});
}