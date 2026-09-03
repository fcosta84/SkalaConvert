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
        size. For workshop and technical work the same inch converts to millimetres — see
        <a href="/length/inches-to-mm/">inches to mm</a>.</p>`
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
        or a freight quote. Doses themselves are often in micrograms, where a similar
        thousandfold error is possible — see
        <a href="/weight/micrograms-to-grams/">micrograms to grams</a>.</p>
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
        person types a height. The reverse direction, converting a metric height into
        feet and inches, has the same two-step problem — see
        <a href="/length/cm-to-inches/">cm to inches</a>.</p>`
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
        by 15 percent. Speed in knots follows from it — see
        <a href="/speed/mph-to-kph/">mph to km/h</a>.</p>`
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
        </table>
        <p>Tyre pressure is usually checked on the same trip as fuel —
        <a href="/volume/gallons-to-liters/">gallons to liters</a> covers the other number
        on the forecourt.</p>`
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
  },

  // ── Lote 02 (set/2026) ─────────────────────────────────────────────

  'volume:gallonUS:liter': {
    title: 'Gallons to Liters (gal to L) Converter',
    description: 'Convert US gallons to liters. 1 US gallon = 3.785411784 L. Fuel, recipes, and why the UK gallon is different.',
    lede: 'One US gallon is 3.785411784 litres.',
    ledeReverse: 'One litre is 0.264172 US gallons.',
    sections: [
      {
        h2: 'How many liters are in a gallon?',
        html: `<p><strong>L = gal × 3.785411784</strong></p>
        <p><strong>There are two gallons, and they are not close.</strong> The US liquid gallon is
        3.785 L; the imperial gallon still used in the UK and parts of the Caribbean is 4.54609 L —
        20% larger. A car advertised at 40 miles per gallon does substantially better on paper in
        Britain than in America for no mechanical reason at all. If a figure comes from a British
        source, check which gallon before converting.</p>`
      },
      {
        h2: 'Fuel economy: mpg versus L/100 km',
        html: `<p>Fuel economy is quoted as miles per gallon in the US and litres per 100 km almost
        everywhere else, and the two run in opposite directions: higher mpg is better, lower L/100 km
        is better. They are reciprocals, not scaled versions of each other. Thirty US mpg is
        7.84 L/100 km.</p>`
      },
      {
        h2: 'The gallon in the kitchen',
        html: `<p>In the kitchen the gallon appears mostly as a fraction. A US quart is 0.946 L,
        close enough to a litre that recipes treat them as equivalent and get away with it in soups
        and stocks. In baking they are not equivalent — a 5% error in liquid changes a dough.</p>
        <p>Reference: <strong>1 US gallon ≈ 3.8 L</strong>, and 4 litres is a little over a
        gallon.</p>`
      }
    ],
    faq: [
      ['Is a UK gallon the same as a US gallon?', 'No. The imperial gallon is 4.54609 L, about 20% larger than the US gallon of 3.785 L.'],
      ['How many liters in a 15 gallon tank?', '56.78 L.'],
      ['What is 30 mpg in L/100 km?', '7.84 L/100 km, using US gallons.']
    ]
  },

  'volume:liter:gallonUS': {
    title: 'Liters to Gallons (L to gal) Converter',
    description: 'Convert liters to US gallons. Divide by 3.785. Fuel prices, container sizes, and the imperial gallon difference.',
    lede: 'Divide litres by 3.785 for US gallons. Fifty litres is 13.2 gallons.',
    ledeReverse: 'One US gallon is 3.785411784 litres.',
    sections: [
      {
        h2: 'How many gallons is one liter?',
        html: `<p><strong>gal = L ÷ 3.785411784</strong>, which is 0.264172 gallons per litre.</p>
        <p>This is the direction that matters when comparing fuel prices across borders. European
        pumps price by the litre, American pumps by the gallon, and the numbers look wildly different
        until converted — €1.70 per litre is $6.43 per US gallon at parity.</p>`
      },
      {
        h2: 'Container sizes across markets',
        html: `<p>Container sizes reveal how each market rounds. A US milk jug is one gallon
        (3.785 L); European milk comes in 1 L and 2 L cartons. A US soda bottle is 2 L, adopted
        from the metric standard and never converted back.</p>
        <p>The litre itself is not an SI base unit — the cubic metre is. The litre is a permitted
        name for a cubic decimetre, and one cubic metre holds exactly 1,000 litres.</p>`
      }
    ],
    faq: [
      ['How many gallons is 50 liters?', '13.21 US gallons, or 11.0 imperial gallons.'],
      ['Is a liter an SI unit?', 'Not a base unit. The SI unit of volume is the cubic metre; the litre is an accepted name for one cubic decimetre.'],
      ['Why is a soda bottle 2 liters in the United States?', 'The 2 L bottle was introduced during a metrication push in the 1970s and the format stuck, even though most other American packaging reverted to imperial.']
    ]
  },

  'length:inch:millimeter': {
    title: 'Inches to Millimeters (in to mm) Converter',
    description: 'Convert inches to millimeters. 1 inch = 25.4 mm exactly. Drill bits, fractional inches, and workshop measurements.',
    lede: 'One inch is exactly 25.4 millimetres.',
    ledeReverse: 'One millimetre is 0.03937 inches.',
    sections: [
      {
        h2: 'How many millimeters are in an inch?',
        html: `<p><strong>mm = in × 25.4</strong></p>
        <p>This is the workshop conversion. Millimetres are the working unit of technical drawing,
        machining and European woodworking; inches are the working unit of American hardware. Anyone
        with a mixed toolbox converts between them constantly.</p>`
      },
      {
        h2: 'Fractional inches in the workshop',
        html: `<p><strong>Inches in a workshop are fractional, not decimal.</strong> Drill bits,
        sockets and timber come as 1/16, 1/8, 3/16, 1/4 and so on. Converting them means turning
        the fraction into a decimal first: 3/8 inch is 0.375 in, which is 9.525 mm.</p>
        <p>The near-misses cause real damage:</p>
        <ul>
          <li>1/4 in = 6.35 mm, close to 6 mm</li>
          <li>3/8 in = 9.525 mm, close to 10 mm</li>
          <li>1/2 in = 12.7 mm, close to 13 mm</li>
          <li>3/4 in = 19.05 mm, close to 19 mm — the closest pair</li>
        </ul>`
      },
      {
        h2: 'The nominal pipe trap',
        html: `<p>Plumbing adds a trap: pipe sizes in inches are nominal, not actual. A "1/2 inch"
        pipe has neither an inner nor an outer diameter of 12.7 mm. The number is a legacy label,
        not a measurement, so converting it gives a figure that matches nothing physical.</p>`
      }
    ],
    faq: [
      ['What is 3/8 inch in mm?', '9.525 mm. A 10 mm socket is close but not the same.'],
      ['Is a 1/2 inch pipe actually 12.7 mm?', 'No. Pipe sizes in inches are nominal designations, not physical dimensions.'],
      ['What is 25.4 mm in inches?', 'Exactly one inch. The relationship is a definition, not a measurement.']
    ]
  },

  'length:millimeter:inch': {
    title: 'Millimeters to Inches (mm to in) Converter',
    description: 'Convert millimeters to inches. Divide by 25.4. Screen bezels, technical drawings, and fractional equivalents.',
    lede: 'Divide millimetres by 25.4. Ten millimetres is 0.394 inches.',
    ledeReverse: 'One inch is exactly 25.4 millimetres.',
    sections: [
      {
        h2: 'How many inches is one millimeter?',
        html: `<p><strong>in = mm ÷ 25.4</strong></p>
        <p>The answer is almost always a fraction in disguise. A workshop does not want 0.394
        inches — it wants to know that 10 mm sits between 3/8 (9.525 mm) and 13/32 (10.32 mm).
        Converting metric to imperial in a practical setting means finding the nearest usable
        fraction.</p>
        <p>Anchor: <strong>25 mm is 0.984 inches</strong>, just under an inch — so a metre stick
        and a yardstick diverge slowly but visibly.</p>`
      },
      {
        h2: 'Camera sensor sizes: the inch that is not an inch',
        html: `<p>Lens focal lengths are metric everywhere — 50 mm, 85 mm, 200 mm — while sensor
        sizes are quoted in fractional inches (1/2.3", 1", APS-C). The inch measurements are not
        even real inches; they are a legacy of vacuum tube diameters from the 1950s, and a "1 inch"
        sensor is about 16 mm across. It is the one place where converting the number gives you an
        answer that is technically correct and practically meaningless.</p>`
      }
    ],
    faq: [
      ['What is 10 mm in inches?', '0.3937 in, or roughly 25/64. The nearest common size is 3/8 in (9.525 mm).'],
      ['Why is a "1 inch" camera sensor not 25.4 mm?', 'The designation comes from old video tube diameters, not from the sensor itself. A 1-inch sensor measures about 16 mm diagonally.'],
      ['How many mm in a quarter inch?', '6.35 mm.']
    ]
  },

  'length:yard:meter': {
    title: 'Yards to Meters (yd to m) Converter',
    description: 'Convert yards to meters. 1 yard = 0.9144 m exactly. American football, fabric, and swimming pools.',
    lede: 'One yard is 0.9144 metres — about 8.5% shorter than a metre.',
    ledeReverse: 'One metre is 1.09361 yards.',
    sections: [
      {
        h2: 'How many meters is a yard?',
        html: `<p><strong>m = yd × 0.9144</strong></p>
        <p>The yard and the metre are close enough to be mistaken for each other and far enough
        apart that the error compounds. Over 100 units you lose more than eight metres.</p>`
      },
      {
        h2: 'Swimming: why yard and metre times are not comparable',
        html: `<p>Competitive pools come in 25 m, 50 m and 25-yard configurations. A 100-yard
        freestyle is 91.44 m, so American short-course yard times are systematically faster than
        metric ones for the same swimmer. Governing bodies publish separate record lists rather
        than convert.</p>`
      },
      {
        h2: 'American football in metres',
        html: `<p>100 yards between goal lines, 10 yards for a first down (9.14 m), and the field
        including end zones running 120 yards or 109.7 m. Broadcasters outside the US convert the
        field but never the plays, because "nine point one four metres to go" does not work.</p>`
      },
      {
        h2: 'The fabric trap',
        html: `<p>Textiles are sold by the yard in the US and by the metre elsewhere. A pattern
        calling for 3 yards and a shop selling 3 metres leaves you with 26 cm of surplus. Reverse
        it and you are 26 cm short.</p>
        <p>Anchor: <strong>a yard is a metre minus about 9 cm</strong>, roughly the length of a
        hand.</p>`
      }
    ],
    faq: [
      ['How long is an American football field in meters?', '91.44 m between the goal lines, or 109.73 m including both end zones.'],
      ['Is a yard the same as a meter?', 'No. A yard is 0.9144 m, about 8.5% shorter.'],
      ['Why are swimming records separate for yards and meters?', 'A 25-yard pool is shorter than a 25 m pool, so turn count and total distance differ. Times are not comparable.']
    ]
  },

  'length:meter:yard': {
    title: 'Meters to Yards (m to yd) Converter',
    description: 'Convert meters to yards. 1 m = 1.09361 yd. Athletics, fabric, and the historical definition of the yard.',
    lede: 'One metre is 1.09361 yards. A 100 m sprint is 109.36 yards.',
    ledeReverse: 'One yard is 0.9144 metres.',
    sections: [
      {
        h2: 'How many yards is a meter?',
        html: `<p><strong>yd = m ÷ 0.9144</strong>, or m × 1.0936133.</p>
        <p>Athletics shows the switch clearly. The classic imperial sprint was 100 yards; the
        modern standard is 100 m, which is 9.36 yards longer. When athletics went metric in the
        1970s, the old yard records became historical curiosities.</p>`
      },
      {
        h2: 'How the yard got its current value',
        html: `<p>The yard was defined by physical prototype bars for centuries, then in 1959
        redefined as exactly 0.9144 m by the same agreement that fixed the inch and the pound.
        The metric system won the definition; the imperial names survived the outcome.</p>`
      },
      {
        h2: 'Golf: yards versus metres',
        html: `<p>Course distances are marked in yards in the US and UK and in metres across most
        of continental Europe, so a 150-yard marker is 137 m. Players who use a rangefinder set to
        the wrong unit club themselves wrong by roughly one club length.</p>
        <p>Anchor: <strong>100 m is about 109 yards</strong>, and a metre is a yard plus a hand's
        width.</p>`
      }
    ],
    faq: [
      ['What is 100 m in yards?', '109.36 yards.'],
      ['Was the yard originally based on a body measurement?', 'Several origin stories exist, most involving arm or stride length, but none is documented. Since 1959 it has been defined as exactly 0.9144 m.'],
      ['How many yards in a mile?', '1,760 yards, which is 1,609.344 m.']
    ]
  },

  'volume:deciliter:milliliter': {
    title: 'Deciliters to Milliliters (dL to mL) Converter',
    description: 'Convert deciliters to milliliters. 1 dL = 100 mL. Nordic and Swiss recipes, and why the deciliter survives in cooking.',
    lede: 'One decilitre is 100 millilitres.',
    ledeReverse: 'One millilitre is 0.01 decilitres.',
    sections: [
      {
        h2: 'How many milliliters in a deciliter?',
        html: `<p><strong>mL = dL × 100</strong></p>
        <p>The interesting question is not the arithmetic — it is why anyone still uses decilitres.</p>`
      },
      {
        h2: 'Why Nordic and Swiss kitchens use decilitres',
        html: `<p><strong>In Nordic and Swiss kitchens, the decilitre is the standard cooking
        measure.</strong> Swedish, Norwegian, Danish and Swiss-German recipes are written in dL
        rather than mL or cups: 2 dL of flour, 5 dL of milk. Measuring jugs sold in those countries
        are marked primarily in decilitres.</p>
        <p>The logic is practical. A decilitre is roughly a small cup — 100 mL — so recipe
        quantities come out as small whole numbers instead of the 250s and 500s that millilitres
        produce.</p>`
      },
      {
        h2: 'Decilitres, cups and the comparison worth having',
        html: `<p>A US cup is 236.6 mL, a metric cup is 250 mL, and a decilitre is 100 mL. A recipe
        calling for 2.5 dL is 250 mL, which is a metric cup exactly and a US cup plus about 6%.</p>
        <p>For dry ingredients, remember that volume is not weight. Two decilitres of flour weighs
        roughly 120 g and two decilitres of sugar roughly 170 g.</p>`
      }
    ],
    faq: [
      ['Why do Scandinavian recipes use deciliters?', 'It is the standard kitchen measure across the Nordic countries and Switzerland, giving small whole numbers where millilitres would give large ones.'],
      ['Is a deciliter the same as a cup?', 'No. A decilitre is 100 mL; a US cup is 236.6 mL and a metric cup is 250 mL.'],
      ['How many deciliters in a liter?', 'Ten.']
    ]
  },

  'volume:milliliter:deciliter': {
    title: 'Milliliters to Deciliters (mL to dL) Converter',
    description: 'Convert milliliters to deciliters. Divide by 100. Reading Nordic recipes with a standard measuring jug.',
    lede: 'Divide millilitres by 100. Two hundred and fifty millilitres is 2.5 dL.',
    ledeReverse: 'One decilitre is 100 millilitres.',
    sections: [
      {
        h2: 'How many deciliters is 100 mL?',
        html: `<p><strong>dL = mL ÷ 100</strong></p>
        <p>Exactly one. This direction is searched by people holding the wrong tool. A Swedish or
        Swiss recipe asks for 2 dL of cream; the jug in the drawer is marked in millilitres from
        50 to 500. The conversion is trivial, but the reflex to double-check it is sensible —
        moving the point one place instead of two turns 200 mL into 20 dL, a twentyfold error.</p>`
      },
      {
        h2: 'Measuring decilitres with a millilitre jug',
        html: `<p>Most measuring jugs sold outside Scandinavia carry millilitre graduations at 50 mL
        intervals, which maps cleanly onto half-decilitre steps. A recipe in whole and half
        decilitres can be measured without arithmetic once you know that each 100 mL line is one
        decilitre.</p>
        <p>Where it becomes awkward is small quantities. A recipe asking for 0.5 dL of oil means
        50 mL, which is about three and a half tablespoons — below the useful range of most jugs.
        For anything under a decilitre, spoons are more accurate.</p>`
      },
      {
        h2: 'Volume is not weight',
        html: `<p>Two decilitres of water is 200 g, but two decilitres of flour is roughly 120 g
        and two of honey around 280 g. Recipes that give dry ingredients by volume assume a
        particular way of filling the measure, which is why baking by weight is more reliable than
        baking by volume in any unit.</p>
        <p>The reasoning behind the unit — and why Nordic and Swiss kitchens kept it — is on
        <a href="/volume/deciliters-to-milliliters/">deciliters to milliliters</a>.</p>`
      }
    ],
    faq: [
      ['How many mL is 1 dL?', 'One hundred.'],
      ['What is 250 mL in deciliters?', '2.5 dL.'],
      ['Can I measure deciliters with a normal measuring jug?', 'Yes. Each 100 mL graduation is one decilitre, so a standard 500 mL jug covers up to 5 dL.']
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
