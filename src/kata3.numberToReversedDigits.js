// review
const numberToReversedDigits = numbers => {
	let wordNums = String(numbers);
	let array = [];
	for (let i = 0; i < wordNums.length; i++) {
		array.push(Number(wordNums[i]));
	};
	return array.reverse();
};
module.exports = numberToReversedDigits;
