$("#myButton").click(function(){

    // API REQUEST AND CALL BACK
    $.get("https://api.adviceslip.com/advice", function(data){
        const adviceData = JSON.parse(data);
        const advice = adviceData.slip.advice;
        const id = adviceData.slip.id;
        $("#adviceId").html("#"+id);
        $("#myParagraph").html('"' + advice + '"');
    });
});