const hexCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const colorText = document.getElementById('color-text');

let x = 0;

btn.addEventListener('click', () => {
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexCharacters.length);
        newColor += hexCharacters[randomIndex];
    }

    x = newColor;
    

    document.body.style.backgroundColor = newColor;

    colorText.textContent = newColor;
})