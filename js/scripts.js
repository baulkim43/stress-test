$(document).ready(function(){
  $("form#stress_survey").submit(function(event) {
    event.preventDefault();
    var checkStressNum=[];
    var checkHealthNum=[];
    var checkCopingNum=[];

    $(".results").show();
    $("input:checkbox[name=stress-factors]:checked").each(function() {
      var stressFactors = $(this).val();
      checkStressNum.push(stressFactors)
    $(".results").append(stressFactors + "<br>");

    });

    $("input:checkbox[name=health-factors]:checked").each(function() {
      var healthFactors = $(this).val();
      checkHealthNum.push(healthFactors)
    $(".results").append(healthFactors + "<br>");
    });

    $("input:checkbox[name=coping-factors]:checked").each(function() {
      var copingFactors = $(this).val();
      checkCopingNum.push(copingFactors)
    $(".results").append(copingFactors + "<br>");

    });
    if (checkStressNum.length === 3){
      alert("badday")
    }else if (checkHealthNum.length === 2){

      alert("poo")
    }else{
      alert("you good")
    }

  });
});
