const goodsImages = ['images/laptops/laptop_1.webp',
                        'images/laptops/laptop_2.webp',
                        'images/laptops/laptop_3.webp',
                        'images/laptops/laptop_4.webp',
                        'images/laptops/laptop_5.webp',
                        'images/laptops/laptop_6.webp',
                        'images/laptops/laptop_7.webp',
                        'images/laptops/laptop_8.webp',
                        'images/laptops/laptop_9.webp',
                        'images/laptops/laptop_10.webp',
                        'images/laptops/laptop_11.webp',
                        'images/laptops/laptop_12.webp',
                        'images/laptops/laptop_13.webp',
                        'images/laptops/laptop_14.webp',
                        'images/laptops/laptop_15.webp'];

const goodsNames = ['Lenovo IdeaPad 1 Laptop, 15.6” FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD, Windows 11 Home, 720p...',
                    'Dell Inspiron 15 3000 3520 Business Laptop Computer [Windows 11 Pro], 15.6 FHD Touchscreen, 11th Gen In...',
                    'Acer Aspire 1 A115-32-C96U Slim Laptop | 15.6" FHD Display | Intel Celeron N4500 Processor | 4GB DDR4 |...',
                    'HP Pavilion 15 15.6" Touchscreen FHD Laptop Computer, 13th Gen Intel 10-Core i7-1355U, 64GB DDR4 RAM, 2...',
                    'ASUS Zenbook 14 Flip OLED Laptop, 14â€ OLED Touch Display, Intel Evo Platform, Intel Core i7-1360P CPU,...',
                    'Apple 2022 MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage...',
                    'Lenovo ThinkPad X13 Gen 2 Business Laptop (13.3" FHD+ Touchscreen, Intel EVO Core i7-1185G7, 16GB RAM, ...',
                    'HP 15.6 inch Laptop, Intel Core i5-1135G7 Processor, 15.6" FHD Anti-Glare LED Display, HDMI, Wi-Fi and ...',
                    'ASUS ROG Strix G17 (2022) Gaming Laptop, 17.3” 144Hz IPS FHD Display, NVIDIA GeForce RTX 3050 GPU, AMD ...',
                    'Dell Inspiron 3520 15.6" FHD Laptop, Intel Core i7-1255U Processor, 64GB RAM, 2TB SSD, Webcam, HDMI, SD...',
                    'Acer Spin 311-2H 11.6" 2-in-1 Touchscreen Chromebook (Intel 4-Core Celeron N4000, 64GB eMMC, 4GB RAM, S...',
                    'HP Newest Pavilion 15.6" HD Touchscreen Anti-Glare Laptop, 16GB RAM, 1TB SSD Storage, Intel Core Proces...',
                    'Lenovo ThinkBook 15 Gen 4 Business Laptop, 15.6" FHD Display, Intel i7-1255U, 40GB RAM, 1TB SSD, HDMI,...',
                    'ASUS 2020 VivoBook 15 15.6 Inch FHD 1080P Laptop (AMD Ryzen 3 3200U up to 3.5GHz, 8GB DDR4 RAM, 256GB...',
                    'Acer Aspire 5 A515-56-32DK Slim Laptop - 15.6" Full HD IPS Display - 11th Gen Intel i3-1115G4 Dual Co...'];

const goodsRating = [5, 4.5, 4, 5, 4.5, 5, 5, 4, 4.5, 4.5, 5, 4, 5, 4.5, 4.5];

const goodsReviews = [209, 81, 674, 9, 47, 2602, 4, 15, 149, 7, 461, 537, 11, 358, 2397];

const goodsCosts = [303.59, 519.96, 212.84, 979.99, 971.51, 840.51, 799.98, 519.99, 892.93, 699.00, 208.79, 439.00, 719.99, 474.88, 207.52];

const realEmail = 'Someemail@yandex.ru';
const realPassword = 0123456789;

