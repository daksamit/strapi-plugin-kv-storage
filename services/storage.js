"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async keys() {
    const query = strapi.query("storage", "kv-storage");
    const keys = await query.find({});
    const entries = keys.map(({ key, value }) => [key, value]);
    console.log(Object.fromEntries(entries));
    return Object.fromEntries(entries);
  },
  async get(key) {
    const storage = strapi.plugins["kv-storage"].services.storage;
    const keys = await storage.keys();
    const value = keys[key] || null;
    return value;
  },
  async set(key, value) {
    const storage = strapi.plugins["kv-storage"].services.storage;
    await storage.createOrUpdate(key, value);
  },
  async createOrUpdate(key, value) {
    const query = strapi.query("storage", "kv-storage");
    const storageKey = await query.findOne({ key });
    const updatedKey = storageKey
      ? await query.update({ key }, { value })
      : await query.create({ key, value });
    return updatedKey;
  },
};
