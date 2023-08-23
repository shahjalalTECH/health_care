// Active Class

$(function(){
  $('.nav-link').each(function() {
      if ($(this).prop('href') == window.location.href) {
          $(this).addClass('active');
      }
  });
});

//Contact Us

$("#contact").validate({
  rules: {
    website: {
      required: true,
      url: true
    }
  },
  submitHandler: function (form) {
    form.submit();
  }
});

//Programmes

var closeBtn = document.querySelectorAll(".close"),
  card = document.querySelectorAll(".card"),
  btnActions = document.querySelectorAll(".btn");

closeBtn.forEach(function (el) {
  el.addEventListener("click", closeCard);
});

card.forEach(function (el) {
  el.addEventListener("click", openCard);
});

btnActions.forEach(function (el) {
  el.addEventListener("click", clickBtn);
});

function closeCard(event) {
  event.stopPropagation();
  event.target.closest(".card").classList.add("closed");

}

function openCard(event) {
  if (event.currentTarget.classList.contains("closed")) {
    event.currentTarget.classList.remove("closed");
  }
}

function clickBtn(event) {
  if (event.currentTarget.classList.contains("clicked")) {
    event.currentTarget.classList.remove("clicked");
  } else {
    event.currentTarget.classList.add("clicked");
  }
}