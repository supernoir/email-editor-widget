module.exports = {
	roots: ['<rootDir>'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	verbose: true,
	testURL: 'http://localhost/',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	}
}
