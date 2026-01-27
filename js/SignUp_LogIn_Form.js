function initLoginForm() {
    const overlay = document.querySelector('.signup-login-form__overlay');
    if (!overlay) return;
  
    overlay.classList.add('show');
  
    const container   = overlay.querySelector('.signup-login-form__container');
    const registerBtn = overlay.querySelector('.register-btn');
    const loginBtn    = overlay.querySelector('.login-btn');
    const closeBtn = overlay.querySelector('.login-close');

    registerBtn.addEventListener('click', () => {
      container.classList.add('active');
    });
  
    loginBtn.addEventListener('click', () => {
      container.classList.remove('active');
    });
  
    const loginInput  = overlay.querySelector('#loginInput');
    const loginRadios = overlay.querySelectorAll('input[name="loginType"]');
  
    loginRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        loginInput.placeholder =
          radio.value === 'email' ? 'ایمیل' : 'شماره تلفن';
      });
    });
  
    document.addEventListener('keydown', escHandler);
    overlay.addEventListener('click', overlayHandler);
  
    function escHandler(e) {
      if (e.key === 'Escape') closeLogin();
    }
  
    function overlayHandler(e) {
      if (e.target === overlay) closeLogin();
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', closeLogin);
    }    
  }
  
  function closeLogin() {
    const modal = document.getElementById("modal");
    if (!modal) return;
  
    modal.classList.add("hidden");
    modal.innerHTML = "";
  }
  