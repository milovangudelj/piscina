import { defineConfig } from "tsup";

export default defineConfig((options) => {
	return {
		entry: ["src/index.ts"],
		publicDir: "./public",
		format: ["cjs", "esm"],
		external: ["react"],
		clean: true,
		dts: true,
		minify: !options.watch,
	};
});
