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

import { BTNamedViewInfo } from './bTNamedViewInfo';

export class BTNamedViewsInfo {
    'namedViews'?: { [key: string]: BTNamedViewInfo; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "namedViews",
            "baseName": "namedViews",
            "type": "{ [key: string]: BTNamedViewInfo; }"
        }    ];

    static getAttributeTypeMap() {
        return BTNamedViewsInfo.attributeTypeMap;
    }
}

