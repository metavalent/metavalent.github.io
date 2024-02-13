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
      $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $.find(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $.find(this).text() + "</a></li>");
      $.find(this).attr("id",$.find(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
      $("nav ul li:first-child a").parent().addClass("active");
    });
  
    $("nav ul li").on("click", "a", function(event) {
      var position = $($.find(this).attr("href")).offset().top - 190;
      $("html, body").animate({scrollTop: position}, 400);
      $("nav ul li a").parent().removeClass("active");
      $.find(this).parent().addClass("active");
      event.preventDefault();
    });
  
    sectionHeight();
  
    $('img').on('load', sectionHeight);
  });
