# onshape_client.BlobElementsApi

All URIs are relative to *https://cad.onshape.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**upload_file_create_element**](BlobElementsApi.md#upload_file_create_element) | **POST** /api/blobelements/d/{did}/w/{wid} | 


# **upload_file_create_element**
> upload_file_create_element(did, wid, content_disposition=content_disposition, entity=entity, headers=headers, media_type=media_type, message_body_workers=message_body_workers, parent=parent, providers=providers, body_parts=body_parts, parameterized_headers=parameterized_headers)



### Example

* OAuth Authentication (OAuth2): 
```python
from __future__ import print_function
import time
import onshape_client
from onshape_client.rest import ApiException
from pprint import pprint

# Configure OAuth2 access token for authorization: OAuth2
configuration = onshape_client.Configuration()
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# create an instance of the API class
api_instance = onshape_client.BlobElementsApi(onshape_client.ApiClient(configuration))
did = 'did_example' # str | 
wid = 'wid_example' # str | 
content_disposition = onshape_client.ContentDisposition() # ContentDisposition |  (optional)
entity = NULL # object |  (optional)
headers = onshape_client.BodyPartHeaders() # BodyPartHeaders |  (optional)
media_type = onshape_client.BodyPartMediaType() # BodyPartMediaType |  (optional)
message_body_workers = onshape_client.MessageBodyWorkers() # MessageBodyWorkers |  (optional)
parent = onshape_client.MultiPart() # MultiPart |  (optional)
providers = NULL # object |  (optional)
body_parts = onshape_client.BodyPart() # list[BodyPart] |  (optional)
parameterized_headers = onshape_client.BodyPartHeaders() # BodyPartHeaders |  (optional)

try:
    api_instance.upload_file_create_element(did, wid, content_disposition=content_disposition, entity=entity, headers=headers, media_type=media_type, message_body_workers=message_body_workers, parent=parent, providers=providers, body_parts=body_parts, parameterized_headers=parameterized_headers)
except ApiException as e:
    print("Exception when calling BlobElementsApi->upload_file_create_element: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **str**|  | 
 **wid** | **str**|  | 
 **content_disposition** | [**ContentDisposition**](ContentDisposition.md)|  | [optional] 
 **entity** | [**object**](object.md)|  | [optional] 
 **headers** | [**BodyPartHeaders**](BodyPartHeaders.md)|  | [optional] 
 **media_type** | [**BodyPartMediaType**](BodyPartMediaType.md)|  | [optional] 
 **message_body_workers** | [**MessageBodyWorkers**](MessageBodyWorkers.md)|  | [optional] 
 **parent** | [**MultiPart**](MultiPart.md)|  | [optional] 
 **providers** | [**object**](object.md)|  | [optional] 
 **body_parts** | [**list[BodyPart]**](BodyPart.md)|  | [optional] 
 **parameterized_headers** | [**BodyPartHeaders**](BodyPartHeaders.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/vnd.onshape.v1+json;charset=UTF-8; qs=0.1, application/json;charset=UTF-8; qs=0.9

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

