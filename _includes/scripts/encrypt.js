(function(){
    if('{{ page.password }}'){
        if (prompt('猜猜密码是什么呀') !== '{{ page.password }}'){
            alert('猜错了！');
if (history.length === 1) {
    window.opener = null;
    window.open('', '_self');
    window.close();
            } else {
                history.back();
            }
        }
    }
})();