import axios from 'axios'
import url from './api'

class AppMain extends HTMLElement {
    connectedCallback() {
        this.render()
        this.getData()
        this.searchData()
    }

    render() {
        this.innerHTML = `
        <main>
            <div class="card">
               <div>
                    <input type="text" name="input" id="input" placeholder="Cari provinsi">
                    <button type="button" id="cari">Cari</button>
                </div>
                <p>Nama provinsi : <strong id="provinsi"></strong></p><br>
                <p>Positif : <strong id="positif"></strong></p><br>
                <p>Meninggal : <strong id="meninggal"></strong></p><br>
                <p>Sembuh : <strong id="sembuh"></strong></p>
            </div>
        </main>
    `;
    }

    // get data from api
    getData() {
        axios.get(url)
            .then(res => {
                const data = res.data.data;
                // filter data
                const input = document.getElementById('input').value;
                const matchInput = new RegExp(input, 'gmi')
                const filteredData = data.filter(d => d.provinsi.match(matchInput));


                const provinsi = document.getElementById('provinsi');
                const positif = document.getElementById('positif');
                const meninggal = document.getElementById('meninggal');
                const sembuh = document.getElementById('sembuh');

                // if data not found
                if (filteredData.length === 0) {
                    provinsi.innerText = 'tidak ditemukan';
                    positif.innerText = 0;
                    meninggal.innerText = 0;
                    sembuh.innerText = 0;
                }

                //add number with dot
                const numWithDot = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                // insert data to Html
                provinsi.innerText = filteredData[0].provinsi
                positif.innerText = numWithDot(filteredData[0].kasusPosi);
                meninggal.innerText = numWithDot(filteredData[0].kasusMeni);
                sembuh.innerText = numWithDot(filteredData[0].kasusSemb);
            })
            .catch(e => console.log(e))
    }

    // search data
    searchData() {
        const searchBtn = document.getElementById('cari');
        searchBtn.addEventListener('click', this.getData)
    }
}

customElements.define('app-main', AppMain);