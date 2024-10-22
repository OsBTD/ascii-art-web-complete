document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    const textArea = document.getElementById('text_area');
    const outputArea = document.querySelector('.output_area pre');

    console.log('Text area:', textArea);
    console.log('Output area:', outputArea);

    if (textArea && outputArea) {
        textArea.addEventListener('input', function () {
            console.log('Input event triggered');
            const inputLength = this.value.length;
            console.log('Input length:', inputLength);

            let fontSize;

            if (inputLength <= 13) {
                fontSize = '20px';
            } else if (inputLength <= 26) {
                fontSize = '18px';
            } else if (inputLength <= 39) {
                fontSize = '16px';
            } else {
                fontSize = '14px';
            }

            console.log('Setting font size to:', fontSize);
            outputArea.style.fontSize = fontSize;
            console.log('Current output area font size:', outputArea.style.fontSize);
        });
    } else {
        console.error('Could not find text area or output area');
    }
});


document.querySelector('.Copy_Art').addEventListener('click', function () {
    const output = document.querySelector('.output_area pre').textContent;
    navigator.clipboard.writeText(output).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

