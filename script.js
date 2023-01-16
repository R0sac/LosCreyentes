let arrayNameOption= ["Selecciona","Numeric","Text"];
let arrayValueOption= ["sel","numeric","text"];
let arrayNameButton= ["Cancelar", "Confirmar"]
let arrayIdButton= ["cancelar", "confirm"]
let verSelect= false;
let verInput= false;



$(document).ready(function() {
    $('#crearPregunta').click(function() {
        $("#dash-contenido").removeAttr("style");
        createQuestion("#dash-contenido");
    });
  
    $('#crearEncuesta').click(function() {
        $("#dash-contenido").empty();
    });
    
    $('#listarPreguntas').click(function() {
        $("#dash-contenido").empty();
        /*
        $('#itempregunta').empty();
        for (var i = 0; i < questions.length; i++) {
        var question = questions[i];
        var questionItem = $('<li>').text(question.question);
        var answersList = $('<ul>');
        for (var j = 0; j < question.answers.length; j++) {
            var answer = question.answers[j];
            var answerItem = $('<li>').text(answer);
            answersList.append(answerItem);
        }
        questionItem.append(answersList);
        $('#itempregunta').append(questionItem);
        }
                <ul id="itempregunta"></ul>

        */
    });
    $('#listarEncuestas').click(function() {
        $("#contenido").empty();
    });
});


//CREAR PREGUNTTA
function createQuestion(elementDOM){
    $(elementDOM).empty();
    $(elementDOM).append("<form class='formQuestion'><p>NOM:</p><input id='nameQuestion'type='text'><p>TIPUS:</p></form>");
    createTypeQuestion(arrayNameOption,arrayValueOption,"form")
    $("form").append("<div id='buttonConfirm'></div>");
    createButtons(arrayNameButton, "#buttonConfirm", arrayIdButton)
    $("#confirm").attr("disabled","true");
    $("#typeQuestion").on('change',selected)
    $("#nameQuestion").on('input',inputName)
}

function createTypeQuestion(nameOption,valueOption,elementDOM){
    $(elementDOM).append("<select id='typeQuestion'></select>")
    let i= 0;
    nameOption.forEach(elem => {
        $("#typeQuestion").append("<option value='"+ valueOption[i] +"'>"+ elem +"</option>");
        i++;
    });
}

function selected(){
    if($(this).val()!='sel'){
        verSelect= true;
    }
    else{
        verSelect= false;
    }
    comprovation()
}

function inputName(){
    let ver= $("#nameQuestion").val().length;
    if(ver!=0){
        verInput= true;
    }
    else{
        verInput= false;
    }
    comprovation()
}

function comprovation(){
    if(verInput== true && verSelect== true){
        $('#confirm').prop("disabled", false);
    }
    else{
        $("#confirm").attr("disabled","true");
    }
}

function createButtons(nameButtons, elementDOM, arrayId){
    let i= 0;
    nameButtons.forEach(element => {
        $(elementDOM).append("<button id='"+ arrayId[i] +"'>" + element + "</button>");
        i++;
    });
}