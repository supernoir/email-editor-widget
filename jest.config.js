module.exports = {
	roots: ['<rootDir>/src'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	verbose: true,
	testURL: 'http://localhost/',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	}
}
