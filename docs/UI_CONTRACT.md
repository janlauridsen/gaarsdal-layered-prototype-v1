UI CONTRACT
Gaarsdal Layered AI Prototype – Præsentations- og UI-kontrakt
1. Dokumentets rolle

Dette dokument fastlægger UI-lagets ansvar, begrænsninger
og ufravigelige regler i gaarsdal-layered-prototype-v1.

Dokumentet er normativt.

Hvis UI-adfærd, visning eller interaktion
afviger fra dette dokument,
betragtes det som en fejl,
medmindre dokumentet eksplicit ændres.

Dette dokument er:

uafhængigt af AI

uafhængigt af domænelogik

uafhængigt af orkestreringens rationale

2. UI-lagets position i arkitekturen

UI-laget er et rent præsentationslag.

UI:

modtager strukturerede states og handlinger

gengiver dem visuelt, auditivt eller interaktivt

håndterer input og output

UI er ikke en del af beslutningssystemet
og har ingen selvstændig autoritet.

3. UI-lagets ansvar

UI-laget er ansvarligt for:

layout, stil og visuel hierarki

tone, tempo og sproglig form

inputmekanik (tekst, knapper, stemme mv.)

præsentation af systemets nuværende state

visning af tilladt, statisk information

UI-laget er ansvarligt for hvordan noget vises,
aldrig for hvad der besluttes.

4. UI-lagets begrænsninger

UI-laget må aldrig:

træffe terapeutiske eller etiske beslutninger

vurdere brugerens mentale eller psykologiske tilstand

tolke intention, sårbarhed eller risiko

justere, filtrere eller blødgøre stop

omformulere eller “forbedre” systembeslutninger

stille spørgsmål på eget initiativ

UI må ikke:

kompensere for manglende handling

eskalere dialog

fortsætte samtale efter stop

5. Forhold til orkestreringslaget

UI må kun reagere på:

eksplicitte states

eksplicitte transitions

eksplicit tilladte UI-handlinger

UI må ikke:

initiere transitions

springe mellem states

genfortolke systemets tilstand

genåbne en afsluttet session

Hvis UI er i tvivl om korrekt handling,
skal UI gøre mindre – ikke mere.

6. Sprog og tone

UI må:

anvende rolig, neutral og professionel tone

være menneskelig uden at være terapeutisk

udtrykke omsorg uden at påtage sig ansvar

UI må ikke:

give råd

foreslå løsninger

love hjælp, effekt eller forandring

stille åbne, udforskende spørgsmål i sårbare kontekster

Tone er et UI-ansvar.
Indhold er det ikke.

7. Stop, redirect og sikkerhed i UI

Når systemet er i STOPPED eller REDIRECT state:

UI:

skal tydeligt signalere, at samtalen er afsluttet

må ikke invitere til videre dialog

må ikke stille opfølgende spørgsmål

må ikke foreslå næste skridt inden for systemet

I REDIRECT state må UI udelukkende:

vise statisk, faktuel information

gengive eksterne kontaktmuligheder

præsentere informationen uden prioritering eller vurdering

UI må ikke:

forklare hvorfor redirect er sket

vurdere alvor

opfordre til bestemte valg

fungere som mellemled eller støtteperson

8. Præsentation af nød- og hjælpekontakter

Ved REDIRECT må UI vise regionsspecifikke hjælpetilbud
som ren oplysning, fx:

akutte nødnumre

nationale kriselinjer

generelle henvisninger til sundhedssystemet

Eksempel (Danmark):

Akut fare: Ring 112

Livslinien: Telefon 70 201 201 (døgnåbent)

Disse oplysninger:

må ikke ledsages af fortolkning

må ikke ledsages af opfordringer

må ikke formuleres som anbefalinger

UI informerer.
UI overdrager.
UI træder tilbage.

9. Fejl, tomme svar og usikkerhed

Ved:

manglende data

manglende handling

afviste strategier

skal UI:

forblive neutral

ikke udfylde tomrum

ikke forklare systemets indre logik

UI må ikke:

improvisere

forklare beslutninger

gætte brugerens behov

10. Invariante UI-regler

Følgende regler gælder altid:

UI er dumt

UI ved ikke hvorfor

UI må ikke hjælpe mere end systemet tillader

UI må ikke omgå stop eller redirect

UI er udskifteligt uden domænetab

Status

Dette dokument fastlægger UI-laget
som et rent præsentationslag,
med eksplicit understøttelse af sikkerheds-redirect.

UI viser.
UI vælger ikke.
UI hjælper ikke på egen hånd.
