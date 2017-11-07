!function(){function e(){setTimeout(function(){_.val()?G.hide():G.show()},0)}var a=$(".search"),s=($("body").data("ie"),$(".search form")),t=$(".search-advanced"),o=$(".search-advanced-toggle"),r=o.attr("data-toggle-on"),c=o.attr("data-toggle-off"),n=$(".search-attributes"),l=$("select[data-frequency=per-month]"),i=$("select[data-frequency=per-week]"),d=$("#price_frequency"),h=$(".search-li-frequency-month"),p=$(".search-li-frequency-week"),u=$("select[data-floor-area-units=sq_feet]"),v=$("select[data-floor-area-units=sq_metres]"),f=$("select[data-floor-area-units=acres]"),b=$("#floor_area_units"),m=$(".search-li-units-sq-feet"),x=$(".search-li-units-sq-metres"),C=$(".search-li-units-acres"),g=$("#property_type"),k=$("#beds_min"),I=$("#furnished_state"),B=$('[name|="section"]'),_=$("#search-input-location"),w=$("#search-input-location-overseas"),y=$("#search-li-sub-location-overseas"),q=$(".search-ol-radius"),U=$("#search-input-company"),A=$("select[data-section=for-sale]"),D=$("select[data-section=to-rent]"),E=$(":hidden[data-section=for-sale]"),F=$(":hidden[data-section=to-rent]"),K=$(".search-attr-for-sale"),N=$("#search-input-location-label"),P=$(".search-attr-to-rent"),G=$(".search-input-location-placeholder"),R=$(".search-input-location-placeholder-1"),S=$(".search-input-location-placeholder-2"),L=$(".search-checkbox"),M=$(".search-radio"),O=$(".search-bottom"),T=$("#search-currency-wrapper :radio"),V=$("select",".search").not("[data-selectboxit=false]"),W=$('[name|="overseas_geo_autocomplete_identifier"]');V.selectBoxIt({autoWidth:!1,"native":!0,downArrowIcon:"icon icon-down-open-1"}),$(".search-tabs a").on("click",function(e){e.preventDefault();var a=$(this),s=a.attr("data-section"),t=$(".search-tabs-active");t.removeClass("search-tabs-active"),a.parent().addClass("search-tabs-active"),j(s),dataLayer.push({event:"GAVirtualPageview",virtualPageviewUrl:"/tracking/"+s})}),$(".search-type-selector input[type=radio]").on("click",function(){var e=$(this),a=e.attr("data-section");j(a)});var j=function(e){_.focus(),a.attr("data-search-section",e),B.val(e),("for-sale"===e||"to-rent"===e)&&(R.removeClass("none"),S.addClass("none"),o.removeClass("none"),g.prop("disabled","").selectBoxIt("enable"),k.prop("disabled","").selectBoxIt("enable"),Q(),$(".search-type-selector-home").removeClass("none")),"for-sale"===e?(N.text("Search for houses and flats for sale across the UK"),"per_week"===d.val()&&d.val("per_month").trigger("change"),b.trigger("change"),P.addClass("none"),K.removeClass("none"),n.removeClass("none"),D.prop("disabled","disabled").selectBoxIt("disable"),A.prop("disabled","").selectBoxIt("enable"),F.val(""),E.each(function(){var e=$(this);"false"!==e.attr("data-checked")&&(e.val(e.attr("data-value")),"true"===e.attr("data-value")&&e.closest(".form-group").find(".search-checkbox").addClass("search-checkbox-is-checked"))})):"to-rent"===e?(N.text("Search for houses and flats to rent across the UK"),K.addClass("none"),P.removeClass("none"),n.removeClass("none"),d.trigger("change"),b.trigger("change"),A.prop("disabled","disabled").selectBoxIt("disable"),D.prop("disabled","").selectBoxIt("enable"),E.val(""),F.each(function(){var e=$(this);"false"!==e.attr("data-checked")&&(e.val(e.attr("data-value")),"true"===e.attr("data-value")&&e.closest(".form-group").find(".search-checkbox").addClass("search-checkbox-is-checked"))})):(N.text("home-values"===e?"Get FREE, instant current value estimates for any UK home":"Discover all house prices paid across the UK since 1995, FREE"),$(".search-type-selector-home").addClass("none"),R.addClass("none"),S.removeClass("none"),a.attr("data-search-advanced","true"),t.hide(),o.addClass("none").html("More options").removeClass("is-active"),z(),n.addClass("none"),d.val("per_month").selectBoxIt("refresh"),b.val("sq_metres").selectBoxIt("refresh"),A.prop("disabled","disabled").selectBoxIt("disable"),D.prop("disabled","disabled").selectBoxIt("disable"),g.prop("disabled","disabled").selectBoxIt("disable"),k.prop("disabled","disabled").selectBoxIt("disable"),E.val(""),F.val(""))},z=function(){"true"===a.attr("data-search-advanced")?(a.attr("data-search-advanced","false"),o.html(c).removeClass("is-active").append('<i class="icon icon-down-open"></i>'),t.slideUp(),O.removeClass("is-expanded")):(a.attr("data-search-advanced","true"),o.html(r).addClass("is-active").append('<i class="icon icon-up-open"></i>'),t.slideDown(),O.addClass("is-expanded"))};o.on("click",function(e){e.preventDefault(),z()}),s.submit(function(){if(B.val().match(/^((find-agents(\/(estate-agents|letting-agents|overseas-agents|commercial-agents))?)|(new-homes\/developers))$/)){if(""===_.val()&&""===U.val()){_.focus();var e=_.parent();return _.blur(function(){e.removeClass("search-input-wrapper--focus")}),e.addClass("search-input-wrapper--focus"),e.find("span").text("Please enter a location"),!1}if(""===w.val()&&""===U.val())return w.focus(),!1;if(""===U.val()&&""===_.val())return _.focus(),!1}else if("overseas"===B.val()){if(""===w.val())return w.focus(),!1}else if(""===_.val()){_.focus();var e=_.parent();return _.blur(function(){e.removeClass("search-input-wrapper--focus")}),e.addClass("search-input-wrapper--focus"),e.find("span").text("Please enter a location"),!1}});var H=function(e){var a=e.closest(" .form-group ").find(".search-checkbox"),s=e.closest(" .form-group ").find("input");if(a.hasClass("search-checkbox-is-checked")){a.removeClass("search-checkbox-is-checked");var t=s.attr("data-value-unchecked")||"";s.val(t)}else a.addClass("search-checkbox-is-checked"),s.val(s.attr("data-value"))},J=function(e){var a=e.closest("label").find(".search-radio"),s=e.closest("label").find("input"),t=e.closest(".search-radios").find(".search-radio");t.removeClass("search-radio-is-checked"),a.hasClass("search-radio-is-checked")?(a.removeClass("search-radio-is-checked"),s.prop("selected",!1)):(a.addClass("search-radio-is-checked"),s.prop("selected",!0))};$(".search-checkboxes label, .search-checkbox").on("click",function(){H($(this))}),$(".search-radios").on("click","input",function(){J($(this))}),L.each(function(){var e=$(this),a=e.closest(".form-group").find("input");a.val()===a.attr("data-value")?e.addClass("search-checkbox-is-checked"):e.removeClass("search-checkbox-is-checked")}),M.each(function(){var e=$(this),a=e.closest("label").find("input");a.prop("checked")===!0?e.addClass("search-radio-is-checked"):e.removeClass("search-radio-is-checked")}),g.on("change",function(){Q()});var Q=function(){var e=g.find(":selected").val(),a=2;b.children('option[value="acres"]')&&b.selectBoxIt("remove",a),"land"==e?(k.prop("disabled",!0).selectBoxIt("disable"),I.prop("disabled",!0).selectBoxIt("disable"),b.selectBoxIt("add",'<option value="acres">Acres</option>'),b.trigger("change"),b.selectBoxIt("selectOption",a)):(k.prop("disabled",!1).selectBoxIt("enable"),I.prop("disabled",!1).selectBoxIt("enable"),b.trigger("change"))};d.on("change",function(){var e=$(this).val();"per_week"===e?(p.find("select option:selected").prop("selected",!1),h.addClass("none"),p.removeClass("none"),l.prop("disabled","disabled").selectBoxIt("disable"),i.prop("disabled","").selectBoxIt("enable").selectBoxIt("refresh")):(h.find("select option:selected").prop("selected",!1),h.removeClass("none"),p.addClass("none"),l.prop("disabled","").selectBoxIt("enable"),i.prop("disabled","disabled").selectBoxIt("disable").selectBoxIt("refresh"))}),b.on("change",function(){var e=$(this).val();x.addClass("none"),m.addClass("none"),C.addClass("none"),u.prop("disabled","disabled").selectBoxIt("disable"),v.prop("disabled","disabled").selectBoxIt("disable"),f.prop("disabled","disabled").selectBoxIt("disable"),"sq_metres"===e?(x.removeClass("none"),v.prop("disabled","").selectBoxIt("enable").selectBoxIt("refresh")):"acres"===e?(C.removeClass("none"),f.prop("disabled","").selectBoxIt("enable").selectBoxIt("refresh")):(m.removeClass("none"),u.prop("disabled","").selectBoxIt("enable").selectBoxIt("refresh"))}),G.css("display","block"),_.on("keydown paste",function(){e()}),G.on("click",function(){_.focus()}),W.val("");var X=function(){$("#overseas-sub-location").val(""),W.val(""),"true"===w.find(":selected").attr("data-hierarchy")?(y.removeClass("none"),q.removeClass("none"),a.addClass("search-section-overseas-sub")):(y.addClass("none"),q.addClass("none"),a.removeClass("search-section-overseas-sub"))};w.on("change",function(){X()}),X(),T.on("click",function(){var e=$(this),a=e.parent().find(".search-currency").text();$("#forsale_price_min option, #forsale_price_max option").each(function(){var e=$(this),s=e.text(),t=s.substring(1),o=a+t;return""===e.val()?!0:void e.text(o)}),$("#forsale_price_min, #forsale_price_max").selectBoxIt("refresh")}),$("select[name*=_min]").on("change",function(){var e=$(this).attr("name");if("price_min"===e)var a=$(this).parents("div:eq(0)").siblings(".search-attributes-price-max:not(.none)").find("select");else if("floor_area_min"===e)var a=$(this).parents("div:eq(0)").siblings(".search-attributes-floor-area-max:not(.none)").find("select");else if("beds_min"===e)return!0;var s=a.find("option"),t=parseFloat(a.find("option:selected").val()),o=parseFloat($(this).val()),r=$(this).find("option:gt(0)").clone(!1);isNaN(o)?(a.html(r).prepend(s.eq(0)),isNaN(t)||(a.find("option:selected").removeAttr("selected"),a.find('option[value="'+t+'"]').prop("selected",!0))):(a.find('option[value="'+o+'"]').val()||(a.html(r).prepend(s.eq(0)),a.find('option[value="'+t+'"]').prop("selected",!0)),a.find("option").each(function(){return""===$(this).val()?!0:void($(this).val()<o&&$(this).remove())}).end(),t&&a.find('option[value="'+t+'"]').prop("selected",!0)),a.selectBoxIt("refresh")}),window.location.hash||_.focus(),Q();var Y=$(".search-type-selector input[type=radio]:checked").attr("data-section");Y&&j(Y),$("#search-input-location").val(""),$(".search-attributes select:enabled").attr("data-section",a.attr("data-search-section"));var Z=$('.search-attributes select[data-section="'+a.attr("data-search-section")+'"]');$(".geo_autocomplete").on("autocompleteresponse",function(e,a){Z.hide(),a.length||V.selectBoxIt("refresh")}).on("autocompleteselect autocompleteclose",function(){Z.show()})}();