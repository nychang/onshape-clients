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
var BTUserParams = /** @class */ (function () {
    function BTUserParams() {
    }
    BTUserParams.getAttributeTypeMap = function () {
        return BTUserParams.attributeTypeMap;
    };
    BTUserParams.discriminator = undefined;
    BTUserParams.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "number"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "defaultCompanyName",
            "baseName": "defaultCompanyName",
            "type": "string"
        },
        {
            "name": "planId",
            "baseName": "planId",
            "type": "string"
        },
        {
            "name": "seats",
            "baseName": "seats",
            "type": "number"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "companyPlan",
            "baseName": "companyPlan",
            "type": "boolean"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "approveUser",
            "baseName": "approveUser",
            "type": "boolean"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "number"
        },
        {
            "name": "forumId",
            "baseName": "forumId",
            "type": "string"
        },
        {
            "name": "recaptcha",
            "baseName": "recaptcha",
            "type": "string"
        },
        {
            "name": "inviteFriendRequest",
            "baseName": "inviteFriendRequest",
            "type": "boolean"
        },
        {
            "name": "cadSystemAtSignup",
            "baseName": "cadSystemAtSignup",
            "type": "string"
        },
        {
            "name": "eulaAccepted",
            "baseName": "eulaAccepted",
            "type": "boolean"
        },
        {
            "name": "upgradeToEducationPlan",
            "baseName": "upgradeToEducationPlan",
            "type": "boolean"
        }
    ];
    return BTUserParams;
}());
exports.BTUserParams = BTUserParams;
