let productsEl = document.querySelector('.products')

//anvend fetch til at hente data fra lokal JSON fil.
fetch("./assets/js/watchesJson.json")
    .then(res => res.json())
    .then((data) => {
        renderArticles(data.watches);
    })
    .catch(err => console.log('Der er sket en fejl', err))

    function renderArticles(watches) {
        console.log(watches);
        watches.forEach(watch => {
          productsEl.innerHTML += `<article class="product">
            <h3 class="product-title">${watch.name}</h3>
            <img src="./assets/img/${watch.imgUrl}" alt=${watch.name} />
            <p class="product-description">
              ${watch.description}
            </p>
            <p class="product-price">${watch.price} kr</p>
          </article>`;
        });
      

        //skab ny knap
        //skab ny i med classes
        //tilføj event listener med forEach til alle knapperne
        //append i til ny knap, og ny knap til article. 
        let articles = productsEl.querySelectorAll('article');
        articles.forEach(article => {
          let newBtn = document.createElement('button');
          let newI = document.createElement('i');

          newI.classList.add('fa-solid');
          newI.classList.add('fa-cart-plus');
          newBtn.textContent = 'Tilføj til kurv';

          newBtn.addEventListener('click', () => {
            alert('Du har tilføjet det her ur til kurven.');
          });
          newBtn.append(newI); 
          article.append(newBtn);
        });
      }
      