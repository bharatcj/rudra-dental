export type BlogSection = {
  heading: string;
  body: string[];
  points?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  tag: string;
  date: string;
  dateDisplay: string;
  readMinutes: number;
  image: string;
  imageAlt: string;
  intro: string[];
  sections: BlogSection[];
  takeaways: string[];
  treatment: string;
  related: string[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "brushing-and-flossing-techniques",
    title: "Brushing and Flossing Techniques",
    metaTitle: "How to Brush and Floss Properly",
    metaDescription:
      "The angle of the brush matters more than the pressure, and floss reaches the two surfaces a brush never will. A practical guide from Rudra Dental, Anakaputhur.",
    excerpt:
      "Brush your teeth at least twice a day using a soft bristle toothbrush. The angle matters more than the pressure, and flossing reaches the 40 percent of tooth surface a brush never touches.",
    tag: "Prevention",
    date: "2024-08-12",
    dateDisplay: "12 Aug 2024",
    readMinutes: 5,
    image: "/blog/brushing-and-flossing.jpg",
    imageAlt: "Woman brushing her teeth at a bathroom mirror",
    intro: [
      "Almost everyone who walks into the clinic tells us they brush twice a day. Far fewer are brushing in a way that actually removes plaque from the places it settles. The difference is not effort. It is angle, time and sequence.",
      "Plaque is a soft film. It wipes away easily for the first day or so, then it hardens into calculus that no brush can shift. Everything below is aimed at catching it while it is still soft.",
    ],
    sections: [
      {
        heading: "Hold the brush at forty five degrees",
        body: [
          "Point the bristles towards the gum line rather than straight at the flat face of the tooth. Plaque collects in the shallow groove where the gum meets enamel, and a brush held flat glides straight over it.",
          "Use short strokes, roughly the width of one tooth, and let the bristle tips do the work. If the bristles are splaying outwards while you brush, you are pressing far too hard. Hard brushing does not clean better. It wears a notch into the neck of the tooth and pushes the gum upwards, which is how sensitivity starts.",
        ],
      },
      {
        heading: "Two minutes, split into four",
        body: [
          "Divide the mouth into four quadrants and give each one thirty seconds. Most people spend their two minutes on the outer surfaces of the front teeth because those are the ones they can see in the mirror, and give the inner surfaces of the lower molars almost nothing. Those back inner surfaces are where we find the heaviest tartar deposits.",
          "A soft bristle brush is the right choice for nearly everyone. Medium and hard bristles sell well and damage gums. Replace the brush every three months, or sooner if the bristles have lost their shape.",
        ],
      },
      {
        heading: "Floss reaches what the brush cannot",
        body: [
          "Each tooth has five surfaces. A brush cleans three of them. The two surfaces facing the neighbouring teeth stay untouched, and those contact points are where a large share of adult cavities begin.",
          "Take about forty centimetres of floss, wind it around the middle fingers, and guide it between the teeth with a gentle sawing motion. Once it is through the contact, curve it into a C shape against one tooth and slide it just under the gum, then repeat against the tooth on the other side. Snapping the floss straight down cuts the gum and teaches people to give up on flossing altogether.",
          "If your hands do not cooperate with string floss, interdental brushes are just as effective and often easier. Water flossers help around bridges and implants. The best tool is the one you will actually use every night.",
        ],
      },
      {
        heading: "The order that works best",
        body: [
          "Floss first, then brush. Flossing loosens debris from between the teeth so the fluoride in your toothpaste can reach those surfaces instead of sitting on top of a plug of plaque.",
          "After brushing, spit out the excess paste and stop there. Rinsing with water immediately afterwards washes away the fluoride that was about to do the work. Leaving a thin film on the teeth is the whole point.",
        ],
      },
    ],
    takeaways: [
      "Angle the bristles into the gum line, not flat against the tooth",
      "Two minutes, thirty seconds per quadrant, soft bristles only",
      "Floss before brushing, and curve it against each tooth in turn",
      "Spit after brushing rather than rinsing the fluoride away",
    ],
    treatment: "orthodontic-treatment",
    related: ["regular-dental-check-ups", "bleeding-gums-what-they-mean"],
  },
  {
    slug: "the-power-of-proper-nutrition",
    title: "The Power of Proper Nutrition",
    metaTitle: "How Diet Affects Your Teeth",
    metaDescription:
      "How often you eat sugar damages enamel far more than how much. What to eat and when, explained by the dentists at Rudra Dental in Anakaputhur, Chennai.",
    excerpt:
      "A healthy diet plays a significant role in maintaining your dental health. Frequency of sugar exposure damages enamel far more than the total quantity you consume in a day.",
    tag: "Lifestyle",
    date: "2024-10-18",
    dateDisplay: "18 Oct 2024",
    readMinutes: 5,
    image: "/blog/proper-nutrition.jpg",
    imageAlt: "Fresh vegetables and citrus fruit on a market table",
    intro: [
      "Patients are often surprised when we tell them the chocolate bar is less of a problem than the four cups of sweet tea spread across the day. The mouth does not add up sugar the way a calorie counter does. It responds to each exposure separately.",
    ],
    sections: [
      {
        heading: "Frequency beats quantity",
        body: [
          "Every time sugar reaches the teeth, the bacteria in plaque produce acid for roughly twenty to thirty minutes. During that window enamel loses minerals. Saliva then neutralises the acid and puts some of those minerals back.",
          "Eat a whole packet of biscuits in one sitting and you get one acid attack. Eat one biscuit every hour for six hours and you get six, with barely any recovery time in between. The second pattern is far more destructive even though the sugar total is lower.",
          "This is why sipping sweet tea, coffee with sugar or soft drinks through the afternoon does more damage than dessert after dinner. If you are going to have something sweet, have it with a meal and be done with it.",
        ],
      },
      {
        heading: "The foods that help",
        body: [
          "Dairy is genuinely protective. Milk, curd, paneer and cheese supply calcium and phosphate, and cheese in particular raises the pH in the mouth after a meal. A small piece of cheese after something sweet is an old trick that actually works.",
          "Crunchy raw vegetables and fruit stimulate saliva, which is the body's own buffer. Water between meals rinses food debris away and keeps saliva flowing. Green leafy vegetables, nuts and fish support the bone that holds the teeth in place.",
        ],
        points: [
          "Milk, curd and cheese for calcium and phosphate",
          "Crunchy fruit and raw vegetables to stimulate saliva",
          "Plain water between meals rather than sweetened drinks",
          "Nuts and fish for the bone supporting your teeth",
        ],
      },
      {
        heading: "The hidden acids",
        body: [
          "Sugar is not the only problem. Acidic drinks dissolve enamel directly without any help from bacteria. Lemon water, aerated drinks, packaged fruit juice and sports drinks all sit low on the pH scale.",
          "If you drink them, use a straw so the liquid bypasses the front teeth, and do not brush for at least thirty minutes afterwards. Enamel is temporarily softened by acid, and brushing during that window scrubs it away.",
        ],
      },
      {
        heading: "What we see in Anakaputhur",
        body: [
          "Two patterns come up repeatedly in our chairs. The first is children who go to sleep with a bottle or after a sweet, so sugar sits on the teeth all night when saliva flow is at its lowest. The second is adults who chew tobacco or areca nut, which damages both the gums and the soft tissue lining of the mouth.",
          "Neither is fixed by better brushing alone. Both are worth raising at a check up so we can look at the specific pattern rather than giving generic advice.",
        ],
      },
    ],
    takeaways: [
      "Six small sugar exposures harm more than one large one",
      "Finish sweets with a meal instead of grazing through the day",
      "Cheese and water after eating help the mouth recover",
      "Wait thirty minutes after anything acidic before brushing",
    ],
    treatment: "kids-dentistry",
    related: ["brushing-and-flossing-techniques", "regular-dental-check-ups"],
  },
  {
    slug: "regular-dental-check-ups",
    title: "Regular Dental Check-ups",
    metaTitle: "Why Six Month Dental Check-ups Matter",
    metaDescription:
      "Most cavities and gum problems are painless until they are expensive. What a six month dental check-up finds and why it is worth the appointment.",
    excerpt:
      "Do not underestimate the importance of routine dental visits. Most cavities and gum problems are painless until they become expensive, and a six month recall catches them early.",
    tag: "Checkups",
    date: "2022-05-21",
    dateDisplay: "21 May 2022",
    readMinutes: 4,
    image: "/blog/regular-checkups.jpg",
    imageAlt: "Dentist examining a patient's teeth with a mirror and probe",
    intro: [
      "The most common thing we hear is that there was no pain, so there seemed to be no reason to come in. That is exactly the problem. Teeth do not hurt until decay reaches the nerve, and by then the small filling that would have solved it a year ago has turned into a root canal.",
    ],
    sections: [
      {
        heading: "What actually happens in the chair",
        body: [
          "A check up is not a glance and a goodbye. We go tooth by tooth with a mirror and probe looking for soft spots, chart the gum pockets around each tooth, check old fillings and crowns for leaking margins, and look at the soft tissue of the cheeks, tongue and palate.",
          "That last part matters more than people realise. Oral cancer screening takes under a minute and catches lesions at a stage where treatment is straightforward. Tobacco and areca nut use are common enough in Chennai that we screen every adult patient as routine.",
        ],
      },
      {
        heading: "Why six months",
        body: [
          "Calculus forms within a couple of weeks of plaque being left undisturbed, and once it hardens no amount of brushing removes it. Six months is roughly the interval at which deposits build up to the point of irritating the gums but before the bone underneath starts to be lost.",
          "Some people need to come more often. If you smoke, have diabetes, wear braces or have a history of gum disease, three or four months is a better interval. We will tell you which group you fall into rather than giving everyone the same instruction.",
        ],
      },
      {
        heading: "The cost argument",
        body: [
          "A scaling and polish is the cheapest appointment in dentistry. A filling costs more. A root canal with a crown costs several times that, and an extraction followed by an implant costs more again.",
          "Every one of those escalations began as something that could have been caught in a routine visit. The appointment you skip is rarely free. It is deferred and marked up.",
        ],
      },
      {
        heading: "Bring your questions",
        body: [
          "A check up is also the cheapest way to get an honest answer about whitening, aligners, a chipped front tooth or a crown that has started to look grey at the edge. We would rather talk you out of treatment you do not need than have you wonder about it for another year.",
          "If something has been bothering you, mention it at the start of the appointment rather than as you are standing up to leave.",
        ],
      },
    ],
    takeaways: [
      "Decay is painless until it reaches the nerve",
      "Six months suits most people, three to four if you smoke or have diabetes",
      "Screening for oral cancer takes under a minute and is part of every visit",
      "Every deferred appointment gets more expensive, not less",
    ],
    treatment: "root-canal-treatment",
    related: ["brushing-and-flossing-techniques", "bleeding-gums-what-they-mean"],
  },
  {
    slug: "does-a-root-canal-hurt",
    title: "Does a Root Canal Actually Hurt",
    metaTitle: "Does a Root Canal Hurt? What to Expect",
    metaDescription:
      "Root canal treatment relieves toothache rather than causing it. What happens during the appointment, how long it takes and what recovery feels like.",
    excerpt:
      "The reputation comes from an era before modern anaesthetic and rotary instruments. The procedure relieves the pain you arrived with, and most single sitting cases are done in about an hour.",
    tag: "Treatment",
    date: "2025-02-14",
    dateDisplay: "14 Feb 2025",
    readMinutes: 6,
    image: "/blog/root-canal-truth.jpg",
    imageAlt: "Dentist showing a patient their dental x-ray during a consultation",
    intro: [
      "No procedure in dentistry has a worse reputation. People arrive having already decided they would rather lose the tooth. That reputation was earned decades ago, before rotary instruments, before rubber dam isolation and before anaesthetic that reliably reaches an inflamed nerve.",
      "The honest answer is that a root canal removes the pain you came in with. The throbbing that keeps you awake is the nerve inside the tooth dying under pressure. Taking that nerve out is what stops it.",
    ],
    sections: [
      {
        heading: "Why the tooth started hurting",
        body: [
          "Inside every tooth is a chamber of soft tissue containing nerve and blood supply. When decay, a crack or a deep old filling lets bacteria reach that chamber, the tissue becomes inflamed. It has nowhere to swell because it is enclosed in solid dentine, so pressure builds and the pain becomes constant rather than triggered.",
          "Sensitivity to cold that disappears in a second is usually not this. Pain that lingers for minutes after a hot drink, pain that wakes you at night, or a tooth that hurts to bite on are the signs that the nerve is involved.",
        ],
      },
      {
        heading: "What we do during the appointment",
        body: [
          "The tooth is numbed first, and we do not start until you confirm it is numb. A rubber dam is placed to isolate the tooth so nothing from the rest of the mouth enters the canal and nothing from the canal reaches your throat.",
          "We open the top of the tooth, remove the inflamed tissue, and shape the canals with fine rotary files while irrigating them. Once the canals are clean and dry they are sealed with an inert filling material, and the access opening is closed.",
          "Most straightforward front and premolar teeth are completed in a single sitting of around an hour. Molars with curved canals, or teeth with an active infection at the root tip, are better done across two visits.",
        ],
      },
      {
        heading: "Afterwards",
        body: [
          "The tooth is usually tender to bite on for two or three days because the ligament around the root has been irritated. That tenderness responds to ordinary painkillers and settles on its own. Sharp spontaneous pain afterwards is not normal and is worth a phone call.",
          "A root treated tooth has lost its blood supply and becomes brittle over time. Back teeth take the full force of chewing, so a crown is not an upsell in that position. It is the difference between the tooth lasting years and splitting the first time you bite something hard.",
        ],
      },
      {
        heading: "The alternative is worse",
        body: [
          "The other option is extraction. That solves the pain too, but it leaves a gap that the neighbouring teeth drift into and the opposing tooth grows down towards. Replacing it with an implant or a bridge costs considerably more than the root canal and crown would have.",
          "Keeping your own tooth is almost always the better outcome. The root beneath it maintains the bone in a way no artificial replacement fully matches.",
        ],
      },
    ],
    takeaways: [
      "The procedure ends the toothache rather than causing it",
      "Single sitting treatment is realistic for most front teeth and premolars",
      "Expect two or three days of tenderness when biting, nothing sharper",
      "A crown on a root treated back tooth prevents it splitting later",
    ],
    treatment: "root-canal-treatment",
    related: [
      "wisdom-tooth-pain-when-it-needs-removing",
      "bleeding-gums-what-they-mean",
    ],
  },
  {
    slug: "bleeding-gums-what-they-mean",
    title: "Bleeding Gums Are Not Normal",
    metaTitle: "Why Your Gums Bleed and What to Do",
    metaDescription:
      "Gums that bleed when you brush are inflamed, not sensitive. What causes it, when it becomes bone loss, and how gum disease is treated at Rudra Dental.",
    excerpt:
      "Healthy gums do not bleed when you brush them. Bleeding is inflammation, it is reversible at the early stage, and ignoring it is how people lose teeth that never had a single cavity.",
    tag: "Gum Health",
    date: "2025-06-09",
    dateDisplay: "9 Jun 2025",
    readMinutes: 6,
    image: "/blog/bleeding-gums.jpg",
    imageAlt: "Close view of a gum examination with a dental mirror and probe",
    intro: [
      "People treat bleeding gums the way they treat a bruise, as something that will settle if left alone. Many respond by brushing that area more gently, which is the opposite of what helps.",
      "Gums bleed because they are inflamed. The inflammation is a response to bacteria sitting along the gum line. Brush the area properly and the bleeding usually stops within a week or two.",
    ],
    sections: [
      {
        heading: "Gingivitis is reversible, periodontitis is not",
        body: [
          "At the first stage, called gingivitis, only the gum is affected. It is red, slightly swollen and bleeds on brushing. A scaling appointment plus proper home care resolves it completely with nothing lost.",
          "If it continues, the inflammation spreads below the gum and starts to destroy the bone holding the tooth in its socket. That stage is periodontitis, and the bone does not grow back. Treatment at that point is about stopping further loss, not recovering what is gone.",
          "This is the single reason we push people to act on bleeding gums early. The window where the problem is fully reversible is not permanent.",
        ],
      },
      {
        heading: "What makes it worse",
        body: [
          "Smoking is the biggest risk factor after plaque itself, and it also masks the warning sign because nicotine constricts the blood vessels in the gum. Smokers often have advanced gum disease with very little bleeding.",
          "Uncontrolled diabetes works in both directions. High blood sugar makes gum disease progress faster, and active gum infection makes blood sugar harder to control. Pregnancy, certain blood pressure medications and vitamin C deficiency all play a part too.",
        ],
        points: [
          "Plaque and calculus left along the gum line",
          "Smoking, which also hides the bleeding",
          "Diabetes that is not well controlled",
          "Hormonal changes during pregnancy",
        ],
      },
      {
        heading: "Signs that it has gone past gingivitis",
        body: [
          "Persistent bad breath that returns within hours of brushing, gums that have receded so the teeth look longer, a tooth that feels slightly loose, or a change in how your teeth meet when you bite. Pus at the gum margin is a clear sign of active infection.",
          "None of these are subtle once you know to look for them, but they develop slowly enough that people adjust rather than notice.",
        ],
      },
      {
        heading: "How it is treated",
        body: [
          "Early cases need scaling to remove the hardened deposits, followed by a review a few weeks later to check the gums have settled. That is often the entire treatment.",
          "Deeper pockets need root planing, which cleans the root surface below the gum under local anaesthetic. Advanced cases may need laser assisted gum treatment or a small surgical procedure to reach the affected areas. We use a laser for gum work where it suits the case because it reduces bleeding and shortens healing.",
        ],
      },
    ],
    takeaways: [
      "Bleeding means inflammation, not sensitivity, and brushing more gently makes it worse",
      "Gingivitis is fully reversible, bone loss from periodontitis is not",
      "Smokers often bleed less while the disease progresses faster",
      "Scaling plus a review appointment resolves most early cases",
    ],
    treatment: "laser-dentistry",
    related: ["regular-dental-check-ups", "brushing-and-flossing-techniques"],
  },
  {
    slug: "your-childs-first-dental-visit",
    title: "Your Child's First Dental Visit",
    metaTitle: "When to Take Your Child to the Dentist",
    metaDescription:
      "The first dental visit should happen by the first birthday. What to expect, how to prepare your child, and why milk teeth are worth treating.",
    excerpt:
      "The first visit should happen by the first birthday, long before anything hurts. Children who meet a dentist while nothing is wrong grow up without the fear their parents carry.",
    tag: "Children",
    date: "2025-09-22",
    dateDisplay: "22 Sep 2025",
    readMinutes: 5,
    image: "/blog/first-dental-visit.jpg",
    imageAlt: "Young girl and her dentist giving a thumbs up in the clinic",
    intro: [
      "Most children we see for the first time are brought in because something already hurts. That is the hardest possible introduction to a dental clinic, and it shapes how they feel about the chair for years.",
      "The guidance is to come within six months of the first tooth appearing, or by the first birthday, whichever comes sooner. At that age we are not treating anything. We are letting a child sit in the chair, count their teeth and leave with nothing having happened to them.",
    ],
    sections: [
      {
        heading: "What the first appointment involves",
        body: [
          "A short look at the teeth and gums, usually with the child sitting on a parent's lap for the youngest ones. We check how the teeth are coming through, look for early white spot lesions, and talk to you about feeding, bottle use and brushing.",
          "There are no instruments beyond a mirror unless something needs attention. The whole point is that the child leaves having enjoyed it.",
        ],
      },
      {
        heading: "How to prepare them",
        body: [
          "Keep your own history out of it. Children pick up far more from tone than from words, and a parent who is visibly tense teaches fear faster than any procedure could.",
          "Avoid promising it will not hurt, because that plants the idea that it might. Do not use the dentist as a threat for not brushing. Describe it as someone who counts teeth and checks they are strong.",
          "Morning appointments work better than late afternoon ones. Tired children have no patience for anything new.",
        ],
        points: [
          "Book a morning slot when they are fresh",
          "Describe the visit in plain, neutral terms",
          "Avoid the words hurt, pain, injection and drill",
          "Let them bring a familiar toy if it helps",
        ],
      },
      {
        heading: "Milk teeth matter more than people think",
        body: [
          "The idea that baby teeth do not need treatment because they will fall out anyway is one we spend a lot of time correcting. Milk teeth hold space for the permanent teeth forming above them. Lose one early and the neighbouring teeth drift into the gap, so the adult tooth arrives with nowhere to go. That is a large share of the crowding we later treat with braces.",
          "Decay in a milk tooth also causes the same pain, infection and lost sleep as decay in an adult tooth, and the infection sits directly above the developing permanent tooth.",
        ],
      },
      {
        heading: "Prevention that works at this age",
        body: [
          "Fluoride varnish takes two minutes and measurably reduces decay in young children. Pit and fissure sealants close the deep grooves on the biting surface of the first permanent molars, which arrive around age six and are the teeth most likely to decay.",
          "Both are quick, need no anaesthetic and cost a fraction of the fillings they prevent. If your child is at the age for either, we will raise it.",
        ],
      },
    ],
    takeaways: [
      "First visit by the first birthday, before anything is wrong",
      "Keep your own dental anxiety out of the conversation",
      "Milk teeth hold space for adult teeth and are worth treating",
      "Varnish and sealants prevent far more than they cost",
    ],
    treatment: "kids-dentistry",
    related: ["brushing-and-flossing-techniques", "the-power-of-proper-nutrition"],
  },
  {
    slug: "teeth-whitening-what-works",
    title: "Teeth Whitening, What Actually Works",
    metaTitle: "Teeth Whitening Options and What to Expect",
    metaDescription:
      "Charcoal, whitening toothpaste, home kits and in clinic bleaching compared. What lightens teeth, what only cleans them and what damages enamel.",
    excerpt:
      "Charcoal powder and whitening toothpaste remove surface stain. Neither changes the colour of the tooth itself. Knowing which problem you have decides which treatment is worth paying for.",
    tag: "Cosmetic",
    date: "2026-01-19",
    dateDisplay: "19 Jan 2026",
    readMinutes: 6,
    image: "/blog/teeth-whitening.jpg",
    imageAlt: "Dentist holding a tooth shade guide for colour matching",
    intro: [
      "Whitening is the treatment people ask about most and understand least. Before spending anything, it is worth knowing whether your teeth are stained on the surface or darker throughout, because the two need completely different answers.",
    ],
    sections: [
      {
        heading: "Surface stain or internal colour",
        body: [
          "Surface stain comes from tea, coffee, red wine, tobacco and areca nut. It sits on the outside of the enamel and comes off with a professional clean and polish. If your teeth have darkened gradually over years of tea drinking, a scaling appointment may be all you need.",
          "Internal colour is different. Dentine, the layer beneath enamel, is naturally yellow and grows more so with age as enamel thins. Some teeth are darker from the start, and a tooth that has had a root canal often greys from the inside. Polishing does nothing for any of these. They need bleaching, or in some cases a veneer or crown.",
        ],
      },
      {
        heading: "What the products do",
        body: [
          "Whitening toothpaste contains mild abrasives and sometimes a very low concentration of peroxide. It removes surface stain and holds a result. It does not lighten the tooth.",
          "Charcoal powder is abrasive and nothing more. Used regularly it wears enamel, and since the dentine underneath is yellower, long term use can leave teeth looking darker than when you started. We see this often enough that it is worth stating plainly.",
          "Home kits from a pharmacy use low concentration gel in a tray that does not fit your teeth. The gel leaks onto the gums and the result is uneven. They are not dangerous at those concentrations, but they rarely justify the money.",
        ],
      },
      {
        heading: "In clinic and custom tray bleaching",
        body: [
          "In clinic whitening uses a high concentration gel with the gums fully isolated, usually across two or three cycles in a single appointment of around ninety minutes. It gives the fastest visible change.",
          "Custom tray bleaching uses impressions of your teeth to make trays that fit exactly, with gel worn at home for a set time each day over two weeks. The result is comparable and often lasts longer because you keep the trays for occasional top ups.",
          "Either way we take a shade reading before starting and again at the end, so the result is measured rather than argued about.",
        ],
      },
      {
        heading: "Before you book",
        body: [
          "Whitening only works on natural tooth structure. Crowns, veneers and white fillings do not change colour, so if you have a crown on a front tooth it will need replacing after whitening to match the new shade. That has to be planned before you start, not discovered afterwards.",
          "Active decay and untreated gum disease need dealing with first. Sensitivity during treatment is common, temporary, and manageable with a desensitising paste in the weeks beforehand.",
          "Results last one to three years depending on what you eat, drink and smoke. Nothing about it is permanent, and anyone promising otherwise is selling.",
        ],
      },
    ],
    takeaways: [
      "A polish fixes surface stain, bleaching changes the tooth colour itself",
      "Charcoal is abrasive and can leave teeth looking darker over time",
      "Crowns and white fillings will not lighten and may need replacing",
      "Treat decay and gum disease before whitening anything",
    ],
    treatment: "full-mouth-rehabilitation",
    related: ["regular-dental-check-ups", "the-power-of-proper-nutrition"],
  },
  {
    slug: "wisdom-tooth-pain-when-it-needs-removing",
    title: "Wisdom Tooth Pain and When It Needs Removing",
    metaTitle: "Wisdom Tooth Pain: When Removal Is Needed",
    metaDescription:
      "Not every wisdom tooth needs to come out. The signs that it does, what impaction means, and what recovery from removal really involves.",
    excerpt:
      "Not every wisdom tooth needs removing. The ones that do are usually causing repeat infections, decay in the tooth in front, or pain that keeps returning every few months.",
    tag: "Oral Surgery",
    date: "2026-05-11",
    dateDisplay: "11 May 2026",
    readMinutes: 6,
    image: "/blog/wisdom-tooth-pain.jpg",
    imageAlt: "Woman holding a cold compress against her cheek for tooth pain",
    intro: [
      "Wisdom teeth arrive between the late teens and mid twenties, into a jaw that has usually finished growing. When there is room they erupt and cause no trouble at all. When there is not, they come in at an angle, partly through the gum, or stay buried against the tooth in front.",
      "A tooth that is not causing problems and can be kept clean does not need to come out. The decision should rest on what the tooth is actually doing, not on the fact that it exists.",
    ],
    sections: [
      {
        heading: "What impaction means",
        body: [
          "An impacted wisdom tooth is one that cannot fully erupt into position. It may be tilted forwards into the second molar, lying horizontally, or held under bone.",
          "The problem case is partial eruption, where a flap of gum sits over part of the crown. Food and bacteria collect underneath it and cannot be brushed out. That leads to pericoronitis, which is the swollen, painful gum around a partly erupted wisdom tooth that most people arrive complaining about.",
          "An x ray is what settles the question. It shows the angle, the root shape and, importantly, how close the roots sit to the nerve running through the lower jaw.",
        ],
      },
      {
        heading: "Reasons to take it out",
        body: [
          "Repeated episodes of pericoronitis, decay in the wisdom tooth or in the second molar next to it, a cyst forming around the crown, or pressure that is damaging the root of the tooth in front. Pain that returns every few months rather than settling for good is its own answer.",
          "Reasons that are not sufficient on their own include a tooth that is fully erupted, functional and cleanable, or a single episode of soreness that resolved and has not returned.",
        ],
        points: [
          "Infection around the gum flap that keeps coming back",
          "Decay in the wisdom tooth or the molar in front of it",
          "A cyst or damage showing on the x ray",
          "Pain that recurs rather than resolving",
        ],
      },
      {
        heading: "What the procedure involves",
        body: [
          "A straightforward erupted wisdom tooth comes out much like any other extraction, under local anaesthetic, in a few minutes. An impacted tooth needs a small incision in the gum, sometimes removal of a little bone, and the tooth is often sectioned so it can be lifted out in pieces through a smaller opening. Sectioning sounds worse and is usually gentler on the surrounding tissue.",
          "You are numb throughout. You will feel pressure and hear noise, but not pain. Most single impacted teeth take between twenty and forty minutes.",
        ],
      },
      {
        heading: "Recovery, honestly",
        body: [
          "Swelling peaks around day two or three and then improves. Expect three to five days before you feel normal for a surgical removal, less for a simple one. Ice on the cheek for the first day helps, warm salt water rinses from day two onwards.",
          "Do not rinse hard, spit forcefully or use a straw for the first twenty four hours. All three can dislodge the clot and leave you with a dry socket, which is genuinely painful and easily avoided.",
          "Take the painkillers before the anaesthetic wears off rather than waiting for pain to arrive. Eat soft food on the other side, keep the rest of your mouth clean, and call us if swelling is increasing after day three instead of settling.",
        ],
      },
    ],
    takeaways: [
      "A clean, functional wisdom tooth can usually stay",
      "Repeat infection or decay in the tooth in front is a clear reason to remove it",
      "An x ray decides the approach and shows where the nerve runs",
      "No straws, no forceful rinsing and no spitting for the first day",
    ],
    treatment: "tooth-extraction-and-impaction",
    related: ["does-a-root-canal-hurt", "regular-dental-check-ups"],
  },
];

export function postsForTreatment(slug: string) {
  return POSTS_BY_DATE.filter((post) => post.treatment === slug);
}

export function postBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export const POSTS_BY_DATE = [...POSTS].sort((a, b) =>
  b.date.localeCompare(a.date),
);
