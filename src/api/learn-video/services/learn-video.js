'use strict';

/**
 * learn-video service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learn-video.learn-video');
