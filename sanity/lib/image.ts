import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

type SourceType =
  | string
  | {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };

export const urlFor = (source: SourceType) =>
  builder.image(source).auto("format").url();