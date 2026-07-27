import type { Entity } from "./types";

export const moreGods: Entity[] = [
  {
    slug: "vali",
    name: "Váli",
    oldNorse: "Váli",
    pronunciation: "VAW-lee",
    category: "gods",
    kind: "Æsir god — the avenger",
    summary:
      "Son of Odin born for a single purpose: to avenge Baldr. One night old, unwashed and uncombed, he slew Höðr — and he survives Ragnarök.",
    description: [
      "When Baldr fell, vengeance could not come from within the family circle that shared the guilt of the game, so Odin begot a new son on the giantess Rindr. Váli was born, and at one night old — 'he washed not his hands nor combed his hair' — he killed Höðr, the blind brother whose hand Loki had guided. He is a god who exists because grief demanded an instrument.",
      "With his half-brother Víðarr he walks out of the fire of Ragnarök into the renewed world — the avenger and the silent one, the two single-purpose sons of Odin, outliving everything they were made to answer for.",
    ],
    facts: [
      { label: "Parents", value: "Odin and the giantess Rindr" },
      { label: "Deed", value: "Slew Höðr at one night old" },
      { label: "After Ragnarök", value: "Survives into the new world" },
    ],
    relations: [
      { type: "Father", slug: "odin", name: "Odin" },
      { type: "Slew", slug: "hodr", name: "Höðr" },
      { type: "Fellow survivor", slug: "vidar", name: "Víðarr" },
    ],
    attestations: ["Poetic Edda (Völuspá, Baldrs draumar)", "Prose Edda (Gylfaginning)"],
    tags: ["aesir", "vengeance", "baldr", "survivor"],
  },
  {
    slug: "forseti",
    name: "Forseti",
    oldNorse: "Forseti",
    pronunciation: "FOR-seh-tee",
    category: "gods",
    kind: "Æsir god of justice",
    summary:
      "Son of Baldr and Nanna, god of justice and reconciliation: all who come to his gold-pillared hall Glitnir leave with their disputes settled.",
    description: [
      "Forseti ('President' — literally 'the one who sits in front') is the pantheon's judge. His hall Glitnir ('Shining') stands on pillars of gold under a roof of silver, and Grímnismál says of it that all who come with hard cases leave reconciled — the best court of gods and men.",
      "He is the son of Baldr and Nanna, the gentlest pair in the mythology, and his justice is theirs continued: not punishment but settlement. Iceland's modern word for president, forseti, keeps his name in every news broadcast.",
    ],
    facts: [
      { label: "Parents", value: "Baldr and Nanna" },
      { label: "Hall", value: "Glitnir — gold pillars, silver roof" },
      { label: "Gift", value: "Every dispute brought to him is settled" },
    ],
    relations: [
      { type: "Father", slug: "baldr", name: "Baldr" },
      { type: "Mother", slug: "nanna", name: "Nanna" },
    ],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["aesir", "justice", "law", "glitnir"],
  },
  {
    slug: "hoenir",
    name: "Hœnir",
    oldNorse: "Hœnir",
    pronunciation: "HUH-nir",
    category: "gods",
    kind: "Æsir god — Odin's silent companion",
    summary:
      "The puzzle among the gods: he helped give the first humans their wits, was traded as a hostage to the Vanir — and proved useless without Mímir to whisper in his ear.",
    description: [
      "Hœnir appears wherever Odin travels in a trio: at the making of humankind (where some sources say he gave Askr and Embla their reason), and on the road with Odin and Loki in the myths that begin with a stolen otter and end with cursed gold. Tall, handsome, and kingly to look at, he was sent to the Vanir as a peace-hostage — a prestigious gift.",
      "The Vanir soon learned his secret: at the assembly, whenever Mímir was not beside him, Hœnir answered every question with 'let others decide.' Feeling swindled, they beheaded Mímir and sent the head back to Odin. Yet Hœnir outlasts the joke: in Völuspá's vision of the world after Ragnarök, it is Hœnir who 'chooses the lot-twigs' — the quiet god finally reading fate himself.",
    ],
    facts: [
      { label: "Role", value: "Odin's travelling companion; giver of wits to the first humans" },
      { label: "Fate as hostage", value: "Mute without Mímir; caused Mímir's beheading" },
      { label: "After Ragnarök", value: "Survives, and reads the omens" },
    ],
    relations: [
      { type: "Companion", slug: "odin", name: "Odin" },
      { type: "Counsellor", slug: "mimir", name: "Mímir" },
    ],
    attestations: ["Poetic Edda (Völuspá)", "Prose Edda (Skáldskaparmál)", "Heimskringla (Ynglinga saga)"],
    tags: ["aesir", "hostage", "creation", "survivor"],
  },
  {
    slug: "mimir",
    name: "Mímir",
    oldNorse: "Mímir",
    pronunciation: "MEE-mir",
    category: "gods",
    kind: "The wisest being — keeper of the well",
    summary:
      "Guardian of the well of wisdom beneath Yggdrasil, where Odin pledged his eye; beheaded by the Vanir, his preserved head still counsels the Allfather.",
    description: [
      "Mímir ('the Rememberer') keeps the well under the root of Yggdrasil that reaches toward the frost-giants, and drinks its wisdom every morning from the horn Gjallarhorn. When Odin came asking for a single draught, the price was an eye — which lies in the well still. Wisdom, in the North, is always bought.",
      "Sent to the Vanir as a hostage with Hœnir after the first war, Mímir was beheaded when the Vanir felt cheated by the trade. Odin embalmed the head with herbs and sang spells over it, and it speaks: before Ragnarök, Völuspá shows the Allfather in murmured conference with 'Mím's head' one last time. The god of knowledge survives as knowledge does — disembodied, consulted, indispensable.",
    ],
    facts: [
      { label: "Keeps", value: "Mímisbrunnr, the well of wisdom" },
      { label: "Price he set", value: "Odin's eye, for one drink" },
      { label: "Fate", value: "Beheaded by the Vanir; his head preserved and consulted by Odin" },
    ],
    relations: [
      { type: "Client", slug: "odin", name: "Odin" },
      { type: "Fellow hostage", slug: "hoenir", name: "Hœnir" },
      { type: "The well", slug: "mimisbrunnr", name: "Mímisbrunnr" },
    ],
    attestations: ["Poetic Edda (Völuspá)", "Prose Edda (Gylfaginning)", "Heimskringla (Ynglinga saga)"],
    tags: ["wisdom", "well", "odin", "head"],
  },
  {
    slug: "magni-and-modi",
    name: "Magni and Móði",
    oldNorse: "Magni ok Móði",
    pronunciation: "MAG-nee, MOH-thee",
    category: "gods",
    kind: "Sons of Thor — inheritors of the hammer",
    summary:
      "Strength and Courage, the sons of Thor who survive Ragnarök and carry Mjölnir into the new world.",
    description: [
      "Magni ('Strength') and Móði ('Courage') are Thor's virtues walking as his sons. Magni announced himself at three nights old — actually, some manuscripts say three years — by lifting the giant Hrungnir's leg off his pinned father when no other god could, earning the dead giant's golden-maned horse Gullfaxi as a prize, to Odin's visible annoyance.",
      "Their real role waits past the end: after Ragnarök, Vafþrúðnismál says, 'Móði and Magni shall have Mjölnir' — the hammer outlives the hand. Thunder is not abolished by the world's ending; it is inherited.",
    ],
    facts: [
      { label: "Names", value: "'Strength' and 'Courage'" },
      { label: "Magni's feat", value: "Lifted Hrungnir's leg off Thor as an infant" },
      { label: "After Ragnarök", value: "Inherit Mjölnir in the new world" },
    ],
    relations: [
      { type: "Father", slug: "thor", name: "Thor" },
      { type: "Inherit", slug: "mjolnir", name: "Mjölnir" },
    ],
    attestations: ["Poetic Edda (Vafþrúðnismál)", "Prose Edda (Skáldskaparmál)"],
    tags: ["thor", "survivor", "ragnarok", "hammer"],
  },
  {
    slug: "nanna",
    name: "Nanna",
    oldNorse: "Nanna",
    pronunciation: "NAN-na",
    category: "gods",
    kind: "Æsir goddess — wife of Baldr",
    summary:
      "Baldr's wife, who died of grief at his funeral and was burned on the ship beside him — and who sends gifts back from Hel.",
    description: [
      "Nanna's myth is almost entirely one scene, and it is devastating: at Baldr's funeral, as his body was carried to the ship Hringhorni, her heart burst with grief and she was laid on the pyre beside her husband. The gentlest god and his wife left the world on one fire.",
      "When Hermóðr rode to Hel to ransom Baldr, he found the couple seated together in the hall of the dead — death did not part them, it just relocated them. Nanna sent gifts back with the messenger: a linen robe for Frigg, a gold ring for Fulla. In Saxo's Latin telling she is instead a human princess fought over by Balderus and Høtherus — the same name, an utterly different woman.",
    ],
    facts: [
      { label: "Husband", value: "Baldr" },
      { label: "Death", value: "Of grief, at Baldr's funeral; burned beside him" },
      { label: "Son", value: "Forseti, god of justice" },
    ],
    relations: [
      { type: "Husband", slug: "baldr", name: "Baldr" },
      { type: "Son", slug: "forseti", name: "Forseti" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Gesta Danorum"],
    tags: ["baldr", "grief", "funeral", "hel"],
  },
  {
    slug: "gefjon",
    name: "Gefjon",
    oldNorse: "Gefjon",
    pronunciation: "GEV-yon",
    category: "gods",
    kind: "Goddess of the plough",
    summary:
      "The goddess who ploughed the island of Zealand out of Sweden with four oxen — her giant sons — in one night, and to whom unmarried women go at death.",
    description: [
      "Promised as much Swedish land as she could plough in a day and a night by king Gylfi, Gefjon fetched her four sons by a giant, turned them into oxen, and tore loose a chunk of Sweden so vast that its absence filled with water — the lake Mälaren — and its presence became the Danish island of Zealand. Copenhagen's Gefion Fountain still shows her driving the team.",
      "Snorri says all who die unmarried go to her hall, making the virgin ploughmaker a psychopomp of the single. Loki, inevitably, accuses her of trading herself for a necklace; Odin answers that Gefjon sees all fates as clearly as he does — high praise buried in a quarrel.",
    ],
    facts: [
      { label: "Great deed", value: "Ploughed Zealand out of Sweden with four ox-sons" },
      { label: "Receives", value: "Women who die unmarried" },
      { label: "Legacy", value: "The Gefion Fountain, Copenhagen" },
    ],
    relations: [{ type: "Deceived", name: "King Gylfi of Sweden" }],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Lokasenna)", "Heimskringla (Ynglinga saga)"],
    tags: ["plough", "zealand", "denmark", "goddess"],
  },
  {
    slug: "fulla",
    name: "Fulla",
    oldNorse: "Fulla",
    pronunciation: "FOOL-la",
    category: "gods",
    kind: "Goddess — Frigg's confidante",
    summary:
      "Frigg's handmaiden and keeper of secrets: she carries the queen's coffer, minds her shoes, and knows the counsel no one else hears.",
    description: [
      "Fulla walks one step behind the queen of Asgard: a virgin goddess with flowing loose hair bound by a gold band, who carries Frigg's ashen coffer, keeps her footwear, and — the telling detail — 'knows her secret counsel.' In a pantheon where Frigg famously knows all fates and says nothing, the person she does talk to matters.",
      "Dead Nanna sent Fulla a gold ring back from Hel, a gift implying rank. And she is one of the very few Norse deities attested outside Scandinavia a thousand years early: the Old High German Merseburg Charm names 'Volla' beside Frija, working horse-healing magic — the same handmaiden, in the same lady's service, three centuries and a language away.",
    ],
    facts: [
      { label: "Service", value: "Bears Frigg's coffer and knows her secrets" },
      { label: "Mark", value: "Loose hair with a gold band" },
      { label: "Old attestation", value: "As 'Volla' in the Merseburg Charms" },
    ],
    relations: [{ type: "Mistress", slug: "frigg", name: "Frigg" }],
    attestations: ["Prose Edda (Gylfaginning)", "Second Merseburg Charm"],
    tags: ["frigg", "handmaiden", "secrets"],
  },
  {
    slug: "eir",
    name: "Eir",
    oldNorse: "Eir",
    pronunciation: "AYR",
    category: "gods",
    kind: "Goddess of healing",
    summary:
      "'The best of physicians' — the goddess of healing, named among Frigg's maidens and among the helpers on the healing hill Lyfjaberg.",
    description: [
      "Snorri's catalogue of goddesses gives Eir three words that secure her forever: 'best of physicians.' Her name means 'mercy' or 'help,' and in the poem Fjölsvinnsmál she sits among the maidens on Lyfjaberg, the 'hill of healing,' which cures every woman who climbs it.",
      "Healing in the Norse world was heavily women's work — the sagas' battlefield surgeons binding wounds are women — and Eir is that craft deified. Whether she was a major goddess with lost myths or a personified job title, every mention of her is someone getting better.",
    ],
    facts: [
      { label: "Rank", value: "'Best of physicians' (Gylfaginning)" },
      { label: "Seat", value: "Lyfjaberg, the healing hill" },
    ],
    relations: [{ type: "Circle", slug: "frigg", name: "Frigg's maidens" }],
    attestations: ["Prose Edda (Gylfaginning)", "Fjölsvinnsmál"],
    tags: ["healing", "medicine", "goddess"],
  },
  {
    slug: "sigyn",
    name: "Sigyn",
    oldNorse: "Sigyn",
    pronunciation: "SIG-in",
    category: "gods",
    kind: "Goddess — Loki's faithful wife",
    summary:
      "The wife who stayed: while Loki lies bound beneath a venom-dripping serpent, Sigyn stands over him holding a bowl to catch the poison, forever.",
    description: [
      "Sigyn ('victory-friend') is defined by one unbearable image. When the gods bound Loki in the cave with the entrails of his own son and Skaði fixed a serpent above his face, Sigyn — whose son had just been killed to make her husband's fetters — chose to stay. She stands holding a bowl over Loki's face, catching the venom drop by drop; only when she turns to empty it does the poison strike, and his convulsions are earthquakes.",
      "The Eddas never explain her; they don't need to. In two lines she becomes the mythology's study of loyalty past all reason — grieving mother, wronged wife, and voluntary prisoner of the world's worst man until Ragnarök frees them both. The image is old: the Gosforth Cross carved her with her bowl in the 900s.",
    ],
    facts: [
      { label: "Vigil", value: "Holds the bowl over bound Loki's face" },
      { label: "Cost", value: "Her son Narfi's entrails are Loki's fetters" },
      { label: "Until", value: "Ragnarök" },
    ],
    relations: [
      { type: "Husband", slug: "loki", name: "Loki" },
      { type: "Sons", slug: "narfi-and-vali-lokason", name: "Narfi and Váli" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Lokasenna prose)", "Gosforth Cross"],
    tags: ["loyalty", "loki", "binding", "grief"],
  },
  {
    slug: "odr",
    name: "Óðr",
    oldNorse: "Óðr",
    pronunciation: "OH-thr",
    category: "gods",
    kind: "God — Freyja's absent husband",
    summary:
      "Freyja's husband who is always away on long journeys — she weeps tears of red gold for him, and scholars suspect he is Odin under another name.",
    description: [
      "Óðr exists mostly as an absence. Snorri says he 'went away on long journeys,' and Freyja weeps for him tears of red gold — which is why gold, in skaldic verse, is 'Freyja's tears.' She wanders among strange peoples seeking him, taking many names as she goes: Mardöll, Hörn, Gefn, Sýr.",
      "His name is the noun behind Odin's own — óðr, 'frenzy, inspiration, poetry' — and the oldest scholarly puzzle in Norse studies is whether Óðr and Óðinn were once one god, split by time into Freyja's vanished husband and Frigg's wandering one. If so, the two great goddesses are shadows of one another, both married to the same restlessness.",
    ],
    facts: [
      { label: "Wife", value: "Freyja, who weeps gold for him" },
      { label: "Habit", value: "Perpetually away on long journeys" },
      { label: "Puzzle", value: "Possibly Odin under an older name" },
    ],
    relations: [
      { type: "Wife", slug: "freyja", name: "Freyja" },
      { type: "Possible double", slug: "odin", name: "Odin" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Völuspá, Hyndluljóð)"],
    tags: ["freyja", "absence", "gold", "mystery"],
  },
  {
    slug: "hermodr",
    name: "Hermóðr",
    oldNorse: "Hermóðr",
    pronunciation: "HER-mohthr",
    category: "gods",
    kind: "Messenger of the gods",
    summary:
      "'The bold': the god who rode Sleipnir nine nights down the Hel-road and leapt the gates of death itself to ransom Baldr.",
    description: [
      "When Baldr lay dead and Frigg asked who would ride to Hel to buy him back, one volunteer stepped forward: Hermóðr, called 'the bold,' in most tellings a son of Odin. He took Sleipnir — only the Allfather's horse can make that trip — and rode nine nights through valleys so dark he saw nothing, over the river Gjöll, and cleared Hel's gate without breaking stride.",
      "He found Baldr enthroned in the hall of the dead, stayed the night, and won from Hel her conditional yes: all things must weep. His mission failed by one dry-eyed giantess, but no one else in the mythology out-rode death and returned to tell it. He is the messenger the worst news gets given to.",
    ],
    facts: [
      { label: "Feat", value: "Rode Sleipnir to Hel and leapt the gate" },
      { label: "Mission", value: "Ransom Baldr — failed by one refusal" },
      { label: "Journey", value: "Nine nights of dark valleys, over the river Gjöll" },
    ],
    relations: [
      { type: "Father", slug: "odin", name: "Odin" },
      { type: "Borrowed", slug: "sleipnir", name: "Sleipnir" },
      { type: "Sought", slug: "baldr", name: "Baldr" },
    ],
    attestations: ["Prose Edda (Gylfaginning)"],
    tags: ["messenger", "hel", "baldr", "courage"],
  },
  {
    slug: "kvasir",
    name: "Kvasir",
    oldNorse: "Kvasir",
    pronunciation: "KVAH-sir",
    category: "gods",
    kind: "The wisest being — born of the peace",
    summary:
      "Created from the mingled spittle of the Æsir and Vanir at their truce, the wisest of all beings — murdered by dwarves, his blood brewed into the Mead of Poetry.",
    description: [
      "When the two families of gods made peace, both sides spat into a vat, and from the mixture the gods shaped a man: Kvasir, so wise that no one could ask him a question he could not answer. He wandered the world teaching — wisdom as a public utility.",
      "Two dwarves, Fjalar and Galar, invited him to a private talk and killed him, draining his blood into three vessels and brewing it with honey into the mead that makes poets. Their cover story to the gods is the darkest joke in the Eddas: Kvasir, they said, had suffocated in his own intelligence, there being no one educated enough to ask it out of him. Poetry, ever after, is 'Kvasir's blood' — every poem a sip of a murdered peace.",
    ],
    facts: [
      { label: "Born of", value: "The mingled spittle of Æsir and Vanir" },
      { label: "Gift", value: "No question could defeat him" },
      { label: "Fate", value: "Murdered by Fjalar and Galar; became the Mead of Poetry" },
    ],
    relations: [
      { type: "Born from", slug: "aesir-vanir-war", name: "The Æsir–Vanir peace" },
      { type: "Became", slug: "mead-of-poetry", name: "The Mead of Poetry" },
      { type: "Murderers", slug: "fjalar-and-galar", name: "Fjalar and Galar" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "Heimskringla (Ynglinga saga)"],
    tags: ["wisdom", "poetry", "murder", "mead"],
  },
  {
    slug: "jord",
    name: "Jörð",
    oldNorse: "Jörð",
    pronunciation: "YURTH",
    category: "gods",
    kind: "The earth personified — mother of Thor",
    summary:
      "The earth itself as a goddess: daughter of Night, mistress of Odin, and mother of Thor — which makes the thunder-god half made of the ground he defends.",
    description: [
      "Jörð is simply the Old Norse word for 'earth,' walking as a giantess-goddess. Snorri counts her among the Æsir's goddesses and among the jötnar at once — the earth belongs to both sides, which is rather the point. By Odin she is the mother of Thor: sky-father on earth-mother, the oldest equation in Indo-European religion, and the reason Thor's other name is 'son of Jörð' in skaldic verse.",
      "Her genealogy is pure poetry: her mother is Nótt, the Night, making the earth the daughter of darkness. When Thor wades rivers and giants throw mountains, the myths never quite forget that his mother is the terrain.",
    ],
    facts: [
      { label: "Meaning", value: "'Earth'" },
      { label: "Parents", value: "Nótt (Night) and Annarr" },
      { label: "Son", value: "Thor, by Odin" },
    ],
    relations: [
      { type: "Consort", slug: "odin", name: "Odin" },
      { type: "Son", slug: "thor", name: "Thor" },
    ],
    attestations: ["Prose Edda (Gylfaginning, Skáldskaparmál)", "skaldic kennings"],
    tags: ["earth", "thor", "personification"],
  },
  {
    slug: "gullveig",
    name: "Gullveig",
    oldNorse: "Gullveig",
    pronunciation: "GOOL-vayg",
    category: "gods",
    kind: "The thrice-burned witch",
    summary:
      "The mysterious woman the Æsir speared and burned three times — and three times she was reborn, walking on as the seiðr-witch Heiðr. Her burning ignited the first war in the world.",
    description: [
      "Völuspá gives her six lines and two thousand years of argument. The Æsir hoisted Gullveig ('Gold-drink' or 'Gold-draught') on spears in Odin's hall and burned her; three times burned, three times born, 'yet she lives still.' Reborn, she took the name Heiðr ('Bright') and went house to house working seiðr, 'ever the delight of an evil bride.'",
      "Her mistreatment is the immediate cause of the Æsir–Vanir war — the first war in the world. Who was she? A Vanir emissary, say some scholars, perhaps Freyja herself (mistress of seiðr and gold, whose tears are gold); the corrupting lust for gold personified, say others. The poem refuses to settle it. What is certain: the gods' first act of violence against a woman who would not die properly cost them their innocence and their monopoly on the world.",
    ],
    facts: [
      { label: "Fate", value: "Speared and thrice burned; thrice reborn" },
      { label: "Rebirth", value: "As Heiðr, the wandering seiðr-witch" },
      { label: "Consequence", value: "The Æsir–Vanir war" },
    ],
    relations: [
      { type: "Sparked", slug: "aesir-vanir-war", name: "The Æsir–Vanir War" },
      { type: "Possibly identical to", slug: "freyja", name: "Freyja" },
    ],
    attestations: ["Poetic Edda (Völuspá)"],
    tags: ["seidr", "gold", "war", "mystery"],
  },
  {
    slug: "vili-and-ve",
    name: "Vili and Vé",
    oldNorse: "Vili ok Vé",
    pronunciation: "VIL-ee, VAY",
    category: "gods",
    kind: "Odin's brothers — co-creators of the world",
    summary:
      "The two brothers of Odin who helped slay Ymir, build the world from his body, and give the first humans their gifts — then all but vanish from the myths.",
    description: [
      "The world was made by a committee of three: Odin and his brothers Vili ('Will') and Vé ('Sanctuary, the holy'), sons of Borr and the giantess Bestla. Together they killed Ymir, hauled his corpse into the void, and carpentered the cosmos from it; together they found the trees on the shore and made humans — in Snorri's version, Vili giving wit and motion, Vé giving face, speech, hearing and sight.",
      "Then they evaporate from the record, leaving two traces: their names alliterate with Óðinn in the old triple pattern of cult, and Loki's nastiest taunt — that while Odin was once long in exile, Vili and Vé shared Frigg. Creation's junior partners, remembered chiefly by a slander.",
    ],
    facts: [
      { label: "Parents", value: "Borr and Bestla" },
      { label: "Deeds", value: "Slew Ymir; built the world; gave humans their gifts" },
      { label: "Meaning", value: "'Will' and 'the Holy'" },
    ],
    relations: [
      { type: "Brother", slug: "odin", name: "Odin" },
      { type: "Slew", slug: "ymir", name: "Ymir" },
      { type: "Mother", slug: "bestla", name: "Bestla" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Völuspá, Lokasenna)"],
    tags: ["creation", "brothers", "ymir"],
  },
  {
    slug: "sol-and-mani",
    name: "Sól and Máni",
    oldNorse: "Sól ok Máni",
    pronunciation: "SOHL, MAW-nee",
    category: "gods",
    kind: "Sun-goddess and moon-god",
    summary:
      "A sister who drives the sun and a brother who steers the moon, set in the sky to answer their father's vanity and hunted across it every day by wolves.",
    description: [
      "Their father Mundilfari had two children so bright that he named the girl Sól, after the sun, and the boy Máni, after the moon. The gods heard arrogance in that and answered it with work. They set Sól to drive the two horses that pull the sun, Árvakr ('Early-waker') and Alsviðr ('Very-swift'), and to keep them from scorching she carries a shield called Svalinn ('Cooler') before the heat. Snorri adds a homely engineering detail: under the horses' shoulders the gods fixed bellows of iron to cool them on the road.",
      "Máni governs the moon and reckons its waxing and waning. Grímnismál tells how he once lifted two children, Bil and Hjúki, off the earth as they carried a water-pail home from the well Byrgir, and Scandinavians long claimed to see the pair in the dark patches of the full moon. He rides the same sky as his sister and under the same threat.",
      "Neither travels for pleasure. The wolves of the Ironwood run the chase, Sköll behind the sun and Hati before the moon, and the reason the two ride so hard is that they are prey. At Ragnarök the wolves close their jaws and the sky goes dark for the last battle. Vafþrúðnismál keeps back one line against that dark: before the wolf takes her, Sól bears a daughter as fair as herself, and it is the daughter who will drive her mother's road when a new world rises from the sea.",
    ],
    facts: [
      { label: "Father", value: "Mundilfari, who named them for sun and moon" },
      { label: "Sól's team", value: "Horses Árvakr and Alsviðr; the shield Svalinn" },
      { label: "Máni's charges", value: "Bil and Hjúki, the children seen in the moon" },
      { label: "At Ragnarök", value: "Swallowed by wolves; Sól's daughter takes the reins" },
    ],
    relations: [
      { type: "Father", name: "Mundilfari" },
      { type: "Pursued by", slug: "skoll-and-hati", name: "Sköll and Hati" },
      { type: "Ended at", slug: "ragnarok", name: "Ragnarök" },
    ],
    attestations: ["Poetic Edda (Vafþrúðnismál, Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["sun", "moon", "cosmology", "ragnarok"],
  },
  {
    slug: "rindr",
    name: "Rindr",
    oldNorse: "Rindr",
    pronunciation: "RIND-r",
    category: "gods",
    kind: "Goddess, mother of Váli",
    epithets: ["Rinda"],
    summary:
      "Reckoned among the goddesses by Snorri, Rindr is remembered for one grim purpose: she bore Váli to Odin, the one-night-old avenger of Baldr. Every source that tells how Odin won her agrees he took her against her will.",
    description: [
      "In Baldrs draumar, Odin rides down to the gates of Hel and wakes a dead seeress to ask who will avenge Baldr. Her answer names Rindr. In the western halls, Vestrsalir, Rindr will bear a son, and that son will kill Höðr when he is one night old, refusing to wash his hands or comb his hair until he has carried Baldr's slayer to the pyre. Rindr enters the myth this way, as a womb prophesied before the child inside it has a father.",
      "Snorri counts Rindr among the Ásynjur in Gylfaginning, but the older skalds knew a harder story. Kormákr Ögmundarson, writing in the 10th century, compressed it to three words: seið Yggr til Rindar, 'Odin worked seiðr to get Rindr.' Saxo Grammaticus later spelled out what the magic did. In his telling she is Rinda, a princess of the Ruthenians, and Odin wants her only for the son the seers have promised him. She turns him down twice. So he scratches runes onto a strip of bark, touches her with it, and drives her mad, then returns disguised as a healing-woman called Wecha. The cure will be violent, he warns; on his advice the king has his raving daughter bound to her bed. Then Odin rapes her.",
      "From that came Bous, Saxo's version of Váli, who struck down Höðr and died of his own wounds the day after, a vengeance that killed the avenger too. The episode throws a cold light on Odin. Here the Allfather is a rapist working by fraud and spellcraft, and medieval Christian writers pointed to it as proof the old gods deserved no worship. The name kept its charge in verse: a poet could call Odin 'Rindr's foe' or Váli 'Rindr's son,' and the audience would feel the whole story tighten behind the kenning.",
    ],
    facts: [
      { label: "Role", value: "Mother of Váli, who avenges Baldr" },
      { label: "Status", value: "Listed among the Ásynjur by Snorri; a human princess (Rinda) in Saxo" },
      { label: "Won by", value: "Seiðr in the skalds; runes, disguise, and rape in Saxo" },
      { label: "Her son", value: "Slew Höðr at one night old, then died of his wounds" },
    ],
    relations: [
      { type: "Son", slug: "vali", name: "Váli" },
      { type: "Son by", slug: "odin", name: "Odin" },
      { type: "Avenged", slug: "baldr", name: "Baldr" },
      { type: "Prophesied in", slug: "baldrs-draumar", name: "Baldrs draumar" },
    ],
    attestations: [
      "Poetic Edda (Baldrs draumar)",
      "Prose Edda (Gylfaginning, Skáldskaparmál)",
      "Kormákr Ögmundarson, Sigurðardrápa",
      "Saxo Grammaticus, Gesta Danorum (Book III)",
    ],
    tags: ["goddess", "vali", "baldr", "vengeance", "odin"],
  },
];
