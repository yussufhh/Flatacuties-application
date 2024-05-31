
    const catButtonsContainer = document.getElementById('cat-buttons');
    const catDetailsContainer = document.getElementById('cat-details');

    fetch('db.json')
        .then(response => response.json())
        .then(catData => {

            catData.forEach( cat => {
                const button = document.createElement('button');
                button.textContent = cat.name;
                button.classList.add('btn', 'btn-dark', 'm-2');
                button.addEventListener('click', () => {
                    const detailsHTML = `
                        <h2>${cat.name}</h2>
                        <img src="${cat.image}" alt="${cat.name}">
                        <p>${cat.description}</p>
                        <button onclick="voteForCat('${cat.name}')">Vote for the ${cat.name}</button>
                    `
                    catDetailsContainer.innerHTML = detailsHTML;
                    catDetailsContainer.style.display = 'block';
                });
                catButtonsContainer.appendChild(button);
            });
        })
        .catch(error => console.error('Error fetching cat data:', error));


// Function to vote for an animal
function voteForCat(catName) {
    alert(` ${catName} has received one vote from moon lover as the cutest animal!`);
}
