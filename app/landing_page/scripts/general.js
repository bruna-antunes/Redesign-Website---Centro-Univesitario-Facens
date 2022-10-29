/**
 * Add 'active' class in selected list-item
 */

 let menuToggle = document.querySelector('.sidebar-container');
 let navigationBar = document.querySelector('.navigation');

 menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigationBar.classList.toggle('active');
 }

 let listItem = document.querySelectorAll('.nav-list-item');

 for(let i = 0; i < listItem.length; i++){
     listItem[i].onclick = function(){
         let j = 0;
         while(j < listItem.length){
             listItem[j++].className = 'nav-list-item'
         }
         listItem[i].className = 'nav-list-item active'
     }
 }


/**
* End
*/

/**
 * Get Current Year
 */

 const date = new Date();
 let currentYear = date.getFullYear();
 document.getElementById("currentYearLabel").innerHTML = currentYear;

 /**
  * End
  */