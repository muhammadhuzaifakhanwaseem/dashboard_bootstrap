const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

// acc_data =
//  {
//   id: 1,heading: "Dashboard",acitem:["Default","Projects","eCommerce","Marketing","Bidding","Online","Course","Logistic"]
// } ;

// for (var i = 0; i < acc_data.length; i++) {
// console.log(acc_data[i]);
//   document.getElementById("accordionExample").innerHTML += `
// <div class="accordion-item my-1">
//                               <h2 class="accordion-header" id="heading${i}">
//                                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">
//                                     <svg width="15" height="15" class="me-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
//                                         <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
//                                     </svg> ${acc_data[i].heading}
//                                 </button>
//                               </h2>
//                               <div id="collapse${i}" class="accordion-collapse collapse show" aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
//                                 <div class="accordion-body">
//                                     <div class="ac-items">
//                                     ${`
//                               <span class="ac-item">
//                                 <a class="nav-link fs-7" href="#">• </a>
//                               </span>`
//                                     }
//                           </div>
//                                 </div>
//                               </div>
//                             </div>
// `
// }



const tabs = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__body');

if (tabsContent.length > 0 || tabs.length > 0) {

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.remove('active');
        });

        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('active');
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            hideTabContent();
            showTabContent(index);
        });
    });
}

$(document).ready(function(){
  $(".filter").change(function() {
    var filterValue = $(this).val();
    var row = $('.my-row'); 


    row.hide()
    row.each(function(i, el) {
         if($(el).attr('data-type') == filterValue) {
             $(el).show();
         }
         else if(filterValue == "all"){
          $(el).show();
         }
    })
     
});
});

function resize(){
  if(innerWidth <= 1000){
    let offcanvas = document.getElementById("offcanvasExample");
    offcanvas.classList.remove("show");
  }
  else if(innerWidth >= 1000){
    let offcanvas = document.getElementById("offcanvasExample");
    offcanvas.classList.add("show");
  }
}
resize();

