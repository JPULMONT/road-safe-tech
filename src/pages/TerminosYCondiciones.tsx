import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TerminosYCondiciones = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10">
            <header className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">
                Términos y Condiciones de Uso
              </h1>
              <p className="text-sm text-foreground/50 tracking-wide uppercase">
                Última actualización: abril de 2025
              </p>
            </header>

            <div className="space-y-8 text-foreground/70 leading-relaxed text-[15px]">
              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">
                  Términos y Condiciones de Uso
                </h2>
                <p className="text-lg font-display font-semibold text-foreground/90">CAR STORE, S.A. DE C.V.</p>
                <p><a href="https://www.carstore.mx" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.carstore.mx</a></p>
                <p>Por favor lea detenidamente los presentes Términos y Condiciones antes de utilizar este sitio web.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">1. Aceptación de los Términos</h2>
                <p>Al acceder y utilizar el sitio web www.carstore.mx (en adelante el "Sitio"), usted acepta quedar vinculado por los presentes Términos y Condiciones de Uso (en adelante los "Términos"), así como por nuestro Aviso de Privacidad. Si no está de acuerdo con alguno de estos términos, le pedimos que se abstenga de utilizar el Sitio.</p>
                <p>El uso del Sitio implica la aceptación plena y sin reservas de todos los Términos aquí descritos, en la versión publicada en el momento en que acceda al Sitio.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">2. Identificación del Titular del Sitio</h2>
                <p className="font-display font-semibold text-foreground/90">CAR STORE, S.A. DE C.V.</p>
                <p>Av. Miguel de Cervantes Saavedra #507 B, Col. Irrigación, Del. Miguel Hidalgo, Ciudad de México, C.P. 11500</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Correo: <a href="mailto:ventas@carstore.com.mx" className="text-accent hover:underline">ventas@carstore.com.mx</a></li>
                  <li>Teléfono: <a href="tel:+525563856619" className="text-accent hover:underline">55 6385 6619</a></li>
                  <li>Sitio web: <a href="https://www.carstore.mx" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.carstore.mx</a></li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">3. Objeto del Sitio</h2>
                <p>El Sitio tiene por objeto presentar el catálogo de productos y servicios de Carstore, generar solicitudes de información y cotización, y facilitar el contacto entre usuarios y el equipo comercial de Carstore. El Sitio no constituye una tienda en línea con proceso de compra directa — todas las transacciones se formalizan mediante acuerdo comercial entre las partes.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">4. Uso Permitido</h2>
                <p>El usuario se compromete a utilizar el Sitio de conformidad con la ley, los presentes Términos, y las buenas costumbres. Queda expresamente prohibido:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Utilizar el Sitio con fines ilícitos o contrarios a los presentes Términos</li>
                  <li>Reproducir, copiar, distribuir o modificar los contenidos del Sitio sin autorización expresa de Carstore</li>
                  <li>Introducir virus, código malicioso o cualquier otro elemento que pueda dañar los sistemas informáticos de Carstore o de terceros</li>
                  <li>Realizar acciones que sobrecarguen la infraestructura del Sitio</li>
                  <li>Suplantar la identidad de Carstore o de cualquier usuario</li>
                  <li>Utilizar bots, scrapers o herramientas automatizadas para extraer información del Sitio</li>
                  <li>Intentar acceder a áreas restringidas del Sitio sin autorización</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">5. Propiedad Intelectual</h2>
                <p>Todos los contenidos del Sitio, incluyendo pero no limitado a: textos, imágenes, fotografías, gráficos, logotipos, íconos, marcas comerciales, software, diseño visual y arquitectura del sitio, son propiedad de CAR STORE, S.A. DE C.V. o de sus licenciantes, y están protegidos por la Ley Federal del Derecho de Autor, la Ley de la Propiedad Industrial y demás legislación aplicable en México y tratados internacionales.</p>
                <p>Queda prohibida la reproducción total o parcial de los contenidos sin el consentimiento previo y por escrito de Carstore. El uso indebido de la propiedad intelectual de Carstore podrá dar lugar a las acciones legales correspondientes.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">6. Productos y Servicios</h2>
                <p>La información contenida en el Sitio sobre productos, servicios, especificaciones técnicas e imágenes tiene carácter informativo y puede estar sujeta a cambios sin previo aviso.</p>
                <p>Carstore se reserva el derecho de:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Modificar las características de los productos en cualquier momento</li>
                  <li>Descontinuar productos o servicios sin previo aviso</li>
                  <li>Establecer condiciones comerciales específicas para cada proyecto o cliente</li>
                </ul>
                <p>Los precios, en caso de mostrarse, son orientativos y no constituyen una oferta formal vinculante. Toda cotización formal deberá ser solicitada y confirmada por escrito a través del equipo comercial de Carstore.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">7. Formularios y Solicitudes</h2>
                <p>Al completar cualquier formulario del Sitio, el usuario declara:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Que la información proporcionada es veraz, completa y actual</li>
                  <li>Que tiene capacidad legal para obligarse en nombre propio o de la empresa que representa</li>
                  <li>Que autoriza a Carstore a contactarlo con fines comerciales relacionados con su solicitud</li>
                </ul>
                <p>Carstore se compromete a responder las solicitudes recibidas en un plazo no mayor a 24 horas hábiles.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">8. Limitación de Responsabilidad</h2>
                <p>Carstore no será responsable por:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso del Sitio</li>
                  <li>Interrupciones, errores o fallas técnicas del Sitio</li>
                  <li>Inexactitudes en la información publicada que hayan sido corregidas oportunamente</li>
                  <li>Daños causados por virus u otros elementos dañinos introducidos por terceros</li>
                  <li>Contenido de sitios web de terceros a los que el Sitio enlace</li>
                </ul>
                <p>El Sitio se proporciona "tal cual" sin garantías de ningún tipo, en la medida permitida por la legislación aplicable.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">9. Enlaces a Terceros</h2>
                <p>El Sitio puede contener enlaces a sitios web de terceros. Dichos enlaces se proporcionan únicamente para conveniencia del usuario. Carstore no controla ni es responsable del contenido, políticas de privacidad o prácticas de sitios de terceros. El acceso a sitios de terceros es bajo el exclusivo riesgo del usuario.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">10. Disponibilidad del Sitio</h2>
                <p>Carstore no garantiza la disponibilidad continua e ininterrumpida del Sitio. Carstore podrá suspender, modificar o discontinuar el Sitio o cualquiera de sus funciones en cualquier momento, con o sin previo aviso, sin que ello genere responsabilidad alguna.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">11. Menores de Edad</h2>
                <p>El Sitio está dirigido a personas mayores de 18 años con capacidad legal para celebrar contratos. Si usted es menor de edad, por favor no utilice el Sitio ni proporcione datos personales sin la supervisión de sus padres o tutores.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">12. Legislación Aplicable y Jurisdicción</h2>
                <p>Los presentes Términos se rigen por las leyes vigentes en los Estados Unidos Mexicanos, incluyendo:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ley Federal de Protección al Consumidor</li>
                  <li>Código de Comercio</li>
                  <li>Ley Federal del Derecho de Autor</li>
                  <li>Ley de la Propiedad Industrial</li>
                  <li>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</li>
                </ul>
                <p>Para cualquier controversia derivada del uso del Sitio o de los presentes Términos, las partes se someten expresamente a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">13. Modificaciones a los Términos</h2>
                <p>Carstore se reserva el derecho de modificar los presentes Términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el Sitio. El uso continuado del Sitio después de la publicación de cambios constituye la aceptación de los mismos.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground uppercase tracking-wide">14. Contacto</h2>
                <p>Para cualquier duda, aclaración o reclamación relacionada con los presentes Términos, puede contactarnos en:</p>
                <p className="font-display font-semibold text-foreground/90">CAR STORE, S.A. DE C.V.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Correo: <a href="mailto:ventas@carstore.com.mx" className="text-accent hover:underline">ventas@carstore.com.mx</a></li>
                  <li>Teléfono: <a href="tel:+525563856619" className="text-accent hover:underline">55 6385 6619</a></li>
                  <li>Domicilio: Av. Miguel de Cervantes Saavedra #507 B, Col. Irrigación, Del. Miguel Hidalgo, Ciudad de México, C.P. 11500</li>
                </ul>
                <p className="text-foreground/50 text-sm">Última actualización: abril de 2025</p>
              </section>

              {/* Footer note + CTA */}
              <div className="border-t border-white/[0.06] pt-8 mt-12 space-y-6">
                <p className="text-xs text-foreground/40 leading-relaxed">
                  Este documento fue elaborado conforme a la legislación mexicana vigente. Para consultar el Aviso de Privacidad completo, <Link to="/aviso-de-privacidad" className="text-accent hover:underline">haga clic aquí</Link>.
                </p>
                <Button variant="hero-primary" size="xl" asChild>
                  <Link to="/contacto">
                    ¿Tiene preguntas?
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default TerminosYCondiciones;