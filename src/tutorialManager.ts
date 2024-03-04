import {
	loadIntro,
	loadPartOne,
	loadPartTwo,
	loadPartThree,
	loadPartFour,
	loadPartFive,
	loadConclusion,
} from "./tutorialContent";

const tutorialParts = [
	loadIntro,
	loadPartOne,
	loadPartTwo,
	loadPartThree,
	loadPartFour,
	loadPartFive,
	loadConclusion,
];
let currentIndex = 0;

export const loadCurrentPart = () => {
	tutorialParts[currentIndex]();
	updateButtonStates();
};

const updateButtonStates = () => {
	const prevButton = document.getElementById(
		"prev"
	) as HTMLButtonElement | null;
	const nextButton = document.getElementById(
		"next"
	) as HTMLButtonElement | null;

	if (prevButton) prevButton.disabled = currentIndex === 0;
	if (nextButton)
		nextButton.disabled = currentIndex === tutorialParts.length - 1;
};

export const goToNext = () => {
	if (currentIndex < tutorialParts.length - 1) {
		currentIndex++;
		loadCurrentPart();
	}
};

export const goToPrev = () => {
	if (currentIndex > 0) {
		currentIndex--;
		loadCurrentPart();
	}
};
