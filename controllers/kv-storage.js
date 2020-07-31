"use strict";

/**
 * kv-storage.js controller
 *
 * @description: A set of functions called "actions" of the `kv-storage` plugin.
 */

module.exports = {
  async get(ctx) {
    const storage = strapi.plugins["kv-storage"].services.storage;
    const { key } = ctx.params;
    const value = await storage.get(key);
    return value || ctx.notFound();
  },
  async set(ctx) {
    const storage = strapi.plugins["kv-storage"].services.storage;
    const { key } = ctx.params;
    const { value } = ctx.request.body;
    await storage.set(key, value);
    return value;
  },
};
