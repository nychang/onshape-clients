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

import { BTCustomPropertyDefinitionParams } from './bTCustomPropertyDefinitionParams';
import { BTMaterialParams } from './bTMaterialParams';
import { BTNameValuePair } from './bTNameValuePair';
import { BTPartAppearanceParams } from './bTPartAppearanceParams';

export class BTWorkspacePartParams {
    'name'?: string;
    'description'?: string;
    'project'?: string;
    'vendor'?: string;
    'title1'?: string;
    'revision'?: string;
    'title2'?: string;
    'title3'?: string;
    'productLine'?: string;
    'configuration'?: string;
    'elementId'?: string;
    'partNumber'?: string;
    'partId'?: string;
    'appearance'?: BTPartAppearanceParams;
    'connectionId'?: string;
    'material'?: BTMaterialParams;
    'customPropertyDefinitions'?: Array<BTCustomPropertyDefinitionParams>;
    'applyUpdateToAllConfigurations'?: boolean;
    'customProperties'?: Array<BTNameValuePair>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "vendor",
            "baseName": "vendor",
            "type": "string"
        },
        {
            "name": "title1",
            "baseName": "title1",
            "type": "string"
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string"
        },
        {
            "name": "title2",
            "baseName": "title2",
            "type": "string"
        },
        {
            "name": "title3",
            "baseName": "title3",
            "type": "string"
        },
        {
            "name": "productLine",
            "baseName": "productLine",
            "type": "string"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "string"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "partNumber",
            "baseName": "partNumber",
            "type": "string"
        },
        {
            "name": "partId",
            "baseName": "partId",
            "type": "string"
        },
        {
            "name": "appearance",
            "baseName": "appearance",
            "type": "BTPartAppearanceParams"
        },
        {
            "name": "connectionId",
            "baseName": "connectionId",
            "type": "string"
        },
        {
            "name": "material",
            "baseName": "material",
            "type": "BTMaterialParams"
        },
        {
            "name": "customPropertyDefinitions",
            "baseName": "customPropertyDefinitions",
            "type": "Array<BTCustomPropertyDefinitionParams>"
        },
        {
            "name": "applyUpdateToAllConfigurations",
            "baseName": "applyUpdateToAllConfigurations",
            "type": "boolean"
        },
        {
            "name": "customProperties",
            "baseName": "customProperties",
            "type": "Array<BTNameValuePair>"
        }    ];

    static getAttributeTypeMap() {
        return BTWorkspacePartParams.attributeTypeMap;
    }
}

