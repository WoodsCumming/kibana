/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
export {
  AGENT_TYPE_PERMANENT,
  AGENT_TYPE_EPHEMERAL,
  AGENT_TYPE_TEMPORARY,
  AGENT_POLLING_THRESHOLD_MS,
  AGENT_POLLING_INTERVAL,
  INDEX_PATTERN_PLACEHOLDER_SUFFIX,
  // Routes
  PLUGIN_ID,
  EPM_API_ROUTES,
  DATA_STREAM_API_ROUTES,
  DATASOURCE_API_ROUTES,
  AGENT_API_ROUTES,
  AGENT_CONFIG_API_ROUTES,
  FLEET_SETUP_API_ROUTES,
  ENROLLMENT_API_KEY_ROUTES,
  INSTALL_SCRIPT_API_ROUTES,
  OUTPUT_API_ROUTES,
  SETUP_API_ROUTE,
  SETTINGS_API_ROUTES,
  APP_API_ROUTES,
  // Saved object types
  AGENT_SAVED_OBJECT_TYPE,
  AGENT_EVENT_SAVED_OBJECT_TYPE,
  AGENT_ACTION_SAVED_OBJECT_TYPE,
  AGENT_CONFIG_SAVED_OBJECT_TYPE,
  DATASOURCE_SAVED_OBJECT_TYPE,
  OUTPUT_SAVED_OBJECT_TYPE,
  PACKAGES_SAVED_OBJECT_TYPE,
  INDEX_PATTERN_SAVED_OBJECT_TYPE,
  ENROLLMENT_API_KEYS_SAVED_OBJECT_TYPE,
  GLOBAL_SETTINGS_SAVED_OBJECT_TYPE as GLOBAL_SETTINGS_SAVED_OBJET_TYPE,
  // Defaults
  DEFAULT_AGENT_CONFIG,
  DEFAULT_OUTPUT,
  DEFAULT_REGISTRY_URL,
} from '../../common';
