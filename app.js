document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  const year = document.querySelector("[data-year]");

  /* =========================
     HEADER SCROLL STATE
  ========================= */

  const setHeaderState = () => {
    if (!header) return;

    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", setHeaderState, {
    passive: true,
  });

  setHeaderState();


  /* =========================
     MOBILE MENU
  ========================= */

  const openMenu = () => {
    if (!menuButton || !menu) return;

    menuButton.setAttribute("aria-expanded", "true");
    menu.classList.add("is-open");

    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    if (!menuButton || !menu) return;

    menuButton.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");

    document.body.classList.remove("menu-open");
  };

  const toggleMenu = () => {
    if (!menuButton || !menu) return;

    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  menuButton?.addEventListener("click", toggleMenu);


  /* =========================
     CLOSE MENU ON LINK CLICK
  ========================= */

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });


  /* =========================
     ESCAPE KEY
  ========================= */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });


  /* =========================
     CLOSE MENU WHEN CLICKING
     OUTSIDE NAV
  ========================= */

  document.addEventListener("click", (event) => {
    if (!menu || !menuButton) return;

    const clickedInsideMenu = menu.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if (
      menu.classList.contains("is-open") &&
      !clickedInsideMenu &&
      !clickedButton
    ) {
      closeMenu();
    }
  });


  /* =========================
     CLOSE MENU AFTER RESIZE
  ========================= */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });


  /* =========================
     CURRENT YEAR
  ========================= */

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealTargets =
    document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealTargets.forEach((target) => {
      observer.observe(target);
    });
  } else {
    revealTargets.forEach((target) => {
      target.classList.add("is-visible");
    });
  }


  /* =========================
     ACTIVE NAV LINK
  ========================= */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(
    '.site-nav a[href^="#"]'
  );

  if (
    "IntersectionObserver" in window &&
    sections.length &&
    navLinks.length
  ) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            const href = link.getAttribute("href");

            link.classList.toggle(
              "is-active",
              href === `#${id}`
            );
          });
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }
});