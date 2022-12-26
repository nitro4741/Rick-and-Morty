const foods = () => { 
    const renderFoods = (data) => {
        const foodsFoods = document.getElementById('foodsFoods');

        data.forEach((element) => {
            const { id, name, description, urlImage, urlRecipe} = element;
            foodsFoods.innerHTML += `
                <div class="col-md-4" daat-key=${id}>
                    <div class="card bg-dark border border-2 border-light border-opacity-25 h-100 mx-auto"
                        style="width: min(100%, 18rem);">
                        <div class="card-header text-center">
                            ${name}
                        </div>
                        <div class="card-body">
                            <img src="${urlImage}" class="card-img-top" alt="comida" width="256" height="144"
                            style="width: 100%; height: 192px; object-fit: cover; border-radius: 0.9rem">
                            <p class="card-text mt-2">${description}</p>
                        </div>
                        <div class="card-footer text-muted text-center">
                            <a href="${urlRecipe}" class="btn btn-primary" target=" _blank"
                                rel="noopener noreferrer">Receta</a>
                        </div> 
                    </div>
                </div>
        `;
        });
    };

    const fetchRead = async() => {   
        const response = await fetch('../api/data.json')
        const data = await response.json();
        renderFoods(data);         
    };    
    fetchRead();
};

export default foods;

