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


class BTExportTessellatedFacesResponse(object):
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
        'bodies': 'list[BTExportTessellatedFacesBody]',
        'error_enum': 'str',
        'facet_points': 'list[BTVector3d]',
        'type_id': 'int',
        'connection_source': 'BTConnection',
        'export_type_name': 'str',
        'unknown_class': 'bool'
    }

    attribute_map = {
        'bodies': 'bodies',
        'error_enum': 'errorEnum',
        'facet_points': 'facetPoints',
        'type_id': 'typeId',
        'connection_source': 'connectionSource',
        'export_type_name': 'exportTypeName',
        'unknown_class': 'unknownClass'
    }

    def __init__(self, bodies=None, error_enum=None, facet_points=None, type_id=None, connection_source=None, export_type_name=None, unknown_class=None):  # noqa: E501
        """BTExportTessellatedFacesResponse - a model defined in OpenAPI"""  # noqa: E501

        self._bodies = None
        self._error_enum = None
        self._facet_points = None
        self._type_id = None
        self._connection_source = None
        self._export_type_name = None
        self._unknown_class = None
        self.discriminator = None

        if bodies is not None:
            self.bodies = bodies
        if error_enum is not None:
            self.error_enum = error_enum
        if facet_points is not None:
            self.facet_points = facet_points
        if type_id is not None:
            self.type_id = type_id
        if connection_source is not None:
            self.connection_source = connection_source
        if export_type_name is not None:
            self.export_type_name = export_type_name
        if unknown_class is not None:
            self.unknown_class = unknown_class

    @property
    def bodies(self):
        """Gets the bodies of this BTExportTessellatedFacesResponse.  # noqa: E501

        Array of information for each body.  # noqa: E501

        :return: The bodies of this BTExportTessellatedFacesResponse.  # noqa: E501
        :rtype: list[BTExportTessellatedFacesBody]
        """
        return self._bodies

    @bodies.setter
    def bodies(self, bodies):
        """Sets the bodies of this BTExportTessellatedFacesResponse.

        Array of information for each body.  # noqa: E501

        :param bodies: The bodies of this BTExportTessellatedFacesResponse.  # noqa: E501
        :type: list[BTExportTessellatedFacesBody]
        """

        self._bodies = bodies

    @property
    def error_enum(self):
        """Gets the error_enum of this BTExportTessellatedFacesResponse.  # noqa: E501


        :return: The error_enum of this BTExportTessellatedFacesResponse.  # noqa: E501
        :rtype: str
        """
        return self._error_enum

    @error_enum.setter
    def error_enum(self, error_enum):
        """Sets the error_enum of this BTExportTessellatedFacesResponse.


        :param error_enum: The error_enum of this BTExportTessellatedFacesResponse.  # noqa: E501
        :type: str
        """
        allowed_values = ["NO_ERROR", "UNKNOWN_OPERATION", "TOO_MANY_ENTITIES_SELECTED", "POINTS_COINCIDENT", "NO_TRANSLATION_DIRECTION", "NO_ROTATION_AXIS", "NO_TANGENT_PLANE", "NO_TANGENT_LINE", "INVALID_INPUT", "CANNOT_RESOLVE_ENTITIES", "CANNOT_EVALUATE_VERTEX", "CANNOT_RESOLVE_PLANE", "CANNOT_COMPUTE_BBOX", "CANNOT_BE_EMPTY", "CACHE_WRITE_FAILED", "CACHE_READ_FAILED", "HLR_FAILED", "BAD_GEOMETRY", "INVALID_RESULT", "MISSING_EXT_REF", "READ_FAILED", "WRITE_FAILED", "WRONG_TYPE", "TANGENT_PROPAGATION_FAILED", "REGEN_ERROR", "COULD_NOT_COMPUTE_TRANSFORM", "MATE_INVALID_MATE", "MATECONNECTOR_INVALID_MATE", "MATE_TWO_MATECONNECTORS_NEEDED", "MATECONNECTORS_ON_SAME_OCCURRENCE", "MATE_OVERDEFINED", "MATE_INCONSISTENT", "BOOLEAN_NEED_ONE_SOLID", "BOOLEAN_INVALID", "BOOLEAN_INTERSECT_FAIL", "BOOLEAN_SAME_INPUT", "BOOLEAN_BAD_INPUT", "BOOLEAN_UNION_NO_OP", "BOOLEAN_INTERSECT_NO_OP", "BOOLEAN_SUBTRACT_NO_OP", "CPLANE_INPUT_MIDPLANE", "CPLANE_INPUT_OFFSET_PLANE", "CPLANE_INPUT_POINT_PLANE", "CPLANE_INPUT_LINE_ANGLE", "CPLANE_INPUT_POINT_LINE", "CPLANE_INPUT_THREE_POINT", "CPLANE_FAILED", "DRAFT_NO_NEUTRAL_PLANE", "DRAFT_NO_DRAFT_FACE", "DRAFT_FAILED", "EXTRUDE_INVALID_REF_FACE", "EXTRUDE_INVALID_REF_SURFACE", "EXTRUDE_FAILED", "EXTRUDE_NO_DIRECTION", "EXTRUDE_INVALID_ENTITIES", "PATTERN_INPUT_TOO_MANY_INSTANCES", "PATTERN_INPUT_TOO_FEW_INSTANCES", "PATTERN_FACE_FAILED", "PATTERN_NOT_ON_BODY", "PATTERN_BODY_FAILED", "TRANSFORM_TRANSLATE_INPUT", "TRANSFORM_TRANSLATE_BY_DISTANCE_INPUT", "TRANSFORM_FAILED", "SHELL_FAILED", "EDGEBLEND_SMOOTH", "EDGEBLEND_FAILED", "DIRECT_EDIT_WRONG_CONCENTRIC", "DIRECT_EDIT_WRONG_EQ_RADIUS", "DIRECT_EDIT_NO_FILLET_FACES", "DIRECT_EDIT_NO_OFFSET", "DIRECT_EDIT_CONSTRAIN_FACE_FAILED", "DIRECT_EDIT_REPLACE_FACE_FAILED", "DIRECT_EDIT_DELETE_FACE_FAILED", "DIRECT_EDIT_MODIFY_FILLET_FAILED", "DIRECT_EDIT_MODIFY_FACE_FAILED", "DIRECT_EDIT_MOVE_FACE_FAILED", "DIRECT_EDIT_OFFSET_FACE_FAILED", "IMPORT_PART_FAILED", "IMPORT_ASSEMBLY_FAILED", "IMPRINT_FAILED", "REVOLVE_FAILED", "REVOLVE_2ND_DIR_FAILED", "REVOLVE_NOT_PLANAR", "REVOLVE_PERPENDICULAR", "REVOLVE_INVALID_ENTITIES", "SPLIT_FAILED", "SPLIT_INVALID_INPUT", "SWEEP_INVALID_PATH", "SWEEP_FAILED", "SWEEP_PATH_FAILED", "SWEEP_PROFILE_FAILED", "WIRE_CREATION_FAILED", "SKETCH_NO_PLANE", "SKETCH_INPUT_INVALID", "SKETCH_NOT_ACTIVE", "SKETCH_SOLVER_NOT_INITIALIZED", "SKETCH_EVALUATION_FAILED", "SKETCH_MODIFICATION_FAILED", "SKETCH_UPDATE_FAILED", "SKETCH_SOLVE_FAILED", "SKETCH_ADD_CONSTRAINT_FAILED", "SKETCH_ADD_DIMENSION_FAILED", "SKETCH_POSITION_DIMENSION_FAILED", "SKETCH_CONSTRAINT_NEEDS_SKETCH_ENTITY", "SKETCH_CONSTRAINT_UNKNOWN", "SKETCH_MISSING_ENTITY", "SKETCH_FILLET_INVALID_POINT", "SKETCH_FILLET_PARALLEL", "SKETCH_FILLET_FAIL", "SKETCH_USE_FAILED", "SKETCH_USE_PARTIAL", "SKETCH_SPLINE_FAILED", "SKETCH_BAD_SPLINE", "SKETCH_DRAG_ERROR", "SKETCH_PROJ_FAILED", "SKETCH_PROJ_PARTIAL", "SKETCH_TANGENT_ARC_FAILED", "SKETCH_TANGENT_NOT_FOUND", "SKETCH_OFFSET_FAILED", "SKETCH_OFFSET_DISTANCE", "SKETCH_TRIM_FAILED", "SKETCH_INFERENCE_FAILED", "SKETCH_MODIFY_DIM_FAILED", "SKETCH_DRAG_NO_SKETCH", "SKETCH_INFER_DIM_FAILED", "SKETCH_DELETE_PTS_FAILED", "SKETCH_DELETE_FAILED", "SKETCH_ARC_FAILED", "SKETCH_LINE_FAILED", "SKETCH_CIRCLE_FAILED", "SKETCH_RECTANGLE_FAILED", "SKETCH_TANGENT_ARC_INVALID_START", "SKETCH_CONSTRUCTION_POINT_FAILED", "SYS_INTERNAL_DESERIALIZATION", "SYS_SERVER_EXCEPTION", "SYS_ERROR_REGEN", "SYS_ERROR_MESSAGING", "CANNOT_RESOLVE_ELEMENT", "NOTHING_SELECTED", "SKETCH_ANGLE_TWO_LINES", "SKETCH_DIMENSION_DIFF_ENTITIES", "SKETCH_CONSTRAINT_DIFF_ENTITIES", "SKETCH_CONSTRAINT_TWO_ENTITIES", "SKETCH_DIMENSION_TWO_ENTITIES", "SKETCH_COINCIDENT_FAILED", "SKETCH_COINCIDENT_INPUT_ERROR", "SKETCH_COINCIDENT_DIFF_POINTS", "SKETCH_CONCENTRIC_INPUT_ERROR", "SKETCH_CONCENTRIC_FAILED", "SKETCH_EQUAL_INPUT_ERROR", "SKETCH_EQUAL_NO_ENDS", "SKETCH_EQUAL_FAILED", "SKETCH_FIX_ONE_ENT", "SKETCH_FIX_FAILED", "SKETCH_DIR_INTERNAL", "SKETCH_DIR_INPUT", "SKETCH_HORIZONTAL_FAILED", "SKETCH_VERTICAL_FAILED", "SKETCH_OFFSET_CONSTRAINT_FAILED", "SKETCH_PARALLEL_CONSTRAINT_FAILED", "SKETCH_PARALLEL_INPUT_ERROR", "SKETCH_DIMENSION_INPUT_ERROR", "SKETCH_DIMENSION_DIST_ERROR", "SKETCH_DIMENSION_FAILED", "SKETCH_NORMAL_NEED_LINE", "SKETCH_NORMAL_INPUT_ERROR", "SKETCH_NORMAL_INPUT_NEEDED", "SKETCH_CANNOT_SPLIT_INTO_GROUPS", "SKETCH_OFFSET_BAD_PAIR", "SKETCH_OFFSET_INPUT_ERROR", "SKETCH_MIDPOINT_INPUT_ERROR", "SKETCH_MIDPOINT_NEED_POINT", "SKETCH_MIDPOINT_NEED_DIFF_POINT", "SKETCH_MIDPOINT_MISSING_ENDS", "SKETCH_MIDPOINT_MISSING_PTS", "SKETCH_MIDPOINT_NO_INTERNAL_LINE", "SKETCH_MIDPOINT_NO_COINCIDENT", "SKETCH_MIDPOINT_FAILED", "SKETCH_PERPENDICULAR_INPUT_ERROR", "SKETCH_PERPENDICULAR_FAILED", "SKETCH_POINT_LINE_ONLY", "SKETCH_PROJECTION_UNKNOWN", "SKETCH_PROJECTION_FAILED", "SKETCH_SIL_PROJECTION_INPUT_ERROR", "SKETCH_SIL_PROJECTION_MISSING_POINT", "SKETCH_LENGTH_DIM_INPUT_ERROR", "SKETCH_LENGTH_DIM_MISSING_ENDS", "SKETCH_LENGTH_DIM_NOT_FOUND", "SKETCH_LENGTH_DIM_FAILED", "SKETCH_RADIUS_INPUT_ERROR", "SKETCH_RADIUS_DIM_FAILED", "SKETCH_TANGENT_INPUT_ERROR", "SKETCH_TANGENT_FAILED", "PART_QUERY_FAILED", "PART_QUERY_MULTI", "MATECONNECTOR_QUERY_FAILED", "MATECONNECTOR_QUERY_ORIGIN_FAILED", "MATECONNECTOR_QUERY_AXIS_FAILED", "MATECONNECTOR_QUERY_CSYS_FAILED", "ASSEMBLY_INSERT_WILL_CAUSE_CYCLES", "SKETCH_MIRROR_NEED_VALID_MIRROR_LINE", "SKETCH_MIRROR_NEED_ENTITIES_TO_MIRROR", "SKETCH_MIRROR_CONSTRAINT_FAILED", "SKETCH_MIRROR_FAILED", "SELF_INTERSECTING_CURVE_SELECTED", "SWEEP_START_NOT_ON_PROFILE", "PATTERN_DIRECTIONS_PARALLEL", "MATE_OCCURRENCE_NOT_VALID", "MATE_WITHIN_SAME_GROUP", "EXPORT_ASSEMBLY_UNKNOWN_NODE_TYPE", "EXPORT_ASSEMBLY_CREATE_INSTANCE_FAILED", "EXPORT_PARTS_AS_XTS_NOT_A_BODY", "EXPORT_PARTS_AS_XTS_FAILED_TO_WRITE_XT", "MATECONNECTOR_OWNER_PART_NOT_RESOLVED", "WIRE_CREATION_PARTIAL_FAILURE", "SERVER_IS_IN_INVALID_STATE", "SKETCH_EXTEND_FAILED", "FOLLOW_CYCLE_ERROR", "SKETCH_FILLET_INVALID_RADIUS", "SKETCH_CONSTRAINT_COINCIDENT_TWO_ENTITIES", "SKETCH_CONSTRAINT_CONCENTRIC_TWO_ENTITIES", "SKETCH_CONSTRAINT_EQUAL_TWO_ENTITIES", "SKETCH_CONSTRAINT_MIDPOINT_TWO_ENTITIES", "EXTRUDE_NO_SELECTED_REGION", "EXTRUDE_NO_REGION_IN_SKETCH", "DELETE_SELECT_PARTS", "COPY_SELECT_PARTS", "SPLIT_NO_CHANGE", "MIRROR_NO_PLANE", "MIRROR_SELECT_PARTS", "PATTERN_CIRCULAR_NO_AXIS", "PATTERN_SELECT_FACES", "PATTERN_SELECT_PARTS", "PATTERN_LINEAR_NO_DIR", "SHELL_SELECT_FACES", "DRAFT_SELECT_NEUTRAL", "DRAFT_SELECT_FACES", "CHAMFER_SELECT_EDGES", "FILLET_SELECT_EDGES", "EXTRUDE_SURF_NO_CURVE", "EXTRUDE_SELECT_TERMINATING_BODY", "EXTRUDE_SELECT_TERMINATING_SURFACE", "DIRECT_EDIT_SELECT_ANCHOR", "REVOLVE_SURF_NO_CURVE", "REVOLVE_SELECT_FACES", "REVOLVE_SELECT_AXIS", "SWEEP_SELECT_PROFILE", "SWEEP_SELECT_PATH", "DIRECT_EDIT_DELETE_SELECT_FACES", "DIRECT_EDIT_MODIFY_FILLET_SELECT", "DIRECT_EDIT_MODIFY_FACE_SELECT", "DIRECT_EDIT_REPLACE_FACE_SELECT", "DIRECT_EDIT_OFFSET_FACE_SELECT", "DIRECT_EDIT_MOVE_FACE_SELECT", "SELECT_MATECONNECTOR", "OVERDEFINED_ASSEMBLY", "PART_STUDIO_UPGRADE_SUCCESSFUL", "PART_STUDIO_UPGRADE_FAILED", "PART_STUDIO_UPGRADE_NONE", "MATE_GROUP_OCCURRENCES_UNRESOLVED", "SWEEP_SURF_NO_CURVE_PROFILE", "MATE_RESET_HAD_NO_EFFECT", "MATECONNECTOR_MULTIPLE_OCCURRENCES", "MATECONNECTOR_OCCURRENCE_NOT_RESOLVED", "ELEMENT_REFERENCE_CYCLE_DETECTED", "MATE_OVERDEFINES_ASSEMBLY", "MATE_CANNOT_RESOLVE_CONNECTORS", "SKETCH_EXCEEDS_BOUNDS", "SWEEP_SELF_INT", "SKETCH_UNSOLVABLE_CONSTRAINT", "RESTRUCTURE_INVALID_SOURCE_OR_TARGET", "CPLANE_INPUT_CURVE_POINT", "TRANSFORM_OCCURRENCES_HAD_NO_EFFECT", "HELIX_FAILED", "HELIX_INPUT_CONE", "RENDERER_NOT_AVAILABLE", "RENDERER_FAILED_TO_RENDER", "EXPRESSION_FAILED_VALIDATION", "VERSION_MISMATCH_ERROR", "EXTRUDE_UPTO_NEXT_NO_DIVISION", "MATE_BETWEEN_FIXED_OCCURRENCES", "THICKEN_SELECT_ENTITIES", "THICKEN_FAILED", "WORKSPACE_UPGRADE_SUCCESSFUL", "WORKSPACE_UPGRADE_FAILED", "WORKSPACE_UPGRADE_NONE", "SKETCH_CIRCULAR_PATTERN_FAILED", "DIRECT_EDIT_ALL_FILLET_FACES_SELECTED", "DIRECT_EDIT_FAILED_TO_IDENTIFY_FILLETS", "PARASOLID_IMPORT_FAILED", "FOLLOW_LEADER_HAS_NO_FUNCTIONALITY_ERROR", "MIRROR_SELECT_FACES", "RELATION_INVALID_RELATION", "RELATION_INVALID_MATE", "GEAR_RELATION_INVALID_MATE_TYPES", "SCREW_RELATION_INVALID_MATE_TYPES", "RACK_RELATION_INVALID_MATE_TYPES", "ROLLING_RELATION_INVALID_MATE_TYPES", "LINEAR_RELATION_INVALID_MATE_TYPES", "RELATION_OVERDEFINED", "RELATION_INCONSISTENT", "RELATION_SAME_OCCURRENCES", "SKETCH_SPLIT_FAILED", "SKETCH_CONSTRAINT_PIERCE_TWO_ENTITIES", "SKETCH_PIERCE_FAILED", "MIRROR_FACE_FAILED", "MIRROR_BODY_FAILED", "SKETCH_CANNOT_PIERCE_WITH_PLANE", "WITH_SUPPORT_CODE", "FILLET_FAIL_SMOOTH", "FILLET_FAILED", "CHAMFER_FAIL_SMOOTH", "CHAMFER_FAILED", "BOOLEAN_OFFSET_NO_FACES", "MATE_OCCURRENCE_SUPPRESSED", "MATECONNECTOR_OCCURRENCE_SUPPRESSED", "SKETCH_SPLINE_NEW_POINTS_TOO_CLOSE", "SKETCH_SPLINE_CANNOT_DELETE_ENDPOINTS", "SKETCH_SPLINE_POINT_TO_DELETE_NOT_FOUND", "ASSEMBLY_INSERT_FAILED", "SKETCH_PATTERN_UNKNOWN_FAILURE", "SKETCH_PATTERN_TOO_LARGE", "SKETCH_LINEAR_PATTERN_ZERO_LENGTH", "SKETCH_LINEAR_PATTERN_PARALLEL_DIRECTIONS", "SKETCH_CIRCULAR_PATTERN_ZERO_ANGLE", "SKETCH_ELLIPSE_FAILED", "SKETCH_ELLIPSE_FAILED_TOO_SMALL", "DELETE_PARTS_FAILED", "DELETE_PARTS_PARTIAL", "SKETCH_ELLIPSE_RADIUS_INPUT_ERROR", "QUADRANT_CONSTRAINT_INPUT", "SKETCH_QUADRANT_FAILED", "SKETCH_SPLINE_TOO_FEW_POINTS", "SKETCH_SPLINE_NOT_INTERPOLATED_SPLINE", "SKETCH_SPLINE_POINTS_NOT_DELETED", "SKETCH_TEXT_RECTANGLE_FAILED", "IMPORT_DERIVED_NO_PARTS", "LOFT_SELECT_PROFILES", "LOFT_PROFILE_SINGLE_FACE", "LOFT_PROFILE_SOLID", "LOFT_PROFILE_POINT", "LOFT_PROFILE_FAILED", "LOFT_SELECT_GUIDES", "LOFT_GUIDE_FAILED", "LOFT_PERIODIC_ERROR", "LOFT_GUIDE_POINT_INTERSECTION", "LOFT_GUIDE_PROFILE_INTERSECTION", "LOFT_VERTEX_MATCHING", "LOFT_DIRECTION_ERROR", "LOFT_PROFILE_ALIGNMENT", "LOFT_GUIDE_ALIGNMENT", "LOFT_VERTEX_ADDITIONS", "LOFT_FAILED", "LOFT_INVALID", "LOFT_ALIGNMENT_INFO", "LOFT_VERTEX_NOT_ON_PROFILE", "LOFT_PROFILE_NO_INNER_LOOPS", "LOFT_TWO_PROFILES", "CANNOT_OFFSET_ELLIPSE", "SKETCH_MIRROR_NEEDS_LINE_AND_TWO_OTHERS", "SKETCH_POLYGON_BAD_SIDE_COUNT", "SKETCH_DIRECTIONAL_GROUP_INPUT", "NAMED_VIEWS_DUPLICATE_NAME", "SILHOUETTE_USE_FAILED", "PASTE_SKETCH_METRICS_FAILURE", "PASTE_SKETCH_LIBRARY_MISMATCH", "PASTE_SKETCH_CLIPBOARD_EMPTY", "SKETCH_MIRROR_OFFSET_SPLINE", "SKETCH_MIRROR_CURVE_POINT", "LOFT_PERIODIC_GUIDE_ERROR", "SHELL_SELECT_PARTS", "RELATION_MATE_DOES_NOT_EXIST", "RELATION_MATE_IS_SUPPRESSED", "VARIABLE_NAME_INVALID", "LOFT_GUIDE_INFO", "HOLE_NO_POINTS", "HOLE_FAIL_BBOX", "HOLE_EMPTY_SCOPE", "HOLE_NO_HITS", "WITH_EXTRA_DATA", "HOLE_DISJOINT", "SKETCH_INSERT_DWG_CONVERSION_FAILURE", "HOLE_CBORE_TOO_SMALL", "HOLE_CBORE_TOO_DEEP", "HOLE_CSINK_TOO_SMALL", "HOLE_CSINK_TOO_DEEP", "SWEEP_PATH_NO_CONSTRUCTION", "SKETCH_IMAGE_RECTANGLE_FAILED", "ASSEMBLY_REPLICATE_NO_VALID_TARGET", "ASSEMBLY_REPLICATE_NO_MATCHING_TARGET", "LOFT_SHAPE_CONTROL_FAILED", "LOFT_START_CONDITIONS_FAILED", "LOFT_END_CONDITIONS_FAILED", "LOFT_NO_FACE_FOR_START_CLAMP", "LOFT_NO_FACE_FOR_END_CLAMP", "LOFT_NO_PLANE_FOR_START_CLAMP", "LOFT_NO_PLANE_FOR_END_CLAMP", "LOFT_NO_CLAMPS_ON_POINT_PROFILE", "EXPORT_NOT_IMPLEMENTED", "SKETCH_POLYGON_ZERO_RADIUS_FAIL", "DRAWING_FAILED_TO_RESOLVE_VIEW_REFERENCE", "DRAWING_PARTSTUDIO_EMPTY_AFTER_SECTION_CUT", "DRAWING_ASSEMBLY_DOES_NOT_CONTAIN_VISIBLE_INSTANCES", "DRAWING_ASSEMBLY_EMPTY_AFTER_SECTION_CUT", "DRAWING_VIEW_GENERATION_FAILED", "SKETCH_SLOT_FAILURE", "SKETCH_SLOT_PARTIAL_FAILURE", "NO_UNIT", "RESTRUCTURE_INVALID_SOURCE", "RESTRUCTURE_INVALID_TARGET", "MATE_MIN_MAX_LIMIT_VIOLATION", "REST_ASSEMBLY_GET_DOCUMENT_FAILED", "REST_ASSEMBLY_UNKNOWN_INSERTABLE_TYPE", "REST_ASSEMBLY_SETUP_EXCEPTION", "REST_ASSEMBLY_BEGIN_OPERATION_FAILED", "REST_ASSEMBLY_INSERT_INSTANCE_FAILED", "REST_ASSEMBLY_COMMIT_OPERATION_FAILED", "REST_ASSEMBLY_CLOSE_CLIENT_FAILED", "REST_ASSEMBLY_NULL_OCCURRENCES", "REST_ASSEMBLY_EMPTY_OCCURRENCE", "REST_ASSEMBLY_TRANSFORM_WRONG_SIZE", "ASSEMBLY_EMPTY_OCCURRENCE_LIST", "ASSEMBLY_NULL_TRANSFORM", "ASSEMBLY_TRANSFORM_NOT_RIGID", "ASSEMBLY_CANNOT_TRANSFORM_FIXED_OCCURRENCE", "ASSEMBLY_TRANSFORM_FAILED", "ASSEMBLY_OCCURRENCE_NOT_FOUND", "ASSEMBLY_REPLICATE_MULTIPLE_VALID_TARGET", "ASSEMBLY_REPLICATE_NO_TARGET_SELECTED", "CPLANE_INPUT_LINE_ANGLE2", "CPLANE_DEGENERATE_SELECTION", "CPLANE_SELECT_LINE_ANGLE_REFERENCE", "ASSEMBLY_REPLICATE_INVALID_SEED_INSTANCE", "CANNOT_USE_VARIABLES_IN_SKETCH_PATTERNS", "SKETCH_MIRROR_OFFSET_ELLIPSE", "EXTERNAL_REFERENCE_FAILED_TO_CREATE", "SPLIT_FACE_NO_CHANGE", "SKETCH_INTERSECTION_FAILED", "SKETCH_INTERSECTION_MULTIPLE_FAILED", "SKETCH_INTERSECTION_PARTIAL_FAILED", "FEATURE_ID_IN_PATH_DOES_NOT_MATCH_BODY", "FEATURE_NOT_FOUND", "FEATURE_DOES_NOT_MATCH", "FEATURE_HAS_INVALID_TYPE", "FEATURE_DOES_NOT_MATCH_ITS_FEATURE_SPEC", "FEATURE_BAD_SERIALIZATION_VERSION", "FEATURE_WRONG_SERIALIZATION_VERSION", "FEATURE_INVALID_ROLLBACK_INDEX", "FEATURE_ERROR_IN_INPUT", "FEATURE_CONCURRENCY_ERROR", "FEATURE_CHANGE_BREAKS_MODEL", "FEATURE_NODE_IDS_INVALID", "ROLLBACK_INDEX_INVALID", "FEATURE_NO_SOLIDS", "SKETCH_EXTERNAL_GEOMETRY_MISMATCH", "HOLE_EXCEEDS_MAX_LOCATIONS", "SKETCH_TEXT_IS_EMPTY", "SKETCH_INSERT_DWG_MAX_ENTITIES_EXCEEDED", "HOLE_TAP_DIA_TOO_LARGE", "ASSEMBLY_EMPTY_BODY", "SIMPLIFY_BODY_FAILED", "INVALID_VIEW_NAME", "PATTERN_SELECT_FEATURES", "MIRROR_SELECT_FEATURES", "PATTERN_FEATURE_FAILED", "SKETCH_TRANSFORM_FAILED", "TANGENT_MATE_TWO_ENTITIES_NEEDED", "HOLE_CANNOT_DETERMINE_LAST_BODY", "RESTRUCTURE_CANNOT_MODIFY_SAVED_VERSION", "REST_ASSEMBLY_EXTERNAL_REFERENCE_REQUIRES_VERSION", "REST_ASSEMBLY_EXTERNAL_REFERENCE_DISALLOWS_MICROVERSION", "REST_ASSEMBLY_VERSION_SUPPORTED_ONLY_FOR_EXTERNAL_REFERENCES", "SWEEP_BAD_LOCK_FACES", "SKETCH_TEXT_CANNOT_BE_CONSTRUCTION", "CUSTOM_ERROR", "BEND_BAD_CONFIGURATION", "BEND_WRONG_NUMBER_OF_ENTITIES", "BEND_BAD_CURVES", "BEND_GENERAL_ERROR", "BEND_EDGE_NO_EDGES", "BEND_EDGE_NO_SEED_ENTITY", "EXTEND_SHEET_BODY_NO_BODY", "EXTRACT_SURFACE_NO_FACES", "FLATTEN_NO_EDGES", "FLATTEN_NO_FACES", "FOLD_NO_BODIES", "BEND_PREP_NO_FACES", "BEND_PREP_NO_BODIES", "BEND_PREP_ERROR_FINDING_EDGE_LOCATIONS", "BEND_PREP_ERROR_IMPRINTING_EDGES", "ASSEMBLY_ANIMATE_MATE_START_AFTER_END", "ASSEMBLY_ANIMATE_NO_MATE", "ASSEMBLY_ANIMATE_MATE_SUPPRESSED", "TANGENT_MATE_GEOMETRY_NOT_SUPPORTED", "SKETCH_DIMENSION_INFINITY", "BOLEAN_INPUTS_NOT_SOLID", "FACE_IS_NOT_RECTANGLE", "HOLE_DESTROY_SOLID", "HELIX_INPUT_CIRCLE", "IMPORT_SCALING_NON_MESH_DATA", "EVALUATE_FACE_TANGENT_FOR_MESHES", "CANNOT_COMPUTE_CENTROID", "CANNOT_EVALUATE_DIMENSION", "CANNOT_IMPORT_MESH", "SKETCH_ELLIPSE_ZERO_AXIS", "TRANSFORM_SCALE_UNIFORMLY", "TRANSFORM_MATE_CONNECTORS", "ASSEMBLY_WRONG_ELEMENT_TYPE", "ASSEMBLY_ELEMENT_NOT_FOUND", "SHEET_METAL_TABLE_UNKNOWN_ERROR", "SHEET_METAL_TABLE_REGEN_ERROR", "SHEET_METAL_TABLE_READ_ONLY", "ASSEMBLY_PATTERN_INVALID_TYPE", "ASSEMBLY_PATTERN_DIRECTION_ERROR", "ASSEMBLY_PATTERN_NONPOSITIVE_LINEAR_DISTANCE", "ASSEMBLY_PATTERN_NONPOSITIVE_ANGLE", "ASSEMBLY_PATTERN_INVALID_SEED", "ASSEMBLY_PATTERN_INVALID_REFERENCE_MATE_CONNECTOR", "RESTORE_FEATURE_FAILED", "FACES_NOT_OWNED_BY_PARTS", "EDGES_NOT_OWNED_BY_PARTS", "SHEET_METAL_REBUILD_ERROR", "SHEET_METAL_INPUT_BODY_SHOULD_NOT_BE_SHEET_METAL", "SHEET_METAL_CANNOT_RECOGNIZE_PARTS", "SHEET_METAL_CANNOT_THICKEN", "SHEET_METAL_CONVERT_PLANE", "ASSEMBLY_PATTERN_AXIS_ERROR", "RIB_NO_PROFILES", "RIB_NO_PARTS", "RIB_PROFILE_FAILED", "RIB_BODY_FAILED", "RIB_NO_INTERSECTIONS", "RIB_MERGE_FAILED", "ASSEMBLY_NAMED_POSITIONS_SAVE_FAILED", "ASSEMBLY_NAMED_POSITIONS_LOAD_FAILED", "ASSEMBLY_NAMED_POSITIONS_NO_MATES_TO_SAVE", "ASSEMBLY_NAMED_POSITIONS_POSITION_NOT_FOUND", "SPHERE_FAILED", "ASSEMBLY_PATTERN_NOT_SUPPORTED", "ASSEMBLY_NAMED_POSITIONS_PARTIAL_LOAD_FAILURE", "ASSEMBLY_NAMED_POSITIONS_LOAD_SUCCEEDED_WITH_EXTRA_MATES", "ASSEMBLY_NAMED_POSITIONS_SAVED_MATE_NOT_FOUND_ON_LOAD", "SHEET_METAL_SINGLE_MODEL_NEEDED", "SHEET_METAL_ACTIVE_JOIN_NEEDED", "INSTANCE_QUERY_FAILED", "SHEET_METAL_ACTIVE_EDGE_NEEDED", "SHEET_METAL_FLANGE_NO_EDGES", "MESH_NOT_SUPPORTED", "SHEET_METAL_PARTS_PROHIBITED", "VARIABLE_CANNOT_EVALUATE", "DRAWING_ASSEMBLY_INVALID_SECTION_CUT", "DRAWING_PARTSTUDIO_INVALID_SECTION_CUT", "SHEET_METAL_COULD_NOT_UNFOLD", "PARAMETER_OUT_OF_RANGE", "SHEET_METAL_NO_0_ANGLE_BEND", "SHEET_METAL_FLAT_RIP_NO_EDIT", "SHEET_METAL_CANT_CHANGE_TO_FLAT", "PARAMETER_PRECONDITION_FAILED", "PARAMETER_SYNTAX_ERROR", "SHEET_METAL_CAN_ONLY_REMOVE", "SHEET_METAL_CAN_ONLY_SUBTRACT", "REST_ASSEMBLY_INVALID_FEATURE", "REST_ASSEMBLY_INVALID_BODY_TYPE", "PARTING_OUT_TARGET_READONLY", "SHEET_METAL_MULTI_SM_DEFAULT_RADIUS", "SHEET_METAL_FLANGE_FAIL_ALIGNMENT", "SHEET_METAL_FLANGE_FAIL_UP_TO", "SHEET_METAL_FLANGE_FAIL_UP_TO_ENTITY", "SHEET_METAL_FLANGE_FAIL", "SHEET_METAL_FLANGE_FAIL_LIMIT_OPP_FLANGE", "CANT_SPLIT_SHEET_METAL_BEND_FACE", "IN_CONTEXT_INSTANCE_INVALID_TARGET", "SHEET_METAL_SELF_INTERSECTING_MODEL", "SHEET_METAL_SELF_INTERSECTING_FLAT", "SHEET_METAL_NON_90_BUTT", "SHEET_METAL_RIP_STYLE_ERROR", "CANNOT_USE_MATECONNECTORS_IN_PATTERN", "CANNOT_COPY_MATECONNECTORS", "SHEET_METAL_CAN_ONLY_OFFSET", "MODIFIABLE_ENTITY_ONLY", "IN_CONTEXT_UPDATE_DELETED_ASSEMBLY", "IN_CONTEXT_UPDATE_EMPTY_INSTANCE", "IN_CONTEXT_UPDATE_INVALID_SOURCE", "IN_CONTEXT_UPDATE_INVALID_TARGET", "SHEET_METAL_NO_FEATURE_PATTERN", "CUSTOM_FEATURE_DEFINITION_NOT_FOUND", "SHEET_METAL_START_SELECT_BENDS", "SHEET_METAL_END_DONE", "PATH_EDGES_NOT_CONTINUOUS", "SHEET_METAL_RIP_FAIL_INTERNAL_EDGE", "SHEET_METAL_RIP_FAIL", "SHEET_METAL_RIP_MULTI_BODY", "SHEET_METAL_RIP_FAIL_NON_PLANAR", "PATTERN_CURVE_NO_EDGES", "SHEET_METAL_RIP_NO_CORNER", "SHEET_METAL_RIP_EVEN", "SHEET_METAL_RIP_WALL_NOT_FOUND", "SHEET_METAL_RIP_SAME_VERTEX", "SHEET_METAL_RIP_NEED_MORE_VERTICES", "SHEET_METAL_MAKE_JOINT_FAIL", "CURVE_PATTERN_START_OFF_PATH", "PART_LOAD_FAILED", "SHEET_METAL_MOVE_NOT_PLANAR", "SHEET_METAL_JOINT_FAIL_ADJACENT_FACES", "WRONG_PARASOLID_VERSION", "SHEET_METAL_SINGLE_MODEL_NEEDED_EDGES", "REST_ASSEMBLY_MISSING_INSTANCE_DOCUMENT_ID", "REST_ASSEMBLY_MISSING_INSTANCE_ELEMENT_ID", "FACE_CLASH", "CURVE_PATTERN_START_OFF_CLOSED_PATH", "SHEET_METAL_CUT_JOINT", "EXPORT_STL_NO_PARTS", "INPUT_NAME_TOO_LONG", "IMPORT_BODY_FAILED_CHECK", "DERIVED_BODIES_HAVE_FAULTS", "SHEET_METAL_BLOCKED_PATTERN", "SHEET_METAL_FLANGE_INTERNAL", "SHEET_METAL_TOO_THICK", "SHEET_METAL_BEND_END_NOT_A_CORNER", "SHEET_METAL_NOT_A_CLOSED_CORNER", "SHEET_METAL_CORNER_NOT_A_BEND_END", "RIB_ONLY_OPEN_PROFILES", "TAB_NO_LONGER_EXISTS", "CLINE_FAILED", "ILLEGAL_MODIFICATION", "ASSEMBLY_MATE_VALUE_SET_FAILED", "EXTRUDE_OFFSET_TOO_DEEP", "SHEET_METAL_CANNOT_MOVE_BEND_EDGE", "UP_TO_FACE_NOT_PARALLEL", "TRANSLATION_FACE_NOT_PLANAR", "MOVE_FACE_NO_INTERSECTION", "SWEEP_PATH_PROFILE_NO_INTERSECTION", "DIRECT_EDIT_MOVE_FACE_CREATE_SELECT", "SHEET_METAL_THICKEN_IN_CONTEXT_INFO", "CANNOT_DELETE_RHO_DIMENSION", "INVALID_RHO", "SKETCH_RHO_DIM_NOT_FOUND", "SKETCH_CONIC_FAILED", "TAB_NAME_TOO_LONG", "DIRECT_EDIT_DELETE_FACE_ALL_FACES", "SHEET_METAL_CORNER_BREAK_FAILED", "BOOLEAN_NO_TARGET_SURFACE", "BAD_BSPLINECURVE_DEFINITION", "REQUIRE_3D_BSPLINECURVE_DATA", "PERIODIC_BSPLINECURVE_NOT_CLOSED", "PERIODIC_BSPLINECURVE_NOT_SMOOTH", "RATIONAL_BSPLINECURVE_WEIGHT_NEGATIVE", "BSPLINECURVE_NOT_G1", "BRIDGING_CURVE_VERTEX_BOTH_SIDES", "BRIDGING_CURVE_ONE_EDGE_EACH_SIDE", "BRIDGING_CURVE_VERTEX_AT_END_OF_EDGE", "PROJECT_CURVES_PARALLEL_PLANES", "PROJECT_CURVES_DIFFERENT_SKETCHES", "SHEET_METAL_SELECT_PART", "VARIABLE_NOT_FOUND", "CANNOT_EDIT_FIXED_CONIC", "EXTRACT_WIRES_OVERLAPPING_EDGES", "EXTRACT_WIRES_NON_MANIFOLD", "EXTRACT_WIRES_NEEDS_EDGES", "SPLINE_TWO_POINTS", "CLOSED_SPLINE_THREE_POINTS", "TANGENCY_ONE_EDGE", "FIT_SPLINE_CANNOT_EVALUATE_END_CONDITION", "FIT_SPLINE_REPEATED_POINT", "FEATURE_ID_REQUIRED", "PARAMETER_NOT_FOUND", "PARAMETER_DOES_NOT_MATCH_ITS_FEATURE_SPEC", "SHEET_METAL_CORNER_BREAK_DISABLED", "SHEET_METAL_FILLET_NO_CONIC", "SHEET_METAL_CHAMFER_NO_TWO_OFFSETS", "SHEET_METAL_CHAMFER_NO_OFFSET_ANGLE", "SHEET_METAL_CHAMFER_MUST_BE_EQUAL_OFFSETS", "SHEET_METAL_ACTIVE_ENTITY_NEEDED", "SHEET_METAL_CORNER_BREAK_NOT_A_CORNER", "SHEET_METAL_CORNER_BREAK_NO_WALL", "SHEET_METAL_CORNER_BREAK_VERTEX_NOT_FREE", "SHEET_METAL_CORNER_BREAK_ATTRIBUTE_EXISTS", "FIT_SPLINE_ZERO_START_MAGNITUDE", "FIT_SPLINE_ZERO_END_MAGNITUDE", "SHEET_METAL_CORNER_BREAK_SELECT_ENTITIES", "EXTRUDE_SELECT_TERMINATING_VERTEX", "FILL_SURFACE_NO_EDGES", "FILL_SURFACE_DOUBLE_SELECTION", "FILL_SURFACE_MULTI_LOOP", "FILL_SURFACE_OPEN_LOOP", "FILL_SURFACE_FAIL", "FILL_SURFACE_ATTACH_FAIL", "FILL_SURFACE_G2_FAIL", "FILL_SURFACE_VERTEX_INTERPOLATION_FAIL", "LOFT_SPINE_DISJOINT_PATH", "LOFT_SPINE_SELF_INTERSECTING_PATH", "LOFT_SPINE_PATH_PROFILE_NO_INTERSECTION", "LOFT_SPINE_FAILED_XSECTIONS", "LOFT_SPINE_GUIDE_WITH_POINT_PROFILE", "LOFT_SPINE_PROFILES_NOT_IN_ORDER", "LOFT_SELECT_SPINE", "DOCUMENT_NOT_FOUND", "ELEMENT_NOT_FOUND", "ENCLOSE_NO_REGION", "ENCLOSE_CANNOT_MERGE_REGIONS", "ENCLOSE_CANNOT_CREATE_SOLID", "ENCLOSE_NOTHING_SELECTED", "ENCLOSE_UNKNOWN_ERROR", "ACCESS_NOT_ALLOWED", "LOFT_SPINE_TOO_MANY_GUIDES", "FEATURE_INVALID_NAMESPACE", "FEATURE_NULL_NOT_ALLOWED", "SKETCH_DIMENSION_LIMIT_ERROR", "FILL_SURFACE_WIRE_CONTINUITY_MISMATCH", "FILL_SURFACE_INTERNAL_CONTINUITY_MISMATCH", "LOFT_START_OR_END_CONDITIONS_FAILED", "LOFT_START_OR_END_CONDITIONS_MAGNITUDE_NO_EFFECT", "FOLLOW_LEADER_IS_IN_UNFOLLOWABLE_TAB", "LOFT_START_OR_END_CONDITIONS_WITH_GUIDES_FAILED", "REST_ASSEMBLY_MISSING_TRANSFORM_GROUPS", "REST_ASSEMBLY_NULL_TRANSFORM_GROUP", "REST_ASSEMBLY_NULL_TRANSFORM_GROUP_INSTANCES", "REST_ASSEMBLY_NULL_TRANSFORM_GROUP_INSTANCE", "LOFT_NO_FACE_FOR_GUIDE_CLAMP", "LOFT_NO_CONTINUITY_CONDITION_AT_INTERNAL_GUIDE", "SKETCH_CONSTRAINT_NOT_FOUND", "SKETCH_CONSTRAINT_PARAMETER_NOT_FOUND", "SKETCH_ENTITY_NOT_FOUND", "SKETCH_ENTITY_PARAMETER_NOT_FOUND", "FEATURE_PARAMETER_TYPE_MISMATCH", "FEATURE_CONFIGURED_PARAMETER_NO_VALUES", "FEATURE_CONFIGURED_PARAMETER_INCONSISTENT_TYPES", "SHEET_METAL_FLANGE_FAIL_AUTO_MITER", "SHEET_METAL_FLANGE_FAIL_PARALLEL_EDGE", "SHEET_METAL_FLANGE_FAIL_PARALLEL_PLANE", "SHEET_METAL_FLANGE_FAIL_PARALLEL_DIRECTION", "SHEET_METAL_FLANGE_FAIL_NO_BEND", "SHEET_METAL_FLANGE_NO_PARALLEL_ENTITY", "SHEET_METAL_FLANGE_NO_DIRECTION_ENTITY", "SHEET_METAL_TAB_NO_BEND", "BOOLEAN_NO_SURFACE_IN_MERGE_SCOPE", "BOOLEAN_NO_SHARED_EDGE_WITH_SURFACE_IN_MERGE_SCOPE", "SHEET_METAL_BEND_RELIEF_NO_CORNER", "SHEET_METAL_CORNER_SELECT_ENTITIES", "SHEET_METAL_BEND_RELIEF_SELECT_ENTITIES", "VRFILLET_RADIUS_REQUIRED_AT_VERTEX", "VRFILLET_RHO_REQUIRED_AT_VERTEX", "VRFILLET_MAG_REQUIRED_AT_VERTEX", "VRFILLET_SELECT_VERTICES", "VRFILLET_VERTEX_NOT_ON_CHAIN", "VRFILLET_INVALID_CHAIN", "SHEET_METAL_TAB_NO_MERGE", "SHEET_METAL_TAB_NONPLANAR", "SHEET_METAL_TAB_NO_WALL", "SHEET_METAL_TAB_NO_TAB", "VRFILLET_NO_EFFECT", "VRFILLET_MULTI_SELECTION", "SHEET_METAL_TAB_NO_PARALLEL_WALL", "SHEET_METAL_CORNER_UNDER_SIZED", "FILLET_PARTIAL_FAIL", "VRFILLET_INTERNAL_ZERO", "SHEET_METAL_TAB_NO_EFFECT", "SHEET_METAL_TAB_LOW_CLEARANCE", "SHEET_METAL_TAB_FAILS_MERGE", "SHEET_METAL_TAB_COLLISION", "REPLACE_FACE_FACE_COUNT_CHANGED", "FACE_OVERLAP", "FACE_REMOVED", "INTERSECTING_EDGES", "CANNOT_SPLIT_FACE", "FILL_SURFACE_BAD_SUPPORT", "FILL_SURFACE_SUPPORT_NOT_ON_BOUNDARY", "FILL_SURFACE_SUPPORT_NOT_SMOOTH", "FILL_CURVE_OR_POINT_CONSTRAINTS", "SHEET_METAL_ADD_WRONG_MODEL", "SHEET_METAL_PATTERN_DISABLED_BOOLEANS", "DRAWING_ALL_INSTANCES_HIDDEN", "FILL_SUPPORT_NOT_SMOOTH_INTERNAL", "SKETCH_CONSTRAINT_WRONG_SHEET_METAL_BODY", "SKETCH_CONSTRAINT_FLAT_IN_3D", "SKETCH_CONSTRAINT_3D_IN_FLAT", "FIT_SPLINE_CURVATURE_FACE", "FIT_SPLINE_CANNOT_EVALUATE_CURVATURE_END_CONDITION", "FIT_SPLINE_NEED_DIRECTION_FOR_CURVATURE", "CONFIGURATION_HAS_BAD_PARAMETERS", "CONFIGURATION_HAS_BAD_CURRENT_CONFIGURATION", "FEATURE_CONFIGURED_PARAMETER_VALUES_HAVE_IDS", "WORKSPACE_NO_LONGER_EXISTS", "CONTENT_STACKING_INVALID_MODE", "CONTENT_STACKING_INVALID_COMPONENTS", "CONTENT_STACKING_INVALID_TOP_STACK", "SHEET_METAL_FACE_PATTERN_NO_JOINT", "SHEET_METAL_FACE_PATTERN_FLOATING_CUT", "SHEET_METAL_FACE_PATTERN_FLOATING_WALL", "SM_FLAT_OP_NO_INTERSECT", "SM_FLAT_OP_PARTIAL_INTERSECT", "SM_FLAT_OP_ADD_CROSSES_EDGE", "SM_FLAT_OP_NON_PLANAR_TOOL", "SM_FLAT_OP_NON_PLANAR_TARGET", "SM_FLAT_OPERATION_FAILED", "SM_FLAT_OP_LEGACY_MODEL", "SHEET_METAL_FLANGE_NON_LINEAR_EDGES", "SHEET_METAL_CYLINDER_BEND", "SHEET_METAL_INVALID_FACE", "SHEET_METAL_ROLLED_CORNER_RELIF", "SHEET_METAL_RELIEF_FAILURES", "EDGE_CHANGE_FAILED", "BOOLEAN_INPUTS_NOT_SOLID", "TRANSFORM_SCALE_SELECTION", "SHEET_METAL_SUBTRACT_DESTROYS_SHEET", "SPLIT_KEEP_TOOLS_WITH_FACE", "SPLIT_TRIM_WITH_SINGLE_FACE", "SHEET_METAL_SKETCH_DETACHED_FACE", "HOLE_CUT_FAIL", "SHEET_METAL_FLAT_OP_ROLL_FAIL", "PATTERN_EDGE_FAILED", "SHEET_METAL_FACE_PATTERN_NO_VERTEX", "SHEET_METAL_FACE_PATTERN_PARTIAL_FLOATING_WALL", "EXTRUDE_3D_AND_FLAT", "PATTERN_SWITCH_TO_PER_INSTANCE", "PATTERN_NO_GEOM_FROM_FEATURES", "RM_NO_LINK_PERMISSION_TO_REVISION", "DRAFT_SELECT_PARTING_EDGES", "DRAFT_CONFLICTING_OPPOSITION", "SPLIT_SELECT_TARGETS", "SPLIT_SELECT_TOOL", "SPLIT_SELECT_FACE_TARGETS", "SPLIT_SELECT_FACE_TOOLS", "ASSEMBLY_PATTERN_EXCEED_MAX_INSTANCE_COUNT", "ASSEMBLY_PATTERN_RECURSIVE_SEED", "NO_LINK_PERMISSION_TO_THIS_DOCUMENT", "SM_FLAT_OP_FACES_NOT_COPLANAR", "FLATTENED_SHEET_METAL_SKETCH_PROHIBTED", "DRAFT_SELECT_PULL_DIRECTION_ENTITY", "DRAFT_PARALLEL_PARTING_EDGE", "FLATTENED_SHEET_METAL_SKETCH_ONE_FACE", "SKETCH_OFFSET_CHAIN_FAIL", "SKETCH_OFFSET_BASE_CURVE_CONSUMED", "SKETCH_OFFSET_SPLINE_SPLIT", "SKETCH_OFFSET_ELLIPSE_SPLIT", "CANNOT_FIND_FLATTENED_BODY", "SHEET_METAL_ACTIVE_MODEL_REQUIRED", "SKETCH_REFERENCE_WRONG_FLAT_PART", "SKETCH_CANNOT_REFERENCE_3D", "SM_FLAT_OP_CANNOT_JOIN_DIFFERENT_TRANSFORMS", "DEFINED_IN_3D_CANT_REFERENCE_SM_FLAT", "DEFINED_IN_SM_FLAT_CANT_REFERENCE_3D", "CANNOT_CHANGE_REFERENCE_TO_DELETED_DOCUMENT", "COPIED_SKETCH_NOT_FOUND", "VARIABLE_NAME_TOO_LONG", "NO_INSTANCE_TO_REPLACE", "ASSEMBLY_REPLACE_NO_REPLACER", "CANNOT_REPLACE_IN_SUBASSEMBLIES", "FILL_SURFACE_G1_FAIL", "ALL_CONFIGURATION_PARAMETERS_NOT_SPECIFIED", "ASSEMBLY_REPLACE_INVALID_SEED_INSTANCE", "ASSEMBLY_REPLACE_INVALID_SEED_TYPE", "ASSEMBLY_REPLACE_SUPPRESSED_FORBIDDEN", "DISPLAY_STATES_INVALID_NAME", "DISPLAY_STATES_DUPLICATE_NAME", "WORKSPACE_UPGRADE_NONE_ENABLE_CAPABILITY", "DISPLAY_STATES_UPDATE_HAD_NO_EFFECT", "DISPLAY_STATES_APPLY_HAD_NO_EFFECT", "DISPLAY_STATES_DOES_NOT_EXIST", "LOFT_SPINE_NONTANGENT_PATH", "LOFT_SPINE_APPROXIMATED", "REST_ASSEMBLY_REVISION_PART_NUMBER_BLANK", "REST_ASSEMBLY_REVISION_NOT_FOUND", "ROLL_FAILED", "ROLL_CANNOT_ADJUST", "ROLL_MISMATCHED_SOURCE", "INVALID_ROLL_SURFACE", "ROLL_NOT_TO_OR_FROM_PLANE", "FAILED_TO_FIND_ELEMENT_FOR_TO_STATE", "FAILED_TO_FIND_VERSION_FOR_TO_STATE", "MISSING_REVISION_ID_FOR_TO_STATE", "MISSING_VERSION_ID_FOR_TO_STATE", "INVALID_DOCUMENT_ID_FOR_TO_STATE", "ASSEMBLY_CONTAINS_MISSING_PART_DATA", "SHEET_METAL_HEM_NO_EDGES", "SHEET_METAL_HEM_NON_LINEAR_EDGES", "SHEET_METAL_HEM_FAIL_ALIGNMENT", "SHEET_METAL_HEM_TOO_SHORT", "SHEET_METAL_HEM_TEAR_DROP_GAP_TOO_LARGE", "SHEET_METAL_HEM_INTERNAL", "SHEET_METAL_HEM_FAILED", "INVALID_CONFIGURATION_SPECIFIED", "EDGEBLEND_PARTIAL", "CHAMFER_PARTIAL_FAIL", "LOFT_INCONSISTENT_EXTENT", "LOFT_CANT_TRIM_PROFILES_INFO", "LOFT_CANT_TRIM_GUIDES_INFO", "NON_GEOMETRIC_ITEM_INSERTION_FAILED", "UNKNOWN"]  # noqa: E501
        if error_enum not in allowed_values:
            raise ValueError(
                "Invalid value for `error_enum` ({0}), must be one of {1}"  # noqa: E501
                .format(error_enum, allowed_values)
            )

        self._error_enum = error_enum

    @property
    def facet_points(self):
        """Gets the facet_points of this BTExportTessellatedFacesResponse.  # noqa: E501


        :return: The facet_points of this BTExportTessellatedFacesResponse.  # noqa: E501
        :rtype: list[BTVector3d]
        """
        return self._facet_points

    @facet_points.setter
    def facet_points(self, facet_points):
        """Sets the facet_points of this BTExportTessellatedFacesResponse.


        :param facet_points: The facet_points of this BTExportTessellatedFacesResponse.  # noqa: E501
        :type: list[BTVector3d]
        """

        self._facet_points = facet_points

    @property
    def type_id(self):
        """Gets the type_id of this BTExportTessellatedFacesResponse.  # noqa: E501


        :return: The type_id of this BTExportTessellatedFacesResponse.  # noqa: E501
        :rtype: int
        """
        return self._type_id

    @type_id.setter
    def type_id(self, type_id):
        """Sets the type_id of this BTExportTessellatedFacesResponse.


        :param type_id: The type_id of this BTExportTessellatedFacesResponse.  # noqa: E501
        :type: int
        """

        self._type_id = type_id

    @property
    def connection_source(self):
        """Gets the connection_source of this BTExportTessellatedFacesResponse.  # noqa: E501


        :return: The connection_source of this BTExportTessellatedFacesResponse.  # noqa: E501
        :rtype: BTConnection
        """
        return self._connection_source

    @connection_source.setter
    def connection_source(self, connection_source):
        """Sets the connection_source of this BTExportTessellatedFacesResponse.


        :param connection_source: The connection_source of this BTExportTessellatedFacesResponse.  # noqa: E501
        :type: BTConnection
        """

        self._connection_source = connection_source

    @property
    def export_type_name(self):
        """Gets the export_type_name of this BTExportTessellatedFacesResponse.  # noqa: E501


        :return: The export_type_name of this BTExportTessellatedFacesResponse.  # noqa: E501
        :rtype: str
        """
        return self._export_type_name

    @export_type_name.setter
    def export_type_name(self, export_type_name):
        """Sets the export_type_name of this BTExportTessellatedFacesResponse.


        :param export_type_name: The export_type_name of this BTExportTessellatedFacesResponse.  # noqa: E501
        :type: str
        """

        self._export_type_name = export_type_name

    @property
    def unknown_class(self):
        """Gets the unknown_class of this BTExportTessellatedFacesResponse.  # noqa: E501


        :return: The unknown_class of this BTExportTessellatedFacesResponse.  # noqa: E501
        :rtype: bool
        """
        return self._unknown_class

    @unknown_class.setter
    def unknown_class(self, unknown_class):
        """Sets the unknown_class of this BTExportTessellatedFacesResponse.


        :param unknown_class: The unknown_class of this BTExportTessellatedFacesResponse.  # noqa: E501
        :type: bool
        """

        self._unknown_class = unknown_class

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
        if not isinstance(other, BTExportTessellatedFacesResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
