Package.describe({
    summary: "User remains logged in on same site across multiple domains"
});

Package.on_use(function (api) {
    api.use('webapp', 'server');
    api.use('jquery', 'client');
//    api.use(['meteor', 'livedata'], ['client', 'server']);
    api.use('headers', ['client', 'server']);
	api.add_files('xd-login-server.js', 'server');
	api.add_files('xd-login-client.js', 'client');
});
