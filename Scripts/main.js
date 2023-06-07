function calculate() {
    var course = 0;
    var uniforms = 0;
    var total = 0;

    if (document.getElementById("adult").checked) {
        
        course = 50;

    }
    else if (document.getElementById("teen").checked) {
        
        course = 100;

    }
    else if (document.getElementById("child").checked) {
        
        course = 25;

    }

    uniforms = 50 * document.getElementById("uniforms").value; //this value will be the number selected on the "number" input.

    total = course + uniforms;

    alert("Your total cost is: £ " + total); 

}