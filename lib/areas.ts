export type ServiceArea = {
  slug: string;
  name: string;
  pincode: string;
  home?: boolean;
  distance: string;
  travel: string;
  route: string;
  landmarks: string[];
  transport: string[];
  intro: string[];
  why: string;
  commonTreatments: string[];
  faqs: { q: string; a: string }[];
  heading: string;
  metaTitle: string;
  metaDescription: string;
  photo?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
    author: string;
    licence: string;
    source: string;
  };
};

export type ServiceAreaSeed = ServiceArea;

function build(seed: ServiceAreaSeed): ServiceArea {
  return {
    ...seed,
    heading: seed.heading,
    metaTitle: seed.metaTitle,
    metaDescription: seed.metaDescription,
  };
}

export const AREA_SEEDS: ServiceAreaSeed[] = [
  {
    "slug": "anakaputhur",
    "name": "Anakaputhur",
    "pincode": "600070",
    "home": true,
    "distance": "on the street itself",
    "travel": "a short walk from most of Anakaputhur",
    "route": "Kamaraj Street runs off the main Anakaputhur road through Guruswamy Nagar. The clinic is at Babu Reddy Avenue, Plot No. 1, on the Kamatchi Nagar side.",
    "landmarks": [
      "Anakaputhur bus terminus",
      "The handloom weaving units the town is known for",
      "Anakaputhur market",
      "The Adyar river crossing towards Pallavaram"
    ],
    "transport": [
      "Anakaputhur bus terminus is the local hub, with services towards Pallavaram, Tambaram and Kundrathur",
      "Pallavaram is the nearest suburban railway station, on the line out of Beach"
    ],
    "intro": [
      "The clinic has been on Kamaraj Street since 2023. Most of the people who walk in live within a few streets of it, which is why the appointment book fills in the evenings and on Saturdays rather than through the working day.",
      "Anakaputhur is a working town rather than a commuter suburb. Plenty of patients arrive straight from a shift at one of the weaving units or from the market, so the evening session runs until nine."
    ],
    "why": "This is the clinic itself, not a branch of anything. All five specialists sit on the same floor, so a case that starts as a filling and turns out to need endodontics or surgery is finished in the same building instead of being sent across the city.",
    "commonTreatments": [
      "root-canal-treatment",
      "tooth-extraction-and-impaction",
      "kids-dentistry"
    ],
    "faqs": [
      {
        "q": "Where exactly on Kamaraj Street is the clinic?",
        "a": "Babu Reddy Avenue, Plot No. 1, Kamaraj Street, Kamatchi Nagar, Guruswamy Nagar, Anakaputhur 600070. If you are on the road and cannot place it, call 80721 43199 and someone will talk you in."
      },
      {
        "q": "Do I need an appointment or can I walk in?",
        "a": "Walk ins are seen when there is a gap, and pain is always given priority. Booking ahead means you are not sitting in reception, and the form on this site opens a WhatsApp message straight to the front desk."
      }
    ],
    "heading": "The dental clinic on Kamaraj Street, Anakaputhur",
    "metaTitle": "Dental Clinic in Anakaputhur, Chennai 600070",
    "metaDescription": "Rudra Dental has been on Kamaraj Street in Anakaputhur since 2023. Five specialists, one floor, evenings until nine. Call +91 80721 43199.",
    "photo": {
      "src": "/areas/anakaputhur.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Anakaputhur bridge on the Chennai Bypass over the Adyar river",
      "caption": "Anakaputhur bridge on the Chennai Bypass over the Adyar river",
      "author": "PlaneMad",
      "licence": "CC BY-SA 2.5",
      "source": "https://commons.wikimedia.org/wiki/File:West_Chennai_aerial_3.jpg"
    }
  },
  {
    "slug": "nanganallur",
    "name": "Nanganallur",
    "pincode": "600061",
    "distance": "about 8 km",
    "travel": "roughly 25 minutes",
    "route": "Come out through the Thillai Ganga Nagar subway onto GST Road, head south past the airport and Tirusulam to Pallavaram, then turn right onto the Pallavaram-Kundrathur road, also signed Pammal Main Road, and follow it through Pammal into Anakaputhur.",
    "landmarks": [
      "The 32 foot Anjaneyar at the Adhivyadhihara Sri Bhaktha Anjaneya temple",
      "Nanganallur Road metro station on the Blue Line",
      "Thillai Ganga Nagar subway onto GST Road",
      "100 Feet Road",
      "Pazhavanthangal railway station, the nearest suburban stop"
    ],
    "transport": [
      "Suburban train from Pazhavanthangal down to Pallavaram, then an auto west through Pammal",
      "MTC buses out to GST Road, then a Pallavaram service south",
      "Metro from Nanganallur Road only helps as far as the airport end, and it is road after that"
    ],
    "intro": [
      "Nanganallur sits west of GST Road behind the airport, laid out in numbered streets running off 100 Feet Road. Rudra Dental is about 8 km away in Anakaputhur. For most of Nanganallur the journey starts at one of the two railway subways, Thillai Ganga Nagar or Pazhavanthangal, because that is how the neighbourhood gets onto GST Road at all.",
      "It is a place where families stay in the same street for decades, and the dental work reflects that. Braces for the school children, checkups for their parents, implants for the grandparents. Three generations of one Nanganallur family coming through the clinic across a single year is not unusual here.",
      "One local thing worth planning around: both of those subways take on water in heavy rain and have to be pumped out, and on those evenings Nanganallur stops going anywhere. Call us if that is the situation. The evening block runs to 9pm, Monday to Saturday, so an appointment missed at six can usually be picked up later the same evening."
    ],
    "why": "The pull from Nanganallur is mostly braces and children's dentistry. Orthodontic treatment runs eighteen months to two years with monthly adjustments, so families want a clinic close enough that a routine tightening does not eat a whole evening. From most Nanganallur streets it is around twenty five minutes.",
    "commonTreatments": [
      "orthodontic-treatment",
      "kids-dentistry",
      "dental-implants"
    ],
    "faqs": [
      {
        "q": "We do not have a car. Can we manage it by train?",
        "a": "Yes. Take the train from Pazhavanthangal down to Pallavaram, which is a few stops, then a share auto west through Pammal. The auto leg is short. Coming back, an auto is easier to find before 8pm than after, so a slightly earlier evening slot suits people doing it this way."
      },
      {
        "q": "Do you see young children?",
        "a": "Yes, there is a paediatric dentist in house. First visits for children are kept short, and we usually put them in the morning block when the clinic is quieter and a nervous child has less waiting to do."
      },
      {
        "q": "My son is nine and his front teeth are crowded. Is it too early to see an orthodontist?",
        "a": "No, that is a sensible age to have it looked at. Sometimes there is a case for starting while the jaw is still growing. Often the answer is to review in a year and let the rest of the permanent teeth come through first. Either way you will be told which of the two it is and why."
      }
    ],
    "heading": "Nanganallur families, Anakaputhur clinic",
    "metaTitle": "Nanganallur families, Anakaputhur clinic",
    "metaDescription": "Out through the Thillai Ganga Nagar subway and south on GST Road: that is how Nanganallur families reach Rudra Dental in Anakaputhur for braces and kids.",
    "photo": {
      "src": "/areas/nanganallur.jpg",
      "width": 1400,
      "height": 900,
      "alt": "A tree-lined residential street in Nanganallur",
      "caption": "A tree-lined residential street in Nanganallur",
      "author": "SnapMeUp",
      "licence": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Streets_in_Nanganallur,Chennai.jpg"
    }
  },
  {
    "slug": "porur",
    "name": "Porur",
    "pincode": "600116",
    "distance": "about 14 km",
    "travel": "roughly 30 to 40 minutes",
    "route": "From Porur junction take Kundrathur Main Road south past Moulivakkam and Gerugambakkam to Kundrathur. There, join the Pallavaram-Kundrathur-Poonamallee Road towards Pammal, which crosses the Adyar just before Anakaputhur. Kamatchi Nagar and Kamaraj Street are a short turn off it.",
    "landmarks": [
      "Porur junction, where Mount-Poonamallee Road meets Arcot Road",
      "Sri Ramachandra Institute of Higher Education and Research",
      "Porur Lake",
      "Commerzone Porur, on Mount-Poonamallee Road",
      "Porur market"
    ],
    "transport": [
      "MTC buses run south from Porur along Kundrathur Main Road; change at Kundrathur for Anakaputhur or Pammal",
      "Share autos work the Kundrathur Main Road stretch through the day",
      "A direct auto or cab from Porur junction is the simplest option for an evening appointment"
    ],
    "intro": [
      "Porur is where Mount-Poonamallee Road and Arcot Road run into one signal, and people here measure a journey by what that junction is doing on the day. The clinic is about 14 km south. The useful part is that Kundrathur Main Road leaves from the same junction and carries you most of the way there.",
      "Five specialists work out of this one building, and the reason that matters tends to show up mid treatment rather than at the start. A root canal turns out to need a post and a crown. An implant needs the bite reassessed before the crown goes on. Here the case moves one room across instead of turning into three appointments at three addresses.",
      "The late slots go quickly with Porur patients, most of them coming off a day at Sri Ramachandra or out of the office blocks near Commerzone on Mount-Poonamallee Road. The other argument for booking late is that traffic towards Kundrathur thins after about 7pm, so a 7:30 drive is often shorter than a 6 o'clock one. We work Monday to Saturday."
    ],
    "why": "Two things bring people here from Porur. One is second opinions on work already quoted somewhere else, usually root canals and implants. The other is complex cases: a patient sent from one clinic to another for the surgical part, who would rather have the whole plan handled by one team in one place.",
    "commonTreatments": [
      "root-canal-treatment",
      "dental-implants",
      "orthodontic-treatment"
    ],
    "faqs": [
      {
        "q": "I have a treatment plan and a quote from a clinic in Porur. Will you go through it?",
        "a": "Yes. Bring the OPG or CBCT if one was taken, and the written plan. Sometimes we read it and tell you it is sound, in which case have the work done near home. A second opinion here is an examination and a conversation, not a commitment to treatment with us."
      },
      {
        "q": "Is the surgical part done there, or would I be sent elsewhere for it?",
        "a": "Done here. Implant placement, grafting where the bone needs it and surgical extractions all happen in the building, and the same team plans the crown that goes on afterwards. Being sent across the city for one stage of a case is usually the thing people are trying to avoid."
      },
      {
        "q": "Can I turn up after work without booking?",
        "a": "You can, and if there is a gap you will be seen, but the specialist chairs are usually booked through the evening. A call in the morning is enough to fix it. The evening block runs 4:30pm to 9pm, Monday to Saturday, and the last appointment is set to finish by 9."
      }
    ],
    "heading": "Coming down from Porur for dental treatment",
    "metaTitle": "Porur to Anakaputhur, 14 km south",
    "metaDescription": "Finishing late at Sri Ramachandra or the Commerzone blocks? Rudra Dental in Anakaputhur books to 9pm and keeps five specialists in one building, 14 km south.",
    "photo": {
      "src": "/areas/porur.jpg",
      "width": 1024,
      "height": 768,
      "alt": "The main road junction at Porur, Chennai",
      "caption": "The main road junction at Porur, Chennai",
      "author": "Ravichandar84",
      "licence": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Porur_Junction.jpg"
    }
  },
  {
    "slug": "iyyappanthangal",
    "name": "Iyyappanthangal",
    "pincode": "600056",
    "distance": "about 16 km",
    "travel": "roughly 35 to 45 minutes",
    "route": "From Mount-Poonamallee Road, go to Kumananchavadi and turn south onto the Pallavaram-Kundrathur-Poonamallee Road. It runs through Mangadu and Kundrathur, crosses the Adyar and comes into Anakaputhur, so the Porur junction never comes into it.",
    "landmarks": [
      "Mount-Poonamallee Road, the SH-55 out to Poonamallee",
      "Kumananchavadi, where the Pallavaram-Kundrathur-Poonamallee Road begins",
      "Kattupakkam, about a kilometre along the road",
      "Iyyappanthangal bus depot"
    ],
    "transport": [
      "Buses along Mount-Poonamallee Road drop you at Kumananchavadi, where services turn south for Mangadu and Kundrathur",
      "The Pallavaram to Poonamallee service works the whole road in both directions and stops at Anakaputhur",
      "An auto or cab straight down through Mangadu takes about 40 minutes"
    ],
    "intro": [
      "Iyyappanthangal is on Mount-Poonamallee Road west of Porur, with Kattupakkam on one side and Kumananchavadi on the other. The name gets spelled three or four different ways depending on who printed the board, which is worth knowing when you are searching for an address here. Most trips south from this stretch mean going east into Porur first. This one does not.",
      "The road that avoids it is the Pallavaram-Kundrathur-Poonamallee Road. It starts at Kumananchavadi, runs through Mangadu and Kundrathur, crosses the Adyar and comes into Anakaputhur. Around 16 km, one road for nearly all of it, 35 to 45 minutes depending on the Kundrathur stretch. Worth knowing whether or not you are coming to a dentist.",
      "A good part of what comes to us from Iyyappanthangal is children and teenagers. First orthodontic assessments, milk teeth that will not come out on their own, and the reviews that follow both. Braces mean returning every four to six weeks for a year and a half or more, so which road you take is not a small point."
    ],
    "why": "Braces and children's dentistry are the two reasons people from Iyyappanthangal make this drive. Both mean repeat visits over a long stretch of time, so what families weigh up is whether the orthodontist is in house and whether appointments actually run to time.",
    "commonTreatments": [
      "root-canal-treatment",
      "tooth-extraction-and-impaction",
      "full-mouth-rehabilitation"
    ],
    "faqs": [
      {
        "q": "Will we see the same orthodontist each time?",
        "a": "Yes. Adjustments are booked with the same orthodontist each time, so the records and the plan stay with one person. Across eighteen months of braces that is the difference families notice most."
      },
      {
        "q": "How often do braces reviews come up?",
        "a": "Every four to six weeks once treatment is underway, and each visit is short. Families from Iyyappanthangal often take the morning block from 9:30, when the appointment is done in twenty minutes and the rest of the day is still intact."
      },
      {
        "q": "Can I bring a child for a first check without committing to anything?",
        "a": "Yes. A first visit is an examination and a conversation about what needs doing and when, if anything at all. Plenty of children who come in at seven or eight need nothing more than a review a year later."
      }
    ],
    "heading": "Iyyappanthangal to Anakaputhur, skipping Porur junction",
    "metaTitle": "Iyyappanthangal dental care, Anakaputhur",
    "metaDescription": "One road leaves Kumananchavadi heading south, skips the Porur junction and ends in Anakaputhur, where Iyyappanthangal families bring braces and children."
  },
  {
    "slug": "madipakkam",
    "name": "Madipakkam",
    "pincode": "600091",
    "distance": "about 11 km",
    "travel": "roughly 30 to 35 minutes",
    "route": "From Madipakkam head to Keelkattalai and take the Pallavaram-Thoraipakkam Radial Road west until it meets GST Road at Pallavaram. Cross over and follow Pammal Main Road through Pammal to Anakaputhur, where Kamatchi Nagar and Kamaraj Street are a short turn off the main road.",
    "landmarks": [
      "Madipakkam Lake",
      "Keelkattalai and the flyover on the radial road",
      "Puzhuthivakkam, also called Ullagaram",
      "Nanganallur, on the northern side"
    ],
    "transport": [
      "MTC buses from Madipakkam to Pallavaram, then buses or autos west through Pammal to Anakaputhur",
      "Suburban trains on the Chennai Beach to Tambaram section stop at Pallavaram, a short auto ride from the clinic, though from Madipakkam you first have to get across to Pazhavanthangal or Guindy",
      "A direct cab from Madipakkam takes about 30 minutes outside peak hours"
    ],
    "intro": [
      "Madipakkam is a dense residential pocket in the south with no railway station of its own, so nearly everything here is done by road. Nanganallur is on one side, Keelkattalai and Puzhuthivakkam on the others, and the lake sits in the middle of it. To reach us you travel west, which is against most of the morning flow.",
      "The way across is Keelkattalai onto the Pallavaram-Thoraipakkam Radial Road, the 200 feet road between GST Road and OMR, then west along it to Pallavaram. The flyover at Keelkattalai took a good deal of the stopping out of that stretch. What is left of the delay is the GST Road crossing at Pallavaram, and the rest of it moves.",
      "Madipakkam has an older resident population alongside the newer flats, and a good part of what comes to us from there is longer standing: teeth lost one at a time over years, dentures that no longer fit, wisdom teeth that were left alone and are now causing trouble."
    ],
    "why": "People from Madipakkam usually arrive with something that has been building for a while rather than a sudden problem. Full mouth work, implants to replace several missing teeth, or an impacted wisdom tooth their regular dentist would rather not remove. That kind of case is why the drive gets made.",
    "commonTreatments": [
      "full-mouth-rehabilitation",
      "dental-implants",
      "tooth-extraction-and-impaction"
    ],
    "faqs": [
      {
        "q": "When is the drive from Madipakkam easiest?",
        "a": "Late morning, or after 7 in the evening. The part that slows is around Pallavaram and GST Road, worst roughly between 8:30 and 10:30 and again from 5:30 to 7. The 11am and 7:30pm appointments tend to suit people coming from your side."
      },
      {
        "q": "How long does full mouth work take from start to finish?",
        "a": "Several months, in planned stages. It begins with an assessment and a records visit, and before anything is started you will know how many appointments there are and roughly what each one involves. That matters when every visit is 11 km each way."
      },
      {
        "q": "Can you take out a wisdom tooth another dentist referred?",
        "a": "Yes. Impacted and partly erupted wisdom teeth are removed here, including cases where the tooth has to be sectioned. Bring the OPG if one has already been taken. Most people are back on normal food within a few days."
      }
    ],
    "heading": "What Madipakkam patients travel west for",
    "metaTitle": "Madipakkam: implants and wisdom teeth",
    "metaDescription": "Teeth lost one at a time, dentures that stopped fitting, a wisdom tooth left too long: what Madipakkam patients bring 11 km west to Rudra Dental, Anakaputhur."
  },
  {
    "slug": "gerugambakkam",
    "name": "Gerugambakkam",
    "pincode": "600128",
    "distance": "about 9 km",
    "travel": "roughly 25 minutes",
    "route": "South on the Kundrathur road from Porur, through Gerugambakkam and past Kovur into Kundrathur. At Kundrathur pick up the Pallavaram road, also called Pammal Main Road, and follow it about 4 km into Anakaputhur. Kamaraj Street is off it in Kamatchi Nagar.",
    "landmarks": [
      "PSBB Millennium School",
      "Little Flower Matriculation School and Polytechnic",
      "Porur junction, 4 km north on the Kundrathur road",
      "Kovur"
    ],
    "transport": [
      "Buses along the Kundrathur road stop through the Gerugambakkam stretch and carry on into Kundrathur. Change there for anything heading down Pammal Main Road towards Pallavaram and get off at Anakaputhur.",
      "Share autos to Kundrathur are easy to find at most hours, and Anakaputhur is about 4 km further along the same road.",
      "Pallavaram is your nearest suburban station at roughly 7 km, and it is also the station that serves Anakaputhur, so a train and one auto works."
    ],
    "intro": [
      "Gerugambakkam sits about 4 km from Porur junction, down the Kundrathur road. Carry on the same way and you get to us. Past Kovur into Kundrathur, then join Pammal Main Road, which is the Pallavaram to Kundrathur road, and Anakaputhur is roughly 4 km along it. Around 9 km end to end, usually half an hour.",
      "Administratively Gerugambakkam is not in Chennai at all. Its village panchayat was annexed to Kundrathur Municipality, and the nearest suburban station is Pallavaram rather than anything closer in. Pallavaram happens to be the station that serves Anakaputhur too, so anyone here without a car is already pointed our way.",
      "Look at what counts as a landmark in Gerugambakkam and it is almost all schools. PSBB Millennium, Little Flower, Velammal over in Kolapakkam. That shows up in who calls us. A lot of the appointments from here start with something a school dental check flagged, or with a parent who has been putting their own molar off since the family moved in."
    ],
    "why": "Gerugambakkam went up fast and it went up for people who commute. The bookings from here cluster at either end of the day, before the run into Manapakkam and Ramapuram or after it, and they are overwhelmingly adult work that has been deferred. A molar filled twice already that has finally split. A crown that came off months ago and got glued back with the wrong thing. Wisdom teeth that have been grumbling since before the move. Almost nobody from Gerugambakkam arrives with a first problem. They arrive with a third one.",
    "commonTreatments": [
      "orthodontic-treatment",
      "kids-dentistry",
      "root-canal-treatment"
    ],
    "faqs": [
      {
        "q": "We moved here last year and a root canal was left half finished at our old clinic. Can you take it over?",
        "a": "Yes, and it is one of the more common reasons people from Gerugambakkam call. Bring whatever films and notes you were given. If you cannot get hold of them we will take our own. The first thing we work out is whether the tooth can simply be completed as it stands or whether it needs retreating from the start, and you will get a straight answer on that before anything is agreed."
      },
      {
        "q": "I leave for Manapakkam at half seven and get back after eight. Is there any slot that works?",
        "a": "The evening session runs to nine, and the last appointments of the day are the ones we keep for people in exactly that position. Coming down the Kundrathur road at half eight is also the easiest run you will get, because everything heading into Porur has cleared by then."
      },
      {
        "q": "Which session is quietest?",
        "a": "Weekday mornings. The 9:30am to 1pm block is lighter than the evening one, and the road in from your side clears well before ten. Saturday evening is the busiest slot we run, so if you want an unhurried appointment for a child, ask for a weekday morning."
      }
    ],
    "heading": "Gerugambakkam to Anakaputhur, straight down the Kundrathur road",
    "metaTitle": "Dentist for Gerugambakkam, Anakaputhur",
    "metaDescription": "Gerugambakkam sits 4 km from Porur junction on the Kundrathur road, and the same road runs on to us in Anakaputhur. Evening chairs until 9pm, Mon to Sat."
  },
  {
    "slug": "tambaram",
    "name": "Tambaram",
    "pincode": "600045",
    "distance": "about 9 km",
    "travel": "roughly 25 minutes, closer to 40 in the evening peak",
    "route": "North on GST Road through Tambaram Sanatorium and Chromepet to the Pallavaram signal, then west onto Pammal Main Road, the Pallavaram to Kundrathur road, and on through Pammal into Anakaputhur. Kamatchi Nagar comes up once you are past Pammal, and Kamaraj Street runs off the main road there.",
    "landmarks": [
      "Tambaram railway station",
      "Tambaram Sanatorium railway station",
      "Madras Christian College, Tambaram",
      "Government Hospital of Thoracic Medicine, Tambaram Sanatorium",
      "Air Force Station Tambaram"
    ],
    "transport": [
      "Suburban trains cover most of it. Pallavaram is three stops up from Tambaram, through Sanatorium and Chromepet, and Pallavaram is the station that serves Anakaputhur as well. Share autos run west from there.",
      "MTC buses north along GST Road to Pallavaram, then anything turning west onto Pammal Main Road through Pammal.",
      "By car it is around 25 minutes on a normal weekday, and the delay is almost entirely the Chromepet stretch of GST Road rather than the last few kilometres."
    ],
    "intro": [
      "Tambaram is Chennai's third railway terminal, after Central and Egmore, and since 2021 it has been a municipal corporation in its own right. Anakaputhur was folded into that same corporation at the time. So when someone from Tambaram asks how far out we are, the accurate answer is that we are inside Tambaram, administratively, about 9 km west of the station on the far side of Pallavaram.",
      "The train does most of the work if you would rather not drive. Pallavaram is three stops up the line through Sanatorium and Chromepet, and Pallavaram is also the station Anakaputhur uses, so it is rail as far as there and one short auto west through Pammal. Driving, it is GST Road to the Pallavaram signal and then west on Pammal Main Road. That last stretch moves fine. It is Chromepet between six and eight that costs you the extra quarter of an hour.",
      "Being a terminal changes who arrives. Trains from further south end here rather than passing through, and a fair share of our Tambaram bookings are made by someone living in Tambaram on behalf of a parent coming up by rail for a few days. If that is the situation, say so on +91 80721 43199 when you book. We would rather hold one longer slot that fits the return train than split the work across visits your parent cannot make."
    ],
    "why": "Two fairly distinct groups. Younger patients from around Tambaram East and the Madras Christian College side who want orthodontic treatment and can realistically commit to monthly reviews for eighteen months or so. And older patients who arrive with several things wrong at once, usually brought in by a son or daughter who lives here: a bridge that has given way, molars missing on both sides, a bite that has drifted over twenty years. The second group is why implant and full mouth cases make up more of the Tambaram list than anything else we do.",
    "commonTreatments": [
      "orthodontic-treatment",
      "dental-implants",
      "full-mouth-rehabilitation"
    ],
    "faqs": [
      {
        "q": "Where do I park?",
        "a": "On the street outside. Kamatchi Nagar is a residential grid off the main road, so there is room for cars and two wheelers without circling for a gap, and you are not paying anyone for the privilege. If you have been putting an appointment off because of what parking near Tambaram railway station is like, that part at least is not an issue here."
      },
      {
        "q": "I am studying in Tambaram and braces need checking every month. Does that fit around term?",
        "a": "It does. Adjustments are short, usually twenty minutes or so, and we can hold the same weekday slot each month so it becomes a fixed thing rather than something you renegotiate every time. Tell us your exam weeks at the start of treatment and we will schedule around them rather than cancelling on you in the middle."
      },
      {
        "q": "My dentist in Tambaram is referring me for a retreatment. What should I bring?",
        "a": "Any films and notes you were given, and if a post or a crown went in, whatever the previous clinic told you about it. If none of that is available we will take our own records and it changes nothing about the treatment. It only saves you one visit if the old ones come with you."
      }
    ],
    "heading": "Dental specialists for Tambaram, Tambaram East and Sanatorium",
    "metaTitle": "Specialist Dentist for Tambaram",
    "metaDescription": "Tambaram is Chennai's third railway terminal, and Pallavaram is three stops up the line from it. We are a short run west of there, in Anakaputhur.",
    "photo": {
      "src": "/areas/tambaram.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Tambaram railway station",
      "caption": "Tambaram railway station",
      "author": "Pinakpani",
      "licence": "CC BY 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Tambaram_railway_station_in_Chennai_city,_Tamil_Nadu_01.jpg"
    }
  },
  {
    "slug": "alandur",
    "name": "Alandur",
    "pincode": "600016",
    "distance": "about 11 km",
    "travel": "roughly 30 minutes",
    "route": "Join GST Road at Kathipara and head south past the airport and Tirusulam to Pallavaram. Turn west at the Pallavaram signal onto Pammal Main Road, the Pallavaram to Kundrathur road, and stay on it through Pammal into Anakaputhur. Once in Anakaputhur, Kamaraj Street is in Kamatchi Nagar, a turning off the main road.",
    "landmarks": [
      "Kathipara junction",
      "Alandur metro station, the Blue and Green line interchange",
      "St Thomas Mount",
      "St Thomas Mount railway station",
      "MKN Road"
    ],
    "transport": [
      "Green Line one stop from Alandur to St Thomas Mount, where the metro and the suburban station share a complex, then a southbound train four stops through Pazhavanthangal, Meenambakkam and Tirusulam to Pallavaram. Pallavaram is the station that serves Anakaputhur.",
      "Blue Line south from Alandur towards the airport, then an auto west off GST Road through Pallavaram and Pammal.",
      "MTC buses south on GST Road from the Kathipara stops to Pallavaram, then west on Pammal Main Road."
    ],
    "intro": [
      "Alandur is where the Blue Line and the Green Line cross, and it is the one station on the network where you can switch between the two corridors and change direction. Handy for almost everywhere except us. Rudra Dental is about 11 km south west, in Anakaputhur, off the Pallavaram to Kundrathur road.",
      "There is still a way to get here without driving, and it is better than most people from Alandur assume. Take the Green Line one stop to St Thomas Mount, which is the end of that line and shares a complex with the suburban station. From there a southbound train runs two stops through Tirusulam to Pallavaram, and Pallavaram is the station Anakaputhur uses. One auto west through Pammal finishes it.",
      "Kathipara is what really decides your appointment time. Four roads meet there, GST Road, Anna Salai, the Inner Ring Road and Mount Poonamallee Road, and when it is backed up an eleven kilometre drive stops behaving like an eleven kilometre drive. Patients from Alandur who have worked this out leave either before ten in the morning or after seven in the evening. Both land inside our sessions, so pick whichever suits and call +91 80721 43199 to hold it."
    ],
    "why": "Alandur is older, settled housing on the airport side of the city, and that produces two kinds of patient. Shift workers who deal with one problem at a time and want a morning slot before a late start. And retired parents living a few streets from grown children, who arrive with everything at once: several teeth already gone, an old bridge that has failed under them, a bite that has quietly collapsed over two decades. The second kind is most of the Alandur list. It is work that needs the whole plan set out at the start, which is why implants and full mouth rehabilitation sit at the top of the treatments below.",
    "commonTreatments": [
      "dental-implants",
      "full-mouth-rehabilitation",
      "tooth-extraction-and-impaction"
    ],
    "faqs": [
      {
        "q": "I fly out the next morning. Can I have the tooth out the day before?",
        "a": "Usually not a good idea. Cabin pressure is unkind to a fresh socket, more so if the extraction opens into the sinus, and if bleeding starts mid flight there is very little anyone can do about it. Two or three days clear is the sensible gap. If your dates are fixed, tell us before we start and we will judge whether it is a straightforward extraction that will settle in time or one worth doing when you are back."
      },
      {
        "q": "I work shifts and mornings are the only time I have. How early do you start?",
        "a": "9:30am, Monday to Saturday. The first hour is the quietest part of the day, so if you want a long appointment with no sitting around, ask for that one. Book it rather than turning up, because the morning session ends at 1pm and there is not much slack in it to absorb a late arrival."
      },
      {
        "q": "What do you actually need before you can tell me whether implants are possible?",
        "a": "A proper radiographic assessment. The decision turns on how much bone is there and where the nerve and the sinus sit, and none of that can be judged by looking in your mouth. If a site needs grafting first, or if one of the planned positions will not work, you should hear it at the assessment rather than partway through treatment. Bring any recent x-rays you already have."
      }
    ],
    "heading": "If you are in Alandur, the metro gets you most of the way here",
    "metaTitle": "Dental specialists for Alandur",
    "metaDescription": "Alandur patients come to us for the long jobs: implants, full mouth work, buried wisdom teeth. Green Line to St Thomas Mount, then two stops to Pallavaram.",
    "photo": {
      "src": "/areas/alandur.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Entrance to Alandur metro station",
      "caption": "Entrance to Alandur metro station",
      "author": "Prateek Karandikar",
      "licence": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Alandur_station_entrance.jpg"
    }
  },
  {
    "slug": "pallavaram",
    "name": "Pallavaram",
    "pincode": "600043",
    "distance": "about 4 km",
    "travel": "roughly 15 minutes",
    "route": "From the Pallavaram junction on GST Road, turn west on to Pammal Main Road. On the highway maps this is the Pallavaram to Kundrathur road, the Pallavaram to Kundrathur to Poonamallee road. Stay on it through Pammal and it runs into Anakaputhur. Kamaraj Street is a short turn off it into Kamatchi Nagar.",
    "landmarks": [
      "Pallavaram railway station",
      "Pallavaram hill, the old charnockite quarry",
      "the Pallavaram grade separator on GST Road",
      "St Thomas Mount cum Pallavaram Cantonment",
      "Chennai International Airport"
    ],
    "transport": [
      "Pallavaram railway station is on the Chennai Beach to Chengalpattu suburban line, and share autos wait outside it for the run west",
      "MTC route 66 runs from Pallavaram to the Amman Kovil stop in Anakaputhur",
      "Buses from Pallavaram towards Kundrathur and Poonamallee all use the Pallavaram to Kundrathur road and pass Anakaputhur"
    ],
    "intro": [
      "Pallavaram is about 4 km east of the clinic and one road covers the whole trip. Pammal Main Road leaves GST Road at the Pallavaram junction, runs west through Pammal and reaches Anakaputhur. It carries on from there to Kundrathur and Poonamallee, but you turn off well before that.",
      "The 4 km take about fifteen minutes on a normal day. The slow part is the first stretch near the junction and the railway station, worst between 8am and 10am and again after 6pm. Past Pammal the road opens up and the rest of it is quick.",
      "Being 4 km away changes what is practical. A Pallavaram patient can come in for a ten minute bite adjustment or a suture check after work and be home inside the hour, so we are happy to book the small follow up visits separately instead of folding them into a longer appointment the way we do for people travelling from further out. If something hurts after a procedure, ring in the morning and we can usually see you that evening."
    ],
    "why": "Retreatment of a root canal that never settled, an implant to close a gap left by an old extraction, and braces started in adult life are the three things Pallavaram patients book most often. All three run over months rather than one sitting, and that is where the short trip earns its keep. A review appointment costs a Pallavaram patient half an hour, not half a day, so nobody skips one.",
    "commonTreatments": [
      "root-canal-treatment",
      "dental-implants",
      "orthodontic-treatment"
    ],
    "faqs": [
      {
        "q": "Should I bring the x-rays my Pallavaram dentist took?",
        "a": "Bring them if you have them, on paper or on your phone. They tell us what the tooth looked like before, which is often the useful part. We will usually still take our own, because an old film shot at a different angle can hide exactly the thing we are looking for."
      },
      {
        "q": "My son finishes school at four. Can he be seen after that?",
        "a": "The evening session runs from 4:30pm to 9pm, so yes. The 4:30pm to 6pm stretch is the quiet half of it. After about seven the waiting room fills with people coming off work and a short appointment can end up costing you an hour."
      },
      {
        "q": "A tooth that was root canal treated years ago is hurting again. Is it fixable?",
        "a": "Often, yes. Retreatment means reopening the tooth, clearing the old filling material out of the canals and sealing them properly, and it takes longer than the original treatment did. We take a fresh x-ray first, and if the tooth is not worth saving we will say so rather than charge you for the attempt."
      }
    ],
    "heading": "Rudra Dental, four kilometres west of Pallavaram",
    "metaTitle": "Four kilometres west of Pallavaram",
    "metaDescription": "Pammal Main Road runs from the Pallavaram GST junction west to our door in Anakaputhur, about 4 km. Root canals, implants and braces by specialists.",
    "photo": {
      "src": "/areas/pallavaram.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Pallavaram railway station platform and station board",
      "caption": "Pallavaram railway station platform and station board",
      "author": "Sameer2905",
      "licence": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Pallavaram_railway_station_(June_2025).jpg"
    }
  },
  {
    "slug": "thiruneermalai",
    "name": "Thiruneermalai",
    "pincode": "",
    "distance": "about 5 km",
    "travel": "roughly 20 minutes",
    "route": "From the temples at the foot of the hill, take Thiruneermalai Main Road north towards Polichalur and Pammal, then turn west on to Pammal Main Road, which runs into Anakaputhur. Kamaraj Street is a short turn off it in Kamatchi Nagar.",
    "landmarks": [
      "Ranganatha Perumal temple on Thiruneermalai hill, one of the 108 Divya Desams",
      "Neervanna Perumal temple at the foot of the hill",
      "the flight of steps up the hill",
      "Thiruneermalai Main Road",
      "The Chennai Bypass, which runs through Thiruneermalai"
    ],
    "transport": [
      "Buses from Thiruneermalai to Pammal or Pallavaram, then any service signed for Kundrathur, which stops at Anakaputhur",
      "Share autos north to Polichalur and Pammal, where the Anakaputhur road begins",
      "By car the Thiruneermalai Main Road side keeps you off GST Road for the whole trip"
    ],
    "intro": [
      "Thiruneermalai sits under its hill about 5 km south of us, and getting here does not involve GST Road at all. Thiruneermalai Main Road runs north towards Polichalur and Pammal, and Pammal Main Road turns west from there into Anakaputhur. Twenty minutes is normal. The roads on this side are narrower than the highway routes but a good deal quieter.",
      "The Chennai Bypass runs through Thiruneermalai and carries on past Pammal and Anakaputhur before it turns north, and the entry and exit ramps on the Thiruneermalai stretch make it the quickest way west. If you already use that side of the road for the airport run, you are pointed the right way for us.",
      "Much of what we do for patients from this side is unhurried work on older mouths. A partial denture that has stopped fitting, a bridge that has given way, four or five teeth lost over as many years. Those cases start with an examination, radiographs and a written plan rather than with treatment, and we would rather you went home from the first visit holding a schedule and a cost than with a tooth half opened."
    ],
    "why": "The cases that reach us from Thiruneermalai have usually waited a while. Several teeth missing, a bridge that failed, a tooth sore for months that was managed with tablets. Work like that needs a surgical plan and a prosthetic plan that agree with each other before anything is touched, and getting that settled properly in one longer visit saves several short ones later.",
    "commonTreatments": [
      "dental-implants",
      "full-mouth-rehabilitation",
      "tooth-extraction-and-impaction"
    ],
    "faqs": [
      {
        "q": "Will I know the cost before I commit to anything?",
        "a": "Yes, at the first visit. The examination, the x-rays and a written estimate happen the same day, so you leave knowing what the work is, what it costs and how many appointments it will take. Patients from Thiruneermalai often bring a son or daughter along to hear the plan too, which is worth doing for the bigger cases."
      },
      {
        "q": "My dentures were made years ago and no longer fit. Do I need implants?",
        "a": "Sometimes a reline is enough and that is a much smaller job. Sometimes the ridge underneath has shrunk so far that no adjustment will hold them, and that is the point where implants to anchor the denture start to make sense. We will tell you which one you are at the first visit and we do not push the bigger option when the smaller one holds."
      },
      {
        "q": "A tooth was taken out years ago and the gap is still there. Is it too late for an implant?",
        "a": "Usually not, but bone thins where a tooth has been missing a long time, so a scan comes before any promises. If there is not enough bone we can often build it up first, which adds months to the plan. Better to know that at the start than halfway through."
      }
    ],
    "heading": "What Thiruneermalai patients come to Anakaputhur for",
    "metaTitle": "Thiruneermalai to Anakaputhur",
    "metaDescription": "From the foot of Thiruneermalai hill it is twenty minutes north to Rudra Dental, Anakaputhur, for implants, loose dentures and difficult extractions.",
    "photo": {
      "src": "/areas/thiruneermalai.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Neervanna Perumal temple gopuram, Thiruneermalai",
      "caption": "Neervanna Perumal temple gopuram, Thiruneermalai",
      "author": "Salemjones",
      "licence": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Neervannaperumal_Temple,_Thiruneermalai,_Chennai,_India.jpg"
    }
  },
  {
    "slug": "perungalathur",
    "name": "Perungalathur",
    "pincode": "600063",
    "distance": "about 13 km",
    "travel": "roughly 35 minutes",
    "route": "Join GST Road at Perungalathur and head north through Irumbuliyur and Tambaram to Chromepet and Pallavaram. Turn west at Pallavaram on to Pammal Main Road and follow it through Pammal into Anakaputhur, where Kamaraj Street runs off it in Kamatchi Nagar.",
    "landmarks": [
      "Perungalathur railway station on GST Road",
      "Perungalathur lake, which the place is named after",
      "Aadhi Karaneeswarar temple",
      "the Irumbuliyur flyover and the old railway bridge under it",
      "Kilambakkam bus terminus, further south on GST Road"
    ],
    "transport": [
      "Suburban trains reach Pallavaram in four stops, via Tambaram, Sanatorium and Chromepet. An auto covers the last stretch west to Anakaputhur.",
      "MTC buses along GST Road drop you at Pallavaram, where the Kundrathur route buses pass through Pammal and stop at Anakaputhur."
    ],
    "intro": [
      "Perungalathur is on GST Road between Vandalur and Tambaram, and we are about 13 km north of it in Anakaputhur. The drive is GST Road as far as Pallavaram and then a turn west on to Pammal Main Road. Thirty five minutes is the usual figure, and it holds unless you leave at the wrong hour.",
      "The wrong hour is decided at Irumbuliyur. The railway bridge there is around sixty years old and too narrow for the traffic it now carries, the flyover over it has been through widening work, and the queue backs up a good way when it is bad. Long distance buses heading for the Kilambakkam terminus cross the same junction. The train sidesteps all of it, which is why four stops to Pallavaram often beats driving.",
      "One thing worth knowing if you do drive: the Chennai Bypass begins at Perungalathur, and its first phase runs past Thiruneermalai, Pammal and Anakaputhur before it turns north for Maduravoyal. Both ends of your trip sit on that same corridor, though most patients still take GST Road because that is the road they know. Either way, tell us you are coming from Perungalathur when you book and we will put you at the start of a session rather than the middle, so arriving late does not cost you the appointment."
    ],
    "why": "Two things bring most Perungalathur patients up the road: children and wisdom teeth. Parents book check ups and fillings in the morning session so the school day survives, and younger adults come in the evening for impacted third molars that have started to push. Neither is a five minute job, and doing it properly in one longer sitting 13 km away tends to work out better than two shorter attempts nearer home.",
    "commonTreatments": [
      "root-canal-treatment",
      "kids-dentistry",
      "tooth-extraction-and-impaction"
    ],
    "faqs": [
      {
        "q": "Do you see children?",
        "a": "Yes, kids dentistry is one of the departments here. Bring a child as soon as there is something to look at rather than waiting for a toothache, because a small cavity in a milk tooth is a filling and a neglected one turns into a much longer appointment. Perungalathur parents mostly take the Saturday morning session."
      },
      {
        "q": "My wisdom tooth was turned down elsewhere because it is impacted. Do you take those?",
        "a": "Yes, impacted third molars are routine here. You will need an OPG x-ray first so we can see where the roots sit in relation to the nerve. Most are done under local anaesthetic in a single appointment, and if yours looks like one of the harder ones we will tell you that before you book, not on the day."
      },
      {
        "q": "Can the whole family be seen on one trip?",
        "a": "That is what most Perungalathur families ask for and it is usually possible. Say how many of you are coming and roughly what each person needs, and we will block the time in one run instead of handing you four separate appointments spread over four Saturdays."
      }
    ],
    "heading": "Getting from Perungalathur to Rudra Dental in Anakaputhur",
    "metaTitle": "Perungalathur dental specialists",
    "metaDescription": "The Irumbuliyur queue decides the drive from Perungalathur to Rudra Dental in Anakaputhur, 13 km north. Wisdom teeth, kids dentistry, Saturday mornings.",
    "photo": {
      "src": "/areas/perungalathur.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Perungalathur railway station platform and nameboard",
      "caption": "Perungalathur railway station platform and nameboard",
      "author": "Gowtham Sampath",
      "licence": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Perungalathur_railway_station.jpg"
    }
  },
  {
    "slug": "mudichur",
    "name": "Mudichur",
    "pincode": "600048",
    "distance": "about 15 km",
    "travel": "roughly 40 minutes",
    "route": "Take the Tambaram to Mudichur road east through West Tambaram to GST Road at Tambaram, then north past Sanatorium and Chromepet to Pallavaram. Turn west on to Pammal Main Road and follow it through Pammal into Anakaputhur.",
    "landmarks": [
      "the Vandalur to Oragadam road, where the Mudichur road ends",
      "Varadharajapuram, west along the same road",
      "the Varadharajapuram toll plaza on the Outer Ring Road",
      "Mannivakkam",
      "Tambaram railway station, east along the Mudichur road"
    ],
    "transport": [
      "MTC buses run along the Mudichur road into Tambaram, where you change to a Kundrathur route bus that stops at Anakaputhur.",
      "Tambaram is the nearest suburban station. From there it is three stops to Pallavaram, then a short auto ride west."
    ],
    "intro": [
      "Mudichur is at the western end of the Tambaram to Mudichur road, out where it meets the Vandalur to Oragadam road. We are about 15 km northeast of that, on Kamaraj Street in Anakaputhur, and the trip means heading east into Tambaram first, then north on GST Road through Chromepet to Pallavaram before turning west.",
      "That is a real distance and we would rather say so than dress it up. Most Mudichur patients come for treatment that runs over several sittings, so the number that matters is not the 15 km but how many times you have to do it. We build those plans backwards from the visit count and tell you the number before you start.",
      "The other thing we plan around out here is water. Mudichur floods, the road through it has gone under more than once, and residents have been living with that since the 2015 floods. If you have a course of treatment running with us between October and December, message the clinic rather than setting out on a bad morning and we will move the appointment without any fuss. Nothing in an implant or an orthodontic schedule is timed so tightly that a week costs you anything."
    ],
    "why": "Implants and full mouth cases are what bring Mudichur patients this far. Those treatments stand or fall on the plan: where the implants go, what the finished bite will look like, what happens to the teeth that are staying. Having that decided once, by the people who will actually do the work, is worth more than the drive, and it is why these cases usually need fewer trips than patients expect when they first ring.",
    "commonTreatments": [
      "dental-implants",
      "full-mouth-rehabilitation",
      "orthodontic-treatment"
    ],
    "faqs": [
      {
        "q": "Is 15 km too far for dental treatment?",
        "a": "For a check up or a cleaning, yes, and we will tell you on the phone to find something closer to home. For implants, full mouth work or orthodontics the treatment runs over months and the quality of the plan matters more than the drive. That is what most Mudichur patients come for."
      },
      {
        "q": "Can you reduce the number of visits?",
        "a": "Usually. Say when you ring that you are coming from Mudichur and we will combine the scan, the consultation and the treatment planning into one longer appointment instead of three short ones. It makes for a slower first visit and a much shorter list afterwards."
      },
      {
        "q": "If I get braces, how often will I actually have to come?",
        "a": "Once the appliance is on, adjustments run at roughly four to six week intervals and each one is short. For patients coming from Mudichur we try to fix those at the start of the evening session so the drive home is not in the worst of it. The closer spaced visits are at the beginning, for records, planning and fitting."
      }
    ],
    "heading": "Planning treatment around the trip from Mudichur",
    "metaTitle": "Mudichur: implants and full mouth work",
    "metaDescription": "Mudichur patients come to us for implant and full mouth treatment that runs over months. Rudra Dental, Anakaputhur, plans it into fewer 15 km trips.",
    "photo": {
      "src": "/areas/mudichur.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Main road through Mudichur, near Tambaram",
      "caption": "Main road through Mudichur, near Tambaram",
      "author": "Dineshyaz2",
      "licence": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Chennai_mudichur_Tambaram.jpg"
    }
  },
  {
    "slug": "pammal",
    "name": "Pammal",
    "pincode": "600075",
    "distance": "about 2 km",
    "travel": "under 10 minutes, around 20 minutes on foot from the Anakaputhur end of Pammal",
    "route": "Pammal Main Road, which is State Highway 113A, runs straight from Pammal into Anakaputhur. Follow it west from the Pammal bus terminus as far as the Anakaputhur stop, then turn into Kamatchi Nagar for Kamaraj Street.",
    "landmarks": [
      "Pammal bus terminus at Shankar Nagar",
      "Pammal Main Road, the Pallavaram to Poonamallee state highway",
      "Meenakshi Krishnan Polytechnic College",
      "Chennai International Airport"
    ],
    "transport": [
      "Any bus on the Pallavaram to Kundrathur stretch passes through both Pammal and Anakaputhur",
      "Share autos work Pammal Main Road all day and cover the distance in a few minutes",
      "From the western edge of Pammal it is a walkable distance along the main road in the evening"
    ],
    "intro": [
      "Pammal is our nearest neighbour. Anakaputhur begins where Pammal ends, and the two share the same road, the same bus routes and the same market traffic. From most parts of Pammal the clinic is about 2 km, which is a short auto ride or a walk if you are near the Anakaputhur end.",
      "Because it is this close, Pammal patients tend to be the ones we see most often for treatment that needs several short visits. Braces adjustments, a child's checkup, a denture fitting. There is no planning involved in coming back, so treatment does not get postponed the way it does for people travelling further.",
      "Being this close also changes how we plan the work itself. A long sitting can be split into two short ones, which suits a nervous patient or a small child far better than ninety minutes in the chair, and it costs a Pammal patient nothing but a few more minutes on the road. A temporary filling that comes loose gets looked at the same day rather than nursed through to the weekend."
    ],
    "why": "Pammal families use us as their regular dental clinic rather than for a one off procedure. Children's checkups, a tooth that needs taking out, a root canal spread over two sittings. The short distance means parents can bring a child in after school and still be home for dinner.",
    "commonTreatments": [
      "kids-dentistry",
      "root-canal-treatment",
      "tooth-extraction-and-impaction"
    ],
    "faqs": [
      {
        "q": "Can I walk from Pammal?",
        "a": "From the Anakaputhur end, yes. It is the main road the whole way, with traffic beside you and very little shade, so people who walk it tend to do it in the evening rather than the middle of the day. From the far side of Pammal an auto is the sensible choice."
      },
      {
        "q": "Do you treat young children?",
        "a": "Yes, a paediatric dentist sees children here. Pammal parents mostly take the 4:30pm to 6pm slots, which land after school and are quieter than the late evening."
      },
      {
        "q": "Something is wrong the evening after an extraction. What do I do?",
        "a": "Call +91 80721 43199 and describe what you are seeing. Most of it gets settled on the phone. If it does need looking at, living 2 km away means you can be seen at the start of the next session instead of waiting out a weekend with it."
      }
    ],
    "heading": "Specialist dental care for Pammal, 2 km along Pammal Main Road",
    "metaTitle": "Dentist for Pammal, 2 km away",
    "metaDescription": "Close enough to walk from the Anakaputhur end of Pammal. Root canals, kids dentistry and extractions at Rudra Dental, 2 km west along Pammal Main Road.",
    "photo": {
      "src": "/areas/pammal.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Aerial view of Pammal, showing the temple tank and surrounding streets",
      "caption": "Aerial view of Pammal, showing the temple tank and surrounding streets",
      "author": "Oleg Yunakov",
      "licence": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Pammal,_Chennai,_Tamil_Nadu,_India_-_08.jpg"
    }
  },
  {
    "slug": "chromepet",
    "name": "Chromepet",
    "pincode": "600044",
    "distance": "about 6 km",
    "travel": "roughly 20 to 25 minutes, longer in the evening peak",
    "route": "Head north on GST Road from Chromepet to the Pallavaram junction, then turn west on to Pammal Main Road and follow it through Pammal into Anakaputhur. Drivers who want to keep off the GST Road stretch cut west through Nemilichery and Polichalur instead.",
    "landmarks": [
      "Chromepet railway station",
      "Madras Institute of Technology campus",
      "the MIT flyover on GST Road",
      "Sree Balaji Medical College and Hospital",
      "the GST Road shopping stretch"
    ],
    "transport": [
      "Chromepet to Pallavaram is one stop on the suburban line, then a share auto or bus west along Pammal Main Road",
      "Buses along GST Road to Pallavaram, then anything heading towards Kundrathur",
      "By own vehicle it is one change of road, at the Pallavaram junction"
    ],
    "intro": [
      "Chromepet is about 6 km from the clinic, and the drive is essentially GST Road north to Pallavaram, then west on Pammal Main Road. Reckon on twenty to twenty five minutes. The GST Road stretch between the MIT flyover and Pallavaram is the slow part, particularly between 6pm and 8pm.",
      "Chromepet has no shortage of dental clinics along GST Road. What brings people out to Anakaputhur is usually a specific specialist: an orthodontist for braces or aligners, or someone to take on a root canal in a molar that a general practice has struggled with.",
      "The student population here, from MIT and the colleges around it, is a large part of what we see from Chromepet. Braces started in the first year of a course and finished before the final year is a common pattern, with adjustment visits fitted around class timings."
    ],
    "why": "Chromepet patients tend to be younger: college students and people in their twenties and thirties working along GST Road. Orthodontics is the main reason they make the trip, followed by laser treatment for gum problems. Both need repeat visits, so the slot running to 9pm matters more than the distance.",
    "commonTreatments": [
      "orthodontic-treatment",
      "laser-dentistry",
      "root-canal-treatment"
    ],
    "faqs": [
      {
        "q": "When is GST Road at its worst for this trip?",
        "a": "Between six and eight in the evening, on the stretch running up to Pallavaram. Leave before six or after eight and the same drive is a noticeably easier one. If a 6:30pm start is all you can manage, say so when you book and we will hold the slot rather than give it away."
      },
      {
        "q": "Can I come by train?",
        "a": "Chromepet to Pallavaram is one stop on the suburban line. From Pallavaram station take a share auto or a Kundrathur bound bus for the last stretch west, which runs about fifteen minutes depending on the junction."
      },
      {
        "q": "I am a hostel student here. Can I be treated without a parent coming along?",
        "a": "If you are eighteen or over, yes. We write the plan and the cost down before anything is started, so you can send it home and talk it over first. Under eighteen we need a parent or guardian with you for the treatment itself."
      }
    ],
    "heading": "Chromepet to Anakaputhur: 6 km west for specialist dentistry",
    "metaTitle": "Braces and root canals for Chromepet",
    "metaDescription": "MIT students and GST Road workers make the 6 km run west to Anakaputhur for braces, aligners and molar root canals. Evening slots run to 9pm, Mon to Sat.",
    "photo": {
      "src": "/areas/chromepet.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Chromepet railway station platform and name board",
      "caption": "Chromepet railway station platform and name board",
      "author": "Sameer2905",
      "licence": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Chromepet_railway_station_(June_2025).jpg"
    }
  },
  {
    "slug": "kundrathur",
    "name": "Kundrathur",
    "pincode": "600069",
    "distance": "about 5 km",
    "travel": "roughly 15 minutes",
    "route": "Come down Kundrathur Main Road from the bus depot side, heading towards Pammal. The road runs through Andakuppam and straight into Anakaputhur, and Kamaraj Street is a short turn off it in Kamatchi Nagar.",
    "landmarks": [
      "Kundrathur Murugan Temple on the hill",
      "Kundrathur Nageswarar Temple",
      "Thiruvooraga Perumal Temple",
      "Kundrathur bus depot"
    ],
    "transport": [
      "MTC buses on the Pallavaram to Kundrathur route use this road and stop at Anakaputhur, so there is no change to make.",
      "Share autos work the same stretch between the Kundrathur bus depot and Anakaputhur through the day.",
      "Pallavaram is the nearest suburban railway station, a short auto ride on from the clinic."
    ],
    "intro": [
      "Kundrathur sits at the top end of the same road the clinic sits on. Kundrathur Main Road runs from the bus depot down through Andakuppam and into Anakaputhur, and the drive covers about 5 km without a single major junction to cross. For most Kundrathur addresses that is a fifteen minute run, less early in the morning.",
      "The bus you would take towards Tambaram or Poonamallee for a specialist puts you across traffic either way. This one does not. The road you get on at Kundrathur is the road you get off at, and it shows in the appointment book: Kundrathur names sit at the start of the morning session and the end of the evening one, because people here can leave home ten minutes before their slot.",
      "Festival days at the Murugan temple are worth planning around. When the hill draws crowds the roads on that side fill from early morning and stay busy, and getting an auto out of the temple streets takes longer than the drive itself. If you live on that side, an afternoon appointment survives those days better than a morning one."
    ],
    "why": "Kundrathur is the closest of the western suburbs to us, and it shows in who walks in. Families who have been coming here for years, younger patients arriving with wisdom tooth pain, and older ones who would rather not sit in Poonamallee traffic for a root canal review.",
    "commonTreatments": [
      "root-canal-treatment",
      "tooth-extraction-and-impaction",
      "orthodontic-treatment"
    ],
    "faqs": [
      {
        "q": "My wisdom tooth flares up every few months. Does it have to come out?",
        "a": "Not always. If it has come through straight and you can get a brush behind it, it can be watched rather than removed. If it is impacted and the gum keeps getting infected, taking it out usually ends the cycle. An X-ray at the first visit tells you which of the two you are dealing with."
      },
      {
        "q": "How late can I book if I am coming by bus?",
        "a": "Buses on this road run into the evening but thin out after eight, so we put bus travellers earlier in the evening session rather than at the tail end of it. If you are driving or coming by share auto, the last appointment of the day is no trouble."
      },
      {
        "q": "Do you take walk-ins from Kundrathur?",
        "a": "We do, though a call to +91 80721 43199 first saves you a wasted run. Not every specialist is in at every session, so if it is the orthodontist or an implant consultation you want, check before you set out."
      }
    ],
    "heading": "Kundrathur's dental specialists, straight down the Pallavaram road",
    "metaTitle": "Dental specialists for Kundrathur",
    "metaDescription": "One road the whole way from Kundrathur, with no junction to cross and no bus change. Root canals, wisdom teeth and braces reviews, about 15 minutes south.",
    "photo": {
      "src": "/areas/kundrathur.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Kandhazheeswarar temple entrance and gopuram, Kundrathur",
      "caption": "Kandhazheeswarar temple entrance and gopuram, Kundrathur",
      "author": "Nprathap4u",
      "licence": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Kandhazheeswarar_temple-_Kundrathur_-_Entrance.JPG"
    }
  },
  {
    "slug": "mangadu",
    "name": "Mangadu",
    "pincode": "600122",
    "distance": "about 10 km",
    "travel": "roughly 25 to 30 minutes",
    "route": "The Poonamallee to Pallavaram road runs through Mangadu and takes you the whole way. Come out of the temple streets on to it, head south through Kundrathur and Andakuppam into Anakaputhur, then turn off in Kamatchi Nagar for Kamaraj Street.",
    "landmarks": [
      "Kamakshi Amman Temple",
      "Velleeswarar Temple",
      "Vaikunta Perumal Temple",
      "Mangadu bus stop"
    ],
    "transport": [
      "Buses running from Mangadu towards Pallavaram stay on this road and stop at Anakaputhur, so it is a single bus with no change.",
      "If your bus terminates at Kundrathur, share autos cover the last stretch to Anakaputhur along the same road."
    ],
    "intro": [
      "Mangadu and Anakaputhur sit on the same road. State Highway 113A comes down from the Poonamallee end through Mangadu and Kundrathur and carries on into Anakaputhur, so the trip is about 10 km with Kundrathur as the halfway mark. Twenty five to thirty minutes, depending on how Kundrathur town is moving.",
      "The alternative for most Mangadu families is Poonamallee or Porur. Both mean joining the highway traffic or the Porur junction, and neither is quick at six in the evening. The run south stays on one road and touches neither of them.",
      "Fridays are the day to avoid if you have a choice. The Kamakshi Amman temple draws steady crowds on Fridays and right through Aadi, and the streets around it get tight. On those days a morning appointment is easier to keep than an evening one."
    ],
    "why": "Mangadu sends us a good number of older patients, often ones who have lived with a broken or missing tooth for a couple of years. Implants and full mouth work come up more here than in the closer areas, partly because people make one longer trip and want the whole plan settled in a single sitting.",
    "commonTreatments": [
      "dental-implants",
      "full-mouth-rehabilitation",
      "root-canal-treatment"
    ],
    "faqs": [
      {
        "q": "My mother is diabetic and has lost three teeth. Can she still have implants?",
        "a": "Often yes, if the sugar is under control and the gums are healthy. We check both before anything is planned, and if the numbers are not where they need to be we will say so and wait rather than place an implant that is likely to fail. A bridge or a denture stays on the table as an alternative."
      },
      {
        "q": "I can only get down here once a month. Does implant treatment still work?",
        "a": "It does. The healing between stages is counted in months rather than days, so a monthly visit fits the treatment instead of fighting it. We will put the dates on paper at the start so you know what you are committing to before you begin."
      },
      {
        "q": "Can four of us come together on one trip?",
        "a": "Tell us when you call and we will block consecutive slots for the family rather than scatter them across the week. It is the usual arrangement for people coming from this side, and it holds together better in the morning session than the evening one."
      }
    ],
    "heading": "Implants and full mouth work for Mangadu patients",
    "metaTitle": "Dental implants for Mangadu",
    "metaDescription": "Teeth missing for a year or more are most of what we see from Mangadu. Implant and full mouth planning settled in one sitting, 10 km south on the same road.",
    "photo": {
      "src": "/areas/mangadu.jpg",
      "width": 1280,
      "height": 900,
      "alt": "Mangadu Kamakshi Amman temple gopuram",
      "caption": "Mangadu Kamakshi Amman temple gopuram",
      "author": "Rasnaboy",
      "licence": "CC0",
      "source": "https://commons.wikimedia.org/wiki/File:MangaduEntranceLandscape.jpg"
    }
  },
  {
    "slug": "kolapakkam",
    "name": "Kolapakkam",
    "pincode": "600122",
    "distance": "about 11 km",
    "travel": "roughly 30 minutes",
    "route": "Take the Kundrathur road south through Gerugambakkam and Kovur into Kundrathur, then stay on the Pallavaram road for the last stretch. Anakaputhur comes up about 5 km on, and Kamaraj Street is a short turn off the main road in Kamatchi Nagar.",
    "landmarks": [
      "Agatheeswarar Temple on Sivan Kovil Street",
      "Lalaji Memorial Omega International School",
      "Velammal Bodhi Campus",
      "Pon Vidyashram"
    ],
    "transport": [
      "Buses along the Kundrathur road get you to Kundrathur, where you change to anything heading towards Pallavaram and get down at Anakaputhur.",
      "Share autos between Kolapakkam and Kundrathur are frequent, and the second leg to Anakaputhur is a short one."
    ],
    "intro": [
      "Kolapakkam sits on the road between Porur and Kundrathur, with Gerugambakkam just below it. Reaching us means going south rather than north: down through Kovur into Kundrathur, then on to the Pallavaram road for the last stretch into Anakaputhur. About 9 km in all, and it keeps you clear of the Porur junction.",
      "That last part matters more than the distance does. The default for anything medical in Kolapakkam is Porur, which means the junction and the Mount Poonamallee Road traffic behind it. Coming to Anakaputhur is a longer line on the map and often a shorter drive in practice, particularly after five.",
      "Kolapakkam has turned into a school area. Lalaji Memorial Omega International, Velammal Bodhi Campus and Pon Vidyashram all sit in the same pocket, and a fair share of our Kolapakkam appointments are children brought in straight after school with the uniform still on."
    ],
    "why": "Most of what comes to us from Kolapakkam is family dentistry. Parents bring a child with a cavity or a chipped front tooth, then book themselves in the same week. Braces consultations for eleven and twelve year olds are common here too, usually after a school dental check has flagged something.",
    "commonTreatments": [
      "kids-dentistry",
      "orthodontic-treatment",
      "root-canal-treatment"
    ],
    "faqs": [
      {
        "q": "Can you see a child after school hours?",
        "a": "The evening session opens at 4:30pm and runs to 9pm, which covers most school pickup times from Kolapakkam. The 5pm and 5:30pm slots go first, so call a day or two ahead on +91 80721 43199 if you want one of those."
      },
      {
        "q": "Is it worth filling a milk tooth that is going to fall out anyway?",
        "a": "Usually yes. A decayed milk tooth hurts, and if it is lost too early the tooth behind it drifts forward and the permanent one comes through crooked, which is a longer job to fix later. If it is genuinely close to falling out on its own, we will tell you to leave it alone."
      },
      {
        "q": "At what age should braces be looked at?",
        "a": "Around eleven or twelve for most children, once the permanent teeth are mostly through. Sometimes earlier if there is crowding or a crossbite. The orthodontist will tell you if it is worth waiting, and waiting is often the right answer."
      }
    ],
    "heading": "A family dental clinic Kolapakkam reaches without Porur",
    "metaTitle": "Kolapakkam family dentist",
    "metaDescription": "School finishes and our evening session opens at 4:30pm. Kolapakkam parents drive south through Kovur, away from Porur, for kids dentistry and braces."
  },
  {
    "slug": "peerkankaranai",
    "name": "Peerkankaranai",
    "pincode": "600063",
    "distance": "about 12 km",
    "travel": "roughly 30 to 35 minutes",
    "route": "Come out of Peerkankaranai to GST Road at Perungalathur, or go north on the Mudichur road to Tambaram. Either way you then follow GST Road north through Tambaram Sanatorium and Chromepet to Pallavaram, turn west onto Pallavaram-Kundrathur Road, and carry on through Pammal into Anakaputhur.",
    "landmarks": [
      "Peerkankaranai Lake",
      "Peerkankaranai police station",
      "The Peerkankaranai bus stop on the Tambaram to Mudichur road",
      "Perungalathur railway station, on GST Road to the southwest"
    ],
    "transport": [
      "Share autos run along the Mudichur road to Tambaram, where buses on the Kundrathur route stop at Anakaputhur.",
      "From Perungalathur station it is four stops up the line towards the city to Pallavaram, through Tambaram, Tambaram Sanatorium and Chromepet, and an auto covers the last stretch west."
    ],
    "intro": [
      "Peerkankaranai sits between Perungalathur and Mudichur, off the Tambaram to Mudichur road. It was a town panchayat of its own until 2021, when it was merged into Tambaram Corporation. Rudra Dental is about 12 km north of here, on Kamaraj Street in Anakaputhur, and the usual run is out to GST Road first and then up through Tambaram and Chromepet.",
      "There is no station in Peerkankaranai itself. Perungalathur is the nearest, southwest of the neighbourhood on GST Road, and Tambaram is the other choice, with far more services and the bus terminus beside it. If you are having anything done under local anaesthetic, decide before you leave which of the two you are coming back through rather than working it out afterwards with a numb jaw.",
      "The lake is the fixed point everyone here navigates by, and it is also the reason the drains struggle. It was over 160 acres once and decades of encroachment have cut it to about half of that, while the restoration scheme the PWD announced in 2018 has stayed on paper. The practical result is that the interior roads here go under along with Perungalathur, Irumbuliyur and Mudichur when the rain is heavy. If your road is flooded on the morning of your appointment, ring us and we will move it rather than have you attempt the drive."
    ],
    "why": "Peerkankaranai patients usually arrive with something that has been looked at once already. A wisdom tooth that is impacted rather than simply crowded, a tooth that still aches months after a root canal, gums that bleed every time you brush. Those are the cases where the equipment and the person using it decide the outcome, and that is what brings people the twelve kilometres north.",
    "commonTreatments": [
      "tooth-extraction-and-impaction",
      "root-canal-treatment",
      "laser-dentistry"
    ],
    "faqs": [
      {
        "q": "I am having a wisdom tooth taken out. Can I get myself home to Peerkankaranai afterwards?",
        "a": "Bring someone with you if you can. It is not the procedure that makes the journey awkward, it is the gauze, the numbness and a share auto. If you have to come alone, take a morning slot rather than an evening one so you are not travelling back in the dark with a fresh socket."
      },
      {
        "q": "I work in Tambaram. Is it easier to come from there than from home?",
        "a": "Yes, and it saves you the run out from Peerkankaranai first, because Tambaram is already on the way here. Our evening block opens at 4:30pm, so a five o'clock appointment suits most people who finish at five."
      },
      {
        "q": "How far ahead should I book?",
        "a": "A few days is usually enough for a consultation. Saturdays go first, so if the weekend is the only time you can travel, ring early in the week on +91 80721 43199. For a longer appointment such as an impaction or a root canal we would rather give you a fixed time than have you drive twelve kilometres and sit waiting."
      }
    ],
    "heading": "Coming to Rudra Dental from Peerkankaranai",
    "metaTitle": "Dentist for Peerkankaranai",
    "metaDescription": "Peerkankaranai has no station of its own, so most patients drive or take a share auto. Rudra Dental is 12 km north in Anakaputhur, open Monday to Saturday.",
    "photo": {
      "src": "/areas/peerkankaranai.jpg",
      "width": 1200,
      "height": 900,
      "alt": "Government Higher Secondary School, Peerkankaranai",
      "caption": "Government Higher Secondary School, Peerkankaranai",
      "author": "Giri",
      "licence": "CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Govt_School_PKR.jpg"
    }
  },
  {
    "slug": "meenambakkam",
    "name": "Meenambakkam",
    "pincode": "600027",
    "distance": "about 6 km",
    "travel": "roughly 20 minutes",
    "route": "From GST Road, drive south past Tirusulam to the Pallavaram junction, then turn right onto Pallavaram-Kundrathur Road. It runs west through Pammal into Anakaputhur, and Kamaraj Street is off it in Kamatchi Nagar.",
    "landmarks": [
      "Chennai International Airport",
      "The airport cargo terminal on GST Road",
      "Meenambakkam railway station",
      "Meenambakkam metro station on the Blue Line",
      "Trident hotel on GST Road"
    ],
    "transport": [
      "Suburban train south from Meenambakkam to Pallavaram, two stops down the Chennai Beach to Chengalpattu line through Tirusulam, then a share auto west through Pammal.",
      "MTC buses south along GST Road to Pallavaram, where autos run into Anakaputhur through Pammal."
    ],
    "intro": [
      "Meenambakkam runs along GST Road with the airport on the western side and the cargo terminal facing the railway station across the road. Rudra Dental is about 6 km away in Anakaputhur, south to Pallavaram and then west through Pammal. Outside the peak hours that is a twenty minute drive.",
      "Two stations here share the name and they take you in opposite directions. The metro station is on the Blue Line, which runs north into the city and towards the terminals, and it is no help at all for reaching Anakaputhur. The suburban station on the Chennai Beach to Chengalpattu line is the one you want, two stops the other way through Tirusulam to Pallavaram, with a share auto west from there.",
      "Meenambakkam is not only the airport. The Airports Authority of India regional office and the DGQA complex are here as well, so the neighbourhood keeps office hours and shift hours side by side. Our day is split the same way, 9:30am to 1pm and 4:30pm to 9pm, Monday to Saturday, which is why an appointment before a morning shift and one after a late one are both possible from here."
    ],
    "why": "People from Meenambakkam mostly come to us for work that needs more than one appointment. A root canal and the crown that follows it, an extraction and the implant months later, a case that has to be reviewed twice before anyone commits to it. Six kilometres each way is a distance you can repeat without resenting it. A trip north into Guindy or the city for every single visit is not.",
    "commonTreatments": [
      "root-canal-treatment",
      "tooth-extraction-and-impaction",
      "dental-implants"
    ],
    "faqs": [
      {
        "q": "I fly out in two days and a tooth has started hurting. What can you do before then?",
        "a": "Come in as soon as you can. The first job is to work out whether it is an infection or a cracked filling, settle the pain and get you fit to travel. A tooth with pressure building inside it is worse in the air than on the ground. Where the permanent work needs weeks, we do the part that has to happen now and finish it when you are back."
      },
      {
        "q": "A crown came off and I am on duty until Saturday. Can it wait?",
        "a": "Keep the crown somewhere safe and do not try to stick it back with anything bought over a counter. If the tooth underneath is comfortable, a few days is usually fine. If the edge is sharp or catching your tongue, come sooner, because a broken margin does more damage the longer it is left."
      },
      {
        "q": "I finish an evening shift at eight. Is it worth coming in that late?",
        "a": "Yes. The clinic runs to 9pm Monday to Saturday and the last appointments are given out before that. GST Road is clear by then, so the drive down is quicker than it is at six. Ring +91 80721 43199 the same afternoon and we will tell you what is still free."
      }
    ],
    "heading": "Dental treatment for Meenambakkam, six kilometres down GST Road",
    "metaTitle": "Meenambakkam dental clinic, 6 km down GST Road",
    "metaDescription": "Airport cargo shifts and office hours both fit our two consulting blocks. Rudra Dental is 6 km from Meenambakkam, south on GST Road then west at Pallavaram.",
    "photo": {
      "src": "/areas/meenambakkam.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Meenambakkam railway station name board",
      "caption": "Meenambakkam railway station name board",
      "author": "Gowtham Sampath",
      "licence": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Meenambakkam_Railway_Station.jpg"
    }
  },
  {
    "slug": "adambakkam",
    "name": "Adambakkam",
    "pincode": "600088",
    "distance": "about 10 km",
    "travel": "roughly 30 minutes",
    "route": "West out of Adambakkam through Nanganallur, then under the railway by the Thillai Ganga Nagar subway to join GST Road. South from there to Pallavaram, then right onto Pallavaram-Kundrathur Road and through Pammal into Anakaputhur.",
    "landmarks": [
      "Adambakkam Lake at Jeevan Nagar",
      "City Link Road",
      "The MTC bus depot at NGO Colony on City Link Road",
      "Medavakkam Main Road, which runs from St Thomas Mount station to the Inner Ring Road",
      "Jawaharlal Nehru Road, the Inner Ring Road"
    ],
    "transport": [
      "Medavakkam Main Road runs from Adambakkam straight to St Thomas Mount station, which is the simplest way to reach the trains without a car.",
      "Suburban train from St Thomas Mount down the Chennai Beach to Chengalpattu line to Pallavaram, then a share auto west through Pammal.",
      "An auto the whole way, about half an hour through Nanganallur and down GST Road."
    ],
    "intro": [
      "Adambakkam sits in the pocket ringed by Alandur, Nanganallur, Madipakkam, Velachery and Guindy, with the lake at Jeevan Nagar on one side and City Link Road running through the middle. Rudra Dental is about 10 km southwest in Anakaputhur, out through Nanganallur and then down GST Road to Pallavaram.",
      "Getting west out of here means going under the railway, and there are two ways to do it, the Palavanthangal subway or the one at Thillai Ganga Nagar. Both are fine in dry weather and both take on water quickly in a heavy downpour. In the monsoon, leave earlier than you think you need to, or ring first and we will tell you whether people have been getting through that afternoon.",
      "One thing Adambakkam has that most of the places our patients come from do not is its own MTC depot, at NGO Colony on City Link Road. Buses start their runs here rather than arriving already full, which makes an early appointment easier to keep from Adambakkam than from further along the same routes. Our morning block opens at 9:30am and it is the quieter half of the day."
    ],
    "why": "What brings people out from Adambakkam is usually unfinished work. A root canal that never got its crown, gum treatment that was mentioned once and never booked, braces that were put off at nineteen and are still on the list at thirty four. Ten kilometres is close enough to finish something properly rather than keep restarting it somewhere new.",
    "commonTreatments": [
      "laser-dentistry",
      "orthodontic-treatment",
      "root-canal-treatment"
    ],
    "faqs": [
      {
        "q": "Can I go back to work the same day after laser gum treatment?",
        "a": "Usually yes. Laser work on the gums tends to bleed less and needs fewer stitches, so most people are back at a desk that afternoon. What we would avoid is a heavy day straight afterwards, or a long meeting where you have to keep talking. Take a morning appointment if you want the rest of the day to settle."
      },
      {
        "q": "I am thirty four. Is that too late to straighten my teeth?",
        "a": "No. Adult treatment moves more slowly than it does in a teenager because the bone responds differently, but it works. The commitment is an adjustment appointment every four to six weeks over a year or more, not a weekly one, so from Adambakkam it is a manageable rhythm. We will tell you at the first visit roughly how long your own case will take."
      },
      {
        "q": "Is Saturday busier than the weekdays?",
        "a": "Yes, and it books out first. If Saturday is the only day you can make the trip, ring at the start of the week on +91 80721 43199. If your office is on this side of the city, a 4:30pm or 5pm weekday slot is easier to get and the roads out of Adambakkam are kinder then than at six."
      }
    ],
    "heading": "If you live in Adambakkam and need a specialist dentist",
    "metaTitle": "Adambakkam to Anakaputhur, 10 km",
    "metaDescription": "The Nanganallur subways are how Adambakkam reaches GST Road, and they flood fast. Allow extra monsoon time for the 10 km run to Rudra Dental, Anakaputhur.",
    "photo": {
      "src": "/areas/adambakkam.jpg",
      "width": 1400,
      "height": 900,
      "alt": "Adambakkam railway station",
      "caption": "Adambakkam railway station",
      "author": "Darshan Simha",
      "licence": "CC BY-SA 4.0",
      "source": "https://commons.wikimedia.org/wiki/File:Adambakkam_Railway_Station.jpg"
    }
  },
  {
    "slug": "moulivakkam",
    "name": "Moulivakkam",
    "pincode": "600125",
    "distance": "about 12 km",
    "travel": "roughly 30 to 35 minutes",
    "route": "Kundrathur Main Road runs through Moulivakkam and it is the road to us. Follow it southwest through Kolapakkam and Kovur into Kundrathur, then turn left onto the Pallavaram-Kundrathur-Poonamallee Road towards Pammal. Anakaputhur begins just after the bridge over the Adyar.",
    "landmarks": [
      "Kundrathur Main Road",
      "Porur junction, north on Kundrathur Main Road",
      "DLF Cybercity on Mount Poonamallee Road at Manapakkam",
      "Mangadu Main Road, which links Moulivakkam with Kovur and Mangadu",
      "The Chennai Bypass"
    ],
    "transport": [
      "Buses towards Kundrathur run along Kundrathur Main Road. Get down at Kundrathur and take a local bus or an auto on to Anakaputhur.",
      "Autos and share autos are easy to find on Kundrathur Main Road at almost any hour."
    ],
    "intro": [
      "Moulivakkam sits on Kundrathur Main Road with Porur immediately north, Kolapakkam to the south, Mugalivakkam east and Manapakkam southeast. It is administered by Mangadu Municipality rather than the Chennai Corporation. Rudra Dental is about 12 km southwest in Anakaputhur, and Kundrathur Main Road takes you most of the way there.",
      "There is no railway station anywhere useful. St Thomas Mount and Guindy are both back towards the city and the wrong direction entirely, so rail plays no part in this trip. That leaves the road, and the road means Kundrathur Main Road: buses run down it as far as Kundrathur, where you change for Anakaputhur, and autos are plentiful on it.",
      "On a map Moulivakkam and Anakaputhur are less than five kilometres apart. The reason the drive is twelve is the Adyar. The river runs between the two, and the crossing the road uses is the bridge at Anakaputhur on the Kundrathur side, so you go west to Kundrathur first and come back east afterwards. It looks like a detour on a screen and it is simply the road once you have driven it, and after seven in the evening that stretch moves quickly."
    ],
    "why": "Two things bring people out from Moulivakkam. One is an implant for a tooth that came out years ago and was never replaced. The other is a second opinion after being told a tooth has to go. Both are decisions that are difficult to undo, so people want them made by someone who does that work every day rather than every so often.",
    "commonTreatments": [
      "dental-implants",
      "root-canal-treatment",
      "full-mouth-rehabilitation"
    ],
    "faqs": [
      {
        "q": "I get out of the DLF campus around seven. Is that too late to come from Moulivakkam?",
        "a": "No. The evening block runs to 9pm, Monday to Saturday, and the road down to Kundrathur is quiet by then. Book ahead so you are not sitting and waiting, and if you need a long appointment ask for seven rather than half past eight."
      },
      {
        "q": "How long does an implant take from start to finish?",
        "a": "Three to four months for most cases. The placement is one appointment, then the bone needs time to take hold of the implant, then the crown goes on. Some people need a graft first, which adds to that. Only the first and the last appointments are long ones, so the distance matters less than the timeline makes it sound."
      },
      {
        "q": "I had a root canal years ago and never went back for the crown. Is it too late now?",
        "a": "Sometimes, sometimes not. A root treated tooth has lost a lot of its own structure, and without a crown to hold it together it eventually cracks under load. If the crack has run below the gum the tooth cannot be kept. If it has not, a crown still saves it. We x ray it and tell you which of the two you are dealing with at the first visit, before you have paid for any treatment. Ring +91 80721 43199 and ask for a consultation."
      }
    ],
    "heading": "Rudra Dental for Moulivakkam, down Kundrathur Main Road",
    "metaTitle": "Moulivakkam dentist, 12 km via Kundrathur",
    "metaDescription": "The Adyar runs between Moulivakkam and Anakaputhur, turning a 5 km gap into a 12 km drive by way of Kundrathur. Implants and root canals until 9pm."
  }
];

export const AREAS: ServiceArea[] = AREA_SEEDS.map(build);

export function areaBySlug(slug: string) {
  return AREAS.find((area) => area.slug === slug);
}

const LICENCE_URLS: Record<string, string> = {
  "CC0": "https://creativecommons.org/publicdomain/zero/1.0/",
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  "CC BY-SA 2.5": "https://creativecommons.org/licenses/by-sa/2.5/",
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
};

export function licenceUrl(licence: string) {
  return LICENCE_URLS[licence] ?? "https://creativecommons.org/licenses/";
}
