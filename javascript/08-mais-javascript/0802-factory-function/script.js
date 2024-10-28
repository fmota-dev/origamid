function $$(selectedElements) {
	const elements = document.querySelectorAll(selectedElements);

	function hide() {
		for (const element of elements) {
			element.style.display = "none";
		}
		return this;
	}

	function show() {
		for (const element of elements) {
			element.style.display = "initial";
		}
		return this;
	}

	function on(onEvent, callback) {
		for (const element of elements) {
			element.addEventListener(onEvent, callback);
		}
		return this;
	}

	function addClass(className) {
		for (const element of elements) {
			element.classList.add(className);
		}
		return this;
	}

	function removeClass(className) {
		for (const element of elements) {
			element.classList.remove(className);
		}
		return this;
	}

	return {
		elements,
		hide,
		show,
		on,
		addClass,
		removeClass,
	};
}

const btns = $$("button");
console.log(btns);

function handleClick(event) {
	console.log(event.target);
	btns.addClass("active");
}

btns.on("click", handleClick);
