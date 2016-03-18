var data = {
	'pageTitle': 'Тест по программированию',
	'questionTitle': '. Вопрос №',
	'label': 'Вариант ответа №'
}
var dom = {
	key1: function addHeader() {
		var div = document.createElement('div');
		div.className = 'header';
		document.body.appendChild(div);

		var titlePage = document.createElement('h1');	
		titlePage.innerHTML = data.pageTitle;		
		titlePage.className = 'header-title';
		div.appendChild(titlePage);
	},
	key2: function addMain() {
		var id = 1;
		var main = document.createElement('div');
		main.className = 'main';
		document.body.appendChild(main);

			for (var i = 1; i < 4; i++) {
				var questionTitle = document.createElement('p');
				questionTitle.className = 'ul-title ul-title-' + i;
				questionTitle.innerHTML = i + data.questionTitle + i;
				main.appendChild(questionTitle);

				var list = document.createElement('ul');
				list.className = 'list list-' + i;
				main.appendChild(list);
				
				for (var j = 1; j < 4; j++) {
					var item = document.createElement('li');
					item.className = 'item item-'+ j;
					list.appendChild(item);

					var checkBox = document.createElement('input');
					checkBox.className = 'my-checkbox';
					checkBox.setAttribute('type', 'checkbox');
					checkBox.setAttribute('id', 'checkbox' + id);					
					item.appendChild(checkBox);

					var label = document.createElement('label');
					label.className = 'my-label';
					label.innerHTML = data.label + i;
					label.setAttribute('for', 'checkbox' + id);
					item.appendChild(label);

					id += 1;
				}
				
			}
	},
	key3: function addBtn() {
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