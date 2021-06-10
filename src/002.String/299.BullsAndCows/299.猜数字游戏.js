/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
	let A = 0,
		B = 0,
		secretObj = {},
		guessObj = {};

	for (let i = 0; i < secret.length; i++) {
		if (secret[i] === guess[i]) {
			A++;
		} else {
			secretObj[secret[i]] = (secretObj[secret[i]] || 0) + 1;
			guessObj[guess[i]] = (guessObj[guess[i]] || 0) + 1;
		}
	}

	let usedGuess = [];
	for (let i = 0; i < guess.length; i++) {
		if (!usedGuess.includes(guess[i])) {
			B += Math.min(secretObj[guess[i]] || 0, guessObj[guess[i]] || 0);
			usedGuess.push(guess[i]);
		}
	}

	return `${A}A${B}B`;
};
// console.log(getHint('1122', '2211'));
// @lc code=end
