'use strict';

module.exports = function(Comment) {

    Comment.foo = function(msg, cb) {

        cb(null, msg + ' bar')
    }

    Comment.remoteMethod('foo', {
          http: {verb: 'get'},
          accepts: {arg: 'msg', type: 'string'},
          returns: {arg: 'greeting', type: 'string'}
    });
};
