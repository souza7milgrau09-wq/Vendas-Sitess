function comprar(preco) {
    const numeroWhatsApp = "5547997135174"; // Seu número com DDD, sem sinais
    const mensagem = `Comprei e quero liberar meu acesso! Plano: R$${preco}`;

    let link = "";

    // Verifica se é dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // Link para abrir direto no app do WhatsApp
        link = `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    } else {
        // Link para abrir no WhatsApp Web no desktop
        link = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    }

    // Abre o link em uma nova aba ou janela
    window.open(link, "_blank");
}
