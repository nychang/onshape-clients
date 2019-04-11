"use strict";
/**
 * Onshape REST API
 * The Onshape REST API consumed by all clients.
 *
 * OpenAPI spec version: 1.93
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BodyPart = /** @class */ (function () {
    function BodyPart() {
    }
    BodyPart.getAttributeTypeMap = function () {
        return BodyPart.attributeTypeMap;
    };
    BodyPart.discriminator = undefined;
    BodyPart.attributeTypeMap = [
        {
            "name": "contentDisposition",
            "baseName": "contentDisposition",
            "type": "ContentDisposition"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "any"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "BodyPartHeaders"
        },
        {
            "name": "mediaType",
            "baseName": "mediaType",
            "type": "BodyPartMediaType"
        },
        {
            "name": "messageBodyWorkers",
            "baseName": "messageBodyWorkers",
            "type": "MessageBodyWorkers"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "MultiPart"
        },
        {
            "name": "providers",
            "baseName": "providers",
            "type": "any"
        },
        {
            "name": "parameterizedHeaders",
            "baseName": "parameterizedHeaders",
            "type": "BodyPartHeaders"
        }
    ];
    return BodyPart;
}());
exports.BodyPart = BodyPart;
