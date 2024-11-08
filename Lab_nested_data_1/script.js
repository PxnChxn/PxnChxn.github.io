
function filterPortfolio(filter) {
    const items = document.querySelectorAll(".portfolio-item");
    items.forEach(item => {
        if (item.classList.contains(filter)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

function copyCode(button) {
    const codeBox = button.nextElementSibling.querySelector("code");
    const codeText = codeBox.textContent.trim();

    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = codeText;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);

    button.textContent = "Copied!";
    setTimeout(() => button.textContent = "Copy", 2000);
}
