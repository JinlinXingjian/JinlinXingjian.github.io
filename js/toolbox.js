
//网易云音乐热评
let xhr_1 = new XMLHttpRequest();
xhr_1.open('GET', 'https://api.uomg.com/api/comments.163?mid=8163859822&format=json', true);
let response
xhr_1.onload = function() {
  if (xhr_1.status === 200) {
    response= JSON.parse(xhr_1.responseText);
    // 处理 API 响应数据
    console.log(response)
    var text = `
    歌曲：${response.data.name}<br/>
    ${response.data.content} <br/>
                                                        -----------来自网易云音乐热评<br/>
    `;
    
    var musicRandomCommentDiv = document.getElementById("musicRandomComment");
    musicRandomCommentDiv.innerHTML = text;
    
    var img = document.createElement("img");
    img.src = response.data.picurl;
    musicRandomCommentDiv.appendChild(img);
  }
};
xhr_1.send();

function getQQInfo() {
    //获取qq号码的信息
    var qqInput = document.getElementById("qqInput");
    var qq = qqInput.value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.uomg.com/api/qq.info?qq=' + qq, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var qqInfoDiv = document.getElementById("qqInfo");
            var text = "QQ: " + response.qq + "\n";
            text += "QQ名称: " + response.name + "\n";
            qqInfoDiv.innerText = text;
            var img = document.createElement('img');
            img.src = response.qlogo;
            qqInfoDiv.appendChild(img);
        }
      };
      

    xhr.send();
  }

function checkDomain(event) {
    event.preventDefault();
    var domainInput = document.getElementById("domainInput");
    var domain = domainInput.value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.uomg.com/api/ck_qiang?domain=' + domain, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var resultDiv = document.getElementById("resultDiv");
            resultDiv.textContent=response.msg
        }
    };

    xhr.send();
}