"use client";
import React from "react";

import config from "../../../sanity.config";
import { NextStudio } from "../../../sanity/studio";

export default function StudioPage() {
	return <NextStudio config={config} />;
}
