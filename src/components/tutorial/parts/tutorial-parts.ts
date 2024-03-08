import { introContent } from "../content/introContent";
import { welcomeContent } from "../content/welcomeContent";

export interface ContentItem {
	content: string;
}
export interface TutorialPart {
	id: string;
	title: string;
	content: ContentItem[];
	contentClass: string;
	buttonText: string;
	shouldTutNavShow: boolean;
}

export const tutorialParts: TutorialPart[] = [
	{
		id: "welcome",
		title: "Welcome",
		content: welcomeContent,
		contentClass: "text-justify",
		buttonText: "Start Learning",
		shouldTutNavShow: false,
	},
	{
		id: "intro",
		title: "Introduction",
		content: introContent,
		contentClass: "text-left",
		buttonText: "",
		shouldTutNavShow: true,
	},
];
