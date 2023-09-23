// 这里编写自定义js脚本；将被静态引入到页面中
//知识机器人
function embedFastGPT() {
  var script = document.createElement('script');
  script.src = "https://fastgpt.run/js/iframe.js";
  script.id = "fastgpt-iframe";
  script.setAttribute("data-src", "https://fastgpt.run/chat/share?shareId=5nps718vnusl8oo5zbv9pa7y");
  script.setAttribute("data-color", "#4e83fd");
  document.body.appendChild(script);
}

// 调用函数以嵌入 Fast GPT
embedFastGPT();