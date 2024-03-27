import { ContentItem } from "../components/tutorial/parts/tutorial-parts";
import { eventEmitter } from "../lib/EventEmitter";

export class ContentManager {
	private contentItems: ContentItem[];
	private currentIndex: number = 0;
	private contentElementId: string;
	private shouldTutNavShow: boolean;

	constructor(
		contentItems: ContentItem[],
		contentElementId: string,
		shouldTutNavShow: boolean,
		initialContentIndex: number = 0
	) {
		this.contentItems = contentItems;
		this.contentElementId = contentElementId;
		this.shouldTutNavShow = shouldTutNavShow;
		this.currentIndex = initialContentIndex;
		this.setCurrentContent();
	}

	public getCurrentContentIndex(): number {
		return this.currentIndex;
	}

	public setCurrentContentIndex(index: number): void {
		const savedProgress = localStorage.getItem("contentPartProgress");
		if (savedProgress) {
			const { contentIndex } = JSON.parse(savedProgress);
			index = contentIndex;
		}

		if (index >= 0 && index < this.contentItems.length) {
			this.currentIndex = index;
			this.setCurrentContent(this.currentIndex);
		} else {
			console.warn("Attempted to set an invalid content index:", index);
		}
	}

	public setCurrentContent(index?: number): void {
		if (index !== undefined && index >= 0 && index < this.contentItems.length) {
			this.currentIndex = index;
		}

		if (
			this.currentIndex >= 0 &&
			this.currentIndex < this.contentItems.length
		) {
			const contentElement = document.getElementById(this.contentElementId);
			if (contentElement) {
				this.fadeContent(() => {
					contentElement.innerHTML =
						this.contentItems[this.currentIndex].content;
					this.updateContentNavigationVisibility(
						"backward",
						"forward",
						"cta-button"
					);
					this.updatePartNavigationVisibility("tut-nav");
				});
			}
			this.saveContentProgress(this.currentIndex);
			eventEmitter.emit("contentChanged", this.getCurrentContentIndex());
		} else {
			console.error(
				"ContentManager: Current index out of bounds or contentItems is empty."
			);
		}
	}

	public setNextContent(): void {
		const newIndex = this.currentIndex + 1;
		this.setCurrentContent(newIndex);
		this.saveContentProgress(newIndex);
		console.log(`Emitting contentChanged event with newIndex: ${newIndex}`);
		eventEmitter.emit("contentChanged", newIndex);
	}

	public setPrevContent(): void {
		const newIndex = this.currentIndex - 1;
		this.setCurrentContent(newIndex);
		this.saveContentProgress(newIndex);
		console.log(`Emitting contentChanged event with newIndex: ${newIndex}`);
		eventEmitter.emit("contentChanged", newIndex);
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

	public saveContentProgress(index: number) {
		const progress = { contentIndex: index };
		localStorage.setItem("contentPartProgress", JSON.stringify(progress));
		console.log("Content progress saved:", progress);
	}

	public loadContentProgress(): void {
		const savedProgress = localStorage.getItem("contentPartProgress");
		if (savedProgress) {
			const { contentIndex } = JSON.parse(savedProgress);
			this.setCurrentContentIndex(contentIndex);
		}
	}
}
