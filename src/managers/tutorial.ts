// manager.ts
import { TutorialPart } from "../interfaces";
import { tutorialContent } from "../content";

export class TutorialManager {
	private currentPartIndex: number = 0;
	private contentItemIndex: number = 0;
	private tutorialParts: TutorialPart[] = tutorialContent;

	constructor() {
		this.renderBaseLayout();
		this.renderCurrentPart();
		this.updateContentNavigationButtons();
	}

	private renderBaseLayout(): void {
		const buttonText = this.getCurrentPart().buttonText;

		const ctaButtonHtml = buttonText
			? `
        <div>
            <button id="custom-cta-button" class="bg-white hover:bg-baby-blue text-primary hover:text-gray-100 font-semibold py-2 px-4 my-4 border border-gray-400 rounded shadow hover:border-baby-blue w-fit transition ease-in-out duration-300">
            ${buttonText}
            </button>
        </div>
    `
			: "";

		const headerElement = document.querySelector("#header");
		if (headerElement) {
			headerElement.innerHTML = `
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
				<p id="current-part-title">
					${this.getCurrentPart().title}
				</p>
			</div>
		</nav>
		`;
		}

		const mainElement = document.querySelector<HTMLDivElement>("#app");
		if (mainElement) {
			mainElement.innerHTML = `
					<section id="top-section" class="mt-10">
						<h1 class="text-center"></h1>
							<div class="w-124 mx-auto">
											<img src="" alt="">
							</div>
					</section>  

					<section id="middle-section" class="flex flex-col items-center">
						<div class="flex flex-row gap-4 items-center px-4">
							<div id="content-nav-left" class="flex justify-around mt-4">
								<button id="backward" class="text-[32px] cursor-pointer text-baby-blue transition ease-in-out delay-50 hover:text-lapis-lazuli hover:-translate-y-1 hover:scale-110 duration-300">
									<i class="fa-solid fa-chevron-left" aria-hidden="false" role="img" aria-label="Go forward"></i>
								</button>
							</div>

							<div id="content-display" class=""></div>

							<div id="content-nav-right" class="flex justify-around mt-4">
								<button id="forward" class="text-[32px] cursor-pointer text-baby-blue transition ease-in-out delay-50 hover:text-lapis-lazuli hover:-translate-y-1 hover:scale-110 duration-300">
									<i class="fa-solid fa-chevron-right" aria-hidden="false" role="img" aria-label="Go forward"></i>
								</button>
							</div>
						</div>
						${ctaButtonHtml}
					</section>
					
					<section id="bottom-section" class="flex justify-center class="mb-4">
						<div id="tut-nav" class="inline-flex gap-2" style="" class="">
							<button id="prev" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"> 
							</button>
							<button id="next" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
							</button>
						</div>
					</section>
            `;
		}
	}

	getTutorialParts(): TutorialPart[] {
		return this.tutorialParts;
	}

	getCurrentPart(): TutorialPart {
		return this.tutorialParts[this.currentPartIndex];
	}

	getCurrentPartIndex(): number {
		return this.currentPartIndex;
	}

	getPrevPart(): TutorialPart | null {
		if (this.currentPartIndex > 0) {
			return this.tutorialParts[this.currentPartIndex - 1];
		}
		return null;
	}

	getNextPart(): TutorialPart | null {
		if (this.currentPartIndex < this.tutorialParts.length - 1) {
			return this.tutorialParts[this.currentPartIndex + 1];
		}
		return null;
	}

	getPartContentIndex(): number {
		return this.contentItemIndex;
	}

	setNextPart(): TutorialPart {
		if (this.currentPartIndex < this.tutorialParts.length - 1) {
			this.currentPartIndex++;
			this.contentItemIndex = 0;
			this.updatePartNavigationButtonLabels();
		}
		return this.getCurrentPart();
	}

	setPrevPart(): TutorialPart {
		if (this.currentPartIndex > 0) {
			this.currentPartIndex--;
			const newCurrentPart = this.getCurrentPart();
			this.contentItemIndex = newCurrentPart.contentText.length - 1;
			this.updatePartNavigationButtonLabels();
		}
		return this.getCurrentPart();
	}

	setNextPartContentIndex(): number {
		const currentPart = this.getCurrentPart();
		console.log(
			"Current contentItemIndex before increment:",
			this.contentItemIndex
		);
		if (this.contentItemIndex < currentPart.contentText.length - 1) {
			this.contentItemIndex++;
			console.log("Incremented contentItemIndex:", this.contentItemIndex);
			this.updateContentNavigationButtons();
		}
		return this.contentItemIndex;
	}

