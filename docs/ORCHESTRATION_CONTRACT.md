ORCHESTRATION CONTRACT
Gaarsdal Layered AI Prototype – Samtaleflow og orkestrering
1. Dokumentets rolle

Dette dokument fastlægger hvordan systemet orkestrerer samtaler
baseret på beslutningsstrategier foreslået af AI
og begrænsninger fastlagt i domænelaget.

Dokumentet er normativt.

Hvis samtaleflow, state-håndtering eller transitions
afviger fra dette dokument,
betragtes det som en fejl,
medmindre dokumentet eksplicit ændres.

Dette dokument er:

uafhængigt af AI-modeller

uafhængigt af UI og præsentation

uafhængigt af platform og teknologi

2. Orkestreringslagets position

Orkestreringslaget fungerer som en deterministisk state machine.

Det:

modtager strukturerede strategier fra AI

validerer dem mod domænelagets regler

oversætter dem til samtaletilstande og transitions

Orkestreringslaget:

kender ikke rationale bag AI’s forslag

kender ikke domæneetik i detaljer

må ikke fortolke eller justere beslutninger

Orkestreringslaget:

træffer ingen beslutninger

håndterer kun flow og stop

3. Samtaletilstande (States)

Systemet opererer med et begrænset, eksplicit sæt samtaletilstande.

Tilladte tilstande:

IDLE – ingen aktiv interaktion

ACTIVE – normal dialog

REGULATION – afgrænset regulerende fase

PAUSE – midlertidig standsning

STOPPED – afsluttet eller låst tilstand

REDIRECT – ekstern henvisning uden dialog

Tilstande er:

diskrete

gensidigt udelukkende

ikke hierarkiske

REDIRECT er en terminal sikkerhedstilstand
og må ikke indeholde dialog, spørgsmål eller opfølgning.

4. Transitions mellem tilstande

Transitions udløses udelukkende af:

AI-strategier

domænelagets stop-beslutninger

systemevents (fx timeout)

Transitions må:

kun ske via eksplicit definerede regler

aldrig være implicitte eller skjulte

Tilladte transitions (eksempler):

ACTIVE → REGULATION

ACTIVE → PAUSE

ANY → STOPPED

STOPPED → REDIRECT

Der findes ingen “bløde” transitions
og ingen betingede overgange baseret på fortolkning.

5. Oversættelse af AI-strategier

AI-strategier oversættes direkte til orkestreringshandlinger:

AI-strategi	Orkestreringshandling
regulering	transition til REGULATION
afgrænsning	transition til ACTIVE med begrænsning
pause	transition til PAUSE
stop	transition til STOPPED
neutral information	forbliv i ACTIVE

Orkestreringslaget må ikke:

kombinere strategier

ændre strategiens betydning

erstatte strategien med en anden

eskalere handlingen

6. Sikkerhedsstop og redirect

Hvis AI foreslår strategien stop
på baggrund af kritiske sikkerhedssignaler
(som defineret i AI_BEHAVIOR_CONTRACT §5a):

skal orkestreringslaget:

først transitionere til STOPPED

derefter transitionere til REDIRECT

Denne sekvens er:

obligatorisk

ikke-konfigurerbar

ikke-betinget af UI eller kontekst

REDIRECT anvendes udelukkende til:

overdragelse til eksterne hjælpesystemer

visning af statisk, ikke-interaktiv information

Orkestreringslaget:

vælger ikke destinationsindhold

prioriterer ikke mellem tilbud

vurderer ikke alvor

7. Domænelagets overstyring

Domænelaget kan til enhver tid:

afvise AI-strategier

påtvinge STOPPED

påtvinge REDIRECT

Hvis der opstår konflikt mellem:

AI-strategi

domænelagets regler

skal domænelagets beslutning altid vinde.

Orkestreringslaget fungerer udelukkende
som håndhæver af disse beslutninger.

8. Session og kontinuitet

Orkestreringslaget er ansvarligt for:

sessionens kontinuitet

bevarelse af aktuel tilstand

konsistens på tværs af brugerinput

Orkestreringslaget må ikke:

akkumulere terapeutisk kontekst

udlede mønstre over tid

foretage langtidsevaluering

genåbne en STOPPED eller REDIRECT session

Session anvendes udelukkende
til korrekt state-transition.

9. Forbudt adfærd

Orkestreringslaget må aldrig:

generere tekst

stille spørgsmål

forklare beslutninger

blødgøre stop

forsøge at “hjælpe mere”

fortsætte dialog efter REDIRECT

Hvis ingen transition er tilladt,
skal systemet forblive i nuværende tilstand.

10. Invariante regler

Følgende regler gælder altid:

Orkestrering er deterministisk

Ingen implicit logik

Stop er irreversibelt i den aktuelle session

UI kan ikke omgå state

Orkestreringslaget må ikke lære over tid

Status

Dette dokument fastlægger
hvordan samtaler orkestreres
med eksplicit støtte for sikkerhedsstop
og ekstern overdragelse.

Orkestrering forbinder beslutning med flow –
intet mere, intet mindre.
