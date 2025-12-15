# ARCHITECTURE  
## Gaarsdal Layered AI Prototype – Referencearkitektur

Dette dokument beskriver den **normative arkitektur**
for `gaarsdal-layered-prototype-v1`.

Hvis implementering, kode eller senere systemer
afviger fra denne arkitektur,
betragtes det som en fejl,
medmindre dette dokument eksplicit opdateres.

---

## 1. Arkitekturprincipper

Arkitekturen er designet med fokus på:

- maksimal lagdeling og isolation
- ansvarlig og forklarbar AI-adfærd
- genbrug af beslutningslogik
- deterministisk etik

Systemet prioriterer:
> klarhed, ansvar og kontrol frem for fleksibilitet og hastighed

---

## 2. Overordnet arkitekturmodel

Systemet er opdelt i **klart adskilte lag** med entydigt ansvar.

Ingen lag må:
- kende årsagen bag beslutninger truffet i andre lag
- omgå eller ændre etiske stop
- overtage ansvar, der tilhører et andet lag

Lagene er designet til at kunne udskiftes uafhængigt.

---

## 3. Lagoversigt

### 3.1 Præsentationslag (UI)

**Ansvar:**
- vise indhold, tone og tempo
- håndtere brugerinteraktion
- præsentere handlinger besluttet andetsteds

**Må ikke:**
- have viden om stress, hypnose eller mental regulering
- træffe terapeutiske eller etiske beslutninger
- ændre eller blødgøre beslutninger

UI er bevidst “dumt”.

---

### 3.2 Interface / Orkestreringslag

**Ansvar:**
- håndtere samtalestates og transitions
- bevare session og flow
- oversætte beslutninger til UI-handlinger

**Må ikke:**
- kende rationale bag beslutninger
- justere beslutninger
- tilføje egen logik

Dette lag fungerer som en deterministisk state machine.

---

### 3.3 Domænelag (Regler & Etik)

**Ansvar:**
- definere domænebegreber (fx stress, regulering, stop)
- fastlægge etiske grænser
- afgøre, hvornår handlinger er tilladt eller forbudt

**Karakteristika:**
- deterministisk
- AI-uafhængigt
- testbart uden UI

Domænelaget indeholder ingen AI
og må aldrig være afhængigt af AI-output.

---

### 3.4 AI-adfærdslag (Beslutningsmotor)

**Ansvar:**
- fortolke signaler i brugerinput (intent, affekt)
- vælge mellem foruddefinerede strategier

**Output:**
- strukturerede handlinger og strategier
- ingen tekst
- ingen UI-viden

**Må ikke:**
- opfinde nye strategier
- formulere sprog
- træffe etiske beslutninger

AI fungerer udelukkende som rådgivende beslutningsmotor.

---

### 3.5 Infrastruktur / Platform

**Ansvar:**
- transport, drift og eksekvering
- latency, skalerbarhed og deployment

**Må ikke:**
- påvirke domæne, etik eller beslutninger

Dette lag er bevidst sekundært i arkitekturen.

---

## 4. Observability og Audit (Tværgående funktion)

Observability er en **tværgående, passiv funktion**,
der eksisterer uden for beslutningsflowet.

**Formål:**
- registrere beslutninger og transitions
- muliggøre audit, læring og forklarbarhed
- understøtte etisk revision

**Observability må aldrig:**
- initiere handlinger
- påvirke beslutninger
- fungere som input til AI, domænelag eller UI
- forklare beslutninger direkte til brugeren

Observability eksisterer for mennesker – ikke for systemet selv.

---

## 5. Arkitektoniske garantier

Denne arkitektur garanterer, at:

- etik ikke kan omgås af UI
- AI ikke kan tale direkte til brugeren
- beslutninger kan forklares uden AI-fortolkning
- domænelogik kan genbruges på tværs af produkter

---

## Status

Denne arkitektur er gældende fra første commit
og danner grundlag for alle efterfølgende beslutninger
i projektet.
