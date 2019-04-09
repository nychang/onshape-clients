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


export class BTInvitationParams {
    'name'?: string;
    'message'?: string;
    'id'?: string;
    'state'?: number;
    'email'?: string;
    'password'?: string;
    'source'?: number;
    'description'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'defaultCompanyName'?: string;
    'planId'?: string;
    'seats'?: number;
    'countryCode'?: string;
    'companyPlan'?: boolean;
    'phoneNumber'?: string;
    'approveUser'?: boolean;
    'privacyConsentAccepted'?: boolean;
    'role'?: number;
    'companyUserEmails'?: Array<string>;
    'recaptcha'?: string;
    'inviteFriendRequest'?: boolean;
    'cadSystemAtSignup'?: string;
    'eulaAccepted'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "privacyConsentAccepted",
            "baseName": "privacyConsentAccepted",
            "type": "boolean"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "number"
        },
        {
            "name": "companyUserEmails",
            "baseName": "companyUserEmails",
            "type": "Array<string>"
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
        }    ];

    static getAttributeTypeMap() {
        return BTInvitationParams.attributeTypeMap;
    }
}

