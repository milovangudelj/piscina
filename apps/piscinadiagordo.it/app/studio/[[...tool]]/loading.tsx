"use client";
import React from "react";

import config from "../../../sanity.config";
import { NextStudioLoading } from "../../../sanity/studio/loading";

export default function Loading() {
	return <NextStudioLoading config={config} />;
}
