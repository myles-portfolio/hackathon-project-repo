import "./styles.css";

import { TutorialManager } from "./managers/tutorial";

const toggleTheme = () => {
	const body = document.body;
	const toggleButtonIcon = document.querySelector("#theme-toggle i");

	body.classList.toggle("dark");

	if (toggleButtonIcon) {
		if (body.classList.contains("dark")) {
			toggleButtonIcon.className =
				"fa-regular fa-sun dark:text-primary dark:bg-background";
		} else {
			toggleButtonIcon.className = "fa-regular fa-moon";
		}
	}
};

const subheaderElement = document.querySelector<HTMLDivElement>("#sub-header");
if (subheaderElement) {
	subheaderElement.innerHTML = `
  <div class="flex justify-end px-8">
    <button id="theme-toggle" class="bg-white hover:bg-baby-blue text-primary hover:text-gray-100 font-semibold py-2 px-4 mb-4 border border-gray-400 rounded-xl shadow hover:border-baby-blue w-fit transition ease-in-out duration-300 dark:bg-background">
			<i class="fa-regular fa-moon"></i>
		</button>
  </div>
  `;
}

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

const footerElement = document.querySelector("#footer");
if (footerElement) {
	footerElement.innerHTML = `
    <div class="flex flex-col justify-center items-center">
      <p>This is the footer.</p>
    </div>
    `;
}
