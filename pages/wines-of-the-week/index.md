---
layout: page
title: Wines of the Week
description: Free wine tasting every week from 4pm-7pm on Fridays. Try four different wines every week and find your next favorite bottle.
subtitle:
permalink: /wines-of-the-week/
---


These wines are selected specifically for our free weekly wine tasting, every Friday from 4pm-7pm. &nbsp;This week's features–**Replica Wines**. Stop by Westlake Wine & Spirits today, and shop our great wine selection and variety. &nbsp;Our knowledgeable staff will be glad to help!

Wine pricing good through 05/17/2016

<div class="wines-otw">{% for item in site.wines %} {% if item.show_wine == true %}<div class="wine-item"><h3>{{ item.title }}</h3><div class="wine-thumbnail"><img src="{{ item.image }}" /></div><div class="details"><h6>{{ item.size }}</h6>{{ item.content }}<p class="price reg-price">{{ item.reg_price }}</p><p class="price special-price">{{ item.special_price }}</p></div></div> {% endif %} {% endfor %}</div>