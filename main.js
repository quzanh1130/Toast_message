function toast({title='', message='', type='info', duration = 3000}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');

        //auto close
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast);
        },duration + 1000);

        //close when clicked
        toast.onclick = function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error:'fa-solid fa-circle-exclamation'
        };
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation= `appear ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
    
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__message">${message}</p>
            </div>
    
            <div class="toast__close">   
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast);
        
    }
}

function showSuccess(){
    toast({
        title: 'Success',
        message: 'Chúc mừng bạn đã đăng ký thành công!',
        type: 'success',
        duration: 1000
    });
}

function showInfo(){
    toast({
        title: 'Info',
        message: 'Chào mừng bạn đến với chúng tôi :v',
        type: 'info',
        duration: 3000
    });
}

function showWarning(){
    toast({
        title: 'Warning',
        message: 'Thông tin tài khoản hoặc mật khẩu không chính xác',
        type: 'warning',
        duration: 3000
    });
}

function showError(){
    toast({
        title: 'Error',
        message: 'Xảy ra lỗi trong quá trình đăng ký, vui lòng đăng ký lại!',
        type: 'error',
        duration: 3000
    });
}
