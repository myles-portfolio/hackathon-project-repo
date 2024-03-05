import "../style.css";
import { goToPrev, goToNext } from "../managers/tutorialManager";

export const loadConclusion = () => {
	document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="grid h-screen place-items-center container">
        <h1>Congratulations!🎉</h1>
        <p>
        Lorum ipsum dolor et
        </p>
        <div class="inline-flex">
        <button id="next" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Finish
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
