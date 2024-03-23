var sectionHeight = function() {
    var total    = $(window).height(),
        $section = $('section').css('height','auto');
  
    if ($section.outerHeight(true) < total) {
      var margin = $section.outerHeight(true) - $section.height();
      $section.height(total - margin - 20);
    } else {
      $section.css('height','auto');
    }
  }
  
  $(window).resize(sectionHeight);
  
  $(function() {
    $("section h1, section h2, section h3").each(function(){
//  $("nav ul").append("<li class=;'tag-;" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
//  Try rewrite as JQuery
    $("nav ul").append($("<li>").addClass("tag-" + this.nodeName.toLowerCase()).append($("<a>").attr("href", "#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'')).text($(this).text())));
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().addClass("active");
    });
  
    $("nav ul li").on("click", "a", function(event) {
      var position = $($(this).attr("href")).offset().top - 190;
      $("html, body").animate({scrollTop: position}, 400);
      $("nav ul li a").parent().removeClass("active");
      $(this).parent().addClass("active");
      event.preventDefault();
    });
  
    sectionHeight();
  
    $('img').on('load', sectionHeight);
  });

// Implement infinite scroll on default.html liquid {{content}}
const container = document.getElementById('infinite-scroll-container');
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.8 });

function handleIntersection(entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    loadMoreContent();
  }
}

observer.observe(container.lastElementChild); // Observe the last child element initially

let isLoading = false; // Flag to avoid multiple requests

async function loadMoreContent() {
  if (isLoading) return; // Exit if already loading

  isLoading = true;

  // Simulate fetching data from an API (replace with your actual logic)
  const newData = await fetch('your-api-endpoint')
    .then(response => response.json())
    .then(data => data.items); // Replace with your data structure

  // Process and append the new data to the container
  const newContent = newData.map(item => `<div class="item">${item.content}</div>`);
  container.innerHTML += newContent.join('');

  isLoading = false;

  // Optionally, observe the newly added element for further loading
  observer.observe(container.lastElementChild);
}

// Call loadMoreContent initially to populate the page
loadMoreContent();

