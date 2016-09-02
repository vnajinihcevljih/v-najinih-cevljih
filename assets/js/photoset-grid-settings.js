$('.photoset-grid').photosetGrid({
    gutter: '5px', 
    highresLinks: true,
    rel: 'withhearts-gallery',
    onComplete: function(){
        $('.photoset-grid').attr('style', '');
        $('.photoset-grid a').colorbox({
        photo: true,
        scalePhotos: true,
        maxHeight:'90%',
        maxWidth:'90%'});
    }
});