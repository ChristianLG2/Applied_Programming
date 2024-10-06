const story = {
    start: {
        text: "You are in a dark forest. You can go left or right.",
        choices: [
            { text: "Go left", next: "leftPath" },
            { text: "Go right", next: "rightPath" }
        ]
    },
    leftPath: {
        text: "You encounter a friendly dragon. Do you talk to it or run away?",
        choices: [
            { text: "Talk to the dragon", next: "talkDragon" },
            { text: "Run away", next: "runAway" }
        ]
    },
    rightPath: {
        text: "You find a hidden treasure chest. Do you open it or leave it?",
        choices: [
            { text: "Open the chest", next: "openChest" },
            { text: "Leave the chest", next: "leaveChest" }
        ]
    },
    talkDragon: {
        text: "The dragon gives you a ride home. You win!",
        choices: []
    },
    runAway: {
        text: "You get lost in the forest. Game over.",
        choices: []
    },
    openChest: {
        text: "You find gold and jewels. You win!",
        choices: []
    },
    leaveChest: {
        text: "You walk away and fall into a trap. Game over.",
        choices: []
    }
};

let currentNode = story.start;

function renderStory() {
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    
    storyElement.textContent = currentNode.text;
    choicesElement.innerHTML = '';
    
    currentNode.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice');
        button.addEventListener('click', () => {
            currentNode = story[choice.next];
            renderStory();
        });
        choicesElement.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderStory();
});
