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

export type TeamSpotlight = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  bullets: string[];
};

export type SiteContent = {
  locale: Locale;
  dir: "rtl" | "ltr";
  langLabel: string;
  altLocale: Locale;
  altHref: string;
  title: string;
  description: string;
  socialImage: string;
  socialImageAlt: string;
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
    projects: { eyebrow: string; title: string; description: string };
    commercial: { eyebrow: string; title: string; description: string };
    national: { eyebrow: string; title: string; description: string };
    why: { eyebrow: string; title: string; description: string };
    team: { eyebrow: string; title: string; description: string };
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
  projectPhotos: ImageCard[];
  commercialBrands: string[];
  commercialCapabilities: Card[];
  teamSpotlight: TeamSpotlight;
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
  { label: "أعمالنا", href: "/#projects" },
  { label: "التغطية", href: "/#coverage" },
  { label: "لماذا أونا", href: "/#why" },
  { label: "تواصل معنا", href: "/#contact" }
];

const enNav: NavItem[] = [
  { label: "Home", href: "/en/#home" },
  { label: "Services", href: "/en/services/" },
  { label: "Projects", href: "/en/#projects" },
  { label: "Coverage", href: "/en/#coverage" },
  { label: "Why Ona", href: "/en/#why" },
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
      "شركة أونا للتكييف والكهروميكانيك تقدم خدمات تركيب وصيانة وإصلاح وتنظيف المكيفات والعقود والتكييف المركزي في جميع مناطق المملكة العربية السعودية.",
    socialImage: "/images/projects/large-air-handling-unit.jpeg",
    socialImageAlt: "شركة أونا للتكييف والكهروميكانيك - حلول تكييف مركزي وتجاري في السعودية",
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
        "حلول متكاملة لتوريد وتركيب وصيانة أنظمة التكييف المركزية الكبيرة والسبليت والكهروميكانيك للمشاريع والمنشآت والمنازل.",
      primary: "اتصل الآن",
      secondary: "احجز عبر واتساب",
      image: "/images/projects/large-air-handling-unit.jpeg",
      imageAlt: "وحدة تكييف مركزية كبيرة على سطح مبنى"
    },
    sections: {
      services: {
        eyebrow: "خدماتنا",
        title: "من الصيانة السريعة إلى عقود التشغيل المتكاملة",
        description:
          "نخدم المنازل، الفلل، المكاتب، المتاجر، والمشاريع التجارية بخدمات تكييف واضحة وقابلة للتوسع."
      },
      projects: {
        eyebrow: "أعمالنا السابقة",
        title: "صور من مواقع فعلية لأنظمة مركزية ودكت ووحدات كبيرة",
        description:
          "نماذج من أعمال الفحص والتركيب والصيانة لأنظمة التكييف المركزي، الدكت، غرف المعدات، والوحدات التجارية في مواقع مختلفة."
      },
      commercial: {
        eyebrow: "حلول للشركات والموردين",
        title: "جاهزون للتعامل مع المشاريع الكبيرة وموردي الأنظمة العالمية",
        description:
          "ندعم وحدات التكييف المركزية الكبيرة، أنظمة VRF/VRV، الدكت، الشيلرات، وحدات مناولة الهواء، ومواقع التشغيل التي تحتاج تنسيقا فنيا منظما."
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
      team: {
        eyebrow: "فريق العمل",
        title: "فريق ميداني يعرف متطلبات المواقع الكبيرة",
        description:
          "مهندسون و فنيون يتعاملون مع إجراءات الموقع، السلامة، الفحص، وتوثيق الأعمال بصورة مناسبة للشركات والمشاريع."
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
      { title: "توريد وتركيب المكيفات", description: "توريد وتركيب جميع أنواع المكيفات المركزية الكبيرة والسبليت والشباك للمنازل والمشاريع.", icon: "wrench" },
      { title: "الصيانة والإصلاح", description: "تشخيص ضعف التبريد والتسريبات والأصوات والأعطال الكهربائية بدقة.", icon: "settings" },
      { title: "التنظيف والتعقيم", description: "تنظيف الفلاتر والوحدات لتحسين جودة الهواء ورفع كفاءة التشغيل.", icon: "wind" },
      { title: "عقود الصيانة", description: "زيارات دورية للمنازل والمنشآت تقلل الأعطال المفاجئة.", icon: "clipboard" },
      { title: "التكييف المركزي", description: "فحص وصيانة وحدات مناولة الهواء والدكت والشيلرات والأنظمة المركزية للمباني التجارية.", icon: "building" },
      { title: "أنظمة تحكم ذكية", description: "حلول تحكم تساعد على إدارة التشغيل وتوفير الطاقة وتقليل التكاليف.", icon: "lightbulb" }
    ],
    imageServices: [
      {
        title: "وحدات مركزية كبيرة",
        description: "توريد وتركيب وفحص وحدات مناولة الهواء والوحدات التجارية على الأسطح والمواقع التشغيلية.",
        image: "/images/projects/large-air-handling-unit.jpeg",
        alt: "وحدة تكييف مركزية كبيرة على سطح مبنى"
      },
      {
        title: "غرف المعدات والشيلرات",
        description: "فحص الضواغط والضغوط وأنظمة التحكم للمواقع التي تحتاج تشغيل مستقر.",
        image: "/images/projects/chiller-compressor-service.jpeg",
        alt: "ضاغط شيلر ضمن نظام تكييف مركزي"
      },
      {
        title: "دكت وتمديدات ميكانيكية",
        description: "تنفيذ وربط الدكت والفتحات والتمديدات بما يناسب متطلبات المبنى.",
        image: "/images/projects/mechanical-room-piping.jpeg",
        alt: "تمديدات دكت وأنابيب داخل غرفة ميكانيكية"
      }
    ],
    projectPhotos: [
      { title: "وحدة تكييف مركزية", description: "تركيب وفحص وحدات كبيرة للمباني التجارية.", image: "/images/projects/large-air-handling-unit.jpeg", alt: "وحدة تكييف مركزية كبيرة على سطح مبنى" },
      { title: "صيانة محطة تبريد", description: "فحص منظومة تشغيل مركزية ومعدات تحكم.", image: "/images/projects/central-plant-maintenance.jpeg", alt: "فني يفحص محطة تكييف مركزية" },
      { title: "ضاغط شيلر", description: "تشخيص ضغوط ودوائر تبريد للأنظمة الكبيرة.", image: "/images/projects/chiller-compressor-service.jpeg", alt: "ضاغط شيلر ضمن وحدة تكييف مركزية" },
      { title: "مروحة صناعية", description: "فحص مراوح وتهوية لأنظمة سحب وضخ الهواء.", image: "/images/projects/industrial-exhaust-fan.jpeg", alt: "مروحة صناعية كبيرة ضمن نظام تكييف" },
      { title: "تركيب VRF على السطح", description: "أعمال مواسير نحاس وربط وحدات خارجية.", image: "/images/projects/vrf-rooftop-installation.jpeg", alt: "فنيون يعملون على وحدات VRF فوق سطح مبنى" },
      { title: "تمديدات ميكانيكية", description: "تنظيم دكت وأنابيب وحوامل داخل غرف الخدمات.", image: "/images/projects/mechanical-room-piping.jpeg", alt: "تمديدات ميكانيكية ودكت داخل غرفة خدمات" },
      { title: "دكت مواقف", description: "تمديد دكت هواء وفتحات تهوية في مواقف داخلية.", image: "/images/projects/basement-ductwork.jpeg", alt: "دكت هواء داخل موقف سيارات" },
      { title: "توازن مخارج الهواء", description: "فحص الدفيوزر وتوازن تدفق الهواء الداخلي.", image: "/images/projects/diffuser-balancing.jpeg", alt: "فني على سقالة يفحص مخارج تكييف سقفية" },
      { title: "تصنيع وتركيب دكت", description: "تجهيز وربط دكت مجلفن للممرات والمواقع الضيقة.", image: "/images/projects/duct-fabrication-installation.jpeg", alt: "دكت معدني مجلفن في ممر خارجي" },
      { title: "تشخيص وحدة سطح", description: "قياس ضغوط وفحص وحدة تبريد خارجية كبيرة.", image: "/images/projects/rooftop-chiller-diagnostics.jpeg", alt: "فني يقيس ضغط وحدة تكييف خارجية" },
      { title: "دكت هواء مركزي", description: "تجهيز مجرى هواء وربطه مع نظام مركزي.", image: "/images/projects/central-fresh-air-duct.jpeg", alt: "دكت هواء معدني لوحدة تكييف مركزية" },
      { title: "تكييف مخفي داخلي", description: "تنفيذ فتحة تكييف خطية ضمن تشطيب داخلي.", image: "/images/projects/concealed-kitchen-ac.jpeg", alt: "فتحة تكييف مخفي داخل مطبخ حديث" }
    ],
    commercialBrands: ["Carrier", "Daikin", "Trane", "Lennox"],
    commercialCapabilities: [
      { title: "وحدات مركزية كبيرة", description: "تعامل مع وحدات مناولة الهواء، وحدات الأسطح، والشيلرات حسب متطلبات المشروع.", icon: "building" },
      { title: "تنسيق مع الموردين", description: "فهم فني لمتطلبات العلامات العالمية واحتياجات التوريد والتركيب والفحص.", icon: "briefcase" },
      { title: "تشغيل وصيانة", description: "فحص ضغط، تحكم، تدفق هواء، دكت، ومتابعة أداء للمواقع الحساسة.", icon: "gauge" }
    ],
    teamSpotlight: {
      eyebrow: "فريق أونا",
      title: "فريق جاهز للمواقع التجارية والمشاريع",
      description:
        "نرتب العمل ميدانيا من الفحص إلى التسليم، مع اهتمام بالسلامة، نظافة الموقع، وتوثيق الملاحظات الفنية.",
      image: "/images/projects/ona-team-site.jpeg",
      alt: "فريق أونا في موقع عمل يرتدي ستر السلامة",
      bullets: ["إشراف فني على أعمال الدكت والوحدات المركزية", "تنسيق مناسب مع الشركات والموردين", "فحص وتشغيل قبل تسليم العمل"]
    },
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
      "Ona HVAC & Electromechanical provides AC installation, maintenance, repair, cleaning, contracts, and central HVAC services across Saudi Arabia.",
    socialImage: "/images/projects/large-air-handling-unit.jpeg",
    socialImageAlt: "Ona HVAC & Electromechanical - central HVAC and commercial cooling in Saudi Arabia",
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
        "Integrated supply, installation, and maintenance solutions for large central AC units, split systems, and electromechanical work across homes, facilities, and commercial projects.",
      primary: "Call now",
      secondary: "Book on WhatsApp",
      image: "/images/projects/large-air-handling-unit.jpeg",
      imageAlt: "Large central air handling unit on a building rooftop"
    },
    sections: {
      services: {
        eyebrow: "Services",
        title: "From quick repairs to complete maintenance programs",
        description:
          "We support homes, villas, offices, retail spaces, and commercial sites with scalable HVAC services."
      },
      projects: {
        eyebrow: "Previous work",
        title: "Real site photos from central HVAC, duct, and large-unit work",
        description:
          "A selection of inspection, installation, and maintenance work across central HVAC systems, ducts, mechanical rooms, and commercial units."
      },
      commercial: {
        eyebrow: "For companies and suppliers",
        title: "Ready for large projects and global HVAC supplier requirements",
        description:
          "We support large central AC units, VRF/VRV systems, ductwork, chillers, air handling units, and operating sites that need organized technical coordination."
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
      team: {
        eyebrow: "Team",
        title: "Field team familiar with large-site requirements",
        description:
          "Technicians and supervisors who handle site procedures, safety, inspection, and work documentation in a way that suits companies and projects."
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
      { title: "AC supply and installation", description: "Supply and installation for large central, split, window, and commercial AC systems.", icon: "wrench" },
      { title: "Maintenance and repair", description: "Diagnosis of weak cooling, leaks, noise, and electrical faults.", icon: "settings" },
      { title: "Cleaning and sanitizing", description: "Filter and unit cleaning to improve airflow and operating efficiency.", icon: "wind" },
      { title: "Maintenance contracts", description: "Scheduled visits for homes, offices, branches, and facilities.", icon: "clipboard" },
      { title: "Central HVAC", description: "Inspection and maintenance for AHUs, ductwork, chillers, and central systems in commercial buildings.", icon: "building" },
      { title: "Smart control systems", description: "Control solutions that help manage operation, save energy, and reduce cost.", icon: "lightbulb" }
    ],
    imageServices: [
      {
        title: "Large central units",
        description: "Supply, installation, and inspection for AHUs and commercial rooftop systems.",
        image: "/images/projects/large-air-handling-unit.jpeg",
        alt: "Large central air handling unit on a building rooftop"
      },
      {
        title: "Chillers and plant rooms",
        description: "Compressor, pressure, and control checks for sites that need stable operation.",
        image: "/images/projects/chiller-compressor-service.jpeg",
        alt: "Chiller compressor inside a central HVAC system"
      },
      {
        title: "Duct and mechanical works",
        description: "Duct, diffuser, piping, and support installation matched to building needs.",
        image: "/images/projects/mechanical-room-piping.jpeg",
        alt: "Ductwork and piping inside a mechanical room"
      }
    ],
    projectPhotos: [
      { title: "Central AC unit", description: "Installation and inspection for large commercial units.", image: "/images/projects/large-air-handling-unit.jpeg", alt: "Large central air handling unit on a building rooftop" },
      { title: "Cooling plant service", description: "Central operation and control equipment inspection.", image: "/images/projects/central-plant-maintenance.jpeg", alt: "Technician inspecting a central HVAC plant" },
      { title: "Chiller compressor", description: "Pressure diagnosis and cooling-circuit service for large systems.", image: "/images/projects/chiller-compressor-service.jpeg", alt: "Chiller compressor inside a central HVAC unit" },
      { title: "Industrial fan", description: "Fan and ventilation inspection for air movement systems.", image: "/images/projects/industrial-exhaust-fan.jpeg", alt: "Large industrial fan in an HVAC system" },
      { title: "Rooftop VRF installation", description: "Copper piping and outdoor unit connection work.", image: "/images/projects/vrf-rooftop-installation.jpeg", alt: "Technicians working on rooftop VRF units" },
      { title: "Mechanical piping", description: "Duct, pipe, and support coordination in service rooms.", image: "/images/projects/mechanical-room-piping.jpeg", alt: "Mechanical piping and ductwork in a service room" },
      { title: "Basement ductwork", description: "Air duct and ventilation outlet work in indoor parking areas.", image: "/images/projects/basement-ductwork.jpeg", alt: "Air ductwork in a parking basement" },
      { title: "Air diffuser balancing", description: "Diffuser inspection and indoor airflow balancing.", image: "/images/projects/diffuser-balancing.jpeg", alt: "Technician on scaffolding checking ceiling air diffusers" },
      { title: "Duct fabrication", description: "Galvanized duct preparation and installation in tight corridors.", image: "/images/projects/duct-fabrication-installation.jpeg", alt: "Galvanized ductwork in an outdoor corridor" },
      { title: "Rooftop diagnostics", description: "Pressure checks and diagnostics for large outdoor units.", image: "/images/projects/rooftop-chiller-diagnostics.jpeg", alt: "Technician measuring pressure on a large outdoor AC unit" },
      { title: "Fresh air duct", description: "Duct preparation and connection for central airflow.", image: "/images/projects/central-fresh-air-duct.jpeg", alt: "Metal air duct connected to a central AC unit" },
      { title: "Concealed indoor AC", description: "Linear grille finishing for concealed indoor air conditioning.", image: "/images/projects/concealed-kitchen-ac.jpeg", alt: "Concealed linear AC grille in a modern kitchen" }
    ],
    commercialBrands: ["Carrier", "Daikin", "Trane", "Lennox"],
    commercialCapabilities: [
      { title: "Large central units", description: "AHUs, rooftop units, and chillers handled according to project requirements.", icon: "building" },
      { title: "Supplier coordination", description: "Technical understanding of global-brand requirements for supply, installation, and inspection.", icon: "briefcase" },
      { title: "Operation and maintenance", description: "Pressure, controls, airflow, ductwork, and performance follow-up for critical sites.", icon: "gauge" }
    ],
    teamSpotlight: {
      eyebrow: "Ona team",
      title: "A field team ready for commercial sites and projects",
      description:
        "We coordinate the work on site from inspection to handover, with attention to safety, site cleanliness, and technical notes.",
      image: "/images/projects/ona-team-site.jpeg",
      alt: "Ona team members wearing safety vests on site",
      bullets: ["Technical supervision for duct and central-unit work", "Coordination suited to companies and suppliers", "Testing and commissioning before handover"]
    },
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
    "شركة أونا للتكييف والكهروميكانيك تقدم حلول توريد وتركيب وصيانة أنظمة المكيفات المركزية الكبيرة والسبليت والكهروميكانيك للمنازل والمنشآت في المملكة العربية السعودية.",
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
  image: "/images/projects/large-air-handling-unit.jpeg",
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
