const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      background-color: #000;
      color: #fff;
      padding: 50px 20px;
      text-align: center;
      font-family: 'Cinzel', serif;

    }

    .donaciones-titulo {
      font-size: 2.5rem;
      margin-bottom: 30px;
      margin-top: 74px;

    }
    .donaciones-contenido {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      flex-wrap: wrap;
      margin-bottom: 54px;
      margin-top: 34px;
    }
    .donaciones-medios {
      background-color: #f1f1f1;
      color: #000;
      padding: 20px;
      border-radius: 20px;
    }
    .donacion-item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    .donacion-icono {
      width: 40px;
      margin-right: 10px;
    }
    .donaciones-texto {
      max-width: 400px;
      line-height: 1.6;
    }
    /* Responsive */
    @media (max-width: 768px) {
      .donaciones-contenido {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
  <section id="donaciones">
    <h2 class="donaciones-titulo">Donaciones</h2>
    <div class="donaciones-contenido">
      <div class="donaciones-medios">
        <div class="donacion-item">
          <img src="/imagenes/Paypal_2014_logo (1).png" alt="PayPal" class="donacion-icono" />
          <span>ResurgimientonRNC@gmail.com</span>
        </div>
        <div class="donacion-item">
          <img src="/imagenes/nequi-logo-png_seeklogo-404357.png" alt="Nequi" class="donacion-icono" />
          <span>300 0000000</span>
        </div>
      </div>
      <p class="donaciones-texto">
        Tu aporte es completamente voluntario. Si deseas apoyar las actividades y el crecimiento de nuestro movimiento, puedes hacerlo a través de una donación. Cada contribución ayuda a seguir construyendo este proyecto.
      </p>
    </div>
  </section>
`;

class DonacionesSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'}).appendChild(template.content.cloneNode(true));
  }
}

customElements.define('donaciones-section', DonacionesSection);
