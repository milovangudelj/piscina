"use client";

import { type PostsProps, Posts, query } from "./Posts";
import { usePreview as _usePreview } from "./sanity.preview";
import { type UsePreview } from "../sanity/preview";

const usePreview: UsePreview<PostsProps["data"]> = _usePreview;

export default function PreviewPosts({
	token = null,
	serverSnapshot,
}: {
	token: string | null;
	serverSnapshot: PostsProps["data"];
}) {
	const data = usePreview(token, query, {}, serverSnapshot) || [];
	return <Posts data={data} />;
}
