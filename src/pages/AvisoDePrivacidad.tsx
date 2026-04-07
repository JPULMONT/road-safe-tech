import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/layout/Footer";

const AvisoDePrivacidad = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10">
            <header className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">
                Aviso de Privacidad
              </h1>
              <p className="text-sm text-foreground/50 tracking-wide uppercase">
                Última actualización: abril de 2026
              </p>
            </header>

            <div className="prose-privacy space-y-8 text-foreground/70 leading-relaxed text-[15px]">
              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">
                  Aviso de Privacidad Integral
                </h2>
                <p className="text-lg font-display font-semibold text-foreground/90">
                  CAR STORE, S.A. DE C.V.
                </p>
                <p>
                  En cumplimiento con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento, y los Lineamientos del Aviso de Privacidad emitidos por el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI), CAR STORE, S.A. DE C.V. pone a su disposición el presente Aviso de Privacidad.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">
                  1. Identidad y Domicilio del Responsable
                </h2>
                <p>
                  CAR STORE, S.A. DE C.V. (en adelante "Carstore" o el "Responsable"), con domicilio en Av. Miguel de Cervantes Saavedra #507 B, Colonia Irrigación, Delegación Miguel Hidalgo, Ciudad de México, C.P. 11500, es responsable del tratamiento de sus datos personales.
                </p>
                <p>Para cualquier asunto relacionado con el presente Aviso, puede contactarnos a través de:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Correo electrónico: <a href="mailto:gerencia@carstore.com.mx" className="text-accent hover:underline">gerencia@carstore.com.mx</a></li>
                  <li>Teléfono: <a href="tel:+525563856619" className="text-accent hover:underline">55 6385 6619</a></li>
                  <li>Sitio web: <a href="https://www.carstore.mx" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.carstore.mx</a></li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">
                  2. Datos Personales que Recabamos
                </h2>
                <p>Carstore podrá recabar las siguientes categorías de datos personales:</p>

                <h3 className="text-base font-display font-semibold text-foreground/90">Datos de identificación:</h3>
                <p>Nombre completo, razón social, RFC, CURP, domicilio, teléfono, correo electrónico, firma autógrafa o electrónica.</p>

                <h3 className="text-base font-display font-semibold text-foreground/90">Datos laborales y profesionales:</h3>
                <p>Empresa, cargo o puesto, sector de actividad, tamaño de flotilla o flota operada.</p>

                <h3 className="text-base font-display font-semibold text-foreground/90">Datos de contacto comercial:</h3>
                <p>Interés en productos o servicios, historial de comunicaciones, solicitudes de cotización y asesoría.</p>

                <h3 className="text-base font-display font-semibold text-foreground/90">Datos de navegación (automáticos):</h3>
                <p>Dirección IP, tipo de navegador, sistema operativo, páginas visitadas, tiempo de permanencia, cookies y tecnologías similares. Estos datos son recabados automáticamente mediante herramientas de analítica web.</p>

                <h3 className="text-base font-display font-semibold text-foreground/90">Datos sensibles:</h3>
                <p>En caso de visitas a nuestras instalaciones, imágenes captadas por circuito cerrado de televisión (CCTV) con fines de seguridad.</p>

                <p>Carstore NO recaba datos de menores de edad de manera intencional. Si usted es padre, madre o tutor y considera que un menor ha proporcionado datos personales, contáctenos inmediatamente a <a href="mailto:gerencia@carstore.com.mx" className="text-accent hover:underline">gerencia@carstore.com.mx</a>.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">
                  3. Finalidades del Tratamiento
                </h2>

                <h3 className="text-base font-display font-semibold text-foreground/90">Finalidades primarias (necesarias para la relación jurídica):</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Atender solicitudes de información, cotización y asesoría comercial</li>
                  <li>Gestionar la relación contractual derivada de la venta de productos y servicios</li>
                  <li>Instalación, configuración y soporte técnico de productos</li>
                  <li>Facturación, cobranza y gestión contable</li>
                  <li>Otorgamiento de garantías y servicio postventa</li>
                  <li>Cumplimiento de obligaciones legales y fiscales</li>
                  <li>Atención de derechos ARCO y solicitudes de privacidad</li>
                </ul>

                <h3 className="text-base font-display font-semibold text-foreground/90">Finalidades secundarias (opcionales, puede oponerse):</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Envío de comunicaciones comerciales, promociones y novedades</li>
                  <li>Realización de encuestas de satisfacción</li>
                  <li>Estudios de mercado y análisis estadísticos</li>
                  <li>Invitaciones a eventos, webinars y actividades comerciales</li>
                  <li>Personalización de contenidos en nuestro sitio web</li>
                </ul>

                <p>
                  Si no desea que sus datos sean utilizados para finalidades secundarias, puede manifestarlo enviando un correo a <a href="mailto:gerencia@carstore.com.mx" className="text-accent hover:underline">gerencia@carstore.com.mx</a> con el asunto "Oposición a finalidades secundarias".
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">
                  4. Cookies y Tecnologías de Rastreo
                </h2>
                <p>Nuestro sitio web utiliza cookies y tecnologías similares para:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Garantizar el correcto funcionamiento del sitio</li>
                  <li>Analizar el tráfico y comportamiento de usuarios (Google Analytics)</li>
                  <li>Mostrar publicidad personalizada (Meta Pixel, Google Ads)</li>
                  <li>Recordar preferencias del usuario</li>
                </ul>

                <h3 className="text-base font-display font-semibold text-foreground/90">Tipos de cookies utilizadas:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cookies técnicas/esenciales: necesarias para el funcionamiento</li>
                  <li>Cookies analíticas: Google Analytics 4</li>
                  <li>Cookies publicitarias: Meta Pixel, Google Ads Tag</li>
                </ul>

                <p>Puede gestionar o rechazar las cookies no esenciales desde el banner de consentimiento al ingresar al sitio, o configurando su navegador. La desactivación de cookies técnicas puede afectar el funcionamiento del sitio.</p>

                <p>
                  <button
                    onClick={() => {
                      localStorage.removeItem('carstore_cookie_consent');
                      localStorage.removeItem('carstore_cookie_consent_date');
                      window.location.reload();
                    }}
                    className="text-sm text-accent underline hover:no-underline"
                  >
                    Cambiar mis preferencias de cookies
                  </button>
                </p>

                <p>
                  Para más información sobre el uso de cookies de Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">policies.google.com/privacy</a>
                  <br />
                  Para más información sobre Meta: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">facebook.com/privacy/policy</a>
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">
                  5. Transferencia de Datos Personales
                </h2>
                <p>Carstore podrá compartir sus datos personales con:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Proveedores de servicios tecnológicos (alojamiento web, correo electrónico, CRM) bajo contratos de confidencialidad</li>
                  <li>Autoridades fiscales, judiciales o administrativas cuando sea requerido por ley</li>
                  <li>Empresas del mismo grupo corporativo para fines administrativos internos</li>
                  <li>Socios comerciales para la prestación conjunta de servicios, con su consentimiento previo</li>
                </ul>
                <p>Carstore NO venderá, cederá ni transferirá sus datos personales a terceros ajenos para fines distintos a los descritos sin su consentimiento expreso, salvo las excepciones previstas en la LFPDPPP.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">
                  6. Derechos ARCO y Revocación del Consentimiento
                </h2>
                <p>Usted tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong className="text-foreground/90">Acceso:</strong> conocer qué datos tenemos sobre usted</li>
                  <li><strong className="text-foreground/90">Rectificación:</strong> corregir datos inexactos o incompletos</li>
                  <li><strong className="text-foreground/90">Cancelación:</strong> solicitar la eliminación de sus datos</li>
                  <li><strong className="text-foreground/90">Oposición:</strong> oponerse al tratamiento de sus datos</li>
                  <li><strong className="text-foreground/90">Revocación:</strong> revocar el consentimiento otorgado</li>
                  <li><strong className="text-foreground/90">Portabilidad:</strong> recibir sus datos en formato estructurado</li>
                </ul>

                <p>Para ejercer sus derechos ARCO, envíe su solicitud a:</p>
                <p>Correo: <a href="mailto:gerencia@carstore.com.mx" className="text-accent hover:underline">gerencia@carstore.com.mx</a><br />Asunto: "Solicitud Derechos ARCO"</p>

                <p>Su solicitud debe incluir:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nombre completo y domicilio o medio de contacto</li>
                  <li>Copia de identificación oficial vigente</li>
                  <li>Descripción clara del derecho que desea ejercer</li>
                  <li>Cualquier documento que facilite la atención de su solicitud</li>
                </ul>

                <h3 className="text-base font-display font-semibold text-foreground/90">Plazos de respuesta:</h3>
                <p>Carstore responderá en un plazo máximo de 20 días hábiles contados a partir de la recepción de su solicitud. De proceder, se hará efectiva en los siguientes 15 días hábiles.</p>

                <p>Si considera que su solicitud no fue atendida correctamente, puede presentar una queja ante el INAI: <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">inai.org.mx</a></p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">
                  7. Medidas de Seguridad
                </h2>
                <p>Carstore implementa medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra acceso no autorizado, pérdida, alteración o destrucción, de conformidad con la LFPDPPP y su Reglamento.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">
                  8. Cambios al Aviso de Privacidad
                </h2>
                <p>Carstore se reserva el derecho de actualizar el presente Aviso. Se considera que el Titular acepta los cambios si continúa utilizando nuestros servicios después de la notificación.</p>
                <p className="text-foreground/50 text-sm">Última actualización: abril de 2026</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default AvisoDePrivacidad;