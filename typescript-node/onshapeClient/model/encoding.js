"use strict";
/**
 * Onshape REST API
 * The Onshape REST API consumed by all clients.
 *
 * OpenAPI spec version: 1.96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Encoding = /** @class */ (function () {
    function Encoding() {
    }
    Encoding.getAttributeTypeMap = function () {
        return Encoding.attributeTypeMap;
    };
    Encoding.discriminator = undefined;
    Encoding.attributeTypeMap = [
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: Header; }"
        },
        {
            "name": "style",
            "baseName": "style",
            "type": "Encoding.StyleEnum"
        },
        {
            "name": "explode",
            "baseName": "explode",
            "type": "boolean"
        },
        {
            "name": "allowReserved",
            "baseName": "allowReserved",
            "type": "boolean"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        }
    ];
    return Encoding;
}());
exports.Encoding = Encoding;
(function (Encoding) {
    var StyleEnum;
    (function (StyleEnum) {
        StyleEnum[StyleEnum["Form"] = 'form'] = "Form";
        StyleEnum[StyleEnum["SpaceDelimited"] = 'spaceDelimited'] = "SpaceDelimited";
        StyleEnum[StyleEnum["PipeDelimited"] = 'pipeDelimited'] = "PipeDelimited";
        StyleEnum[StyleEnum["DeepObject"] = 'deepObject'] = "DeepObject";
    })(StyleEnum = Encoding.StyleEnum || (Encoding.StyleEnum = {}));
})(Encoding = exports.Encoding || (exports.Encoding = {}));
exports.Encoding = Encoding;
