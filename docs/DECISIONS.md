# DECISIONS  
## Gaarsdal Layered AI Prototype – Arkitektoniske beslutninger

Dette dokument logger **bevidste, arkitektoniske beslutninger**
truffet i forbindelse med `gaarsdal-layered-prototype-v1`.

Formålet er:
- at fastholde hvorfor systemet er designet, som det er
- at undgå gentagne diskussioner
- at beskytte arkitekturen mod gradvis udvanding

Beslutninger ændres **kun** ved eksplicit opdatering af dette dokument.

---

## 2025 – Grundlæggende arkitektur

### D1 – Prototype frem for produkt
**Beslutning:**  
Systemet er defineret som en **arkitektur- og læringsprototype**, ikke et færdigt produkt.

**Begrundelse:**  
Fokus er:
- isolation
- etik
- forklarbarhed
- genbrug af beslutningslogik  
ikke performance, UX-optimering eller drift.

---

### D2 – AI er en beslutningsmotor, ikke en chatbot
**Beslutning:**  
AI’en producerer **beslutningsforslag og strategier**, ikke tekst.

**Begrundelse:**  
Dette:
- forhindrer terapeutisk adfærd i AI
- gør etik testbar
- muliggør genbrug på tværs af UI’er
- reducerer risiko for “hjælpende” hallucinationer

---

### D3 – Stram lagdeling med entydigt ansvar
**Beslutning:**  
Systemet opdeles i klart adskilte lag:
- UI
- Orkestrering
- Domæne
- AI-adfærd
- Infrastruktur

**Begrundelse:**  
Ingen lag må:
- kende rationale fra andre lag
- overtage etisk ansvar
- kompensere for manglende beslutninger

---

### D4 – Domænet er hypnoterapi som fag, ikke systemets handlemuligheder
**Beslutning:**  
Domænet repræsenterer **faglig sandhed om hypnoterapi**,
herunder traumer og PTSD,
uanset hvad systemet operativt må gøre.

**Begrundelse:**  
Reduceret domæne fører til:
- falsk faglighed
- uærlige begrænsninger
- svækket genbrug

Begrænsninger håndteres i **operative regler**, ikke ved at fordreje domænet.

---

### D5 – Traumer og PTSD er del af domænet, men forbudt for systemet at intervenere i
**Beslutning:**  
Systemet må **aldrig** udføre eller facilitere
hypnotisk eller terapeutisk arbejde
i relation til traumer og PTSD.

**Begrundelse:**  
Dette balancerer:
- faglig sandhed
- etisk ansvar
- systemsikkerhed

---

### D6 – Vægtet multi-signal-evaluering
**Beslutning:**  
AI identificerer flere samtidige signaler,
vurderer hvilket signal brugeren fremstår mest optaget af,
og foreslår handlinger relateret til dette signal.

Sekundære risikosignaler kan overtrumfe og føre til stop.

**Begrundelse:**  
Menneskelige input er sjældent entydige.
Mekanisk prioritering er utilstrækkelig.
Etisk konservatisme bevares via domænelaget.

---

### D7 – Konservativ default ved usikkerhed
**Beslutning:**  
Manglende information, konfliktende signaler
eller uafklaret sårbarhed
fører til pause, afgrænsning eller stop.

**Begrundelse:**  
Systemet må hellere stoppe for tidligt end for sent.

---

### D8 – Observability er passiv og tværgående
**Beslutning:**  
Observability eksisterer uden for beslutningsflowet
og påvirker aldrig systemets adfærd.

**Begrundelse:**  
Observability er til:
- audit
- læring
- forklarbarhed  
ikke til styring eller feedback loops.

---

### D9 – Orkestrering som deterministisk state machine
**Beslutning:**  
Samtaleflow håndteres af et deterministisk orkestreringslag
uden egen logik eller fortolkning.

**Begrundelse:**  
Flow skal være:
- forudsigeligt
- testbart
- uafhængigt af AI-kreativitet

---

### D10 – UI er “dumt” og uden etisk autoritet
**Beslutning:**  
UI må ikke:
- stille spørgsmål på eget initiativ
- blødgøre stop
- forklare beslutninger
- kompensere for systemets begrænsninger

**Begrundelse:**  
UI er det mest sårbare lag
og må aldrig kunne omgå etik eller domænegrænser.

---

## Status

Dette dokument afspejler
den nuværende arkitektoniske sandhed
for `gaarsdal-layered-prototype-v1`.

Hvis noget føles forkert,
skal beslutningen ændres her –
ikke skjult i kode eller implementation.
