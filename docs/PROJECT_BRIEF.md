# PROJECT BRIEF  
## Gaarsdal Layered AI Prototype – Beslutnings- og Reguleringstest

---

## 1. Formål

Dette projekt er en **arkitektur- og læringsprototype** for design af
etisk kontrollerede, lagdelte AI-beslutningssystemer
til brug i samtalebaserede kontekster relateret til
stress, mental regulering og hypnotiske interventioner.

Projektet er **ikke**:
- et produkt
- en chatbot
- en terapeutisk løsning
- en implementeringsguide

Projektets primære formål er at undersøge og dokumentere:
- klar adskillelse mellem AI-adfærd og præsentation
- ansvarlig beslutningslogik
- genbrugelig domæne- og etiklogik
- robust isolation mellem lag

---

## 2. Grundlæggende præmis

AI’en i dette projekt betragtes **ikke** som en samtalepartner,
men som en **beslutningsmotor**, der:

- fortolker brugerinput (intent, affekt, signaler)
- vælger mellem foruddefinerede strategier
- producerer strukturerede handlinger – ikke tekst

Al sproglig formulering, tone og præsentation
er fuldstændigt adskilt fra AI’en.

---

## 3. Overordnet mål

At designe en arkitektur, hvor:

- AI aldrig taler direkte til brugeren
- AI aldrig træffer etiske beslutninger alene
- UI aldrig kan omgå eller blødgøre etik
- beslutninger kan forklares, testes og genbruges

Systemet skal være egnet som:
- referencearkitektur
- undervisningsmateriale
- eksperimentel test bench for ansvarlig AI-adfærd

---

## 4. Designprincipper (låst)

Projektet følger disse **uomgængelige principper**:

1. **Lagdeling før funktionalitet**  
   Arkitektonisk klarhed prioriteres over hurtig effekt.

2. **Isolation frem for fleksibilitet**  
   Ingen lag må kende årsagen bag beslutninger truffet i andre lag.

3. **Deterministisk etik**  
   Etiske grænser defineres som regler, ikke prompts.

4. **Genbrug af beslutninger, ikke UI**  
   Domæne- og beslutningslogik skal kunne genbruges på tværs af produkter.

5. **AI som rådgiver – aldrig autoritet**  
   AI må foreslå strategier, men aldrig definere sandhed, behandling eller løsning.

---

## 5. Bevidste fravalg

I denne prototype er følgende eksplicit fravalgt:

- Fokus på implementering, kode eller platform
- UI-design, brugeroplevelse eller visuel polish
- Hurtig iteration eller feature-udvidelse
- Produkt- eller kommerciel tænkning
- Terapeutisk behandling eller diagnosticering
- Selvstændig eller autonom AI-adfærd

Disse fravalg er **bevidste og dokumenterede**.

---

## 6. Etisk afgrænsning

Systemet må aldrig:

- udgive sig for at yde terapi eller behandling
- erstatte professionel vurdering
- opfordre til selvbehandling
- indgå i udforskende dialog om traumer eller psykisk lidelse
- skjule eller relativere etiske stop-beslutninger

Etik betragtes som et **førsteklasses arkitektonisk ansvar**,
ikke som et UI- eller prompt-anliggende.

---

## 7. Projektets rolle

Dette repository fungerer som:

- arkitektonisk kontrakt
- dokumenteret beslutningsgrundlag
- fælles reference for fremtidige iterationer

Hvis senere kode, implementering eller produkter
afviger fra dette dokument,
betragtes det som en fejl,
medmindre dokumentet eksplicit opdateres.

---

## Status

Dette dokument er gældende fra første commit
og udgør fundamentet for alle efterfølgende beslutninger
i projektet.
