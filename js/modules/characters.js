const characters = () => { 
    const renderCharacters = (data) => {
        const charactersCharacters = document.getElementById('charactersCharacters');

        data.forEach((element) => {
            const { id, name, status, species, type, gender,origin, location, image} = element;
            charactersCharacters.innerHTML += `
                <div class="col-md-4" key=${id}>
                    <div class="card bg-dark border border-2 border-light border-opacity-25 h-100 mx-auto" 
                        style="width: min(100%, 18rem);">
                        <div class="card-header text-center">
                            ${name}
                        </div>
                        <div class="card-body">
                            <img src="${image}" class="card-img-top" alt="comida" width="256" height="144"
                            style="width: 100%; height: 192px; object-fit: cover; border-radius: 0.9rem">
                            <h5 class="card-title mt-2">${name}</h5>
                            <h6 class="card-subtitle mb-2 text-secondary">${type || 'Tipo no registrado'}</h6>
                            <p class="card-text">
                                <span class="badge text-bg-success">${status}</span>                   
                                <span class="badge text-bg-primary">${species}</span>                           
                                <span class="badge text-bg-light">${gender}</span>                
                            </p>
                            <p class="card-text"><span class="fw-bold text-success">Origen:</span> ${origin.name}</p>
                            <p class="card-text"><span class="fw-bold text-success">Ubicacion:</span> ${location.name}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="${image}" class="btn bg-gradient shadow border-top" style="background-color: #58ea27; border-radius: 1rem" target=" _blank"
                                rel="noopener noreferrer">Descargar imagen</a>
                        </div> 
                    </div>
                </div>
        `;
        });
    };

    const fetchRead = async() => {   
        try {
            const {data} = await axios.get('https://rickandmortyapi.com/api/character?page=1');
            renderCharacters(data.results);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('fetchRead');
        }           
    };     

    fetchRead();
};

export default characters;

