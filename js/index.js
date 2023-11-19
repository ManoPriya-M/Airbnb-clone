document.addEventListener('DOMContentLoaded', function() {
    const taxCheckbox = document.getElementById('switch'); // Updated ID for the checkbox
    const amountElements = document.querySelectorAll('b.output-rate'); // Updated selector for elements with class "output-rate"

    if (amountElements.length > 0 && taxCheckbox) {
        amountElements.forEach(amountElement => {
            const initialAmount = parseFloat(amountElement.textContent.replace(/[^\d.]/g, '')); // Extract the initial numeric amount

            function calculateTotalAmount() {
                const isChecked = taxCheckbox.querySelector('input').checked; // Check if the checkbox is checked

                if (isChecked) {
                    const taxAmount = initialAmount * 0.18;
                    const totalAmount = initialAmount + taxAmount;

                    // Update the amount display
                    amountElement.textContent = `₹${totalAmount.toFixed(2)}`; // Display the total amount with currency symbol and two decimal places
                } else {
                    // Display the initial amount without tax
                    amountElement.textContent = `₹${initialAmount.toFixed(2)}`;
                }
            }

            taxCheckbox.addEventListener('change', calculateTotalAmount);
            calculateTotalAmount();
        });
    } else {
        console.error("Elements with class 'output-rate' or 'switch' not found.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const gridBoxes = document.querySelectorAll('.gridBox');

    gridBoxes.forEach(gridBox => {
        const prevButton = gridBox.querySelector('.prev-button');
        const nextButton = gridBox.querySelector('.next-button');
        const slides = gridBox.querySelector('.slides');
        const slideImages = gridBox.querySelectorAll('.slides img');

        let currentSlide = 0;

        prevButton.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlidePosition();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentSlide < slideImages.length - 1) {
                currentSlide++;
                updateSlidePosition();
            }
        });

        function updateSlidePosition() {
            const offset = -currentSlide * slideImages[0].offsetWidth;
            slides.style.transform = `translateX(${offset}px)`;

            // Toggle visibility of previous button based on current slide
            prevButton.style.display = currentSlide === 0 ? 'none' : 'block';
        }
    });
});
