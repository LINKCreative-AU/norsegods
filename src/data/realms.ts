import type { Entity } from "./types";

export const realms: Entity[] = [
  {
    slug: "asgard",
    name: "Asgard",
    oldNorse: "Ásgarðr",
    pronunciation: "AHS-gard",
    category: "realms",
    kind: "Realm of the Æsir",
    summary:
      "The fortified realm of the Æsir gods, high in the branches of Yggdrasil, reached by the rainbow bridge Bifröst — home of Valhalla and the halls of the gods.",
    description: [
      "Asgard ('Enclosure of the Æsir') is the gods' walled stronghold, connected to Midgard by the burning rainbow bridge Bifröst, which Heimdallr watches night and day. Within its wall stand the halls the poems love to catalogue: Odin's Valhalla with its roof of shields, Frigg's Fensalir, Baldr's Breiðablik, Heimdallr's Himinbjörg, and Glaðsheimr where the gods sit in council; at its heart lies the plain of Iðavöllr and the well of Urðr, where the gods hold court daily.",
      "Its great wall has a story: a lone builder offered to raise it in a single winter, demanding the sun, the moon, and Freyja if he finished. On Loki's advice the gods agreed — then panicked as the giant's stallion Svaðilfari hauled stone at impossible speed. Loki, as a mare, lured the horse away; the builder, revealed as a jötunn, was killed by Thor; and Asgard got its wall a few stones short of the price. At Ragnarök the sons of Múspell shatter Bifröst riding against it. In the reborn world, the surviving gods gather again on Iðavöllr and find the old golden game-pieces in the grass.",
    ],
    facts: [
      { label: "Inhabitants", value: "The Æsir" },
      { label: "Access", value: "The rainbow bridge Bifröst" },
      { label: "Landmarks", value: "Valhalla, Glaðsheimr, Iðavöllr, the well of Urðr" },
    ],
    relations: [
      { type: "Bridge", slug: "bifrost", name: "Bifröst" },
      { type: "Great hall", slug: "valhalla", name: "Valhalla" },
      { type: "Ruler", slug: "odin", name: "Odin" },
    ],
    attestations: ["Poetic Edda (Grímnismál, Völuspá)", "Prose Edda (Gylfaginning)"],
    tags: ["nine-realms", "aesir", "valhalla"],
  },
  {
    slug: "midgard",
    name: "Midgard",
    oldNorse: "Miðgarðr",
    pronunciation: "MID-gard",
    category: "realms",
    kind: "Realm of humankind",
    summary:
      "The 'Middle Enclosure' — the world of human beings, walled with Ymir's eyebrows, ringed by the ocean where the World Serpent lies coiled.",
    description: [
      "Midgard is the middle of everything: the human world, built by Odin and his brothers from the slain giant Ymir and fenced with his eyebrows against the jötnar outside. Beyond its coasts runs the world-ocean, and in that ocean lies Jörmungandr, the Midgard Serpent, wrapped around the world with its tail in its mouth — the horizon itself as a sleeping monster.",
      "On its shore Odin and his brothers found two trees, Askr ('Ash') and Embla, and made from them the first man and woman, giving breath, wit, and warmth. Every human lineage in the Norse world begins there. Midgard is linked to Asgard by Bifröst, and at Ragnarök it drowns beneath the serpent's coils and burns under Surtr's fire — then rises from the sea again, green, its fields growing unsown. The word survives as far as Tolkien's 'Middle-earth,' a direct calque of the Old Norse.",
    ],
    facts: [
      { label: "Inhabitants", value: "Humankind" },
      { label: "Made from", value: "The body of Ymir; walled with his eyebrows" },
      { label: "Encircled by", value: "The World Serpent, Jörmungandr" },
    ],
    relations: [
      { type: "Serpent", slug: "jormungandr", name: "Jörmungandr" },
      { type: "Built from", slug: "ymir", name: "Ymir" },
    ],
    attestations: ["Poetic Edda (Völuspá, Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["nine-realms", "humans", "middle-earth"],
  },
  {
    slug: "jotunheim",
    name: "Jötunheimr",
    oldNorse: "Jötunheimr",
    pronunciation: "YOH-tun-haym",
    category: "realms",
    kind: "Realm of the giants",
    epithets: ["Útgarðr — the Outer Yards"],
    summary:
      "The wild realm of the jötnar beyond the fences of gods and men — mountains, ironwood, and the strongholds of the giants, where the gods go to woo, steal, and fight.",
    description: [
      "Jötunheimr is everything outside the enclosures: the unfarmed, unfenced world of the giants, east of Midgard across the iron forest and over the river Ífingr, which never freezes. Here stand Útgarðr, stronghold of the illusionist king Útgarða-Loki; Þrymheimr, the mountain hall of Þjazi and Skaði; and Gastropnir, and the courts of wise Vafþrúðnir, whom Odin out-riddled for his head.",
      "For all its menace, the gods cannot stay away. Odin goes there for wisdom and the Mead of Poetry; Thor goes to break skulls; Freyr's heart goes there and costs him his sword; Loki comes from there. The jötnar are not simply evil — they are the gods' in-laws, rivals, and ancestors, the old powers of the untamed earth. The whole mythology runs on the traffic across that border, until at Ragnarök the border fails in both directions at once.",
    ],
    facts: [
      { label: "Inhabitants", value: "The jötnar (giants)" },
      { label: "Strongholds", value: "Útgarðr, Þrymheimr, the courts of Vafþrúðnir" },
      { label: "Border", value: "The river Ífingr, which never freezes" },
    ],
    relations: [
      { type: "King of illusions", slug: "utgarda-loki", name: "Útgarða-Loki" },
      { type: "Frequent visitor", slug: "thor", name: "Thor" },
    ],
    attestations: ["Poetic Edda (Vafþrúðnismál, Þrymskviða, Skírnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["nine-realms", "jotnar", "wilderness"],
  },
  {
    slug: "niflheim",
    name: "Niflheimr",
    oldNorse: "Niflheimr",
    pronunciation: "NIV-l-haym",
    category: "realms",
    kind: "Realm of primordial ice and mist",
    summary:
      "The world of ice, fog, and cold that existed before the earth — source of the eleven rivers of the void, and the region where Hel's realm of the dead lies.",
    description: [
      "Niflheimr ('Mist-world') is one of the two primordial worlds, the cold pole of the Norse cosmos, made ages before the earth. At its heart boils the spring Hvergelmir, mother of the eleven rivers called Élivágar, whose venom-cold waters flowed into the void Ginnungagap, froze layer on layer, and — meeting the sparks of Múspellsheimr — dripped into the first life, Ymir. All existence is the child of this frost meeting that fire.",
      "Under the world's renewal the region keeps its cold work: one of Yggdrasil's three roots reaches over Niflheimr, with Hvergelmir beneath it and the dragon Níðhöggr gnawing from below. Odin cast Hel down into this darkness and gave her the realm of the dead — hence 'Niflhel,' the misty hell into which the wicked dead die out of Hel itself, nine worlds down.",
    ],
    facts: [
      { label: "Nature", value: "Primordial ice, mist, and cold" },
      { label: "Spring", value: "Hvergelmir, source of the Élivágar rivers" },
      { label: "Beneath it", value: "Níðhöggr gnawing Yggdrasil's root; the road to Hel" },
    ],
    relations: [
      { type: "Opposite pole", slug: "muspelheim", name: "Múspellsheimr" },
      { type: "Dragon", slug: "nidhogg", name: "Níðhöggr" },
      { type: "Queen below", slug: "hel", name: "Hel" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Vafþrúðnismál)"],
    tags: ["nine-realms", "ice", "creation", "primordial"],
  },
  {
    slug: "muspelheim",
    name: "Múspellsheimr",
    oldNorse: "Múspellsheimr",
    pronunciation: "MOO-spells-haym",
    category: "realms",
    kind: "Realm of primordial fire",
    summary:
      "The world of fire that existed before the earth, guarded by Surtr with his flaming sword; its sparks became the sun, moon, and stars — and its riders end the world.",
    description: [
      "Múspellsheimr is the fire that was burning before anything else existed: the southern primordial world, 'bright and hot, flaming and burning,' impassable to any not born to it. Its sparks, thrown into the void, met the ice of Niflheimr and quickened Ymir; and the gods later caught drifting embers of Múspell and set them in the sky as the sun, the moon, and the stars. The cosmos is lit by borrowed fire.",
      "At its frontier sits Surtr with his burning sword, waiting. At Ragnarök the 'sons of Múspell' ride out behind him, a host of fire; Bifröst breaks beneath them, and on the plain of Vígríðr they form their own shining battle-line. When the fighting is done, Surtr flings fire over all things, and the world that began with Múspell's sparks ends in Múspell's flame.",
    ],
    facts: [
      { label: "Nature", value: "Primordial fire" },
      { label: "Guardian", value: "Surtr, with his flaming sword" },
      { label: "Gave the sky", value: "Sun, moon, and stars are its captured sparks" },
    ],
    relations: [
      { type: "Guardian", slug: "surtr", name: "Surtr" },
      { type: "Opposite pole", slug: "niflheim", name: "Niflheimr" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Völuspá)"],
    tags: ["nine-realms", "fire", "creation", "ragnarok"],
  },
  {
    slug: "vanaheim",
    name: "Vanaheimr",
    oldNorse: "Vanaheimr",
    pronunciation: "VAH-nah-haym",
    category: "realms",
    kind: "Realm of the Vanir",
    summary:
      "The realm of the Vanir, the gods of fertility, wealth, and seiðr magic — homeland of Njörðr, Freyr, and Freyja, joined to the Æsir by hostage-exchange after the first war.",
    description: [
      "Vanaheimr is the least-described of the nine worlds: home of the Vanir, the 'other' family of gods associated with fertility, prosperity, the sea, and the fate-magic called seiðr. Its location is given only as west of Asgard, and no poem takes us inside; the Vanir we know — Njörðr, Freyr, Freyja — we know because they left it.",
      "They left as hostages. The first war in the world, between Æsir and Vanir, ended in stalemate and a peace sealed by exchange: Njörðr and his children went to Asgard, while Hœnir and wise Mímir went to Vanaheimr — a trade the Vanir came to regret, beheading Mímir when Hœnir proved useless without him. Vafþrúðnismál adds one quiet detail: at Ragnarök's end, Njörðr will go home 'to the wise Vanir' — implying Vanaheimr, unlike almost everything else, survives.",
    ],
    facts: [
      { label: "Inhabitants", value: "The Vanir" },
      { label: "Known natives", value: "Njörðr, Freyr, Freyja, Kvasir" },
      { label: "Note", value: "Njörðr returns there after Ragnarök" },
    ],
    relations: [
      { type: "Native", slug: "njord", name: "Njörðr" },
      { type: "War and peace", slug: "aesir-vanir-war", name: "The Æsir–Vanir War" },
    ],
    attestations: ["Poetic Edda (Vafþrúðnismál)", "Prose Edda (Gylfaginning)", "Heimskringla (Ynglinga saga)"],
    tags: ["nine-realms", "vanir", "fertility"],
  },
  {
    slug: "alfheim",
    name: "Álfheimr",
    oldNorse: "Álfheimr",
    pronunciation: "ALF-haym",
    category: "realms",
    kind: "Realm of the elves",
    summary:
      "The world of the light-elves, 'fairer than the sun to look upon,' given to the god Freyr as a tooth-gift in his infancy.",
    description: [
      "Álfheimr is the home of the ljósálfar, the light-elves, whom Snorri describes as 'fairer than the sun to look upon' — while the dark-elves below the earth are 'blacker than pitch.' Grímnismál records that the gods gave Álfheimr to Freyr as a tannfé, a tooth-gift, when he cut his first tooth: the fertility-lord thus rules the shining elves, and elves and Vanir run close together throughout the sources.",
      "The elves themselves hover between gods and ancestors. They received their own sacrifice — the álfablót, held privately at farms in autumn, strangers turned away at the door — and heroes like Óláfr Geirstaðaálfr were venerated as elves in their burial mounds after death. Álfheimr was also a real place-name: the coastal district between the mouths of the Göta and Glomma rivers, whose people were held to be 'more beautiful than other folk.'",
    ],
    facts: [
      { label: "Inhabitants", value: "The light-elves (ljósálfar)" },
      { label: "Lord", value: "Freyr, from his first tooth" },
      { label: "Cult", value: "The álfablót, a private autumn sacrifice to the elves" },
    ],
    relations: [{ type: "Lord", slug: "freyr", name: "Freyr" }],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning)", "Austrfararvísur"],
    tags: ["nine-realms", "elves", "freyr"],
  },
  {
    slug: "svartalfheim",
    name: "Svartálfaheimr",
    oldNorse: "Svartálfaheimr",
    pronunciation: "SVART-alva-haym",
    category: "realms",
    kind: "Realm of the dwarves",
    epithets: ["Niðavellir — the Dark Fields"],
    summary:
      "The underground world of the dwarves — master-smiths born as maggots in Ymir's flesh, who forged every great treasure the gods own.",
    description: [
      "Beneath the earth lie the Dark Fields — Niðavellir in Völuspá, Svartálfaheimr in Snorri — where the dwarves keep their forges. The dwarves began as maggots in the flesh of the dead giant Ymir, and the gods gave them wit and shape; four of them — Norðri, Suðri, Austri, Vestri — were set to hold up the sky itself at its corners.",
      "Everything irreplaceable in the mythology comes out of their smithies: Mjölnir, Gungnir, Draupnir, Skíðblaðnir, Sif's golden hair, Freyja's Brísingamen, the ribbon Gleipnir that binds Fenrir, and the Mead of Poetry brewed from Kvasir's blood. The gods rarely pay honestly for any of it — Loki's head-wager, coerced bindings, a stolen ring — and the cursed gold of Andvari, extorted in this realm, flows on into the tragedy of the Völsungs. Dwarves turn to stone in sunlight, and dealing with them in their darkness always carries a price.",
    ],
    facts: [
      { label: "Inhabitants", value: "The dwarves (dvergar)" },
      { label: "Origin", value: "Maggots in Ymir's flesh, given wit by the gods" },
      { label: "Products", value: "Mjölnir, Gungnir, Gleipnir, Brísingamen, and more" },
    ],
    relations: [
      { type: "Masterwork", slug: "mjolnir", name: "Mjölnir" },
      { type: "Masterwork", slug: "gleipnir", name: "Gleipnir" },
    ],
    attestations: ["Poetic Edda (Völuspá)", "Prose Edda (Gylfaginning, Skáldskaparmál)"],
    tags: ["nine-realms", "dwarves", "forging"],
  },
  {
    slug: "helheim",
    name: "Helheimr",
    oldNorse: "Hel",
    pronunciation: "HEL-haym",
    category: "realms",
    kind: "Realm of the dead",
    summary:
      "The realm of the ordinary dead beneath the roots of Yggdrasil, ruled by Loki's daughter Hel — reached by a long road north and down, over the river Gjöll.",
    description: [
      "Those who die of sickness, age, or plain bad luck travel the Helvegr, the Hel-road: north and downward for nine nights, through valleys dark and deep, over the river Gjöll on its gold-roofed bridge — where the maiden Móðguðr asks the dead their name and business — to the high gates of Hel. Within rules Hel, Loki's half-corpse daughter, in her hall Éljúðnir. It is not a place of torment but of grey continuation; the punishment shore of Náströnd, where Níðhöggr chews oath-breakers, lies at its worst edge.",
      "The realm's great story is an almost: Hermóðr rode Sleipnir down the Hel-road to ransom Baldr, leapt the gate itself, and won Hel's conditional yes — all things must weep. One giantess did not, and the gates kept him. At Ragnarök the dead sail out of Hel aboard Naglfar, the ship built of dead men's uncut nails — which is why, one text notes, the dead should be trimmed before burial: every neglected fingernail is a plank for the enemy.",
    ],
    facts: [
      { label: "Ruler", value: "Hel, daughter of Loki" },
      { label: "Road", value: "The Helvegr — nine nights north and down, over the river Gjöll" },
      { label: "Its dead", value: "Those who die of sickness, age, and mischance" },
      { label: "At Ragnarök", value: "Its dead sail against the gods on Naglfar" },
    ],
    relations: [
      { type: "Ruler", slug: "hel", name: "Hel" },
      { type: "Watch-hound", slug: "garm", name: "Garmr" },
      { type: "Famous visitor", slug: "baldr", name: "Baldr (and Hermóðr, who came for him)" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Baldrs draumar, Völuspá)"],
    tags: ["nine-realms", "death", "underworld"],
  },
];
