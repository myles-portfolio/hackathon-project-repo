import { setupTutorialPart } from "../app";
import { introContent } from "./content/introContent";

export const loadIntro = setupTutorialPart(
	"intro",
	introContent,
	"text-left",
	"",
	false
);
