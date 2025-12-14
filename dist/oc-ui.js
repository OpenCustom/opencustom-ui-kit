// === OpenCustom UI Kit - JavaScript ===

// 1. Модальное окно
class OCModal {
  constructor(selector) {
    this.modal = document.querySelector(selector);
    this.init();
  }
  
  init() {
    if (!this.modal) return;
    
    // Кнопка закрытия
    const closeBtn = this.modal.querySelector('[data-oc-close]');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.hide());
    }
    
    // Закрытие по клику вне модалки
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.hide();
    });
  }
  
  show() {
    if (this.modal) {
      this.modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  }
  
  hide() {
    if (this.modal) {
      this.modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
}

// 2. Уведомления (Toast)
class OCToast {
  static show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `oc-toast oc-toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem;
      background: ${type === 'error' ? '#ef4444' : '#10b981'};
      color: white;
      border-radius: var(--oc-radius);
      z-index: 9999;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, duration);
  }
}

// 3. Инициализация всех компонентов
function initOpenCustomUI() {
  // Автоинициализация модалок
  document.querySelectorAll('[data-oc-modal]').forEach(modal => {
    const modalId = modal.getAttribute('data-oc-modal');
    new OCModal(`#${modalId}`);
  });
  
  // Кнопки для открытия модалок
  document.querySelectorAll('[data-oc-target]').forEach(btn => {
    const target = btn.getAttribute('data-oc-target');
    const modal = new OCModal(target);
    
    btn.addEventListener('click', () => {
      modal.show();
    });
  });
}

// 4. Экспорт для использования
window.OpenCustomUI = {
  Modal: OCModal,
  Toast: OCToast,
  init: initOpenCustomUI
};

// Автозапуск при загрузке страницы
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initOpenCustomUI);
} else {
  initOpenCustomUI();
}