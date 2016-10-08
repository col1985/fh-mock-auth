module.exports = function(req, res, next, err) {
    var mockUrls = [
        '/box/srv/1.1/admin/authpolicy/auth',
        '/box/srv/1.1/admin/authpolicy/verifysession',
        '/box/srv/1.1/admin/authpolicy/revokesession'
    ];

    var mockResponses = [
        '{"message":"Authentication successful","sessionToken":"mpbbq5guboa4ggkluqz4ipd4","status":"ok","userId":"' + process.env.USER_ID + '"}',
        '{"isValid": "true"}',
        '{"sessionToken":"mpbbq5guboa4ggkluqz4ipd4","status":"ok"}'
    ];

    var index = mockUrls.indexOf(req.url);

    if (index === -1) return next();
    res.end(mockResponses[index]);
};