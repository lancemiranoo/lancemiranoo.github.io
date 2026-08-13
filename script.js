const dateStamp = document.querySelector("#date-stamp");

if (dateStamp) {
    dateStamp.textContent = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }).format(new Date()).toUpperCase();
}

const loadingScreen = document.querySelector(".loading-screen");
const loadingPercent = document.querySelector(".loading-percent");
const loadingBar = document.querySelector(".loading-track span");
const loadingDuration = 3000;
const loadingStartedAt = performance.now();
const isReturningFromExperience = new URLSearchParams(window.location.search).get("returning") === "experience";

const updateLoadingProgress = (currentTime) => {
    const elapsedTime = currentTime - loadingStartedAt;
    const progress = Math.min(100, Math.floor((elapsedTime / loadingDuration) * 100));

    if (loadingPercent) {
        loadingPercent.textContent = `${progress}%`;
    }

    if (loadingBar) {
        loadingBar.style.transform = `scaleX(${progress / 100})`;
    }

    if (progress < 100) {
        window.requestAnimationFrame(updateLoadingProgress);
    }
};

const dismissLoadingScreen = () => {
    if (!loadingScreen) {
        return;
    }

    const remainingTime = Math.max(0, loadingDuration - (performance.now() - loadingStartedAt));

    window.setTimeout(() => {
        loadingScreen.classList.add("is-complete");
        loadingScreen.setAttribute("aria-hidden", "true");
        document.body.classList.remove("is-loading");
        window.setTimeout(() => {
            loadingScreen.style.backgroundImage = "none";
            loadingScreen.replaceChildren();
            loadingScreen.remove();
        }, 800);
    }, remainingTime);
};

if (loadingScreen && isReturningFromExperience) {
    loadingScreen.remove();
    window.history.replaceState({}, "", "./index.html");
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            document.body.classList.remove("is-loading");
        });
    });
} else if (loadingScreen) {
    window.requestAnimationFrame(updateLoadingProgress);

    if (document.readyState === "complete") {
        dismissLoadingScreen();
    } else {
        window.addEventListener("load", dismissLoadingScreen, { once: true });
    }
}

const masthead = document.querySelector(".masthead");
const scrolledNav = document.querySelector(".scrolled-nav");

if (masthead && scrolledNav && "IntersectionObserver" in window) {
    const mastheadObserver = new IntersectionObserver(
        ([entry]) => scrolledNav.classList.toggle("is-visible", !entry.isIntersecting),
        { rootMargin: "-72px 0px 0px" }
    );

    mastheadObserver.observe(masthead);
}
