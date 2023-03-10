import { defineConfig } from "tsup";

export default defineConfig((options) => {
	return {
		entry: ["src/index.ts"],
		publicDir: "./public",
		format: ["cjs", "esm"],
		external: ["react", "next", "classnames", "@phosphor-icons/react", "cva"],
		clean: true,
		dts: true,
		sourcemap: true,
		minify: !options.watch,
		skipNodeModulesBundle: true,
	};
});