	setPrevPartContentIndex(): number {
		if (this.contentItemIndex > 0) {
			this.contentItemIndex--;
		}
		return this.contentItemIndex;
	}

	private renderCurrentPart(): void {
		const currentPart = this.getCurrentPart();
		this.updateHeaderAndImage(currentPart);
		this.updateCurrentPartTitle();
		this.updateContentItem(currentPart);
		this.updateContentNavigationButtons();
		this.updateTutorialNavigationButtons();
	}

	private updateHeaderAndImage(currentPart: TutorialPart): void {
		const headerElement =
			document.querySelector<HTMLHeadingElement>("#top-section h1");
		const imageElement =
			document.querySelector<HTMLImageElement>("#top-section img");

		if (headerElement) {
			if (currentPart.headerText) {
				headerElement.textContent = currentPart.headerText;
				headerElement.style.display = "block";
			} else {
				headerElement.textContent = "";
				headerElement.style.display = "none";
			}
		} else {
			console.warn("Header element not found!");
		}

		if (imageElement) {
			if (currentPart.headerImage) {
				imageElement.src = currentPart.headerImage;
				imageElement.alt = currentPart.title || "Default Alt Text";
				imageElement.style.display = "block";
			} else {
				imageElement.src = "";
				imageElement.alt = "";
				imageElement.style.display = "none";
			}
		} else {
			console.warn("Image element not found!");
		}
	}

	private updateCurrentPartTitle(): void {
		const titleElement = document.querySelector("#current-part-title");
		if (titleElement) {
			const currentPartTitle = this.getCurrentPart().title;
			titleElement.textContent = currentPartTitle;
		} else {
			console.error("Title element not found in the document.");
		}
	}

	private updateContentItem(currentPart: TutorialPart): void {
		const contentDiv =
			document.querySelector<HTMLDivElement>("#content-display");
		if (contentDiv) {
			contentDiv.className = currentPart.contentClass;
			contentDiv.innerHTML =
				currentPart.contentText[this.contentItemIndex].content;
		}
	}

	updateContentNavigationButtons(): void {
		const backButton = document.querySelector<HTMLButtonElement>("#backward");
		if (backButton) {
			backButton.style.display = this.contentItemIndex > 0 ? "block" : "none";
		}

		const forwardButton = document.querySelector<HTMLButtonElement>("#forward");
		if (forwardButton) {
			forwardButton.style.display =
				this.contentItemIndex < this.getCurrentPart().contentText.length - 1
					? "block"
					: "none";
		}
	}

	private updateTutorialNavigationButtons(): void {
		const prevButton = document.querySelector<HTMLButtonElement>("#prev");
		const nextButton = document.querySelector<HTMLButtonElement>("#next");
		const customButton =
			document.querySelector<HTMLButtonElement>("#custom-cta-button");

		const isFirstPart = this.currentPartIndex === 0;
		const isLastPart = this.currentPartIndex === this.tutorialParts.length - 1;
		const isLastContentItem =
			this.contentItemIndex === this.getCurrentPart().contentText.length - 1;

		if (prevButton) {
			prevButton.style.display = !isFirstPart ? "block" : "none";
		}

		if (nextButton) {
			nextButton.style.display =
				isLastContentItem && !isLastPart && !isFirstPart ? "block" : "none";
		}

		if (customButton) {
			customButton.style.display =
				isLastContentItem && isFirstPart ? "block" : "none";
		}
	}

	private updatePartNavigationButtonLabels(): void {
		const prevButton = document.getElementById("prev");
		const nextButton = document.getElementById("next");

		const prevPart = this.getPrevPart();
		const nextPart = this.getNextPart();

		if (prevButton) {
			prevButton.textContent = prevPart
				? `Back to ${prevPart.title}`
				: "No Previous Part";
		}

		if (nextButton) {
			nextButton.textContent = nextPart
				? `Go to ${nextPart.title}`
				: "No Next Part";
		}
	}

	public navigateContentForward(): void {
		this.setNextPartContentIndex();
		this.renderCurrentPart();
		this.updateContentNavigationButtons();
	}

	public navigateContentBackward(): void {
		this.setPrevPartContentIndex();
		this.renderCurrentPart();
		this.updateContentNavigationButtons();
	}

	public navigateToNextPart(): void {
		this.setNextPart();
		this.renderCurrentPart();
		this.updateContentNavigationButtons();
	}

	public navigateToPrevPart(): void {
		this.setPrevPart();
		this.renderCurrentPart();
		this.updateContentNavigationButtons();
	}

	public renderMainLayout(): void {
		this.renderCurrentPart();
	}
}
