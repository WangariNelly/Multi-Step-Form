
 document.addEventListener('DOMContentLoaded', function() {
    const formSteps = document.querySelectorAll('.form-steps .step');
    const forms = document.querySelectorAll('.Form-all');
    const previousBtns = document.querySelectorAll('.previousBtn');
    const nextBtns = document.querySelectorAll('.nextBtn');
    const summarySection = document.querySelector('.form-four');
  
  
    let currentStep = 0;
//   For visibility.
    function showStep(stepIndex) {
      forms.forEach((form, index) => {
        if (index === stepIndex) {
          form.style.display = 'block';
        } else {
          form.style.display = 'none';
        }
      });
  
      formSteps.forEach((step, index) => {
        if (index === stepIndex) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
    }
  
    function goToNextStep() {
      if (currentStep < forms.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    }
  
    function goToPreviousStep() {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    }
  
    nextBtns.forEach(btn => {
      btn.addEventListener('click', goToNextStep);
    });
  
    previousBtns.forEach(btn => {
      btn.addEventListener('click', goToPreviousStep);
    });
  
    // Show the initial step
    showStep(currentStep);
   });
  

//Dyanamically updates the four-four of the pages.
  
function updateSummary() {
    const plan = document.querySelector('input[name="plan"]:checked').value;
    const addons = document.querySelectorAll('input[name="addon"]:checked');
    let addonCost = 0;
   
};
  