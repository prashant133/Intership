## bulk_edit_objects

* Perform a bulk edit operation on a list of objects
this is the endpoint for the bulk edit of the objects
* /api/bulk_edit_objects/
{
  "model": "documents.document",
  "ids": [10, 11, 12],
  "data": {
    "tags": [5]  // assuming tag with ID 5 is "urgent"
  }
}