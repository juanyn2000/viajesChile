window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 250) {
      navbar.classList.add("bg-black");
    } else {
      navbar.classList.remove("bg-black");
    }
  });
  
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  
  $(document).ready(function () {
    $(".card img").click(function () {
      $(this).siblings().toggle();
    });
  });
  