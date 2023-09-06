console.log("Завдання: 7 ==============================");

// Створюємо функцію task7, яка використовує setInterval та проміси.
function task7() {
	let promise = new Promise((resolve, reject) => {
		let intervalId = setInterval(() => {
			const date = new Date();
			const seconds = date.getSeconds();
			console.log(`Поточні секунди: ${seconds}`);
			if (seconds % 10 === 0) {
				clearInterval(intervalId);
				resolve("Поточні секунди кратні 10!");
			}
			if (seconds % 3 === 0) {
				clearInterval(intervalId);
				reject("Поточні секунди кратні 3!");
			}
		}, 1000);
	});


	promise
		.then((value) => {
			console.log(`Проміс зарезолвився з значенням: ${value}`);
		})
		.catch((error) => {
			console.log(`Проміс відхилився з помилкою: ${error}`);
		})
		.finally(() => {
			console.log("Проміс завершено");
		});
}


// Викликаємо функцію task7
task7();
