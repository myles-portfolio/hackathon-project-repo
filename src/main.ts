import "./style.css";
import { loadCurrentPart } from "./tutorialManager";

const setupTutorialStart = () => {
	document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="grid h-screen place-items-center container">
        <h1>Software Development Lifecycle Tutorial</h1>
        <div class="w-96">
            <img src="/website-interface.svg">
        </div>
        <p>
            Lorum ipsum dolor et
        </p>
        <button id="startLearning" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Start Learning
        </button>
    </div>
    `;

	document
		.getElementById("startLearning")!
		.addEventListener("click", loadCurrentPart);
};

// When the DOM is fully loaded, call setupTutorialStart to set up the initial view.
document.addEventListener("DOMContentLoaded", () => {
	setupTutorialStart();
});
