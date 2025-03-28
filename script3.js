function checkAnswers() {
    let correct = 0;
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        const answer = input.getAttribute('data-answer');
        if (input.value.toUpperCase() === answer) {
            input.style.backgroundColor = 'lightgreen';
            correct++;
        } else {
            input.style.backgroundColor = 'salmon';
        }
    });
    
    const result = document.getElementById('result');
    if (correct === inputs.length) {
        result.textContent = "Congratulations! You completed the crossword.";
        result.style.color = 'green';
    } else {
        result.textContent = `You got ${correct} out of ${inputs.length} correct. Keep trying!`;
        result.style.color = 'red';
    }
}
