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
var CustomerCardCollection = /** @class */ (function () {
    function CustomerCardCollection() {
    }
    CustomerCardCollection.getAttributeTypeMap = function () {
        return CustomerCardCollection.attributeTypeMap;
    };
    CustomerCardCollection.discriminator = undefined;
    CustomerCardCollection.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Card>"
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number"
        },
        {
            "name": "hasMore",
            "baseName": "hasMore",
            "type": "boolean"
        },
        {
            "name": "_requestOptions",
            "baseName": "requestOptions",
            "type": "RequestOptions"
        },
        {
            "name": "requestParams",
            "baseName": "requestParams",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        }
    ];
    return CustomerCardCollection;
}());
exports.CustomerCardCollection = CustomerCardCollection;
