const subjects = {
  JOUR: [
    { symbol: "IMC", name: "Integrated Marketing Communications" },
    { symbol: "JOUR", name: "Journalism" },
  ],
  KGSM: [
    { symbol: "ACCT", name: "Accounting and Information Systems" },
    { symbol: "BLAW", name: "Business Law" },
    { symbol: "DECS", name: "Managerial Economics and Decision Sciences" },
    { symbol: "ENTR", name: "Entrepreneurship" },
    { symbol: "FINC", name: "Finance" },
    { symbol: "HCAK", name: "Health Care at Kellogg" },
    { symbol: "KELLG_FE", name: "Financial Economics" },
    { symbol: "KELLG_MA", name: "Managerial Analytics" },
    { symbol: "KPHD", name: "Interdisciplinary Seminar" },
    { symbol: "LDEV", name: "Leadership Development" },
    { symbol: "MBAI", name: "Bus/Artificial Intelligence" },
    { symbol: "MECN", name: "Managerial Economics" },
    { symbol: "MKTG", name: "Marketing" },
    { symbol: "MORS", name: "Management and Organizations" },
    { symbol: "OPNS", name: "Operations Management" },
    { symbol: "PACT", name: "Public Action & the Social Compact" },
    { symbol: "REAL", name: "Real Estate" },
    { symbol: "SSIM", name: "Sustainability & Social Impact" },
    { symbol: "STRT", name: "Strategy" },
  ],
  MEAS: [
    { symbol: "BMD_ENG", name: "Biomedical Engineering" },
    { symbol: "CHEM_ENG", name: "Chemical Engineering" },
    { symbol: "CIV_ENV", name: "Civil and Environmental Engineering" },
    { symbol: "COMP_ENG", name: "Computer Engineering" },
    { symbol: "COMP_SCI", name: "Computer Science" },
    { symbol: "CRDV", name: "Career Development" },
    { symbol: "DSGN", name: "Segal Design Institute" },
    { symbol: "ELEC_ENG", name: "Electrical Engineering" },
    { symbol: "ENTREP", name: "Entrepreneurship & Innovation" },
    { symbol: "ES_APPM", name: "Engineering Science & Applied Math" },
    { symbol: "GEN_ENG", name: "General Engineering" },
    { symbol: "IEMS", name: "Industrial Engineering & Management Sciences" },
    { symbol: "INF_TECH", name: "Information Technology" },
    { symbol: "ISEN", name: "Institute for Sustainability & Energy at NU" },
    { symbol: "LDRSHP", name: "Center for Leadership" },
    { symbol: "MAT_SCI", name: "Materials Science & Engineering" },
    { symbol: "MBAI", name: "Bus/Artificial Intelligence" },
    { symbol: "MBIOTECH", name: "Masters in Biotechnology Program" },
    { symbol: "MECH_ENG", name: "Mechanical Engineering" },
    { symbol: "MEM", name: "Master of Engineering Management" },
    { symbol: "MPD", name: "Master of Product Development" },
    { symbol: "MSAI", name: "Artificial Intelligence" },
    { symbol: "MSIA", name: "Master of Science in Analytics" },
    { symbol: "NICO", name: "Northwestern Institute for Complex Systems" },
    { symbol: "PRDV", name: "Personal Development" },
    { symbol: "PROJ_MGT", name: "Project Management" },
    { symbol: "PSED", name: "Predictive Science and Engineering" },
  ],
  MUSIC: [
    { symbol: "CONDUCT", name: "Conducting" },
    { symbol: "GEN_MUS", name: "General Music" },
    { symbol: "JAZZ_ST", name: "Jazz Studies" },
    { symbol: "MUSIC", name: "Music" },
    { symbol: "MUSICOL", name: "Musicology" },
    { symbol: "MUSIC_ED", name: "Music Education" },
    { symbol: "MUS_COMP", name: "Music Composition" },
    { symbol: "MUS_TECH", name: "Music Technology" },
    { symbol: "MUS_THRY", name: "Music Theory" },
    { symbol: "PIANO", name: "Piano" },
    { symbol: "STRINGS", name: "String Instruments" },
    { symbol: "VOICE", name: "Voice & Opera" },
    { symbol: "WIND_PER", name: "Wind & Percussion" },
  ],
  SESP: [
    { symbol: "HDC", name: "Human Development in Context" },
    { symbol: "HDSP", name: "Human Development & Social Policy" },
    { symbol: "LOC", name: "Learning & Organizational Change" },
    { symbol: "LRN_SCI", name: "Learning Sciences" },
    { symbol: "MS_ED", name: "MS in Education & Social Policy" },
    {
      symbol: "MS_HE",
      name: "MS in Higher Education Administration and Policy",
    },
    { symbol: "MS_LOC", name: "Learning & Organizational Change" },
    { symbol: "SESP", name: "School of Education & Social Policy Core" },
    { symbol: "SE_POL", name: "Social & Economic Policy" },
    { symbol: "SOC_POL", name: "Social Policy" },
    { symbol: "TEACH_ED", name: "Teacher Education" },
  ],
  SPCH: [
    { symbol: "CMN", name: "Communication Related Courses" },
    { symbol: "COMM_ST", name: "Communication Studies" },
    { symbol: "CSD", name: "Communication Sciences and Disorders" },
    { symbol: "DANCE", name: "Dance" },
    { symbol: "HLTH_COM", name: "Health Communication" },
    { symbol: "MSC", name: "Master of Science in Communication" },
    { symbol: "MSLCE", name: "MS Leadership for Creative Enterprises" },
    { symbol: "MTS", name: "Media, Technology & Society" },
    { symbol: "PERF_ST", name: "Performance Studies" },
    { symbol: "RTVF", name: "Radio/Television/Film" },
    { symbol: "SAI", name: "Sound Arts and Industries" },
    { symbol: "TH&DRAMA", name: "Theatre & Drama" },
    { symbol: "THEATRE", name: "Theatre" },
  ],
  TGS: [
    { symbol: "APP_PHYS", name: "Applied Physics" },
    { symbol: "BIOSTAT", name: "Biostatistics" },
    { symbol: "CHSS", name: "Comparative & Historical Social Science" },
    { symbol: "CIC", name: "CIC Traveling Scholar" },
    { symbol: "CLIN_PSY", name: "Clinical Psychology" },
    { symbol: "CME", name: "Chicago Metropolitan Exchange Program" },
    { symbol: "COUN", name: "Counseling" },
    { symbol: "DATA_SCI", name: "Data Science" },
    { symbol: "DGP", name: "Driskill Graduate Program in Life Sciences" },
    { symbol: "GENET_CN", name: "Genetic Counseling" },
    { symbol: "HBMI", name: "Health and Biomedical Informatics" },
    { symbol: "HQS", name: "Healthcare Quality and Patient  Safety" },
    { symbol: "HSIP", name: "Health Sciences Integrated Program" },
    { symbol: "HSR", name: "Health Services and Outcomes Research" },
    { symbol: "MENA", name: "Middle East and North African Studies" },
    { symbol: "MHB", name: "Medical Humanities and Bioethics" },
    { symbol: "MSCI", name: "Master of Science in Clinical Investigation" },
    { symbol: "MSTP", name: "Medical Scientist Training" },
    { symbol: "MS_FT", name: "MS in Marital & Family Therapy" },
    { symbol: "NUIN", name: "Neuroscience" },
    { symbol: "PBC", name: "Plant Biology & Conservation" },
    { symbol: "PUB_HLTH", name: "Public Health" },
    { symbol: "QSB", name: "Quantitative and Systems Biology" },
    { symbol: "REPR_SCI", name: "Reproductive Science and Medicine" },
    { symbol: "TGS", name: "TGS General Registrations" },
    { symbol: "THEATRE", name: "Theatre" },
  ],
  UC: [
    { symbol: "ACCOUNT", name: "Accounting" },
    { symbol: "ANTHRO", name: "Anthropology" },
    { symbol: "ATHL_PRA", name: "Athletic Practicum" },
    { symbol: "BIOL_SCI", name: "Biological Sciences" },
    { symbol: "BUS_ANLY", name: "Business Analytics" },
    { symbol: "CHEM", name: "Chemistry" },
    { symbol: "CIS", name: "Computer Information Systems" },
    {
      symbol: "CLIN_RES",
      name: "Clinical Research & Regulatory Administration",
    },
    { symbol: "CODING", name: "Coding Boot Camp" },
    { symbol: "COMM_ST", name: "Communication Studies" },
    { symbol: "CRT_TRES", name: "Certified Treasury Professional" },
    { symbol: "CSD", name: "Communication Sciences and Disorders" },
    { symbol: "CYBER_BC", name: "Cybersecurity Boot Camp" },
    { symbol: "DATA_BC", name: "Data Science Boot Camp" },
    { symbol: "DIV_MED", name: "Divorce Mediation Training Program" },
    { symbol: "ECON", name: "Economics" },
    { symbol: "ENGLISH", name: "English" },
    { symbol: "FINANCE", name: "Finance" },
    { symbol: "FNTEC_BC", name: "FinTech Boot Camp" },
    { symbol: "FN_EXTND", name: "CFP Extended" },
    { symbol: "FRENCH", name: "French" },
    { symbol: "HC_COM", name: "Healthcare Compliance" },
    { symbol: "HISTORY", name: "History" },
    { symbol: "IPLS", name: "Liberal Studies" },
    { symbol: "LEAD_ART", name: "Art of  Leadership Development" },
    { symbol: "LIT", name: "Literature" },
    { symbol: "MATH", name: "Mathematics" },
    { symbol: "MCW", name: "Master of Creative Writing" },
    { symbol: "MED_SKIL", name: "Mediation Skills Training Program" },
    { symbol: "MHI", name: "MS in Health Informatics" },
    { symbol: "MKTG", name: "Marketing" },
    { symbol: "MPPA", name: "Master of Public Policy & Administration" },
    { symbol: "MSA", name: "Master of Arts in Sports Administration" },
    { symbol: "MSDS", name: "Master of Data Science" },
    { symbol: "MSGH", name: "Master of Science Global Health" },
    { symbol: "MSHA", name: "Master of Science in Health Analytics" },
    { symbol: "MSRC", name: "Master of Regulatory Compliance" },
    { symbol: "MS_DSP", name: "Master of Data Science Programme" },
    {
      symbol: "MS_IDS",
      name: "Master of Science Information Design & Strategy",
    },
    { symbol: "MUSEUM", name: "Museum Studies" },
    { symbol: "ORG_BEH", name: "Organizational Behavior" },
    { symbol: "PHIL", name: "Philosophy" },
    { symbol: "PHIL_NP", name: "Philanthropy and Nonprofit Fundraising" },
    { symbol: "PHYSICS", name: "Physics" },
    { symbol: "POLI_SCI", name: "Political Science" },
    { symbol: "PROJ_PMI", name: "Project Management" },
    { symbol: "PRO_HLTH", name: "Professional Health" },
    { symbol: "PSYCH", name: "Psychology" },
    { symbol: "QARS", name: "Quality Assurance & Regulatory Science" },
    { symbol: "RTVF", name: "Radio/Television/Film" },
    { symbol: "SHRM", name: "Society of Human Resource Management" },
    { symbol: "SOCIOL", name: "Sociology" },
    { symbol: "SPANISH", name: "Spanish" },
    { symbol: "SPS", name: "School of Professional Studies" },
    { symbol: "STAT", name: "Statistics" },
    { symbol: "UXUI_BC", name: "User Experience/ Interface Design Boot Camp" },
  ],
  WCAS: [
    { symbol: "AFST", name: "African Studies" },
    { symbol: "AF_AM_ST", name: "African American Studies" },
    { symbol: "AMER_ST", name: "American Studies" },
    { symbol: "ANTHRO", name: "Anthropology" },
    { symbol: "ARABIC", name: "Arabic" },
    { symbol: "ART", name: "Art Theory & Practice" },
    { symbol: "ART_HIST", name: "Art History" },
    { symbol: "ASIAN_AM", name: "Asian American Studies" },
    { symbol: "ASIAN_LC", name: "Asian Languages and Cultures" },
    { symbol: "ASTRON", name: "Astronomy" },
    { symbol: "BIOL_SCI", name: "Biological Sciences" },
    { symbol: "BUS_INST", name: "Business Institutions" },
    { symbol: "CFS", name: "Chicago Field Studies" },
    { symbol: "CHEM", name: "Chemistry" },
    { symbol: "CHINESE", name: "Chinese" },
    { symbol: "CLASSICS", name: "Classics - Readings in English" },
    { symbol: "COG_SCI", name: "Cognitive Science" },
    { symbol: "COMP_LIT", name: "Comparative Literary Studies" },
    { symbol: "EARTH", name: "Earth and Planetary Sciences" },
    { symbol: "ECON", name: "Economics" },
    { symbol: "ENGLISH", name: "English" },
    { symbol: "ENVR_POL", name: "Environmental Policy & Culture" },
    { symbol: "ENVR_SCI", name: "Environmental Science" },
    { symbol: "FRENCH", name: "French" },
    { symbol: "GAMS", name: "Global Avant-garde and Modernist Studies" },
    { symbol: "GBL_HLTH", name: "Global Health" },
    { symbol: "GEN_LA", name: "General Liberal Arts" },
    { symbol: "GEOG", name: "Geography" },
    { symbol: "GERMAN", name: "German" },
    { symbol: "GNDR_ST", name: "Gender Studies" },
    { symbol: "GREEK", name: "Greek" },
    { symbol: "HEBREW", name: "Hebrew" },
    { symbol: "HIND_URD", name: "Hindi and Urdu" },
    { symbol: "HISTORY", name: "History" },
    { symbol: "HUM", name: "Humanities" },
    { symbol: "IBIS", name: "Interdisciplinary Biological Sciences Program" },
    { symbol: "INTG_SCI", name: "Integrated Science" },
    { symbol: "INTL_ST", name: "International Studies" },
    { symbol: "ISEN", name: "Institute for Sustainability & Energy at NU" },
    { symbol: "ITALIAN", name: "Italian" },
    { symbol: "JAPANESE", name: "Japanese" },
    { symbol: "JWSH_ST", name: "Jewish Studies" },
    { symbol: "KOREAN", name: "Korean" },
    { symbol: "LATIN", name: "Latin" },
    { symbol: "LATINO", name: "Latina and Latino Studies" },
    { symbol: "LATIN_AM", name: "Latin American & Caribbean Studies" },
    { symbol: "LEGAL_ST", name: "Legal Studies" },
    { symbol: "LING", name: "Linguistics" },
    { symbol: "MATH", name: "Mathematics" },
    { symbol: "MENA", name: "Middle East and North African Studies" },
    { symbol: "MMSS", name: "Math Methods in the Social Sciences" },
    { symbol: "NEUROBIO", name: "Neurobiology & Physiology" },
    { symbol: "NEUROSCI", name: "Neuroscience" },
    { symbol: "PHIL", name: "Philosophy" },
    { symbol: "PHYSICS", name: "Physics" },
    { symbol: "POLISH", name: "Polish" },
    { symbol: "POLI_SCI", name: "Political Science" },
    { symbol: "PORT", name: "Portuguese" },
    { symbol: "PSYCH", name: "Psychology" },
    { symbol: "RELIGION", name: "Religious Studies" },
    { symbol: "RUSSIAN", name: "Russian" },
    { symbol: "SHC", name: "Science in Human Culture" },
    { symbol: "SLAVIC", name: "Slavic Languages & Literature" },
    { symbol: "SOCIOL", name: "Sociology" },
    { symbol: "SPANISH", name: "Spanish" },
    { symbol: "SPANPORT", name: "Spanish and Portuguese" },
    { symbol: "STAT", name: "Statistics" },
    { symbol: "SWAHILI", name: "Swahili" },
    { symbol: "TURKISH", name: "Turkish" },
  ],
};

export function getSubject(school) {
  return subjects[school] || [];
}
