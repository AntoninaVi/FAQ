const accTitles = document.querySelectorAll(".accordion-title");

accTitles.forEach((accTitle) => {
	accTitle.addEventListener("click", () => {
		if (accTitle.classList.contains("open")) {
			accTitle.classList.remove("open");
		} else {
			const accTitlesOpen = document.querySelectorAll(".open");
			accTitlesOpen.forEach((accTitlesOpen) => {
				accTitlesOpen.classList.remove("open");
			});
			accTitle.classList.add("open");
		}
	});
});
