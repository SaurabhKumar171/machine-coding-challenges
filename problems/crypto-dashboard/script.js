let cryptoData = null;

const getCrypto = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  const json = await response.json();
  cryptoData = json;

  const dataContainer = document.querySelector(".data-container");

  cryptoData.map((data) => {
    let cryptoCard = document.createElement("div");
    cryptoCard.classList.add("crypto-card");

    let cardSubContainer = document.createElement("div");
    let pic = document.createElement("img");
    let para = document.createElement("p");
    let alias = document.createElement("p");
    let athValue = document.createElement("p");
    let athChangePercentage = document.createElement("p");

    let topSpan = document.createElement("span");
    let bottomSpan = document.createElement("span");

    pic.src = data?.image;
    para.textContent = data?.id;
    alias.textContent = data?.symbol;
    athValue.textContent = data?.ath;
    athChangePercentage.textContent = data?.ath_change_percentage + "%";

    pic.style.cssText = `
        width:5rem;
        height:5rem;
    `;

    topSpan.appendChild(para);
    topSpan.appendChild(athValue);
    bottomSpan.appendChild(alias);
    bottomSpan.appendChild(athChangePercentage);

    topSpan.classList.add("top-span");
    bottomSpan.classList.add("bottom-span");

    cardSubContainer.appendChild(topSpan);
    cardSubContainer.appendChild(bottomSpan);

    cryptoCard.appendChild(pic);
    cryptoCard.appendChild(cardSubContainer);

    dataContainer.appendChild(cryptoCard);
  });
};

getCrypto();
