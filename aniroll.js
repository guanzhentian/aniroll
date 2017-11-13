window.onload = function(){

	var anirollHtmlCollection = document.getElementsByClassName("aniroll");

	var anirolls = [];

	for(var i=0;i<anirollHtmlCollection.length;i++)
	{
		anirolls.push(anirollHtmlCollection[i]);
	}

	function check(){
		var curTop = document.documentElement.scrollTop;
		var heigt = document.documentElement.clientHeight;
		for(var i = 0;i<anirolls.length;i++)
		{
			if(anirolls[i].offsetTop+anirolls[i].offsetHeight < curTop)
			{
				continue;
			}
			if(curTop+heigt-200 < anirolls[i].offsetTop)
			{
				return;
			}

			var type = anirolls[i].className.match(/aniroll-.*\s|aniroll-.*$/);
			
			if(type)
			{
				type = type[0].slice(8);
				anirolls[i].className += " "+type;
			}else{
				anirolls[i].className += " fadeInUp";
			}
			
			[].splice.call(anirolls,i,1);
			i--;
		}
	}

	window.addEventListener("scroll",check);

	check();

}


