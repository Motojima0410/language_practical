$(function(){
  $('#submit').on('click',function(){
    submitButton()
  })
});

function submitButton(){
  let textForm1 = Number($('#text_form_1').val());
  let textForm2 = Number($('#text_form_2').val());
  let calcType = $('input[name="radio_calc_type"]:checked').val();
  let calcResult = 0;

  if(!calcType){
    $('#result').text('calc type was not selected.');
    return false;
  }

  switch(calcType) {
      case "plus":
      calcResult = textForm1 + textForm2
      break;
      case "minus":
      calcResult = textForm2 - textForm1
      break;
      case "multiply":
      calcResult = textForm1 * textForm2
      break;
      case "divide":
        if(textForm2 === 0){
          $('#result').text('0で割ることはできません'); //一貫性を持たせるためにalertから変更
          return false;
        }
      calcResult = textForm1 / textForm2
      break;

      //default:
      //$('#result').text('calc type was not selected.');
      //return false;
  }

  $('#result').text('結果は'+ calcResult +'です。');
}