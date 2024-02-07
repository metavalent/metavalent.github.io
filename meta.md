---
layout: default
published: true
author: metavalent
categories: metavalent, agi, global cognition grid
tags: blog, metavalent
permalink: /meta/
---

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1>{{ post.title }}</h1>
	  <!-- <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1> // default -->

      <div>
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">:: Read More ::</a>

	<!-- spaces + hr between posts -->
	<br /><br /><br /><hr />
  
    </article>

  {% endfor %}
</div>
