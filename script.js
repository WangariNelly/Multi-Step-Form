
document.addEventListener('DOMContentLoaded', function() {
    const formSteps = document.querySelectorAll('.form-steps .step');
    const forms = document.querySelectorAll('.Form-all');
    const previousBtns = document.querySelectorAll('.previousBtn');
    const nextBtns = document.querySelectorAll('.nextBtn');
  
    let currentStep = 0;
  
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
  


 


