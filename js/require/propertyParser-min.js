define(function(){function n(t){var n,i={};while(n=e.exec(t)){i[n[1]]=r(n[2]||n[3])}return i}function r(e){if(t.test(e)){e=e.replace(t,"$1").split(",")}else if(e==="null"){e=null}else if(e==="false"){e=false}else if(e==="true"){e=true}else if(e===""||e==="''"||e==='""'){e=""}else if(!isNaN(e)){e=+e}return e}var e=/([\w-]+)\s*:\s*(?:(\[[^\]]+\])|([^,]+)),?/g,t=/^\[([^\]]+)\]$/;return{parseProperties:n,typecastVal:r}})