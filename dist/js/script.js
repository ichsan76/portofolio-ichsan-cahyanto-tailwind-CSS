//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector("header");

    if (window.scrollY > 0) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }

};
//Hamburger

const hamburger = document.querySelector("#hamburger");

const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const button = document.getElementById("submit-button");

if (form) {
    form.addEventListener("submit", async function (event) {

        // Mencegah halaman berpindah/reload
        event.preventDefault();

        button.disabled = true;
        button.textContent = "Mengirim...";

        const formData = new FormData(form);

        try {

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                status.textContent = "✓ Pesan berhasil dikirim!";

                status.classList.remove(
                    "hidden",
                    "text-red-600",
                    "bg-red-100"
                );

                status.classList.add(
                    "text-green-600",
                    "bg-green-100"
                );

                form.reset();

                button.disabled = false;
                button.textContent = "Kirim Pesan";

                setTimeout(() => {
                    status.classList.add("hidden");
                }, 5000);

            } else {

                throw new Error("Gagal mengirim pesan");

            }

        } catch (error) {

            status.textContent =
                "✕ Pesan gagal dikirim. Silakan coba lagi.";

            status.classList.remove(
                "hidden",
                "text-green-600",
                "bg-green-100"
            );

            status.classList.add(
                "text-red-600",
                "bg-red-100"
            );

            button.disabled = false;
            button.textContent = "Kirim Pesan";
        }

    });
}

