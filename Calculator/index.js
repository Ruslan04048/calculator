
function textToNumber(text) {
    const units = {
        "ноль": 0, "один": 1, "два": 2, "три": 3, "четыре": 4,
        "пять": 5, "шесть": 6, "семь": 7, "восемь": 8, "девять": 9
    };
    const teens = {
        "десять": 10, "одиннадцать": 11, "двенадцать": 12, "тринадцать": 13, 
        "четырнадцать": 14, "пятнадцать": 15, "шестнадцать": 16, 
        "семнадцать": 17, "восемнадцать": 18, "девятнадцать": 19
    };
    const tens = {
        "двадцать": 20, "тридцать": 30, "сорок": 40, "пятьдесят": 50, 
        "шестьдесят": 60, "семьдесят": 70, "восемьдесят": 80, "девяносто": 90
    };
    const hundreds = {
        "сто": 100, "двести": 200, "триста": 300, "четыреста": 400,
        "пятьсот": 500, "шестьсот": 600, "семьсот": 700, "восемьсот": 800, 
        "девятьсот": 900
    };

    let number = 0;
    let words = text.toLowerCase().split(" ");
    
    try {
        for (let word of words) {
            if (units[word] !== undefined) {
                number += units[word];
            } else if (teens[word] !== undefined) {
                number += teens[word];
            } else if (tens[word] !== undefined) {
                number += tens[word];
            } else if (hundreds[word] !== undefined) {
                number += hundreds[word];
            } else {
                throw new Error('Некорректное число');
            }
        }
    } catch (error) {
        console.error(error.message);
        return NaN;
    }
    
    return number;
}

        function calculate() {
            const num1Text = document.getElementById('textInput').value;
            const num2Text = document.getElementById('textInput2').value;
            const operation = document.getElementById('operation').value;
            const resultElement = document.getElementById('result');

            try {
                const num1 = textToNumber(num1Text);
                const num2 = textToNumber(num2Text);

                if (isNaN(num1) || isNaN(num2)) {
                    throw new Error('Введите корректные числа словами.');
                }

                let result;
                switch (operation) {
                    case 'add':
                        result = num1 + num2;
                        break;
                    case 'subtract':
                        result = num1 - num2;
                        break;
                    case 'multiply':
                        result = num1 * num2;
                        break;
                    case 'divide':
                        if (num2 === 0) throw new Error('Деление на ноль невозможно.');
                        result = num1 / num2;
                        break;
                    default:
                        throw new Error('Неверная операция.');
                }

                resultElement.classList.remove('d-none');
                resultElement.textContent = `Результат: ${result}`;
            } catch (error) {
                resultElement.classList.remove('d-none');
                resultElement.classList.replace('alert-info', 'alert-danger');
                resultElement.textContent = error.message;
            }
        }
