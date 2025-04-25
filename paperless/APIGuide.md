
---

### 📝 Rendered Result on GitHub:

## bulk_edit_objects

* Perform a bulk edit operation on a list of objects  
This is the endpoint for the bulk edit of the objects:  
`/api/bulk_edit_objects/`

```json
{
  "model": "documents.document",
  "ids": [10, 11, 12],
  "data": {
    "tags": [5]  // assuming tag with ID 5 is "urgent"
  }
}

```
* model: the model you're editing. For documents, it's "documents.document".

* ids: list of IDs you want to update.

* data: the fields you want to change.
