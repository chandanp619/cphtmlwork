// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('express-api-db');

// Create a new document in the collection.
db.getCollection('properties').insertOne({
    "property_title":"Property For Rent",
    "property_description":"",
    "property_city": "Pune",
    "property_type": "Appartment",
    "property_listed_for":"Rent",
    "property_features":{
        "area":820,
        "rooms":2,
        "bathrooms":2,
        "parking":0
    },
    "property_price":25000,
    "property_listed_on":new Date(),
    "property_status":"active"
});
