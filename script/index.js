function toggle(id){
    let element = document.getElementById(id);
    let check = element.getAttribute('data-toggle');
    if(check === 'on'){
        element.classList.remove('open');
        element.setAttribute('data-toggle','off');
    }else{
        element.classList.add("open");
        element.setAttribute('data-toggle','on');
    }
}