function comprar(preco) {
    const numeroWhatsApp = "55SEUNUMERONUBANK"; // coloque seu número com DDD, ex: 5547997135174
    const mensagem = `Comprei e quero liberar meu acesso! Plano: R$${preco}`;
    const link = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    
    window.open(link, "_blank");
}
