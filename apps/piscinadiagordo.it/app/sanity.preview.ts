"use client";

import { type UsePreview } from "@sanity/preview-kit";
import { dataset, projectId } from "./config";
import { definePreview } from "../sanity/preview";

let alerted = false;
export const usePreview: UsePreview = definePreview({
	projectId,
	dataset,
	onPublicAccessOnly: () => {
		if (!alerted) {
			// eslint-disable-next-line no-alert
			alert("You are not logged in. You will only see public data.");
			alerted = true;
		}
	},
});

// Re-exporting as this file defines 'use client', which is necessary for it to be usable in a server component
export { PreviewSuspense } from "../sanity/preview";
