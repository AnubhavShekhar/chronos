$(".input").focusin(function () {
  $(this).find("span").animate({ opacity: "0" }, 200);
});

$(".input").focusout(function () {
  $(this).find("span").animate({ opacity: "1" }, 300);
});

$(".login").submit(function () {
  const username = $('#username').val();
  const password = $('#password').val();

  if (username !== 'admin' || password !== 'chronos') {
    $(this).find(".submit i").removeAttr("class").addClass("fa fa-times").css({ color: "#fff"});
    $(".submit").css({ background: "#e6524d", "border-color": "#e6524d" });
    $(".feedback-negative").show().animate({ opacity: "1", bottom: "-80px" }, 400);
    $("input").css({ "border-color": "#e6524d" });
  } else {
    $(this).find(".submit i").removeAttr("class").addClass("fa fa-check").css({ color: "#fff"});
    $(".submit").css({ background: "#2ecc71", "border-color": "#2ecc71" });
    $(".feedback-negative").hide();
    $(".feedback-positive").show().animate({ opacity: "1", bottom: "-80px" }, 400);
    $("input").css({ "border-color": "#2ecc71" });
    setInterval(() => document.location.href = 'input.html', 1000);
  }
  return false;
});
