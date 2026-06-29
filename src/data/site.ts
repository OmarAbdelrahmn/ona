export type Locale = "ar" | "en";

export type IconName =
  | "snowflake"
  | "phone"
  | "whatsapp"
  | "mail"
  | "map"
  | "clock"
  | "wrench"
  | "shield"
  | "badge"
  | "fan"
  | "wind"
  | "building"
  | "lightbulb"
  | "droplets"
  | "gauge"
  | "zap"
  | "clipboard"
  | "check"
  | "thermometer"
  | "settings"
  | "star"
  | "users"
  | "timer"
  | "briefcase";

export type NavItem = {
  label: string;
  href: string;
};

export type Card = {
  title: string;
  description: string;
  icon: IconName;
};

export type ImageCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type Stat = {
  value: string;
  label: string;
  note?: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: IconName;
};

export type SiteContent = {
  locale: Locale;
  dir: "rtl" | "ltr";
  langLabel: string;
  altLocale: Locale;
  altHref: string;
  title: string;
  description: string;
  nav: NavItem[];
  header: {
    brandLine: string;
    menuLabel: string;
    navLabel: string;
    whatsapp: string;
    call: string;
  };
  hero: {
    badge: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    image: string;
    imageAlt: string;
  };
  sections: {
    services: { eyebrow: string; title: string; description: string };
    national: { eyebrow: string; title: string; description: string };
    why: { eyebrow: string; title: string; description: string };
    problems: { eyebrow: string; title: string; description: string };
    sectors: { eyebrow: string; title: string; description: string };
    process: { eyebrow: string; title: string; description: string };
    faq: { eyebrow: string; title: string; description: string };
    contact: { eyebrow: string; title: string; description: string };
  };
  stats: Stat[];
  proofPoints: Card[];
  services: Card[];
  imageServices: ImageCard[];
  nationalCoverage: Card[];
  whyCards: Card[];
  problems: Card[];
  sectors: Card[];
  processSteps: Card[];
  faqs: Faq[];
  contactMethods: ContactMethod[];
  fastFollow: { title: string; body: string };
  footerRights: string;
};

export const brand = {
  arName: "شركة أونا للتكييف والكهروميكانيك",
  enName: "Ona HVAC & Electromechanical",
  shortName: "أونا",
  email: "info@ona-cooling.com",
  primaryPhone: "+966508718423",
  secondaryPhone: "+966598350843",
  displayPrimaryPhone: "050 871 8423",
  displaySecondaryPhone: "059 835 0843",
  addressAr: "جميع مناطق المملكة العربية السعودية",
  addressEn: "All regions of Saudi Arabia",
  hoursAr: "استقبال الطلبات يوميا مع جدولة الزيارات حسب المدينة",
  hoursEn: "Daily request intake with visits scheduled by city"
};

export const getWhatsappUrl = (locale: Locale) =>
  `https://wa.me/966508718423?text=${encodeURIComponent(
    locale === "ar"
      ? "مرحبا شركة أونا، أحتاج خدمة تكييف داخل المملكة وأرغب بمعرفة أقرب موعد."
      : "Hello Ona Cooling, I need HVAC service in Saudi Arabia and would like to schedule the nearest visit."
  )}`;

const arNav: NavItem[] = [
  { label: "الرئيسية", href: "/#home" },
  { label: "الخدمات", href: "/services/" },
  { label: "التغطية", href: "/#coverage" },
  { label: "لماذا أونا", href: "/#why" },
  { label: "الأسئلة", href: "/#faq" },
  { label: "تواصل معنا", href: "/#contact" }
];

const enNav: NavItem[] = [
  { label: "Home", href: "/en/#home" },
  { label: "Services", href: "/en/services/" },
  { label: "Coverage", href: "/en/#coverage" },
  { label: "Why Ona", href: "/en/#why" },
  { label: "FAQ", href: "/en/#faq" },
  { label: "Contact", href: "/en/#contact" }
];

