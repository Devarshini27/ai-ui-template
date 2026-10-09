const askButton = document.getElementById("askButton");
const promptInput = document.getElementById("promptInput");
const aiResponse = document.getElementById("aiResponse");
const responseText = document.getElementById("responseText");

const suggestions = document.querySelectorAll(".suggestion");

function askAI(prompt) {

    if (!prompt.trim()) {
        promptInput.focus();
        return;
    }

    aiResponse.classList.remove("hidden");

    responseText.textContent = "Thinking...";

    setTimeout(() => {

        responseText.textContent =
            `Based on your request "${prompt}", I recommend organizing the information into clear priorities, identifying the most important actions, and tracking progress through your dashboard.`;

    }, 700);
}

askButton.addEventListener("click", () => {
    askAI(promptInput.value);
});


promptInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        askAI(promptInput.value);

    }

});


suggestions.forEach(button => {

    button.addEventListener("click", () => {

        promptInput.value = button.textContent;

        askAI(button.textContent);

    });

});


/* New conversation */

document.getElementById("newChatButton").addEventListener("click", () => {

    promptInput.value = "";

    aiResponse.classList.add("hidden");

    promptInput.focus();

});


/* Dark mode */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

});


/* Sidebar navigation */

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", (event) => {

        event.preventDefault();

        navItems.forEach(nav => nav.classList.remove("active"));

        item.classList.add("active");

    });

});


/* Search */

const searchInput = document.querySelector(".search input");

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    const conversations = document.querySelectorAll(".conversation");

    conversations.forEach(conversation => {

        const text = conversation.textContent.toLowerCase();

        conversation.style.display =
            text.includes(searchValue) ? "flex" : "none";

    });

});