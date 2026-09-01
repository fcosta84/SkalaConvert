// Texto editorial escrito à mão, por par. Chave canônica: `category:from:to`.
// A mesma matéria serve aos dois sentidos — só a frase de abertura muda,
// e é isso que `lede` e `ledeReverse` guardam.
//
// Pares sem entrada aqui ficam sem texto e sem FAQPage: schema com pergunta
// inventada é pior que schema nenhum.

export const pairCopy = {
  'length:inch:centimeter': {
    title: 'Inches to Centimeters (in to cm) Converter',
    description: 'Convert inches to centimeters instantly. 1 inch = exactly 2.54 cm by international definition. Screen sizes, clothing, and common conversions explained.',
    lede: 'One inch equals exactly 2.54 centimeters.',
    ledeReverse: 'One centimeter equals 0.393701 inches.',
    sections: [
      {
        h2: 'How many centimeters are in an inch?',
        html: `<p>One inch equals exactly 2.54 centimeters. The value is exact by definition rather
        than measurement — the international yard and pound agreement of 1959 fixed it, and the
        National Institute of Standards and Technology lists it as an exact conversion in Special
        Publication 811. Multiply inches by 2.54 to get centimeters; divide by 2.54 to go back.</p>`
      },
      {
        h2: 'Why is one inch exactly 2.54 cm?',
        html: `<p>Before 1959, the United States and the United Kingdom used slightly different
        inches, apart by about two parts per million. Irrelevant on a tape measure, the gap mattered
        in surveying and precision manufacturing. Six countries signed an agreement that year setting
        a single value for both the inch and the pound, and 2.54 cm has been exact since.</p>
        <p>The inch is much older than that. A 1324 English statute defined it as three barleycorns,
        dry and round, laid end to end. The standard survives in an unexpected place: shoe sizes
        still step by one third of an inch, one barleycorn per size.</p>`
      },
      {
        h2: 'Why are TV and monitor sizes measured diagonally in inches?',
        html: `<p>Screen size is the diagonal of the visible display, so a 27-inch monitor measures
        68.58 cm corner to corner, not across the top. The convention comes from cathode-ray
        televisions: picture tubes were round glass measured by outside diameter, while only a
        rectangular portion actually showed an image. The bigger number made better marketing, and it
        survived into LCD and OLED.</p>`
      },
      {
        h2: 'Where people get inches to cm wrong',
        html: `<p>Clothing sizes. A W32 jean has a 32-inch waist, or 81.28 cm, but German and
        European menswear labels that as a 46 or 48. The relationship is a sizing chart shaped by cut
        and vanity sizing, not a fixed ratio. Converting the number gives you a measurement, not a
        size.</p>`
      }
    ],
    faq: [
      ['How many centimeters are in an inch?', 'One inch equals exactly 2.54 centimeters, exact by definition under the international yard and pound agreement of 1959.'],
      ['Why is one inch exactly 2.54 cm?', 'Before 1959 the US and UK inches differed by about two parts per million. Six countries signed an agreement that year setting a single value, making 2.54 cm exact.'],
      ['Why are screen sizes measured diagonally in inches?', 'Screen size is the diagonal of the visible display, so a 27-inch monitor is 68.58 cm corner to corner. The convention comes from round cathode-ray picture tubes measured by outside diameter.']
    ]
  },

  'mass:pound:kilogram': {
    title: 'Pounds to Kilograms (lbs to kg) Converter',
    description: 'Convert pounds to kilograms instantly. 1 lb = exactly 0.45359237 kg. Baggage limits, body weight, and the mistake that costs you 10 percent.',
    lede: 'One pound equals exactly 0.45359237 kilograms.',
    ledeReverse: 'One kilogram equals 2.204623 pounds.',
    sections: [
      {
        h2: 'How many kilograms is one pound?',
        html: `<p>One pound equals exactly 0.45359237 kilograms. Like the inch, it is exact by
        definition — the same 1959 agreement fixed both, and the figure applies to the avoirdupois
        pound used for everyday weighing.</p>`
      },
      {
        h2: 'Why is the airline baggage limit 23 kg?',
        html: `<p>Because it is 50 pounds rounded. A 50 lb allowance is 22.68 kg, and carriers in
        metric countries round up to a clean 23. The oddly specific number on your airline's website
        is an imperial rule wearing metric clothes.</p>`
      },
      {
        h2: 'What happened to the kilogram in 2019?',
        html: `<p>It stopped being a physical object. Until May 2019, the kilogram was the last SI
        base unit defined by an artifact: a platinum-iridium cylinder cast in 1879, kept under three
        glass bells in a vault at Sèvres, near Paris, and known as Le Grand K. Over the twentieth
        century it drifted about 50 micrograms — roughly a grain of sand — against the official copies
        held by other countries.</p>
        <p>A standard that changes is not a standard, so the General Conference on Weights and
        Measures redefined the kilogram in terms of the Planck constant, measured with an instrument
        called a Kibble balance. The definition took effect on World Metrology Day, 20 May 2019. Your
        bathroom scale did not notice.</p>`
      },
      {
        h2: 'Where people get pounds to kg wrong',
        html: `<p>Halving. The mental shortcut turns 150 lb into 75 kg, but the real answer is 68 kg —
        the shortcut overshoots by about 10 percent. Fine for guessing, not fine for a medication dose
        or a freight quote.</p>
        <p>The other trap is the troy pound, still used for precious metals. It holds 12 troy ounces
        and weighs about 373 g, not 454 g. A pound of gold and a pound of flour are different
        weights.</p>`
      }
    ],
    faq: [
      ['How many kilograms is one pound?', 'One pound equals exactly 0.45359237 kilograms, exact by definition under the 1959 international yard and pound agreement.'],
      ['Why is the airline baggage limit 23 kg?', 'A 50 lb allowance is 22.68 kg, which metric carriers round up to 23 kg. The limit is an imperial rule converted.'],
      ['Why was the kilogram redefined in 2019?', 'The kilogram was defined by a platinum-iridium cylinder that drifted about 50 micrograms against its copies. In May 2019 it was redefined using the Planck constant.']
    ]
  },

  'length:foot:centimeter': {
    title: 'Feet to Centimeters (ft to cm) Converter',
    description: 'Convert feet to centimeters instantly. 1 foot = exactly 30.48 cm. Height conversion, the 6-foot mark, and the decimal mistake that costs 22 cm.',
    lede: 'One foot equals exactly 30.48 centimeters.',
    ledeReverse: 'One centimeter equals 0.032808 feet.',
    sections: [
      {
        h2: 'How many centimeters are in a foot?',
        html: `<p>One foot equals exactly 30.48 centimeters, or twelve inches. For height, convert the
        whole measurement to inches first and then multiply by 2.54 — it is fewer steps than
        converting feet and inches separately. Someone who is 5'10" is 70 inches, or 177.8 cm.</p>`
      },
      {
        h2: 'Where does the foot come from?',
        html: `<p>From feet. The Greeks and Romans both used one, and the Roman <em>pes</em> measured
        about 29.57 cm — close to today's value but not the same. Medieval Europe fractured into
        hundreds of local feet, and the 1959 international agreement finally set one: exactly 0.3048
        meters.</p>`
      },
      {
        h2: 'How tall is 6 feet in cm?',
        html: `<p>Exactly 182.88 cm. Few numbers carry more cultural weight for something so
        arbitrary — it is the height threshold quoted in dating profiles, basketball rosters, and
        casting calls, and it exists only because six is a round number of an old unit. The metric
        equivalent has no such landmark, which is why 183 cm reads as a measurement while 6 feet reads
        as a category.</p>`
      },
      {
        h2: 'Where people get feet to cm wrong',
        html: `<p>Writing 5.10 for five feet ten inches. It looks like a decimal but it is not: 5.10
        feet is 155.4 cm, while 5 feet 10 inches is 177.8 cm. That is a 22 cm error, and it appears
        constantly in spreadsheets and clinical records where the field accepts a decimal and the
        person types a height.</p>`
      }
    ],
    faq: [
      ['How many centimeters are in a foot?', 'One foot equals exactly 30.48 centimeters, or twelve inches.'],
      ['How tall is 6 feet in centimeters?', 'Six feet is exactly 182.88 cm.'],
      ['Why is writing 5.10 for 5 feet 10 inches wrong?', '5.10 feet is 155.4 cm, while 5 feet 10 inches is 177.8 cm — a 22 cm difference. Feet and inches are not decimal.']
    ]
  },

  'volume:kiloliter:liter': {
    title: 'Kiloliters to Liters (kl to l) Converter',
    description: 'Convert kiloliters to liters instantly. 1 kiloliter = 1,000 liters = 1 cubic meter. Read your water bill and spot a leak with the same number.',
    lede: 'One kiloliter is exactly 1,000 liters.',
    ledeReverse: 'One liter is exactly 0.001 kiloliters.',
    sections: [
      {
        h2: 'How many liters are in a kiloliter?',
        html: `<p>One kiloliter is exactly 1,000 liters. It is also exactly one cubic meter — the two
        units describe the same volume under different names, which is the single most useful fact on
        this page.</p>`
      },
      {
        h2: 'Is a cubic meter the same as a kiloliter?',
        html: `<p>Yes, exactly. A water bill showing 12 m³ and a tank rated at 12 kl hold the same
        amount: 12,000 liters. Utilities and engineers tend to write m³ while agriculture and water
        treatment write kl, but nothing changes between them.</p>
        <p>That equivalence turns an abstract bill into something you can picture. If your household
        used 12 m³ last month, that is 12,000 liters, or about 400 liters a day. A running toilet
        wastes roughly 200 liters a day — visible on the bill as an extra 6 m³ a month, which is how
        most leaks are actually found.</p>`
      },
      {
        h2: 'Where does the liter come from?',
        html: `<p>The French Revolution, in 1795, defined as the volume of a cube one decimeter on
        each side. The prefix kilo- is Greek for thousand. The liter sits slightly outside the SI as a
        formal matter — the International Bureau of Weights and Measures accepts it for use alongside
        SI units rather than as one of them, since the cubic meter is the official unit of volume.</p>`
      },
      {
        h2: 'Where people get kiloliters wrong',
        html: `<p>Treating volume as weight. One liter of pure water weighs about one kilogram, so a
        kiloliter of water weighs roughly a metric ton — and that is where the shortcut ends. A
        kiloliter of gasoline weighs about 740 kg and a kiloliter of diesel about 850 kg, because
        density is a property of the substance, not of the unit.</p>`
      }
    ],
    faq: [
      ['How many liters are in a kiloliter?', 'One kiloliter is exactly 1,000 liters, and also exactly one cubic meter.'],
      ['Is a cubic meter the same as a kiloliter?', 'Yes. One cubic meter and one kiloliter are the same volume, equal to 1,000 liters.'],
      ['Does a kiloliter weigh a ton?', 'Only for water. A kiloliter of water weighs about one metric ton, but a kiloliter of gasoline weighs about 740 kg and diesel about 850 kg.']
    ]
  },

  'length:mile:kilometer': {
    title: 'Miles to Kilometers (mi to km) Converter',
    description: 'Convert miles to kilometers instantly. 1 mile = exactly 1.609344 km. Plus the Fibonacci trick for converting in your head, and the nautical mile trap.',
    lede: 'One mile equals exactly 1.609344 kilometers.',
    ledeReverse: 'One kilometer equals 0.621371 miles.',
    sections: [
      {
        h2: 'How many kilometers are in a mile?',
        html: `<p>One mile equals exactly 1.609344 kilometers. A quick estimate: add 60 percent. Sixty
        miles is about 96 km, and the real answer is 96.6.</p>`
      },
      {
        h2: 'What is the Fibonacci trick for miles to kilometers?',
        html: `<p>Consecutive Fibonacci numbers convert miles to kilometers with under 0.5 percent
        error. The sequence runs 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 — each number is the sum of the two
        before it. Take any number in it as miles and the next one is the kilometers: 5 miles is about
        8 km, 8 miles is about 13 km, 55 mph is about 89 km/h.</p>
        <p>It works because the ratio between consecutive Fibonacci numbers converges on the golden
        ratio, about 1.618, and the mile-to-kilometer factor is 1.609. The two agree to within half a
        percent by coincidence, not design — one comes from Roman marching and the other from the size
        of the Earth.</p>`
      },
      {
        h2: 'Where does the mile come from?',
        html: `<p>From <em>mille passus</em>, Latin for a thousand paces, where a pace was two steps —
        left foot to left foot. The Roman mile ran about 1,480 m. England later fixed the statute mile
        at 5,280 feet under Elizabeth I, a number that looks arbitrary because it is: it was chosen to
        keep the mile compatible with the furlong used in farming.</p>`
      },
      {
        h2: 'Where people get miles to km wrong',
        html: `<p>Nautical miles. A nautical mile is exactly 1,852 meters, about 15 percent longer
        than a statute mile, and it is not a rounding of anything — it is one minute of arc of
        latitude, tied to the size of the planet. Aviation and shipping use it, and a speed in knots
        means nautical miles per hour. Converting a boat's speed as if knots were mph understates it
        by 15 percent.</p>`
      }
    ],
    faq: [
      ['How many kilometers are in a mile?', 'One mile equals exactly 1.609344 kilometers.'],
      ['What is the Fibonacci trick for converting miles to kilometers?', 'Consecutive Fibonacci numbers approximate the conversion: 5 miles is about 8 km, 8 miles about 13 km. The error stays under 0.5 percent because the golden ratio, 1.618, is close to the conversion factor of 1.609.'],
      ['Is a nautical mile the same as a mile?', 'No. A nautical mile is exactly 1,852 meters, about 15 percent longer than a statute mile. Speeds in knots are nautical miles per hour.']
    ]
  },

  'mass:microgram:gram': {
    title: 'Micrograms to Grams (mcg to g) Converter',
    description: 'Convert micrograms to grams instantly. 1 gram = 1,000,000 micrograms. Includes the mcg to IU conversion for vitamin D and a critical labeling warning.',
    lede: 'One gram contains exactly 1,000,000 micrograms.',
    ledeReverse: 'One microgram is exactly 0.000001 grams.',
    sections: [
      {
        h2: 'How many micrograms are in a gram?',
        html: `<p>One gram contains exactly 1,000,000 micrograms. The decimal point moves six places,
        which is why this conversion is worth checking rather than doing in your head — 25 mcg is
        0.000025 g.</p>`
      },
      {
        h2: 'How do you convert mcg to IU for vitamin D?',
        html: `<p>For vitamin D3, 1 microgram equals 40 International Units, so a 25 mcg dose is
        1,000 IU. The conversion is specific to the substance: IU measures biological activity, not
        mass, so the factor for vitamin A or vitamin E is different and the two scales cannot be
        converted in general. Supplement labels commonly print both, and they are describing one dose
        twice.</p>`
      },
      {
        h2: 'Why do prescriptions say mcg instead of µg?',
        html: `<p>Because handwritten µ has killed people. The Greek letter mu, written quickly, reads
        as an m — turning micrograms into milligrams and the dose into a thousand times itself. The
        Institute for Safe Medication Practices lists µg on its roster of error-prone abbreviations
        and recommends mcg, or the word written out, in any handwritten order. It is one of the few
        places where a typographic choice is a safety control.</p>`
      },
      {
        h2: 'A note on using this converter',
        html: `<p>Micrograms appear almost entirely in medical and laboratory work, where a
        factor-of-1,000 error is the difference between a dose and an overdose. Use this to check
        arithmetic you have already reasoned through — never as the authority for a dose. Confirm
        against the label, the prescription, or a pharmacist.</p>`
      }
    ],
    faq: [
      ['How many micrograms are in a gram?', 'One gram contains exactly 1,000,000 micrograms. 25 mcg is 0.000025 g.'],
      ['How do you convert mcg to IU for vitamin D?', 'For vitamin D3, 1 microgram equals 40 International Units, so 25 mcg is 1,000 IU. The factor is specific to the substance.'],
      ['Why is mcg used instead of the microgram symbol?', 'Handwritten µ can be misread as m, turning micrograms into milligrams — a thousandfold overdose. The Institute for Safe Medication Practices recommends mcg in handwritten orders.']
    ]
  },

  'length:foot:meter': {
    title: 'Feet to Meters (ft to m) Converter',
    description: 'Convert feet to meters instantly. 1 foot = exactly 0.3048 m. Why aviation still measures altitude in feet, and why rounding to 0.3 fails.',
    lede: 'One foot equals exactly 0.3048 meters.',
    ledeReverse: 'One meter equals 3.28084 feet.',
    sections: [
      {
        h2: 'How many meters are in a foot?',
        html: `<p>One foot equals exactly 0.3048 meters. The reverse is less tidy: one meter is
        3.28084 feet.</p>`
      },
      {
        h2: 'Why is aircraft altitude measured in feet?',
        html: `<p>Nearly every country reports flight altitude in feet, including ones that are
        otherwise entirely metric, and the reason is coordination rather than preference. Vertical
        separation between aircraft only works if every pilot and controller in the airspace uses one
        scale, and the International Civil Aviation Organization standardized on feet when the
        industry was dominated by American and British manufacturers. Changing it now would mean
        changing every altimeter, chart, and procedure at once.</p>
        <p>A handful of countries went the other way and use meters, China and North Korea among them,
        which is why crossing certain borders requires a mid-flight altitude conversion. A typical
        cruising altitude of 35,000 feet is 10,668 meters.</p>`
      },
      {
        h2: 'Where people get feet to meters wrong',
        html: `<p>Rounding 0.3048 to 0.3. The error is 1.6 percent, invisible across a room and
        serious across a flight: at 35,000 feet the shortcut is off by more than 500 meters, which is
        wider than the vertical separation between aircraft. The reverse shortcut — three feet to a
        meter — misses in the other direction, since a meter is 3.28 feet.</p>`
      }
    ],
    faq: [
      ['How many meters are in a foot?', 'One foot equals exactly 0.3048 meters. One meter is 3.28084 feet.'],
      ['Why is aircraft altitude measured in feet?', 'Vertical separation requires every pilot and controller to use one scale, and the International Civil Aviation Organization standardized on feet. A few countries, including China, use meters instead.'],
      ['What is 35,000 feet in meters?', '35,000 feet is 10,668 meters.']
    ]
  },

  'length:millimeter:centimeter': {
    title: 'Millimeters to Centimeters (mm to cm) Converter',
    description: 'Convert millimeters to centimeters instantly. 10 mm = 1 cm. Plus what "mm of rain" actually means and why drawings use only millimeters.',
    lede: 'Ten millimeters make one centimeter.',
    ledeReverse: 'One centimeter is exactly 10 millimeters.',
    sections: [
      {
        h2: 'How many millimeters are in a centimeter?',
        html: `<p>Ten. Millimeters to centimeters divides by 10, and centimeters to millimeters
        multiplies by 10. The millimeter figure is always the larger of the two, because the unit is
        smaller — if your answer shrank when converting to millimeters, you went the wrong way.</p>`
      },
      {
        h2: 'What does "mm of rain" mean?',
        html: `<p>One millimeter of rainfall means one liter of water fell on every square meter of
        ground. Rain is reported as depth rather than volume because depth is independent of area: a
        gauge the size of a bucket and a gauge the size of a field record the same number.</p>
        <p>That makes the forecast easy to translate. A 50 mm storm drops 50 liters on every square
        meter — on a modest 100 m² roof, five metric tons of water heading for the gutters.</p>`
      },
      {
        h2: 'Why are technical drawings dimensioned in millimeters?',
        html: `<p>Because a single unit throughout removes ambiguity. The ISO 129-1 standard for
        technical product documentation specifies millimeters as the default, and drawings following
        it omit the "mm" label entirely — every number is understood to be millimeters unless marked
        otherwise. A drawing that quietly mixes units is a drawing that produces the wrong part.</p>`
      },
      {
        h2: 'Where people get mm to cm wrong',
        html: `<p>It is the easiest conversion on this site, which is exactly the problem. People do
        it in their heads without checking direction, and a factor-of-10 error on a machined part is
        not a rounding issue — it is scrap.</p>`
      }
    ],
    faq: [
      ['How many millimeters are in a centimeter?', 'Ten millimeters make one centimeter. Divide millimeters by 10 to get centimeters.'],
      ['What does mm of rain mean?', 'One millimeter of rainfall means one liter of water fell on every square meter of ground. A 50 mm storm drops 50 liters per square meter.'],
      ['Why are technical drawings in millimeters?', 'The ISO 129-1 standard specifies millimeters as the default unit, and drawings following it omit the mm label because every dimension is understood to be in millimeters.']
    ]
  },

  'pressure:psi:bar': {
    title: 'psi to bar Converter — Tire Pressure Made Simple',
    description: 'Convert psi to bar instantly. 1 psi = 0.0689476 bar, and 1 bar is about 14.5 psi. Tire pressure chart, gauge vs absolute pressure, and common mistakes.',
    lede: 'One psi equals 0.0689476 bar.',
    ledeReverse: 'One bar equals 14.5038 psi.',
    sections: [
      {
        h2: 'What is 1 psi in bar?',
        html: `<p>One psi equals 0.0689476 bar. The reverse is the number worth memorizing: one bar is
        about 14.5 psi. Both resolve to the pascal, the SI unit of pressure — one bar is exactly
        100,000 pascals and one psi is 6,894.757 pascals.</p>`
      },
      {
        h2: 'What is 2.2 bar in psi for tires?',
        html: `<p>2.2 bar is 31.9 psi. European cars print the recommended pressure in bar on the door
        jamb while most pumps read in psi, which is why this is the conversion drivers actually
        need:</p>
        <table class="mini-table">
          <thead><tr><th scope="col">bar</th><th scope="col">psi</th></tr></thead>
          <tbody>
            <tr><td>1.8</td><td>26.1</td></tr>
            <tr><td>2.0</td><td>29.0</td></tr>
            <tr><td>2.2</td><td>31.9</td></tr>
            <tr><td>2.5</td><td>36.3</td></tr>
            <tr><td>3.0</td><td>43.5</td></tr>
          </tbody>
        </table>`
      },
      {
        h2: 'Where does the bar come from?',
        html: `<p>The Norwegian meteorologist Vilhelm Bjerknes introduced it in 1911, from the Greek
        <em>baros</em>, weight. He chose it to sit near average atmospheric pressure at sea level —
        1.01325 bar — so weather maps could use round numbers. The bar is not an SI unit, though the
        International Bureau of Weights and Measures lists it among units accepted for use alongside
        the SI. psi is plainer: pounds of force per square inch.</p>`
      },
      {
        h2: 'What is the difference between gauge and absolute pressure?',
        html: `<p>This is where the conversion goes wrong even when the arithmetic is right. A tire
        gauge reads <em>gauge</em> pressure — how much the inside exceeds the surrounding air.
        Absolute pressure adds the atmosphere back, about 1 bar or 14.7 psi at sea level, so a tire
        reading 2.2 bar on the gauge is at 3.2 bar absolute.</p>
        <p>Converting between psi and bar does not change which of the two you have. Before comparing
        a figure from a manual against one from a gauge, check that both are gauge pressure. The
        notations psig and psia exist for exactly this reason.</p>`
      }
    ],
    faq: [
      ['What is 1 psi in bar?', 'One psi equals 0.0689476 bar. One bar is about 14.5 psi. One bar is exactly 100,000 pascals and one psi is 6,894.757 pascals.'],
      ['What is 2.2 bar in psi for tires?', '2.2 bar equals 31.9 psi. European cars list recommended tire pressure in bar while most pumps read in psi.'],
      ['What is the difference between gauge and absolute pressure?', 'A tire gauge reads gauge pressure, the amount above surrounding air. Absolute pressure adds the atmosphere back, about 1 bar or 14.7 psi at sea level. A tire reading 2.2 bar gauge is at 3.2 bar absolute.']
    ]
  },

  'speed:milePerHour:kilometerPerHour': {
    title: 'mph to km/h Converter — Speed Conversion',
    description: 'Convert mph to km/h instantly. 1 mph = exactly 1.609344 km/h. Speed limit chart, treadmill settings, and why your speedometer reads high.',
    lede: 'One mile per hour equals exactly 1.609344 km/h.',
    ledeReverse: 'One kilometer per hour equals 0.621371 mph.',
    sections: [
      {
        h2: 'What is 1 mph in km/h?',
        html: `<p>One mile per hour equals exactly 1.609344 km/h — the same factor as miles to
        kilometers, since the time unit is identical on both sides. Common limits:</p>
        <table class="mini-table">
          <thead><tr><th scope="col">mph</th><th scope="col">km/h</th></tr></thead>
          <tbody>
            <tr><td>30</td><td>48.3</td></tr>
            <tr><td>55</td><td>88.5</td></tr>
            <tr><td>65</td><td>104.6</td></tr>
            <tr><td>70</td><td>112.7</td></tr>
          </tbody>
        </table>`
      },
      {
        h2: 'What speed is "10" on an American treadmill?',
        html: `<p>16.1 km/h. Treadmills built for the US market default to mph, and a runner who sets
        10 expecting 10 km/h gets marathon pace instead — fast enough to end the session badly. If the
        display has a units toggle, this is the one setting worth checking before starting. A
        comfortable 10 km/h is 6.2 on an mph display.</p>`
      },
      {
        h2: 'Why does my speedometer read higher than my GPS?',
        html: `<p>By design and by law. Regulations including the UNECE R39 standard used across
        Europe require that a speedometer never read <em>below</em> actual speed, and allow it to read
        high — up to 10 percent plus 4 km/h. At a true 100 km/h, the dash may legally show anything
        from 100 to 114.</p>
        <p>The tolerance exists because tire diameter changes with wear, pressure, and replacement,
        and a speedometer calibrated for a fresh tire would otherwise under-read as the tread wore
        down. GPS measures ground speed directly and does not care about your tires, which is why the
        two disagree and the GPS is usually right.</p>`
      },
      {
        h2: 'Where people get mph to km/h wrong',
        html: `<p>Converting the displayed number and treating the result as true speed. The
        conversion is exact; the input is not. If you need actual speed, start from GPS, not from the
        dash.</p>`
      }
    ],
    faq: [
      ['What is 1 mph in km/h?', 'One mile per hour equals exactly 1.609344 km/h. A 70 mph limit is 112.7 km/h.'],
      ['What speed is 10 on an American treadmill?', '16.1 km/h, because US treadmills default to mph. A 10 km/h pace is 6.2 on an mph display.'],
      ['Why does my speedometer read higher than GPS?', 'Regulations such as UNECE R39 require speedometers never to under-read and allow up to 10 percent plus 4 km/h over. The tolerance covers tire wear and pressure.']
    ]
  }
};

// Procura nos dois sentidos. `reversed` diz se a página é a direção inversa
// da entrada canônica, para trocar só a frase de abertura.
export function getPairCopy(category, from, to) {
  const direct = pairCopy[`${category}:${from}:${to}`];
  if (direct) return { ...direct, reversed: false };
  const inverse = pairCopy[`${category}:${to}:${from}`];
  if (inverse) return { ...inverse, reversed: true };
  return null;
}
