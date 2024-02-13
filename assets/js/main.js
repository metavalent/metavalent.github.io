var sectionHeight = function() {
    var total    = $.find(window).height(),
        $section = $.find('section').css('height','auto');
  
    if ($section.outerHeight(true) < total) {
      var margin = $section.outerHeight(true) - $section.height();
      $section.height(total - margin - 20);
    } else {
      $section.css('height','auto');
    }
  }
  
  $.find(window).resize(sectionHeight);
  
  $.find(function() {
    $.find("section h1, section h2, section h3").each(function(){
      $.find("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $.find(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $.find(this).text() + "</a></li>");
      $.find(this).attr("id",$.find(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
      $.find("nav ul li:first-child a").parent().addClass("active");
    });
  
    $.find("nav ul li").on("click", "a", function(event) {
      var position = $.find($.find(this).attr("href")).offset().top - 190;
      $.find("html, body").animate({scrollTop: position}, 400);
      $.find("nav ul li a").parent().removeClass("active");
      $.find(this).parent().addClass("active");
      event.preventDefault();
    });
  
    sectionHeight();
  
    $.find('img').on('load', sectionHeight);
  });
