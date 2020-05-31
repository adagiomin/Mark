function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}

loadImageAsync(url1).then(image1 => {
    console.log(image1.url)
    return loadImageAsync(url2)
}).then(image2 => {
    console.log(image2.url)
    return loadImageAsync(url3)
}).catch(error => {
    console.error(error)
})