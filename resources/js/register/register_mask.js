import MaskInput from "mask-input";

var link = document.getElementById('reg_link');
link.addEventListener('click', function(){
    new MaskInput(document.querySelector('.input-selector'), {
        mask: '+(000)-000-00-00',
        alwaysShowMask: true,
        maskChar: '_',
    });
});