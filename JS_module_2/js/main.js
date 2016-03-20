var data = {
	'pageTitle': 'Тест по программированию',
	'questions': [
		{
			'questionTitle': '1. Вопрос №1',
			'questionList': [
				{
					'label': 'Вариант ответа №1',
					'id': 'checkbox-1',
					'type': 'checkbox',
					'for': 'checkbox-1'
				},
				{
					'label': 'Вариант ответа №2',
					'id': 'checkbox-2',
					'type': 'checkbox',
					'for': 'checkbox-2'
				},
				{
					'label': 'Вариант ответа №3',
					'id': 'checkbox-3',
					'type': 'checkbox',
					'for': 'checkbox-3'
				}]

		},
		{
			'questionTitle': '2. Вопрос №2',
			'questionList': [
				{
					'label': 'Вариант ответа №1',
					'id': 'checkbox-4',
					'type': 'checkbox',
					'for': 'checkbox-4'
				},
				{
					'label': 'Вариант ответа №2',
					'id': 'checkbox-5',
					'type': 'checkbox',
					'for': 'checkbox-5'
				},
				{
					'label': 'Вариант ответа №3',
					'id': 'checkbox-6',
					'type': 'checkbox',
					'for': 'checkbox-6'
				}]
		},
		{
			'questionTitle': '3. Вопрос №3',
			'questionList': [
				{
					'label': 'Вариант ответа №1',
					'id': 'checkbox-7',
					'type': 'checkbox',
					'for': 'checkbox-7'
				},
				{
					'label': 'Вариант ответа №2',
					'id': 'checkbox-8',
					'type': 'checkbox',
					'for': 'checkbox-8'
				},
				{
					'label': 'Вариант ответа №3',
					'id': 'checkbox-9',
					'type': 'checkbox',
					'for': 'checkbox-9'
				}]
		}
	]
};
var dom = {
	addWrapper: function() {
		var div = document.createElement('div');
		div.className = 'wrapper';
		document.body.appendChild(div);
	},
	addHeader: function() {
		var div = document.createElement('div');
		div.className = 'header';
		document.querySelector('.wrapper').appendChild(div);

		var titlePage = document.createElement('h1');	
		titlePage.innerHTML = data.pageTitle;		
		titlePage.className = 'header-title';
		div.appendChild(titlePage);
	},
	addMain: function() {
		var main = document.createElement('div');
		main.className = 'main';
		document.querySelector('.wrapper').appendChild(main);
	},
	addForm: function() {
		var form = document.createElement('form');
		form.className = 'form';
		form.setAttribute ('action','#');
		document.querySelector('.main').appendChild(form);

		for (var i = 0; i < data.questions.length; i++) {
				var questionTitle = document.createElement('p');
				questionTitle.className = 'ul-title ul-title-' + (i+1);
				questionTitle.innerHTML = data.questions[i].questionTitle;
				form.appendChild(questionTitle);

				var list = document.createElement('ul');
				list.className = 'list list-' + i;
				form.appendChild(list);
				
				for (var j = 0; j < data.questions[i].questionList.length; j++) {
					var item = document.createElement('li');
					item.className = 'item item-'+ (j+1);
					list.appendChild(item);

					var checkBox = document.createElement('input');
					checkBox.className = 'my-checkbox';
					checkBox.setAttribute('type', data.questions[i].questionList[j].type);
					checkBox.setAttribute('id', data.questions[i].questionList[j].id);					
					item.appendChild(checkBox);

					var label = document.createElement('label');
					label.className = 'my-label';
					label.innerHTML = data.questions[i].questionList[j].label;
					label.setAttribute('for', data.questions[i].questionList[j].id);
					item.appendChild(label);
				}
		}
	},
	addBtn: function() {
		var div = document.createElement('div');
		div.className = 'btn-box';
		document.querySelector('.form').appendChild(div);

		var button = document.createElement('input');
		button.className = 'btn';
		button.setAttribute('type', 'submit');
		button.setAttribute('value', 'Проверить мои результаты');
		div.appendChild(button);

	},
	assembly: function() {
		dom.addWrapper();
		dom.addHeader();
		dom.addMain();
		dom.addForm();
		dom.addBtn();
	},
}
dom.assembly();