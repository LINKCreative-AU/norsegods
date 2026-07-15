import type { Entity } from "./types";

export const moreConcepts: Entity[] = [
  {
    slug: "ginnungagap",
    name: "Ginnungagap",
    oldNorse: "Ginnungagap",
    pronunciation: "GIN-oon-ga-gap",
    category: "concepts",
    kind: "The primordial void",
    summary:
      "The 'yawning gap' that existed before the world — the charged emptiness between fire and ice where the first life quickened.",
    description: [
      "Before earth, sea, and sky there was Ginnungagap: not mere nothing, but a yawning openness stretched between icy Niflheimr in the north and burning Múspellsheimr in the south. Its name may mean 'gap of gaps' or 'magically-charged void' — emptiness with potential, the blank page of the cosmos.",
      "Where the rivers of rime crept south and the sparks of Múspell drifted north, the void's middle grew 'mild as a windless sky,' and in that thaw the first being, Ymir, condensed out of dripping frost. Norse creation needs no creator speaking into darkness — just temperature differential and time. Medieval Norse geographers, wonderfully, kept the name in use: the sea between Greenland and Vinland appears on old maps as Ginnungagap, the world's edge filed under cartography.",
    ],
    facts: [
      { label: "Position", value: "Between Niflheimr's ice and Múspellsheimr's fire" },
      { label: "Produced", value: "Ymir and Auðumbla, from melting rime" },
    ],
    relations: [
      { type: "First being", slug: "ymir", name: "Ymir" },
      { type: "The story", slug: "creation-of-the-world", name: "The Creation of the World" },
    ],
    attestations: ["Poetic Edda (Völuspá)", "Prose Edda (Gylfaginning)"],
    tags: ["void", "creation", "cosmology"],
  },
  {
    slug: "folkvangr",
    name: "Fólkvangr",
    oldNorse: "Fólkvangr",
    pronunciation: "FOLK-vang-r",
    category: "concepts",
    kind: "Freyja's field of the slain",
    summary:
      "'Army-field', Freyja's realm of the afterlife — where she chooses half of all the battle-slain each day, before Odin gets the rest.",
    description: [
      "Valhalla's fame has buried the mythology's most startling personnel fact: Odin gets seconds. Grímnismál is explicit — Fólkvangr is the ninth hall, 'and there Freyja arranges the choosing of seats in the hall; half the slain she chooses every day, and half has Odin.' The goddess of love picks first from the battlefield.",
      "Her hall there is Sessrúmnir, 'seat-roomy.' What her half of the dead do — whether they fight and feast like the einherjar, or something gentler — no source says, and the silence has bred theories: a warrior's paradise for those who fought for love of home rather than glory, say some; an older war-goddess's due, say scholars. One saga heroine, refusing to outlive her husband, declares she will 'sup with Freyja tonight' — for at least some of the North, the desirable afterlife wore Brísingamen.",
    ],
    facts: [
      { label: "Meaning", value: "'Field of the host'" },
      { label: "Hall", value: "Sessrúmnir" },
      { label: "The split", value: "Freyja chooses half the slain — daily, and first" },
    ],
    relations: [
      { type: "Mistress", slug: "freyja", name: "Freyja" },
      { type: "Counterpart", slug: "valhalla", name: "Valhalla" },
    ],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning)", "Egils saga"],
    tags: ["afterlife", "freyja", "slain"],
  },
  {
    slug: "hlidskjalf",
    name: "Hliðskjálf",
    oldNorse: "Hliðskjálf",
    pronunciation: "HLITH-skyalv",
    category: "concepts",
    kind: "Odin's high seat",
    summary:
      "The high seat from which Odin looks out over all the worlds and sees everything that happens — surveillance as furniture.",
    description: [
      "In Valaskjálf, the silver-roofed hall, stands the seat called Hliðskjálf, and whoever sits in it sees over all worlds and every being's doings. It is Odin's chair; only Frigg is licensed to share it. The Allfather's omniscience is not a divine attribute but a piece of equipment — knowledge, as always in the North, has a physical address.",
      "The myths use it as a plot-starter. From Hliðskjálf Odin spots Fenrir's growth rate, and dispatches gods; from it Freyr — sitting where he shouldn't — sees the giantess Gerðr raise her shining arms, and the lovesickness that costs him his sword begins. The seat shows everything and protects from nothing: the two times we watch someone use it, what they see is their doom approaching.",
    ],
    facts: [
      { label: "Location", value: "The hall Valaskjálf" },
      { label: "Power", value: "Sight over all worlds" },
      { label: "Licensed users", value: "Odin — and Frigg alone beside him" },
    ],
    relations: [
      { type: "Owner", slug: "odin", name: "Odin" },
      { type: "Trespasser", slug: "freyr", name: "Freyr" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Skírnismál, Grímnismál prose)"],
    tags: ["odin", "seat", "omniscience"],
  },
  {
    slug: "vigrid",
    name: "Vígríðr",
    oldNorse: "Vígríðr",
    pronunciation: "VEEG-reethr",
    category: "concepts",
    kind: "The battlefield of Ragnarök",
    summary:
      "The plain, a hundred leagues on every side, where gods and giants meet for the last battle — the address of the end of the world.",
    description: [
      "The end of the world has a venue, booked in advance. Vígríðr ('the field where battle surges') stretches a hundred leagues in every direction — Vafþrúðnir cites its dimensions as settled fact, the way one might give the acreage of a famous farm. There Surtr's fire-host, the frost-giants, Loki with the dead of Hel, Fenrir, and the World Serpent will form against the gods and the einherjar marching out of Valhalla's doors.",
      "Every named duel of Ragnarök — Odin and the wolf, Thor and the serpent, Freyr and Surtr, Heimdallr and Loki — happens on this grass. That the battlefield is known, measured, and unavoidable centuries in advance is the purest expression of Norse fatalism: the gods could, in principle, simply not attend. They will attend.",
    ],
    facts: [
      { label: "Size", value: "One hundred leagues on every side" },
      { label: "Event", value: "The final battle of Ragnarök" },
    ],
    relations: [
      { type: "The event", slug: "ragnarok", name: "Ragnarök" },
    ],
    attestations: ["Poetic Edda (Vafþrúðnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["ragnarok", "battlefield", "fate"],
  },
  {
    slug: "nastrond",
    name: "Náströnd",
    oldNorse: "Náströnd",
    pronunciation: "NOW-strund",
    category: "concepts",
    kind: "The shore of corpses",
    summary:
      "The hall of punishment in the world of the dead: woven of serpents whose venom drips inward, where oath-breakers and murderers wade — and Níðhöggr feeds.",
    description: [
      "Norse religion mostly lacks a hell of punishment — the ordinary dead simply continue, grey and quiet, in Hel. Náströnd ('Corpse-shore') is the exception, and Völuspá's description of it is the most gothic passage in the poetry: a hall standing far from the sun, doors facing north, walls woven of living serpents whose heads point inward, dripping venom in rivers through which men wade.",
      "Admission is by deed, and the list is short and specific: oath-breakers, murderers, and seducers of other men's wives. There Níðhöggr sucks the corpses and 'the wolf tears men.' Three crimes — against the sworn word, against life, against the household — were what the North found unforgivable; everything else, apparently, you could discuss with Hel like an adult.",
    ],
    facts: [
      { label: "Architecture", value: "Woven serpents, venom dripping inward; doors face north" },
      { label: "Inmates", value: "Oath-breakers, murderers, seducers of others' wives" },
      { label: "Resident", value: "Níðhöggr, feeding" },
    ],
    relations: [
      { type: "The dragon", slug: "nidhogg", name: "Níðhöggr" },
      { type: "Region of", slug: "helheim", name: "Helheimr" },
    ],
    attestations: ["Poetic Edda (Völuspá)", "Prose Edda (Gylfaginning)"],
    tags: ["punishment", "dead", "serpents", "oath"],
  },
  {
    slug: "urdarbrunnr",
    name: "Urðarbrunnr",
    oldNorse: "Urðarbrunnr",
    pronunciation: "OOR-thar-broon-r",
    category: "concepts",
    kind: "The Well of Fate",
    summary:
      "The holy well beneath Yggdrasil where the norns dwell and the gods hold their daily court — the water so sacred it turns everything it touches white.",
    description: [
      "Under the root of Yggdrasil that stands in heaven lies Urðarbrunnr, the Well of Urðr — of Fate itself. Here the gods ride over Bifröst each day to sit in judgment; here the three norns live in their hall, drawing water and the clay around it to daub the world-tree so it does not rot. Everything that water touches, Snorri notes, turns as white as the film inside an eggshell, and the dew that falls from the tree there is what men call honeydew, food of bees.",
      "Two swans swim on it, ancestors of all swans — whiteness breeding whiteness at the source of fate. The well is the mythology's supreme court and its water-supply of destiny: verdicts, tree-maintenance, and the carving of every life's course all issue from one address. When the gods want law, they commute to fate's front yard.",
    ],
    facts: [
      { label: "Location", value: "Beneath Yggdrasil's heavenward root" },
      { label: "Residents", value: "The three norns; two ancestral swans" },
      { label: "Function", value: "The gods' daily court; source of the tree's healing clay" },
    ],
    relations: [
      { type: "Keepers", slug: "norns", name: "The Norns" },
      { type: "The tree", slug: "yggdrasil", name: "Yggdrasil" },
    ],
    attestations: ["Poetic Edda (Völuspá)", "Prose Edda (Gylfaginning)"],
    tags: ["well", "fate", "norns", "court"],
  },
  {
    slug: "mimisbrunnr",
    name: "Mímisbrunnr",
    oldNorse: "Mímisbrunnr",
    pronunciation: "MEE-mis-broon-r",
    category: "concepts",
    kind: "The Well of Wisdom",
    summary:
      "Mímir's well beneath the giant-ward root of Yggdrasil, where wisdom is stored like groundwater — and where Odin's pledged eye still lies.",
    description: [
      "Under the root of Yggdrasil that reaches toward the frost-giants lies the well where 'wisdom and intelligence are hidden.' Its keeper Mímir drinks from it every morning out of the Gjallarhorn, and is the wisest of beings because of it. Knowledge, in this cosmology, is a natural resource with one wellhead and one licensee.",
      "Odin came to drink and was quoted a price: an eye. He paid — and Völuspá's seeress twists the knife by telling him she knows exactly where it is: 'in the famous well of Mímir, where Mímir drinks mead every morning from Valföðr's pledge.' The god of wisdom watches the world with one eye because the other is submerged in wisdom's source — depth perception traded, as it were, for depth.",
    ],
    facts: [
      { label: "Location", value: "Beneath the root toward Jötunheimr" },
      { label: "Keeper", value: "Mímir" },
      { label: "Contents", value: "Wisdom — and Odin's eye" },
    ],
    relations: [
      { type: "Keeper", slug: "mimir", name: "Mímir" },
      { type: "Paid the price", slug: "odin", name: "Odin" },
    ],
    attestations: ["Poetic Edda (Völuspá)", "Prose Edda (Gylfaginning)"],
    tags: ["well", "wisdom", "eye", "odin"],
  },
  {
    slug: "hvergelmir",
    name: "Hvergelmir",
    oldNorse: "Hvergelmir",
    pronunciation: "HVER-gel-mir",
    category: "concepts",
    kind: "The roaring cauldron-spring",
    summary:
      "The seething spring in Niflheimr beneath Yggdrasil's third root — source of all the world's rivers, and the oldest water in the cosmos.",
    description: [
      "Hvergelmir ('roaring kettle') is the cosmos's water main: the boiling spring in Niflheimr from which the eleven rivers called Élivágar first flowed into the void to freeze into the stuff of creation — and from which, Grímnismál says, all rivers still run. The hart Eikþyrnir stands on Valhalla's roof, and the drip from his antlers falls all the way down into Hvergelmir: the water cycle, routed through the gods' attic.",
      "It is also the worst address in the cosmology. Beneath the root that arches over it, Níðhöggr and 'more serpents than any fool can imagine' — Grímnismál names them like a landlord reading a tenant list — gnaw the tree from below, and dead bodies are theirs. First spring, last drain: everything begins and rots in the same water.",
    ],
    facts: [
      { label: "Location", value: "Niflheimr, beneath Yggdrasil's third root" },
      { label: "Source of", value: "The Élivágar and all rivers" },
      { label: "Neighbours", value: "Níðhöggr and innumerable serpents" },
    ],
    relations: [
      { type: "Realm", slug: "niflheim", name: "Niflheimr" },
      { type: "Resident", slug: "nidhogg", name: "Níðhöggr" },
    ],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["spring", "rivers", "niflheim"],
  },
  {
    slug: "fimbulvetr",
    name: "Fimbulvetr",
    oldNorse: "Fimbulvetr",
    pronunciation: "FIM-bul-vet-r",
    category: "concepts",
    kind: "The Great Winter before Ragnarök",
    summary:
      "Three winters with no summer between them: snow from all directions, biting frost and wind — the climate collapse that opens the end of the world.",
    description: [
      "Ragnarök does not begin with a battle cry but with a weather report. Fimbulvetr, 'the mighty winter,' is three winters running with no summer between: snow driving from every direction at once, great frosts, keen winds, a sun that gives no warmth. Before the first sword is drawn, the world starves — and 'brothers will fight and kill each other for greed's sake'; the social thaw precedes the military one.",
      "It is hard not to hear real weather in it. The volcanic dust-veil of 536 AD dropped Scandinavian summer temperatures for years, killed harvests, and — archaeologists argue — up to half the population of parts of Scandinavia; some scholars think Fimbulvetr is that catastrophe remembered as prophecy. Two humans, Líf and Lífþrasir, wait out the Great Winter and everything after it hidden in the wood of Yggdrasil, and repeople the green world that follows.",
    ],
    facts: [
      { label: "Duration", value: "Three winters, no summers between" },
      { label: "Effects", value: "Universal famine; kin-strife; the moral winter first" },
      { label: "Possible memory", value: "The volcanic climate disaster of 536 AD" },
    ],
    relations: [
      { type: "Opens", slug: "ragnarok", name: "Ragnarök" },
    ],
    attestations: ["Poetic Edda (Vafþrúðnismál, Völuspá)", "Prose Edda (Gylfaginning)"],
    tags: ["winter", "ragnarok", "climate", "omen"],
  },
  {
    slug: "kenning",
    name: "Kennings",
    oldNorse: "Kenningar",
    pronunciation: "KEN-ing-ar",
    category: "concepts",
    kind: "The riddling metaphors of Norse poetry",
    summary:
      "The compressed metaphors of skaldic verse — the sea is the 'whale-road', gold is 'Freyja's tears', battle is the 'storm of spears' — poetry as a puzzle built from mythology.",
    description: [
      "A kenning names a thing by way of two others: the sea is the whale-road, a ship the wave-steed, a sword the wound-serpent, blood the raven's drink. Simple ones decorate; the great ones require the whole mythology as a decoder ring — gold is 'Sif's hair,' 'Freyja's tears,' 'otter's ransom,' or 'Ægir's fire,' and each unlocks only if you know the story. Skaldic verse could stack them recursively ('the feeder of the swan of the sweat of the wound-thorn' = warrior), turning poems into ciphers that a hall of listeners raced to crack.",
      "This is why the myths survived at all: kennings made mythology load-bearing infrastructure for poetry, and when young Christian-era poets could no longer parse them, Snorri wrote the Prose Edda as, literally, a kenning dictionary. Every entry in this database is, among other things, a key to somebody's thousand-year-old metaphor.",
    ],
    facts: [
      { label: "Form", value: "A two-part (or nested) metaphoric name" },
      { label: "Classics", value: "Whale-road (sea), wound-serpent (sword), Freyja's tears (gold)" },
      { label: "Legacy", value: "The reason Snorri wrote the Prose Edda" },
    ],
    relations: [
      { type: "Codified in", slug: "prose-edda", name: "The Prose Edda (Skáldskaparmál)" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "the entire skaldic corpus"],
    tags: ["poetry", "metaphor", "skalds"],
  },
  {
    slug: "blot",
    name: "Blót",
    oldNorse: "Blót",
    pronunciation: "BLOHT",
    category: "concepts",
    kind: "The Norse sacrifice-feast",
    summary:
      "The central ritual of Norse religion: a sacrificial feast where animals were offered, their blood sprinkled on altar and worshippers, and toasts drunk to the gods for victory and good seasons.",
    description: [
      "Norse religion had no scripture and little theology; it had blót — 'sacrifice,' cognate with blood. The community gathered at a temple or holy place, animals (typically horses, boars, cattle) were killed, the blood — hlaut — was caught in bowls and sprinkled with twigs on the altar, walls, and participants, and the meat was boiled and shared as a feast. Toasts structured the evening: to Odin for victory and the king, to Njörðr and Freyr for peace and good seasons (til árs ok friðar), then the minni, memorial cups for dead kin.",
      "The calendar ran on it — autumn blót, midwinter Yule blót, summer victory blót — and the sagas record its stubbornness: kings who tried to skip the sacrifice faced farmers who would not plant without it, and at Uppsala the great blót every ninth year, per Adam of Bremen's scandalised report, hung nine of every male creature in the sacred grove. When conversion came, the feast and its toasts survived baptism almost intact: Yule kept its name, and the drinking kept its structure.",
    ],
    facts: [
      { label: "Meaning", value: "'Sacrifice' — related to blood" },
      { label: "Structure", value: "Slaughter, blood-sprinkling, boiled feast, ritual toasts" },
      { label: "Formula", value: "Til árs ok friðar — 'for good seasons and peace'" },
    ],
    relations: [
      { type: "Great toast gods", slug: "freyr", name: "Freyr and Njörðr" },
      { type: "Documented in", slug: "heimskringla", name: "Heimskringla" },
    ],
    attestations: ["Heimskringla (Hákonar saga góða)", "Adam of Bremen on Uppsala", "Eyrbyggja saga"],
    tags: ["ritual", "sacrifice", "religion", "yule"],
  },
  {
    slug: "draugr",
    name: "Draugr",
    oldNorse: "Draugr",
    pronunciation: "DROW-gr",
    category: "concepts",
    kind: "The Norse undead",
    summary:
      "The restless corpse of Norse belief: swollen, corpse-black, hideously strong, guarding its grave-mound treasure and breaking the necks of the living — killable only by wrestling it back into death.",
    description: [
      "The draugr (also aptrgangr, 'again-walker') is not a ghost but the body itself, up and about: blue-black or corpse-pale, swollen to enormous weight, strong beyond nature, stinking, and malicious. It guards the treasure in its burial mound, rides roofs at night (a saga detail of genius — the dead man drumming his heels on your rooftree), kills livestock, and breaks the bones of those it catches. Some grow so baleful that whole valleys empty.",
      "The sagas treat draugr-slaying as a genre: Grettir's wrestling match with Glámr — whose dying curse ruins the hero's luck and fills him with fear of the dark — is the masterpiece. Remedies were physical, because the problem was: decapitate the corpse, burn it, dump the ashes at sea; preventively, carry the coffin out through a hole in the wall (bricked up after) so the dead cannot find the door. Every modern zombie that guards a dungeon and every revenant with unfinished business is walking in Glámr's moon-lit footprints.",
    ],
    facts: [
      { label: "Nature", value: "The animate corpse itself — not a spirit" },
      { label: "Habits", value: "Mound-guarding, roof-riding, neck-breaking" },
      { label: "Cure", value: "Beheading and burning; ashes to the sea" },
    ],
    relations: [
      { type: "Famous case", name: "Glámr, in Grettis saga" },
    ],
    attestations: ["Grettis saga", "Eyrbyggja saga", "Laxdæla saga"],
    tags: ["undead", "revenant", "sagas", "horror"],
  },
  {
    slug: "orlog",
    name: "Ørlög and Wyrd",
    oldNorse: "Ørlög",
    pronunciation: "UR-lurg",
    category: "concepts",
    kind: "The primal law of fate",
    summary:
      "The Norse concept of fate: the 'primal layers' laid down by the norns that even gods cannot amend — freedom exists only in how you meet what is already written.",
    description: [
      "Ørlög — 'primal law,' the ur-layers laid down at the beginning — is the bedrock concept of the whole religion. Fate in the North is not a plan or a punishment; it is sediment: what has been laid down, layer on layer, by the norns at the well and by every deed since. The Old English cousin is wyrd, and both descend from the verb 'to become': fate is simply that which has already become, seen from in front.",
      "Nothing in the mythology moves without it. The gods know their deaths in advance and attend them anyway; Baldr's mother reads the omens and loses him regardless; Odin's whole career of eye-pawning and corpse-interrogation is an intelligence operation against a verdict he cannot appeal. What remains free is bearing — the one thing the norns do not carve is how you stand when it arrives. That narrow, stubborn freedom is the entire Norse heroic ethic, and the reason the myths still land: everyone dies; the style is yours.",
    ],
    facts: [
      { label: "Meaning", value: "'Primal layers / primal law'" },
      { label: "Laid by", value: "The norns, at the well of Urðr" },
      { label: "Scope", value: "Binds gods and men alike, without appeal" },
    ],
    relations: [
      { type: "Administrators", slug: "norns", name: "The Norns" },
      { type: "Ultimate case", slug: "ragnarok", name: "Ragnarök" },
    ],
    attestations: ["Poetic Edda (Völuspá, Hávamál)", "the sagas throughout"],
    tags: ["fate", "wyrd", "philosophy", "norns"],
  },
];
