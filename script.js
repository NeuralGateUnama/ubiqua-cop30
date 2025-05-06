document.addEventListener('DOMContentLoaded', () => {
    const { DateTime } = luxon;
    function atualizarContador() {
        const agora = DateTime.now().setZone('America/Belem');
        const inicioCOP30 = DateTime.fromISO('2025-11-10T08:00:00', { zone: 'America/Belem' });

        const diff = inicioCOP30.diff(agora, ['months', 'days', 'hours', 'minutes', 'seconds']).toObject();

        if (agora >= inicioCOP30) {
            document.getElementById('contagem_reg').innerHTML = `<div style="color: #05AF7F;" >A COP30 já começou!</div>`;
            clearInterval(intervalo);
            return;
          }

        document.getElementById('cont_meses').innerText = Math.floor(diff.months);
        document.getElementById('cont_dias').innerText = Math.floor(diff.days);
        document.getElementById('cont_horas').innerText = Math.floor(diff.hours);
        document.getElementById('cont_minutos').innerText = Math.floor(diff.minutes);
        document.getElementById('cont_segundos').innerText = Math.floor(diff.seconds);

    }
    const intervalo = setInterval(atualizarContador, 1000);
    atualizarContador();
});