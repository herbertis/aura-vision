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



// --- Lógica do Menu Mobile ---
const initMobileMenu = () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-load');
    
    // Criar o elemento do menu lateral dinamicamente ou selecionar se já existir
    let mobileDrawer = document.querySelector('.mobile-drawer');
    
    if (!mobileDrawer) {
        mobileDrawer = document.createElement('div');
        mobileDrawer.className = 'mobile-drawer';
        mobileDrawer.innerHTML = `
            <div class="drawer-content">
                <a href="#" class="drawer-link">O MODELO</a>
                <a href="#" class="drawer-link">LENTES</a>
                <a href="#" class="drawer-link">DESIGN</a>
                <a href="#" class="drawer-link">TECNOLOGIA</a>
                <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">
                <button class="buy-btn-nav" style="width: 100%; padding: 15px;">COMPRAR AGORA</button>
            </div>
        `;
        document.body.appendChild(mobileDrawer);
    }

    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            // Abrir Menu
            gsap.to(mobileDrawer, { x: 0, duration: 0.6, ease: "power4.out" });
            gsap.to('.drawer-link', { opacity: 1, y: 0, stagger: 0.1, delay: 0.2 });
            
            // Mudar ícone para "X" (se estiver usando Iconify)
            menuBtn.querySelector('iconify-icon').setAttribute('icon', 'lucide:x');
            
            // Pausar o Scroll do Lenis (importante!)
            if (typeof lenis !== 'undefined') lenis.stop();
            
        } else {
            // Fechar Menu
            gsap.to(mobileDrawer, { x: '-100%', duration: 0.6, ease: "power4.in" });
            menuBtn.querySelector('iconify-icon').setAttribute('icon', 'lucide:menu');
            
            // Retomar o Scroll do Lenis
            if (typeof lenis !== 'undefined') lenis.start();
        }
    });

    // Fechar ao clicar em um link
    const drawerLinks = document.querySelectorAll('.drawer-link');
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            gsap.to(mobileDrawer, { x: '-100%', duration: 0.5 });
            menuBtn.querySelector('iconify-icon').setAttribute('icon', 'lucide:menu');
            if (typeof lenis !== 'undefined') lenis.start();
        });
    });
};

// Chamar a função após o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
});
