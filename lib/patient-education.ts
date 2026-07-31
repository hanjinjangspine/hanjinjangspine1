export type PatientEducationRegion = "Lumbar spine" | "Cervical spine";

export type PatientEducationLink = {
  title: string;
  href: string;
};

export type PatientEducationRecoveryItem = {
  activity: string;
  planningRange: string;
  notes: string;
};

export type PatientEducationGuide = {
  slug: string;
  title: string;
  subtitle: string;
  shortTitle: string;
  region: PatientEducationRegion;
  description: string;
  overview: string;
  conditionImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  symptoms: string[];
  urgentSigns: string[];
  evaluation: string[];
  nonsurgicalCare: string[];
  surgeryConsiderations: string[];
  procedure: {
    title: string;
    summary: string;
    steps: string[];
    image: {
      src: string;
      width: number;
      height: number;
      alt: string;
      caption: string;
    };
  };
  recovery: PatientEducationRecoveryItem[];
  risks: string[];
  questions: string[];
  relatedGuideSlugs: string[];
  relatedAcademic: PatientEducationLink[];
  sources: PatientEducationLink[];
  keywords: string[];
  lastReviewed: string;
};

export const patientEducationReviewDate = "2026-07-31";

export const patientEducationDisclosure =
  "This page provides general patient education and does not replace an individual diagnosis or treatment plan. Treatment options, the surgical approach, recovery, and return-to-work timing vary according to the level and location of nerve compression, neurologic findings, overall health, imaging findings, medication use, and actual job demands.";

export const illustrationDisclosure =
  "This AI-generated 3D medical illustration is provided for general patient education. It is not an image of an actual patient, an actual operation, or a before-and-after result, and it does not predict an individual treatment outcome. Anatomy, disease patterns, and surgical steps vary from person to person.";

export const recoveryDisclosure =
  "These are general planning ranges, not fixed deadlines. Return to driving, work, lifting, or overhead activity should be individualized according to the procedure, wound status, pain medication use, neurologic and functional recovery, imaging findings, and actual job demands.";

const commonSurgicalRisks = [
  "Infection, bleeding, or risks related to anesthesia",
  "Dural tear and spinal fluid leakage",
  "Nerve injury or new neurologic symptoms",
  "Persistent, recurrent, or incompletely improved symptoms",
  "The need for another procedure or a different surgical approach"
];

