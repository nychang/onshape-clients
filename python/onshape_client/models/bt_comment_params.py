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


class BTCommentParams(object):
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
        'message': 'str',
        'id': 'str',
        'view_data': 'BTViewDataParams',
        'element_query': 'str',
        'element_feature': 'str',
        'element_occurrence': 'str',
        'assembly_feature': 'str',
        'workspace_id': 'str',
        'element_id': 'str',
        'parent_id': 'str',
        'version_id': 'str',
        'document_id': 'str',
        'assignee': 'str'
    }

    attribute_map = {
        'message': 'message',
        'id': 'id',
        'view_data': 'viewData',
        'element_query': 'elementQuery',
        'element_feature': 'elementFeature',
        'element_occurrence': 'elementOccurrence',
        'assembly_feature': 'assemblyFeature',
        'workspace_id': 'workspaceId',
        'element_id': 'elementId',
        'parent_id': 'parentId',
        'version_id': 'versionId',
        'document_id': 'documentId',
        'assignee': 'assignee'
    }

    def __init__(self, message=None, id=None, view_data=None, element_query=None, element_feature=None, element_occurrence=None, assembly_feature=None, workspace_id=None, element_id=None, parent_id=None, version_id=None, document_id=None, assignee=None):  # noqa: E501
        """BTCommentParams - a model defined in OpenAPI"""  # noqa: E501

        self._message = None
        self._id = None
        self._view_data = None
        self._element_query = None
        self._element_feature = None
        self._element_occurrence = None
        self._assembly_feature = None
        self._workspace_id = None
        self._element_id = None
        self._parent_id = None
        self._version_id = None
        self._document_id = None
        self._assignee = None
        self.discriminator = None

        if message is not None:
            self.message = message
        if id is not None:
            self.id = id
        if view_data is not None:
            self.view_data = view_data
        if element_query is not None:
            self.element_query = element_query
        if element_feature is not None:
            self.element_feature = element_feature
        if element_occurrence is not None:
            self.element_occurrence = element_occurrence
        if assembly_feature is not None:
            self.assembly_feature = assembly_feature
        if workspace_id is not None:
            self.workspace_id = workspace_id
        if element_id is not None:
            self.element_id = element_id
        if parent_id is not None:
            self.parent_id = parent_id
        if version_id is not None:
            self.version_id = version_id
        if document_id is not None:
            self.document_id = document_id
        if assignee is not None:
            self.assignee = assignee

    @property
    def message(self):
        """Gets the message of this BTCommentParams.  # noqa: E501


        :return: The message of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this BTCommentParams.


        :param message: The message of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._message = message

    @property
    def id(self):
        """Gets the id of this BTCommentParams.  # noqa: E501


        :return: The id of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this BTCommentParams.


        :param id: The id of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def view_data(self):
        """Gets the view_data of this BTCommentParams.  # noqa: E501


        :return: The view_data of this BTCommentParams.  # noqa: E501
        :rtype: BTViewDataParams
        """
        return self._view_data

    @view_data.setter
    def view_data(self, view_data):
        """Sets the view_data of this BTCommentParams.


        :param view_data: The view_data of this BTCommentParams.  # noqa: E501
        :type: BTViewDataParams
        """

        self._view_data = view_data

    @property
    def element_query(self):
        """Gets the element_query of this BTCommentParams.  # noqa: E501


        :return: The element_query of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._element_query

    @element_query.setter
    def element_query(self, element_query):
        """Sets the element_query of this BTCommentParams.


        :param element_query: The element_query of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._element_query = element_query

    @property
    def element_feature(self):
        """Gets the element_feature of this BTCommentParams.  # noqa: E501


        :return: The element_feature of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._element_feature

    @element_feature.setter
    def element_feature(self, element_feature):
        """Sets the element_feature of this BTCommentParams.


        :param element_feature: The element_feature of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._element_feature = element_feature

    @property
    def element_occurrence(self):
        """Gets the element_occurrence of this BTCommentParams.  # noqa: E501


        :return: The element_occurrence of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._element_occurrence

    @element_occurrence.setter
    def element_occurrence(self, element_occurrence):
        """Sets the element_occurrence of this BTCommentParams.


        :param element_occurrence: The element_occurrence of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._element_occurrence = element_occurrence

    @property
    def assembly_feature(self):
        """Gets the assembly_feature of this BTCommentParams.  # noqa: E501


        :return: The assembly_feature of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._assembly_feature

    @assembly_feature.setter
    def assembly_feature(self, assembly_feature):
        """Sets the assembly_feature of this BTCommentParams.


        :param assembly_feature: The assembly_feature of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._assembly_feature = assembly_feature

    @property
    def workspace_id(self):
        """Gets the workspace_id of this BTCommentParams.  # noqa: E501


        :return: The workspace_id of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._workspace_id

    @workspace_id.setter
    def workspace_id(self, workspace_id):
        """Sets the workspace_id of this BTCommentParams.


        :param workspace_id: The workspace_id of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._workspace_id = workspace_id

    @property
    def element_id(self):
        """Gets the element_id of this BTCommentParams.  # noqa: E501


        :return: The element_id of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._element_id

    @element_id.setter
    def element_id(self, element_id):
        """Sets the element_id of this BTCommentParams.


        :param element_id: The element_id of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._element_id = element_id

    @property
    def parent_id(self):
        """Gets the parent_id of this BTCommentParams.  # noqa: E501


        :return: The parent_id of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._parent_id

    @parent_id.setter
    def parent_id(self, parent_id):
        """Sets the parent_id of this BTCommentParams.


        :param parent_id: The parent_id of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._parent_id = parent_id

    @property
    def version_id(self):
        """Gets the version_id of this BTCommentParams.  # noqa: E501


        :return: The version_id of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._version_id

    @version_id.setter
    def version_id(self, version_id):
        """Sets the version_id of this BTCommentParams.


        :param version_id: The version_id of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._version_id = version_id

    @property
    def document_id(self):
        """Gets the document_id of this BTCommentParams.  # noqa: E501


        :return: The document_id of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._document_id

    @document_id.setter
    def document_id(self, document_id):
        """Sets the document_id of this BTCommentParams.


        :param document_id: The document_id of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._document_id = document_id

    @property
    def assignee(self):
        """Gets the assignee of this BTCommentParams.  # noqa: E501


        :return: The assignee of this BTCommentParams.  # noqa: E501
        :rtype: str
        """
        return self._assignee

    @assignee.setter
    def assignee(self, assignee):
        """Sets the assignee of this BTCommentParams.


        :param assignee: The assignee of this BTCommentParams.  # noqa: E501
        :type: str
        """

        self._assignee = assignee

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
        if not isinstance(other, BTCommentParams):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
