const nav = document.getElementById("nav");
    const toast = document.getElementById("toast");
    const form = document.getElementById("leadForm");

    window.addEventListener("scroll", () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 20);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.16 });

    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

    document.querySelectorAll(".faq-item button").forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.parentElement;
        const panel = item.querySelector(".faq-panel");
        const isOpen = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isOpen));
        button.querySelector("span").textContent = isOpen ? "+" : "−";
        panel.style.maxHeight = isOpen ? "0px" : `${panel.scrollHeight}px`;
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.reset();
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3600);
    });

