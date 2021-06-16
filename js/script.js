var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputValidation(){
    return input.value.length;
};

function createText(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value= '';
};

button.addEventListener("click", function(){
    if(inputValidation() > 0){
        createText();
    }
});

input.addEventListener("keypress", function(event){
    if (inputValidation() > 0 && event.key === 'Enter'){
        createText();
    }
});

