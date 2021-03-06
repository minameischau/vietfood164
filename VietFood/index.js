let backToTopBtn = document.querySelector('.back-to-top')

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}

// top nav menu

let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item, index) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})

// food category

let foodMenuList = document.querySelector('.food-item-wrap')

let foodCategory = document.querySelector('.food-category')

let categories = foodCategory.querySelectorAll('button')

Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        let currCat = foodCategory.querySelector('button.active')
        currCat.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList = 'food-item-wrap ' + e.target.getAttribute('data-food-type')
    }
})

// on scroll animation

let scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) }

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()

// mobile nav

let bottomNavItems = document.querySelectorAll('.mb-nav-item')

let bottomMove = document.querySelector('.mb-move-item')

bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        console.log('object')
        let crrItem = document.querySelector('.mb-nav-item.active')
        crrItem.classList.remove('active')
        item.classList.add('active')
        bottomMove.style.left = index * 25 + '%'
    }
})


// 
const array = [{ name: "B??nh c???y", description: "chao cac ban day la banh cay" },
    { name: "B??nh ?????u xanh", description: "chao cac ban day la banh dau xanh" },
    { name: "Ch??? c?? L?? V???ng", description: "chao cac ban day la cha ca la vong" },
    { name: "B??n c??", description: "chao cac ban day la bun ca" }
];

$(".modal").hide();

$(".item-wrap").click({ param: $(".item-wrap") }, function(event) {
    $(".modal").show();
    var str = $(this).find('.item__name').text();
    var image = $(this).find('.bg-img').css('background-image');
    image = image.slice(5, image.length - 2);
    var description = $(this).find('.description').html();

    $(".item__name--modal").html(str);
    $('.modal__body--img').attr('src', image);
    $('.item__desc--modal').html(description);
})
$(".modal__header>i").click({ param: $(".modal__header>i") }, function() {
    $(".modal").hide();
})
$(".modal__close").click({ param: $(".modal__close") }, function() {
    $(".modal").hide();
})