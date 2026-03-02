/**
 * Google Analytics 4 - Eventos Personalizados
 * Projeto: Nivoora (nivoora.com.br)
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1️⃣ Evento: Clique no botão principal (CTA)
    // Seleciona o primeiro botão CTA da página (Hero section)
    const mainCta = document.querySelector('.cta-button');
    if (mainCta) {
        mainCta.addEventListener('click', function() {
            gtag('event', 'click_botao_principal', {
                event_category: 'engajamento',
                event_label: 'home'
            });
        });
    }

    // 2️⃣ Evento: Tempo na página (30 segundos)
    setTimeout(function() {
        gtag('event', 'tempo_30s', {
            event_category: 'engajamento',
            event_label: 'pagina_home'
        });
    }, 30000);

    // 3️⃣ Evento: Scroll 50% da página
    let scrollEnviado = false;
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        if (scrollPercent >= 50 && !scrollEnviado) {
            gtag('event', 'scroll_50', {
                event_category: 'engajamento',
                event_label: 'pagina_home'
            });
            scrollEnviado = true;
        }
    });
});
