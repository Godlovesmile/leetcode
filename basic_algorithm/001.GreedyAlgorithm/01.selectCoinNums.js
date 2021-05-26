function selectCoinNums(money) {
	const N = 5; // 纸币类型
	const Counts = [5, 2, 2, 3, 5]; // 每种币种数量
	const Values = [1, 5, 10, 50, 100]; // 币种的额度
	let resultNum = 0;

	for (let i = N - 1; i >= 0; i--) {
		const num = Math.min(Counts[i], Math.floor(money / Values[i]));
		money -= Values[i] * num;
		resultNum += num;
	}

    return resultNum;
}
console.log(selectCoinNums(456));