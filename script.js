// ==========================================
// Star Agency - ملف الجافاسكربت
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
    "use strict";
    
    // ==========================================
    // متغيرات عامة
    // ==========================================
    const navbar = document.querySelector(".navbar");
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const modal = document.getElementById("booking-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const btnBook = document.getElementById("btn-book");
    const closeModal = document.getElementById("close-modal");
    const backToTop = document.getElementById("back-to-top");
    const bgMusic = document.getElementById("bg-music");
    const devBtn = document.getElementById("dev-btn");
    const devModal = document.getElementById("dev-modal");
    const devModalOverlay = document.getElementById("dev-modal-overlay");
    const closeDevModal = document.getElementById("close-dev-modal");
    
    // ==========================================
    // تشغيل الموسيقى تلقائياً
    // ==========================================
    function initAudio() {
        if (bgMusic) {
            bgMusic.volume = 0.3;
            bgMusic.play().catch(function(error) {
                console.log("Audio autoplay prevented:", error);
            });
        }
    }
    
    document.addEventListener("click", function() {
        initAudio();
    }, { once: true });
    
    document.addEventListener("scroll", function() {
        initAudio();
    }, { once: true });
    
    // ==========================================
    // تأثير شريط التنقل عند التمرير
    // ==========================================
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        
        if (window.scrollY > 500) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    }
    
    window.addEventListener("scroll", handleScroll);
    
    // ==========================================
    // قائمة التنقل المتنقلة
    // ==========================================
    if (navToggle) {
        navToggle.addEventListener("click", function() {
            navLinks.classList.toggle("active");
            navToggle.classList.toggle("active");
        });
    }
    
    document.querySelectorAll(".nav-link").forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
            navToggle.classList.remove("active");
        });
    });
    
    // ==========================================
    // نافذة حجز الموعد
    // ==========================================
    function openModal() {
        if (modal && modalOverlay) {
            modal.classList.add("active");
            modalOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    }
    
    function closeModalFunc() {
        if (modal && modalOverlay) {
            modal.classList.remove("active");
            modalOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    }
    
    if (btnBook) {
        btnBook.addEventListener("click", openModal);
    }
    
    if (closeModal) {
        closeModal.addEventListener("click", closeModalFunc);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener("click", closeModalFunc);
    }
    
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            closeModalFunc();
            closeDevModalFunc();
        }
    });
    
    // ==========================================
    // نافذة مطور الموقع
    // ==========================================
    function openDevModal() {
        if (devModal && devModalOverlay) {
            devModal.classList.add("active");
            devModalOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    }
    
    function closeDevModalFunc() {
        if (devModal && devModalOverlay) {
            devModal.classList.remove("active");
            devModalOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    }
    
    if (devBtn) {
        devBtn.addEventListener("click", openDevModal);
    }
    
    if (closeDevModal) {
        closeDevModal.addEventListener("click", closeDevModalFunc);
    }
    
    if (devModalOverlay) {
        devModalOverlay.addEventListener("click", closeDevModalFunc);
    }
    
    // ==========================================
    // تأثيرات التمرير
    // ==========================================
    function revealOnScroll() {
        const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
        reveals.forEach(function(element) {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    }
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    
    // ==========================================
    // زر العودة للأعلى
    // ==========================================
    if (backToTop) {
        backToTop.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    
    // ==========================================
    // تأثيرات البطاقات عند التمرير
    // ==========================================
    function animateCards() {
        const cards = document.querySelectorAll(".service-card");
        cards.forEach(function(card, index) {
            card.style.opacity = "0";
            card.style.transform = "translateY(30px)";
            card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) " + (index * 0.1) + "s";
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                        observer.unobserve(card);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(card);
        });
    }
    
    animateCards();
    
    // ==========================================
    // تأثير الكتابة
    // ==========================================
    function typeWriter(element, text, speed) {
        let i = 0;
        element.textContent = "";
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    const heroSubtitle = document.querySelector(".hero-subtitle");
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 50);
    }
    
    // ==========================================
    // تأثير البارالاكس
    // ==========================================
    function parallaxEffect() {
        const scrolled = window.pageYOffset;
        const circles = document.querySelectorAll(".circle");
        circles.forEach(function(circle, index) {
            const speed = (index % 3 + 1) * 0.2;
            circle.style.transform = "translateY(" + (scrolled * speed) + "px)";
        });
    }
    
    window.addEventListener("scroll", parallaxEffect);
    
    // ==========================================
    // تأثير العد التصاعدي
    // ==========================================
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + "+";
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + "+";
            }
        }
        
        updateCounter();
    }
    
    const statNumbers = document.querySelectorAll(".stat-number");
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                animateCounter(entry.target, target, 2000);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(function(stat) {
        statsObserver.observe(stat);
    });
    
    // ==========================================
    // تأثير التموج على الأزرار
    // ==========================================
    document.querySelectorAll(".btn").forEach(function(button) {
        button.addEventListener("click", function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement("span");
            ripple.style.cssText = "position:absolute;background:rgba(255,255,255,0.3);border-radius:50%;transform:scale(0);animation:ripple 0.6s linear;pointer-events:none;";
            
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + "px";
            ripple.style.left = (x - size / 2) + "px";
            ripple.style.top = (y - size / 2) + "px";
            
            button.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });
    
    const rippleStyle = document.createElement("style");
    rippleStyle.textContent = "@keyframes ripple { to { transform: scale(4); opacity: 0; } }";
    document.head.appendChild(rippleStyle);
    
    // ==========================================
    // تمرير سلس
    // ==========================================
    document.querySelectorAll("a[href^="#"]").forEach(function(anchor) {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // ==========================================
    // تحديث الرابط النشط
    // ==========================================
    function updateActiveLink() {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-link");
        let current = "";
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(function(link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }
    
    window.addEventListener("scroll", updateActiveLink);
    
    // ==========================================
    // شاشة التحميل
    // ==========================================
    function createLoader() {
        const loader = document.createElement("div");
        loader.id = "loader";
        loader.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:#0a0a1a;z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;transition:opacity 0.5s ease;";
        
        const spinner = document.createElement("div");
        spinner.style.cssText = "width:50px;height:50px;border:3px solid rgba(233,69,96,0.2);border-top-color:#e94560;border-radius:50%;animation:spin 1s linear infinite;";
        
        const text = document.createElement("p");
        text.textContent = "جاري التحميل...";
        text.style.cssText = "color:#b8c5d6;margin-top:1rem;font-family:Cairo,sans-serif;";
        
        loader.appendChild(spinner);
        loader.appendChild(text);
        document.body.appendChild(loader);
        
        window.addEventListener("load", function() {
            setTimeout(function() {
                loader.style.opacity = "0";
                setTimeout(function() {
                    loader.remove();
                }, 500);
            }, 800);
        });
    }
    
    createLoader();
    
    // ==========================================
    // تأثيرات hover موحدة
    // ==========================================
    function addHoverEffect(selector, enterProps, leaveProps) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.addEventListener("mouseenter", function() {
                Object.assign(this.style, enterProps);
            });
            el.addEventListener("mouseleave", function() {
                Object.assign(this.style, leaveProps);
            });
        });
    }
    
    addHoverEffect(".service-card", { transform: "translateY(-10px) scale(1.02)" }, { transform: "translateY(0) scale(1)" });
    addHoverEffect(".contact-item", { borderColor: "rgba(233,69,96,0.5)", transform: "translateX(-5px)" }, { borderColor: "", transform: "translateX(0)" });
    addHoverEffect(".price-box", { transform: "scale(1.1)", borderColor: "rgba(233,69,96,0.5)" }, { transform: "scale(1)", borderColor: "" });
    addHoverEffect(".social-link", { transform: "translateY(-5px) rotate(10deg) scale(1.1)" }, { transform: "translateY(0) rotate(0deg) scale(1)" });
    addHoverEffect(".btn-whatsapp, .btn-whatsapp-modal, .btn-whatsapp-large", { transform: "translateY(-3px) scale(1.02)" }, { transform: "translateY(0) scale(1)" });
    addHoverEffect(".btn-instagram, .btn-instagram-large", { transform: "translateY(-3px) scale(1.02)" }, { transform: "translateY(0) scale(1)" });
    addHoverEffect(".btn-phone", { transform: "translateY(-3px) scale(1.02)" }, { transform: "translateY(0) scale(1)" });
    addHoverEffect(".nav-link", { letterSpacing: "1px" }, { letterSpacing: "0" });
    addHoverEffect(".stat-number", { textShadow: "0 0 20px rgba(233,69,96,0.5)" }, { textShadow: "" });
    addHoverEffect(".btn-icon", { transform: "scale(1.2)" }, { transform: "scale(1)" });
    
    // ==========================================
    // تأثيرات hover على النصوص
    // ==========================================
    addHoverEffect(".service-card h3", { color: "#e94560" }, { color: "" });
    addHoverEffect(".service-card p", { color: "#b8c5d6" }, { color: "" });
    addHoverEffect(".contact-item h4", { color: "#e94560" }, { color: "" });
    addHoverEffect(".contact-item p", { color: "#ffffff" }, { color: "" });
    addHoverEffect(".section-desc", { color: "#b8c5d6" }, { color: "" });
    addHoverEffect(".modal-text", { color: "#ffffff", transform: "scale(1.02)" }, { color: "", transform: "scale(1)" });
    addHoverEffect(".dev-text", { color: "#ffffff" }, { color: "" });
    addHoverEffect(".price-amount", { textShadow: "0 0 20px rgba(233,69,96,0.5)" }, { textShadow: "" });
    addHoverEffect(".price-currency", { color: "#ffffff" }, { color: "" });
    
    // ==========================================
    // تأثيرات hover على الأيقونات
    // ==========================================
    addHoverEffect(".service-icon", { transform: "scale(1.3) rotate(10deg)" }, { transform: "scale(1) rotate(0deg)" });
    addHoverEffect(".contact-icon", { transform: "scale(1.2) rotate(10deg)" }, { transform: "scale(1) rotate(0deg)" });
    addHoverEffect(".whatsapp-icon", { transform: "scale(1.3)" }, { transform: "scale(1)" });
    addHoverEffect(".logo-icon", { transform: "rotate(15deg) scale(1.2)" }, { transform: "rotate(0deg) scale(1)" });
    addHoverEffect(".footer-icon", { transform: "rotate(20deg) scale(1.2)" }, { transform: "rotate(0deg) scale(1)" });
    addHoverEffect(".modal-icon", { transform: "rotate(360deg) scale(1.2)" }, { transform: "rotate(0deg) scale(1)" });
    
    // ==========================================
    // تأثيرات hover على العناصر الكبيرة
    // ==========================================
    addHoverEffect(".hero-title", { textShadow: "0 0 30px rgba(233,69,96,0.5)" }, { textShadow: "none" });
    addHoverEffect(".hero-badge", { transform: "scale(1.05)" }, { transform: "scale(1)" });
    addHoverEffect(".hero-desc", { color: "#b8c5d6" }, { color: "" });
    addHoverEffect(".section-title", { transform: "scale(1.02)" }, { transform: "scale(1)" });
    addHoverEffect(".section-tag", { background: "rgba(233,69,96,0.2)" }, { background: "" });
    addHoverEffect(".contact-action", { borderColor: "rgba(37,211,102,0.3)" }, { borderColor: "" });
    addHoverEffect(".contact-action h3", { color: "#e94560" }, { color: "" });
    addHoverEffect(".contact-action p", { color: "#ffffff" }, { color: "" });
    addHoverEffect(".footer-name", { color: "#e94560" }, { color: "" });
    addHoverEffect(".modal-content", { borderColor: "rgba(233,69,96,0.3)" }, { borderColor: "" });
    addHoverEffect(".modal-title", { letterSpacing: "2px" }, { letterSpacing: "0" });
    addHoverEffect(".back-to-top", { transform: "translateY(-5px) scale(1.1)" }, { transform: "translateY(0) scale(1)" });
    addHoverEffect(".dev-btn", { transform: "translateY(-3px) scale(1.05)", opacity: "1" }, { transform: "translateY(0) scale(1)", opacity: "0.6" });
    
    // ==========================================
    // تأثيرات hover على أيقونات الفوتر
    // ==========================================
    document.querySelectorAll(".footer-social a[href*=instagram]").forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            this.style.background = "linear-gradient(135deg, #e1306c 0%, #f77737 100%)";
            this.style.borderColor = "#e1306c";
        });
        link.addEventListener("mouseleave", function() {
            this.style.background = "";
            this.style.borderColor = "";
        });
    });
    
    document.querySelectorAll(".footer-social a[href^=tel]").forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            this.style.background = "linear-gradient(135deg, #4a90d9 0%, #357abd 100%)";
            this.style.borderColor = "#4a90d9";
        });
        link.addEventListener("mouseleave", function() {
            this.style.background = "";
            this.style.borderColor = "";
        });
    });
    
    // ==========================================
    // تأثيرات الوميض الدورية
    // ==========================================
    function pulseEffect(selector, props, interval) {
        document.querySelectorAll(selector).forEach(function(el) {
            setInterval(function() {
                Object.assign(el.style, props);
                setTimeout(function() {
                    Object.keys(props).forEach(function(key) {
                        el.style[key] = "";
                    });
                }, 500);
            }, interval);
        });
    }
    
    pulseEffect(".btn-whatsapp, .btn-whatsapp-modal, .btn-whatsapp-large", { boxShadow: "0 0 20px rgba(37,211,102,0.4)" }, 4000);
    pulseEffect(".btn-instagram, .btn-instagram-large", { boxShadow: "0 0 25px rgba(225,48,108,0.4)" }, 4000);
    pulseEffect(".btn-phone", { boxShadow: "0 0 25px rgba(74,144,217,0.4)" }, 5000);
    pulseEffect(".service-tag", { opacity: "0.7" }, 4000);
    pulseEffect(".stat-item", { transform: "scale(1.05)" }, 5000);
    pulseEffect(".hero-badge", { boxShadow: "0 0 20px rgba(233,69,96,0.3)" }, 3000);
    pulseEffect(".footer-links a", { opacity: "0.7" }, 6000);
    pulseEffect(".footer-social .social-link", { transform: "translateY(-3px)" }, 5000);
    pulseEffect(".dev-btn", { opacity: "0.8" }, 4000);
    
    // ==========================================
    // تأثير الوميض على العنوان المميز
    // ==========================================
    const titleHighlight = document.querySelector(".title-line.highlight");
    if (titleHighlight) {
        setInterval(function() {
            titleHighlight.style.filter = "brightness(1.3)";
            setTimeout(function() {
                titleHighlight.style.filter = "brightness(1)";
            }, 300);
        }, 4000);
    }
    
    // ==========================================
    // تأثير الوميض على الفاصل
    // ==========================================
    document.querySelectorAll(".modal-divider").forEach(function(divider) {
        setInterval(function() {
            divider.style.width = "100px";
            setTimeout(function() {
                divider.style.width = "60px";
            }, 500);
        }, 3000);
    });
    
    // ==========================================
    // تأثير الوميض على السهم
    // ==========================================
    const scrollArrow = document.querySelector(".scroll-arrow");
    if (scrollArrow) {
        setInterval(function() {
            scrollArrow.style.transform = "translateY(5px)";
            setTimeout(function() {
                scrollArrow.style.transform = "translateY(0)";
            }, 300);
        }, 1500);
    }
    
    // ==========================================
    // تأثير النبض على زر الحجز
    // ==========================================
    if (btnBook) {
        setInterval(function() {
            btnBook.style.transform = "scale(1.05)";
            setTimeout(function() {
                btnBook.style.transform = "scale(1)";
            }, 200);
        }, 5000);
    }
    
    // ==========================================
    // تأثير الظهور التدريجي للتذييل
    // ==========================================
    const footer = document.querySelector(".footer");
    if (footer) {
        const footerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    footer.style.opacity = "1";
                    footer.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.1 });
        
        footer.style.opacity = "0";
        footer.style.transform = "translateY(20px)";
        footer.style.transition = "all 0.8s ease";
        footerObserver.observe(footer);
    }
    
    // ==========================================
    // تأثير الظهور التدريجي للعناصر
    // ==========================================
    window.addEventListener("load", function() {
        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 0.5s ease";
        
        setTimeout(function() {
            document.body.style.opacity = "1";
        }, 100);
    });
    
    // ==========================================
    // تأثير التحويم على أيقونة المطور في النافذة
    // ==========================================
    const devModalIcon = document.querySelector(".dev-modal .modal-icon");
    if (devModalIcon) {
        devModalIcon.addEventListener("mouseenter", function() {
            this.style.transform = "rotate(360deg) scale(1.2)";
            this.style.transition = "transform 0.6s ease";
        });
        
        devModalIcon.addEventListener("mouseleave", function() {
            this.style.transform = "rotate(0deg) scale(1)";
        });
    }
    
    // ==========================================
    // تأثير التحويم على زر تواصل مع المطور
    // ==========================================
    const devContactBtn = document.querySelector(".dev-modal .btn-whatsapp-modal");
    if (devContactBtn) {
        devContactBtn.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px) scale(1.02)";
        });
        
        devContactBtn.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0) scale(1)";
        });
    }
    
    // ==========================================
    // تأثير التحويم على عنوان نافذة المطور
    // ==========================================
    const devModalTitle = document.querySelector(".dev-modal .modal-title");
    if (devModalTitle) {
        devModalTitle.addEventListener("mouseenter", function() {
            this.style.letterSpacing = "2px";
        });
        
        devModalTitle.addEventListener("mouseleave", function() {
            this.style.letterSpacing = "0";
        });
    }
    
    // ==========================================
    // تأثير التحويم على محتوى نافذة المطور
    // ==========================================
    document.querySelectorAll(".dev-modal .modal-content").forEach(function(content) {
        content.addEventListener("mouseenter", function() {
            this.style.borderColor = "rgba(233,69,96,0.3)";
        });
        
        content.addEventListener("mouseleave", function() {
            this.style.borderColor = "";
        });
    });
    
    // ==========================================
    // تأثير الاهتزاز على زر إغلاق نافذة المطور
    // ==========================================
    if (closeDevModal) {
        closeDevModal.addEventListener("mouseenter", function() {
            this.style.transform = "rotate(90deg)";
        });
        
        closeDevModal.addEventListener("mouseleave", function() {
            this.style.transform = "rotate(0deg)";
        });
    }
    
    // ==========================================
    // تأثير التحويم على أيقونة الواتساب في نافذة المطور
    // ==========================================
    document.querySelectorAll(".dev-modal .whatsapp-icon").forEach(function(icon) {
        icon.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.3)";
        });
        
        icon.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
    
    // ==========================================
    // تأثير التكبير على نص زر المطور
    // ==========================================
    if (devBtn) {
        devBtn.addEventListener("mouseenter", function() {
            this.style.fontSize = "0.8rem";
        });
        
        devBtn.addEventListener("mouseleave", function() {
            this.style.fontSize = "0.75rem";
        });
    }
    
    // ==========================================
    // تأثير التحويم على أيقونة انستجرام
    // ==========================================
    document.querySelectorAll(".btn-instagram .btn-icon, .btn-instagram-large .btn-icon").forEach(function(icon) {
        icon.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.3) rotate(-10deg)";
        });
        
        icon.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1) rotate(0deg)";
        });
    });
    
    // ==========================================
    // تأثير التحويم على أيقونة الهاتف
    // ==========================================
    document.querySelectorAll(".btn-phone .btn-icon").forEach(function(icon) {
        icon.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.3) rotate(10deg)";
        });
        
        icon.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1) rotate(0deg)";
        });
    });
    
    // ==========================================
    // تأثير التحويم على أيقونة الفوتر
    // ==========================================
    document.querySelectorAll(".footer-social .social-link").forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-5px) rotate(10deg) scale(1.1)";
        });
        
        link.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0) rotate(0deg) scale(1)";
        });
    });
    
    // ==========================================
    // تأثير التحويم على اسم الاستوديو في الفوتر
    // ==========================================
    const footerName = document.querySelector(".footer-name");
    if (footerName) {
        footerName.addEventListener("mouseenter", function() {
            this.style.color = "#e94560";
        });
        
        footerName.addEventListener("mouseleave", function() {
            this.style.color = "";
        });
    }
    
    // ==========================================
    // تأثير التحويم على أيقونة الاستوديو في الفوتر
    // ==========================================
    const footerIcon = document.querySelector(".footer-icon");
    if (footerIcon) {
        footerIcon.addEventListener("mouseenter", function() {
            this.style.transform = "rotate(20deg) scale(1.2)";
        });
        
        footerIcon.addEventListener("mouseleave", function() {
            this.style.transform = "rotate(0deg) scale(1)";
        });
    }
    
    // ==========================================
    // تأثير التحويم على روابط الفوتر
    // ==========================================
    document.querySelectorAll(".footer-links a").forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            this.style.paddingRight = "10px";
            this.style.transition = "padding 0.3s ease";
        });
        
        link.addEventListener("mouseleave", function() {
            this.style.paddingRight = "0";
        });
    });
    
    // ==========================================
    // تأثير التحويم على الشريط السفلي
    // ==========================================
    document.querySelectorAll(".footer-bottom p").forEach(function(text) {
        text.addEventListener("mouseenter", function() {
            this.style.color = "#ffffff";
        });
        
        text.addEventListener("mouseleave", function() {
            this.style.color = "";
        });
    });
    
    // ==========================================
    // تأثير التحويم على نص زر تواصل مع المطور
    // ==========================================
    if (devContactBtn) {
        devContactBtn.addEventListener("mouseenter", function() {
            this.querySelector("span:last-child").style.letterSpacing = "1px";
        });
        
        devContactBtn.addEventListener("mouseleave", function() {
            this.querySelector("span:last-child").style.letterSpacing = "0";
        });
    }
    
    // ==========================================
    // تأثير الوميض على فاصل نافذة المطور
    // ==========================================
    const devModalDivider = document.querySelector(".dev-modal .modal-divider");
    if (devModalDivider) {
        setInterval(function() {
            devModalDivider.style.width = "100px";
            setTimeout(function() {
                devModalDivider.style.width = "60px";