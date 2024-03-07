import { ContentItem } from "./ContentManager";

export interface TutorialPart {
	id: string;
	content: ContentItem[];
	contentClass: string;
	buttonText: string;
	shouldTutNavShow: boolean;
}

export class TutorialManager {
	private currentPartIndex: number = 0;
	private tutorialParts: TutorialPart[];

	constructor(tutorialPart: TutorialPart[]) {
		this.tutorialParts = tutorialPart;
	}

	public getCurrentPart(): TutorialPart {
		return this.tutorialParts[this.currentPartIndex];
	}

	public async loadTutorialPart() {
		if (this.currentPartIndex < this.tutorialParts.length - 1) {
			this.currentPartIndex++;
			this.updateButtonStates();
		}
	}

	public loadNext() {
		if (this.currentPartIndex < this.tutorialParts.length - 1) {
			this.currentPartIndex++;
			this.loadTutorialPart();
			this.updateButtonStates();
		}
	}

	public loadPrev() {
		if (this.currentPartIndex > 0) {
			this.currentPartIndex--;
			this.loadTutorialPart();
			this.updateButtonStates();
		}
	}

	public async loadSpecific(index: number) {
		if (index >= 0 && index < this.tutorialParts.length) {
			this.currentPartIndex = index;
			await this.loadTutorialPart();
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
	}
}
