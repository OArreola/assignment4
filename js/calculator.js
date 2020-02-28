function init() {
  let $ = function(id) {
    return window.document.getElementById(id);
  };

  function enter(val) {
    $("result").value += val;
  }

  function calculate() {
    let strResult = $("result").value;
    $("result").value = eval(strResult);
  }

  $("seven").addEventListener("click", function() {
    enter($("seven").value);
  });
  $("eight").addEventListener("click", function() {
    enter($("eight").value);
  });
  $("nine").addEventListener("click", function() {
    enter($("nine").value);
  });
  $("divide").addEventListener("click", function() {
    enter($("divide").value);
  });

  $("four").addEventListener("click", function() {
    enter($("four").value);
  });
  $("five").addEventListener("click", function() {
    enter($("five").value);
  });
  $("six").addEventListener("click", function() {
    enter($("six").value);
  });
  $("multiply").addEventListener("click", function() {
    enter($("multiply").value);
  });

  $("one").addEventListener("click", function() {
    enter($("one").value);
  });
  $("two").addEventListener("click", function() {
    enter($("two").value);
  });
  $("three").addEventListener("click", function() {
    enter($("three").value);
  });
  $("subtract").addEventListener("click", function() {
    enter($("subtract").value);
  });

  $("zero").addEventListener("click", function() {
    enter($("zero").value);
  });
  $("period").addEventListener("click", function() {
    enter($("period").value);
  });
  $("add").addEventListener("click", function() {
    enter($("add").value);
  });
  $("equal").addEventListener("click", function() {
    calculate();
  });
}

window.addEventListener("load", init, false);
