function p(n,a){return(i,s,e)=>{let t=e.value;return e.value=function(...r){let o=this[a?.ngZoneName||"ngZone"];if(!o)return t.call(this,...r);let u;return o[n](()=>{u=t.call(this,...r)}),u},e}}function y(n){return p("runOutsideAngular",n)}export{y as a};
