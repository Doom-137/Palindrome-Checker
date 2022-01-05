// Case-insensitive, removes all non-alphanumeric characters
function palindromeCheckAlphanum(str) {
	const regex = /[\W_]/g;
	const strLower = str.toLowerCase().replace(regex, '');
	let counter = 0;
	const arr1 = strLower.split('');
	const arr2 = [];
	
	for (let i = 0; i < arr1.length; i++) { arr2.unshift(arr1[i]); }
	for (let i = 0; i < arr1.length; i++) { if (arr1[i] == arr2[i]) counter++ }
	
	return counter == arr1.length;
}

// Case-insensitive, removes all non-alphanumeric characters
function palindromeCheckAlphanumSlim(str) {
	const regex = /[\W_]/g;
	const strLower = str.toLowerCase().replace(regex, '');
	const strLowerRev = strLower.split('').reverse().join('');
	
	return strLower === strLowerRev;
}

// Provides flags to customize specific use-cases for allowing whitespace, allowing non-alphanumeric characters, and case sensitivity
function palindromeCheck(str, allowWhitespace = true, alphanumericOnly = true, caseSensitivity = true) {
	const regexArr = ['/['];
	let strManip;
	
	if (!allowWhitespace) regexArr.push('\s', ']');
	
	if (alphanumericOnly && !allowWhitespace) {
		regexArr.pop();
		regexArr.push('\W_]/');
	} else if (alphanumericOnly && allowWhitespace) {
		regexArr.push('\W_]/');
	}
	
	const regex = new RegExp(regexArr.join(''), 'g');
	
	!caseSensitivity ? strManip = str.toLowerCase().replace(regex, '') : strManip = str.replace(regex, '');
	
	const strManipRev = strManip.split('').reverse().join('');
	
	return strManip === strManipRev;
}
