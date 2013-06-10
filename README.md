## jQuery eSlider Version 1.0

Слайдер с эффектом fadeIn/fadeOut

Для того чтобы использовать данный слайдер добавьте в head вашей страницы
- Файл со стилем слайдера
<link href="css/jquery.eslider-1.0.css" type="text/css" rel="stylesheet" />

- Сам плагин
<script type="text/javascript" src="js/jquery.eslider-1.0.js"></script>

Инициализация плагина проста, прежде всего вам нужно иметь div со списком внутри:

```html
<div id="eslider">
	<ul>
		<li> TEXT 1 OR IMG</li>
		<li> TEXT 2 OR IMG</li>
		<li> TEXT 3 OR IMG</li>
	</ul>
</div>
```

Для того чтобы слайдер заработал нужно его применить к этому div

- Это делается вот так
```js
$('#eslider').eslider({ 
		
	title: "ОТЗЫВЫ КЛИЕНТОВ",
	speed: "slow",
	cycle: true
		
});
```

Возможно запустить слайдер и без опций ( а точнее это будут опции по умолчанию )

```js
$('#eslider').eslider();
```


Опции.
title: "ЗАГОЛОВОК СЛАЙДЕРА",
speed: 1000, // Скорость эффекта
cycle: true/false // По умолчанию слайдер зациклен, но можно это отключить.

Демонстрацию работы слайдера можно посмотреть здесь

http://bawyka.ru/demo/jquery/eslider/

Author me.
