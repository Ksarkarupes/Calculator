const content = document.getElementById('content');
const buttons = document.querySelectorAll('.innerButtons');
let expression;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if(buttonText === "="){
            expression = content.textContent;
            const result = eval(expression);
            content.textContent = result;
        }else if(buttonText === 'AC'){
            content.textContent = '';
        }else{
            content.textContent += buttonText;
        }
    });
});
