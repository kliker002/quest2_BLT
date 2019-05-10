// [0] - буква
// [1] - цифра
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var number = [1, 2, 3, 4, 5, 6, 7, 8];
var response = [];

function main() {


    var html_element = document.getElementById('pos');
    var letter = html_element.value[0].toLowerCase();
    var index_letter = letters.indexOf(letter)
    if (index_letter != -1 && number.indexOf(parseInt(html_element.value[1])) != -1) {
        vertical_check(html_element.value, index_letter)
        horizontal_check(html_element.value, index_letter)
        alert(response)
        response = []
    }else{
        alert('Wrong input!');
    }


}
function vertical_check(ask_input, index_letter) {
    var result_num = 0;

    if (parseInt(ask_input[1]) + parseInt('2') <= number[number.length - 1]) { //осуществляется проверка на выход за пределы


        if (index_letter + parseInt(1) < letters.length) {
            response.push(letters[index_letter + 1] + (parseInt(ask_input[1]) + parseInt('2')));
        }
        if (index_letter - parseInt(1) >= 0) {
            response.push(letters[index_letter - 1] + (parseInt(ask_input[1]) + parseInt('2')));
        }

    }
    if (parseInt(ask_input[1]) - parseInt('2') > 0) { //осуществляется проверка на выход за пределы
        if (index_letter + parseInt(1) < letters.length) {
            response.push(letters[index_letter + 1] + (parseInt(ask_input[1]) - parseInt('2')));
        }
        if (index_letter - parseInt(1) >= 0) {
            response.push(letters[index_letter - 1] + (parseInt(ask_input[1]) - parseInt('2')));
        }
    }
}
function horizontal_check(ask_input, index_letter) {
    numOnDesc = ask_input[1]
    if (parseInt(index_letter) - parseInt('2') >= 0) { //осуществляется проверка на выход за пределы
        if (parseInt(numOnDesc) < number.length) {
            response.push(letters[index_letter - 2] + (parseInt(numOnDesc) + 1));
        }
        if (parseInt(numOnDesc) - parseInt('1') > 0) {
            response.push(letters[index_letter - 2] + (parseInt(numOnDesc) - 1));
        }
    }
    if (parseInt(index_letter) + parseInt('2') < letters.length) { //осуществляется проверка на выход за пределы
        if (parseInt(numOnDesc) < number.length) {
            response.push(letters[index_letter + 2] + (parseInt(numOnDesc) + 1));
        }
        if (parseInt(numOnDesc) - parseInt('1') > 0) {
            response.push(letters[index_letter + 2] + (parseInt(numOnDesc) - 1));

        }
    }
}