$(function() {
	//高德地图
	var map = new AMap.Map('container', {
		resizeEnable: true,
		zoom: 16,
		center: [110.341974, 20.018319]
	});
	
	//建筑区域多边形
	var polygonArr = new Array();
	polygonArr.push([110.343002, 20.01905]);
	polygonArr.push([110.34297, 20.017911]);
	polygonArr.push([110.342959, 20.01782]);
	polygonArr.push([110.342927, 20.017759]);
	polygonArr.push([110.34282, 20.017694]);
	polygonArr.push([110.340985, 20.017674]);
	polygonArr.push([110.34098, 20.01779]);
	polygonArr.push([110.341022, 20.018798]);
	polygonArr.push([110.341162, 20.018944]);
	polygonArr.push([110.341285, 20.019014]);
	polygonArr.push([110.34143, 20.01906]);
	var polygon = new AMap.Polygon({
		path: polygonArr, //设置多边形边界路径
		strokeColor: "#0069c6", //线颜色
		strokeOpacity: 0.5, //线透明度
		strokeWeight: 2, //线宽
		fillColor: "#1791fc", //填充色
		fillOpacity: 0.35 //填充透明度
	});
	polygon.setMap(map);
	
	//地标框
	var marker = new AMap.Marker({ //添加自定义点标记
		map: map,
		position: [110.342004, 20.0183450], //基点位置
		textAlign: 'center',
		verticalAlign: 'bottom', //middle 、bottom
		offset: new AMap.Pixel(0, 0), //相对于基点的偏移位置
		draggable: false, //是否可拖动
		content: `<div class="landmark-wrap">
					<div class="address-frame">
					<h2 class="name">海南旅居云创科技有限公司</h2>
					<span class="address">海口市美兰区大英山西四路海南数据谷三楼</span>
					<span class="phone">0898-32183321</span>
					</div>
					<i class="landmark-icon"></i>
				</div>` //自定义点标记覆盖物内容
	});
	
	//比例尺
    var scale = new AMap.Scale({
        visible: true
    })
    
    //工具栏
    toolBar = new AMap.ToolBar({
        visible: true
    })
    map.addControl(scale);
    map.addControl(toolBar);
    
    //点击回到定位中心点
    AMap.event.addDomListener(document.getElementById('pantoBtn'), 'click', function() {
        map.panTo([110.342004, 20.0183450]);
    });
})