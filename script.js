document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const menuButton = document.querySelector(".menu-button");

    items.forEach(item => {
        item.addEventListener("click", function() {
            if (!this.classList.contains("selected")) {
                items.forEach(item => {
                    if (item !== this) {
                        item.style.display = "none";
                    }
                });
                this.classList.add("selected");
            }
        });
    });

    menuButton.addEventListener("click", function() {
        items.forEach(item => {
            item.style.display = "block";
            item.classList.remove("selected");
        });
    });
});