function addGoods() {
    const holder = document.getElementById('goods__Holder');

    for (var i = 0; i < goodsRating.length; i++) {
        const newForm = document.createElement('form');
        newForm.classList.add('goodCard');

        const newImage = document.createElement('div');
        newImage.classList.add('imageHolder');
        const image = document.createElement('img');
        image.classList.add('goodImage');
        image.src = goodsImages[i];
        newImage.appendChild(image);

        const newInfo = document.createElement('div');
        newInfo.classList.add('goodInfo');

        const newName = document.createElement('p');
        newName.classList.add('goodName');
        newName.innerHTML = goodsNames[i];
        newInfo.appendChild(newName);

        const newRating = document.createElement('div');
        newRating.classList.add('rating');

        var rate = goodsRating[i];
        for (var j = 0; j < 5; j++) {
            const newStar = document.createElement('i');

            if (rate >= 1) {
                newStar.classList.add('fas');
                newStar.classList.add('fa-star');
                newStar.classList.add('star-checked');
            }
            else {
                if (rate > 0) {
                    newStar.classList.add('fas');
                    newStar.classList.add('fa-star-half-alt');
                    newStar.classList.add('star-checked');
                }
                else {
                    newStar.classList.add('fas');
                    newStar.classList.add('fa-star');
                }
            }

            rate-=1;
            newRating.appendChild(newStar);
        }

        newInfo.appendChild(newRating);

        const newCost = document.createElement('p');
        newCost.classList.add('goodCost');
        newCost.innerHTML = '$' + goodsCosts[i];
        newInfo.appendChild(newCost);

        const newReview = document.createElement('p');
        newReview.classList.add('reviews');
        newReview.innerHTML = goodsReviews[i] + ' reviews';
        newInfo.appendChild(newReview);

        newForm.appendChild(newImage);
        newForm.appendChild(newInfo);
        holder.appendChild(newForm);
    }
}

function showSearchPlane() {
    document.getElementById('search-bar').classList.toggle('show-search');

    var filtersSec = document.getElementById('filtersSec');
    const filters = document.getElementsByClassName('filter');

    if (filtersSec.style.opacity == 1) {
        filtersSec.style.opacity = 0;

        for (filter of filters) {
            filter.style.height = 0 + 'px';
        }
    }
    else {
        filtersSec.style.opacity = 1;

        for (filter of filters) {
            filter.style.height = 180 + 'px';
        }
    }
}

function moveFilterLine(e) {
    let minVal = parseInt(document.getElementById('range__min').value);
    let maxVal = parseInt(document.getElementById('range__max').value);
    var priceMin = document.getElementById('price-min');
    var priceMax = document.getElementById('price-max');

    if (maxVal - minVal < 70) {
        if (e.className === "range-min") {
            document.getElementById('range__min').value = maxVal - 70;
        }
        else {
            document.getElementById('range__max').value = minVal + 70;
        }
    } else {
        var progress = document.getElementById('progress_bar');

        priceMin.value = minVal;
        priceMax.value = maxVal;
        progress.style.left = (minVal / 1000) * 100 + "%";
        progress.style.right = 100 - (maxVal / 1000) * 100 + "%";
    }
}

function moveFilterLineByPrice(e) {
    let minVal = parseInt(document.getElementById('price-min').value);
    let maxVal = parseInt(document.getElementById('price-max').value);
    var progress = document.getElementById('progress_bar');

    if ((maxVal - minVal >= 70) && maxVal <= 1000 && minVal >= 0) {
        if (e.className === "input-min") {
            document.getElementById('range__min').value = minVal;
            progress.style.left = (minVal / 1000) * 100 + "%";
        }
        else {
            document.getElementById('range__max').value = maxVal;
            progress.style.right = 100 - (maxVal / 1000) * 100 + "%";
        }
    }
}

function showNameDialog() {
    var dialog = document.getElementById('initialsDialog');
    dialog.showModal();
}

function closeNameDialog() {
    var dialog = document.getElementById('initialsDialog');
    var name = document.getElementById('nameField');
    var initials = document.getElementById('initials');
    var newName = document.getElementById('newName');
    var newSname = document.getElementById('newSname');

    name.innerHTML = newName.value + ' ' + newSname.value;
    initials.innerHTML = newName.value[0] + newSname.value[0];

    dialog.close();
}

function showPhoneDialog() {
    var dialog = document.getElementById('phoneDialog');
    dialog.showModal();
}

function closePhoneDialog() {
    var dialog = document.getElementById('phoneDialog');
    var phone = document.getElementById('phoneField');
    var newNumber = document.getElementById('newNumber');

    phone.innerHTML = newNumber.value;

    dialog.close();
}

function showEmailDialog() {
    var dialog = document.getElementById('emailDialog');
    dialog.showModal();
}

function closeEmailDialog() {
    var dialog = document.getElementById('emailDialog');
    var email = document.getElementById('emailField');
    var newEmail = document.getElementById('newEmail');

    email.innerHTML = newEmail.value;

    dialog.close();
}

function showSignIn() {
    var dialog = document.getElementById('signInDialog');
    dialog.showModal();
}

function closeSignIn() {
    var dialog = document.getElementById('signInDialog');
    var email = document.getElementById('emailSignIn');
    var password = document.getElementById('passwordSignIn');
    var alertMes = document.getElementById('alertMes');

    if (email.value != realEmail) {
        alertMes.innerHTML = 'Incorrect login!';
        return;
    }

    if (password.value != realPassword) {
        alertMes.innerHTML = 'Incorrect password!';
        return;
    }

    dialog.close();
    window.location.href = 'account.html';
}