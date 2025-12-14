<div align="center">

# 🎨 OpenCustom UI Kit

**Lightweight & Modern UI Library**

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()
[![CDN](https://img.shields.io/badge/CDN-ready-green.svg)]()
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)]()
[![Size](https://img.shields.io/badge/size-5KB-gold.svg)]()

</div>

## 🚀 Quick Start

Add these lines to your HTML:

```html
<!-- CSS -->
<link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/gh/OpenCustom/opencustom-ui-kit/dist/oc-ui.min.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/OpenCustom/opencustom-ui-kit/dist/oc-ui.min.js"></script>
```

## 📦 Components

### 🔘 **Buttons**
```html
<button class="oc-btn">Default</button>
<button class="oc-btn oc-btn-primary">Primary</button>
<button class="oc-btn oc-btn-outline">Outline</button>
```

### 🃏 **Cards**
```html
<div class="oc-card">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>
```

### 📝 **Forms**
```html
<input type="text" class="oc-input" placeholder="Enter text">
<textarea class="oc-input" placeholder="Your message..."></textarea>
```

### 🪟 **Modals**
```html
<button data-oc-target="#modal">Open Modal</button>

<div id="modal" style="display:none;">
  <h2>Modal Title</h2>
  <p>Modal content here</p>
  <button data-oc-close>Close</button>
</div>
```

### 💬 **Notifications**
```javascript
OpenCustomUI.Toast.show('Success!', 'success');
```

## 🌐 **CDN Links**

| Type | URL |
|------|-----|
| **CSS** | `https://cdn.jsdelivr.net/gh/OpenCustom/opencustom-ui-kit/dist/oc-ui.min.css` |
| **JS** | `https://cdn.jsdelivr.net/gh/OpenCustom/opencustom-ui-kit/dist/oc-ui.min.js` |

## 🛠️ **Development**

```bash
# Build
npm run build

# Minify
npm run minify

# Build & Minify
npm run fullbuild
```

## 📁 **Project Structure**

```
opencustom-ui-kit/
├── src/
│   ├── ui.css    # Source CSS
│   └── ui.js     # Source JavaScript
└── dist/
    ├── oc-ui.css       # Production CSS
    ├── oc-ui.min.css   # Minified CSS
    ├── oc-ui.js        # Production JS
    └── oc-ui.min.js    # Minified JS
```

---

<div align="center">
  
**Simple • Fast • Modern**

</div>
```
