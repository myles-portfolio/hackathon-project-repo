import "../styles.css";

const subheaderElement = document.querySelector<HTMLDivElement>("#sub-header");
if (subheaderElement) {
	subheaderElement.innerHTML = `
  <div class="flex justify-end px-8">
    <button id="theme-toggle" class="bg-white hover:bg-baby-blue text-primary hover:text-gray-100 font-semibold py-2 px-4 my-4 border border-gray-400 rounded shadow hover:border-baby-blue w-fit transition ease-in-out duration-300">Toggle Theme</button>
  </div>
  `;
}
