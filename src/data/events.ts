import type { Entity } from "./types";

export const events: Entity[] = [
  {
    slug: "ragnarok",
    name: "Ragnarök",
    oldNorse: "Ragnarök",
    pronunciation: "RAG-na-rok",
    category: "events",
    kind: "The doom of the gods",
    epithets: ["Twilight of the Gods", "Fate of the Powers"],
    summary:
      "The prophesied end of the world: three winters without summer, the wolf freed, the gods and giants slaying each other on the plain of Vígríðr, the world burned by Surtr — and then reborn, green, from the sea.",
    description: [
      "Ragnarök ('fate of the powers') is not a possibility in Norse myth but a schedule. The seeress of Völuspá recites it to Odin as accomplished fact in the future tense, and the gods live their whole mythology in its shadow — binding the wolf, gathering the battle-dead, asking riddles about the end over a giant's table.",
      "It begins with the Fimbulvetr, three winters with no summer between them, while brothers kill brothers and 'an axe-age, a sword-age' breaks the bonds of kinship. The wolves Sköll and Hati catch and swallow the sun and moon. Heimdallr blows the Gjallarhorn. Fenrir breaks Gleipnir; Jörmungandr comes ashore in a wall of poisoned sea; Naglfar, the ship of dead men's nails, sails with Loki at the helm; Surtr rides from Múspellsheimr and Bifröst shatters. On the plain of Vígríðr, a hundred leagues on every side, the pairs meet: Odin is swallowed by Fenrir and avenged by Víðarr; Thor kills the Serpent and dies of its venom nine steps later; Freyr falls to Surtr; Týr and Garmr, Heimdallr and Loki, kill each other. Then Surtr flings fire over everything, and the stars fall into the steaming sea.",
      "And then — the part popular culture forgets — the earth rises again, green, from the water. Baldr and Höðr come back from Hel reconciled; Víðarr, Váli, Magni, and Móði survive with Thor's hammer; two humans, Líf and Lífþrasir, emerge from shelter in the world-tree to repeople the earth; and the gods find the old golden chess-pieces glinting in the new grass. Ragnarök is an ending with a morning after.",
    ],
    facts: [
      { label: "Heralds", value: "Fimbulvetr — three summerless winters; the sun and moon devoured" },
      { label: "Battlefield", value: "The plain of Vígríðr" },
      { label: "The pairs", value: "Odin/Fenrir, Thor/Jörmungandr, Freyr/Surtr, Týr/Garmr, Heimdallr/Loki" },
      { label: "After", value: "The world reborn; Baldr returns; two humans survive" },
    ],
    relations: [
      { type: "Announced by", slug: "gjallarhorn", name: "The Gjallarhorn" },
      { type: "World-burner", slug: "surtr", name: "Surtr" },
      { type: "Central prophecy", slug: "voluspa", name: "Völuspá" },
    ],
    attestations: ["Poetic Edda (Völuspá, Vafþrúðnismál)", "Prose Edda (Gylfaginning)", "Gosforth Cross"],
    tags: ["ragnarok", "apocalypse", "prophecy", "rebirth"],
  },
  {
    slug: "creation-of-the-world",
    name: "The Creation of the World",
    oldNorse: "Sköpun heimsins",
    category: "events",
    kind: "Cosmogony",
    summary:
      "How everything began: fire and ice met in the void Ginnungagap, quickened into the giant Ymir, and the gods built the world from his slain body and made humans from two trees on the shore.",
    description: [
      "In the beginning there was no sand, no sea, no cool waves — 'earth was not, nor heaven above; a yawning gap, and grass nowhere,' says Völuspá. To the north lay freezing Niflheimr, to the south burning Múspellsheimr, and between them the void Ginnungagap. Where the rime of the eleven ice-rivers met the sparks of the fire-world, the melt quickened into Ymir, the first giant, and the cow Auðumbla, whose milk fed him and whose salt-licking uncovered Búri, ancestor of the gods.",
      "Búri's grandsons — Odin, Vili, and Vé — slew Ymir and built the world from the body: flesh into earth, blood into sea, bones into mountains, skull into sky held up by four dwarves, brains into clouds, eyebrows into the wall around Midgard. They caught sparks from Múspell and set them as sun, moon, and stars, and appointed Night and Day to drive their chariots around the sky, chased by wolves.",
      "Then, walking the new shore, the three brothers found two trees — Askr and Embla, ash and (perhaps) elm — and made them human: Odin gave breath and life, Vili (or Hœnir) gave wit and feeling, Vé (or Lóðurr) gave face, speech, hearing, and sight. Every person is a tree the gods stopped to finish. The Norse cosmos thus begins in violence and craftsmanship at once: the world is a made thing, and its makers knew it would burn.",
    ],
    facts: [
      { label: "Before", value: "Ginnungagap — the yawning void between fire and ice" },
      { label: "First beings", value: "Ymir the giant; Auðumbla the cow" },
      { label: "The builders", value: "Odin, Vili, and Vé, from Ymir's corpse" },
      { label: "First humans", value: "Askr and Embla, made from two trees" },
    ],
    relations: [
      { type: "First being", slug: "ymir", name: "Ymir" },
      { type: "Nurse of creation", slug: "audhumla", name: "Auðumbla" },
      { type: "Chief builder", slug: "odin", name: "Odin" },
    ],
    attestations: ["Poetic Edda (Völuspá, Vafþrúðnismál, Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["creation", "cosmology", "ymir", "first-humans"],
  },
  {
    slug: "death-of-baldr",
    name: "The Death of Baldr",
    oldNorse: "Dauði Baldrs",
    category: "events",
    kind: "The pivotal tragedy",
    summary:
      "Loki's masterstroke of malice: the invulnerable god of light killed by a blind man's mistletoe dart, the failed ransom from Hel, and the vengeance that binds Loki until the end of the world.",
    description: [
      "Baldr dreamed his own death, and Asgard took it seriously: Odin rode Sleipnir to Hel to wake a dead seeress, who told him the hall was already decked for his son. Frigg took oaths from fire and water, iron and every metal, stones, earth, trees, sicknesses, beasts, birds, venom, and serpents — everything except one young sprig of mistletoe, west of Valhalla, too young, she thought, to swear.",
      "The invulnerability became a game: the gods threw weapons at Baldr and laughed as they glanced off. Loki, in a woman's shape, teased the gap out of Frigg, cut the mistletoe, and brought it to blind Höðr, standing idle at the edge of the sport — 'do him honour as the others do; I will guide your hand.' The dart went through Baldr and he fell dead, and the gods' grief was so great none could speak, and none could take vengeance on the spot, for the place was sanctuary.",
      "Hermóðr rode nine nights down to Hel, who set her price: let all things weep for Baldr, and he goes back. All things wept — people, beasts, earth, stones, metals ('as you see when they come out of frost into heat') — except one giantess in a cave, Þökk, who said Hel should keep what she held. Þökk, all agree, was Loki. Baldr's ship-pyre burned with his wife Nanna beside him, dead of grief, and Odin bent to whisper something in his dead son's ear that no myth reveals. The gods hunted Loki down and bound him under dripping venom until Ragnarök — where Baldr's death is avenged by the world's ending, and answered by his return in the world reborn.",
    ],
    facts: [
      { label: "The weapon", value: "A mistletoe dart — the one thing unsworn" },
      { label: "The hand", value: "Blind Höðr's, guided by Loki" },
      { label: "Hel's price", value: "All creation must weep — and one giantess refused" },
      { label: "Consequence", value: "Loki bound; Ragnarök unstoppable; Baldr returns after" },
    ],
    relations: [
      { type: "Victim", slug: "baldr", name: "Baldr" },
      { type: "Architect", slug: "loki", name: "Loki" },
      { type: "Unwitting hand", slug: "hodr", name: "Höðr" },
      { type: "Grieving mother", slug: "frigg", name: "Frigg" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Völuspá, Baldrs draumar)", "Gesta Danorum"],
    tags: ["baldr", "loki", "tragedy", "mistletoe"],
  },
  {
    slug: "binding-of-fenrir",
    name: "The Binding of Fenrir",
    oldNorse: "Fjöturr Fenris",
    category: "events",
    kind: "The gods' great deception",
    summary:
      "How the gods bound the wolf they had raised: two burst chains, a silken ribbon of impossible things, and the hand of Týr — the myth of what oath-breaking costs.",
    description: [
      "The gods knew from prophecy that Loki's wolf-son would be their ruin, and chose to raise him in Asgard where they could watch him grow — and he grew so fast that only Týr had the courage to feed him. The binding was staged as flattery: they challenged Fenrir to test his strength against the fetter Læðing, and he burst it; against Drómi, twice as strong, and he burst that too — 'to loose from Læðing and dash out of Drómi' became proverbs.",
      "Then Odin sent to the dwarves, who forged Gleipnir from six things that do not exist. When the gods produced a silk ribbon and proposed the third test, Fenrir smelled the trick: too thin to win fame by breaking, too crafted to be honest. He named his terms — a god's hand in his mouth as pledge that he would be freed. The gods looked at one another, and Týr alone put out his right hand.",
      "The wolf strained; the ribbon bit; and all the gods laughed except Týr, who lost his hand. They threaded a cord through the ribbon, anchored it through a stone slab a mile down, and propped Fenrir's jaws open with a sword; his howl and the river of drool that runs from his mouth — called Ván, 'Hope' — go on until Ragnarök, when the fetter breaks and the debt of the broken pledge comes due. The myth stares straight at its own morality: the god of oaths gives his hand so the gods can break their word, and at the world's end the wolf collects.",
    ],
    facts: [
      { label: "Failed fetters", value: "Læðing and Drómi, both burst" },
      { label: "The binding", value: "Gleipnir, soft as silk, made of impossibilities" },
      { label: "The pledge", value: "Týr's right hand — forfeited" },
      { label: "Until", value: "Ragnarök, when the fetter breaks" },
    ],
    relations: [
      { type: "The wolf", slug: "fenrir", name: "Fenrir" },
      { type: "The pledge", slug: "tyr", name: "Týr" },
      { type: "The ribbon", slug: "gleipnir", name: "Gleipnir" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Lokasenna prose)"],
    tags: ["fenrir", "tyr", "oath", "binding"],
  },
  {
    slug: "aesir-vanir-war",
    name: "The Æsir–Vanir War",
    oldNorse: "Vanastríð",
    category: "events",
    kind: "The first war in the world",
    summary:
      "The war between the two families of gods, opened by Odin's spear-cast, ended by truce, hostage-exchange, and a peace sealed in shared spittle — from which came Kvasir, and eventually the Mead of Poetry.",
    description: [
      "The first war in the world began, Völuspá says, when the Æsir speared and thrice burned a woman called Gullveig ('Gold-drink') — and thrice she was reborn, walking on as the seiðr-witch Heiðr. Whether she was a Vanir emissary or gold-greed personified, the Vanir demanded redress; Odin answered by hurling Gungnir over their host, the spear-cast that opens every war. The Vanir broke Asgard's wall; the fighting swung both ways; neither side could win.",
      "The peace was Norse to the bone: not a treaty but an exchange of hostages. Njörðr, Freyr, and Freyja crossed to the Æsir — bringing fertility, wealth, and seiðr into Asgard's bloodline — while Hœnir and wise Mímir went to Vanaheimr. That trade soured: handsome Hœnir was mute without Mímir's counsel, and the Vanir, feeling cheated, beheaded Mímir and sent the head to Odin, who preserved it in herbs and consults it still.",
      "The truce itself was sealed by both sides spitting into one vat, and from the mingled spittle the gods shaped Kvasir, the wisest of beings — whose later murder by two dwarves, his blood brewed with honey, became the Mead of Poetry. The myth reads like tribal history remembered as theology: two cults, a war neither could win, and a merger whose by-product was poetry itself.",
    ],
    facts: [
      { label: "Trigger", value: "The spearing and triple burning of Gullveig" },
      { label: "First act", value: "Odin's spear-cast over the Vanir host" },
      { label: "Peace", value: "Hostages exchanged; spittle mingled in a vat" },
      { label: "By-product", value: "Kvasir — and through him, the Mead of Poetry" },
    ],
    relations: [
      { type: "Spear-caster", slug: "odin", name: "Odin" },
      { type: "Hostages to Asgard", slug: "njord", name: "Njörðr, Freyr, Freyja" },
      { type: "Led to", slug: "mead-of-poetry", name: "The Mead of Poetry" },
    ],
    attestations: ["Poetic Edda (Völuspá)", "Prose Edda (Skáldskaparmál)", "Heimskringla (Ynglinga saga)"],
    tags: ["war", "vanir", "aesir", "kvasir"],
  },
  {
    slug: "mead-of-poetry",
    name: "The Mead of Poetry",
    oldNorse: "Skáldskaparmjöðr",
    category: "events",
    kind: "The theft that made poets",
    summary:
      "Brewed from the blood of the wisest being, hoarded by a giant in a mountain, and stolen by Odin through seduction and shapeshift — whoever drinks it becomes a poet.",
    description: [
      "Kvasir, born of the gods' mingled spittle at the Æsir–Vanir peace, was so wise no question could defeat him. Two dwarves, Fjalar and Galar, murdered him and brewed his blood with honey into a mead that makes whoever drinks it a poet or a scholar — telling the gods that Kvasir had 'suffocated in his own intelligence.' Through further murders the dwarves forfeited the mead to the giant Suttungr, who sealed it in three vats inside the mountain Hnitbjörg, his daughter Gunnlöð as its guard.",
      "Odin came for it as a farmhand called Bölverkr ('Evil-worker'): he engineered the death of nine mowers, worked their labour for a summer, and demanded his wage — a sip. Refused, he bored through the mountain with an auger, slid through as a snake, and spent three nights with Gunnlöð, receiving three sips: in three swallows he drained all three vats. Then he became an eagle and flew for Asgard with Suttungr's eagle-shape behind him; the gods set out vats, and Odin spat the mead into them — though a little squirted backwards under pursuit, and that, the myth grins, is the share of bad poets.",
      "The Mead is the Norse theory of inspiration: poetry is stolen property, wisdom fermented from a murdered god, won by oath-breaking and paid for in someone else's grief — which is why skalds call poetry 'Kvasir's blood' and 'Óðrerir's sea,' and why it belongs to Odin.",
    ],
    facts: [
      { label: "Source", value: "The blood of Kvasir, brewed with honey by two dwarves" },
      { label: "Hoard", value: "Three vats in the mountain Hnitbjörg, guarded by Gunnlöð" },
      { label: "The theft", value: "Odin as snake, lover, then eagle — three sips, three vats" },
      { label: "Bad poets' share", value: "The mead lost backwards in flight" },
    ],
    relations: [
      { type: "Thief", slug: "odin", name: "Odin" },
      { type: "Born from", slug: "aesir-vanir-war", name: "The Æsir–Vanir peace" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "Poetic Edda (Hávamál)"],
    tags: ["poetry", "odin", "kvasir", "theft"],
  },
];
