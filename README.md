# 1. Semester Eksamen 2025
## Forbedring af ExD - "Akvarie" projekt
> Lavet af: Martin Hammerum Ærensgaard
>> Ændringerne i  projektet findes på start-, og spil-siderne
### Optimeringer lavet i projektet er:
#### 1. Generelt
* Ændringer i mappstruktur
    * Filerne er blevet delt ordentligt op i passende mapper
        * Sikre bedre overblik og navigation på tværs af mapper og filer.
* Oprydning i HTML, CSS og JavaScript
    * SVG, GIF, ICO og konvention (kebab-case)
        * Skalerbare billeder og mere liv på siderne. Dertil også at man undgår fejl og skaber et bedre overblik og system ved brug af samme konvention.
    * Slettet unødvendige ting
        * Skaber bedre overblik over koden og forhindre fejl.
    * Korrekt navngivning
        * Forhindre fejl og forkert navigation.
    * Rettet valideringsfejl
        * Sikre at alt spiller som det skal og at man undgår fejl.
    * Optimerede root mapper i CSS mapperne
        * Sikre at samme farver og fonte bliver brugt samt undgår man gentagelser.
    * Ændring af font på knapperne
        * Sikre bedre sammenspil mellem Figma og kode/hjemmeside.
    * Lang = "da" frem for "en"

#### 2. Start-side
* Keyframes tilføjet
    * Glødende effekt tilføjet til skattekisten samt skygge effekt tilføjet til piratskibet
        * Skaber mere liv på siden.
* Responssiv side - media queries
    * Siden er gjort responsiv til 3 størrelser af skærme
        * Gør det muligt at skalere ned til flere skærmstørrelser uden at udseendet forværres.

#### 3. Spil-side
* Oprydning
    * Fixet tilbage knap - lagt i bunden samt forstørret
        * Gør det nemmere nå samt se knappen.
* Forbedring af spil-delen
    * Spillet er blevet mere fuldendt
        * Forhindringer er tilføjet så spilleren har mulighed for at tabe sine point.
        * Score system tilføjet.
        * Mønt tilføjet, hvilket tælles som point til scoren.
        * "Du tabte, prøv igen" knap/skærm tilføjet - vises ved kollesion med forhindringer eller sidens kanter.
        * Genstart spil funktion (nulstiller score) - tryk på "Du tabte, prøv igen" knappen for at starte forfra.
    * Dogder fixed - fjernet double id
        * Dodgeren bevægede sig upræcist og kunne bevæges ud over sidens kanter.