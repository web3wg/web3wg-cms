'use strict';

/**
 * job-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-tag.job-tag');
