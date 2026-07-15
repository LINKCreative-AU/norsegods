import type { Entity } from "./types";

export const artifacts: Entity[] = [
  {
    slug: "mjolnir",
    name: "Mjölnir",
    oldNorse: "Mjölnir",
    pronunciation: "MYOL-nir",
    category: "artifacts",
    kind: "Thor's hammer",
    summary:
      "The hammer of Thor, forged by the dwarves Brokkr and Sindri: it never misses, always returns to the thrower's hand, and was the most-worn amulet of the Viking Age.",
    description: [
      "Mjölnir was forged in a wager: Loki bet his own head that the dwarf brothers Brokkr and Sindri could not out-craft the smiths who made Gungnir and Skíðblaðnir. As Sindri worked, Loki became a fly and bit the bellows-hand — and the one flaw in the winning masterpiece is a shortened handle. The gods judged the hammer the finest treasure ever made, 'the best defence against the frost-giants,' and Loki kept his head on a technicality: the dwarves had no right to his neck.",
      "The hammer strikes as hard as Thor can throw, never misses, never breaks, returns to his hand, and can shrink to be carried inside his shirt. It is also a hallowing instrument — raised over brides, births, and funeral pyres; 'Thor hallow!' appears carved on rune-stones. When the giant Þrymr stole it and demanded Freyja as ransom, Thor went to the wedding veiled as the bride and slaughtered the hall when the hammer was laid in 'her' lap.",
      "Hundreds of Mjölnir pendants survive across the Norse world — many from the same decades as the first crosses, worn, sometimes, by the same smiths' customers. After Ragnarök, Thor's sons Magni and Móði inherit the hammer in the renewed world.",
    ],
    facts: [
      { label: "Smiths", value: "Brokkr and Sindri, dwarves" },
      { label: "Flaw", value: "A short handle — Loki's fly-bite" },
      { label: "Powers", value: "Never misses; returns to hand; hallows and blesses" },
      { label: "After Ragnarök", value: "Inherited by Magni and Móði" },
    ],
    relations: [
      { type: "Wielder", slug: "thor", name: "Thor" },
      { type: "Caused by", slug: "loki", name: "Loki's wager" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "Poetic Edda (Þrymskviða)", "Viking Age pendants and rune-stones"],
    tags: ["hammer", "thor", "dwarves", "amulet"],
  },
  {
    slug: "gungnir",
    name: "Gungnir",
    oldNorse: "Gungnir",
    pronunciation: "GOONG-nir",
    category: "artifacts",
    kind: "Odin's spear",
    summary:
      "The spear of Odin, forged by the sons of Ivaldi: it never stops in its thrust, and oaths sworn on its point are unbreakable.",
    description: [
      "Gungnir ('the Swaying One') came out of the first great dwarf-commission: after Loki sheared Sif's hair, the sons of Ivaldi forged the golden hair, the ship Skíðblaðnir, and the spear that never halts in its thrust, with runes carved on its point. Odin's oaths are sworn on it, which makes it the constitutional document of the cosmos: what is sworn on Gungnir binds even gods.",
      "Odin hung on Yggdrasil 'wounded by a spear' — his own — sacrificing himself to himself to win the runes. And the spear opens wars: hurling a spear over an enemy host dedicated them to Odin ('Óðinn á yðr alla!' — Odin owns you all), a rite Odin himself performs in Völuspá, casting Gungnir over the Vanir to begin the first war in the world. At Ragnarök he rides against Fenrir with Gungnir raised, and it is the last thing the spear does not win.",
    ],
    facts: [
      { label: "Smiths", value: "The sons of Ivaldi" },
      { label: "Power", value: "Never stops in its thrust; runes on its point" },
      { label: "Rite", value: "A spear-cast over an army dedicates it to Odin" },
    ],
    relations: [
      { type: "Wielder", slug: "odin", name: "Odin" },
      { type: "Opened", slug: "aesir-vanir-war", name: "The Æsir–Vanir War" },
    ],
    attestations: ["Poetic Edda (Völuspá, Hávamál, Sigrdrífumál)", "Prose Edda (Skáldskaparmál)"],
    tags: ["spear", "odin", "oaths", "war"],
  },
  {
    slug: "draupnir",
    name: "Draupnir",
    oldNorse: "Draupnir",
    pronunciation: "DROWP-nir",
    category: "artifacts",
    kind: "Odin's gold ring",
    summary:
      "Odin's arm-ring, forged by Brokkr and Sindri: every ninth night it drips eight new rings of equal weight — wealth that multiplies itself.",
    description: [
      "Draupnir ('the Dripper') is the economy of kingship cast in gold: every ninth night, eight rings of the same weight drip from it. In a world where lords were 'ring-givers' and loyalty was paid in arm-gold, a self-replicating ring is not a trinket — it is the bottomless treasury of the Allfather, forged by Brokkr and Sindri in the same wager that produced Mjölnir.",
      "Its most moving appearance is on a pyre: Odin laid Draupnir on Baldr's ship-funeral, and dead Baldr sent it back to his father from Hel with Hermóðr — a gift exchanged across the border of death, twice. Skírnismál has Freyr's messenger offer it (with eleven golden apples) to woo the giantess Gerðr, who refuses it flatly; even the ring that makes rings cannot buy everything.",
    ],
    facts: [
      { label: "Smiths", value: "Brokkr and Sindri" },
      { label: "Power", value: "Drips eight equal rings every ninth night" },
      { label: "Journey", value: "Burned with Baldr; returned from Hel" },
    ],
    relations: [
      { type: "Owner", slug: "odin", name: "Odin" },
      { type: "Grave-gift to", slug: "baldr", name: "Baldr" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál, Gylfaginning)", "Poetic Edda (Skírnismál)"],
    tags: ["ring", "gold", "odin", "baldr"],
  },
  {
    slug: "gleipnir",
    name: "Gleipnir",
    oldNorse: "Gleipnir",
    pronunciation: "GLAYP-nir",
    category: "artifacts",
    kind: "The binding of Fenrir",
    summary:
      "The dwarven ribbon, smooth as silk and stronger than any chain, forged from six impossible things to bind the wolf Fenrir until Ragnarök.",
    description: [
      "After the wolf Fenrir snapped the great chains Læðing and Drómi, the gods sent to the dwarves of Svartálfaheimr for something beyond metal. The dwarves forged Gleipnir ('Open One') from six things that do not exist: the sound of a cat's footfall, the beard of a woman, the roots of a mountain, the sinews of a bear, the breath of a fish, and the spittle of a bird. That is why, Snorri notes with a straight face, these things cannot be found now — they were all used up.",
      "The ribbon is soft and smooth as silk, and that is the trap: strength that looks like weakness. Fenrir, smelling deceit, demanded a god's hand in his mouth as surety; only Týr paid. The wolf strained, the ribbon hardened, and the gods laughed — 'all except Týr.' Fenrir lies bound by Gleipnir on the island Lyngvi, a sword propping his jaws, until the fetter breaks at Ragnarök. Gleipnir is the mythology's meditation on binding evil with cleverness rather than force — and on what the cleverness costs the one honest party to it.",
    ],
    facts: [
      { label: "Made of", value: "Six impossible things — cat's footfall, woman's beard, mountain's roots, bear's sinews, fish's breath, bird's spittle" },
      { label: "Nature", value: "Soft as a silk ribbon; unbreakable until Ragnarök" },
      { label: "Price", value: "Týr's right hand" },
    ],
    relations: [
      { type: "Binds", slug: "fenrir", name: "Fenrir" },
      { type: "Paid for by", slug: "tyr", name: "Týr" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Lokasenna, prose)"],
    tags: ["binding", "fenrir", "dwarves", "tyr"],  },
  {
    slug: "brisingamen",
    name: "Brísingamen",
    oldNorse: "Brísingamen",
    pronunciation: "BREE-sing-ah-men",
    category: "artifacts",
    kind: "Freyja's necklace",
    summary:
      "The shining necklace of Freyja, forged by four dwarves — the most famous treasure of the goddesses, once stolen by Loki and recovered by Heimdallr.",
    description: [
      "Brísingamen ('necklace of the Brísings', or perhaps 'of fire') is the emblem of Freyja's power and beauty. The late tale Sörla þáttr tells its price: Freyja found four dwarves forging it in a stone, and each demanded a night with her; she paid, wore the necklace — and Odin, learning of it from Loki, ordered it stolen in disgust, forcing Freyja into an endless war-charm as ransom. Older sources know the necklace without the scandal.",
      "The theft is old: Loki as 'thief of Brísingamen' is a fixed epithet, and one archaic poem preserves Heimdallr and Loki fighting in seal-shape at the skerry Singasteinn over the jewel, Heimdallr winning it back. When Thor disguised himself as Freyja to recover his hammer in Þrymskviða, Brísingamen on his chest was the finishing touch of the costume. In Beowulf, the 'Brosinga mene' appears as a treasure of legend — the necklace was famous across the whole Northern world.",
    ],
    facts: [
      { label: "Owner", value: "Freyja" },
      { label: "Smiths", value: "Four dwarves, in Sörla þáttr" },
      { label: "Stolen by", value: "Loki; recovered by Heimdallr in seal-fight" },
    ],
    relations: [
      { type: "Owner", slug: "freyja", name: "Freyja" },
      { type: "Thief", slug: "loki", name: "Loki" },
      { type: "Recovered by", slug: "heimdall", name: "Heimdallr" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "Poetic Edda (Þrymskviða)", "Sörla þáttr", "Húsdrápa", "Beowulf"],
    tags: ["necklace", "freyja", "dwarves", "gold"],
  },
  {
    slug: "skidbladnir",
    name: "Skíðblaðnir",
    oldNorse: "Skíðblaðnir",
    pronunciation: "SKEETH-blath-nir",
    category: "artifacts",
    kind: "Freyr's ship",
    summary:
      "The best of ships: big enough for all the gods with weapons and war-gear, always finding fair wind, and folding up like cloth to fit in a pouch.",
    description: [
      "Skíðblaðnir ('assembled from thin planks') was forged — carpentered — by the sons of Ivaldi in the same commission as Gungnir and Sif's golden hair, and given to Freyr. Its sail always finds a fair wind the moment it is hoisted; it is roomy enough to carry all the Æsir with their weapons; and when not needed it folds up like a napkin and rides in a pouch. Grímnismál ranks it flatly: as Yggdrasil is best of trees, Odin best of gods, and Sleipnir best of horses, Skíðblaðnir is best of ships.",
      "For a seafaring civilisation this is the wish-object above all others: the ship with no bad weather, no harbour fees, and no shipyard. Snorri, listing marvels, sets it beside Naglfar — the biggest ship, made of dead men's nails — as its dark twin: the best ship belongs to the god of good harvests, the largest to the dead at Ragnarök.",
    ],
    facts: [
      { label: "Smiths", value: "The sons of Ivaldi" },
      { label: "Powers", value: "Always fair wind; carries all the gods; folds like cloth" },
      { label: "Rank", value: "'Best of ships' (Grímnismál)" },
    ],
    relations: [{ type: "Owner", slug: "freyr", name: "Freyr" }],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning, Skáldskaparmál)", "Heimskringla"],
    tags: ["ship", "freyr", "dwarves"],
  },
  {
    slug: "gjallarhorn",
    name: "Gjallarhorn",
    oldNorse: "Gjallarhorn",
    pronunciation: "GYAL-lar-horn",
    category: "artifacts",
    kind: "Heimdallr's horn",
    summary:
      "The 'Resounding Horn' of Heimdallr, kept beneath Yggdrasil — its single great blast, heard in every world, is the signal that Ragnarök has begun.",
    description: [
      "Gjallarhorn exists for one note. Snorri says its blast is heard in all worlds, and the myths hold it in reserve for the morning the jötnar come: Heimdallr, seeing the enemy across all distances, will stand and blow, and every being in nine worlds will know at once that the end has started. Völuspá gives the moment its drumbeat: 'Loud blows Heimdallr, the horn is aloft.'",
      "The sources also glimpse a second use, or a doubled tradition: the horn is 'hidden under the holy tree,' pledged or kept at Mímir's well — and Mímir drinks mead from Gjallarhorn each morning, wisdom sipped from the alarm of doomsday. Some scholars link the hidden horn with Odin's pledged eye in the same well: the god of vigilance banks his instrument, the god of wisdom his sight, both to be redeemed at the end.",
    ],
    facts: [
      { label: "Keeper", value: "Heimdallr" },
      { label: "Kept", value: "Beneath Yggdrasil, at Mímir's well" },
      { label: "Purpose", value: "One blast, heard in all worlds, announcing Ragnarök" },
    ],
    relations: [
      { type: "Keeper", slug: "heimdall", name: "Heimdallr" },
      { type: "Hidden beneath", slug: "yggdrasil", name: "Yggdrasil" },
    ],
    attestations: ["Poetic Edda (Völuspá)", "Prose Edda (Gylfaginning)"],
    tags: ["horn", "heimdall", "ragnarok"],
  },
];
