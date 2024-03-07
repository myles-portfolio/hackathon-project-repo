import "./style.css";
import { ContentItem } from "./types";
import { welcomeContent } from "./tutorial/content/welcomeContent";
import { ContentManager } from "./tutorial/managers/ContentManager";
import { TutorialManager } from "./tutorial/managers/TutorialManager";
import { tutorialParts } from "./tutorial/parts/tutorial-parts";

export function setupTutorialPart(
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

	document.querySelector("#app")!.innerHTML = `
        <div class="grid h-screen place-items-center container">
            <section id="top">
                <h1>
                    Software Development <br>Lifecycle Tutorial
                </h1>
                <div class="w-124 mx-auto">
                    <img src="/website-interface.svg">
                </div>
            </section>
            <section class="flex flex-col justify-center items-center">
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
                <div>
                    <button id="cta-button" class="bg-white hover:bg-baby-blue text-primary hover:text-gray-100 font-semibold py-2 px-4 my-4 border border-gray-400 rounded shadow hover:border-baby-blue w-fit transition ease-in-out duration-300">
                    ${buttonText}
                    </button>
                </div>
            </section>
            <section id="tut-nav" class="inline-flex">
                <button id="prev" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Prev
                </button>    
                <button id="next" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Next
                </button>
            </section>
        </div>
    `;

	function setupEventListeners() {
		document
			.getElementById("backward")
			?.addEventListener("click", () => contentManager?.goToPrevContent());
		document
			.getElementById("forward")
			?.addEventListener("click", () => contentManager?.goToNextContent());
		document
			.getElementById("cta-button")
			?.addEventListener("click", () => tutorialManager.loadNext());

		document
			.getElementById("next")
			?.addEventListener("click", () => tutorialManager.loadNext());
		document
			.getElementById("prev")
			?.addEventListener("click", () => tutorialManager.loadPrev());
	}

	setupEventListeners();
}

function displayInitialContent(
	contentId: string,
	contentArray: ContentItem[],
	contentClass: string
) {
	const targetElement = document.getElementById("welcome");
	console.log("Target element:", targetElement); // Debugging line
	if (targetElement && contentArray.length > 0) {
		targetElement.className = contentClass;
		targetElement.innerHTML = contentArray[0].content;
		console.log(
			"Setting content for:",
			contentId,
			"with:",
			contentArray[0].content
		); // Debugging line
	} else {
		console.error("Element not found or contentArray is empty");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	displayInitialContent("welcome", welcomeContent, "text-justify");
	setupTutorialPart(
		"welcome",
		welcomeContent,
		"text-justify",
		"Start Learning",
		false
	);
});
