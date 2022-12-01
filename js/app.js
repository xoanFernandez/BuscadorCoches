




const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//resultados
const resultado = document.querySelector('#resultado');



const max = new Date(). getFullYear();
const min = max - 10;



const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    llenarSelect();
})


//event listener para los selct de busqueda

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarauto();  
});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarauto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarauto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarauto();
})


puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarauto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarauto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarauto();

});



function mostrarAutos(autos) {

    limpiarHTML();

    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} PUERTAS - TRANSMISION: ${transmision} - PRECIO: ${precio} - COLOR: ${color}
        
        `

        resultado.appendChild(autoHTML);

    })
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect() {
    for(let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

function filtrarauto() {

    
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter ( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuestras ).filter(filtrarTransmision).filter(filtrarColor);

    
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
        


  
}

function filtrarMarca(auto) {

    const {marca} = datosBusqueda;
    if(marca) {
        return auto.marca === marca;
    }
    return auto;

}

function filtrarYear (auto) {

    const {year} = datosBusqueda;
    if(year) {
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if(minimo) {
        return auto.precio >= minimo;
    }
    return auto;  
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;  
}

function filtrarPuestras(auto) {
    const {puertas} = datosBusqueda;
    if(puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if(transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if(color) {
        return auto.color === color;
    }
    return auto;
}

function noResultado() {

    limpiarHTML();
    
    const noResultado = document.createElement('DIV');

    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);

}