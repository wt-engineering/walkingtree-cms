import { urlFromRef } from "./image-url";
export const parseAssetId = (ref) => ({ ref });
export const buildFileUrl = (parsed) => urlFromRef(parsed?.ref);
export const buildImageUrl = (parsed) => urlFromRef(parsed?.ref);
