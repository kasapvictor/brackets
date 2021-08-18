module.exports = function check(str, bracketsConfig) {
	const OPEN = [ '(', '[', '{', '1', '3', '5' ];
	const CLOSE = {
		')': '(',
		'}': '{',
		']': '[',
		'2': '1',
		'4': '3',
		'6': '5'
	}
	let _str = [ ...str ];
	let stack = [];

	for ( let i in _str ) {
		const curr = _str[i];

		if ( OPEN.includes ( curr ) || (curr === '|' || curr === '7' || curr === '8') && !stack.includes(curr)) {
			stack.push ( curr );
		} else {
			if ( stack.length === 0 ) {
				return false;
			}
			const prev = stack[stack.length - 1];

			if ( CLOSE[curr] === prev || (curr === "|" || curr === "7" || curr === "8")) {
				stack.pop ();
			} else {
				return false;
			}
		}
	}

	return stack.length === 0;
}
