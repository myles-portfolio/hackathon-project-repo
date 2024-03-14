import { conclusionContent } from "../content/conclusionContent";
import { introContent } from "../content/introContent";
import { partFiveContent } from "../content/partFiveContent";
import { partFourContent } from "../content/partFourContent";
import { partOneContent } from "../content/partOneContent";
import { partThreeContent } from "../content/partThreeContent";
import { partTwoContent } from "../content/partTwoContent";
import { welcomeContent } from "../content/welcomeContent";

export interface ContentItem {
	content: string;
}
export interface TutorialPart {
	id: string;
	title: string;
	content: ContentItem[];
	contentClass: string;
	buttonText?: string;
	shouldTutNavShow: boolean;
	headerText?: string;
	headerImage?: string;
}

export const tutorialParts: TutorialPart[] = [
	{
		id: "welcome",
		title: "Welcome",
		content: welcomeContent,
		contentClass: "text-justify",
		buttonText: "Start Learning",
		shouldTutNavShow: false,
		headerText: "A Beginner-Friendly Software Development Lifecycle Tutorial",
		headerImage: "/website-interface.svg",
	},
	{
		id: "intro",
		title: "Introduction",
		content: introContent,
		contentClass: "text-left",
		shouldTutNavShow: true,
	},
	{
		id: "part-one",
		title: "Part 1: The Foundation of Software Projects",
		content: partOneContent,
		contentClass: "text-left",
		shouldTutNavShow: true,
		headerImage: "/interface-research.svg",
	},
	{
		id: "part-two",
		title: "Part 2: Laying the Groundwork for Software Projects",
		content: partTwoContent,
		contentClass: "text-left",
		shouldTutNavShow: true,
		headerImage: "/building-website.svg",
	},
	{
		id: "part-three",
		title: "Part 3:",
		content: partThreeContent,
		contentClass: "text-left",
		shouldTutNavShow: true,
	},
	{
		id: "part-four",
		title: "Part 4:",
		content: partFourContent,
		contentClass: "text-left",
		shouldTutNavShow: true,
	},
	{
		id: "part-five",
		title: "Part 5:",
		content: partFiveContent,
		contentClass: "text-left",
		shouldTutNavShow: true,
	},
	{
		id: "conclusion",
		title: "Conclusion",
		content: conclusionContent,
		contentClass: "text-left",
		shouldTutNavShow: false,
	},
];
