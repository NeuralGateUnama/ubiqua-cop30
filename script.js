document.addEventListener('DOMContentLoaded', () => {
    const { DateTime, Duration } = luxon;
    function atualizarContador() {
        const agora = DateTime.now().setZone('America/Belem');
        const inicioCOP30 = DateTime.fromISO('2025-11-10T08:00:00', { zone: 'America/Belem' });
        
        if (agora >= inicioCOP30) {
            document.getElementById('contagem_reg').innerHTML = `<div style="color: #05AF7F;" >A COP30 já começou!</div>`;
            clearInterval(intervalo);
            return;
          }

        const diffMillis = inicioCOP30.toMillis() - agora.toMillis();
        const duracao = Duration.fromMillis(diffMillis).shiftTo('days', 'hours', 'minutes', 'seconds').toObject()


        document.getElementById('cont_dias').innerText = Math.floor(duracao.days);
        document.getElementById('cont_horas').innerText = Math.floor(duracao.hours);
        document.getElementById('cont_minutos').innerText = Math.floor(duracao.minutes);
        document.getElementById('cont_segundos').innerText = Math.floor(duracao.seconds);

    }
    const intervalo = setInterval(atualizarContador, 1000);
    atualizarContador();
});