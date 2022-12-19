migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bdnsfzj7gup7rut")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nddpasfo",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bdnsfzj7gup7rut")

  // remove
  collection.schema.removeField("nddpasfo")

  return dao.saveCollection(collection)
})
