document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html') {
        // الحركة 1: تغيير الصورة عند النقر عليها
        const heroImage = document.querySelector('#hero img');
        if (heroImage) {
            let isFirstImage = true;
            heroImage.addEventListener('click', () => {
                if (isFirstImage) {
                    heroImage.src = '../images/plane.jpg.jpg';
                    isFirstImage = false;
                } else {
                    heroImage.src = '../images/plane1.jpg.jpg';
                    isFirstImage = true;
                }
            });
        }
    } else if (currentPage === 'signup.html') {
        // الحركة 2: التحقق من الحقول
        const form = document.querySelector('#login-form form');
        if (form) {
            form.addEventListener('submit', (event) => {
                const inputs = form.querySelectorAll('input[required]');
                let allFilled = true;
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        allFilled = false;
                    }
                });
                if (!allFilled) {
                    event.preventDefault();
                    alert('الرجاء تعبئة جميع الحقول المطلوبة.');
                }
            });
        }
        // الحركة الجديدة: إظهار/إخفاء كلمة المرور
        const passwordInputs = document.querySelectorAll('input[type="password"]');
        passwordInputs.forEach(input => {
            const wrapper = document.createElement('div');
            wrapper.style.position = 'relative';
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            const toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.textContent = 'إظهار';
            toggleBtn.style.cssText = `
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
                padding: 5px 10px;
                font-size: 12px;
                background: none;
                border: none;
                cursor: pointer;
                color: var(--primary);
                font-weight: bold;
            `;
            wrapper.appendChild(toggleBtn);
            toggleBtn.addEventListener('click', () => {
                if (input.type === 'password') {
                    input.type = 'text';
                    toggleBtn.textContent = 'إخفاء';
                } else {
                    input.type = 'password';
                    toggleBtn.textContent = 'إظهار';
                }
            });
        });
    } else if (currentPage === 'gear.html') {
        // الحركة 3: تغيير اللون
        const prices = document.querySelectorAll('article p strong');
        prices.forEach(price => {
            price.addEventListener('click', () => {
                if (price.style.color === 'rgb(56, 189, 248)') {
                    price.style.color = 'rgb(255,182,193)';
                } else {
                    price.style.color = 'rgb(56,189,248)';
                }
            });
        });
    } else if (currentPage === 'login.html') {
        // الحركة 4: إظهار رسالة ترحيب
        const form = document.querySelector('#login-form form');
        const usernameInput = document.querySelector('#username');
        if (form && usernameInput) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const username = usernameInput.value;
                if (username) {
                    alert(`أهلاً بك يا ${username}!`);
                }
            });
        }
        // الحركة الجديدة: إظهار/إخفاء كلمة المرور
        const passwordInputs = document.querySelectorAll('input[type="password"]');
        passwordInputs.forEach(input => {
            const wrapper = document.createElement('div');
            wrapper.style.position = 'relative';
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            const toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.textContent = 'إظهار';
            toggleBtn.style.cssText = `
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
                padding: 5px 10px;
                font-size: 12px;
                background: none;
                border: none;
                cursor: pointer;
                color: var(--primary);
                font-weight: bold;
            `;
            wrapper.appendChild(toggleBtn);
            toggleBtn.addEventListener('click', () => {
                if (input.type === 'password') {
                    input.type = 'text';
                    toggleBtn.textContent = 'إخفاء';
                } else {
                    input.type = 'password';
                    toggleBtn.textContent = 'إظهار';
                }
            });
        });
    } else if (currentPage === 'contact.html') {
        // الحركة 5: حركة من عندي (رسالة تأكيد)
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                alert('تم استلام رسالتك بنجاح! شكراً لك.');
            });
        }
    }
});