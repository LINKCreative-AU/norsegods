import type { Entity } from "./types";

export const moreTexts: Entity[] = [
  {
    slug: "volsunga-saga",
    name: "Völsunga saga",
    oldNorse: "Völsunga saga",
    category: "texts",
    kind: "The saga of the Völsungs — the northern tragic cycle",
    summary:
      "The 13th-century prose epic of Sigurðr, the dragon, the cursed gold, and the fall of two dynasties — source of Wagner's Ring and Tolkien's deepest borrowings.",
    description: [
      "Völsunga saga stitches the whole heroic matter of the North into one prose arc: Odin seeding the Völsung line, Sigmundr and the sword from the tree, Sigurðr and the dragon, Brynhildr and the fire-wall, the murder, the burnings, Guðrún's marriages and revenges, down to the last doomed sons. Its unknown Icelandic author worked around 1260, paraphrasing heroic poems of the Edda — including some from pages of the Codex Regius now physically lost, making the saga our only witness to their contents.",
      "Its reach is absurd for an anonymous book: Wagner built the Ring cycle largely from it; William Morris called his translation 'the great story of the North, which should be to all our race what the Tale of Troy was to the Greeks'; and Tolkien — who wrote his own version in verse — mined it for the broken sword reforged, the dragon on the hoard, the ring that ruins its owners. Anyone who has consumed fantasy in the last century has been downstream of this saga, usually without knowing the river's name.",
    ],
    facts: [
      { label: "Date", value: "Iceland, c. 1260, author unknown" },
      { label: "Preserves", value: "Content of Eddic poems lost from the Codex Regius lacuna" },
      { label: "Descendants", value: "Wagner's Ring, Morris, Tolkien" },
    ],
    relations: [
      { type: "Hero", slug: "sigurd", name: "Sigurðr" },
      { type: "Heroine", slug: "brynhild", name: "Brynhildr" },
      { type: "The ring", slug: "andvaranaut", name: "Andvaranaut" },
    ],
    attestations: ["NKS 1824 b 4to (sole medieval manuscript)"],
    tags: ["source", "saga", "volsungs", "wagner"],
  },
  {
    slug: "grimnismal",
    name: "Grímnismál",
    oldNorse: "Grímnismál",
    category: "texts",
    kind: "'The Sayings of the Masked One' — the cosmic gazetteer",
    summary:
      "Odin, tortured between two fires under the name Grímnir, recites the architecture of the cosmos — the halls of the gods, the rivers, Valhalla's dimensions — before revealing himself to his doomed host.",
    description: [
      "The frame is a wager between married gods: Odin and Frigg each fostered a king's son, and Frigg, losing, engineered a slander — her husband's protégé, king Geirröðr (not the giant), tortures guests. Odin went to check, as 'Grímnir,' the Masked One, and was seized and set between two fires for eight nights without food or drink. On the ninth, a boy's act of kindness — a full horn — opens the god's mouth, and what pours out is the mythology's most systematic download.",
      "Grímnismál is why we can draw maps: it names the twelve halls of the gods and their owners, Valhalla's 540 doors and roof of shields, the goat and hart on its roof, Yggdrasil's harts and serpents and suffering, the rivers, the horses of day and night — the Norse cosmos as an inventory recited by its owner while he cooks. The poem ends with Odin unmasking through a cascade of his own names, and Geirröðr, leaping up too late, falling on his own sword. Snorri quarried the poem relentlessly; without these eight fire-lit nights, half of Gylfaginning would have nothing to cite.",
    ],
    facts: [
      { label: "Frame", value: "Odin tortured between fires by his own fosterling" },
      { label: "Contents", value: "The halls, rivers, and architecture of the cosmos" },
      { label: "Ending", value: "The name-cascade, and a king on his own sword" },
    ],
    relations: [
      { type: "Speaker", slug: "odin", name: "Odin (as Grímnir)" },
      { type: "Maps", slug: "valhalla", name: "Valhalla" },
      { type: "Collected in", slug: "poetic-edda", name: "The Poetic Edda" },
    ],
    attestations: ["Codex Regius", "AM 748 I a 4to"],
    tags: ["source", "cosmology", "odin", "catalogue"],
  },
  {
    slug: "vafthrudnismal",
    name: "Vafþrúðnismál",
    oldNorse: "Vafþrúðnismál",
    category: "texts",
    kind: "'The Sayings of Vafþrúðnir' — the wisdom duel",
    summary:
      "Odin visits the wisest giant for a head-wagering quiz on the cosmos — past, present, and future — and wins on the only question with one living witness.",
    description: [
      "Frigg advises against the trip; Odin goes anyway, as 'Gagnráðr.' The giant Vafþrúðnir sets terms befitting his confidence: the guest answers standing, and the loser forfeits his head. The examination runs both ways through the whole syllabus — the horses that draw day and night, the river Ífingr between the worlds, the origin of Ymir, the survivors of the Great Winter, the fates of the gods at Ragnarök, what comes after. It is the Norse cosmos administered as an oral exam, and much of what we 'know' about the mythology is this giant's answers.",
      "The trap closes in one move: 'What did Odin say into the ear of his son, before Baldr was borne to the pyre?' The giant's reply is the poem's famous, quiet surrender: 'No one knows what you said, in bygone days, into your dead son's ear... with a doomed mouth I have spoken my ancient lore. Now I know I have matched wits with Odin — you will always be wisest.' The question is unanswerable by design, and its content stays unanswered forever: the mythology's best-kept secret, used as a weapon and never once disclosed.",
    ],
    facts: [
      { label: "Stakes", value: "Heads" },
      { label: "Format", value: "Cosmic quiz, both directions" },
      { label: "The winning question", value: "What Odin whispered to dead Baldr" },
    ],
    relations: [
      { type: "Challenger", slug: "odin", name: "Odin" },
      { type: "The giant", slug: "vafthrudnir", name: "Vafþrúðnir" },
      { type: "Collected in", slug: "poetic-edda", name: "The Poetic Edda" },
    ],
    attestations: ["Codex Regius", "AM 748 I a 4to"],
    tags: ["source", "riddle", "odin", "cosmology"],
  },
  {
    slug: "skirnismal",
    name: "Skírnismál",
    oldNorse: "För Skírnis",
    category: "texts",
    kind: "'The Journey of Skírnir' — the wooing of Gerðr",
    summary:
      "Freyr's servant rides to Jötunheimr to win the giantess Gerðr for his lovesick lord — with gifts, then threats, then a rune-curse that works. Romance, as the Norse actually wrote it.",
    description: [
      "Freyr has seen Gerðr from the forbidden high seat and stopped eating. His servant Skírnir ('the Shining') agrees to woo by proxy, taking the god's horse (fire-wall rated) and, disastrously for later events, the god's self-fighting sword as his fee. In Gymir's courts, the negotiation escalates like a textbook: eleven golden apples — refused; the ring Draupnir — refused, 'I lack no gold in my father's house'; the sword's edge — 'I will not be forced.'",
      "Then Skírnir carves runes, and the poem becomes one of the most chilling passages in the Edda: a detailed curse of invisibility-madness-monstrousness — she will sit on the eagle's mound staring at Hel, food loathsome, wed to a three-headed thurs or no one, itching with unfulfillable desire, 'a spectacle to gods and men.' Gerðr yields: nine nights hence, the grove Barri. Skírnir rides home to a god who cannot bear the arithmetic ('long is one night; how shall I endure three?'), and the poem ends before the wedding. Whether it records a sacred marriage of sky and earth, a meditation on coercion wearing courtship's clothes, or both at once, is the oldest argument in Eddic scholarship — the poem, disquietingly, works either way.",
    ],
    facts: [
      { label: "Mission", value: "Win Gerðr for lovesick Freyr, by proxy" },
      { label: "Escalation", value: "Apples, Draupnir, the sword — then the rune-curse" },
      { label: "The price paid", value: "Freyr's sword, missed at Ragnarök" },
    ],
    relations: [
      { type: "The lovesick lord", slug: "freyr", name: "Freyr" },
      { type: "The bride", slug: "gerd", name: "Gerðr" },
      { type: "Collected in", slug: "poetic-edda", name: "The Poetic Edda" },
    ],
    attestations: ["Codex Regius", "AM 748 I a 4to"],
    tags: ["source", "freyr", "curse", "wooing"],
  },
  {
    slug: "thrymskvida",
    name: "Þrymskviða",
    oldNorse: "Þrymskviða",
    category: "texts",
    kind: "'The Lay of Þrymr' — the comic masterpiece",
    summary:
      "The best-loved poem of the Edda: Thor's hammer stolen, Freyja's refusal, and the thunder-god in a bridal veil eating an ox at his own wedding.",
    description: [
      "Þrymskviða is the Edda doing stand-up with perfect verse technique: the theft of Mjölnir, the ransom demand for Freyja, her necklace-snapping refusal, and the gods' committee decision that Thor will wear the veil. Every stanza lands — the giant king lovingly cataloguing his wealth ('gold-horned cows... I lack nothing but Freyja'), the bride's eight salmon and three casks of mead, Loki's straight-faced explanations, and the hammer, at last, laid in the one lap in the nine worlds where it should never go.",
      "Scholars argue about its date precisely because it is so good: some hear an old poem polished by oral centuries; others a late pastiche by a virtuoso parodying the whole tradition. Either way it became the North's most durable export — it survived into Scandinavian ballads sung into the 19th century, was the first Eddic poem widely translated, and remains the standard answer to anyone who thinks mythology can't be funny on purpose. Notably, Snorri never retells it: the one great myth the professor skipped, perhaps because the poem needs no prose help.",
    ],
    facts: [
      { label: "Plot", value: "The theft of Mjölnir and the bridal-veil recovery" },
      { label: "Register", value: "Deliberate comedy, flawlessly built" },
      { label: "Afterlife", value: "Sung as ballads into the 1800s" },
    ],
    relations: [
      { type: "The bride", slug: "thor", name: "Thor" },
      { type: "The event", slug: "theft-of-mjolnir", name: "The Theft of Mjölnir" },
      { type: "Collected in", slug: "poetic-edda", name: "The Poetic Edda" },
    ],
    attestations: ["Codex Regius (sole source)"],
    tags: ["source", "comedy", "thor", "mjolnir"],
  },
  {
    slug: "lokasenna",
    name: "Lokasenna",
    oldNorse: "Lokasenna",
    category: "texts",
    kind: "'Loki's Quarrel' — the flyting at Ægir's feast",
    summary:
      "The poem where Loki, uninvited, insults every god at the table with slanders that are mostly true — the mythology auditing itself, one horn of ale at a time.",
    description: [
      "Formally, Lokasenna is a senna — a flyting, the North's institutionalised insult-duel — staged at Ægir's sacred feast and conducted by the one guest who has read everyone's file. The poem's engine is that Loki fights fair, horribly: nearly every charge he levels (Odin's unmanly seiðr, Freyja's brother, Frigg's brothers-in-law, Njörðr's history as a hostage and worse, Týr's hand — 'my son Fenrir took it') is corroborated somewhere else in the corpus. The gods answer with status; he answers with facts; only Thor's arriving hammer ends the proceedings, and even then Loki leaves quoting the fire that will end everything.",
      "What the poem is doing has been argued for two centuries: a pagan poet's satire? A Christian-era demolition of the old gods from inside? Or — the reading that has aged best — the mythology's own built-in tribunal, letting the pantheon's crimes be read into the record by its prosecutor before the sentence (his binding, in the prose coda) and the verdict (Ragnarök) arrive. No text does more damage to the gods, and none was more carefully preserved by the monks copying it. Everyone, in every century, wants to hear the roast.",
    ],
    facts: [
      { label: "Form", value: "Senna — formal flyting, god by god" },
      { label: "The horror", value: "The insults are documented" },
      { label: "Ends with", value: "Thor's hammer, and the binding in prose" },
    ],
    relations: [
      { type: "Prosecutor", slug: "loki", name: "Loki" },
      { type: "The event", slug: "flyting-of-loki", name: "The Flyting of Loki" },
      { type: "Collected in", slug: "poetic-edda", name: "The Poetic Edda" },
    ],
    attestations: ["Codex Regius (sole source)"],
    tags: ["source", "loki", "flyting", "satire"],
  },
  {
    slug: "baldrs-draumar",
    name: "Baldrs draumar",
    oldNorse: "Baldrs draumar",
    category: "texts",
    kind: "'Baldr's Dreams' — the necromantic prologue",
    summary:
      "The short, cold poem where Odin rides to Hel's gate, wakes a dead seeress against her will, and interrogates her about his son's nightmares — learning the whole disaster in advance.",
    description: [
      "Baldr has been dreaming his death, and the gods convene — then Odin saddles Sleipnir and rides down the Hel-road alone, past the blood-chested hound, to a seeress's grave east of the door. The poem is fourteen stanzas of necromancy procedural: he chants the corpse-waking spells, and the völva rises complaining — 'snowed on with snow, beaten with rain, soaked with dew; long was I dead' — and answers because compelled, each answer ending 'unwilling I told you; now I will be silent.'",
      "The answers are the Baldr myth in brutal miniature: the benches of Hel are decked and the mead brewed — for Baldr; Höðr will throw; Váli, unborn, will avenge at one night old. Then the poem's famous ending: Odin asks one question too strange — about maidens weeping and throwing veils to the sky — and the seeress recognises her interrogator: 'You are not the man you claimed; you are Odin.' His retort names her mother of three monsters; she closes the interview with the last word of the dead everywhere: ride home proud, for no one will wake me again 'until Loki slips his bonds.' Foreknowledge, the poem's cold gift: Odin gets everything he asked for, and it helps nothing.",
    ],
    facts: [
      { label: "Method", value: "Corpse-waking spells at a grave by Hel's gate" },
      { label: "Findings", value: "Hel's hall decked for Baldr; the thrower and avenger named" },
      { label: "Ending", value: "Mutual unmasking, and a promise of silence until Ragnarök" },
    ],
    relations: [
      { type: "Necromancer", slug: "odin", name: "Odin" },
      { type: "Subject", slug: "baldr", name: "Baldr" },
      { type: "Collected in", slug: "poetic-edda", name: "The Poetic Edda" },
    ],
    attestations: ["AM 748 I a 4to (not in Codex Regius)"],
    tags: ["source", "necromancy", "baldr", "prophecy"],
  },
  {
    slug: "rigsthula",
    name: "Rígsþula",
    oldNorse: "Rígsþula",
    category: "texts",
    kind: "'The List of Ríg' — the origin of the social classes",
    summary:
      "The god Heimdallr, travelling as 'Ríg', fathers the three estates of society — thrall, farmer, and noble — in three farmhouse beds. Norse sociology as a bedroom farce with a straight face.",
    description: [
      "A god calling himself Ríg walks the green roads of the young world and lodges at three houses in ascending order of prosperity. At each he shares the couple's bed for three nights, and nine months later the households are enriched: Great-grandmother bears Þræll (Thrall), black-haired and lumpy-knuckled, whose children's names are a catalogue of insults (Stumpy, Stinker, Lump) and whose lot is dung-spreading and goat-herding; Grandmother bears Karl (Freeman), the red-cheeked farmer whose kin build houses and drive ploughs; Mother bears Jarl (Earl), blond and snake-eyed, who from childhood knows shield, spear, and — when Ríg returns to claim him — runes and inheritance.",
      "The prose header identifies Ríg as Heimdallr, which lights up Völuspá's opening address to 'the sons of Heimdallr' — all humanity, high and low, as the watchman's children. The poem ends mid-story with Jarl's son Konr ungr — 'young Konr,' a pun on konungr, king — out-riddling his father in rune-lore as a crow incites him to conquest; the page breaks off there, monarchy arriving just as the manuscript fails. Read straight, it is class ideology with divine warranty; read slant, it is the North explaining, with a completely straight face, that aristocracy is what happens when a god sleeps over.",
    ],
    facts: [
      { label: "The traveller", value: "Ríg — identified as Heimdallr" },
      { label: "The three sons", value: "Þræll, Karl, and Jarl — the social classes" },
      { label: "Ends with", value: "Konr ungr — 'king', mid-pun, mid-page" },
    ],
    relations: [
      { type: "The god", slug: "heimdall", name: "Heimdallr" },
      { type: "Collected beside", slug: "poetic-edda", name: "The Poetic Edda (Codex Wormianus)" },
    ],
    attestations: ["Codex Wormianus"],
    tags: ["source", "heimdall", "society", "kingship"],
  },
  {
    slug: "hymiskvida",
    name: "Hymiskviða",
    oldNorse: "Hymiskviða",
    category: "texts",
    kind: "'The Lay of Hymir' — the cauldron quest",
    summary:
      "The poem of Thor's expedition for the mile-deep brewing cauldron — including the fishing trip that hooked the World Serpent — told in the Edda's densest kenning-style.",
    description: [
      "The gods want a feast; Ægir, imposed upon, sets a condition he believes impossible: a cauldron big enough to brew for everyone. Týr recalls his kinsman Hymir's mile-deep kettle, and the poem becomes a quest into a giant's household economy — the many-headed grandmother, the helpful gold-decked concubine, the ox-eating guest crisis, the glare that splits a pillar, the cup that breaks only on the owner's skull, and the departure with a cauldron worn as a hat and its handles ringing at the heels.",
      "Embedded at its centre is the tradition's most compact telling of the great fishing: two stanzas of ox-head bait, the 'girdler of earth' gaping below, and Thor's fist driving through the boat. Hymiskviða reads like a poet showing off — it packs more kennings per stanza than any other mythological poem, gods appearing as 'the mountain-breaker' and 'the friend of men' — and scholars suspect a late author compiling several Thor-adventures into one virtuoso frame. It is also quietly the poem of Týr's family shame: the war-god's own kin are the monsters the gods must rob, a border-crossing biography the poem mentions and no one discusses at table.",
    ],
    facts: [
      { label: "Quest", value: "Hymir's mile-deep brewing cauldron, for Ægir's feast" },
      { label: "Centrepiece", value: "The fishing of the World Serpent, in two stanzas" },
      { label: "Style", value: "The kenning-densest of the mythological poems" },
    ],
    relations: [
      { type: "Hero", slug: "thor", name: "Thor" },
      { type: "The giant", slug: "hymir", name: "Hymir" },
      { type: "The event", slug: "thors-fishing-trip", name: "Thor's Fishing Trip" },
    ],
    attestations: ["Codex Regius", "AM 748 I a 4to"],
    tags: ["source", "thor", "cauldron", "kennings"],
  },
];
