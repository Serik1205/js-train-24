console.log("Завдання: 10 ==============================");

function task10() {

	const promise1 = new Promise((resolve) => {
		setTimeout(() => {
			resolve("Promise 1");
		}, 500);
	});
	const promise2 = new Promise((resolve) => {
		setTimeout(() => {
			resolve("Promise 2");
		}, 200);
	});
	const promise3 = new Promise((resolve) => {
		setTimeout(() => {
			resolve("Promise 3");
		}, 500);
	});
	const promises = [promise1, promise2, promise3]
	Promise.any(promises)
		.then((result) => {
			// Виводимо результат першого вирішеного проміса в консоль
			console.log(result);
		})
		.catch((error) => {
			// Обробляємо помилку, якщо всі проміси відхилені
			console.error("Помилка:", error);
		});
}


// Викликаємо функцію task10
task10();
