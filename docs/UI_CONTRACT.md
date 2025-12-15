# UI CONTRACT  
## Gaarsdal Layered AI Prototype – Præsentations- og UI-kontrakt

---

## 1. Dokumentets rolle

Dette dokument fastlægger **UI-lagets ansvar, begrænsninger
og ufravigelige regler** i `gaarsdal-layered-prototype-v1`.

Dokumentet er **normativt**.

Hvis UI-adfærd, visning eller interaktion
afviger fra dette dokument,
betragtes det som en fejl,
medmindre dokumentet eksplicit ændres.

Dette dokument er:
- uafhængigt af AI
- uafhængigt af domænelogik
- uafhængigt af orkestreringens rationale

---

## 2. UI-lagets position i arkitekturen

UI-laget er et **rent præsentationslag**.

UI:
- modtager strukturerede handlinger og states
- gengiver dem visuelt, auditivt eller interaktivt
- håndterer input og output

UI er **ikke en del af beslutningssystemet**.

---

## 3. UI-lagets ansvar

UI-laget er ansvarligt for:

- layout, stil og visuel hierarki
- tone, tempo og sproglig form
- inputmekanik (tekst, knapper, stemme mv.)
- præsentation af systemets nuværende state
- håndtering af brugerens interaktioner

UI-laget er ansvarligt for **hvordan noget vises**,
aldrig for **hvad der besluttes**.

---

## 4. UI-lagets begrænsninger

UI-laget må **aldrig**:

- træffe terapeutiske beslutninger
- vurdere brugerens mentale tilstand
- tolke intention eller sårbarhed
- justere, filtrere eller blødgøre stop
- omformulere eller “forbedre” systembeslutninger
- stille spørgsmål på eget initiativ

UI må ikke:
- kompensere for manglende handling
- eskalere dialog
- “hjælpe videre” ved stop

---

## 5. Forhold til orkestreringslaget

UI må kun reagere på:

- eksplicitte states
- eksplicitte transitions
- eksplicitte UI-handlinger

UI må ikke:
- initiere transitions
- springe mellem states
- genfortolke systemets tilstand

Hvis UI er i tvivl om korrekt handling,
skal UI **gøre mindre – ikke mere**.

---

## 6. Sprog og tone

UI må:
- anvende rolig, neutral og professionel tone
- være menneskelig uden at være terapeutisk
- anvende empati uden at love hjælp eller effekt

UI må ikke:
- give råd
- antyde behandling
- love forandring
- stille åbne, udforskende spørgsmål i sårbare kontekster

Tone er et UI-ansvar.  
Indhold er det ikke.

---

## 7. Stop og afgrænsning i UI

Når systemet er i `STOPPED` eller tilsvarende afgrænset state:

UI:
- skal tydeligt signalere afslutning
- må ikke invitere til videre dialog
- må ikke stille opfølgende spørgsmål
- må ikke foreslå næste skridt

UI må kun gengive
det, som orkestreringslaget tillader.

---

## 8. Fejl, tomme svar og usikkerhed

Ved:
- manglende data
- manglende handling
- afviste strategier

skal UI:
- forblive neutral
- ikke udfylde tomrum
- ikke forklare systemets indre logik

UI må ikke:
- improvisere
- forklare beslutninger
- gætte brugerens behov

---

## 9. Invariante UI-regler

Følgende regler gælder altid:

1. UI er dumt
2. UI ved ikke hvorfor
3. UI må ikke hjælpe mere end systemet tillader
4. UI må ikke omgå stop
5. UI er udskifteligt uden domænetab

---

## Status

Dette dokument fastlægger UI-laget
som et rent præsentationslag,
uden beslutningsmagt eller etisk autoritet.

UI viser.  
UI vælger ikke.  
UI hjælper ikke på egen hånd.
