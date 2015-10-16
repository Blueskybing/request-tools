var request_tools = require("../lib/request");

var url = "https://openapi.360.cn/user/me.json?fields=id,name,avatar,sex,area,nick&access_token=456456115555";

request_tools.request(url, function (err, data) {
    if (err || !data) {
        console.log('360用户请求出错，err：', err);
        return;
    } else if (!data.id) {
        console.log('360用户请求，token出错，data：', data);
        return;
    }
    console.log('360用户请求成功，data：', data);
    return;
}, {
    contentType: request_tools.CONTENT_TYPES['JSON'],
    method: 'GET',
    responseFormat: 'JSON',
    httpType: 'https'
});