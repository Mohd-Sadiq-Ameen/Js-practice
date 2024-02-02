const colors = document.querySelectorAll(".box");
const body = document.querySelector("body")

colors.forEach((color) => {
    color.addEventListener('click', function (e) {
        console.log(e.target);

        if (e.target.id === "yellow") {
            console.log(e.target.backgroundColor);
            body.style.backgroundColor = e.target.id
        } else if (e.target.id === "peru") {
            body.style.backgroundColor = e.target.id
        } else if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id
        } else {
            body.style.backgroundColor = e.target.id
        }
        r

    });
});
