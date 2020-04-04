var modal = document.getElementById("myModal");
var detailButton = document.getElementsByClassName("kuAddtocartBtn");
var closeButton = document.getElementsByClassName("close")[0];
var klevuNarrowByLabel = document.getElementById("klevuNarrowByLabel");

/**
 * To add listeners to Vies Detail button
 * on each product
 * **/
function addListeners() {
    var links = document.querySelectorAll('.kuAddtocartBtn');
    for (i = 0; i < links.length; i++) {
        let currentLink = links[i];
        currentLink.addEventListener('click', showModal);
    }
}

/**
 * To add listeners to Swatch buttons
 * **/
function addMouseOverListeners() {
    var swatchLinks = document.getElementsByClassName("klevuSwatchLink");
    for (i = 0; i < swatchLinks.length; i++) {
        let currentSwatchLink = swatchLinks[i];
        currentSwatchLink.addEventListener('mouseover', showSwatch);
    }
}

/**
 * It shows modal with product details
 * @param e -> event
 **/
function showModal(e) {
    e.preventDefault();
    let product = e.target.closest('li')
    let productImg = product.querySelector('.klevuImgWrap img').getAttribute('src');
    let productName = product.querySelector('.kuNameWrap .kuName').textContent.trim();
    let productPrice = product.querySelector('.kuNameWrap .kuPrice .kuSalePrice').textContent.trim();

    let modalBody = modal.querySelector('.modal-body');
    modalBody.querySelector('.productImage img').setAttribute('src', productImg);
    modalBody.querySelector('.productDetails .productName').innerText = productName;
    modalBody.querySelector('.productDetails .productPrice').innerText = productPrice;
    modal.style.display = "block";
}

/**
 * Close modal
 **/
function closeModal() {
    modal.style.display = "none";
}

/**
 * Close modal on Window click
 **/
function windowOnClick(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/**
 * Show colour variants
 * on mouseover of swatches
 **/
function showSwatch(e) {
    e.preventDefault()
    let swatchColor = e.target.getAttribute('data-id')
    console.log('swatchColor', swatchColor)
    let product = e.target.closest('li')
    let productImg = e.target.closest('li').querySelector('.klevuImgWrap img');
    let productImgName = productImg.getAttribute('src').split('/');
    let productImgNameSplit = productImgName[productImgName.length - 1].split('.')
    productImgNameSplit = productImgNameSplit[0].split('-')
    let productImgNameSplitVariant = productImgNameSplit[0] + '-' + swatchColor;
    productImg.setAttribute('src', 'img/' + productImgNameSplitVariant + '.webp');
}

addListeners();
addMouseOverListeners();
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", windowOnClick);

/***************Toggle Filter Menu*************************/
/**
 * Show filter with
 * calculating height
 * to show smooth transitions
 **/
var show = function (elem) {
    var getHeight = function () {
        elem.style.display = 'block';
        var height = elem.scrollHeight + 'px';
        elem.style.display = '';
        return height;
    };

    var height = getHeight();
    elem.classList.add('is-visible');
    elem.style.height = height;

    window.setTimeout(function () {
        elem.style.height = '';
    }, 350);

};

// Hide an element
var hide = function (elem) {

    elem.style.height = elem.scrollHeight + 'px';

    window.setTimeout(function () {
        elem.style.height = '0';
    }, 1);

    window.setTimeout(function () {
        elem.classList.remove('is-visible');
    }, 350);

};

// Toggle element visibility
var toggle = function (e) {
    e.preventDefault()
    if (screen.width <= 768) {
        let elem = document.getElementById('kuFilters');
        if (elem.classList.contains('is-visible')) {
            hide(elem);
            return;
        }

        show(elem);
    }
};

klevuNarrowByLabel.addEventListener('click', toggle);
/***************Toggle Filter Menu*************************/