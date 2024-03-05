import "./style.css";
import { loadCurrentPart } from "./managers/tutorialManager";
import { welcomeContent } from "./content/welcomeContent";
import { ContentManager } from "./managers/contentManager";

const setupTutorialStart = () => {
	document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="flex flex-col container justify-center items-center">
        <h1>Software Development <br>Lifecycle Tutorial</h1>
        <div>
            <div class="w-124 mx-auto">
                <img src="/website-interface.svg">
            </div>
            <section class="flex flex-col justify-center items-center">
                <div class="flex gap-4 items-center">
                    <div id="backward" class="text-[32px] cursor-pointer text-baby-blue transition ease-in-out delay-50 hover:text-lapis-lazuli hover:-translate-y-1 hover:scale-110 duration-300">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div id="welcome" class="text-justify">
                    
                    </div>
                    <div id="forward" class="text-[32px] cursor-pointer text-baby-blue transition ease-in-out delay-50 hover:text-lapis-lazuli hover:-translate-y-1 hover:scale-110 duration-300">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div>
                    <button id="cta-button" class="bg-white hover:bg-baby-blue text-primary hover:text-gray-100 font-semibold py-2 px-4 my-4 border border-gray-400 rounded shadow hover:border-baby-blue w-fit transition ease-in-out duration-300">
                    Start Learning
                    </button>
                </div>
            </section>
        </div>
    </div>
    `;

	const welcomeManager = new ContentManager(welcomeContent, "welcome");

	document
		.getElementById("backward")
		?.addEventListener("click", () => welcomeManager.goToPrevContent());
	document
		.getElementById("forward")
		?.addEventListener("click", () => welcomeManager.goToNextContent());

	document
		.getElementById("cta-button")!
		.addEventListener("click", loadCurrentPart);
};

// When the DOM is fully loaded, call setupTutorialStart to set up the initial view.
document.addEventListener("DOMContentLoaded", () => {
	setupTutorialStart();
});
