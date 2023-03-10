import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./config";

export const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (
	source: Parameters<(typeof imageBuilder)["image"]>[0]
) => imageBuilder.image(source).auto("format").fit("max");
