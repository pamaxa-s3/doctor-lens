// Подключение функционала "Чертогов Фрилансера"
import {
   isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";

// header-search-block add active
const btnSearch = document.querySelector('.search-header__button');
const searchHeader = document.querySelector('.search-header');
btnSearch.addEventListener('click', (e) => {
   e.preventDefault();
   if (searchHeader.classList.contains('active')) {
      searchHeader.classList.remove('active');
   } else {
      searchHeader.classList.add('active');
   }
})