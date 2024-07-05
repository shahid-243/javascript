{/* <div class="col-3 mt-5">
            <div class="card">
                <img src="https://placehold.co/600x400/png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div> */}

class Countries {
    countries = [];

    grtCountries = async () => {
        let response = await fetch("https://restcountries.com/v3.1/all")
        this.countries = await response.json();
    }

    render = async () => {
        await this.grtCountries();
        for (const country of this.countries) {
            console.log(country);

            // create parent div
            const parentDiv = document.createElement("div");
            parentDiv.className = "col-3 mt-5";

            //create the card 
            const card = document.createElement('div');
            card.className = "card";

            // image
            const image = document.createElement("img");
            image.className = "card-img-top";
            image.src = country.flags.svg
            image.style.height = '200px';
            image.alt = country.flags.alt

            // card body
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            // apend to card image 
            card.append(image)
            card.append(cardBody)

            // h5  add text to card body
            const h5 = document.createElement('h5');
            h5.className = "card-title text-center";
            h5.innerText = country.name.common;

            // append to card body
            cardBody.append(h5);
            // append to parent div
            parentDiv.append(card);

            // apend to root
            root.append(parentDiv);

        }
    }
}

let country = new Countries;
country.render()