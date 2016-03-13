var dom = {
	key1: function header() {
		var div = document.createElement('div');
		div.className = 'header';
		document.body.appendChild(div);
		var h1 = document.createElement('h1');	
		h1.innerHTML = 'Тест по программированию';		
		h1.className = 'header-title';
		div.appendChild(h1);		
	},
	key2: function main() {
		var main = document.createElement('div');
		main.className = 'main';
		document.body.appendChild(main);
		var id = 1;

			for (var a = 1; a < 4; a++) {
				var title = document.createElement('p');
				title.className = 'ul-title ul-title-' + a;
				title.innerHTML = a + '. Вопрос №' + a;
				main.appendChild(title);
				var list = document.createElement('ul');
				list.className = 'list list-' + a;
				main.appendChild(list);
				
				for (var i = 1; i < 4; i++) {
					var li = document.createElement('li');
					li.className = 'item item-'+ i;
					list.appendChild(li);
					var checkBox = document.createElement('input');
					checkBox.className = 'my-checkbox';
					checkBox.setAttribute('type', 'checkbox');
					checkBox.setAttribute('id', 'checkbox' + id);					
					li.appendChild(checkBox);
					var label = document.createElement('label');
					label.className = 'my-label';
					label.innerHTML = 'Вариант ответа №' + i;
					label.setAttribute('for', 'checkbox' + id);
					li.appendChild(label);
					id += 1;
				}
				
			}
	},
	key3: function footer() {
		var footer = document.createElement('div');
		footer.className = 'footer';
		document.body.appendChild(footer);
		var button = document.createElement('input');
		button.className = 'button';
		button.setAttribute('type', 'submit');
		button.setAttribute('value', 'Проверить мои результаты');
		footer.appendChild(button);

	},
	key: function assembly() {
		dom.key1();
		dom.key2();
		dom.key3();
	},
}
dom.key();