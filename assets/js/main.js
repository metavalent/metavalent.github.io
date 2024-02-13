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
      $.find("nav ul").append("&lt;li class&#61;'tag-" + this.nodeName.toLowerCase() + "'&gt;&lt;a href&#61;'#" + $.find(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'&gt;" + $.find(this).text() + "&lt;/a&gt;&lt;/li&gt;");
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
