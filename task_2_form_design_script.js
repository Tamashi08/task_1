

window.onload = function () {
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        
        let fields = form.querySelectorAll("input[type='text'], input[type='number'], select, textarea");

        let allFilled = true;

        fields.forEach(function (field) {
            
            if (field.closest(".section") && field.closest(".section").querySelector("h3")?.textContent.includes("Additional Information")) {
                return;
            }

            if (field.value.trim() === "") {
                allFilled = false;
                field.style.border = "2px solid red"; 
            } else {
                field.style.border = "1px solid gray"; 
            }
        });

        if (!allFilled) {
            alert("Please fill in all the required fields");
            event.preventDefault(); 
        } else {
            alert("Form submitted successfully!");
        }

           });
  
            let resetBtn = document.querySelector('input[type="reset"]');
            resetBtn.addEventListener("click", function (event) {
             if (!confirm("Are you sure you want to reset the form?")) {
             event.preventDefault();
    } 
        
    });
};
