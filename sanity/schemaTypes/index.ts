import { SchemaTypeDefinition } from "sanity";
import { contact } from "./contact.schema";
import { healthProduct } from "./healthProduct.schema";




export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        contact,
        healthProduct,
    ]
}