const jumpDialog = document.querySelector(".quick-jump");
const jumpTrigger = document.querySelector(".quick-jump-trigger");
const jumpSearch = document.querySelector("#quick-jump-search");
const jumpLinks = [...document.querySelectorAll(".palette-options a")];

function openQuickJump() {
	jumpDialog.showModal();
	jumpSearch.value = "";
	filterQuickJump();
	jumpSearch.focus();
}

function filterQuickJump() {
	const query = jumpSearch.value.trim().toLowerCase();
	jumpLinks.forEach((link) => {
		const matches = `${link.textContent} ${link.dataset.command}`.toLowerCase().includes(query);
		link.hidden = !matches;
	});
}

jumpTrigger.addEventListener("click", openQuickJump);
jumpSearch.addEventListener("input", filterQuickJump);

document.addEventListener("keydown", (event) => {
	if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
		event.preventDefault();
		if (jumpDialog.open) jumpDialog.close();
		else openQuickJump();
	}

	if (jumpDialog.open && event.key === "Enter") {
		const firstVisibleLink = jumpLinks.find((link) => !link.hidden);
		if (firstVisibleLink) {
			event.preventDefault();
			firstVisibleLink.click();
		}
	}
});

jumpLinks.forEach((link) => {
	link.addEventListener("click", () => jumpDialog.close());
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector(".contact-form").addEventListener("submit", async (event) => {
	event.preventDefault();
	const form = event.currentTarget;
	const formData = new FormData(form);
	const brief = `Project note from ${formData.get("name")} (${formData.get("email")}):\n\n${formData.get("message")}`;
	const status = form.querySelector(".form-status");

	try {
		if (navigator.share) await navigator.share({ title: "Project brief", text: brief });
		else if (navigator.clipboard) await navigator.clipboard.writeText(brief);
		else throw new Error("Sharing is unavailable");
		status.textContent = navigator.share ? "Your project brief is ready to share." : "Project brief copied to your clipboard.";
		form.reset();
	} catch (error) {
		if (error.name !== "AbortError") status.textContent = "Sharing is unavailable in this browser.";
	}
});
