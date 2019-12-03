function getBooks(){
	var xhr = new XMLHttpRequest();
  	xhr.open('GET', '/get_book.php', true);
	xhr.onreadystatechange = function(data){
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200){
			var data = JSON.parse(data.target.responseText);
			data.forEach(function(item){	
			var books = document.getElementById('books'); 
			var create = document.createElement('div'); 
			create.innerHTML += 
			'<div id = "content-body">'+
				'<div class="info">'+
					'<img id="icon-content" src="http://yarlikovtest.ru/img/book.jpg">'+
				'</div>'+
				'<div class="info">'+
					'<div>'+
						'<b>'+(item.name)+'</b>'+
					'</div>'+
					'<div id ="content-text">'+
						'<p>'+(item.description)+'</p><br>'+
					'</div>'+
					'<div>'+
						'<p>'+(item.page_count)+'стр  ' +(item.create_date)+'</p>'
					'</div>'
				'</div>'
			'</div>';
			books.appendChild(create);
		})

		}

	}
		xhr.send(null);
}

function getInfo(){
	var first_icon = 0;
	var second_icon = 6;
	var third_icon = 17;

	var icons = document.getElementById('icons');
	var create = document.createElement('div');
	create.innerHTML = 
		'<div  class="icon-info">'+
			'<div class="icon-count">'+
				'<img class="img-search"src="http://yarlikovtest.ru/img/stats.png">'+
				'<b class="count-text">'+(first_icon)+'</b>'+
			'</div>'+
			'<div class="icon-count">'+
				'<img class="img-search"src="http://yarlikovtest.ru/img/like.png">'+
				'<b class="count-text">'+(second_icon)+'</b>'+
			'</div>'+
			'<div class="icon-count">'+
				'<img class="img-search"src="http://yarlikovtest.ru/img/box.png">'+
				'<b class="count-text">'+(third_icon)+'</b>'+
			'</div>'+
		'</div>';
	icons.appendChild(create);
}

function getRoute(){
	var url = window.location.href;
	if (url == window.location.href){
		var route = document.getElementById('route');
		var create = document.createElement('div');
		create.innerHTML = 
		'<div class="container route">'+
			'<p>Главная</p>'+
			'<p> --> Статьи <p>'+
		'</div>';
		route.appendChild(create);
	}
}