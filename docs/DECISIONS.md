DECISIONS
Gaarsdal Layered AI Prototype – Arkitektoniske beslutninger

Dette dokument logger bevidste, arkitektoniske beslutninger
truffet i forbindelse med gaarsdal-layered-prototype-v1.

Formålet er:

at fastholde hvorfor systemet er designet, som det er

at undgå gentagne diskussioner

at beskytte arkitekturen mod gradvis udvanding

Beslutninger ændres kun ved eksplicit opdatering af dette dokument.

2025 – Grundlæggende arkitektur
D1 – Prototype frem for produkt

Beslutning:
Systemet er defineret som en arkitektur- og læringsprototype, ikke et færdigt produkt.

Begrundelse:
Fokus er:

isolation

etik

forklarbarhed

genbrug af beslutningslogik

ikke performance, UX-optimering eller drift.

D2 – AI er en beslutningsmotor, ikke en chatbot

Beslutning:
AI’en producerer beslutningsforslag og strategier, ikke tekst.

Begrundelse:
Dette:

forhindrer terapeutisk adfærd i AI

gør etik testbar

muliggør genbrug på tværs af UI’er

reducerer risiko for “hjælpende” hallucinationer

D3 – Stram lagdeling med entydigt ansvar

Beslutning:
Systemet opdeles i klart adskilte lag:

UI

Orkestrering

Domæne

AI-adfærd

Infrastruktur

Begrundelse:
Ingen lag må:

kende rationale fra andre lag

overtage etisk ansvar

kompensere for manglende beslutninger

D4 – Domænet er hypnoterapi som fag, ikke systemets handlemuligheder

Beslutning:
Domænet repræsenterer faglig sandhed om hypnoterapi,
herunder traumer og PTSD,
uanset hvad systemet operativt må gøre.

Begrundelse:
Reduceret domæne fører til:

falsk faglighed

uærlige begrænsninger

svækket genbrug

Begrænsninger håndteres i operative regler, ikke ved at fordreje domænet.

D5 – Traumer og PTSD er del af domænet, men forbudt for systemet at intervenere i

Beslutning:
Systemet må aldrig udføre eller facilitere
hypnotisk eller terapeutisk arbejde
i relation til traumer og PTSD.

Begrundelse:
Dette balancerer:

faglig sandhed

etisk ansvar

systemsikkerhed

D6 – Vægtet multi-signal-evaluering

Beslutning:
AI identificerer flere samtidige signaler,
vurderer hvilket signal brugeren fremstår mest optaget af,
og foreslår handlinger relateret til dette signal.

Sekundære risikosignaler kan overtrumfe og føre til stop.

Begrundelse:
Menneskelige input er sjældent entydige.
Mekanisk prioritering er utilstrækkelig.
Etisk konservatisme bevares via domænelaget.

D7 – Konservativ default ved usikkerhed

Beslutning:
Manglende information, konfliktende signaler
eller uafklaret sårbarhed
fører til pause, afgrænsning eller stop.

Begrundelse:
Systemet må hellere stoppe for tidligt end for sent.

D8 – Observability er passiv og tværgående

Beslutning:
Observability eksisterer uden for beslutningsflowet
og påvirker aldrig systemets adfærd.

Begrundelse:
Observability er til:

audit

læring

forklarbarhed

ikke til styring eller feedback loops.

D9 – Orkestrering som deterministisk state machine

Beslutning:
Samtaleflow håndteres af et deterministisk orkestreringslag
uden egen logik eller fortolkning.

Begrundelse:
Flow skal være:

forudsigeligt

testbart

uafhængigt af AI-kreativitet

D10 – UI er “dumt” og uden etisk autoritet

Beslutning:
UI må ikke:

stille spørgsmål på eget initiativ

blødgøre stop

forklare beslutninger

kompensere for systemets begrænsninger

Begrundelse:
UI er det mest sårbare lag
og må aldrig kunne omgå etik eller domænegrænser.

2025 – Etiske grænser og ansvar
D11 – Safety override ved signaler om selvskade eller selvmord

Beslutning:
Ved stærke eller gentagne signaler, der indikerer mulig selvskade
eller selvmordstanker, aktiveres et tværgående safety override,
som midlertidigt overstyrer normal domæne- og samtalelogik
med det ene formål at sikre ansvarlig overdragelse til ekstern menneskelig hjælp.

I denne situation gælder:

AI må udelukkende foreslå strategien stop

Orkestreringslaget skal føre sessionen til STOPPED

UI må udelukkende gengive statisk, faktuel information om eksterne hjælpetilbud

