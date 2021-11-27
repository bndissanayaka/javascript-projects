const review = [
{
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:"person1.jpg",
    text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:"person2.jpg",
    text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
},
{
    id: 3,
    name: "peter jones",
    job: "intern",
    img:"person3.jpg",
    text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
},
{
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:"person4.jpg",
    text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
}];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");

let currentValue = 0;

window.addEventListener('DOMContentLoaded', () => { showReview(currentValue) });

function showReview(person) {
    const item = review[person];
    img.src = item.img;
    author.textContent = item.name;;
    job.textContent = img.job;
    info.textContent = item.text;
}

nextButton.addEventListener('click', function () {
    currentValue++;
    if (currentValue > review.length - 1) {
        currentValue = 0;
    }
    showReview(currentValue);
});
prevButton.addEventListener('click', function () {
    currentValue--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showReview(currentValue);
});
randomButton.addEventListener('click',()=>{
    let randomNum = Math.floor(Math.random()*review.length);
    currentValue = randomNum;
    showReview(currentValue);
});
