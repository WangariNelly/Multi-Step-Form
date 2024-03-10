// const nextBtn = document.getElementById("Next");
// const backBtn = document.getElementById("previous");

// backBtn.addEventListener("click", function(e){
//     alert("Hello page!")});

// nextBtn.addEventListener("click", function(e){
//         alert("Hello page!")});


// const steps =  Array .from(document.querySelectorAll(' .forms .Form-all '));
// const nextBtn = document.querySelectorAll('.forms .nextbtn');
// const backBtn = document.querySelectorAll('.forms .previousBtn');

// backBtn.forEach((button) => {
//     button.addEventListener("click" , () =>
//     {changeStep("back");})
// });


// nextBtn.forEach((button) => {
//     button.addEventListener("click" , () =>
//     {changeStep("next");})
// });

// function changeStep(buttonContainer){
//     let index = 0;
//     const active = document.querySelector(".active");
//     index = steps.indexOf(active);
//     steps[index].classList.remove("active");
//     if (buttonContainer === "next"){
//         index++;
//     }
//         else if(buttonContainer === "back"){
//             index--;
//         }
//         steps[index].classList.add("active");
// // }

// function changeStep(buttonContainer) {
//     let index = 0;
//     const active = document.querySelector(".active");
    
//     // Check if the active element is found within the steps array
//     if (active && steps.includes(active)) {
//         index = steps.indexOf(active);
//         steps[index].classList.remove("active");
//         if (buttonContainer === "next") {
//             index++;
//         } else if (buttonContainer === "back") {
//             index--;
//         }
//         // Ensure index stays within bounds
//         index = Math.min(Math.max(index, 0), steps.length - 1);
//         steps[index].classList.add("active");
//     } else {
//         console.error("Active element not found in steps array or no active element exists.");
//     }
// }



 


