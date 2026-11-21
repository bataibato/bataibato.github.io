export const languages = {
  ne: 'नेपाली',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ne';

export const ui = {
  ne: {
    // Navigation
    'nav.home': 'गृहपृष्ठ',
    'nav.features': 'विशेषताहरू',
    'nav.howItWorks': 'कसरी चल्छ?',
    'nav.about': 'हाम्रो बारेमा',
    'nav.faq': 'प्रश्नोत्तर',
    'nav.contact': 'सम्पर्क',
    'nav.download': 'एप डाउनलोड',
    'nav.getApp': 'सुरु गरौं',

    // Hero
    'hero.badge': 'सिन्धुलीबाट सुरु, नेपालभरि विस्तार',
    'hero.titleStart': 'यात्रा साझेदारी,',
    'hero.titleEnd': 'सजिलो र भरपर्दो',
    'hero.lead': 'बाटैबाटो नेपालको स्थानीय समुदायमा आधारित राइड सेयरिङ प्लेटफर्म हो। सिन्धुलीबाट सुरु भई दैनिक यात्रा, भाडा साझेदारी र सुरक्षित यात्राको भरपर्दो माध्यम।',
    'hero.ctaPlay': 'गुगल प्लेमा पाउनुहोस्',
    'hero.ctaExplore': 'विशेषताहरू हेर्नुहोस्',
    'hero.stat1': '१०,०००+',
    'hero.stat1Label': 'सफल यात्राहरू',
    'hero.stat2': '५,०००+',
    'hero.stat2Label': 'सन्तुष्ट प्रयोगकर्ता',
    'hero.stat3': '४ प्रकारका',
    'hero.stat3Label': 'सवारी साधन विकल्प',
    'hero.stat4': '२४/७',
    'hero.stat4Label': 'सहयोग सेवा',

    // Vehicles Showcase
    'vehicles.badge': 'सवारी विकल्पहरू',
    'vehicles.title': 'तपाईंको आवश्यकता अनुसारको सवारी रोज्नुहोस्',
    'vehicles.lead': 'मोटरसाइकल, विद्युतीय अटो, पेट्रोल अटो र कार, सबै प्रकारका सवारी अब औंलाको एक स्पर्शमै उपलब्ध छन्।',
    'vehicles.motorcycle': 'मोटरसाइकल (बाइक)',
    'vehicles.motorcycleDesc': 'छिटो र किफायती यात्रा, १ जना यात्रुका लागि उत्तम।',
    'vehicles.electricAuto': 'विद्युतीय अटो (ई-रिक्सा)',
    'vehicles.electricAutoDesc': 'वातावरणमैत्री, ब्याट्रीबाट चल्ने शान्त र आरामदायी स्थानीय यात्रा।',
    'vehicles.petrolAuto': 'पेट्रोल अटो (अटो रिक्सा)',
    'vehicles.petrolAutoDesc': 'सामान र परिवारसँगको भरपर्दो यात्रा, उकालो र लामो रुटका लागि उपयुक्त।',
    'vehicles.car': 'कार (क्याब)',
    'vehicles.carDesc': 'लामो दूरी, आरामदायी यात्रा र समूहका लागि उपयुक्त।',

    // Features Section
    'features.badge': 'हाम्रा विशेषताहरू',
    'features.title': 'बाटैबाटो किन रोज्ने?',
    'features.lead': 'नेपाली सडक र स्थानीय आवश्यकताहरूलाई मध्यनजर गरी बनाइएको आधुनिक प्रविधि।',
    'features.f1Title': 'तत्काल राइड म्याचिङ',
    'features.f1Desc': 'तपाईंको नजिकै रहेका चालकहरूसँग सेकेन्डमै सम्पर्क गराउने स्मार्ट प्रणाली।',
    'features.f2Title': 'सस्तो र पारदर्शी भाडा',
    'features.f2Desc': 'कुनै लुकेको शुल्क बिना पहिले नै निश्चित गरिएको उचित भाडा दर।',
    'features.f3Title': 'प्रत्यक्ष जीपीएस ट्र्याकिङ',
    'features.f3Desc': 'आफ्नो यात्राको प्रत्यक्ष मार्ग परिवार वा साथीहरूलाई सेयर गर्नुहोस्।',
    'features.f4Title': 'प्रमाणित चालक तथा यात्रु',
    'features.f4Desc': 'सबै चालकहरूको आधिकारिक लाइसेन्स र कागजात पूर्ण प्रमाणीकरण।',
    'features.f5Title': 'सुरक्षित डिजिटल भुक्तानी',
    'features.f5Desc': 'ईसेवा, खल्ती वा नगद, आफ्नो सहजता अनुसार भुक्तानी गर्नुहोस्।',
    'features.f6Title': 'अग्रिम समय तालिका',
    'features.f6Desc': 'भोलिको महत्त्वपूर्ण यात्रा आजै निश्चित समयमा बुक गर्नुहोस्।',

    // How It Works
    'how.badge': 'सजिलो प्रक्रिया',
    'how.title': 'चार सरल चरणमा गन्तव्य पुग्नुहोस्',
    'how.lead': 'बाटैबाटो एप चलाउन अत्यन्तै सरल र छिटो छ।',
    'how.step1': 'एप डाउनलोड गर्नुहोस्',
    'how.step1Desc': 'गुगल प्ले स्टोरबाट बाटैबाटो इन्स्टल गरी आफ्नो मोबाइल नम्बरले साइन अप गर्नुहोस्।',
    'how.step2': 'गन्तव्य तय गर्नुहोस्',
    'how.step2Desc': 'आफ्नो पिकअप बिन्दु र जानुपर्ने ठाउँ नक्सामा छान्नुहोस्।',
    'how.step3': 'सवारी छान्नुहोस् र यात्रा गर्नुहोस्',
    'how.step3Desc': 'नजिकैको चालकसँग म्याच हुनुहोस् र सुरक्षित यात्रा सुरु गर्नुहोस्।',
    'how.step4': 'सहज भुक्तानी गर्नुहोस्',
    'how.step4Desc': 'डिजिटल वालेट वा नगदबाट भाडा तिर्नुहोस् र आफ्नो अनुभव मूल्याङ्कन गर्नुहोस्।',

    // Testimonials
    'test.badge': 'प्रयोगकर्ताको आवाज',
    'test.title': 'सिन्धुलीका बासिन्दा के भन्छन्?',
    'test.lead': 'दैनिक यात्रु र चालक साथीहरूको वास्तविक अनुभव।',

    // CTA
    'cta.title': 'आजै बाटैबाटो परिवारमा जोडिनुहोस्',
    'cta.lead': 'सिन्धुलीको सडकबाट सुरु भएको यात्रामा सहयात्री बन्नुहोस्। एप डाउनलोड गर्नुहोस् र नयाँ अनुभव लिनुहोस्।',
    'cta.button': 'गुगल प्ले स्टोरबाट डाउनलोड गर्नुहोस्',

    // Footer
    'footer.tagline': 'नेपालको आफ्नै समुदायमा आधारित राइड सेयरिङ प्लेटफर्म, सिन्धुलीबाट सुरु।',
    'footer.pages': 'मुख्य पृष्ठहरू',
    'footer.legal': 'कानुनी तथा नीति',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवाका सर्तहरू',
    'footer.contactUs': 'सम्पर्क ठेगाना',
    'footer.address': 'कमलामाई, सिन्धुली, बागमती प्रदेश, नेपाल',
    'footer.rights': 'सर्वाधिकार सुरक्षित। बाटैबाटो २०२६।',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.about': 'About Us',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.download': 'Download',
    'nav.getApp': 'Get the App',

    // Hero
    'hero.badge': 'Started in Sindhuli, Growing Across Nepal',
    'hero.titleStart': 'Share the Ride,',
    'hero.titleEnd': 'Share the Journey',
    'hero.lead': 'BataiBato is Nepal’s community driven ride sharing platform. Born in Sindhuli to provide reliable daily transit, fair fare splitting, and safer journeys for everyone.',
    'hero.ctaPlay': 'Get it on Google Play',
    'hero.ctaExplore': 'Explore Features',
    'hero.stat1': '10,000+',
    'hero.stat1Label': 'Completed Rides',
    'hero.stat2': '5,000+',
    'hero.stat2Label': 'Active Commuters',
    'hero.stat3': '4 Fleet Types',
    'hero.stat3Label': 'Vehicle Choices',
    'hero.stat4': '24/7',
    'hero.stat4Label': 'Local Support',

    // Vehicles Showcase
    'vehicles.badge': 'Vehicle Choices',
    'vehicles.title': 'Choose Your Ride for Any Route',
    'vehicles.lead': 'From quick motorbike rides to eco friendly electric autos, petrol rickshaws, and comfortable cars, choose what suits your journey.',
    'vehicles.motorcycle': 'Bike (Motorcycle)',
    'vehicles.motorcycleDesc': 'Fast, agile, and cost effective for solo city commutes.',
    'vehicles.electricAuto': 'Electric Auto (E-Rickshaw)',
    'vehicles.electricAutoDesc': 'Eco friendly battery powered ride, quiet and comfortable for town travel.',
    'vehicles.petrolAuto': 'Petrol Auto Rickshaw',
    'vehicles.petrolAutoDesc': 'Dependable 3-wheeler for family errands, luggage, and regional routes.',
    'vehicles.car': 'Car (Cab)',
    'vehicles.carDesc': 'Spacious and comfortable option for group travels and longer routes.',

    // Features Section
    'features.badge': 'Platform Highlights',
    'features.title': 'Why Choose BataiBato?',
    'features.lead': 'Engineered specifically for Nepal’s roads, local communities, and everyday commuting needs.',
    'features.f1Title': 'Instant Ride Matching',
    'features.f1Desc': 'Connects you with nearby verified drivers within seconds using intelligent geolocation.',
    'features.f2Title': 'Transparent Local Fares',
    'features.f2Desc': 'Upfront pricing with no hidden charges, calibrated fairly in Nepalese Rupees.',
    'features.f3Title': 'Live Route Tracking',
    'features.f3Desc': 'Real time GPS positioning with direct shareable links for family and friend safety.',
    'features.f4Title': 'Verified Drivers and Riders',
    'features.f4Desc': 'Rigorous verification of government driving licenses, blue books, and identities.',
    'features.f5Title': 'Flexible Payment Options',
    'features.f5Desc': 'Seamless payments through eSewa, Khalti, direct mobile banking, or cash on arrival.',
    'features.f6Title': 'Scheduled Bookings',
    'features.f6Desc': 'Set your morning trip or travel itinerary ahead of time with scheduled rides.',

    // How It Works
    'how.badge': 'Simple Steps',
    'how.title': 'Reach Your Destination in Four Steps',
    'how.lead': 'Getting around Sindhuli and nearby towns is simple with BataiBato.',
    'how.step1': 'Download the App',
    'how.step1Desc': 'Install BataiBato from the Google Play Store and sign up with your mobile number.',
    'how.step2': 'Set Your Route',
    'how.step2Desc': 'Select your current pickup location and drop off point on the interactive map.',
    'how.step3': 'Match and Ride',
    'how.step3Desc': 'Confirm your preferred vehicle type and meet your driver at the pickup point.',
    'how.step4': 'Pay and Review',
    'how.step4Desc': 'Settle the fare with digital wallets or cash, then rate your travel experience.',

    // Testimonials
    'test.badge': 'Community Stories',
    'test.title': 'What Sindhuli Commuters Say',
    'test.lead': 'Real thoughts from daily riders, students, and driver partners.',

    // CTA
    'cta.title': 'Ready to Experience Better Travel?',
    'cta.lead': 'Join thousands of riders in Sindhuli making daily commutes easier and more affordable.',
    'cta.button': 'Download on Google Play',

    // Footer
    'footer.tagline': 'Nepal’s community driven ride sharing platform, starting from Sindhuli.',
    'footer.pages': 'Quick Navigation',
    'footer.legal': 'Legal and Policies',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contactUs': 'Get in Touch',
    'footer.address': 'Kamalamai, Sindhuli, Bagmati Province, Nepal',
    'footer.rights': 'All rights reserved. BataiBato 2026.',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.replace(/^\/en/, '').replace(/\/+$/, '') || '/';
  if (lang === defaultLang) {
    return cleanPath;
  }
  return cleanPath === '/' ? '/en' : `/en${cleanPath}`;
}
