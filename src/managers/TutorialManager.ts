import {
	initializeTutorialPartContent,
	initializeTutorialPartFooter,
	initializeTutorialPartHeader,
} from "../components/ui/main";
import { TutorialPart } from "../components/tutorial/parts/tutorial-parts";
import { initializeAppHeader } from "../components/ui/header";
import { ContentManager } from "./ContentManager";

export class TutorialManager {
	private currentPartIndex: number = 0;
	private tutorialParts: TutorialPart[];
	private contentManager: ContentManager | null = null;

	constructor(tutorialPart: TutorialPart[]) {
		this.tutorialParts = tutorialPart;
		this.currentPartIndex = 0;
		this.setContentManager();
	}

	public getCurrentPart(): TutorialPart {
		return this.tutorialParts[this.currentPartIndex];
	}

	public getCurrentContentManager(): ContentManager | null {
		return this.contentManager;
	}

	public getCurrentPartIndex(): number {
		return this.currentPartIndex;
	}

	public getTutorialParts(): TutorialPart[] {
		return this.tutorialParts;
	}

	public setCurrentPartIndex(index: number): void {
		if (index >= 0 && index < this.tutorialParts.length) {
			this.currentPartIndex = index;
		} else {
			console.warn("Attempted to set an invalid part index:", index);
		}
	}

	private setContentManager(contentIndex?: number) {
		const currentPart = this.getCurrentPart();
		if (currentPart && currentPart.content) {
			this.contentManager = new ContentManager(
				currentPart.content,
				currentPart.id,
				currentPart.shouldTutNavShow,
				contentIndex
			);
			if (contentIndex !== undefined) {
				this.contentManager.setCurrentContentIndex(contentIndex);
			}
			this.contentManager.setCurrentContent();
		} else {
			console.error(
				"setContentManager: currentPart or its content is undefined."
			);
		}
	}

	public navigateToPart(index: number | "next" | "prev"): void {
		let newIndex: number | null = null;

		if (
			index === "next" &&
			this.currentPartIndex < this.tutorialParts.length - 1
		) {
			newIndex = this.currentPartIndex + 1;
		} else if (index === "prev" && this.currentPartIndex > 0) {
			newIndex = this.currentPartIndex - 1;
		} else if (
			typeof index === "number" &&
			index >= 0 &&
			index < this.tutorialParts.length
		) {
			newIndex = index;
		}

		if (newIndex !== null) {
			this.currentPartIndex = newIndex;
			this.saveTutorialPartProgress();
			this.updateTutorial();
		}
	}

	private updateTutorial() {
		this.setContentManager();
		this.setAppHeader();
		this.setAppContent();
		this.setButtonStates();
	}

	private setAppHeader() {
		const currentPart = this.getCurrentPart();

		initializeAppHeader(currentPart.title || "");
	}

	private setAppContent() {
		const currentPart = this.getCurrentPart();

		if (currentPart && this.contentManager) {
			initializeTutorialPartHeader(currentPart);
			initializeTutorialPartContent(
				currentPart.id,
				currentPart.content,
				currentPart.contentClass,
				currentPart.buttonText,
				currentPart.shouldTutNavShow,
				this,
				this.contentManager
			);

			initializeTutorialPartFooter(this, currentPart.shouldTutNavShow);
		}
	}

	private setButtonStates() {
		const prevButton = document.getElementById(
			"prev"
		) as HTMLButtonElement | null;
		const nextButton = document.getElementById(
			"next"
		) as HTMLButtonElement | null;

		if (prevButton) prevButton.disabled = this.currentPartIndex === 0;
		if (nextButton)
			nextButton.disabled =
				this.currentPartIndex === this.tutorialParts.length - 1;
		if (this.contentManager) {
			this.contentManager.updatePartNavigationVisibility("tut-nav");
		}
	}

	private saveTutorialPartProgress() {
		const partIndex = this.getCurrentPartIndex();

		const progress = {
			partIndex: partIndex,
		};

		localStorage.setItem("tutorialPartProgress", JSON.stringify(progress));
	}
}
