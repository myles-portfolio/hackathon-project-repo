import { TutorialManager } from "../../managers/TutorialManager";
import { ContentManager } from "../../managers/ContentManager";
import {
	ContentItem,
	TutorialPart,
	tutorialParts,
} from "../tutorial/parts/tutorial-parts";

export function initializeTutorial() {
	const tutorialManager = new TutorialManager(tutorialParts);

	const currentPart = tutorialManager.getCurrentPart();
	const contentManager = tutorialManager.getCurrentContentManager();

	if (contentManager) {
		initializeTutorialPartHeader(currentPart);
		initializeTutorialPartContent(
			currentPart.id,
			currentPart.content,
			currentPart.contentClass,
			currentPart.buttonText,
			currentPart.shouldTutNavShow,
			tutorialManager,
			contentManager
		);
		initializeTutorialPartFooter(tutorialManager, currentPart.shouldTutNavShow);
	} else {
		console.error("ContentManager is not initialized.");
	}
}

export function initializeTutorialPartHeader(currentPart: TutorialPart) {
	const tutorialHeader = document.querySelector("#tutorial-header");
	if (tutorialHeader) {
		let headerContent = `<section id="top-section" class="mt-10">`;
		if (currentPart.headerText) {
			headerContent += `<h1 class="text-center">${currentPart.headerText}</h1>`;
		}
		if (currentPart.headerImage) {
			headerContent += `
        <div class="w-124 mx-auto">
          <img src="${currentPart.headerImage}" alt="${currentPart.title}">
        </div>
      `;
		}

		headerContent += `</section>`;
		tutorialHeader.innerHTML = headerContent;
	}
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
		}
	});
}

export function initializeTutorialPartContent(
	contentId: string,
	_contentArray: ContentItem[],
	contentClass: string,
	buttonText: string = "",
	_shouldTutNavShow: boolean,
	tutorialManager: TutorialManager,
	contentManager: ContentManager
) {
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
				<div class="flex gap-4 items-center px-4">
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

function setupTutorialPartFooterEventListeners(
	tutorialManager: TutorialManager
) {
	const prevButton = document.getElementById("prev");
	const nextButton = document.getElementById("next");

	const hasPrevPart = tutorialManager.getCurrentPartIndex() > 0;
	const hasNextPart =
		tutorialManager.getCurrentPartIndex() <
		tutorialManager.getTutorialParts().length - 1;

	if (prevButton) {
		prevButton.style.display = hasPrevPart ? "block" : "none";
		prevButton.addEventListener("click", () => {
			if (hasPrevPart) tutorialManager.loadPrev();
		});
	}

	if (nextButton) {
		nextButton.style.display = hasNextPart ? "block" : "none";
		nextButton.addEventListener("click", () => {
			if (hasNextPart) tutorialManager.loadNext();
		});
	}
}

export function initializeTutorialPartFooter(
	tutorialManager: TutorialManager,
	shouldTutNavShow: boolean
) {
	const currentIndex = tutorialManager.getCurrentPartIndex();
	const tutorialParts = tutorialManager.getTutorialParts();

	const prevPartIndex = currentIndex - 1;
	const nextPartIndex = currentIndex + 1;

	const prevPart = prevPartIndex >= 0 ? tutorialParts[prevPartIndex] : null;
	const nextPart =
		nextPartIndex < tutorialParts.length ? tutorialParts[nextPartIndex] : null;

	const tutNavDisplayStyle = shouldTutNavShow ? "flex" : "none";

	document.querySelector("#tutorial-footer")!.innerHTML = `
			<section id="bottom-section" class="flex justify-center class="mb-4">
					<div id="tut-nav" class="inline-flex gap-2" style="display: ${tutNavDisplayStyle};">
              ${
								prevPart
									? `<button id="prev" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Back to ${prevPart.title}</button>`
									: ""
							}
              ${
								nextPart
									? `<button id="next" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Go to ${nextPart.title}</button>`
									: ""
							}
        </div>
    </section>
	`;

	setupTutorialPartFooterEventListeners(tutorialManager);
}
