class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <ul>
                <li><a href="https://indonesia-covid-19.mathdro.id/api/provinsi/" target="_blank">Api</a></li>
                <li><a href="https://undraw.co/" target="_blank">Illustration</a></li>
                <li><a href="https://fontawesome.com/" target="_blank">Icon</a></li>
            </ul>
            <span>&copy; 2021 Covid19info<br>Mardini</span>
        </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);