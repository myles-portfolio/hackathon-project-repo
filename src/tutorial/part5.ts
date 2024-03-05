import "../style.css";
import { goToPrev, goToNext } from "../managers/tutorialManager";

export const loadPartFive = () => {
	document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="grid h-screen place-items-center container">
        <h1>SDLC Tutorial: Part 5 - </h1>
        <p>
        Lorum ipsum dolor et
        </p>
        <div class="inline-flex">
        <button id="prev" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Prev
        </button>
        <button id="next" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Next
        </button>
        </div>
    </div>
    `;

	const prevButton = document.getElementById("prev");
	const nextButton = document.getElementById("next");

	if (prevButton) {
		prevButton.addEventListener("click", goToPrev);
	}
	if (nextButton) {
		nextButton.addEventListener("click", goToNext);
	}
};
