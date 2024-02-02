function toggleLogin() {
  const $loginForm = $('.login-form');
  const $buttonText = $('#button-text');

  if ($loginForm.is(':visible')) {
    $loginForm.fadeOut();
    $buttonText.text('Click Here To login');
  } else {
    $('.loader').show();
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 1000, function() {
      $('.loader').hide();
      $loginForm.fadeIn();
      $buttonText.text('Go back');
    });
  }
}

function toggleNav() {
  var sidebar = document.getElementById("mySidebar");
  var main = document.getElementById("main");
  var header = document.querySelector("header");
  var hideBtn = document.querySelector(".openbtn");
  var showBtn = document.getElementById("showSidebar");

  sidebar.classList.toggle("hidden"); // Toggle the 'hidden' class

  if (sidebar.classList.contains("hidden")) {
    main.style.marginLeft = "0px";
    header.style.left = "0px";
    header.style.width = "100%";
    hideBtn.style.display = "none";
    showBtn.style.display = "block";
  } else {
    main.style.marginLeft = "0px";
    header.style.left = "300px";
    header.style.width = "calc(100% - 300px)";
    hideBtn.style.display = "block";
    showBtn.style.display = "none";
  }
}

  if (sidebar.classList.contains("hidden")) {
    main.style.marginLeft = "0";
    header.style.left = "0";
    header.style.width = "100%";
    hideBtn.style.display = "none";
    showBtn.style.display = "block";
  } else {
    main.style.marginLeft = "0";
    header.style.left = "300px";
    header.style.width = "calc(100% - 300px)";
    hideBtn.style.display = "block";
    showBtn.style.display = "none";
  };

  function toggleDropdown(element) {
    var dropdownContent = element.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }

// Toggle dropdown menu visibility
const dropdownToggle = document.querySelectorAll('.dropdown-toggle');

dropdownToggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle('show');
    });
});

// Close dropdown menu when clicking outside
window.addEventListener('click', (event) => {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    dropdownMenus.forEach(menu => {
        if (!menu.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});