export type Treatment = {
  slug: string;
  name: string;
  heading: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  procedure: string;
  bodyPart: string;
  surgical?: boolean;
  icon: string;
  image: string;
  imageAlt: string;
  intro: string[];
  signs: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  facts: { label: string; value: string }[];
  aftercare: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    heading: "Root canal treatment",
    metaTitle: "Root Canal Treatment in Anakaputhur, Chennai",
    metaDescription:
      "Single sitting and multi visit root canal treatment at Rudra Dental, Anakaputhur. Rotary endodontics, digital x-ray, and a crown to finish. Open Monday to Saturday.",
    summary:
      "Removing infected pulp from inside a tooth, disinfecting the canals and sealing them, so the tooth can stay in the mouth instead of coming out.",
    procedure: "Endodontic therapy",
    bodyPart: "Tooth pulp and root canal system",
    icon: "rct",
    image: "/treatments/root-canal-treatment.jpg",
    imageAlt: "Endodontist working through a dental operating microscope during a root canal",
    intro: [
      "Inside every tooth is a soft core of nerve and blood vessels called the pulp. Deep decay, a crack, or a heavy knock lets bacteria reach it. Once the pulp is infected it cannot heal on its own, and the infection travels down the root towards the bone.",
      "A root canal takes that infected tissue out. The canals are cleaned, shaped and disinfected, then filled and sealed so bacteria cannot get back in. The tooth stays where it is and keeps doing its job.",
      "The reputation for pain comes from the toothache people arrive with, not the treatment. The procedure itself is done under local anaesthesia and most patients find it comparable to having a filling.",
    ],
    signs: [
      {
        title: "Pain that lingers after hot or cold",
        body: "Sensitivity that fades in a second or two is usually harmless. Pain that carries on for thirty seconds or more after the stimulus is gone suggests the pulp is inflamed.",
      },
      {
        title: "Pain on biting or pressure",
        body: "A tooth that hurts when you bite down, or feels taller than the others, often has infection at the root tip pressing on the surrounding ligament.",
      },
      {
        title: "Swelling or a gum boil",
        body: "A tender lump on the gum beside a tooth is pus finding a way out. This needs attention quickly, not painkillers.",
      },
      {
        title: "A tooth that has changed colour",
        body: "A single tooth turning grey or brown, particularly after an old injury, usually means the pulp has died quietly without pain.",
      },
    ],
    steps: [
      {
        title: "Diagnosis",
        body: "A digital x-ray shows how far the decay has travelled and whether infection has reached the bone. Pulp tests confirm whether the nerve is inflamed, dying or already dead.",
      },
      {
        title: "Anaesthesia and isolation",
        body: "The tooth is numbed and isolated with a rubber dam, which keeps saliva out of the canals and stops anything reaching the back of your throat.",
      },
      {
        title: "Cleaning and shaping",
        body: "The pulp chamber is opened and the canals are cleaned with rotary files, flushing at every stage with disinfectant. Curved and calcified canals are where most of the time goes.",
      },
      {
        title: "Filling and sealing",
        body: "Once the canals are dry they are filled with gutta percha and sealer, then closed with a core build up. An x-ray confirms the fill reaches the root tip.",
      },
      {
        title: "The crown",
        body: "A treated tooth has lost its blood supply and becomes brittle. A crown holds it together and is what decides whether the work lasts years or decades.",
      },
    ],
    facts: [
      { label: "Sittings", value: "One for straightforward cases, two or three with active infection" },
      { label: "Time in the chair", value: "Around 45 to 90 minutes per sitting" },
      { label: "Anaesthesia", value: "Local, you stay awake throughout" },
      { label: "Finishing", value: "A crown is strongly recommended on back teeth" },
    ],
    aftercare: [
      "Expect mild soreness for two to three days as the ligament around the root settles. Ordinary painkillers handle it.",
      "Chew on the other side until the crown is fitted. A temporary filling is not built to take full biting force.",
      "Come back if pain increases rather than eases after the third day, or if swelling appears.",
      "Once crowned, the tooth needs the same brushing and flossing as any other. It can still get decay at the margin.",
    ],
    faqs: [
      {
        q: "Is a root canal painful?",
        a: "The treatment is done under local anaesthesia, so you should feel pressure and movement but not pain. Most of the discomfort people associate with root canals is the toothache that brought them in, which the treatment relieves.",
      },
      {
        q: "Can it be finished in one sitting?",
        a: "Often yes, when the tooth is not acutely infected and the canals are straightforward. When there is active infection, pus, or a canal that needs medication between visits, splitting it over two appointments gives a better result.",
      },
      {
        q: "Do I really need a crown afterwards?",
        a: "On molars and premolars, yes. The tooth has been hollowed out and no longer has a blood supply, which makes it brittle. Most root canals that fail do so because the tooth fractured, not because the canal treatment was poor.",
      },
      {
        q: "Would extraction be cheaper?",
        a: "On the day, yes. Replacing the tooth afterwards with an implant or a bridge costs considerably more than the root canal and crown would have, and nothing replaces a natural root as well as the root itself.",
      },
    ],
    related: ["full-mouth-rehabilitation", "tooth-extraction-and-impaction", "laser-dentistry"],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    heading: "Dental implants",
    metaTitle: "Dental Implants in Anakaputhur, Chennai",
    metaDescription:
      "Single tooth, multiple tooth and full arch dental implants at Rudra Dental, Anakaputhur. Planned on x-ray, placed under local anaesthesia, restored with a crown.",
    summary:
      "A titanium post placed in the jaw to replace the root of a missing tooth, restored with a crown once the bone has grown around it.",
    procedure: "Dental implant placement",
    bodyPart: "Jaw bone and gum",
    surgical: true,
    icon: "implant",
    image: "/treatments/dental-implants.jpg",
    imageAlt: "Cutaway jaw model showing a titanium implant post anchored in bone beside natural teeth",
    intro: [
      "An implant replaces the root, not just the visible tooth. A titanium post is placed into the jaw bone, and over the following months bone grows onto its surface and locks it in place. That process is called osseointegration and it is why an implant feels solid rather than removable.",
      "Because it stands on its own, an implant does not need the neighbouring teeth cut down for support the way a bridge does. It also loads the bone when you chew, which slows the bone loss that follows a missing tooth.",
      "It is a staged treatment rather than a single appointment. The waiting is the part that does the work.",
    ],
    signs: [
      {
        title: "A single missing tooth",
        body: "The most straightforward case. One implant, one crown, and the teeth on either side are left untouched.",
      },
      {
        title: "Several missing teeth in a row",
        body: "Two implants can carry a three unit bridge, so you do not need an implant for every gap.",
      },
      {
        title: "A denture that moves",
        body: "Implants can be used to anchor an existing style of denture, which stops the rocking and lets you bite properly again.",
      },
      {
        title: "A tooth that cannot be saved",
        body: "When a tooth is fractured below the gum or has failed root canal treatment, planning the implant before the extraction usually gives a better result.",
      },
    ],
    steps: [
      {
        title: "Assessment",
        body: "X-rays show how much bone is available and where the nerve and sinus sit. Gum health is checked first, because implants fail in unhealthy gums.",
      },
      {
        title: "Placement",
        body: "Under local anaesthesia the site is prepared and the implant is placed. It takes around an hour for a single implant and most people are surprised how ordinary it feels.",
      },
      {
        title: "Healing",
        body: "Three to six months while bone integrates with the implant surface. A temporary tooth can be worn during this time if the gap shows when you smile.",
      },
      {
        title: "Abutment and impression",
        body: "Once integrated, a connector is fitted and a scan or impression is taken so the crown is built to your bite.",
      },
      {
        title: "The crown",
        body: "The final crown is fitted and the bite adjusted. From then on it is checked at your routine visits like any other tooth.",
      },
    ],
    facts: [
      { label: "Stages", value: "Placement, then restoration after healing" },
      { label: "Total time", value: "Three to six months in most cases" },
      { label: "Anaesthesia", value: "Local, the same as a filling" },
      { label: "Bone grafting", value: "Needed in some cases, decided from the x-ray" },
    ],
    aftercare: [
      "Swelling and mild discomfort for two to three days after placement is normal and settles with the medication given.",
      "Keep to soft food on that side for the first week and avoid chewing directly on the site.",
      "Smoking is the single biggest cause of early implant failure. Stopping, even for the healing period, matters more than anything else you can do.",
      "Clean around the implant carefully once healed. Implants do not decay, but the gum and bone around them can become infected if plaque is left.",
    ],
    faqs: [
      {
        q: "How long does an implant last?",
        a: "The post itself is designed to be permanent and many stay in place for decades. The crown on top is a wearing part and may need replacing over that time. Outcomes depend heavily on gum health, smoking and regular maintenance.",
      },
      {
        q: "Will I need a bone graft?",
        a: "Only if the x-ray shows there is not enough bone width or height at the site, which is more common when the tooth has been missing for years. Where it is needed it is often done at the same appointment as the placement.",
      },
      {
        q: "Is there an age limit?",
        a: "There is no upper limit, and we place implants for patients in their seventies and beyond. The lower limit matters more, because the jaw needs to have finished growing, which is usually the late teens.",
      },
      {
        q: "Can the tooth be fitted the same day?",
        a: "In selected cases a temporary crown can be fitted immediately, but it depends on how firmly the implant sits when placed and where it is in the mouth. It is decided at the time, not promised in advance.",
      },
    ],
    related: ["full-mouth-rehabilitation", "tooth-extraction-and-impaction", "root-canal-treatment"],
  },
  {
    slug: "orthodontic-treatment",
    name: "Orthodontic Treatment",
    heading: "Braces and aligners",
    metaTitle: "Braces and Clear Aligners in Anakaputhur, Chennai",
    metaDescription:
      "Metal, ceramic and self ligating braces plus clear aligners at Rudra Dental, Anakaputhur. Records, a written plan and monthly reviews with an orthodontist.",
    summary:
      "Moving teeth into position with steady, controlled force, using fixed braces or a series of removable aligners.",
    procedure: "Orthodontic treatment",
    bodyPart: "Teeth and supporting bone",
    icon: "ortho",
    image: "/treatments/orthodontic-treatment.jpg",
    imageAlt: "Orthodontist lifting a metal bracket from a bonding tray with tweezers",
    intro: [
      "Teeth move when gentle, continuous pressure is applied to them. Bone remodels ahead of and behind the tooth, and the tooth travels through the jaw. That is true whether the force comes from a bracket and wire or from a sequence of aligners.",
      "Which appliance suits you depends on what needs correcting rather than on preference alone. Rotations and bite corrections respond better to fixed braces. Mild crowding and relapse after previous treatment often suit aligners well.",
      "Straightening is not only cosmetic. Crowded teeth are harder to clean and a bad bite loads some teeth far more than others, which shows up as wear and cracks years later.",
    ],
    signs: [
      {
        title: "Crowding or overlap",
        body: "Teeth that sit on top of one another trap plaque in places a brush cannot reach, which is why crowding often comes with repeated decay in the same spots.",
      },
      {
        title: "Gaps between teeth",
        body: "Spacing can be closed orthodontically, which is usually a better answer than masking it with veneers on otherwise healthy teeth.",
      },
      {
        title: "An overbite or underbite",
        body: "When the front teeth do not meet correctly the load moves onto teeth that were not built to take it, and the wear accumulates.",
      },
      {
        title: "A jaw that clicks or tires",
        body: "Bite problems and jaw joint symptoms often travel together, and correcting the bite is part of settling them.",
      },
    ],
    steps: [
      {
        title: "Records",
        body: "Photographs, x-rays and a scan or impression. These are measured to work out exactly which teeth need to move and how far.",
      },
      {
        title: "The plan",
        body: "You see the appliance options, the expected duration and the cost before anything is fitted. Extractions, if the case needs space, are agreed at this stage rather than sprung on you later.",
      },
      {
        title: "Fitting",
        body: "Braces are bonded in a single appointment of around an hour. With aligners you receive your first sets along with instructions on wear time.",
      },
      {
        title: "Adjustments",
        body: "Roughly monthly. Wires are changed to progressively firmer ones, or you move through your aligner sequence with periodic checks.",
      },
      {
        title: "Retention",
        body: "Teeth drift back towards where they started. Retainers hold the result, and this stage is not optional if you want the work to last.",
      },
    ],
    facts: [
      { label: "Typical duration", value: "Twelve to twenty four months for comprehensive cases" },
      { label: "Review visits", value: "About once a month" },
      { label: "Aligner wear", value: "Twenty to twenty two hours a day for them to work" },
      { label: "After treatment", value: "Retainers, worn nightly long term" },
    ],
    aftercare: [
      "The first week with a new appliance is the most uncomfortable. Teeth feel tender to bite on and this settles.",
      "Hard and sticky food breaks brackets. A broken bracket is not an emergency but it does stall progress until it is repaired.",
      "Cleaning takes longer with braces. An interdental brush around each bracket prevents the white marks that show up when treatment finishes.",
      "Wear your retainer as instructed. Relapse in the first year is common and almost always traces back to retainers left in a drawer.",
    ],
    faqs: [
      {
        q: "Am I too old for braces?",
        a: "No. Teeth move at any age because the biology is the same, though treatment can take a little longer in adults. A good share of our orthodontic patients are working adults.",
      },
      {
        q: "Aligners or braces?",
        a: "Aligners are discreet and removable, which suits mild to moderate cases and adults who cannot wear fixed braces at work. Braces handle complex rotations, bite correction and extraction cases more predictably. The examination decides which is realistic for you.",
      },
      {
        q: "Do braces hurt?",
        a: "Fitting does not hurt. For a few days after fitting and after each adjustment the teeth ache when biting, which soft food and ordinary painkillers cover.",
      },
      {
        q: "Will I need teeth removed?",
        a: "Only when there is not enough room in the jaw for the teeth to line up. Many cases are treated without extractions. It is decided from the measured records, not on sight.",
      },
    ],
    related: ["kids-dentistry", "full-mouth-rehabilitation", "tooth-extraction-and-impaction"],
  },
  {
    slug: "tooth-extraction-and-impaction",
    name: "Tooth Extraction & Impaction",
    heading: "Extractions and wisdom teeth",
    metaTitle: "Wisdom Tooth Removal in Anakaputhur, Chennai",
    metaDescription:
      "Routine and surgical tooth extraction and impacted wisdom tooth removal at Rudra Dental, Anakaputhur, with an oral and maxillofacial surgeon in house.",
    summary:
      "Removing a tooth that cannot be saved, and surgically removing wisdom teeth that are trapped against bone or the tooth in front.",
    procedure: "Tooth extraction and surgical removal of impacted teeth",
    bodyPart: "Tooth, socket and surrounding bone",
    surgical: true,
    icon: "extraction",
    image: "/treatments/tooth-extraction-and-impaction.jpg",
    imageAlt: "Gloved hand holding extraction forceps beside a laid out surgical tray",
    intro: [
      "Taking a tooth out is the last option, not the quick one. Where a tooth can be restored with a filling, a root canal or a crown, that is almost always the better long term answer, because nothing replaces a natural root as well as the root itself.",
      "Some teeth genuinely cannot be kept. A root fractured below the gum, decay that has destroyed the tooth to the bone level, or advanced gum disease that has removed the support are all reasons to remove rather than repair.",
      "Wisdom teeth are a separate problem. They arrive last, often with nowhere to go, and end up wedged against the tooth in front or buried in bone. Removing those is surgery rather than a simple extraction, which is why an oral and maxillofacial surgeon does them here.",
    ],
    signs: [
      {
        title: "Repeated pain behind the last molar",
        body: "A partly erupted wisdom tooth traps food and bacteria under a flap of gum. The swelling and pain settle with treatment and then return, usually at the worst possible time.",
      },
      {
        title: "A tooth broken to the gum line",
        body: "When there is not enough tooth left above the bone to hold a crown, restoring it is not realistic and removal is the honest answer.",
      },
      {
        title: "Severe looseness",
        body: "A tooth that moves when you push it has lost the bone that held it. Once that support is gone it does not come back.",
      },
      {
        title: "Crowding before orthodontics",
        body: "Some orthodontic cases need space created. Those extractions are planned in advance as part of the treatment, not decided on the day.",
      },
    ],
    steps: [
      {
        title: "Imaging",
        body: "An x-ray, and for wisdom teeth a wider view, shows the root shape and how close the roots sit to the nerve in the lower jaw. That determines the approach.",
      },
      {
        title: "Anaesthesia",
        body: "Local anaesthesia, given time to take full effect before starting. You should feel firm pressure but no sharpness.",
      },
      {
        title: "Removal",
        body: "A straightforward tooth is loosened and lifted out. An impacted tooth may need the gum lifted, a small amount of bone removed, and the tooth divided into sections so it comes out through a smaller opening.",
      },
      {
        title: "Closing the site",
        body: "Surgical sites are stitched. Dissolving sutures are used where possible so you do not need a separate visit to remove them.",
      },
      {
        title: "Review",
        body: "A check after a week confirms the socket is healing cleanly, and is the point at which replacing the tooth is discussed if it is one that shows.",
      },
    ],
    facts: [
      { label: "Time in the chair", value: "Twenty minutes for a simple tooth, up to an hour for a difficult impaction" },
      { label: "Anaesthesia", value: "Local" },
      { label: "Sutures", value: "Usually for surgical removals, dissolving where possible" },
      { label: "Swelling", value: "Peaks around day two, then eases" },
    ],
    aftercare: [
      "Bite firmly on the gauze for thirty to forty five minutes. That clot is what heals the socket, so protecting it is the whole job of the first day.",
      "Do not rinse, spit forcefully or use a straw for twenty four hours. Suction dislodges the clot and that is what causes a dry socket.",
      "No smoking. It is the strongest single risk factor for a painful, slow healing socket.",
      "Ice on the outside of the cheek for the first day, then soft food and warm salt water rinses from day two onwards.",
      "Ring the clinic if pain worsens around day three to five rather than improving, which is the usual pattern for a dry socket and is easily treated.",
    ],
    faqs: [
      {
        q: "Does it hurt?",
        a: "Not during, because of the local anaesthetic. Afterwards there is soreness for a few days that ordinary painkillers manage, and more swelling after a surgical wisdom tooth removal than after a simple extraction.",
      },
      {
        q: "Do wisdom teeth always need removing?",
        a: "No. A wisdom tooth that has come through in a good position, bites properly and can be cleaned should be left alone. The ones that cause trouble are those trapped part way through or angled into the tooth in front.",
      },
      {
        q: "Can I go to work the next day?",
        a: "After a simple extraction, usually yes. After a surgical wisdom tooth, plan on taking the following day off, and expect swelling to be at its most noticeable on the second day.",
      },
      {
        q: "What is a dry socket?",
        a: "It is when the blood clot is lost from the socket, leaving bone exposed. It shows up as a deep ache three to five days after the extraction. It is not dangerous and a dressing settles it quickly, but it does need to be seen.",
      },
    ],
    related: ["dental-implants", "root-canal-treatment", "orthodontic-treatment"],
  },
  {
    slug: "laser-dentistry",
    name: "Laser Dentistry",
    heading: "Laser dentistry",
    metaTitle: "Laser Dentistry in Anakaputhur, Chennai",
    metaDescription:
      "Laser gum treatment, contouring and minor soft tissue procedures at Rudra Dental, Anakaputhur. Less bleeding, often no sutures, quicker healing.",
    summary:
      "Using a focused beam of light in place of a blade for gum and soft tissue work, which cuts and seals at the same time.",
    procedure: "Laser assisted dental treatment",
    bodyPart: "Gums and oral soft tissue",
    icon: "laser",
    image: "/treatments/laser-dentistry.jpg",
    imageAlt: "Dental laser handpiece being used on a patient under a curing light",
    intro: [
      "A dental laser delivers energy at a wavelength that soft tissue absorbs. It cuts and seals small blood vessels as it goes, so there is far less bleeding than with a blade and often no need for stitches.",
      "That makes it well suited to gum work, where a clear, dry field matters and where the healing is what patients notice. It is not a replacement for surgery, and it does not remove the need for a drill in most restorative work.",
      "We use it where it genuinely gives a better result rather than as a headline. If a conventional approach suits your case better, that is what we will recommend.",
    ],
    signs: [
      {
        title: "A gum line that sits unevenly",
        body: "Where teeth look short or the gum is higher on one side, reshaping evens the line. It is often done alongside veneers or crowns rather than on its own.",
      },
      {
        title: "Gum pockets that keep returning",
        body: "After deep cleaning, a laser can be used to disinfect the pocket and remove diseased lining tissue, which supports the healing.",
      },
      {
        title: "A tight frenum",
        body: "The band of tissue under the lip or tongue can restrict movement or pull the gums away. Releasing it is quick and heals well with a laser.",
      },
      {
        title: "Recurring mouth ulcers",
        body: "Laser treatment of an aphthous ulcer settles the pain quickly and shortens how long it lasts.",
      },
    ],
    steps: [
      {
        title: "Assessment",
        body: "The gum condition is charted and the cause identified. Laser treatment on top of untreated gum disease achieves very little, so the underlying problem is addressed first.",
      },
      {
        title: "Preparation",
        body: "Protective eyewear for you and the team. Most soft tissue work needs only topical or a small amount of local anaesthetic.",
      },
      {
        title: "Treatment",
        body: "The beam is applied in short passes. There is a distinctive smell and a warm sensation, but the procedure itself is quiet with no vibration.",
      },
      {
        title: "Healing",
        body: "The treated tissue seals over rather than being stitched. Most sites are comfortable within a couple of days.",
      },
    ],
    facts: [
      { label: "Bleeding", value: "Minimal, the beam seals as it works" },
      { label: "Sutures", value: "Often not required" },
      { label: "Anaesthesia", value: "Topical or a small local dose for most soft tissue work" },
      { label: "Best used for", value: "Gum contouring, pocket disinfection, frenectomy, ulcers" },
    ],
    aftercare: [
      "Avoid very hot or spicy food for the rest of the day while the area is settling.",
      "Keep brushing the surrounding teeth normally. Leaving the area unbrushed does more harm than gentle cleaning.",
      "A whitish film over the treated gum during the first days is normal healing tissue, not infection.",
      "Gum work only holds if the cause is controlled, so the maintenance visits afterwards matter as much as the procedure.",
    ],
    faqs: [
      {
        q: "Is laser treatment safe?",
        a: "Yes, used within its indications and with proper eye protection for everyone in the room. The energy is absorbed in a very shallow layer of tissue, which is what makes it precise.",
      },
      {
        q: "Does it hurt?",
        a: "Soft tissue laser work is generally more comfortable than the equivalent with a blade, and much of it needs only topical anaesthetic. You feel warmth rather than sharpness.",
      },
      {
        q: "Can a laser replace the drill?",
        a: "Not in most restorative work. Removing decay and preparing a tooth for a crown still needs conventional instruments. The laser earns its place in soft tissue and gum procedures.",
      },
      {
        q: "How long does the gum take to heal?",
        a: "Most soft tissue sites are comfortable in two to three days and look settled within a week or two, though the final gum contour takes a little longer to mature.",
      },
    ],
    related: ["full-mouth-rehabilitation", "root-canal-treatment", "orthodontic-treatment"],
  },
  {
    slug: "kids-dentistry",
    name: "Kids Dentistry",
    heading: "Dentistry for children",
    metaTitle: "Kids Dentist in Anakaputhur, Chennai",
    metaDescription:
      "Children's dentistry at Rudra Dental, Anakaputhur. Sealants, fluoride, fillings and habit appliances, at a pace that suits the child.",
    summary:
      "Looking after children's teeth from the first tooth onwards, and building the habit of coming to a dentist without dreading it.",
    procedure: "Paediatric dental care",
    bodyPart: "Primary and developing permanent teeth",
    icon: "kids",
    image: "/treatments/kids-dentistry.jpg",
    imageAlt: "Dentist checking a young boy's teeth while he lies back in the chair",
    intro: [
      "The first few visits decide how a child feels about dentists for the rest of their life. We would rather spend a first appointment letting a nervous child sit in the chair, count their teeth and go home than force treatment and lose their trust.",
      "The clinical side is genuinely different from adult work. Milk teeth have thinner enamel and larger pulps, so decay travels faster and a small cavity becomes a painful one sooner than parents expect.",
      "Milk teeth are worth treating. They hold the space for the permanent teeth behind them, and a child who loses them early often ends up needing orthodontic work later that could have been avoided.",
    ],
    signs: [
      {
        title: "White or brown marks on the front teeth",
        body: "Chalky white patches are early decay, before a hole forms. Caught at this stage it can often be arrested rather than drilled.",
      },
      {
        title: "Complaining while eating sweets or cold things",
        body: "Children rarely describe toothache clearly. Avoiding one side, or reacting to cold, is often the first sign.",
      },
      {
        title: "Thumb sucking past the early years",
        body: "A habit that continues once the permanent front teeth arrive starts to push them forward. A simple appliance interrupts it.",
      },
      {
        title: "A permanent tooth coming in behind a milk tooth",
        body: "Common in the lower front. It usually resolves on its own but is worth checking so the milk tooth does not hold the new one out of line.",
      },
    ],
    steps: [
      {
        title: "Meeting first",
        body: "The child sits in the chair, sees the mirror and the light, and nothing is done without telling them what it is first. We explain, show, then do.",
      },
      {
        title: "Examination",
        body: "A full look at the teeth and bite, with an x-ray only where there is a reason for one, such as decay suspected between teeth.",
      },
      {
        title: "Prevention",
        body: "Fissure sealants on the deep grooves of new back teeth, and fluoride varnish where the risk is high. This is the cheapest dentistry there is.",
      },
      {
        title: "Treatment when it is needed",
        body: "Fillings, pulp treatment for a badly decayed milk tooth, or a space maintainer if a tooth has been lost early. Kept short, and stopped if the child has had enough.",
      },
      {
        title: "Watching the bite",
        body: "As permanent teeth arrive we track crowding and jaw growth, so orthodontic treatment can be timed properly rather than started too early or too late.",
      },
    ],
    facts: [
      { label: "First visit", value: "By the first birthday, or when the first tooth appears" },
      { label: "Check ups", value: "Every six months while the teeth are changing" },
      { label: "Sealants", value: "Once the permanent molars come through, around age six" },
      { label: "Appointment length", value: "Kept short, and paused if the child needs it" },
    ],
    aftercare: [
      "Brush their teeth for them until they are around seven. Before that they do not have the coordination to clean properly, however willing they are.",
      "It is how often sugar is eaten rather than how much, so frequent snacking does more damage than a single sweet with a meal.",
      "Use a pea sized amount of fluoride toothpaste and encourage them to spit rather than rinse, which leaves the fluoride working.",
      "Bring them for a check up even when nothing hurts. Decay is painless until it is not, and by then the treatment is bigger.",
    ],
    faqs: [
      {
        q: "When should my child first see a dentist?",
        a: "By their first birthday or when the first tooth appears, whichever comes first. That early visit is mostly about advice and getting them used to the place rather than treatment.",
      },
      {
        q: "Are milk teeth worth filling if they fall out anyway?",
        a: "Yes. They hold the space for the permanent teeth and are needed for chewing and speech. An untreated milk tooth can also become infected, which is painful and can affect the permanent tooth forming underneath it.",
      },
      {
        q: "My child is frightened. What happens?",
        a: "We go at their pace. The first visit may be nothing more than sitting in the chair and having their teeth counted. Rushing a frightened child achieves one appointment and costs you the next ten years.",
      },
      {
        q: "What are sealants?",
        a: "A thin coating flowed into the deep grooves of the back teeth, where a toothbrush bristle cannot reach. It takes a few minutes per tooth, needs no drilling or injection, and prevents a large share of childhood decay.",
      },
    ],
    related: ["orthodontic-treatment", "root-canal-treatment", "laser-dentistry"],
  },
  {
    slug: "full-mouth-rehabilitation",
    name: "Full Mouth Rehabilitation",
    heading: "Full mouth rehabilitation",
    metaTitle: "Full Mouth Rehabilitation in Anakaputhur, Chennai",
    metaDescription:
      "Staged full mouth rehabilitation at Rudra Dental, Anakaputhur. Crowns, bridges, implants and dentures planned together by five specialists in one clinic.",
    summary:
      "Rebuilding the bite when wear, decay or missing teeth have affected most of the mouth, planned as one case rather than tooth by tooth.",
    procedure: "Full mouth rehabilitation",
    bodyPart: "Whole dentition and bite",
    icon: "fullmouth",
    image: "/treatments/full-mouth-rehabilitation.jpg",
    imageAlt: "Dentist taking a patient through a full arch scan on screen before rehabilitation",
    intro: [
      "Some mouths cannot be fixed one tooth at a time. When teeth across both jaws are worn short, heavily filled or missing, treating them individually produces work that keeps failing, because the underlying problem is the bite rather than any single tooth.",
      "A rehabilitation starts by working out where the bite should sit, then rebuilding to that position. The order matters. Gum health first, then anything that needs root canal treatment or removal, then the surgical work, and only then the crowns and bridges that people picture when they think of this treatment.",
      "It is a months long process and it is not cheap. It can usually be staged, so the urgent work is done first and the rest follows as it suits you. What we will not do is start rebuilding on foundations that are not sound.",
    ],
    signs: [
      {
        title: "Teeth that have worn short",
        body: "Grinding, acid erosion or an uneven bite shortens teeth over years. Once the enamel is through, wear accelerates and sensitivity follows.",
      },
      {
        title: "Old crowns and fillings failing together",
        body: "Restorations placed decades ago tend to reach the end of their life at a similar time, which is a natural point to plan properly rather than patch.",
      },
      {
        title: "Several missing teeth",
        body: "As teeth are lost the remaining ones drift and tip, the bite collapses, and each replacement becomes harder to fit correctly.",
      },
      {
        title: "Jaw discomfort and repeated fractures",
        body: "Teeth that keep cracking, and a jaw that aches in the morning, usually point to a bite that is loading a few teeth far more than the rest.",
      },
    ],
    steps: [
      {
        title: "Records and diagnosis",
        body: "Photographs, x-rays, scans and a study of how your jaw closes. This stage takes time because everything afterwards depends on getting it right.",
      },
      {
        title: "The plan and the preview",
        body: "You see the proposed result before treatment starts, along with the sequence, the timeline and the cost of each stage in writing.",
      },
      {
        title: "Foundations",
        body: "Gum treatment, root canals, extractions and any implant placement. Nothing final is fitted until the foundation is healthy and stable.",
      },
      {
        title: "Rebuilding",
        body: "Crowns, bridges, implant restorations or dentures, fitted in a planned order so the bite is established rather than assembled piecemeal.",
      },
      {
        title: "Review and maintenance",
        body: "The bite is checked and adjusted after settling, and a maintenance schedule is set. A night guard is usually part of protecting the work.",
      },
    ],
    facts: [
      { label: "Duration", value: "Several months, staged" },
      { label: "Specialists involved", value: "Prosthodontist, endodontist, surgeon and orthodontist as needed" },
      { label: "Materials", value: "Zirconia and metal free options for visible teeth" },
      { label: "Protection", value: "A night guard where grinding is part of the cause" },
    ],
    aftercare: [
      "Expect a period of getting used to a new bite. Minor adjustments in the first weeks are part of the process, not a sign something is wrong.",
      "Wear the night guard if one has been made. Grinding that wore the natural teeth down will do the same to the new work.",
      "Clean under bridges and around implants with the aids you are shown. This is where problems start when they start.",
      "Keep the review appointments. Catching a loose margin or a high spot early is the difference between an adjustment and a remake.",
    ],
    faqs: [
      {
        q: "How long does it take?",
        a: "Most cases run over several months. The foundation work and any implant healing set the pace, and rushing that part is what causes rebuilt mouths to fail early.",
      },
      {
        q: "Can it be spread out for cost?",
        a: "Usually yes. We sequence the urgent and structural work first, then the rest in stages you can plan for. You get the sequence and the cost of each stage in writing before anything begins.",
      },
      {
        q: "Will it look natural?",
        a: "That is the point of the preview stage. You see and approve the proposed shape and shade before the final work is made, so nothing is a surprise when it is fitted.",
      },
      {
        q: "Do I need every tooth crowned?",
        a: "No, and you should be cautious of anyone who says you do. Teeth that are sound and correctly positioned are left alone. The plan covers what needs restoring, not everything visible.",
      },
    ],
    related: ["dental-implants", "root-canal-treatment", "laser-dentistry"],
  },
];

export function treatmentBySlug(slug: string) {
  return TREATMENTS.find((item) => item.slug === slug);
}