export const patientEducationGuides: PatientEducationGuide[] = [
  {
    slug: "lumbar-disc-herniation",
    title: "Lumbar Disc Herniation",
    subtitle: "A herniated disc in the lower back",
    shortTitle: "Lumbar Disc Herniation",
    region: "Lumbar spine",
    description:
      "Patient education about lumbar disc herniation, leg symptoms, urgent warning signs, non-surgical care, and when biportal endoscopic discectomy may be discussed.",
    overview:
      "A lumbar disc herniation occurs when disc material in the lower back irritates or compresses a nearby nerve. The MRI appearance alone does not determine treatment. Symptoms, neurologic findings, daily function, and the response to previous care must point to the same clinical problem.",
    conditionImage: {
      src: "/patient-education/illustrations/lumbar-disc-herniation-board.png",
      width: 1254,
      height: 1254,
      alt: "AI-generated 3D medical board showing lumbar disc herniation, nerve compression, endoscopic access, and a decompressed nerve corridor",
      caption:
        "Simplified views of lumbar disc herniation and a possible endoscopic treatment pathway. The panels are educational concepts, not a patient-specific sequence or a predicted result."
    },
    symptoms: [
      "Pain that travels from the buttock into the thigh, calf, or foot",
      "Numbness, tingling, or altered sensation in part of the leg or foot",
      "Weakness in the ankle, foot, or toes",
      "Symptoms that worsen with certain sitting, bending, coughing, or lifting movements"
    ],
    urgentSigns: [
      "New loss of bladder or bowel control",
      "Numbness around the groin, inner thighs, or buttocks",
      "Rapidly worsening weakness in one or both legs",
      "Severe symptoms affecting both legs or a sudden major change in walking"
    ],
    evaluation: [
      "A history of where the pain or numbness travels and how it affects walking, sleep, and work",
      "A neurologic examination of strength, sensation, reflexes, and nerve-tension signs",
      "MRI when needed to identify whether the level and side of nerve compression match the symptoms",
      "Review of previous medication, guided exercise, injections, and the direction of symptom change"
    ],
    nonsurgicalCare: [
      "Medication and short-term activity modification",
      "Guided exercise and physical therapy when appropriate",
      "Selected spinal injection treatment for symptom control",
      "Monitoring strength and whether pain and function are improving over time"
    ],
    surgeryConsiderations: [
      "Surgery may be considered when disabling leg symptoms continue despite appropriate non-surgical care.",
      "New or progressive weakness may change the timing of evaluation and treatment.",
      "The MRI target should be consistent with the symptoms and neurologic examination.",
      "The decision is individualized; a disc herniation on MRI does not automatically require surgery."
    ],
    procedure: {
      title: "Biportal Endoscopic Lumbar Discectomy (UBE Discectomy)",
      summary:
        "Unilateral biportal endoscopic (UBE) spine surgery uses two separate portals—one for the endoscope and one for surgical instruments. When this approach is appropriate, the aim is to remove disc material contributing to nerve compression within the planned surgical area.",
      steps: [
        "The surgical level and symptomatic nerve are confirmed.",
        "An endoscope and instruments are introduced through separate portals.",
        "The nerve is visualized and the planned compressive disc material is removed.",
        "The decompression endpoint and neural structures are checked before closure."
      ],
      image: {
        src: "/patient-education/illustrations/lumbar-ube-concept.png",
        width: 917,
        height: 419,
        alt: "AI-generated 3D illustration of lumbar disc material being addressed through a biportal endoscopic approach",
        caption:
          "Educational concept of a biportal endoscopic lumbar discectomy. The exact access route and amount of disc removal depend on the location of compression and operative findings."
      }
    },
    recovery: [
      { activity: "Desk or remote work", planningRange: "About 2–4 weeks", notes: "Start with shorter periods and change position regularly." },
      { activity: "Driving or field sales", planningRange: "About 3–6 weeks", notes: "Driving requires safe emergency braking and no impairment from pain medication." },
      { activity: "Light standing work", planningRange: "About 4–8 weeks", notes: "Increase standing and walking in stages." },
      { activity: "Heavy or repetitive work", planningRange: "Often 12 weeks or later", notes: "Lifting, repeated bending, and twisting require an individualized functional review." }
    ],
    risks: [...commonSurgicalRisks, "Recurrent disc herniation or later instability"],
    questions: [
      "Do my symptoms, examination, and MRI identify the same nerve target?",
      "Is continued non-surgical care reasonable in my situation?",
      "What change in strength or bladder and bowel function should trigger urgent evaluation?",
      "Which work activities will determine my return-to-work plan?"
    ],
    relatedGuideSlugs: ["lumbar-spinal-stenosis", "lumbar-spondylolisthesis"],
    relatedAcademic: [
      { title: "Biportal Endoscopic Spine Surgery", href: "/biportal-endoscopic-spine-surgery" },
      { title: "Why Imaging-Symptom Concordance Matters", href: "/operative-concepts/imaging-symptom-concordance" }
    ],
    sources: [
      { title: "AAOS OrthoInfo: Herniated Disk in the Lower Back", href: "https://orthoinfo.aaos.org/diseases--conditions/herniated-disk-in-the-lower-back/" },
      { title: "AAOS OrthoInfo: Cauda Equina Syndrome", href: "https://orthoinfo.aaos.org/diseases--conditions/cauda-equina-syndrome/" }
    ],
    keywords: ["lumbar disc herniation", "sciatica", "lumbar radiculopathy", "UBE discectomy", "biportal endoscopic discectomy"],
    lastReviewed: patientEducationReviewDate
  },
  {
    slug: "lumbar-spinal-stenosis",
    title: "Lumbar Spinal Stenosis",
    subtitle: "Narrowing around the nerves in the lower back",
    shortTitle: "Lumbar Spinal Stenosis",
    region: "Lumbar spine",
    description:
      "Patient education about lumbar spinal stenosis, reduced walking tolerance, non-surgical care, and when biportal endoscopic decompression may be discussed.",
    overview:
      "Lumbar spinal stenosis is narrowing of the spaces around the nerves in the lower back. Thickened ligament, enlarged joints, disc changes, or a combination of these may contribute. Treatment is based on symptoms and function, not the degree of narrowing on MRI alone.",
    conditionImage: {
      src: "/patient-education/illustrations/lumbar-spinal-stenosis-board.png",
      width: 1254,
      height: 1254,
      alt: "AI-generated 3D medical board showing lumbar spinal stenosis, comparison with a wider canal, endoscopic decompression, and a decompressed nerve corridor",
      caption:
        "Simplified views of lumbar spinal stenosis and a possible decompression pathway. The panels are educational concepts, not a patient-specific before-and-after result."
    },
    symptoms: [
      "Leg pain, heaviness, numbness, or weakness during standing or walking",
      "Reduced walking tolerance that may improve with sitting or bending forward",
      "Difficulty standing long enough for shopping, travel, or work",
      "Balance or leg-control concerns when nerve compression is more advanced"
    ],
    urgentSigns: [
      "New or rapidly worsening leg weakness",
      "New loss of bladder or bowel control",
      "Numbness around the groin or saddle area",
      "A sudden major decline in walking ability"
    ],
    evaluation: [
      "A detailed history of walking distance, standing tolerance, and recovery with rest",
      "Neurologic examination of strength, sensation, reflexes, and balance",
      "MRI to identify the level and pattern of central, lateral recess, or foraminal narrowing",
      "Standing or flexion-extension X-rays when alignment or instability may affect treatment planning"
    ],
    nonsurgicalCare: [
      "Medication and activity pacing",
      "Guided exercise to support trunk and lower-limb function",
      "Selected injection treatment when appropriate",
      "Management of overall health factors that affect mobility and recovery"
    ],
    surgeryConsiderations: [
      "Decompression may be considered when walking tolerance and daily function remain substantially limited despite non-surgical care.",
      "Progressive neurologic deficits or a major decline in mobility require timely evaluation.",
      "The symptomatic level and compression pattern should be clearly defined.",
      "Possible instability, deformity, and overall medical risk can change the surgical plan."
    ],
    procedure: {
      title: "Biportal Endoscopic Lumbar Decompression (UBE Decompression)",
      summary:
        "UBE decompression uses separate viewing and working portals. When appropriate, the surgeon removes portions of thickened ligament and bone that are contributing to nerve compression. The aim is to create more room for the nerves while preserving unaffected structures when possible.",
      steps: [
        "The symptomatic level and stenosis pattern are confirmed.",
        "The endoscope and instruments are placed through separate portals.",
        "Thickened ligament and planned portions of bone are removed under endoscopic visualization.",
        "The surgeon checks the decompression boundaries and neural structures."
      ],
      image: {
        src: "/patient-education/illustrations/lumbar-ube-concept.png",
        width: 917,
        height: 419,
        alt: "AI-generated 3D illustration of lumbar nerve decompression using a biportal endoscopic approach",
        caption:
          "Educational concept of biportal endoscopic lumbar decompression. The amount of ligament and bone removal varies with the compression pattern and stability requirements."
      }
    },
    recovery: [
      { activity: "Desk or remote work", planningRange: "About 2–6 weeks", notes: "Begin with shorter sitting periods and regular walking breaks." },
      { activity: "Driving or field sales", planningRange: "About 3–6 weeks", notes: "Safe braking, vehicle entry, and medication status must be considered." },
      { activity: "Light standing work", planningRange: "About 4–8 weeks", notes: "Alternate standing and walking and increase duration gradually." },
      { activity: "Heavy or repetitive work", planningRange: "Often 12 weeks or later", notes: "Repeated lifting, bending, and twisting require a functional review." }
    ],
    risks: [...commonSurgicalRisks, "Post-decompression instability or later recurrent narrowing"],
    questions: [
      "Which symptom and which level are the main treatment targets?",
      "Is decompression alone appropriate, or is instability a concern?",
      "How should my walking plan change before and after treatment?",
      "Which health conditions may affect recovery or rehabilitation?"
    ],
    relatedGuideSlugs: ["lumbar-disc-herniation", "lumbar-spondylolisthesis"],
    relatedAcademic: [
      { title: "Clinical Perspectives on Lumbar Spinal Stenosis", href: "/articles/lumbar-spinal-stenosis-biportal-endoscopic-decompression" },
      { title: "Decompression Strategy in Severe Lumbar Stenosis", href: "/operative-concepts/decompression-strategy-severe-lumbar-stenosis" }
    ],
    sources: [
      { title: "NHS: Lumbar Decompression Surgery", href: "https://www.nhs.uk/tests-and-treatments/lumbar-decompression-surgery/" },
      { title: "UCLH: Single-Level Lumbar Decompression", href: "https://www.uclh.nhs.uk/patients-and-visitors/patient-information-pages/single-level-lumbar-decompression" }
    ],
    keywords: ["lumbar spinal stenosis", "neurogenic claudication", "walking limitation", "UBE decompression", "biportal endoscopic decompression"],
    lastReviewed: patientEducationReviewDate
  },
  {
    slug: "lumbar-spondylolisthesis",
    title: "Degenerative Lumbar Spondylolisthesis",
    subtitle: "When one lower-back vertebra slips forward",
    shortTitle: "Lumbar Spondylolisthesis",
    region: "Lumbar spine",
    description:
      "Patient education about degenerative lumbar spondylolisthesis, nerve compression, instability, decompression, and when fusion may be discussed.",
    overview:
      "Degenerative lumbar spondylolisthesis occurs when one vertebra slips forward relative to the vertebra below as the joints and discs change over time. Symptoms may result from associated nerve compression or clinically relevant instability rather than from the amount of slippage alone.",
    conditionImage: {
      src: "/patient-education/illustrations/lumbar-spondylolisthesis-board.png",
      width: 1254,
      height: 1254,
      alt: "AI-generated 3D medical board showing lumbar spondylolisthesis, nerve compression, decompression, and an example of instrumented fusion",
      caption:
        "Simplified views of degenerative lumbar spondylolisthesis and two possible surgical pathways. Decompression and fusion are separate decisions, and fusion is not required for every patient."
    },
    symptoms: [
      "Low-back pain with standing, lifting, or position changes",
      "Leg pain, numbness, heaviness, or weakness from associated nerve compression",
      "Reduced walking or standing tolerance",
      "Symptoms that vary with posture, activity, and the degree of instability"
    ],
    urgentSigns: [
      "New or rapidly worsening leg weakness",
      "New loss of bladder or bowel control",
      "Numbness around the groin or saddle area",
      "A sudden major decline in walking or balance"
    ],
    evaluation: [
      "Assessment of back symptoms, leg symptoms, walking, and daily function",
      "Neurologic examination of strength, sensation, and reflexes",
      "Standing X-rays to assess alignment and the degree of slippage",
      "Flexion-extension X-rays when appropriate to assess motion, plus MRI to identify nerve compression"
    ],
    nonsurgicalCare: [
      "Medication and activity modification",
      "Guided trunk and lower-limb exercise",
      "Selected injection treatment when appropriate",
      "Monitoring for changes in walking tolerance, leg strength, or instability-related symptoms"
    ],
    surgeryConsiderations: [
      "Surgery may be considered when leg symptoms, weakness, or walking limitations persist despite non-surgical care.",
      "Imaging should demonstrate nerve compression or instability that is clinically relevant to the symptoms.",
      "Decompression alone may be considered when stability can be maintained.",
      "If clinically relevant instability is present, UBE-assisted transforaminal lumbar interbody fusion (UBE-TLIF) may be considered. Fusion is not required for every patient with spondylolisthesis."
    ],
    procedure: {
      title: "Decompression Alone or Decompression with Fusion",
      summary:
        "The operative plan begins with the reason for surgery, not the access method. Biportal endoscopic decompression may be considered when decompression alone is appropriate. When instability, foraminal collapse, or the planned decompression requires stabilization, UBE-TLIF or another fusion approach may be discussed.",
      steps: [
        "The symptomatic nerve target and degree of instability are reviewed.",
        "The surgeon determines whether decompression can be performed without destabilizing the segment.",
        "If decompression alone is selected, the planned compressive tissue is removed.",
        "If fusion is required, disc-space preparation, an interbody implant, bone graft, and fixation may be added according to the surgical plan."
      ],
      image: {
        src: "/patient-education/illustrations/lumbar-ube-concept.png",
        width: 917,
        height: 419,
        alt: "AI-generated 3D illustration of lumbar nerve decompression through a biportal endoscopic approach",
        caption:
          "This illustration shows the decompression portion only. Whether stabilization or fusion is needed depends on clinically relevant instability, alignment, the decompression plan, and patient factors."
      }
    },
    recovery: [
      { activity: "Desk or remote work", planningRange: "Decompression: about 2–4 weeks; fusion: about 6–12 weeks", notes: "Begin with shorter periods and increase gradually." },
      { activity: "Driving or field sales", planningRange: "Decompression: about 3–6 weeks; fusion: about 6–12 weeks", notes: "Safe braking, sitting tolerance, and medication status matter." },
      { activity: "Light standing work", planningRange: "Decompression: about 4–8 weeks; fusion: about 8–12 weeks", notes: "Walking endurance and neurologic function guide progression." },
      { activity: "Heavy or repetitive work", planningRange: "Decompression: often 12 weeks or later; fusion: often 3–6 months", notes: "Imaging, strength, job demands, and the fusion plan must be reviewed." }
    ],
    risks: [...commonSurgicalRisks, "Instability after decompression", "For fusion: nonunion, implant-related problems, or adjacent-segment stress"],
    questions: [
      "Are my symptoms caused by nerve compression, instability, or both?",
      "Can decompression be performed while maintaining stability?",
      "What specific finding would make fusion appropriate in my case?",
      "How would decompression alone and fusion change my recovery plan?"
    ],
    relatedGuideSlugs: ["lumbar-spinal-stenosis", "lumbar-disc-herniation"],
    relatedAcademic: [
      { title: "Endoscopic Lumbar Fusion and UBE-TLIF", href: "/endoscopic-lumbar-fusion-ube-tlif" },
      { title: "Technical Boundaries of Endoscopic Lumbar Fusion", href: "/operative-concepts/technical-boundaries-endoscopic-lumbar-fusion" }
    ],
    sources: [
      { title: "AAOS OrthoInfo: Adult Spondylolisthesis in the Low Back", href: "https://orthoinfo.aaos.org/diseases--conditions/adult-spondylolisthesis-in-the-low-back/" },
      { title: "NHS: Lumbar Decompression Surgery", href: "https://www.nhs.uk/tests-and-treatments/lumbar-decompression-surgery/" }
    ],
    keywords: ["degenerative lumbar spondylolisthesis", "lumbar instability", "UBE-TLIF", "endoscopic lumbar fusion", "lumbar decompression"],
    lastReviewed: patientEducationReviewDate
  },
  {
    slug: "cervical-disc-herniation",
    title: "Cervical Disc Herniation",
    subtitle: "A herniated disc in the neck",
    shortTitle: "Cervical Disc Herniation",
    region: "Cervical spine",
    description:
      "Patient education about cervical disc herniation, arm symptoms, possible spinal cord warning signs, non-surgical care, and decompression options.",
    overview:
      "Cervical disc herniation occurs when disc material in the neck irritates or compresses a nerve root and, in some cases, the spinal cord. The location of pain, numbness, or weakness should be consistent with the neurologic examination and imaging findings before a procedure is considered.",
    conditionImage: {
      src: "/patient-education/illustrations/cervical-disc-herniation-board.png",
      width: 1254,
      height: 1254,
      alt: "AI-generated 3D medical board showing cervical disc herniation, nerve-root compression, a posterior endoscopic approach, and a decompressed nerve corridor",
      caption:
        "Simplified views of cervical disc herniation and one possible posterior endoscopic pathway. The panels do not imply that this approach is suitable for every compression pattern."
    },
    symptoms: [
      "Neck pain with pain or tingling into the shoulder, arm, or hand",
      "Numbness or altered sensation in part of the arm or hand",
      "Weakness in the shoulder, elbow, wrist, or fingers",
      "Pain that changes with neck position, coughing, or arm movement"
    ],
    urgentSigns: [
      "New or worsening hand clumsiness",
      "Balance or walking problems",
      "Weakness affecting more than one limb",
      "New bladder or bowel symptoms with neurologic changes"
    ],
    evaluation: [
      "Mapping the distribution of arm pain, numbness, and weakness",
      "Neurologic examination of strength, sensation, reflexes, hand function, and walking",
      "MRI to determine whether the side and level of compression match the symptoms",
      "Review of whether symptoms are improving with medication, guided exercise, activity modification, or selected injections"
    ],
    nonsurgicalCare: [
      "Medication and short-term activity modification",
      "Guided exercise or physical therapy when appropriate",
      "Selected injection treatment for symptom control",
      "Monitoring for new weakness, hand dysfunction, balance problems, or gait change"
    ],
    surgeryConsiderations: [
      "Surgical decompression may be considered when arm pain remains disabling despite appropriate non-surgical care.",
      "Progressive weakness or signs of spinal cord involvement require prompt evaluation.",
      "The side and level on imaging should match the symptoms and neurologic findings.",
      "The surgical approach depends on the location of compression, alignment, stability, and spinal cord involvement; a posterior biportal approach is not appropriate for every cervical disc herniation."
    ],
    procedure: {
      title: "Posterior Cervical Biportal Endoscopic Foraminotomy and Discectomy",
      summary:
        "When a posterior biportal approach is appropriate, separate viewing and working portals can be used to enlarge the nerve exit and address selected disc material contributing to nerve-root compression. Other patients may require a different approach.",
      steps: [
        "The side, level, nerve target, and compression pattern are confirmed.",
        "Viewing and working portals are placed through a posterior approach.",
        "The planned portion of the nerve exit is decompressed while the facet joint is preserved as the procedure allows.",
        "Selected disc material may be removed when it is accessible and relevant to the nerve compression."
      ],
      image: {
        src: "/patient-education/illustrations/cervical-ube-concept.png",
        width: 917,
        height: 419,
        alt: "AI-generated 3D illustration of posterior cervical biportal endoscopic foraminotomy and selected disc removal",
        caption:
          "Educational concept of a posterior cervical biportal endoscopic approach. The actual approach depends on the location of compression, alignment, stability, and spinal cord findings."
      }
    },
    recovery: [
      { activity: "Desk or remote work", planningRange: "About 2–4 weeks", notes: "Use an eye-level screen and begin with shorter periods." },
      { activity: "Driving or field sales", planningRange: "About 3–6 weeks", notes: "Neck rotation, field of view, emergency braking, and medication status must be safe." },
      { activity: "Light standing work", planningRange: "About 4–8 weeks", notes: "Begin with tasks that keep the arms closer to the body." },
      { activity: "Heavy or overhead work", planningRange: "Often 8–12 weeks or later", notes: "Strength and neurologic recovery should be reviewed before progression." }
    ],
    risks: [...commonSurgicalRisks, "Persistent neck or arm symptoms", "Cervical instability or the need for a different surgical approach"],
    questions: [
      "Is the main problem a nerve root, the spinal cord, or both?",
      "Why is a posterior approach appropriate—or not appropriate—for my compression pattern?",
      "What change in hand function, strength, or walking should prompt urgent assessment?",
      "How will overhead work or driving affect my recovery plan?"
    ],
    relatedGuideSlugs: ["cervical-foraminal-stenosis"],
    relatedAcademic: [
      { title: "Clinical Focus: Cervical Endoscopic Surgery", href: "/clinical-focus" },
      { title: "Academic Activity: Cervical Laminoforaminotomy", href: "/academic-activity" }
    ],
    sources: [
      { title: "AAOS OrthoInfo: Cervical Radiculopathy", href: "https://orthoinfo.aaos.org/diseases--conditions/cervical-radiculopathy-pinched-nerve/" },
      { title: "AANS: Cervical Spine Conditions", href: "https://www.aans.org/patients/conditions-treatments/cervical-spine/" }
    ],
    keywords: ["cervical disc herniation", "cervical radiculopathy", "arm pain", "cervical foraminotomy", "biportal endoscopic cervical surgery"],
    lastReviewed: patientEducationReviewDate
  },
  {
    slug: "cervical-foraminal-stenosis",
    title: "Cervical Foraminal Stenosis",
    subtitle: "Narrowing where a nerve exits the neck",
    shortTitle: "Cervical Foraminal Stenosis",
    region: "Cervical spine",
    description:
      "Patient education about cervical foraminal stenosis, arm pain or weakness, non-surgical care, and when posterior cervical foraminotomy may be discussed.",
    overview:
      "Cervical foraminal stenosis is narrowing of the opening where a nerve exits the neck. Disc-height loss, bone spurs, joint changes, or thickened soft tissue may contribute. The side and level of narrowing should match the pattern of symptoms and neurologic findings.",
    conditionImage: {
      src: "/patient-education/illustrations/cervical-foraminal-stenosis-board.png",
      width: 1254,
      height: 1254,
      alt: "AI-generated 3D medical board showing cervical foraminal stenosis, nerve-root narrowing, posterior endoscopic foraminotomy, and a wider nerve exit",
      caption:
        "Simplified views of cervical foraminal stenosis and a possible posterior foraminotomy pathway. The panels are educational concepts, not a patient-specific before-and-after result."
    },
    symptoms: [
      "Radiating pain from the neck or shoulder into the arm or hand",
      "Numbness or tingling in a pattern related to the affected nerve",
      "Weakness in specific shoulder, arm, wrist, or hand movements",
      "Symptoms that worsen with certain neck positions or prolonged activity"
    ],
    urgentSigns: [
      "Progressive weakness in the arm or hand",
      "New hand clumsiness, balance problems, or walking difficulty",
      "Weakness or sensory change involving more than one limb",
      "New bladder or bowel symptoms with neurologic changes"
    ],
    evaluation: [
      "A detailed map of pain, numbness, and functional weakness",
      "Neurologic examination of strength, sensation, reflexes, and hand function",
      "MRI or CT when needed to identify the side, level, and bony or soft-tissue contributors",
      "Review of the response to medication, guided exercise, activity modification, or selected nerve-root injections"
    ],
    nonsurgicalCare: [
      "Medication and activity modification",
      "Guided exercise and posture or movement strategies",
      "Selected nerve-root or epidural injection treatment when appropriate",
      "Monitoring strength, hand function, and whether pain is improving"
    ],
    surgeryConsiderations: [
      "Posterior cervical foraminotomy or decompression may be considered when symptoms remain functionally limiting despite non-surgical care.",
      "Progressive weakness warrants prompt evaluation.",
      "The side and level of foraminal narrowing should match the symptoms and neurologic examination.",
      "Alignment, stability, the location of compression, and possible spinal cord involvement may make another approach more appropriate."
    ],
    procedure: {
      title: "Posterior Cervical Biportal Endoscopic Foraminotomy",
      summary:
        "When this approach is appropriate, the aim is to enlarge the nerve exit and relieve pressure while preserving as much of the facet joint as the planned decompression allows. Numbness or weakness may persist, particularly after severe or long-standing compression.",
      steps: [
        "The symptomatic side, level, and nerve target are confirmed.",
        "Viewing and working portals are introduced through a posterior approach.",
        "The planned portions of bone or ligament contributing to foraminal narrowing are removed.",
        "The nerve-root corridor and joint-preservation boundary are checked."
      ],
      image: {
        src: "/patient-education/illustrations/cervical-ube-concept.png",
        width: 917,
        height: 419,
        alt: "AI-generated 3D illustration of posterior cervical biportal endoscopic foraminotomy for nerve-root compression",
        caption:
          "Educational concept of posterior cervical biportal endoscopic foraminotomy. The exact decompression boundary and choice of approach vary with the location of narrowing, alignment, stability, and neurologic findings."
      }
    },
    recovery: [
      { activity: "Desk or remote work", planningRange: "About 2–4 weeks", notes: "Change neck and arm position regularly and begin with shorter sessions." },
      { activity: "Driving or field sales", planningRange: "About 3–6 weeks", notes: "Neck rotation, emergency braking, and medication status must be safe." },
      { activity: "Light standing work", planningRange: "About 4–8 weeks", notes: "Reduce repeated neck extension and prolonged reaching at first." },
      { activity: "Heavy or overhead work", planningRange: "Often 8–12 weeks or later", notes: "Strength and sensory recovery should be reviewed before progression." }
    ],
    risks: [...commonSurgicalRisks, "Persistent numbness or weakness", "Facet-joint injury, instability, or the need for another cervical approach"],
    questions: [
      "Does the side and level of narrowing match my symptoms and weakness?",
      "Is the compression mainly bone, disc material, or a combination?",
      "How much of the facet joint would the planned decompression involve?",
      "Could spinal cord compression or alignment require a different approach?"
    ],
    relatedGuideSlugs: ["cervical-disc-herniation"],
    relatedAcademic: [
      { title: "Clinical Focus: Cervical Endoscopic Surgery", href: "/clinical-focus" },
      { title: "Academic Activity: Cervical Laminoforaminotomy", href: "/academic-activity" }
    ],
    sources: [
      { title: "AAOS OrthoInfo: Cervical Radiculopathy", href: "https://orthoinfo.aaos.org/diseases--conditions/cervical-radiculopathy-pinched-nerve/" },
      { title: "AANS: Cervical Spine Conditions", href: "https://www.aans.org/patients/conditions-treatments/cervical-spine/" }
    ],
    keywords: ["cervical foraminal stenosis", "cervical radiculopathy", "arm weakness", "posterior cervical foraminotomy", "biportal endoscopic cervical decompression"],
    lastReviewed: patientEducationReviewDate
  }
];

export function getPatientEducationGuide(slug: string) {
  return patientEducationGuides.find((guide) => guide.slug === slug);
}

export function getRelatedPatientEducationGuides(guide: PatientEducationGuide) {
  return guide.relatedGuideSlugs
    .map((slug) => getPatientEducationGuide(slug))
    .filter((related): related is PatientEducationGuide => Boolean(related));
}
