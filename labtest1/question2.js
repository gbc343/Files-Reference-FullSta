function resolvedPromise () {
    
    return new Promise(function(resolve, reject){
        setTimeout(() => {
        resolve('{message: resolves Promise!}')
            ,500});
    })
}

///resolve promsomth

resolvedPromise()
.then(result => console.log(result));

function rejectedPromise() {

    return new Promise(function(error){
        setTimeout(() => {
            error('{error: delayed exception!}'), 500});
    })
    //else{ etTimeout(() => {error('{error: delaye}
}

rejectedPromise()
.then(error => console.log(error));