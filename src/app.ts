import "./style.css";
import { ContentItem } from "./managers/ContentManager";
import { ContentManager } from "./managers/ContentManager";
import { TutorialManager } from "./managers/TutorialManager";
import { tutorialParts } from "./components/tutorial/parts/tutorial-parts";

export function initializeTutorialPartHeader(shouldDisplayHeader: boolean) {
	const tutorialHeader = document.querySelector("#tutorial-header");
	if (tutorialHeader) {
		if (shouldDisplayHeader) {
			tutorialHeader.innerHTML = `
							<section id="top-section">
									<h1 class="text-center">
											Software Development <br>Lifecycle Tutorial
									</h1>
									<div class="w-124 mx-auto">
											<img src="/website-interface.svg">
									</div>
							</section>
					`;
		} else {
			tutorialHeader.innerHTML = "";
		}
	}
}

function updateTutorialPartHeader(tutorialManager: TutorialManager) {
	const currentPart = tutorialManager.getCurrentPart();

	const shouldDisplayHeader = currentPart.id === "welcome";

	initializeTutorialPartHeader(shouldDisplayHeader);
}

function setupTutorialPartContentEventListeners(
	contentManager: ContentManager,
	tutorialManager: TutorialManager
) {
	document
		.getElementById("backward")
		?.addEventListener("click", () => contentManager?.goToPrevContent());
	document
		.getElementById("forward")
		?.addEventListener("click", () => contentManager?.goToNextContent());
	document.getElementById("cta-button")?.addEventListener("click", () => {
		const currentContentId = tutorialManager.getCurrentPart().id;
		const shouldGoToNext = currentContentId === "welcome";
		if (shouldGoToNext) {
			tutorialManager.loadNext();
			updateTutorial(tutorialManager, contentManager);
		}
		console.log("You clicked me!");
		console.log("CurrentContentID:", currentContentId);
	});
}

export function initializeTutorialPartContent(
	contentId: string,
	contentArray: ContentItem[],
	contentClass: string,
	buttonText: string = "",
	shouldTutNavShow: boolean
) {
	let tutorialManager = new TutorialManager(tutorialParts);

	let contentManager = new ContentManager(
		contentArray,
		contentId,
		shouldTutNavShow
	);

	const ctaButtonHtml = buttonText
		? `
        <div>
            <button id="cta-button" class="bg-white hover:bg-baby-blue text-primary hover:text-gray-100 font-semibold py-2 px-4 my-4 border border-gray-400 rounded shadow hover:border-baby-blue w-fit transition ease-in-out duration-300">
            ${buttonText}
            </button>
        </div>
    `
		: "";

	document.querySelector("#tutorial-content")!.innerHTML = `
            <section id="middle-section" class="flex flex-col justify-center items-center">
                <div class="flex gap-4 items-center">
                    <div id="backward" class="text-[32px] cursor-pointer text-baby-blue transition ease-in-out delay-50 hover:text-lapis-lazuli hover:-translate-y-1 hover:scale-110 duration-300">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div id="${contentId}" class="${contentClass}">
                        <!-- Content gets loaded here by the ContentManager -->
                    </div>
                    <div id="forward" class="text-[32px] cursor-pointer text-baby-blue transition ease-in-out delay-50 hover:text-lapis-lazuli hover:-translate-y-1 hover:scale-110 duration-300">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                ${ctaButtonHtml}
            </section>
    `;

	contentManager.renderCurrentContent();

	setupTutorialPartContentEventListeners(contentManager, tutorialManager);
}

function updateTutorialPartContent(
	tutorialManager: TutorialManager,
	contentManager: ContentManager
) {
	const currentPart = tutorialManager.getCurrentPart();

	initializeTutorialPartContent(
		currentPart.id,
		currentPart.content,
		currentPart.contentClass,
		currentPart.buttonText,
		currentPart.shouldTutNavShow
	);

	contentManager.updateContent(currentPart.content);
}

function setupTutorialPartFooterEventListeners(
	tutorialManager: TutorialManager
) {
	document
		.getElementById("next")
		?.addEventListener("click", () => tutorialManager.loadNext());
	document
		.getElementById("prev")
		?.addEventListener("click", () => tutorialManager.loadPrev());
}

export function initializeTutorialPartFooter(
	tutorialManager: TutorialManager,
	shouldTutNavShow: boolean
) {
	const tutNavDisplayStyle = shouldTutNavShow ? "flex" : "none";

	document.querySelector("#tutorial-footer")!.innerHTML = `
			<section id="bottom-section">
					<div id="tut-nav" class="inline-flex gap-2" style="display: ${tutNavDisplayStyle};">
							<button id="prev" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Prev</button>    
							<button id="next" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Next</button>
					</div>
    </section>
	`;

	setupTutorialPartFooterEventListeners(tutorialManager);
}

function updateTutorialPartFooter(
	tutorialManager: TutorialManager,
	contentManager: ContentManager
) {
	const currentPart = tutorialManager.getCurrentPart();
	const shouldShowTutNav =
		currentPart.shouldTutNavShow && contentManager.isLastContent();

	initializeTutorialPartFooter(tutorialManager, shouldShowTutNav);
}

function startTutorial() {
	let tutorialManager = new TutorialManager(tutorialParts);
	const currentPart = tutorialManager.getCurrentPart();
	const shouldDisplayHeader = currentPart.id === "welcome";

	initializeTutorialPartHeader(shouldDisplayHeader);
	initializeTutorialPartContent(
		currentPart.id,
		currentPart.content,
		currentPart.contentClass,
		currentPart.buttonText,
		currentPart.shouldTutNavShow
	);

	initializeTutorialPartFooter(tutorialManager, currentPart.shouldTutNavShow);
}

document.addEventListener("DOMContentLoaded", startTutorial);

function updateTutorial(
	tutorialManager: TutorialManager,
	contentManager: ContentManager
) {
	const currentPart = tutorialManager.getCurrentPart();

	contentManager.updateContent(currentPart.content);

	updateTutorialPartHeader(tutorialManager);
	updateTutorialPartContent(tutorialManager, contentManager);
	updateTutorialPartFooter(tutorialManager, contentManager);
}
