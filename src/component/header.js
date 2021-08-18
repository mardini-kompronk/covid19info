import medicalResearch from '../asset/medical-research.svg';

class AppHeader extends HTMLElement {
    connectedCallback() {
        this.render();
        this.scrollToEl();
    }

    render() {
        this.innerHTML = `
        <header>
            <nav>
                <div class="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                        <path
                            d="M483.55 227.55H462c-50.68 0-76.07-61.27-40.23-97.11L437 115.19A28.44 28.44 0 0 0 396.8 75l-15.24 15.22c-35.84 35.83-97.11 10.45-97.11-40.23V28.44a28.45 28.45 0 0 0-56.9 0V50c0 50.68-61.27 76.06-97.11 40.23L115.2 75A28.44 28.44 0 0 0 75 115.19l15.25 15.25c35.84 35.84 10.45 97.11-40.23 97.11H28.45a28.45 28.45 0 1 0 0 56.89H50c50.68 0 76.07 61.28 40.23 97.12L75 396.8a28.45 28.45 0 0 0 40.2 40.2l15.24-15.25c35.84-35.84 97.11-10.45 97.11 40.23v21.54a28.45 28.45 0 0 0 56.9 0V462c0-50.68 61.27-76.07 97.11-40.23L396.8 437a28.45 28.45 0 0 0 40.2-40.2l-15.25-15.24c-35.84-35.84-10.45-97.12 40.23-97.12h21.54a28.45 28.45 0 1 0 0-56.89zM224 272a48 48 0 1 1 48-48a48 48 0 0 1-48 48zm80 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24z" />
                    </svg>
                    <span>Covid19info</span>
                </div>
            </nav>
            <section class="hero-section">
                <div class="hero-text">
                    <h1>Melihat informasi covid 19 di berbagai provinsi
                        di seluruh indonesia
                    </h1>
                    <button class="hero-btn">Mulai</button>
                </div>
                <img class="hero-img" src="${medicalResearch}" alt="medical-research">
            </section>
        </header>
        `;

    }

    // function scroll to element main
    scrollToEl() {
        const heroBtn = document.querySelector('.hero-btn');
        heroBtn.addEventListener('click', () => {
            const el = document.querySelector('main');
            el.scrollIntoView({ behavior: 'smooth' });
        })
    }
}

customElements.define('app-header', AppHeader);
