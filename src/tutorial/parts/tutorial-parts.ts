import { introContent } from "../content/introContent";
import { welcomeContent } from "../content/welcomeContent";
import { TutorialPart } from "../managers/TutorialManager";

export const tutorialParts: TutorialPart[] = [
	{
		id: "welcome",
		content: welcomeContent,
		contentClass: "text-justify",
		buttonText: "Start Learning",
		shouldTutNavShow: false,
	},
	{
		id: "intro",
		content: introContent,
		contentClass: "text-left",
		buttonText: "",
		shouldTutNavShow: true,
	},
];
