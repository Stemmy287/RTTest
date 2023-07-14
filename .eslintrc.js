module.exports = {
	root: true,
	extends: '@react-native',
	rules: {
		'no-console': 'warn',
		quotes: ['warn', 'single'],
		'jsx-quotes': ['warn', 'prefer-double'],
		'prefer-const': 'warn',
		'max-len': ['warn', {code: 120}],
	},
};
