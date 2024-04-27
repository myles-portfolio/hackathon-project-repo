export interface ContentItem {
	content: string;
}
export interface TutorialPart {
	id: string;
	title: string;
	contentText: ContentItem[];
	contentClass: string;
	buttonText?: string;
	shouldTutNavShow: boolean;
	headerText?: string;
	headerImage?: string;
}
