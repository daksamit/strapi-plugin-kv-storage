# Strapi plugin kv-storage

## Quick Examples

API Access:

```sh
# GET /kv-storage/:key
### returns key

# POST /kv-storage/:key
{ "value": { "some": "valid JSON data" } }
### adds key with given value to strapi
```

Access storage service:

```js
const storage = strapi.plugins["kv-storage"].services.storage;
storage.get("key");
storage.set("key", { description: "any data" });
```
