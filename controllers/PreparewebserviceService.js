'use strict';

exports.prepareUsingPOST = function (args, res, next) {
    /**
     * parameters expected in the args:
     * transport (Conversation)
     **/


    var dummy = {};
    dummy['application/json'] = {
        "meta": {
            "lastMessageAnalyzed": 123,
            "status": "aeiou"
        },
        "messages": args.transport.originalValue.messages,
        "tokens": [{
            "confidence": 0.42,
            "start": 123,
            "end": 123,
            "state": "aeiou",
            "type": "aeiou",
            "value": "{}",
            "messageIdx": 123
        }],
        "id": "aeiou",
        "queries": [
            {
                "serviceName": "Received" + args.transport.originalValue.messages.length + "messages"
            },
            {
                "serviceName": "Answer to life, universe and everyting",
                "url": "https://www.google.de/?ion=1&espv=2#q=answer+to+life+the+universe+and+everything"
            }
        ],
        "user": {
            "phoneNumber": "aeiou",
            "homeTown": "aeiou",
            "displayName": "aeiou",
            "id": "aeiou"
        }
    };

    if (Object.keys(dummy).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(dummy[Object.keys(dummy)[0]] || {}, null, 2));
    }
    else {
        res.end();
    }

}
