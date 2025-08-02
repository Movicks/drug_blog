import { PersonStanding } from 'lucide-react';
import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton Contact Item
      S.listItem()
        .title('Contact Info')
        .icon(PersonStanding)
        .child(
          S.document()
            .schemaType('contact')
            .documentId('singleton-contact') // Fixed Singleton ID
        ),

      // Add all other document types EXCEPT contact (to avoid duplication)
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'contact'
      ),
    ]);
