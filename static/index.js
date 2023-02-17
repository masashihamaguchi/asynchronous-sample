/**
 * index.js
 */

const setButtonAction = () => {
    const numberText = $('#number');
    const plusBtn = $('#plus');
    const minusBtn = $('#minus');

    plusBtn.click((_event) => {
        $.ajax({
            type: 'POST',
            url: '/plus',
            dataType: 'json'
        }).done((data) => {
            const number = data.number;
            numberText.text(number);
        }).fail((XMLHttpRequest, textStatus, errorThrown) => {
            console.log(errorThrown);
        })
    });

    minusBtn.click((_event) => {
        $.ajax({
            type: 'POST',
            url: '/minus',
            dataType: 'json'
        }).done((data) => {
            const number = data.number;
            numberText.text(number);
        }).fail((XMLHttpRequest, textStatus, errorThrown) => {
            console.log(errorThrown);
        })
    });
}

const init = () => {
    setButtonAction();
}

window.onload = (_event) => {
    init();
}
