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

import { ThreeDSecure } from './threeDSecure';

export class Card {
    'id'?: string;
    'object'?: string;
    'account'?: string;
    'customer'?: string;
    'metadata'?: { [key: string]: string; };
    'addressCity'?: string;
    'addressCountry'?: string;
    'addressLine1'?: string;
    'addressLine1Check'?: string;
    'addressLine2'?: string;
    'addressState'?: string;
    'addressZip'?: string;
    'addressZipCheck'?: string;
    'availablePayoutMethods'?: Array<string>;
    'brand'?: string;
    'country'?: string;
    'currency'?: string;
    'cvcCheck'?: string;
    'defaultForCurrency'?: boolean;
    'dynamicLast4'?: string;
    'expMonth'?: number;
    'expYear'?: number;
    'fingerprint'?: string;
    'funding'?: string;
    'last4'?: string;
    'name'?: string;
    'recipient'?: string;
    'status'?: string;
    'threeDSecure'?: ThreeDSecure;
    'tokenizationMethod'?: string;
    'description'?: string;
    'iin'?: string;
    'issuer'?: string;
    'type'?: string;
    'instanceURL'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "addressCity",
            "baseName": "addressCity",
            "type": "string"
        },
        {
            "name": "addressCountry",
            "baseName": "addressCountry",
            "type": "string"
        },
        {
            "name": "addressLine1",
            "baseName": "addressLine1",
            "type": "string"
        },
        {
            "name": "addressLine1Check",
            "baseName": "addressLine1Check",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "addressLine2",
            "type": "string"
        },
        {
            "name": "addressState",
            "baseName": "addressState",
            "type": "string"
        },
        {
            "name": "addressZip",
            "baseName": "addressZip",
            "type": "string"
        },
        {
            "name": "addressZipCheck",
            "baseName": "addressZipCheck",
            "type": "string"
        },
        {
            "name": "availablePayoutMethods",
            "baseName": "availablePayoutMethods",
            "type": "Array<string>"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "cvcCheck",
            "baseName": "cvcCheck",
            "type": "string"
        },
        {
            "name": "defaultForCurrency",
            "baseName": "defaultForCurrency",
            "type": "boolean"
        },
        {
            "name": "dynamicLast4",
            "baseName": "dynamicLast4",
            "type": "string"
        },
        {
            "name": "expMonth",
            "baseName": "expMonth",
            "type": "number"
        },
        {
            "name": "expYear",
            "baseName": "expYear",
            "type": "number"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "funding",
            "baseName": "funding",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "threeDSecure",
            "baseName": "threeDSecure",
            "type": "ThreeDSecure"
        },
        {
            "name": "tokenizationMethod",
            "baseName": "tokenizationMethod",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "iin",
            "baseName": "iin",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "instanceURL",
            "baseName": "instanceURL",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }
}

