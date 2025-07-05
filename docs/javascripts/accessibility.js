(function(){
  const root = document.documentElement;
  const storage = window.localStorage;

  function setFontSize(size) {
    if(size === 'normal') {
      root.removeAttribute('data-font-size');
      storage.removeItem('doc-font-size');
    } else {
      root.setAttribute('data-font-size', size);
      storage.setItem('doc-font-size', size);
    }
  }

  function applyStoredSize() {
    const stored = storage.getItem('doc-font-size');
    if(stored) root.setAttribute('data-font-size', stored);
  }

  function createControls(){
    const container = document.createElement('div');
    container.className = 'font-size-controls';
    container.innerHTML = '<button class="font-size-decrease" aria-label="Decrease font">A-</button>'+
                          '<button class="font-size-increase" aria-label="Increase font">A+</button>';
    document.body.appendChild(container);
    container.querySelector('.font-size-increase').addEventListener('click', ()=>{
      const current = root.getAttribute('data-font-size') || 'normal';
      if(current === 'normal') setFontSize('large');
      else if(current === 'large') setFontSize('xlarge');
    });
    container.querySelector('.font-size-decrease').addEventListener('click', ()=>{
      const current = root.getAttribute('data-font-size') || 'normal';
      if(current === 'xlarge') setFontSize('large');
      else if(current === 'large') setFontSize('normal');
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    applyStoredSize();
    createControls();
  });
})();
