let x = 1;

while (x < 20) {
    switch (x){
        case (x % 3 === 0 && x % 5 === 0):
        console.log("JuliaJames");
        case x % 3 === 0:
        console.log("Julia");
        case x % 5 === 0:
        console.log("James");
    }
    x++;
}
