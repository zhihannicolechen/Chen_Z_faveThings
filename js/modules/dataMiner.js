

function getData( targetURL, callback) {
    console.log (`favourite things`);

fetch(targetURL) 

.then(res => res.json()) 

.then(data => {
    console.log(data);

    callback(data);
})

.catch (error => console.log(error));
}

export{ getData }