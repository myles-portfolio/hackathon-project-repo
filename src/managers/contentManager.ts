interface ContentItem {
	content: string;
}

export class ContentManager {
	private contentItems: ContentItem[];
	private currentIndex: number = 0;
	private contentElementId: string;

	constructor(contentItems: ContentItem[], contentElementId: string) {
		this.contentItems = contentItems;
		this.contentElementId = contentElementId;
		this.renderCurrentContent();
	}

	goToNextContent(): void {
		if (this.currentIndex < this.contentItems.length - 1) {
			this.fadeContent(() => {
				this.currentIndex++;
				this.renderCurrentContent();
			});
		}
	}

	goToPrevContent(): void {
		if (this.currentIndex > 0) {
			this.fadeContent(() => {
				this.currentIndex--;
				this.renderCurrentContent();
			});
		}
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

	private renderCurrentContent(): void {
		const contentElement = document.getElementById(this.contentElementId);
		if (contentElement) {
			contentElement.innerHTML = this.contentItems[this.currentIndex].content;
			this.updateContentVisibility("backward", "forward", "cta-button");
		}
	}

	public updateContentVisibility(
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
}
