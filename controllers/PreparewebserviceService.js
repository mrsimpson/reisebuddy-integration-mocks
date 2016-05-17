'use strict';

exports.prepareUsingPOST = function (args, res, next) {
    /**
     * parameters expected in the args:
     * transport (Conversation)
     **/


    var dummy = {};

    //OJ 17.05.16 => dummy um "tokens" ergänzen führt zu einer fehlerhaften Validierung in Query, keine Ahnung wieso
    // "tokens": [{
    //     "confidence": 0.42,
    //     "start": 1,
    //     "end": 1,
    //     "state": "Confirmed",
    //     "type": "Date",
    //     "value": "{}",
    //     "messageIdx": 123
    // }],
    dummy['application/json'] = {
        "meta": {
            "lastMessageAnalyzed": 1,
            "status": "Ongoing"
        },
        "messages": args.transport.originalValue.messages,
        "id": "aeiou",
        "queries": [
            {
                "serviceName": "Received " + args.transport.originalValue.messages.length + " messages",
                "url": "/dev/null"
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

    // dummy['application/json'] = {
    //     "meta": {
    //         "lastMessageAnalyzed": 123,
    //         "status": "Ongoing"
    //     },
    //     "messages": args.transport.originalValue.messages,
    //     "queries": [
    //         {
    //             "serviceName": "Received " + args.transport.originalValue.messages.length + " messages",
    //             "url": "/dev/null"
    //         },
    //         {
    //             "serviceName": "Answer to life, universe and everyting",
    //             "url": "https://www.google.de/?ion=1&espv=2#q=answer+to+life+the+universe+and+everything"
    //         }
    //     ],
    //     "user": {
    //         "phoneNumber": "aeiou",
    //         "homeTown": "aeiou",
    //         "displayName": "aeiou",
    //         "id": "aeiou"
    //     }
    // };

    if (Object.keys(dummy).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(dummy[Object.keys(dummy)[0]] || {}, null, 2));
    }
    else {
        res.end();
    }

};
