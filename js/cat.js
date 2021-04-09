L2Dwidget.init({
    "model": {
        jsonPath: "https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json",//这里改模型，前面后面都要改
        "scale": 1
    },
    "display": {
        "position": "left",//设置看板娘的上下左右位置
        "width": 100,
        "height": 200,
        "hOffset": 70,
        "vOffset": 0
    },
    "mobile": {
        "show": true,
        "scale": 0.5
    },
    "react": {
        "opacityDefault": 0.7,//设置透明度
        "opacityOnHover": 0.2
    }
});
window.onload = function () {
    $("#live2dcanvas").attr("style", "position: fixed; opacity: 0.7; left: 70px; bottom: 0px; z-index: 1; pointer-events: none;")
}