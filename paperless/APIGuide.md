
---

### 📝 Paperless API Guide:



## 🔑 Authentication

```json 
POST /api/token-auth/
{
  "username": "your_username",
  "password": "your_password"
}
```

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| POST   | /api/token-auth/ | Obtain an authentication token |


## 📝 APIs for Document 
Apis for the document manipulation. We can perform crud operation with documents. The method, endpoint and description are mentioned below.

| Method | Endpoint                          | Description                          |
|--------|-----------------------------------|--------------------------------------|
| GET    | /api/documents/                   | List all documents                   |
| POST   | /api/documents/post_document/     | Upload a new document                |
| GET    | /api/documents/{id}/              | Get details of a specific document   |
| PATCH  | /api/documents/{id}/              | Update metadata (e.g., title, tags)  |
| DELETE | /api/documents/{id}/              | Delete a document                    |

1. Get all the documents

```
fetch('https://yourdomain.com/api/documents/', {
  headers: {
    'Authorization': 'Token YOUR_API_TOKEN'
  }
})
.then(res => res.json())
.then(data => console.log(data));

```
2. upload a new document

```
const formData = new FormData();
formData.append('document', fileInput.files[0]);  // Assuming fileInput is your file input element
formData.append('title', 'My New Document');
formData.append('tags', 'finance');

fetch('https://yourdomain.com/api/documents/post_document/', {
  method: 'POST',
  headers: {
    'Authorization': 'Token YOUR_API_TOKEN'
  },
  body: formData
})
.then(res => res.json())
.then(data => console.log(data));

```

3. Get documents details
```
fetch('https://yourdomain.com/api/documents/42/', {fetch('https://yourdomain.com/api/documents/42/', {
  headers: {
    'Authorization': 'Token YOUR_API_TOKEN'
  }
})
.then(res => res.json())
.then(data => console.log(data));

  headers: {
    'Authorization': 'Token YOUR_API_TOKEN'
  }
})
.then(res => res.json())
.then(data => console.log(data));

```
4. update documents meta data

```
fetch('https://yourdomain.com/api/documents/42/', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Token YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Updated Title',
    tags: ['updated', 'important']
  })
})
.then(res => res.json())
.then(data => console.log(data));

```
5. Delete a Document

```
fetch('https://yourdomain.com/api/documents/42/', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Token YOUR_API_TOKEN'
  }
})
.then(res => {
  if (res.status === 204) console.log('Document deleted successfully');
});

```

## 🏷️ APIs for Tags
Tags are labels that you can associate with documents to provide additional context and categorization. For instance, if you upload a contract document, you might tag it with "Contract", "Legal", and "2023". This allows you to later filter or search for documents based on those tags.

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | /api/tags/          | List all tags            |
| POST   | /api/tags/          | Create a new tag         |
| PATCH  | /api/tags/{id}/     | Edit an existing tag     |
| DELETE | /api/tags/{id}/     | Delete a tag             |

1. List all tags
```
fetch('https://yourdomain.com/api/tags/', {
  headers: {
    'Authorization': 'Token YOUR_API_TOKEN'
  }
})
.then(res => res.json())
.then(data => console.log(data));

```
Response 

```
[
  {
    "id": 1,
    "name": "Invoice"
  },
  {
    "id": 2,
    "name": "Contract"
  },
  {
    "id": 3,
    "name": "2023"
  }
]
```
2. Create a new Tag

```
fetch('https://yourdomain.com/api/tags/', {
  method: 'POST',
  headers: {
    'Authorization': 'Token YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Finance' })
})
.then(res => res.json())
.then(data => console.log(data));

```
Response 


```
{
  "id": 4,
  "name": "Finance"
}

```

3. Edit and existing tag

```
fetch('https://yourdomain.com/api/tags/4/', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Token YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Financial Records' })
})
.then(res => res.json())
.then(data => console.log(data));

```

Response
```
{
  "id": 4,
  "name": "Financial Records"
}

```

4. Delete a tag

```
fetch('https://yourdomain.com/api/tags/4/', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Token YOUR_API_TOKEN'
  }
})
.then(res => {
  if (res.status === 204) {
    console.log('Tag deleted successfully');
  }
});

```

