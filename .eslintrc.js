const base = require('@axia-core/dev/config/eslint');

module.exports = {
	...base,
	ignorePatterns: [
		'.eslintrc.js',
		'.github/**',
		'.vscode/**',
		'.yarn/**',
		'**/build/*',
		'**/coverage/*',
		'**/node_modules/*'
	]
};
