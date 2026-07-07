# 08 · Checklist de assets y contenido (PARA EL EQUIPO)

Esto lo consiguen **los humanos** (Mateo + equipo). Sin esto, los agentes trabajan con placeholders. **Pedir lo marcado 🔴 HOY** — es ruta crítica.

## 🔴 Logos (pedir el VECTOR al diseñador)
El logo actual (`Logo jadai.png`) es PNG con fondo gris embossed — **no sirve** para web. Necesitamos:
- [ ] `jadai-logo.svg` — wordmark en **tinta** (`#17161A`), fondo transparente. (SVG ideal; si no, PNG transparente @3x.)
- [ ] `jadai-logo-white.svg` — versión **blanca** (para intro oscuro y footer).
- [ ] **Favicon / ícono** — solo el nodo/marca, cuadrado, 512px + `.ico`.
- [ ] **Color exacto del cian** confirmado por el diseñador (medimos `#0FB2C6` claro / `#22CCE6` oscuro — validar).
→ van a `public/brand/`.

## 🔴 Contactos / conversión
- [ ] **Número de WhatsApp Business** (para `wa.me/<número>` y el "hablar con un agente").
- [ ] **Link para agendar** (Google Calendar appointments o Calendly).
- [ ] **Email de contacto** (¿`hello@jadai.biz`? ¿el de `roballaday.biz`?).
- [ ] Redes: **Instagram, LinkedIn** (URLs).

## 🔴 Fotos del equipo (anti-fatiga de IA — clave)
- [ ] Foto de **cada integrante**: retrato **3:4**, mínimo **800×1067**, buena luz, fondo consistente. Se verán **B/N → color al hover**.
- [ ] **Nombre + rol** de cada uno (Christian, Eduardo, Anthony, Jose Julio, Mateo… confirmar lista y cargos).
- [ ] Alternativa rápida si no hay sesión de fotos: una **foto grupal** decente del team.
→ van a `public/team/`.

## Copy (textos)
- [ ] **Titular + subtítulo del hero** (borrador actual: "Construimos IA que factura." — validar/ajustar).
- [ ] **Descripción de cada vertical** (Fintech, Agro, Agentes): 1 párrafo + 2-3 bullets c/u.
- [ ] **Frases del intro** (referentes): 4-8 frases célebres + autor. *(Recomendado: solo texto, sin fotos de celebridades — evita problemas legales y se ve más premium.)* Decidir enfoque.
- [ ] **"Cómo trabajamos"** (3 pasos — validar los actuales).
- [ ] **Guion del chatbot demo** (validar el borrador actual del `design-system.html`).

## Casos / clientes / cifras
- [ ] **Casos reales** a mostrar (Watch/fintech, camaronera): título + 1 línea de resultado. **Con permiso** del cliente para nombrarlo/usar logo.
- [ ] **Logos de clientes** (si hay permiso).
- [ ] **Testimonios** (frase + persona + cargo/empresa).
- [ ] **Cifras reales** para Stats (hoy hay números de ejemplo — reemplazar).

## Legal / dominio
- [ ] **Política de privacidad** y términos (obligatorio si hay formulario/toma de datos).
- [ ] Confirmar **subdominio** y **acceso al DNS** de `jadai.biz` (para el deploy en Vercel).

## Fuentes (estado real)
- **General Sans** → ya está en `src/fonts/*.woff2` (400/500/600/700). ⚠️ El `_generalsans.css` apunta al **CDN de Fontshare**, no a los locales → en F0 se carga con `next/font/local` desde los `.woff2`. **No hay itálica** (decidir en `03`: bajar General Sans Italic o hacer énfasis solo con color).
- **JetBrains Mono** → **falta**. Bajar `.woff2` (Google Fonts, gratis) a `src/fonts/` o usar `next/font/google`.

---
### Cómo entregarlo
Dejar todo en una carpeta compartida (Drive) o directo en el repo bajo `public/` siguiendo los nombres de arriba. Marcar en este checklist lo que ya está.
