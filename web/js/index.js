var isDebugdebug=true;
function isDebug(message){
    if (isDebugdebug) console.log(message);
}
const menuMain = document.getElementById("book_Shop");
const menuAddAuthor = document.getElementById("menu_add_author");
const menuAddBook = document.getElementById("menu_add_book");
const menuPurchaces = document.getElementById("menu_purchaces");
const menuProfile = document.getElementById("menu_profile");
const menuAdminPanel = document.getElementById("menu_admin_panel");
const infoElement = document.getElementById("info");
const menuLogin = document.getElementById("menu_login");
menuLogin.addEventListener('click',toggleBtnLogin);
const menuLogout = document.getElementById("menu_logout");
menuLogout.addEventListener('click',toggleBtnLogin);

function toggleBtnLogin(){
    isDebug ("Переключаем кнопку");
    if(menuLogin.classList.contains("d-none")){
        showBtnLogin();
        toggleShowMenu();
        infoElement.innerHTML = "Вы вышли";
    }else{
        hiddenBtnLogin();
        toggleShowMenu();
        infoElement.innerHTML = "Вы вошли";
    }
}

function showBtnLogin (){
    isDebug("Показываем кнопку Выйти");
    menuLogin.classList.remove("d-none");
    menuLogout.classList.add("d-none"); 
}

function hiddenBtnLogin (){
    isDebug ("Показываем кнопку Войти");
    menuLogin.classList.add("d-none");
    menuLogout.classList.remove("d-none");
}

function toggleShowMenu(){
    if (menuAddAuthor.classList.contains("d-none")){
        showBtnsMenu();
    }else{
        hiddenBtnsMenu();
    }
}

function showBtnsMenu(){
    menuAddAuthor.classList.remove("d-none");
    menuAddBook.classList.remove("d-none");
    menuPurchaces.classList.remove("d-none");
    menuProfile.classList.remove("d-none");
    menuAdminPanel.classList.remove("d-none");
}

function hiddenBtnsMenu (){
    menuAddAuthor.classList.add ("d-none");
    menuAddBook.classList.add ("d-none");
    menuPurchaces.classList.add ("d-none");
    menuProfile.classList.add ("d-none");
    menuAdminPanel.classList.add ("d-none");
}

function clearMenuActiveClass() {
    menuMain.classList.remove("active");
    menuAddBook.classList.remove("active");
    menuAddAuthor.classList.remove("active");
    menuPurchaces.classList.remove("active");
    menuProfile.classList.remove("active");
    menuAdminPanel.classList.remove("active");
}

function menuMainActiveClass() {
    clearMenuActiveClass();
    menuMain.classList.add("active");
}
function menuAddBookActiveClass() {
    clearMenuActiveClass();
    menuAddBook.classList.add("active");
}
function menuAddAuthorActiveClass() {
    clearMenuActiveClass();
    menuAddAuthor.classList.add("active");
}
function menuPurchasesActiveClass() {
    clearMenuActiveClass();
    menuPurchaces.classList.add("active");
}
function menuProfileActiveClass() {
    clearMenuActiveClass();
    menuProfile.classList.add("active");
}
function menuAdminPanelActiveClass() {
    clearMenuActiveClass();
    menuAdminPanel.classList.add("active");
}

menuAddBook.addEventListener('click', function () {
    addActiveClass(this);
});
menuAddAuthor.addEventListener('click', function () {
    addActiveClass(this);
});
menuPurchaces.addEventListener('click', function () {
    addActiveClass(this);
});
menuProfile.addEventListener('click', function () {
    addActiveClass(this);
});
menuAdminPanel.addEventListener('click', function () {
    addActiveClass(this);
});

function clearMenuActiveClass() {
    menuAddBook.classList.remove("active");
    menuAddAuthor.classList.remove("active");
    menuPurchaces.classList.remove("active");
    menuProfile.classList.remove("active");
    menuAdminPanel.classList.remove("active");
}

function addActiveClass(element) {
    clearMenuActiveClass();
    element.classList.add("active");
    element.preventDefault();
}