## 🧾 Correspondents
| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| GET    | /api/correspondents/ | List all correspondents          |

## 📂 Document Types

| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| GET    | /api/documents_types/ | List all documents types         |

## 📈 Statistics
You would use this endpoint to get a quick look at the overall system status, such as how many documents are currently stored, how many users are active, and more.

| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| GET    | 	/api/statistics/ | 	Get system-wide stats overview        |


## 🔄 Bulk Edit Objects

The Bulk Edit Objects API allows you to perform operations (such as updating, deleting, or modifying attributes) on multiple objects (documents, tags, etc.) at once. This endpoint is particularly useful when you need to apply changes to a large number of documents or other entities efficiently, without the need to handle each one individually.



| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| GET    | 	/api/bulk_edit_objects/ | 		Perform operations on multiple objects       |

```
// Define the payload in a variable
const payload = {
  objects: [
    { id: 1, title: "Updated Title", tags: ["finance", "2023"], permissions: ["read", "edit"] },
    { id: 2, tags: ["marketing", "Q1"], permissions: ["read"] },
    { id: 3, title: "Updated Document", tags: ["HR", "contract"], permissions: ["edit", "delete"] }
  ]
};

// Make the POST request with fetch
fetch('https://yourdomain.com/api/bulk_edit_objects/', {
  method: 'POST',
  headers: {
    'Authorization': 'Token YOUR_API_TOKEN',  // Add your API Token here
    'Content-Type': 'application/json'       // Set content type to JSON
  },
  body: JSON.stringify(payload)  // Sending the payload in the request body
})
.then(res => res.json())  // Parse the response as JSON
.then(data => console.log(data))  // Log the response data
.catch(err => console.error(err));  // Handle any errors


```
Response 
```
{
  "success": true,
  "message": "3 objects were updated successfully.",
  "updated_objects": [
    {
      "id": 1,
      "title": "Updated Title",
      "tags": ["finance", "2023"],
      "permissions": ["read", "edit"]
    },
    {
      "id": 2,
      "title": "Quarterly Report",
      "tags": ["marketing", "Q1"],
      "permissions": ["read"]
    },
    {
      "id": 3,
      "title": "Updated Document",
      "tags": ["HR", "contract"],
      "permissions": ["edit", "delete"]
    }
  ]
}

```
# Important Notes :
* Authorization: Ensure that your API token has sufficient permissions to perform bulk operations.

* Error Handling: If there are any issues with individual objects (e.g., invalid ID, missing field), some objects may fail to update. The response should include details about which objects were successfully modified and which encountered errors.


## 🔍 Filtering & Searching
| Query Param       | Description                           |
|-------------------|---------------------------------------|
| `?tag=`           | Filter by tag ID                      |
| `?document_type=` | Filter by document type ID            |
| `?search=`        | Search text across titles/content      |
| `?ordering=`      | Order by field (e.g., `-created`)     |


1. 🔍 Filter by Tag ID
* Purpose: Returns documents associated with a specific tag.

* Usage: Pass the numeric ID of a tag.

* Example:
```
/api/documents/?tag=5

```
You can combine multiple tags by repeating the parameter:

```
/api/documents/?tag=5&tag=7

```
2. 📂 Filter by Document Type ID

* Purpose: Filters documents by a specific document type (e.g., Invoice, Contract).

* Usage: Pass the document type ID.

* Example:

```
/api/documents/?document_type=3

```
3. Full-Text Search
* Purpose: Searches across document titles, content, and possibly other fields.

* Usage: Pass a keyword or phrase.

* Example:
```
/api/documents/?search=invoice
```
4. 🔽 Sort Results
* Purpose: Controls how results are ordered (ascending or descending).

* Usage:

    * ?ordering=created → oldest first

    * ?ordering=-created → newest first

    * ?ordering=title → alphabetical

    * ?ordering=-title → reverse alphabetical

* Example:
```
/api/documents/?ordering=-created

```

## Combined Example

```
GET /api/documents/?tag=5&search=invoice&ordering=-created
```
Returns all documents tagged with ID 5, where "invoice" appears in the content or title, sorted with the newest first.


