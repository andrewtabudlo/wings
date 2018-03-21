$.ajax({
    url: 'https://www.redbullshopus.com/products.json',
    type: 'GET',
    success: function(data){
        console.log(data.products)
        for (let i = 0; i < data.products.length; i++) {
            let div = $('<div></div>').addClass('container');
            let img = $('<img></img>').attr('src',data.products[i].images[0].src).attr('class', 'image');
            let p = $('<p></p>').html(data.products[i].title).attr('class', 'desc');
            let brand = $('<p></p>').html(data.products[i].vendor);
            $(div).append(img);
            $(div).append(p);
            $(div).append(brand);
            $('main').append(div);
        }
    },
    error: function(error){
        console.log(error);
    }
})
