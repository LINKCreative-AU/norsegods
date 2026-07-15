import type { Entity } from "./types";

export const texts: Entity[] = [
  {
    slug: "poetic-edda",
    name: "The Poetic Edda",
    oldNorse: "Eddukvæði",
    category: "texts",
    kind: "Anonymous mythological and heroic poems",
    summary:
      "The great anthology of Old Norse mythological and heroic poetry, preserved chiefly in the Codex Regius manuscript (~1270) — the closest thing to the pagan North speaking in its own voice.",
    description: [
      "The Poetic Edda is not a book anyone wrote but a net that caught the old poems: some thirty-plus anonymous works in alliterative verse, composed across centuries of oral tradition and written down in Christian Iceland. Its core manuscript, the Codex Regius ('King's Book', GKS 2365 4to, c. 1270), spent centuries in obscurity before reaching the Danish king in 1662, and is now one of Iceland's national treasures.",
      "The mythological half opens with Völuspá — the seeress's history of everything — and runs through Hávamál (Odin's wisdom and his rune-sacrifice), the riddle-duel Vafþrúðnismál, the cosmic gazetteer Grímnismál, the comedy of Þrymskviða, and the sacred roast-battle of Lokasenna. The heroic half carries the doom of the Völsungs and Niflungs: Sigurðr, Brynhildr, Guðrún, and the cursed gold — the matter that became the Nibelungenlied and, much later, Wagner and Tolkien's raw material.",
      "Nearly everything anyone knows about Norse myth traces to this one manuscript and its relatives; Snorri's Prose Edda is largely a commentary on poems of this kind. If the Codex Regius had burned, Odin would today be a name with a spear and little else.",
    ],
    facts: [
      { label: "Core manuscript", value: "Codex Regius, Iceland, c. 1270" },
      { label: "Contents", value: "~31 poems: mythological and heroic cycles" },
      { label: "Key poems", value: "Völuspá, Hávamál, Grímnismál, Þrymskviða, Lokasenna" },
      { label: "Form", value: "Alliterative verse — fornyrðislag and ljóðaháttr" },
    ],
    relations: [
      { type: "Opens with", slug: "voluspa", name: "Völuspá" },
      { type: "Wisdom poem", slug: "havamal", name: "Hávamál" },
      { type: "Companion work", slug: "prose-edda", name: "The Prose Edda" },
    ],
    attestations: ["Codex Regius (GKS 2365 4to)", "AM 748 I a 4to", "Hauksbók"],
    tags: ["source", "poetry", "codex-regius", "edda"],
  },
  {
    slug: "prose-edda",
    name: "The Prose Edda",
    oldNorse: "Snorra Edda",
    category: "texts",
    kind: "Snorri Sturluson's handbook of myth and poetics, c. 1220",
    summary:
      "The systematic guide to Norse mythology, written by the Icelandic chieftain Snorri Sturluson around 1220 as a textbook for poets — the single most important source for the myths as connected stories.",
    description: [
      "Around 1220, the Icelandic chieftain, lawspeaker, and political survivor Snorri Sturluson wrote a handbook to save a dying art: skaldic poetry ran on mythological allusion, and two centuries into Christianity, young poets no longer knew why gold was 'Sif's hair' or the sky 'Ymir's skull.' His solution was to retell the entire mythology, brilliantly.",
      "Its three parts descend from story to craft. Gylfaginning ('The Deluding of Gylfi') is the mythology proper — creation, the gods, Ragnarök — framed as a Swedish king's interview with three enthroned figures of Odin, and told with a novelist's timing; almost every Norse myth people know as a story, they know in Snorri's telling. Skáldskaparmál catalogues the kennings and spills dozens more myths explaining them — the Mead of Poetry, the forging of Mjölnir, Iðunn's abduction. Háttatal is Snorri's own 102-stanza tour de force demonstrating every verse-form.",
      "Snorri was a Christian writing with euhemerist cover (his prologue derives the Æsir from Trojan refugees), and scholars weigh his shaping hand in every line — but without him the surviving poems would be splinters without a picture. He was murdered in his cellar in 1241 on the orders of the Norwegian king; the mythology's greatest single author died like a saga character.",
    ],
    facts: [
      { label: "Author", value: "Snorri Sturluson (1179–1241), Iceland" },
      { label: "Date", value: "c. 1220" },
      { label: "Parts", value: "Gylfaginning, Skáldskaparmál, Háttatal" },
      { label: "Purpose", value: "A textbook to keep skaldic poetry legible" },
    ],
    relations: [
      { type: "Retells poems of", slug: "poetic-edda", name: "The Poetic Edda" },
      { type: "Same author", slug: "heimskringla", name: "Heimskringla" },
    ],
    attestations: ["Codex Regius of Snorra Edda", "Codex Wormianus", "Codex Upsaliensis"],
    tags: ["source", "snorri", "gylfaginning", "kennings"],
  },
  {
    slug: "voluspa",
    name: "Völuspá",
    oldNorse: "Völuspá",
    pronunciation: "VUL-oo-spau",
    category: "texts",
    kind: "The Seeress's Prophecy — the first poem of the Poetic Edda",
    summary:
      "The greatest single poem of Norse mythology: a dead seeress, raised by Odin, recites the history of the cosmos from the void before creation to Ragnarök — and past it, to the world reborn.",
    description: [
      "Völuspá is the mythology's spine in sixty-odd stanzas. A völva — a seeress, speaking from beyond death — commands the hearing of 'all holy kindreds' and addresses Odin directly, unrolling everything: the yawning void, the building of the world, the first golden age and the three maidens who ended it, the first war, the death of Baldr, the bound wolf — and then, refrain by tolling refrain ('the fetter will break and the wolf run free'), the full sequence of Ragnarök, through fire and falling stars to the earth rising green from the sea a second time.",
      "Twice she taunts the god who woke her: 'Do you know yet, or what?' — the Allfather paying for a preview of his own death. The poem was likely composed around 1000, by a poet who knew paganism from inside as Christianity arrived; some hear conversion-era resonance in its final stanzas ('the mighty one comes down from above'), and the argument has run for two centuries.",
      "Snorri quotes it as his master-source for Gylfaginning. Its stanzas — 'brothers will fight and kill each other... an axe-age, a sword-age, shields are riven, a wind-age, a wolf-age, before the world goes headlong' — remain the most quoted lines in all Old Norse.",
    ],
    facts: [
      { label: "Speaker", value: "A dead völva, raised and questioned by Odin" },
      { label: "Span", value: "Before creation to after Ragnarök" },
      { label: "Date", value: "Probably c. 1000, at paganism's edge" },
      { label: "Refrain", value: "'Do you know yet, or what?'" },
    ],
    relations: [
      { type: "Collected in", slug: "poetic-edda", name: "The Poetic Edda" },
      { type: "Interrogator", slug: "odin", name: "Odin" },
      { type: "Prophesies", slug: "ragnarok", name: "Ragnarök" },
    ],
    attestations: ["Codex Regius", "Hauksbók", "quotations in Snorra Edda"],
    tags: ["source", "prophecy", "volva", "ragnarok"],
  },
  {
    slug: "havamal",
    name: "Hávamál",
    oldNorse: "Hávamál",
    pronunciation: "HOW-va-maul",
    category: "texts",
    kind: "'Sayings of the High One' — Odin's wisdom poem",
    summary:
      "Odin's own voice across 164 stanzas: hard-headed advice for travellers and hosts, rueful love-lessons, and the god's account of hanging nine nights on the tree to win the runes.",
    description: [
      "Hávamál — 'Sayings of the High One' — is the North's wisdom literature with Odin as speaker. Its famous opening movement is startlingly practical: check the doorways for enemies before entering; drink your share but talk sense or be silent; the fool who knows nothing lies awake all night worrying and wakes exhausted with everything as bad as before. It is the ethics of a cold, hospitable, dangerous world — be wary, be generous, be remembered.",
      "Its most quoted stanza is the Norse creed in eight lines: 'Cattle die, kinsmen die, you yourself will die; but the fame of a dead man never dies, for the one who earns it well.' Later movements turn personal — Odin's rueful confessions of love gone wrong with Billingr's girl and Gunnlöð, whom he seduced and robbed for the Mead of Poetry — and then vertiginous: the Rúnatal, where the god describes hanging 'nine long nights, wounded with a spear, given to Odin, myself to myself, on that tree of which no man knows where its roots run,' screaming as he seized the runes. The poem ends with a catalogue of eighteen spells he will not fully teach.",
      "Pragmatic table-manners and self-crucifixion for secret knowledge, in one poem, in one voice: nothing else states so completely what kind of god Odin is.",
    ],
    facts: [
      { label: "Speaker", value: "Odin — Hávi, 'the High One'" },
      { label: "Length", value: "164 stanzas, several joined movements" },
      { label: "Famous stanza", value: "'Cattle die, kinsmen die...'" },
      { label: "Contains", value: "The Rúnatal — Odin's rune-winning self-sacrifice" },
    ],
    relations: [
      { type: "Speaker", slug: "odin", name: "Odin" },
      { type: "Collected in", slug: "poetic-edda", name: "The Poetic Edda" },
      { type: "The sacrifice tree", slug: "yggdrasil", name: "Yggdrasil" },
    ],
    attestations: ["Codex Regius (sole complete source)"],
    tags: ["source", "wisdom", "odin", "runes"],
  },
  {
    slug: "heimskringla",
    name: "Heimskringla",
    oldNorse: "Heimskringla",
    category: "texts",
    kind: "Snorri's sagas of the Norwegian kings",
    summary:
      "Snorri Sturluson's monumental history of the kings of Norway, whose opening Ynglinga saga retells the gods as ancient human kings — a key euhemerist source for Odin, the Vanir war, and old cult practice.",
    description: [
      "Heimskringla ('the circle of the world,' from its opening words) is Snorri's other masterpiece: sixteen sagas tracing the kings of Norway from legendary prehistory to 1177. For mythology, its treasure is the first saga, Ynglinga saga, where Snorri retells the gods as history: Odin is a conquering chieftain from Asia ('Ásaland'), a master of seiðr and shapeshifting who ruled by awe, taught cremation and ring-giving, and 'died in his bed in Sweden' after marking himself with a spear-point to claim the battle-dead.",
      "This euhemerist frame — gods as remembered kings — was the medieval Christian's licence to preserve pagan lore, and Snorri used it to record details found nowhere else: the Æsir–Vanir war and hostage exchange, Mímir's beheading, Freyr's temple-founding at Uppsala, sacrificial kingship among the Swedes, kings burned in mounds for good seasons. Later sagas in the collection document the conversion era's collision of faiths — missionary kings axing idols that peasants still fed.",
      "Its account of cult practice, however filtered, is among the best written evidence for how the gods were actually worshipped, not just narrated.",
    ],
    facts: [
      { label: "Author", value: "Snorri Sturluson, c. 1230" },
      { label: "Scope", value: "Norwegian kings, mythic origins to 1177" },
      { label: "Mythological core", value: "Ynglinga saga — the gods as ancient kings" },
    ],
    relations: [
      { type: "Same author", slug: "prose-edda", name: "The Prose Edda" },
      { type: "Human-king Odin", slug: "odin", name: "Odin" },
      { type: "Records", slug: "aesir-vanir-war", name: "The Æsir–Vanir War" },
    ],
    attestations: ["Kringla and other medieval manuscripts"],
    tags: ["source", "snorri", "kings", "euhemerism"],
  },
  {
    slug: "gesta-danorum",
    name: "Gesta Danorum",
    oldNorse: "—",
    category: "texts",
    kind: "Saxo Grammaticus's Latin history of the Danes, c. 1200",
    summary:
      "The sixteen-book Latin history of Denmark whose first nine books preserve alternative — often startlingly different — versions of the Norse myths and legends, from a warrior Baldr to the source of Hamlet.",
    description: [
      "Written around 1200 by the Danish cleric Saxo Grammaticus for Archbishop Absalon, Gesta Danorum ('Deeds of the Danes') runs from legendary founder-kings to Saxo's own day. Its first nine books are a parallel universe of Norse legend: the gods appear as cunning sorcerer-kings of Byzantine 'Byzantium' (Asgard euhemerised), and the stories differ sharply from the Icelandic versions — evidence that the myths lived in many shapes.",
      "Saxo's Baldr is no gentle victim but a lustful demigod warring with the human hero Høtherus over a princess, killed with a special sword rather than mistletoe. His Odin (Othinus) is exiled by the other gods for disgraceful sorcery; his Utgarthilocus lies chained in a stinking cavern, visited by Danish adventurers — Útgarða-Loki and bound Loki fused into one. And his tale of Amleth, the prince who feigns madness to avenge his father, travelled through a French retelling to London, where Shakespeare made it Hamlet.",
      "Read against Snorri, Saxo is the control experiment: where the two agree, something old is showing; where they diverge, the tradition's variety is showing. Norse mythology was never one canon — Saxo is the proof.",
    ],
    facts: [
      { label: "Author", value: "Saxo Grammaticus, Denmark, c. 1200" },
      { label: "Language", value: "Ornate silver-age Latin" },
      { label: "Mythic books", value: "I–IX — legendary Denmark" },
      { label: "Famous legacy", value: "Amleth → Shakespeare's Hamlet" },
    ],
    relations: [
      { type: "Alternative Baldr", slug: "baldr", name: "Baldr" },
      { type: "Chained giant", slug: "utgarda-loki", name: "Útgarða-Loki" },
    ],
    attestations: ["Paris fragments; 1514 first printed edition"],
    tags: ["source", "latin", "denmark", "hamlet"],
  },
];
