import { ContentItem } from "../components/tutorial/parts/tutorial-parts";

export class ContentManager {
	private contentItems: ContentItem[];
	private currentIndex: number = 0;
	private contentElementId: string;
	private shouldTutNavShow: boolean;

	constructor(
		contentItems: ContentItem[],
		contentElementId: string,
		shouldTutNavShow: boolean
	) {
		this.contentItems = contentItems;
		this.contentElementId = contentElementId;
		this.shouldTutNavShow = shouldTutNavShow;
		this.renderCurrentContent();
	}

	public renderCurrentContent(): void {
		const contentElement = document.getElementById(this.contentElementId);

		if (contentElement && this.contentItems.length > 0) {
			contentElement.innerHTML = this.contentItems[this.currentIndex].content;
		}
		this.updateContentNavigationVisibility("backward", "forward", "cta-button");
		this.updatePartNavigationVisibility("tut-nav");
	}

	public goToNextContent(): void {
		if (this.currentIndex < this.contentItems.length - 1) {
			this.fadeContent(() => {
				this.currentIndex++;
				this.renderCurrentContent();
			});
		}
	}

	public goToPrevContent(): void {
		if (this.currentIndex > 0) {
			this.fadeContent(() => {
				this.currentIndex--;
				this.renderCurrentContent();
			});
		}
	}

	public updateContent(newContent: ContentItem[]): void {
		this.contentItems = newContent;
		this.currentIndex = 0;
		this.renderCurrentContent();
	}

	public isLastContent(): boolean {
		return this.currentIndex === this.contentItems.length - 1;
	}

	private fadeContent(updateFunction: () => void): void {
		const contentElement = document.getElementById(this.contentElementId);
		if (contentElement) {
			contentElement.style.opacity = "0";
			setTimeout(() => {
				updateFunction();
				contentElement.style.opacity = "1";
			}, 200);
		}
	}

	public updateContentNavigationVisibility(
		backwardElementId: string,
		forwardElementId: string,
		ctaButtonId: string
	): void {
		const backwardElement = document.getElementById(backwardElementId);
		const forwardElement = document.getElementById(forwardElementId);
		const ctaButton = document.getElementById(ctaButtonId);

		if (backwardElement) {
			backwardElement.style.display = this.currentIndex > 0 ? "block" : "none";
		}

		if (forwardElement) {
			forwardElement.style.display =
				this.currentIndex < this.contentItems.length - 1 ? "block" : "none";
		}

		if (ctaButton) {
			ctaButton.style.display =
				this.currentIndex === this.contentItems.length - 1 ? "block" : "none";
		}
	}

	public updatePartNavigationVisibility(tutNavId: string): void {
		const tutNav = document.getElementById(tutNavId);
		if (tutNav) {
			const isAtLastContent =
				this.currentIndex === this.contentItems.length - 1;
			tutNav.style.display =
				this.shouldTutNavShow && isAtLastContent ? "flex" : "none";
		}
	}
}
