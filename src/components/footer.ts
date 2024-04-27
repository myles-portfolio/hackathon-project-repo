import "../styles.css";

const footerElement = document.querySelector("#footer");
if (footerElement) {
	footerElement.innerHTML = `
    <div class="flex flex-col justify-center items-center">
      <p>This is the footer.</p>
    </div>
    `;
}
