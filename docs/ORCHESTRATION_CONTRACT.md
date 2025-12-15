# ORCHESTRATION CONTRACT  
## Gaarsdal Layered AI Prototype – Samtaleflow og orkestrering

---

## 1. Dokumentets rolle

Dette dokument fastlægger **hvordan systemet orkestrerer samtaler**
baseret på beslutninger foreslået af AI
og begrænsninger fastlagt i domænelaget.

Dokumentet er **normativt**.

Hvis samtaleflow, state-håndtering eller transitions
afviger fra dette dokument,
betragtes det som en fejl,
medmindre dokumentet eksplicit ændres.

Dette dokument er:
- uafhængigt af AI-modeller
- uafhængigt af UI og præsentation
- uafhængigt af platform og teknologi

---

## 2. Orkestreringslagets position

Orkestreringslaget fungerer som en **deterministisk state machine**.

Det:
- modtager strukturerede strategier fra AI
- validerer dem mod domænelagets regler
- oversætter dem til samtaletilstande og transitions

Orkestreringslaget:
- kender ikke rationale bag AI’s forslag
- kender ikke domæneetik i detaljer
- må ikke fortolke eller justere beslutninger

---

## 3. Samtaletilstande (States)

Systemet opererer med et begrænset, eksplicit sæt samtaletilstande.

Eksempler på tilladte tilstande:

- `IDLE` – ingen aktiv interaktion
- `ACTIVE` – normal dialog
- `REGULATION` – afgrænset regulerende fase
- `PAUSE` – midlertidig standsning
- `STOPPED` – afsluttet eller låst tilstand
- `REDIRECT` – henvisning uden dialog

Tilstande er:
- diskrete
- gensidigt udelukkende
- ikke hierarkiske

---

## 4. Transitions mellem tilstande

Transitions udløses af:
- AI-strategier
- domænelagets stop-beslutninger
- systemevents (fx timeout)

Transitions må:
- kun ske via eksplicit definerede regler
- aldrig være implicitte eller skjulte

Eksempel:
- `ACTIVE` → `REGULATION`
- `ACTIVE` → `PAUSE`
- `ANY` → `STOPPED`

Der findes ingen “bløde” transitions.

---

## 5. Oversættelse af AI-strategier

AI-strategier oversættes direkte til orkestreringshandlinger:

| AI-strategi | Orkestreringshandling |
|------------|----------------------|
| regulering | transition til `REGULATION` |
| afgrænsning | transition til `ACTIVE` med begrænsning |
| pause | transition til `PAUSE` |
| stop | transition til `STOPPED` |
| neutral information | forbliv i `ACTIVE` |

Orkestreringslaget må ikke:
- kombinere strategier
- ændre strategiens betydning
- eskalere handlingen

---

## 6. Domænelagets overstyring

Domænelaget kan til enhver tid:

- afvise AI-strategier
- påtvinge `STOPPED`
- påtvinge afgrænsning

Hvis der opstår konflikt mellem:
- AI-strategi
- domænelagets regler

skal domænelagets beslutning **altid vinde**.

Orkestreringslaget fungerer som håndhæver,
ikke som beslutningstager.

---

## 7. Session og kontinuitet

Orkestreringslaget er ansvarligt for:

- sessionens kontinuitet
- bevarelse af aktuel tilstand
- konsistens på tværs af brugerinput

Orkestreringslaget må ikke:
- akkumulere terapeutisk kontekst
- udlede mønstre over tid
- foretage langtidsevaluering

Session anvendes udelukkende
til korrekt state-transition.

---

## 8. Forbudt adfærd

Orkestreringslaget må **aldrig**:

- generere tekst
- stille spørgsmål
- forklare beslutninger
- blødgøre stop
- forsøge at “hjælpe mere”

Hvis ingen transition er tilladt,
skal systemet forblive i nuværende tilstand.

---

## 9. Invariante regler

Følgende regler gælder altid:

1. Orkestrering er deterministisk
2. Ingen implicit logik
3. Stop er irreversibelt i den aktuelle session
4. UI kan ikke omgå state
5. Orkestreringslaget må ikke lære over tid

---

## Status

Dette dokument fastlægger
hvordan samtaler orkestreres
uden viden om domæne eller AI-rationale.

Orkestrering forbinder beslutning med flow –
intet mere, intet mindre.
