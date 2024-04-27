import { TutorialManager } from "../managers/tutorial";

const toggleTheme = () => {
	const body = document.body;
	body.classList.toggle("dark");
};

document.addEventListener("DOMContentLoaded", () => {
	const tutorialManager = new TutorialManager();

	tutorialManager.renderMainLayout();

	const toggleButton = document.querySelector("#theme-toggle");
	if (toggleButton) {
		toggleButton.addEventListener("click", toggleTheme);
	} else {
		console.error("Toggle theme button not found");
	}

	function updateNavigationButtons() {
		const prevContentButton = document.getElementById("backward");
		const nextContentButton = document.getElementById("forward");
		const customCTAButton = document.getElementById("custom-cta-button");

		if (prevContentButton) {
			prevContentButton.addEventListener("click", () => {
				tutorialManager.navigateContentBackward();
			});
		}

		if (nextContentButton) {
			nextContentButton.addEventListener("click", () => {
				tutorialManager.navigateContentForward();
			});
		}

		if (customCTAButton) {
			customCTAButton.addEventListener("click", () => {
				const currentPart = tutorialManager.getCurrentPart();
				switch (currentPart.buttonText) {
					case "Start Learning":
						tutorialManager.navigateToNextPart();
						break;
					case "Finish":
						console.log("Finish the course and do something else");
						break;
					default:
						console.log("Default action for CTA button");
				}
			});
		}

		const prevPartButton = document.getElementById("prev");
		const nextPartButton = document.getElementById("next");

		if (prevPartButton) {
			prevPartButton.addEventListener("click", () => {
				tutorialManager.navigateToPrevPart();
			});
		}

		if (nextPartButton) {
			nextPartButton.addEventListener("click", () => {
				tutorialManager.navigateToNextPart();
			});
		}
	}

	updateNavigationButtons();
});
