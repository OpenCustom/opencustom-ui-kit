// build.js - Простой скрипт сборки
const fs = require('fs');
const path = require('path');

console.log('🚀 Сборка OpenCustom UI Kit...');

// 1. Копируем CSS
const cssContent = fs.readFileSync('src/ui.css', 'utf8');
fs.writeFileSync('dist/oc-ui.css', cssContent);
console.log('✅ CSS собран: dist/oc-ui.css');

// 2. Копируем JS
const jsContent = fs.readFileSync('src/ui.js', 'utf8');
fs.writeFileSync('dist/oc-ui.js', jsContent);
console.log('✅ JS собран: dist/oc-ui.js');

// 3. Создаем пример HTML
const exampleHTML = `<!DOCTYPE html>
<html>
<head>
  <title>OpenCustom UI Kit Demo</title>
  <link rel="stylesheet" href="oc-ui.css">
  <style>
    body { padding: 2rem; font-family: sans-serif; }
    .demo-section { margin: 2rem 0; padding: 1rem; border: 1px solid #ddd; }
  </style>
</head>
<body>
  <h1>OpenCustom UI Kit Demo</h1>
  
  <div class="demo-section">
    <h2>Кнопки</h2>
    <button class="oc-btn">Обычная</button>
    <button class="oc-btn oc-btn-primary">Основная</button>
    <button class="oc-btn oc-btn-block">Блочная</button>
  </div>
  
  <div class="demo-section">
    <h2>Карточки</h2>
    <div class="oc-card">
      <h3>Заголовок карточки</h3>
      <p>Содержимое карточки</p>
    </div>
  </div>
  
  <div class="demo-section">
    <h2>Модальное окно</h2>
    <button class="oc-btn oc-btn-primary" data-oc-target="#demoModal">
      Открыть модалку
    </button>
    
    <div id="demoModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5);">
      <div style="background:white; padding:2rem; margin:100px auto; width:300px; border-radius:8px;">
        <h3>Демо модалка</h3>
        <p>Содержимое модального окна</p>
        <button class="oc-btn" data-oc-close>Закрыть</button>
      </div>
    </div>
  </div>
  
  <div class="demo-section">
    <h2>Уведомление</h2>
    <button class="oc-btn" onclick="OpenCustomUI.Toast.show('Привет!', 'success')">
      Показать Toast
    </button>
  </div>
  
  <script src="oc-ui.js"></script>
</body>
</html>`;

fs.writeFileSync('dist/demo.html', exampleHTML);
console.log('✅ Пример создан: dist/demo.html');

console.log('🎉 Сборка завершена!');