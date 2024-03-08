import { TutorialManager } from "../../managers/TutorialManager";
import { tutorialParts } from "../tutorial/parts/tutorial-parts";

export function initializeAppHeader(title: string) {
	const headerElement = document.querySelector("#header");
	if (headerElement) {
		headerElement.innerHTML = `
      <div class="bg-white border-b border-gray-200">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">FD Tutorials</span>
            <img class="w-auto" src="/icons8-book-26.png" alt="">
          </a>
        </div>
        <div class="hidden md:flex md:gap-x-2 md:items-center">
          <p>SDLC Tutorial</p>
          <i class="fa-solid fa-angle-right text-baby-blue"></i>
          <p>${title}</p>
        </div>
      </nav>
      </header>
    `;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const tutorialManager = new TutorialManager(tutorialParts);
	const currentPartTitle = tutorialManager.getCurrentPart().title || "Welcome";
	initializeAppHeader(currentPartTitle);
});
