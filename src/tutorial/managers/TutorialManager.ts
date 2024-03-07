import { ContentItem } from "../../types";

export interface TutorialPart {
	id: string;
	content: ContentItem[];
	contentClass: string;
	buttonText: string;
	shouldTutNavShow: boolean;
}

export class TutorialManager {
	static loadNext(): any {
		throw new Error("Method not implemented.");
	}
	static loadPrev(): any {
		throw new Error("Method not implemented.");
	}
	static getCurrentPart() {
		throw new Error("Method not implemented.");
	}
	private currentPartIndex: number = 0;
	private tutorialPart: TutorialPart[];

	constructor(tutorialPart: TutorialPart[]) {
		this.tutorialPart = tutorialPart;
	}

	public getCurrentPart(): TutorialPart {
		return this.tutorialPart[this.currentPartIndex];
	}

	public loadTutorialPart() {
		if (this.currentPartIndex < this.tutorialPart.length - 1) {
			this.currentPartIndex++;
			this.updateButtonStates();
		}
	}

	public loadNext() {
		if (this.currentPartIndex < this.tutorialPart.length - 1) {
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
				this.currentPartIndex === this.tutorialPart.length - 1;
	}
}
