document.addEventListener("DOMContentLoaded", () => {
    // 1. Lenis (Mantido, mas com ajuste de sincronização)
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sincronização essencial para GSAP
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Lógica de Vídeo de Alta Performance
    const video = document.getElementById("product-video");

    if (video) {
        // Garantir que o vídeo carregue metadados
        const initVideoScroll = () => {
            video.pause();

            // Criamos um objeto dummy para interpolar o tempo
            let videoScene = { frame: 0 };

            gsap.to(videoScene, {
                frame: video.duration,
                ease: "none", // Apple usa linear para o scroll ditar o ritmo
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "+=3000", // Aumente para um scroll mais lento/suave
                    pin: true,
                    scrub: 1, // O segredo está aqui: um valor entre 0.5 e 1 suaviza a busca de frames
                    onUpdate: (self) => {
                        // Atualiza o vídeo com base no progresso da animação
                        // O uso do readyState evita erros de frames não carregados
                        if (video.readyState >= 2) {
                            video.currentTime = videoScene.frame;
                        }
                    }
                }
            });

            // Fade out dos textos no início do scroll
            gsap.to(".hero-content, .scroll-hint", {
                opacity: 0,
                y: -50,
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "top -15%",
                    scrub: true
                }
            });
        };

        if (video.readyState >= 2) {
            initVideoScroll();
        } else {
            video.addEventListener('loadedmetadata', initVideoScroll);
        }
    }

    // 3. Reveal Elements Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));
});
