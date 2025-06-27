// Query Selectors
const likeButton = document.querySelector("#like-button");
const commentButton = document.querySelector('#comment-button');
const ulElement = document.querySelector('ul');
const inputElement = document.querySelector('input');
const dislikeButton = document.querySelector('#dislike-button');
const bodyElement = document.querySelector('body');
const divElement = document.querySelector('div');


// Variables
let countLike = 0;
let countDislike = 0;

// Functions
const handleReaction = (event) => {

    if(event.target.id === 'like-button'){
        countLike += 1;
        likeButton.textContent = `${countLike} liked this post!`;
        divElement.removeEventListener('click', handleReaction)
    }else{
        countDislike += 1;
        dislikeButton.textContent = `${countDislike} Disliked this post!`;
        divElement.removeEventListener('click', handleReaction);
    }
};

const handleComment = () => {
    if(inputElement.value != ""){
       const liElement = document.createElement('li');
       liElement.textContent = inputElement.value;
       ulElement.appendChild(liElement);
       inputElement.value = "";
    };
};


// Event Listeners
commentButton.addEventListener('click', handleComment);
divElement.addEventListener('click', handleReaction);


// likeButton.addEventListener('click', handleReaction);
// dislikeButton.addEventListener('click', handleReaction);