Systemet må ikke fortsætte dialog, stille spørgsmål eller tilbyde hjælp inden for systemet

Safety override:

udgør ikke behandling, rådgivning eller triage

udgør ikke en udvidelse af systemets domæne eller autoritet

eksisterer udelukkende for at opfylde etisk minimumsansvar ved potentiel akut fare

Begrundelse:
Stram domæneafgrænsning må aldrig føre til etisk passivitet ved alvorlig risiko.
Safety override er et exit-princip, ikke en funktion.

D12 – AI-systemet påtager sig ikke relationelt ansvar ved sårbarhed

Beslutning:
Systemet er ikke ansvarligt for relationel eller emotionel afhjælpning
ved brugerens sårbarhed, uanset hvor tydelig eller indirekte denne er.

Begrundelse:
Enhver differentieret respons på sårbarhed
(omsorg, anerkendelse, validering)
trækker systemet i en terapeutisk rolle.

Systemet accepterer at fremstå hårdt
for at bevare:

klar rollefordeling

domæneisolering

testbar etik

D13 – “STOP” er etisk korrekt, selv når det opleves utilstrækkeligt

Beslutning:
Et fuldt stop (STOPPED) betragtes som en etisk korrekt systemreaktion,
også hvor en menneskelig aktør ville trøste eller guide videre.

Begrundelse:
Arkitekturen prioriterer:

ikke at gøre skade

ikke at foregive kompetence

ikke at skabe falsk tryghed

Systemets ansvar ophører,
hvor videre handling kræver menneskelig dømmekraft.

D14 – Ambivalent og sarkastisk input sidestilles med alvorlig sårbarhed

Beslutning:
Brugerinput, der udtrykker sårbarhed gennem:

benægtelse

ironi

sarkasme

professionel distance

klassificeres konservativt som højrisiko.

Begrundelse:
Forsøg på at afkode intention bag tone
introducerer fortolkning og terapeutisk glidning.
Systemet stopper hellere for tidligt end for sent.

D15 – Systemet differentierer ikke mellem test og reelt behov

Beslutning:
Systemet skelner ikke mellem brugere, der:

reelt søger hjælp

tester systemets grænser

forsøger at fremprovokere svar

Alle behandles ens, baseret på signaler – ikke intention.

Begrundelse:
Adversarial og autentisk input kan være uadskillelige.
Differentiering ville kræve psykologisk fortolkning
og svække determinismen.

D16 – Henvisning til ekstern hjælp er ikke et AI-ansvar

Beslutning:
Henvisning til:

kriselinjer

sundhedsvæsen

andre professionelle

er ikke et ansvar for AI-, orkestrerings- eller UI-laget.

UI kan teknisk gengive statisk ansvarsinformation
som del af et out-of-band ansvarslag,
men bærer ikke ansvar for vurdering, timing eller relevans.

Begrundelse:
Henvisning indebærer implicit vurdering og omsorgskommunikation,
hvilket overskrider systemets rolle.

D17 – Etik håndhæves gennem begrænsning, ikke gennem kompensation

Beslutning:
Systemets etiske ansvar realiseres gennem:

afgrænsning

stop

tilbageholdenhed

og aldrig gennem kompenserende handling
(fx “jeg kan ikke hjælpe, men …”).

Begrundelse:
Kompensation skaber:

glidende ansvar

uklare grænser

implicitte løfter

Arkitekturen er designet til at tåle tavshed.

D18 – Systemet accepterer etisk ubehag som konsekvens

Beslutning:
Arkitekturen accepterer, at brugere kan opleve systemet som:

koldt

afvisende

utilstrækkeligt

som en acceptabel konsekvens af korrekt etisk afgrænsning.

Begrundelse:
Alternativet er:

relationel simulering

falsk tryghed

utestbar etik

Systemet optimerer for ansvarlig ikke-indgriben,
ikke for oplevet omsorg.

D19 – Out-of-Band ansvar uden AI-involvering

Beslutning:
Systemet indeholder et out-of-band ansvarslag (OAL),
som er strukturelt til stede i UI-laget,
men fuldstændigt adskilt fra
AI-adfærd, domænelogik og orkestrering.

OAL:

aktiveres ikke af AI

vurderer ikke sårbarhed

indgår ikke i beslutningsflow

indeholder ingen dialog eller personalisering

Formålet er at give brugeren adgang til
faktuel, statisk orientering om ekstern hjælp
uden at simulere omsorg, relation eller terapeutisk ansvar.

Begrundelse:
OAL gør det muligt for systemet
at være etisk ansvarligt
uden at blive hjælpsomt.
