// build.js - Сборка + минификация
const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 Сборка OpenCustom UI Kit...');

// 1. Копируем исходные файлы
fs.copyFileSync('src/ui.css', 'dist/oc-ui.css');
fs.copyFileSync('src/ui.js', 'dist/oc-ui.js');

console.log('✅ Исходные файлы скопированы');

// 2. Минифицируем CSS (чистый JS без зависимостей)
try {
  const css = fs.readFileSync('dist/oc-ui.css', 'utf8');
  const minifiedCSS = css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Удаляем комментарии
    .replace(/\s+/g, ' ')            // Убираем лишние пробелы
    .replace(/\s*([{}:;,])\s*/g, '$1') // Убираем пробелы вокруг символов
    .trim();
  
  fs.writeFileSync('dist/oc-ui.min.css', minifiedCSS);
  console.log('✅ CSS минифицирован: dist/oc-ui.min.css');
} catch (err) {
  console.log('⚠️ CSS минификация пропущена');
}

// 3. Минифицируем JS (базовая минификация)
try {
  const js = fs.readFileSync('dist/oc-ui.js', 'utf8');
  const minifiedJS = js
    .replace(/\/\/.*/g, '')          // Удаляем однострочные комментарии
    .replace(/\/\*[\s\S]*?\*\//g, '') // Удаляем многострочные комментарии
    .replace(/\n\s*\n/g, '\n')       // Удаляем пустые строки
    .replace(/\s{2,}/g, ' ')         // Заменяем множественные пробелы на один
    .trim();
  
  fs.writeFileSync('dist/oc-ui.min.js', minifiedJS);
  console.log('✅ JS минифицирован: dist/oc-ui.min.js');
} catch (err) {
  console.log('⚠️ JS минификация пропущена');
}

console.log('🎉 Все готово!');