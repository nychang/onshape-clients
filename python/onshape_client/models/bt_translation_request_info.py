# coding: utf-8

"""
    Onshape REST API

    The Onshape REST API consumed by all clients.  # noqa: E501

    OpenAPI spec version: 1.96
    Contact: api-support@onshape.zendesk.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class BTTranslationRequestInfo(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'request_element_id': 'str',
        'request_state': 'str',
        'result_external_data_ids': 'list[str]',
        'workspace_id': 'str',
        'document_id': 'str',
        'version_id': 'str',
        'result_workspace_id': 'str',
        'result_element_ids': 'list[str]',
        'result_document_id': 'str',
        'failure_reason': 'str',
        'name': 'str',
        'id': 'str',
        'href': 'str',
        'view_ref': 'str'
    }

    attribute_map = {
        'request_element_id': 'requestElementId',
        'request_state': 'requestState',
        'result_external_data_ids': 'resultExternalDataIds',
        'workspace_id': 'workspaceId',
        'document_id': 'documentId',
        'version_id': 'versionId',
        'result_workspace_id': 'resultWorkspaceId',
        'result_element_ids': 'resultElementIds',
        'result_document_id': 'resultDocumentId',
        'failure_reason': 'failureReason',
        'name': 'name',
        'id': 'id',
        'href': 'href',
        'view_ref': 'viewRef'
    }

    def __init__(self, request_element_id=None, request_state=None, result_external_data_ids=None, workspace_id=None, document_id=None, version_id=None, result_workspace_id=None, result_element_ids=None, result_document_id=None, failure_reason=None, name=None, id=None, href=None, view_ref=None):  # noqa: E501
        """BTTranslationRequestInfo - a model defined in OpenAPI"""  # noqa: E501

        self._request_element_id = None
        self._request_state = None
        self._result_external_data_ids = None
        self._workspace_id = None
        self._document_id = None
        self._version_id = None
        self._result_workspace_id = None
        self._result_element_ids = None
        self._result_document_id = None
        self._failure_reason = None
        self._name = None
        self._id = None
        self._href = None
        self._view_ref = None
        self.discriminator = None

        if request_element_id is not None:
            self.request_element_id = request_element_id
        if request_state is not None:
            self.request_state = request_state
        if result_external_data_ids is not None:
            self.result_external_data_ids = result_external_data_ids
        if workspace_id is not None:
            self.workspace_id = workspace_id
        if document_id is not None:
            self.document_id = document_id
        if version_id is not None:
            self.version_id = version_id
        if result_workspace_id is not None:
            self.result_workspace_id = result_workspace_id
        if result_element_ids is not None:
            self.result_element_ids = result_element_ids
        if result_document_id is not None:
            self.result_document_id = result_document_id
        if failure_reason is not None:
            self.failure_reason = failure_reason
        if name is not None:
            self.name = name
        if id is not None:
            self.id = id
        if href is not None:
            self.href = href
        if view_ref is not None:
            self.view_ref = view_ref

    @property
    def request_element_id(self):
        """Gets the request_element_id of this BTTranslationRequestInfo.  # noqa: E501


        :return: The request_element_id of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._request_element_id

    @request_element_id.setter
    def request_element_id(self, request_element_id):
        """Sets the request_element_id of this BTTranslationRequestInfo.


        :param request_element_id: The request_element_id of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._request_element_id = request_element_id

    @property
    def request_state(self):
        """Gets the request_state of this BTTranslationRequestInfo.  # noqa: E501


        :return: The request_state of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._request_state

    @request_state.setter
    def request_state(self, request_state):
        """Sets the request_state of this BTTranslationRequestInfo.


        :param request_state: The request_state of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """
        allowed_values = ["ACTIVE", "DONE", "FAILED"]  # noqa: E501
        if request_state not in allowed_values:
            raise ValueError(
                "Invalid value for `request_state` ({0}), must be one of {1}"  # noqa: E501
                .format(request_state, allowed_values)
            )

        self._request_state = request_state

    @property
    def result_external_data_ids(self):
        """Gets the result_external_data_ids of this BTTranslationRequestInfo.  # noqa: E501


        :return: The result_external_data_ids of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: list[str]
        """
        return self._result_external_data_ids

    @result_external_data_ids.setter
    def result_external_data_ids(self, result_external_data_ids):
        """Sets the result_external_data_ids of this BTTranslationRequestInfo.


        :param result_external_data_ids: The result_external_data_ids of this BTTranslationRequestInfo.  # noqa: E501
        :type: list[str]
        """

        self._result_external_data_ids = result_external_data_ids

    @property
    def workspace_id(self):
        """Gets the workspace_id of this BTTranslationRequestInfo.  # noqa: E501


        :return: The workspace_id of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._workspace_id

    @workspace_id.setter
    def workspace_id(self, workspace_id):
        """Sets the workspace_id of this BTTranslationRequestInfo.


        :param workspace_id: The workspace_id of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._workspace_id = workspace_id

    @property
    def document_id(self):
        """Gets the document_id of this BTTranslationRequestInfo.  # noqa: E501


        :return: The document_id of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._document_id

    @document_id.setter
    def document_id(self, document_id):
        """Sets the document_id of this BTTranslationRequestInfo.


        :param document_id: The document_id of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._document_id = document_id

    @property
    def version_id(self):
        """Gets the version_id of this BTTranslationRequestInfo.  # noqa: E501


        :return: The version_id of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._version_id

    @version_id.setter
    def version_id(self, version_id):
        """Sets the version_id of this BTTranslationRequestInfo.


        :param version_id: The version_id of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._version_id = version_id

    @property
    def result_workspace_id(self):
        """Gets the result_workspace_id of this BTTranslationRequestInfo.  # noqa: E501


        :return: The result_workspace_id of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._result_workspace_id

    @result_workspace_id.setter
    def result_workspace_id(self, result_workspace_id):
        """Sets the result_workspace_id of this BTTranslationRequestInfo.


        :param result_workspace_id: The result_workspace_id of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._result_workspace_id = result_workspace_id

    @property
    def result_element_ids(self):
        """Gets the result_element_ids of this BTTranslationRequestInfo.  # noqa: E501


        :return: The result_element_ids of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: list[str]
        """
        return self._result_element_ids

    @result_element_ids.setter
    def result_element_ids(self, result_element_ids):
        """Sets the result_element_ids of this BTTranslationRequestInfo.


        :param result_element_ids: The result_element_ids of this BTTranslationRequestInfo.  # noqa: E501
        :type: list[str]
        """

        self._result_element_ids = result_element_ids

    @property
    def result_document_id(self):
        """Gets the result_document_id of this BTTranslationRequestInfo.  # noqa: E501


        :return: The result_document_id of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._result_document_id

    @result_document_id.setter
    def result_document_id(self, result_document_id):
        """Sets the result_document_id of this BTTranslationRequestInfo.


        :param result_document_id: The result_document_id of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._result_document_id = result_document_id

    @property
    def failure_reason(self):
        """Gets the failure_reason of this BTTranslationRequestInfo.  # noqa: E501


        :return: The failure_reason of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._failure_reason

    @failure_reason.setter
    def failure_reason(self, failure_reason):
        """Sets the failure_reason of this BTTranslationRequestInfo.


        :param failure_reason: The failure_reason of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._failure_reason = failure_reason

    @property
    def name(self):
        """Gets the name of this BTTranslationRequestInfo.  # noqa: E501


        :return: The name of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this BTTranslationRequestInfo.


        :param name: The name of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def id(self):
        """Gets the id of this BTTranslationRequestInfo.  # noqa: E501


        :return: The id of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this BTTranslationRequestInfo.


        :param id: The id of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def href(self):
        """Gets the href of this BTTranslationRequestInfo.  # noqa: E501


        :return: The href of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._href

    @href.setter
    def href(self, href):
        """Sets the href of this BTTranslationRequestInfo.


        :param href: The href of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._href = href

    @property
    def view_ref(self):
        """Gets the view_ref of this BTTranslationRequestInfo.  # noqa: E501


        :return: The view_ref of this BTTranslationRequestInfo.  # noqa: E501
        :rtype: str
        """
        return self._view_ref

    @view_ref.setter
    def view_ref(self, view_ref):
        """Sets the view_ref of this BTTranslationRequestInfo.


        :param view_ref: The view_ref of this BTTranslationRequestInfo.  # noqa: E501
        :type: str
        """

        self._view_ref = view_ref

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, BTTranslationRequestInfo):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
