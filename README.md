# Personlig sajt :computer:

![](/screenshots/01-Chrome/Chrome-desktop-1920-01_Header_Nav.jpg)
## Överblick

### Länkar

**Prod: https://www.jotto.dev**

Github: https://github.com/devjoppe/mi-cv

Github pages: https://devjoppe.github.io/mi-cv/

### Hosting

www.jotto.dev hostas via [Netlify](https://www.netlify.com/)

### Validering

Titta i mapparna:

:open_file_folder: ***validation-reports***

:open_file_folder: ***validation-screenshots***

### Screenshots

I mappen :open_file_folder: ***screenshots*** finns skärmdumpar från testade webbläsare i desktop, tablet och mobil.

## Filstruktur och dokumentation :open_file_folder: :page_with_curl:

```
root/
├─ assets/
│  ├─ fonts/
│  ├─ images/
├─ css/
│  ├─ normalize.css
│  ├─ style.min.css
├─ scss/
│  ├─ _mobile.scss
│  ├─ _tablet.scss
│  ├─ aside.scss
│  ├─ config.scss
│  ├─ footer.scss
│  ├─ header.scss
│  ├─ layout.scss
│  ├─ menu.scss
│  ├─ sections.scss
│  ├─ style.scss
├─ js/
│  ├─ jquery-3.6.1.min.js
│  ├─ menu.js
├─ .gitignore
├─ 404.html
├─ index.html
├─ favicon.ico
├─ icon.png
├─ README.md
```

### SCSS

| Fil | Förklaring |
| --- | --- |
| style.scss | Sammanställer alla .scss-filer |
| config.scss | Övergripande ramverk med färg, font, avstånd m.m. |
| layout.scss | Övergripande layout |
| --- | --- |
| aside.scss | Vänsterspalt |
| header.scss | Sidhuvudet |
| sections.scss | Huvudinnehåll (Main) |
| style.scss | Sammanställer alla .scss-filer |
| footer.scss | Sidfoten |
| menu.scss | Menyn |
| --- | --- |
| _mobile.scss | Responsiv mobil |
| _tablet.scss | Responsiv tablet |

## Process

Att utifrån ett underlag bygga upp en webbsida genom att endast använda HTML5 och CSS (Javascript valfritt).

Underlaget bestod av en kortare beskrivning och ett antal bilder som illustrerade sidans design för olika upplösningar. Min uppgift var att koda fram en responsiv design baserat på detta underlag.

1. Skapade en wireframe baserat på designen för att snabbt kunna omsätta layouten till kod.
2. Tog fram en HTML-struktur.
3. Koda design och layout i SCSS.
4. Test och justeringar.
5. Klar.
### Byggd med :construction:

- Semantisk HTML5
- SCSS/CSS
- Lite JS med JQuery

### Resurser

**Hamburger menu**
https://codepen.io/rhyspacker/pen/WaJMEz

**JQuery**
https://jquery.com/

### Lärdomar :exclamation:

:warning: **Alltid "mobile first".**

Så enkelt med ack så viktigt. Även om det inte känns så i början så kommer man spara tid, kod och andra problem. :scream:


:ok_hand: **SCSS**

Låt det ta lite längre tid i början för att strukturera upp din kod bättre.


:clap: **srcset, size, .webp**

Nytt sätt att arbeta med bilder.

## Backlog - Kommande utveckling :mega:

:white_square_button: Text

:white_square_button: Text 2