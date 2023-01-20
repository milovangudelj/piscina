module.exports = {
	root: true,
	// This tells ESLint to load the config from the package `@piscinadiagordo/eslint-config`
	extends: ["@piscinadiagordo"],
	settings: {
		next: {
			rootDir: ["apps/*/"],
		},
	},
};
