const $=(e,l)=>{let o=e.split(" "),i=[];for(let f of o){let s=f[0].toUpperCase()+f.slice(1);i.push(s)}return i.join(" ")},p=(e,l)=>{let o=Number(e);for(let i of l)o+=o*i;return o},y=e=>{let l={Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6,Sun:7};const i=((t,a,n)=>Array.from({length:(a-t)/n+1},(u,c)=>t+c*n))(e[0],e[e.length-1],1);function f(t,a){let n={status:!0,ends:0};for(let u=a,c=t[a];u<t.length;u++){if(console.log(t[u]),console.log(c),t[u]!==c){n.status=!1,n.ends=u;break}else n.ends=u;c++}return n}let s=[],g=t=>Object.keys(l).find(a=>l[a]===e[t]),r=`${g(0)} to ${g(e.length-1)}`,d=e.length;if(JSON.stringify(i)!==JSON.stringify(e)){console.log(e);let t=!1,a=0;for(;t===!1;){let n=f(e,a);console.log(n),n.status===!1?(a=n.ends,s.push(n.ends)):t=!0}return r=`${g(0)} to ${g(s[0]-1)}, and ${g(s[0])} to ${g(e.length-1)}`,{period:r,totalDays:d}}return e.length===7&&(r="Everyday"),{period:r,totalDays:d}},A=(e,l,o,i)=>{let f=s=>s===0?"12 AM":s>12?s-12+" PM":s+" AM";return e===0&&l===24&&i.length===7?"24/7":(e!==0||l!==24)&&i.length===7?`${f(e)} to ${f(l)}, ${o}`:`${f(e)} to ${f(l)}, ${o}`};export{$ as c,y as d,A as n,p as t};
