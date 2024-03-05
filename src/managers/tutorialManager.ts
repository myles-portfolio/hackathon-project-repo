import {
	loadIntro,
	loadPartOne,
	loadPartTwo,
	loadPartThree,
	loadPartFour,
	loadPartFive,
	loadConclusion,
} from "../content/tutorialContent";

const tutorialParts = [
	loadIntro,
	loadPartOne,
	loadPartTwo,
	loadPartThree,
	loadPartFour,
	loadPartFive,
	loadConclusion,
];
let currentPartIndex = 0;

export const loadCurrentPart = () => {
	tutorialParts[currentPartIndex]();
	updateButtonStates();
};

const updateButtonStates = () => {
	const prevButton = document.getElementById(
		"prev"
	) as HTMLButtonElement | null;
	const nextButton = document.getElementById(
		"next"
	) as HTMLButtonElement | null;

	if (prevButton) prevButton.disabled = currentPartIndex === 0;
	if (nextButton)
		nextButton.disabled = currentPartIndex === tutorialParts.length - 1;
};

export const goToNext = () => {
	if (currentPartIndex < tutorialParts.length - 1) {
		currentPartIndex++;
		loadCurrentPart();
	}
};

export const goToPrev = () => {
	if (currentPartIndex > 0) {
		currentPartIndex--;
		loadCurrentPart();
	}
};
