let operation = prompt(`Вкажіть математичну дію:
додавання введіть - sum, 
віднімання введіть - diff, 
множення введіть - mult, 
ділення введіть - div,
Косинус числа в радіанах введіть - cos,
Синус числа в радіанах введіть - sin,
Перше число в ступені другого числа введіть - pow`);

switch (operation) {
    case 'sum': {
        let a = +prompt('Введіть перше число');
        let b = +prompt('Введіть друге число');
        alert(`Сума числа ${a} та числа ${b} = ${a + b}`);
        break;
    }
    case 'diff': {
        let a = +prompt('Введіть перше число');
        let b = +prompt('Введіть друге число');
        alert(`Різниця числа ${a} та числа ${b} = ${a - b}`);
        break;
    }
    case 'mult': {
        let a = +prompt('Введіть перше число');
        let b = +prompt('Введіть друге число');
        alert(`Множення числа ${a} на число ${b} = ${a * b}`);
        break;
    }
    case 'div': {
        let a = +prompt('Введіть перше число');
        let b = +prompt('Введіть друге число');
        alert(`Ділення числа ${a} на число ${b} = ${a / b}`);
        break;
    }
    case 'pow': {
        let a = +prompt('Введіть перше число');
        let b = +prompt('Введіть друге число');
        alert(`Число ${a} в ступені числа ${b} = ${Math.pow(a, b)}`);
        break;
    }
    case 'cos': {
        let c = +prompt('Введіть число в радіанах');
        alert(`Косинус ${c}рад = ${Math.cos(c)}`);
        break;
    }
    case 'sin': {
        let c = +prompt('Введіть число в радіанах');
        alert(`Синус ${c}рад = ${Math.sin(c)}`);
        break;
    }
    default: {
        alert('Нажаль ви ввели некоректну математичну дію');
    }
}