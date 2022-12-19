migrate((db) => {
  const collection = new Collection({
    "id": "bdnsfzj7gup7rut",
    "created": "2022-12-19 17:37:07.358Z",
    "updated": "2022-12-19 17:37:07.358Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9d50owtx",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bdnsfzj7gup7rut");

  return dao.deleteCollection(collection);
})
