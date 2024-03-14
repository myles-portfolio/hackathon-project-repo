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

	private setContentManager() {
		const currentPart = this.getCurrentPart();
		this.contentManager = new ContentManager(
			currentPart.content,
			currentPart.id,
			currentPart.shouldTutNavShow
		);

		this.contentManager.renderCurrentContent();
	}

	public loadNext() {
		if (this.currentPartIndex < this.tutorialParts.length - 1) {
			this.currentPartIndex++;
			this.updateTutorial();
		}
	}

	public loadPrev() {
		if (this.currentPartIndex > 0) {
			this.currentPartIndex--;
			this.updateTutorial();
		}
	}

	public loadSpecific(index: number) {
		if (index >= 0 && index < this.tutorialParts.length) {
			this.currentPartIndex = index;
			this.updateTutorial();
		}
	}

	private updateTutorial() {
		this.setContentManager();
		this.updateAppHeader();
		this.updateAppContent();
		this.updateButtonStates();
	}

	private updateAppHeader() {
		const currentPart = this.getCurrentPart();

		initializeAppHeader(currentPart.title || "");
	}

	private updateAppContent() {
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

			this.contentManager.updateContent(currentPart.content);

			initializeTutorialPartFooter(this, currentPart.shouldTutNavShow);
		}
	}

	private updateButtonStates() {
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
}
