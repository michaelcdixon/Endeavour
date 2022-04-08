function AnagramChecker(wordsArray) {
	let sortedWords = wordsArray
		.map((word) => word.split(" "))
		.sort()
		.join(" ");
	let numberOfAnagrams = 0;

	for (let i = 0; i < sortedWords.length; i++) {
		for (let j = 0; j < sortedWords.length; j++) {
			if (sortedWords[i] === sortedWords[j]) {
				numberOfAnagrams++;
			}
		}
	}

	return numberOfAnagrams;
}