export const content: Record<Locale, SiteContent> = {
  ar: {
    locale: "ar",
    dir: "rtl",
    langLabel: "English",
    altLocale: "en",
    altHref: "/en/",
    title: "شركة أونا للتكييف والكهروميكانيك | أنظمة التكييف المركزية",
    description:
      "شركة أونا تقدم خدمات تركيب وصيانة وإصلاح وتنظيف المكيفات للمنازل والمنشآت في جميع مناطق المملكة العربية السعودية.",
    nav: arNav,
    header: {
      brandLine: "للتكييف والكهروميكانيك",
      menuLabel: "فتح القائمة",
      navLabel: "التنقل الرئيسي",
      whatsapp: "واتساب",
      call: "اتصل الآن"
    },
    hero: {
      badge: "توريد وتركيب وصيانة أنظمة التكييف والكهروميكانيك",
      title: "شركة أونا للتكييف والكهروميكانيك",
      body:
        "حلول متكاملة لتوريد وتركيب وصيانة جميع أنظمة المكيفات المركزية والسبليت والكهروميكانيك للمشاريع والمنشآت والمنازل.",
      primary: "اتصل الآن",
      secondary: "احجز عبر واتساب",
      image: "/images/windows-2584213_1280.jpg",
      imageAlt: "واجهة مبنى تحتوي على وحدات تكييف خارجية"
    },
    sections: {
      services: {
        eyebrow: "خدماتنا",
        title: "من الصيانة السريعة إلى عقود التشغيل المتكاملة",
        description:
          "نخدم المنازل، الفلل، المكاتب، المتاجر، والمشاريع التجارية بخدمات تكييف واضحة وقابلة للتوسع."
      },
      national: {
        eyebrow: "تغطية وطنية",
        title: "نخدم جميع مناطق المملكة العربية السعودية",
        description:
          "ننسق الطلب حسب المدينة ونوع الخدمة، ونوجه العميل لأقرب فريق أو موعد متاح لتقليل الانتظار وتحسين جودة التنفيذ."
      },
      why: {
        eyebrow: "لماذا أونا",
        title: "تجربة أكثر احترافية من مجرد زيارة فنية",
        description:
          "نركز على التشخيص، وضوح التكلفة، جودة التنفيذ، والمتابعة بعد الخدمة حتى يحصل العميل على قرار مطمئن."
      },
      problems: {
        eyebrow: "أعطال نعالجها",
        title: "علامات لا تنتظر معها حتى يتوقف المكيف",
        description: "الفحص المبكر غالبا يقلل تكلفة الإصلاح ويحمي القطع الأساسية."
      },
      sectors: {
        eyebrow: "قطاعات نخدمها",
        title: "حلول مناسبة لكل نوع موقع",
        description:
          "تختلف احتياجات التكييف بين المنزل والمنشأة التجارية، لذلك نضبط الخدمة حسب الاستخدام والمساحة والأولوية."
      },
      process: {
        eyebrow: "طريقة العمل",
        title: "خدمة منظمة من أول تواصل",
        description: "خطوات مختصرة تساعد العميل على معرفة ما سيحدث قبل وصول الفني."
      },
      faq: {
        eyebrow: "أسئلة متداولة",
        title: "إجابات سريعة قبل طلب الخدمة",
        description: "أهم الأسئلة المتعلقة بصيانة وتشغيل المكيفات في السعودية."
      },
      contact: {
        eyebrow: "تواصل معنا",
        title: "جاهزون لخدمتك داخل المملكة",
        description: "أرسل تفاصيل المشكلة والمدينة عبر واتساب أو اتصل مباشرة لترتيب الخطوة التالية."
      }
    },
    stats: [
      { value: brand.displayPrimaryPhone, label: "رقم الاتصال الرئيسي", note: "اتصال وواتساب" },
      { value: brand.displaySecondaryPhone, label: "رقم إضافي", note: "للمتابعة والاستفسارات" },
      { value: "24/7", label: "استقبال الطلبات", note: "مع جدولة الزيارات" }
    ],
    proofPoints: [
      { title: "تغطية داخل السعودية", description: "توجيه الطلب حسب المدينة ونوع الخدمة.", icon: "map" },
      { title: "ضمان على الأعمال", description: "تنفيذ موثق وقطع مناسبة ومتابعة بعد الخدمة.", icon: "shield" },
      { title: "أسعار واضحة", description: "شرح المشكلة والتكلفة قبل بدء العمل.", icon: "badge" }
    ],
    services: [
      { title: "توريد وتركيب المكيفات", description: "توريد وتركيب جميع أنواع المكيفات المركزية والسبليت والشباك للمنازل والمشاريع.", icon: "wrench" },
      { title: "الصيانة والإصلاح", description: "تشخيص ضعف التبريد والتسريبات والأصوات والأعطال الكهربائية بدقة.", icon: "settings" },
      { title: "التنظيف والتعقيم", description: "تنظيف الفلاتر والوحدات لتحسين جودة الهواء ورفع كفاءة التشغيل.", icon: "wind" },
      { title: "عقود الصيانة", description: "زيارات دورية للمنازل والمنشآت تقلل الأعطال المفاجئة.", icon: "clipboard" },
      { title: "التكييف المركزي", description: "فحص وصيانة أنظمة التكييف المركزي للمباني السكنية والتجارية.", icon: "building" },
      { title: "أنظمة تحكم ذكية", description: "حلول تحكم تساعد على إدارة التشغيل وتوفير الطاقة وتقليل التكاليف.", icon: "lightbulb" }
    ],
    imageServices: [
      {
        title: "صيانة مكيفات سبليت",
        description: "فحص وتنظيف ومعالجة تسريب وضبط أداء مكيفات السبليت للمنازل والمكاتب.",
        image: "/images/ona-split-cleaning.png",
        alt: "فني ينظف مكيف سبليت داخل منزل سعودي"
      },
      {
        title: "أنظمة مركزية وتجارية",
        description: "فحص غرف المعدات والدكت وأنظمة التبريد المركزية للمنشآت.",
        image: "/images/ona-central-commercial.png",
        alt: "مهندس يفحص نظام تكييف مركزي تجاري"
      },
      {
        title: "خدمات المواقع متعددة الفروع",
        description: "تنسيق صيانة للفروع والمتاجر والمكاتب التي تحتاج متابعة تشغيلية منتظمة.",
        image: "/images/pipes-4161383_1280.jpg",
        alt: "أنابيب وتجهيزات نظام تكييف مركزي"
      }
    ],
    nationalCoverage: [
      { title: "الرياض والوسطى", description: "خدمات للمنازل والمنشآت والمكاتب مع جدولة واضحة.", icon: "building" },
      { title: "جدة ومكة والمدينة", description: "صيانة وتركيب وتنظيف للمكيفات في المنطقة الغربية.", icon: "map" },
      { title: "الشرقية والجنوب والشمال", description: "استقبال الطلبات وتنسيق الزيارة حسب المدينة والتوفر.", icon: "briefcase" }
    ],
    whyCards: [
      { title: "فريق متخصص", description: "خبرة في السبليت والشباك والمركزي وأنظمة المنشآت.", icon: "users" },
      { title: "قرار واضح", description: "تشخيص وشرح للحل قبل التنفيذ حتى يعرف العميل ما يدفعه.", icon: "check" },
      { title: "متابعة بعد الخدمة", description: "إرشادات تشغيل وتنظيف تساعد على استمرار الأداء.", icon: "star" },
      { title: "تنسيق احترافي", description: "معلومات الطلب تحفظ الوقت وتسرع الوصول للحل.", icon: "timer" }
    ],
    problems: [
      { title: "تسرب الماء", description: "تنظيف التصريف وفحص الميل والعزل لمنع تكرار التسريب.", icon: "droplets" },
      { title: "ضعف التبريد", description: "فحص الفلاتر والمكثف والكمبروسر ومستوى الغاز.", icon: "thermometer" },
      { title: "تسرب غاز التبريد", description: "كشف التسريب وفحص الضغط وإعادة الشحن حسب الحاجة.", icon: "gauge" },
      { title: "أصوات مزعجة", description: "معالجة الاهتزاز ومشاكل المروحة والتثبيت.", icon: "fan" },
      { title: "استهلاك مرتفع", description: "تحسين التشغيل وتنظيف الأجزاء المؤثرة على الكفاءة.", icon: "zap" },
      { title: "تعطل متكرر", description: "تشخيص جذري بدلا من حلول مؤقتة.", icon: "settings" }
    ],
    sectors: [
      { title: "فلل ومنازل", description: "راحة يومية، هواء أنظف، وصيانة قبل موسم الحر.", icon: "snowflake" },
      { title: "شركات ومكاتب", description: "تقليل توقف العمل وتحسين بيئة الموظفين والعملاء.", icon: "briefcase" },
      { title: "مدارس ومستشفيات", description: "حلول تشغيل وصيانة للمواقع التي تحتاج اعتمادا عاليا.", icon: "shield" },
      { title: "مستودعات ومنشآت", description: "تكييف وتشغيل للمساحات الكبيرة والبيئات العملية.", icon: "building" },
      { title: "فنادق ومشاريع", description: "حلول مركزية متكاملة للمشاريع والمنشآت متعددة المناطق.", icon: "star" },
      { title: "متاجر ومطاعم", description: "استجابة عملية للمواقع التي تعتمد على التبريد المستمر.", icon: "fan" }
    ],
    processSteps: [
      { title: "استقبال الطلب", description: "نستلم المدينة ونوع المكيف والمشكلة عبر الاتصال أو واتساب.", icon: "phone" },
      { title: "تحديد المسار", description: "نحدد هل الخدمة تحتاج زيارة، استشارة، أو عقد صيانة.", icon: "clipboard" },
      { title: "تنفيذ ومتابعة", description: "تتم الخدمة مع اختبار التشغيل وإرشادات للحفاظ على الأداء.", icon: "shield" }
    ],
    faqs: [
      { question: "هل تخدم أونا جميع مناطق السعودية؟", answer: "نعم، نستقبل الطلبات من جميع مناطق المملكة وننسق الخطوة التالية حسب المدينة ونوع الخدمة والتوفر." },
      { question: "كيف يمكنني زيادة كفاءة استخدام الطاقة؟", answer: "نظف الفلاتر دوريا، اضبط الحرارة بين 24 و26 درجة، وأجر الصيانة قبل موسم الصيف." },
      { question: "ما علامات الحاجة إلى صيانة؟", answer: "ضعف التبريد، روائح غير مريحة، أصوات غير طبيعية، تسرب مياه، أو ارتفاع فاتورة الكهرباء." },
      { question: "هل تقدمون عقود صيانة؟", answer: "نعم، نقدم خططا دورية للمنازل والمنشآت والفروع حسب عدد الأجهزة ونوع النظام." },
      { question: "هل يمكن طلب الخدمة عبر واتساب؟", answer: "نعم، أرسل المدينة، نوع المكيف، وصف المشكلة، وصورة للجهاز إن أمكن." }
    ],
    contactMethods: [
      { label: "اتصال مباشر", value: brand.displayPrimaryPhone, href: `tel:${brand.primaryPhone}`, icon: "phone" },
      { label: "واتساب", value: brand.displayPrimaryPhone, href: getWhatsappUrl("ar"), icon: "whatsapp" },
      { label: "البريد الإلكتروني", value: brand.email, href: `mailto:${brand.email}`, icon: "mail" },
      { label: "نطاق الخدمة", value: brand.addressAr, href: "#coverage", icon: "map" }
    ],
    fastFollow: {
      title: "لأسرع متابعة",
      body: "أرسل المدينة، نوع المكيف، وصف المشكلة، وصورة للجهاز إن أمكن. سنساعدك في ترتيب الموعد المناسب."
    },
    footerRights: "جميع الحقوق محفوظة"
  },
  en: {
    locale: "en",
    dir: "ltr",
    langLabel: "العربية",
    altLocale: "ar",
    altHref: "/",
    title: "Ona HVAC & Electromechanical | Central AC Systems Saudi Arabia",
    description:
      "Ona Cooling provides AC installation, maintenance, repair, cleaning, and service contracts for homes and businesses across Saudi Arabia.",
    nav: enNav,
    header: {
      brandLine: "HVAC & Electromechanical",
      menuLabel: "Open menu",
      navLabel: "Main navigation",
      whatsapp: "WhatsApp",
      call: "Call now"
    },
    hero: {
      badge: "Supply, installation, and maintenance for HVAC systems",
      title: "Ona HVAC & Electromechanical",
      body:
        "Integrated supply, installation, and maintenance solutions for central AC, split units, and electromechanical systems across homes, facilities, and commercial projects.",
      primary: "Call now",
      secondary: "Book on WhatsApp",
      image: "/images/windows-2584213_1280.jpg",
      imageAlt: "Building facade with multiple outdoor air conditioning units"
    },
    sections: {
      services: {
        eyebrow: "Services",
        title: "From quick repairs to complete maintenance programs",
        description:
          "We support homes, villas, offices, retail spaces, and commercial sites with scalable HVAC services."
      },
      national: {
        eyebrow: "National coverage",
        title: "Serving all regions of Saudi Arabia",
        description:
          "Requests are coordinated by city and service type, helping customers reach the right team or next available appointment."
      },
      why: {
        eyebrow: "Why Ona",
        title: "A more professional experience than a simple service visit",
        description:
          "We focus on diagnosis, cost clarity, clean execution, and after-service guidance so customers can make confident decisions."
      },
      problems: {
        eyebrow: "Issues we solve",
        title: "Warning signs you should not ignore",
        description: "Early inspection often reduces repair cost and protects major AC components."
      },
      sectors: {
        eyebrow: "Sectors",
        title: "HVAC support tailored to each site type",
        description: "Homes, offices, and commercial locations need different service priorities."
      },
      process: {
        eyebrow: "Process",
        title: "Organized service from the first contact",
        description: "A clear workflow helps customers know what happens before the technician arrives."
      },
      faq: {
        eyebrow: "FAQ",
        title: "Quick answers before booking",
        description: "Common questions about AC service and maintenance in Saudi Arabia."
      },
      contact: {
        eyebrow: "Contact",
        title: "Ready to serve you across KSA",
        description: "Send your city and AC issue on WhatsApp or call directly for the next step."
      }
    },
    stats: [
      { value: brand.displayPrimaryPhone, label: "Primary phone", note: "Call and WhatsApp" },
      { value: brand.displaySecondaryPhone, label: "Secondary phone", note: "Follow-up and inquiries" },
      { value: "24/7", label: "Request intake", note: "Visits scheduled by city" }
    ],
    proofPoints: [
      { title: "Saudi-wide coverage", description: "Requests routed by city and service type.", icon: "map" },
      { title: "Work warranty", description: "Documented service, suitable parts, and follow-up.", icon: "shield" },
      { title: "Clear pricing", description: "Issue and cost explained before work starts.", icon: "badge" }
    ],
    services: [
      { title: "AC supply and installation", description: "Supply and installation for central, split, window, and commercial AC systems.", icon: "wrench" },
      { title: "Maintenance and repair", description: "Diagnosis of weak cooling, leaks, noise, and electrical faults.", icon: "settings" },
      { title: "Cleaning and sanitizing", description: "Filter and unit cleaning to improve airflow and operating efficiency.", icon: "wind" },
      { title: "Maintenance contracts", description: "Scheduled visits for homes, offices, branches, and facilities.", icon: "clipboard" },
      { title: "Central HVAC", description: "Inspection and maintenance for central HVAC systems and ductwork.", icon: "building" },
      { title: "Smart control systems", description: "Control solutions that help manage operation, save energy, and reduce cost.", icon: "lightbulb" }
    ],
    imageServices: [
      {
        title: "Split AC maintenance",
        description: "Inspection, cleaning, leak handling, and performance tuning for homes and offices.",
        image: "/images/ona-split-cleaning.png",
        alt: "Technician cleaning a split AC unit in a Saudi home"
      },
      {
        title: "Central and commercial systems",
        description: "Mechanical rooms, ducts, central units, and technical inspection for facilities.",
        image: "/images/ona-central-commercial.png",
        alt: "Engineer inspecting a commercial central HVAC system"
      },
      {
        title: "Multi-site support",
        description: "Coordinated maintenance for branches, stores, offices, and operating sites.",
        image: "/images/pipes-4161383_1280.jpg",
        alt: "Central HVAC pipes and equipment"
      }
    ],
    nationalCoverage: [
      { title: "Riyadh and Central Region", description: "Home, office, and facility services with clear scheduling.", icon: "building" },
      { title: "Jeddah, Makkah, Madinah", description: "Installation, cleaning, and maintenance across the Western Region.", icon: "map" },
      { title: "Eastern, Southern, Northern KSA", description: "Request intake and visit coordination by city availability.", icon: "briefcase" }
    ],
    whyCards: [
      { title: "Specialized team", description: "Experience across split, window, central, and commercial systems.", icon: "users" },
      { title: "Clear decision", description: "Diagnosis and solution explained before implementation.", icon: "check" },
      { title: "After-service guidance", description: "Care instructions that help maintain performance.", icon: "star" },
      { title: "Professional coordination", description: "Better request details mean faster service decisions.", icon: "timer" }
    ],
    problems: [
      { title: "Water leakage", description: "Drain cleaning and insulation checks to reduce recurrence.", icon: "droplets" },
      { title: "Weak cooling", description: "Filters, condenser, compressor, and refrigerant levels checked.", icon: "thermometer" },
      { title: "Refrigerant leaks", description: "Leak detection, pressure testing, and recharge if required.", icon: "gauge" },
      { title: "Unusual noise", description: "Fan, vibration, and mounting issues inspected.", icon: "fan" },
      { title: "High energy use", description: "Cleaning and tuning parts that affect efficiency.", icon: "zap" },
      { title: "Repeated breakdowns", description: "Root-cause diagnosis instead of temporary fixes.", icon: "settings" }
    ],
    sectors: [
      { title: "Homes and villas", description: "Daily comfort, cleaner air, and pre-summer maintenance.", icon: "snowflake" },
      { title: "Offices and companies", description: "Less downtime and better environments for teams and clients.", icon: "briefcase" },
      { title: "Schools and hospitals", description: "Reliable service for sites that need stable operation.", icon: "shield" },
      { title: "Warehouses and facilities", description: "Cooling and service support for larger operational spaces.", icon: "building" },
      { title: "Hotels and projects", description: "Integrated central HVAC solutions for multi-zone properties.", icon: "star" },
      { title: "Restaurants and retail", description: "Practical response for locations that depend on continuous cooling.", icon: "fan" }
    ],
    processSteps: [
      { title: "Request intake", description: "We receive the city, AC type, and issue by phone or WhatsApp.", icon: "phone" },
      { title: "Service path", description: "We determine whether the case needs a visit, consultation, or contract.", icon: "clipboard" },
      { title: "Execution and follow-up", description: "Service is completed with testing and care guidance.", icon: "shield" }
    ],
    faqs: [
      { question: "Does Ona serve all regions of Saudi Arabia?", answer: "Yes. We receive requests from across KSA and coordinate the next step based on city, service type, and availability." },
      { question: "How can I improve AC energy efficiency?", answer: "Clean filters regularly, set temperature between 24 and 26 degrees, and schedule maintenance before peak summer." },
      { question: "What are signs my AC needs service?", answer: "Weak cooling, unpleasant smells, unusual noises, water leakage, or a noticeable increase in electricity usage." },
      { question: "Do you offer maintenance contracts?", answer: "Yes. We provide periodic plans for homes, offices, facilities, and branches based on unit count and system type." },
      { question: "Can I book on WhatsApp?", answer: "Yes. Send your city, AC type, issue description, and a photo of the unit if possible." }
    ],
    contactMethods: [
      { label: "Direct call", value: brand.displayPrimaryPhone, href: `tel:${brand.primaryPhone}`, icon: "phone" },
      { label: "WhatsApp", value: brand.displayPrimaryPhone, href: getWhatsappUrl("en"), icon: "whatsapp" },
      { label: "Email", value: brand.email, href: `mailto:${brand.email}`, icon: "mail" },
      { label: "Service coverage", value: brand.addressEn, href: "#coverage", icon: "map" }
    ],
    fastFollow: {
      title: "For faster follow-up",
      body: "Send your city, AC type, issue description, and a photo of the unit if possible. We will help coordinate the right next step."
    },
    footerRights: "All rights reserved"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness"],
  name: brand.arName,
  alternateName: brand.enName,
  description:
    "شركة أونا للتكييف والكهروميكانيك تقدم حلول توريد وتركيب وصيانة أنظمة المكيفات المركزية والسبليت والكهروميكانيك للمنازل والمنشآت في المملكة العربية السعودية.",
  email: brand.email,
  telephone: brand.primaryPhone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA"
  },
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia"
  },
  openingHours: "Mo-Su 00:00-23:59",
  image: "/images/ona-hero-hvac-ksa.png",
  priceRange: "$$",
  makesOffer: content.ar.services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description
    }
  }))
};
