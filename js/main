document.addEventListener('DOMContentLoaded', () => {
    //formateador de moneda CLP
    const fmt = n => n.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});

    //Estado
    let count = 0;
    let total = 0;

    //Referencias
    const elCount = document.getElementById('cart-count');
    const elTotal = document.getElementById('cart-total');
    const btnClear = document.getElementById('cart-clear');

    const updateBar = () => {
        elCount.textContent = count;
        elTotal.textContent = fmt(total);
    };

    //click global delegacion
    document.addEventListener('click', (e) => {
        //agregar
        if (e.target.matches('.btn-add')) {
            const card = e.target.closest('.producto');
            //precio desde data value
            const price = parseInt(card.querySelector('data')?.getAttribute('value') || '0', 10);

            count += 1;
            total += price;
            updateBar();

            //feedbackRapido
            const prev = e.target.textContent;
            e.target.disabled = true;
            e.target.textContent = 'Agregado ✓';
            setTimeout(() => {
                e.target.disabled = false;
                e.target.textContent = prev;
            },400)
        }
        //limpiar
        if (e.target === btnClear) {
            count = 0;
            total = 0;
            updateBar();
        }
    });

    //inicializar
    updateBar();
});