const container = document.querySelector('.cards')
const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { firstName, lastName, image, email, id } = person
      return `<div class="card" data-id="${id}">
        <div class="card-img-container">
            <img class="card-img"  src="${image}" alt="${firstName} ${lastName}">
        </div>
            <div class="card-info">
                <h4>${firstName} ${lastName}</h4>           
                <p>${email}</p>
            </div>
          </div>`
    })
    .join('')
  container.innerHTML = newFollowers
}

export default display
