/**
 * Created by bluesky on 15-10-16.
 */

"use strict";

var _xmlreader = require("xmlreader");

var utils = module.exports = {};

utils.xml2Obj = function (xmlStr, root, callBack) {
    var xmlObj = {};
    _xmlreader.read(xmlStr, function (err, result) {
        if (err) {
            return callBack(err);
        }
        var value = result[root];
        for (var key in value) {
            var obj = value[key]
            if ('text' in obj) {
                xmlObj[key] = obj.text();
            }
        }
        callBack(null, xmlObj);
    });
}

utils.obj2Xml = function (obj, root) {
    var left = '<';
    var right = '>';
    var leftEnd = '</';
    var typeHead = left + root + right;
    var typeEnd = leftEnd + root + right;
    var xmlHead = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>';
    var content = xmlHead + typeHead;
    for (var key in obj) {
        content += left;
        content += key;
        content += right;
        content += obj[key];
        content += leftEnd;
        content += key;
        content += right;
    }
    content += typeEnd;
    return content;
}