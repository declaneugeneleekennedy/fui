(function(e){e.fn.imageCheckbox=function(t,n){var r=n;var i=t;e("span.labelText",this).remove();e("input",this).css({visibility:"hidden",display:"none"});var s=function(){if(e("input",this).is(":checked")){e(this).removeClass(i);e(this).addClass(r)}else{e(this).removeClass(r);e(this).addClass(i)}};var o=function(){if(e("input",this).is(":checked")){e("input",this).removeAttr("checked")}else{e("input",this).attr("checked","checked")}};var u=function(t){return{type:t,inputName:e("input",this).attr("name"),classOn:r,classOff:i,isChecked:e("input",this).is(":checked")}};s.apply(this);e(this).click(function(){o.apply(this);e(this).trigger(u.apply(this,["stateChanged"]));s.apply(this);e(this).trigger(u.apply(this,["classChanged"]))})}})(jQuery)