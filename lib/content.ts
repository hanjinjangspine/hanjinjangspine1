import type { FaqItem } from "@/lib/schema";
import { caseImageData, type CaseImage } from "@/lib/case-image-data";

export type { CaseImage };

export type ContentSection = {
  title: string;
  body: string;
};

export type ClinicalFocusItem = {
  title: string;
  anchor: string;
  summary: string;
  clinicalProblem: string;
  surgicalConcept: string;
  indications: string;
  technicalConsiderations: string;
  limitations: string;
  risks: string;
  educationalSummary: string;
  relatedResources?: {
    title: string;
    description: string;
    href: string;
  }[];
};

export const clinicalFocusItems: ClinicalFocusItem[] = [
  {
    title: "Biportal endoscopic spine surgery",
    anchor: "biportal-endoscopic-spine-surgery",
    summary:
      "Two-portal endoscopic decompression and stabilization concepts for defined degenerative lumbar conditions.",
    clinicalProblem:
      "Degenerative lumbar disease may create central canal, lateral recess, or foraminal compression with symptoms that must match neurologic findings and imaging before surgery is considered.",
    surgicalConcept:
      "Biportal endoscopy separates the viewing portal from the working portal, using continuous irrigation, endoscopic visualization, and conventional spine instruments through small posterior corridors.",
    indications:
      "Potential indications include lumbar spinal stenosis, disc herniation, foraminal stenosis, selected revision cases, and fusion cases when patient anatomy and surgical goals align.",
    technicalConsiderations:
      "Key technical issues include portal placement, anatomical orientation, irrigation pressure, hemostasis, decompression margins, neural protection, and fluoroscopic confirmation when needed.",
    limitations:
      "Not every stenotic, unstable, deformity-related, infectious, tumorous, or revision condition is suitable for an endoscopic approach.",
    risks:
      "Risks include dural tear, nerve injury, bleeding, hematoma, infection, inadequate decompression, instability, recurrent symptoms, and conversion to another surgical strategy.",
    educationalSummary:
      "Biportal endoscopy is a surgical platform, not a universal solution; its role depends on patient selection, imaging-symptom concordance, and disciplined technique."
  },
  {
    title: "Endoscopic lumbar decompression",
    anchor: "endoscopic-lumbar-decompression",
    summary:
      "Endoscopic neural decompression for central canal, lateral recess, and foraminal stenosis when anatomy is appropriate.",
    clinicalProblem:
      "Lumbar stenosis can cause neurogenic claudication, radiculopathy, neurologic deficit, or activity-limiting leg symptoms when neural elements are compressed.",
    surgicalConcept:
      "The operative goal is to remove compressive bone, ligament, or disc material while preserving stabilizing structures when possible.",
    indications:
      "Indications are considered when conservative care is insufficient and symptoms, neurologic findings, and imaging demonstrate concordant compression.",
    technicalConsiderations:
      "The operative plan defines the symptomatic level, decompression target, contralateral reach, ligamentum flavum handling, facet preservation, and bleeding control strategy.",
    limitations:
      "Marked instability, severe deformity, unclear symptom generators, or multilevel disease without clear priority may require a different plan.",
    risks:
      "Risks include dural injury, residual stenosis, recurrent stenosis, postoperative instability, hematoma, infection, and neurologic deterioration.",
    educationalSummary:
      "Endoscopic decompression is most coherent when the symptomatic level, anatomic compression, and decompression endpoint are explicitly defined."
  },
  {
    title: "Endoscopic lumbar fusion / UBE-TLIF",
    anchor: "endoscopic-lumbar-fusion-ube-tlif",
    summary:
      "Biportal endoscopic transforaminal lumbar interbody fusion for selected instability, spondylolisthesis, and recurrent stenosis patterns.",
    clinicalProblem:
      "Some degenerative lumbar conditions combine neural compression with segmental instability, foraminal collapse, or recurrent stenosis that may require decompression plus fusion.",
    surgicalConcept:
      "UBE-TLIF applies endoscopic visualization to decompression, disc preparation, interbody cage placement, and fusion workflow, usually with pedicle screw fixation.",
    indications:
      "Potential indications include degenerative spondylolisthesis, foraminal stenosis with disc height loss, recurrent stenosis, and instability when fusion goals are clear.",
    technicalConsiderations:
      "Important issues include traversing and exiting root protection, endplate preparation, cage trajectory, graft strategy, screw fixation, alignment, and bleeding management.",
    limitations:
      "Severe deformity, high-grade slip, osteoporosis-related fixation risk, infection, tumor, or broad sagittal correction needs may move the case outside this approach.",
    risks:
      "Risks include nerve injury, dural tear, cage migration, subsidence, nonunion, hardware failure, infection, hematoma, adjacent segment symptoms, and revision surgery.",
    educationalSummary:
      "Endoscopic fusion should be framed around fusion indications first; the endoscope modifies the approach, not the biological requirements of arthrodesis."
  },
  {
    title: "Revision endoscopic spine surgery",
    anchor: "revision-endoscopic-spine-surgery",
    summary:
      "Endoscopic revision concepts for recurrent stenosis, recurrent disc herniation, and selected post-surgical compression patterns.",
    clinicalProblem:
      "Prior surgery can alter anatomy, create scar tissue, change stability, and complicate the relationship between symptoms and imaging.",
    surgicalConcept:
      "Endoscopic visualization may help target a specific recurrent or residual compression while respecting scar tissue and altered bony landmarks.",
    indications:
      "Possible indications include recurrent disc herniation, residual lateral recess stenosis, recurrent foraminal stenosis, and adjacent level compression after prior lumbar surgery.",
    technicalConsiderations:
      "Preoperative review should identify the prior approach, bone removal, hardware, scar zone, instability risk, and a planned corridor to the compressive pathology.",
    limitations:
      "Diffuse pain without concordant findings, major deformity, infection, severe instability, or ambiguous imaging may require additional workup or another surgical plan.",
    risks:
      "Revision risks include dural tear, nerve injury, bleeding, infection, incomplete decompression, recurrent symptoms, and need for staged or open surgery.",
    educationalSummary:
      "Revision endoscopic surgery is decision-intensive; the central issue is whether a specific corridor can address a specific pathology with an acceptable risk profile."
  },
  {
    title: "Adjacent segment disease",
    anchor: "adjacent-segment-disease",
    summary:
      "Assessment of symptomatic degeneration adjacent to a previous fusion or decompression construct.",
    clinicalProblem:
      "Adjacent levels may develop stenosis, foraminal narrowing, listhesis, or instability after previous lumbar surgery, but imaging changes alone do not establish the pain generator.",
    surgicalConcept:
      "The surgical plan may involve decompression, extension fusion, or nonoperative care depending on neural compression, instability, alignment, and patient factors.",
    indications:
      "Surgery is considered when symptoms, examination, and imaging identify a treatable adjacent-level pathology that aligns with patient goals.",
    technicalConsiderations:
      "The surgeon evaluates prior implants, fusion status, transition anatomy, sagittal balance, bone quality, and the relationship between old and new decompression zones.",
    limitations:
      "Multifactorial pain, poor bone quality, severe deformity, and unclear symptom generators can limit the role of a focal endoscopic procedure.",
    risks:
      "Risks include neurologic injury, dural tear, junctional problems, hardware complications, nonunion when fusion is performed, and additional adjacent degeneration over time.",
    educationalSummary:
      "Adjacent segment disease requires restraint: the operative target should be a clinical diagnosis supported by symptoms, examination, and imaging rather than an imaging label alone."
  },
  {
    title: "Lumbar spinal stenosis",
    anchor: "lumbar-spinal-stenosis",
    summary:
      "Evaluation and decompression strategy for central, lateral recess, and foraminal stenosis.",
    clinicalProblem:
      "Lumbar spinal stenosis may produce leg-dominant symptoms, walking limitation, radiculopathy, numbness, weakness, and positional relief patterns.",
    surgicalConcept:
      "Surgical decompression aims to enlarge the neural canal or foraminal space while preserving enough bony and ligamentous support for segmental stability.",
    indications:
      "Indications depend on persistent symptoms, neurologic findings, functional limitation, and concordant imaging after appropriate nonoperative management when suitable.",
    technicalConsiderations:
      "Important considerations include stenosis type, facet hypertrophy, ligamentum flavum thickness, disc contribution, contralateral decompression, and postoperative stability.",
    limitations:
      "Back-dominant pain without neural compression, instability, deformity, or diffuse multilevel disease may not respond to focal decompression.",
    risks:
      "Risks include dural tear, nerve injury, hematoma, infection, instability, residual stenosis, and recurrent stenosis.",
    educationalSummary:
      "In lumbar stenosis, the operative question is not only whether stenosis exists, but which compression explains the patient's symptoms.",
    relatedResources: [
      {
        title: "Clinical Perspectives on Lumbar Spinal Stenosis",
        description:
          "Diagnosis, staging, and the role of biportal endoscopic decompression in selected patients.",
        href: "/articles/lumbar-spinal-stenosis-biportal-endoscopic-decompression"
      }
    ]
  },
  {
    title: "Degenerative spondylolisthesis",
    anchor: "degenerative-spondylolisthesis",
    summary:
      "Decision-making for stenosis and instability associated with degenerative vertebral slippage.",
    clinicalProblem:
      "Degenerative spondylolisthesis may create central stenosis, lateral recess stenosis, foraminal narrowing, mechanical back pain, or dynamic neural compression.",
    surgicalConcept:
      "The operative decision is whether decompression alone or decompression with fusion better addresses neural compression and segmental instability.",
    indications:
      "Possible fusion indications include dynamic instability, foraminal collapse, recurrent stenosis, severe facet compromise, or slip-related compression.",
    technicalConsiderations:
      "Evaluation includes flexion-extension imaging, facet morphology, foraminal height, disc collapse, slip grade, bone quality, and sagittal alignment.",
    limitations:
      "High-grade slips, major deformity, severe osteoporosis, and broad alignment goals may exceed the scope of a limited endoscopic strategy.",
    risks:
      "Risks include neurologic injury, dural tear, inadequate decompression, slip progression, nonunion after fusion, implant complications, and adjacent segment symptoms.",
    educationalSummary:
      "The core decision in degenerative spondylolisthesis is whether instability is incidental, symptomatic, or surgically relevant."
  },
  {
    title: "Recurrent disc herniation",
    anchor: "recurrent-disc-herniation",
    summary:
      "Evaluation of recurrent radiculopathy after previous lumbar disc surgery.",
    clinicalProblem:
      "Recurrent herniation can cause leg pain, neurologic deficit, or functional limitation, but postoperative scar and degenerative changes can complicate interpretation.",
    surgicalConcept:
      "The surgical plan targets the recurrent fragment or associated stenosis while minimizing neural traction in a scarred field.",
    indications:
      "Indications may include concordant recurrent radiculopathy, imaging-confirmed recurrent disc material, neurologic deficit, or failure of appropriate nonoperative care.",
    technicalConsiderations:
      "Contrast-enhanced MRI, prior operative records, annular defect location, scar distribution, and segmental stability influence the approach.",
    limitations:
      "Back-dominant pain, instability, extensive disc collapse, infection, or unclear imaging may require a broader diagnostic and surgical discussion.",
    risks:
      "Risks include dural tear, nerve irritation, recurrent herniation, infection, hematoma, instability, and future fusion requirement in selected patients.",
    educationalSummary:
      "Recurrent disc surgery requires careful distinction between recurrent herniation, scar-related symptoms, stenosis, and instability."
  },
  {
    title: "Elderly spine surgery",
    anchor: "elderly-spine-surgery",
    summary:
      "Patient-specific planning for older adults with degenerative lumbar spine disease.",
    clinicalProblem:
      "Older adults may have stenosis, instability, osteoporosis, frailty, cardiopulmonary risk, anticoagulation, and multiple symptom generators.",
    surgicalConcept:
      "The surgical plan should match the scope of intervention to neurologic status, functional goals, medical risk, and imaging findings.",
    indications:
      "Surgery may be considered for disabling neurogenic claudication, progressive neurologic deficit, or concordant radiculopathy when risk-benefit discussion supports intervention.",
    technicalConsiderations:
      "Planning includes anesthesia risk, bone quality, medication management, rehabilitation capacity, delirium prevention, and realistic postoperative goals.",
    limitations:
      "Frailty, severe comorbidity, poor bone quality, diffuse pain, or unclear symptom generators may limit surgical benefit or shift the plan toward nonoperative care.",
    risks:
      "Risks include medical complications, infection, hematoma, neurologic injury, fixation failure, delayed recovery, and reduced physiologic reserve.",
    educationalSummary:
      "In elderly spine care, technical feasibility is only one part of the decision; patient-specific risk, goals, and physiologic reserve define appropriate surgery."
  }
];

export const biportalSections: ContentSection[] = [
  {
    title: "What biportal endoscopic spine surgery is",
    body:
      "Biportal endoscopic spine surgery is an operative platform that uses one portal for the endoscope and a separate portal for working instruments. The approach creates a fluid-filled visual field and can be used for selected lumbar decompression, disc, revision, and fusion problems when the anatomy and surgical objective are appropriate."
  },
  {
    title: "Anatomical orientation",
    body:
      "The surgeon maintains orientation by relating the endoscopic image to lamina, facet joint, ligamentum flavum, traversing nerve root, exiting nerve root, disc space, and pedicle landmarks. Fluoroscopy may support level confirmation and instrument trajectory."
  },
  {
    title: "Two-portal working concept",
    body:
      "The viewing portal and working portal are independent. This permits triangulation, dynamic instrument movement, and use of standard spine instruments while maintaining endoscopic visualization."
  },
  {
    title: "Irrigation and visualization",
    body:
      "Continuous irrigation supports visualization and clears blood or debris. Irrigation pressure, outflow, hemostasis, and operative time require active control to reduce fluid-related and bleeding-related risks."
  },
  {
    title: "Difference from microscopic surgery",
    body:
      "Microscopic surgery uses a direct line-of-sight corridor through a tubular or open exposure. Biportal endoscopy uses an endoscopic camera in an irrigated field, with different depth cues, portal geometry, and bleeding-control demands."
  },
  {
    title: "Difference from uniportal endoscopy",
    body:
      "Uniportal endoscopy places optics and instruments through a single working channel. Biportal endoscopy separates visualization from instrumentation, changing the ergonomics, instrument options, and tissue-handling strategy."
  },
  {
    title: "Clinical applications",
    body:
      "Applications described in the spine literature include lumbar spinal stenosis, disc herniation, foraminal stenosis, selected revision decompression, and selected endoscopic lumbar fusion cases. The indication depends on diagnosis, anatomy, neurologic findings, and the intended surgical endpoint."
  },
  {
    title: "Limitations",
    body:
      "Limitations include unsuitable anatomy, unclear symptom generators, major deformity, severe instability, infection, tumor, certain revision settings, and patient-specific risk factors that make another approach more appropriate."
  }
];

export const biportalFaqs: FaqItem[] = [
  {
    question: "Is biportal endoscopy the same as uniportal endoscopy?",
    answer:
      "No. Uniportal endoscopy uses a single channel for the camera and instruments, while biportal endoscopy separates the viewing and working portals."
  },
  {
    question: "What determines whether a patient is a candidate?",
    answer:
      "Patient selection depends on symptoms, neurologic findings, imaging-symptom concordance, anatomy, medical risk, and the specific surgical goal."
  },
  {
    question: "Can every lumbar spine condition be treated endoscopically?",
    answer:
      "No. Some conditions require nonoperative care, microscopic surgery, open surgery, staged surgery, or broader reconstruction depending on the pathology."
  }
];

export const fusionSections: ContentSection[] = [
  {
    title: "Surgical concept",
    body:
      "Endoscopic lumbar fusion / UBE-TLIF applies biportal endoscopic visualization to decompression and interbody fusion. The operation still follows the core principles of fusion surgery: adequate neural decompression, disc preparation, graft placement, cage positioning, and stable fixation."
  },
  {
    title: "Degenerative spondylolisthesis",
    body:
      "In selected degenerative spondylolisthesis, fusion may be considered when stenosis is associated with instability, foraminal collapse, or recurrent compression that decompression alone may not adequately address."
  },
  {
    title: "Foraminal stenosis",
    body:
      "Foraminal stenosis can result from disc height loss, facet hypertrophy, osteophytes, or slip-related narrowing. Fusion planning evaluates whether restoration of disc height and stabilization are needed in addition to decompression."
  },
  {
    title: "Segmental instability",
    body:
      "Instability is assessed through clinical history, dynamic radiographs, MRI or CT findings, facet integrity, prior decompression, and the amount of bone removal required to decompress the nerve."
  },
  {
    title: "Recurrent stenosis",
    body:
      "When stenosis recurs after prior decompression, the surgeon must distinguish recurrent compression from scar tissue, instability, adjacent disease, and disc collapse before choosing decompression or fusion."
  },
  {
    title: "Technical considerations",
    body:
      "Technical planning includes portal placement, unilateral or bilateral decompression, traversing and exiting root protection, endplate preparation, graft strategy, cage trajectory, fluoroscopic confirmation, and screw fixation."
  },
  {
    title: "Cage insertion",
    body:
      "Cage insertion requires a controlled path into the disc space, attention to nerve root safety, preservation of endplate integrity, and confirmation of cage position."
  },
  {
    title: "Pedicle screw fixation",
    body:
      "Pedicle screw fixation may be percutaneous or otherwise adapted to the case. Fixation strategy depends on bone quality, anatomy, reduction goals, and fusion level."
  },
  {
    title: "Limitations and risks",
    body:
      "Limitations include severe deformity, high-grade slip, poor fixation environment, infection, tumor, or broad alignment goals. Risks include nerve injury, dural tear, bleeding, cage migration, subsidence, nonunion, hardware failure, infection, and adjacent segment symptoms."
  }
];

export const fusionFaqs: FaqItem[] = [
  {
    question: "Does UBE-TLIF change the indications for fusion?",
    answer:
      "No. Fusion indications still depend on instability, foraminal collapse, recurrent stenosis, and patient-specific goals. The endoscopic platform changes the access strategy, not the biological and biomechanical requirements of fusion."
  },
  {
    question: "Is a cage always used in endoscopic lumbar fusion?",
    answer:
      "UBE-TLIF typically includes interbody cage placement, but the implant plan depends on anatomy, pathology, and the surgeon's preoperative strategy."
  },
  {
    question: "What are the main technical boundaries?",
    answer:
      "Technical boundaries include neural safety, endplate preparation, cage trajectory, fixation quality, bleeding control, bone quality, and whether the needed correction exceeds a focal endoscopic approach."
  }
];

export const revisionSections: ContentSection[] = [
  {
    title: "Revision after previous decompression",
    body:
      "After previous decompression, recurrent symptoms may reflect recurrent disc herniation, residual stenosis, recurrent stenosis, instability, or a different level. The operative corridor is planned around altered bone and scar anatomy."
  },
  {
    title: "Revision after previous fusion",
    body:
      "After fusion, symptoms may arise from adjacent segment disease, foraminal stenosis, hardware-related issues, nonunion, or unrelated pathology. Imaging must evaluate the fused level and adjacent levels together."
  },
  {
    title: "Adjacent segment disease",
    body:
      "Adjacent segment disease is considered when a level next to a prior fusion becomes symptomatic. Surgical decision-making depends on whether decompression, extension fusion, or another strategy addresses the identified pathology."
  },
  {
    title: "Scar tissue considerations",
    body:
      "Scar tissue may obscure normal planes and increase dural or neural risk. Endoscopic surgery requires precise orientation, careful tissue handling, and a willingness to modify the plan when the scar corridor is unsafe."
  },
  {
    title: "Imaging-symptom concordance",
    body:
      "Revision surgery should be based on a concordant relationship between symptoms, neurologic findings, and imaging. Postoperative imaging abnormalities are common and do not automatically define the symptomatic target."
  },
  {
    title: "Surgical decision-making",
    body:
      "Decision-making weighs recurrent compression, instability, deformity, medical risk, prior operative history, patient goals, and the expected value of a limited endoscopic approach compared with other options."
  },
  {
    title: "Educational points",
    body:
      "Revision endoscopic surgery is most coherent when the case is framed as a specific problem: a specific nerve, a specific level, a specific compression pattern, and a realistic surgical endpoint."
  }
];

export const revisionFaqs: FaqItem[] = [
  {
    question: "Why are revision cases evaluated differently?",
    answer:
      "Prior surgery changes anatomy, stability, scar tissue, and imaging interpretation. The surgeon must identify whether another operation has a clearly defined target and an acceptable risk profile."
  },
  {
    question: "Can scar tissue itself be the surgical target?",
    answer:
      "Scar tissue may contribute to symptoms, but revision planning usually focuses on a treatable compressive or instability pattern that matches clinical findings."
  },
  {
    question: "How is adjacent segment disease confirmed?",
    answer:
      "It is evaluated by correlating symptoms, neurologic examination, radiographs, MRI or CT findings, and the status of the previous fusion or decompression."
  }
];

export type CaseExample = {
  caseNumber: string;
  title: string;
  shortTitle: string;
  diagnosis: string;
  procedure: string;
  surgicalLevel: string;
  clinicalPresentation: string;
  neurologicFindings: string;
  conservativeTreatmentSummary?: string;
  imagingSummary: string;
  surgicalRationale?: string;
  operativeNoteSummary: string;
  operativeTime?: string;
  estimatedBloodLoss?: string;
  hospitalStay?: string;
  complications?: string;
  postoperativeCourse: string;
  postoperativeImagingSummary: string;
  educationalPoint: string;
  imagesAvailable: boolean;
  images?: CaseImage[];
};

export const clinicalImageDeidentificationChecklist = [
  "Crop out all top, bottom, and side text overlays before publication.",
  "Remove or mask patient name, chart number, hospital name, date and time, hospital system identifiers, accession numbers, scan numbers, image sequence numbers, and system labels.",
  "Use neutral case-oriented filenames that do not contain names, chart numbers, dates, hospital system text, or patient-related text.",
  "Do not use stock images, decorative spine illustrations, or unrelated medical images inside case galleries.",
  "Publish only fully de-identified educational images with neutral alt text and case-specific de-identified educational captions."
];

export const educationalCases: CaseExample[] = [
  {
    caseNumber: "Case 01",
    title: "Severe Lumbar Spinal Stenosis Treated With Biportal Endoscopic Decompression",
    shortTitle: "Biportal Decompression for Severe Lumbar Stenosis",
    diagnosis:
      "Severe lumbar spinal stenosis with radicular symptoms and objective neurologic deficit.",
    procedure: "Biportal endoscopic lumbar decompression.",
    surgicalLevel: "Clinically concordant lumbar stenosis level or levels.",
    clinicalPresentation:
      "The patient presented with persistent leg-dominant symptoms despite medication, physical therapy, and injection treatment. The clinical findings included left-sided sensory disturbance in an L5 dermatome distribution and motor weakness involving ankle dorsiflexion and great toe dorsiflexion.",
    neurologicFindings:
      "Preoperative neurologic examination demonstrated left ankle dorsiflexion weakness, approximately grade 3, and left great toe dorsiflexion weakness, approximately grade 3. Sensory disturbance was documented in the left L5 dermatome. These findings were reviewed together with imaging before surgical planning.",
    conservativeTreatmentSummary:
      "The patient had persistent symptoms despite medication, physical therapy, and injection treatment. Surgical treatment was considered because symptoms and neurologic findings persisted and were concordant with the stenotic level.",
    imagingSummary:
      "Preoperative lumbar radiographs and MRI demonstrated severe lumbar spinal stenosis at the clinically concordant level or levels. The stenosis pattern included narrowing of the neural canal and compression of the symptomatic neural structures. Imaging findings were interpreted together with the patient's symptoms and neurologic examination rather than as an imaging finding alone.",
    surgicalRationale:
      "Biportal endoscopic decompression was selected to address the symptomatic neural compression while preserving stabilizing structures as appropriate. The surgical target was defined by the relationship between the patient's radicular symptoms, neurologic deficit, and imaging-symptom concordance.",
    operativeNoteSummary:
      "Biportal endoscopic lumbar decompression was performed. The operative workflow focused on identifying the stenotic segment, creating a controlled working corridor, and decompressing the neural elements. A key technical step was careful separation of the adherent ligamentum flavum from the dura. The dissection plane between the hypertrophied or adherent ligamentum flavum and the dura was handled cautiously to reduce dural injury risk during decompression.",
    operativeTime: "30 minutes.",
    estimatedBloodLoss: "To be added after de-identification and editorial review.",
    hospitalStay: "To be added after de-identification and editorial review.",
    complications:
      "To be added after de-identification and editorial review. If no perioperative complication was documented, this field may state that no perioperative complication was documented in this educational case summary.",
    postoperativeCourse:
      "To be added after de-identification and editorial review. If neurologic or symptom improvement was documented, describe it as an observed course in this de-identified case only, not as a promised outcome.",
    postoperativeImagingSummary:
      "Postoperative imaging, if used, should demonstrate decompression at the operated level only after full de-identification. Do not include original screenshot overlays or identifiable image labels.",
    educationalPoint:
      "This case illustrates that severe lumbar stenosis requires precise decompression planning and careful tissue-plane recognition. In severe stenosis, the ligamentum flavum may be hypertrophied or adherent to the dura. Safe decompression depends on identifying and maintaining the correct dissection plane between the ligamentum flavum and the dura, while avoiding unnecessary neural traction or blind instrument movement.",
    ...caseImageData.case01
  },
  {
    caseNumber: "Case 02",
    title: "Degenerative Spondylolisthesis With Left Foot Drop Treated With UBE-TLIF",
    shortTitle: "UBE-TLIF for Degenerative Spondylolisthesis With Foot Drop",
    diagnosis:
      "Degenerative lumbar spondylolisthesis at L4-L5 with foraminal stenosis and left-sided neurologic deficit.",
    procedure: "Left-sided UBE-TLIF at L4-L5.",
    surgicalLevel: "L4-L5.",
    clinicalPresentation:
      "The patient presented with severe left leg pain, gait disturbance, and left foot drop. The clinical symptoms were associated with sensory disturbance in the left L4-L5 dermatome and motor weakness involving ankle dorsiflexion and great toe dorsiflexion.",
    neurologicFindings:
      "Preoperative neurologic examination demonstrated left ankle dorsiflexion weakness, approximately grade 3, and left great toe dorsiflexion weakness, approximately grade 3. Sensory disturbance was documented in the left L4-L5 dermatome. Gait disturbance was clinically significant.",
    imagingSummary:
      "Preoperative lumbar radiographs and MRI demonstrated L4-L5 degenerative spondylolisthesis with foraminal stenosis and neural compression concordant with the patient's left-sided radicular symptoms, sensory disturbance, and foot drop. Dynamic radiographs were reviewed as part of the instability assessment.",
    surgicalRationale:
      "The case was considered for fusion because the symptomatic level showed degenerative spondylolisthesis, foraminal stenosis, and neurologic deficit. The surgical objective was to decompress the affected neural structures and stabilize the L4-L5 segment.",
    operativeNoteSummary:
      "A left-sided UBE-TLIF was performed at L4-L5. The procedure included endoscopic decompression, disc space preparation, interbody fusion, cage placement, and posterior fixation. The operative workflow emphasized clear surgical targeting, efficient decompression, neural protection, and stabilization of the symptomatic segment.",
    operativeTime: "45 minutes.",
    estimatedBloodLoss: "Approximately 200 mL.",
    hospitalStay: "4 days.",
    complications: "No perioperative complication was documented in this educational case summary.",
    postoperativeCourse:
      "Postoperative neurologic follow-up documented improvement of the left-sided motor deficit from approximately grade 3 to grade 4+. This postoperative course is presented as an observation from this de-identified case only and should not be interpreted as predicting similar recovery in other patients.",
    postoperativeImagingSummary:
      "Postoperative radiographs demonstrated L4-L5 interbody fusion and posterior fixation. Postoperative MRI demonstrated decompression at the operated level. Imaging should be presented only after full de-identification.",
    educationalPoint:
      "This case illustrates surgical decision-making in degenerative spondylolisthesis with foraminal stenosis and objective neurologic deficit. In UBE-TLIF, the rationale for fusion should be established first, based on instability, foraminal stenosis, neural compression, and neurologic findings. When fusion is performed in a spinal anesthesia environment, efficient operative workflow, precise surgical targeting, and reduction of unnecessary operative time may be important technical considerations. This should be presented as a technical teaching point rather than a general claim that all fusion surgery should be performed under spinal anesthesia.",
    ...caseImageData.case02
  },
  {
    caseNumber: "Case 03",
    title: "Revision Endoscopic Lumbar Interbody Fusion After Previous Lumbar Surgery",
    shortTitle: "Revision Endoscopic Lumbar Interbody Fusion",
    diagnosis:
      "Recurrent or persistent lumbar symptoms after previous lumbar surgery, with clinically concordant imaging findings and objective neurologic deficit requiring revision endoscopic lumbar interbody fusion.",
    procedure: "Revision endoscopic lumbar interbody fusion at the clinically concordant level.",
    surgicalLevel: "Clinically concordant lumbar revision level.",
    clinicalPresentation:
      "The patient presented with persistent leg-dominant symptoms after previous lumbar surgery. Symptoms continued despite medication, physical therapy, and injection treatment. The case was evaluated for revision surgical treatment because symptoms and neurologic findings persisted.",
    neurologicFindings:
      "Preoperative neurologic examination demonstrated left L5 dermatome sensory disturbance, left ankle dorsiflexion weakness approximately grade 3, and left great toe dorsiflexion weakness approximately grade 3.",
    conservativeTreatmentSummary:
      "Symptoms persisted despite medication, physical therapy, and injection treatment. Revision surgery was considered because the symptoms remained clinically significant and were associated with objective neurologic deficit.",
    imagingSummary:
      "Preoperative radiographs and MRI demonstrated postoperative lumbar changes from the previous surgery and recurrent or residual pathology at the clinically concordant level. Imaging findings were reviewed together with the patient's symptoms and neurologic examination to determine the revision target and the need for interbody fusion rather than decompression alone.",
    surgicalRationale:
      "Revision endoscopic lumbar interbody fusion was selected because the patient had persistent or recurrent symptoms after previous lumbar surgery, associated with objective neurologic deficit and imaging-symptom concordance. The operative objective was decompression of the symptomatic neural structures together with stabilization of the pathologic segment when appropriate.",
    operativeNoteSummary:
      "Revision endoscopic lumbar interbody fusion was performed. The operative workflow focused on safe re-entry into the previous surgical field, careful dissection through scarred tissue, identification of the symptomatic level, neural decompression, disc space preparation, interbody fusion, and stabilization as appropriate. A key technical point in this revision setting was cautious dissection of adhesions related to the previous surgery, with attention to avoiding unnecessary traction or injury to neural and dural structures.",
    operativeTime: "90 minutes.",
    estimatedBloodLoss: "Approximately 450 mL.",
    hospitalStay: "7 days.",
    complications: "To be added after de-identification and editorial review.",
    postoperativeCourse:
      "To be added after de-identification and editorial review. If clinical improvement was documented, it should be described as an observed postoperative course in this de-identified case only.",
    postoperativeImagingSummary:
      "Postoperative imaging should demonstrate revision decompression and interbody fusion changes at the operated level only after full de-identification. Original screenshot overlays or identifiable image labels should not be used.",
    educationalPoint:
      "This case illustrates that revision endoscopic lumbar interbody fusion after previous lumbar surgery requires careful surgical planning and controlled tissue handling. In the revision setting, adhesions from the prior operation may obscure normal tissue planes. Careful dissection of scarred and adherent tissue is essential to maintain a safe working corridor and to reduce the risk of neural or dural injury.",
    ...caseImageData.case03
  },
  {
    caseNumber: "Case 04",
    title: "Adjacent Segment Disease With Bilateral Foot Drop Treated With UBE Extension Fusion",
    shortTitle: "UBE Extension Fusion for Adjacent Segment Disease",
    diagnosis:
      "Adjacent segment disease at L3-L4 after previous L4-S1 fusion, associated with stenosis and bilateral neurologic deficit.",
    procedure: "UBE-assisted screw removal and extension fusion at L3-L4.",
    surgicalLevel:
      "Prior fusion construct: L4-L5-S1. Adjacent segment pathology: L3-L4. Revision and extension fusion field: L3-L4-L5-S1.",
    clinicalPresentation:
      "The patient presented with bilateral foot drop, gait disturbance, and sensory disturbance involving the L4-L5 dermatomes. The symptoms developed in the setting of previous lumbar fusion and were evaluated as a possible adjacent segment disease pattern.",
    neurologicFindings:
      "Preoperative neurologic examination demonstrated bilateral ankle dorsiflexion weakness, approximately grade 3, and bilateral great toe dorsiflexion weakness, approximately grade 3. Sensory disturbance was documented in the bilateral L4-L5 dermatomes. Gait disturbance was clinically significant.",
    imagingSummary:
      "Preoperative lumbar radiographs and MRI demonstrated previous L4-L5-S1 fusion status with adjacent segment pathology at L3-L4. The L3-L4 level showed stenosis and neural compression concordant with the patient's bilateral neurologic symptoms. Dynamic radiographs and postoperative fusion status were reviewed as part of the revision and extension fusion planning.",
    surgicalRationale:
      "The case was considered for revision and extension fusion because the patient had symptomatic adjacent segment disease above a prior fusion construct, with bilateral foot drop and imaging findings concordant with L3-L4 neural compression. The surgical objective was to decompress the affected neural structures and extend stabilization to the adjacent symptomatic level.",
    operativeNoteSummary:
      "UBE-assisted extension fusion was performed at L3-L4 in the setting of a previous L4-L5-S1 fusion construct. The procedure included careful exposure and dissection around the previous screw heads, screw removal or revision as required for extension of the construct, endoscopic decompression, disc space preparation, interbody fusion, cage placement, and posterior fixation. Particular attention was given to identifying the prior hardware safely and minimizing unnecessary tissue disruption during screw-head exposure and removal.",
    operativeTime: "65 minutes.",
    estimatedBloodLoss: "Approximately 300 mL.",
    hospitalStay: "5 days.",
    complications: "No perioperative complication was documented in this educational case summary.",
    postoperativeCourse:
      "Postoperative neurologic follow-up documented improvement of the bilateral motor deficit from approximately grade 3 to grade 5. This postoperative course is presented as an observation from this de-identified case only and should not be interpreted as predicting similar recovery in other patients.",
    postoperativeImagingSummary:
      "Postoperative radiographs demonstrated extension fusion involving the adjacent L3-L4 level in relation to the prior L4-L5-S1 fusion construct. Postoperative imaging should be shown only after complete de-identification.",
    educationalPoint:
      "This case illustrates surgical decision-making in adjacent segment disease after previous lumbar fusion. In revision and extension fusion, the operative target should be supported by symptoms, neurologic findings, prior fusion status, and imaging concordance. When fusion is performed in a spinal anesthesia environment, efficient operative workflow may be an important technical consideration. During screw removal or construct extension, careful dissection around the screw heads is essential to reduce unnecessary tissue trauma and to maintain a controlled revision corridor.",
    ...caseImageData.case04
  },
  {
    caseNumber: "Case 05",
    title: "Endoscopic Cervical Multilevel Decompression for Cervical Spondylotic Myelopathy",
    shortTitle: "UBE Cervical ULBD for CSM",
    diagnosis:
      "Cervical spondylotic myelopathy associated with multilevel cervical spinal stenosis at C4-C6.",
    procedure:
      "UBE cervical unilateral laminotomy for bilateral decompression, ULBD, at C4-5 and C5-6 through a left-sided approach.",
    surgicalLevel: "C4-5 and C5-6.",
    clinicalPresentation:
      "The patient presented with gait imbalance and subjective lower-extremity weakness. The clinical history suggested progressive myelopathic symptoms rather than isolated radiculopathy. Cervical imaging was reviewed together with the neurologic examination before surgical planning.",
    neurologicFindings:
      "The clinical record described gait disturbance and lower-extremity weakness symptoms. Upper-extremity motor testing was not clearly focal in the available summary. Sensory findings and long-tract signs should be included only if verified from the de-identified clinical record.",
    imagingSummary:
      "Preoperative cervical radiographs and MRI demonstrated multilevel cervical spondylotic stenosis at C4-C6. The MRI findings were reviewed for spinal cord compression and possible cord signal change in the context of cervical spondylotic myelopathy.",
    surgicalRationale:
      "Endoscopic cervical decompression was considered because the patient had clinical features consistent with cervical myelopathy and imaging findings of multilevel cervical stenosis. The surgical objective was posterior decompression of the cervical spinal canal at the clinically concordant levels while preserving posterior stabilizing structures as appropriate.",
    operativeNoteSummary:
      "UBE cervical ULBD was performed at C4-5 and C5-6 through a left-sided approach. The operative workflow focused on controlled posterior decompression, identification of the laminar and ligamentous anatomy, protection of the dura and spinal cord, and bilateral decompression through a unilateral endoscopic corridor.",
    operativeTime: "Approximately 50 minutes.",
    estimatedBloodLoss: "Approximately 100 mL.",
    hospitalStay: "To be added after de-identification and editorial review.",
    complications: "To be added after de-identification and editorial review.",
    postoperativeCourse:
      "To be added after de-identification and editorial review. If gait, balance, or neurologic findings improved after surgery, this should be described only as an observed course in this de-identified case and should not imply that similar recovery should be expected in other patients.",
    postoperativeImagingSummary:
      "Postoperative cervical MRI demonstrated decompression at the operated cervical levels. Imaging should be shown only after complete de-identification.",
    educationalPoint:
      "This case illustrates the use of endoscopic posterior cervical decompression for multilevel cervical spondylotic myelopathy. In cervical myelopathy, the operative goal is not simply nerve-root decompression but adequate spinal cord decompression at the clinically concordant levels. During UBE cervical ULBD, careful orientation to laminar anatomy, ligamentous structures, the dura, and the spinal cord is essential. Because the cervical spinal cord is less tolerant of compression, traction, or instrument misdirection, controlled decompression and avoidance of blind instrument movement are critical technical considerations.",
    ...caseImageData.case05
  }
];

export type AcademicPresentationRecord = {
  title: string;
  academicFocus: string;
  keyTopics: string[];
  educationalSummary: string;
  status: string;
  focusTerms: string[];
};

export const academicPresentationRecords: AcademicPresentationRecord[] = [
  {
    title: "Etiologies of Early Re-Operation After Biportal Endoscopic Spine Surgery",
    academicFocus:
      "Biportal endoscopic spine surgery, BESS, early re-operation, revision causes, complication analysis.",
    keyTopics: [
      "Early re-operation after biportal endoscopic spine surgery",
      "Recurrent lumbar disc herniation",
      "Postoperative hematoma",
      "Remnant disc fragment",
      "Wrong-level surgery",
      "Incomplete decompression",
      "Dural injury",
      "Infection",
      "Diagnostic mismatch"
    ],
    educationalSummary:
      "This presentation reviewed early re-operation patterns after biportal endoscopic spine surgery and categorized causes into recurrent pathology, postoperative complications, technical factors, and diagnostic factors. The academic emphasis was on recognizing potentially preventable causes, confirming the operative level, reviewing postoperative MRI when symptoms persist, maintaining a clear operative field, and improving revision decision-making.",
    status:
      "Presentation material on file. Conference and date details should be verified before formal citation.",
    focusTerms: [
      "BESS",
      "Biportal endoscopic spine surgery",
      "Early re-operation",
      "Revision spine surgery",
      "Recurrent disc herniation",
      "Postoperative hematoma"
    ]
  },
  {
    title: "Etiologies of Early Re-Operation After Unilateral Biportal Endoscopy",
    academicFocus: "UBE, early re-operation, complication analysis, revision strategy.",
    keyTopics: [
      "Unilateral biportal endoscopy",
      "Recurrent disc herniation",
      "Remnant disc fragment",
      "Postoperative hematoma",
      "Dural tear",
      "Wrong-level surgery",
      "Incomplete decompression",
      "Neural tissue safety"
    ],
    educationalSummary:
      "This academic presentation analyzed early re-operation after unilateral biportal endoscopy and emphasized accurate diagnosis, repeated level confirmation, clear visualization, bleeding control, careful handling of neural tissues, and early recognition of persistent or recurrent neural compression.",
    status: "Presentation material on file.",
    focusTerms: [
      "UBE",
      "Unilateral biportal endoscopy",
      "Revision surgery",
      "Complication analysis",
      "Endoscopic spine surgery"
    ]
  },
  {
    title: "Unilateral Biportal Endoscopy for Recurrent Lumbar Disease",
    academicFocus: "Recurrent lumbar disc herniation, foraminal re-stenosis, revision UBE.",
    keyTopics: [
      "Recurrent lumbar disc disease",
      "Recurrent foraminal stenosis",
      "Revision endoscopic decompression",
      "Altered postoperative anatomy",
      "Foraminal decompression",
      "Case-based surgical planning"
    ],
    educationalSummary:
      "This case-based educational material discussed unilateral biportal endoscopic approaches for recurrent lumbar disease, including recurrent lumbar disc herniation and foraminal re-stenosis. The educational focus was on defining the recurrent compressive target, selecting a safe endoscopic corridor, and recognizing the altered anatomy of revision surgery.",
    status: "Presentation material on file.",
    focusTerms: [
      "Recurrent lumbar disease",
      "Recurrent HNP",
      "Foraminal re-stenosis",
      "Revision UBE",
      "Endoscopic revision surgery"
    ]
  },
  {
    title: "Degenerative Lumbar Spondylolisthesis: Consideration of UBE Decompression versus Open Decompression",
    academicFocus:
      "Grade 1 degenerative lumbar spondylolisthesis, decompression strategy, fusion decision-making, UBE-TLIF.",
    keyTopics: [
      "Low-grade degenerative lumbar spondylolisthesis",
      "Lumbar spinal stenosis",
      "UBE decompression",
      "Open decompression",
      "Secondary fusion",
      "Slip progression",
      "UBE-TLIF",
      "Surgical indication selection"
    ],
    educationalSummary:
      "This presentation reviewed treatment considerations for selected low-grade degenerative lumbar spondylolisthesis and discussed decompression, fusion indications, minimally invasive decompression, and UBE-TLIF as a technical option. The presentation emphasized that unstable or high-grade spondylolisthesis requires careful consideration of fusion, while selected low-grade cases may be discussed in the context of decompressive strategies.",
    status: "Presentation material on file.",
    focusTerms: [
      "Degenerative lumbar spondylolisthesis",
      "Grade 1 spondylolisthesis",
      "UBE decompression",
      "Open decompression",
      "UBE-TLIF",
      "Fusion indication"
    ]
  },
  {
    title: "Unilateral Biportal Endoscopic Cervical Laminoforaminotomy: An Initial Clinical Experience",
    academicFocus: "Cervical foraminal stenosis, cervical disc disease, UBE posterior foraminotomy.",
    keyTopics: [
      "Cervical posterior laminoforaminotomy",
      "Cervical foraminal stenosis",
      "Cervical disc disease",
      "V-point identification",
      "Facet drilling",
      "Ligamentum flavum removal",
      "Nerve root decompression",
      "Root-free confirmation"
    ],
    educationalSummary:
      "This educational presentation reviewed early clinical experience with unilateral biportal endoscopic cervical laminoforaminotomy for selected cervical foraminal stenosis and cervical disc disease. The technical discussion included V-point identification, facet drilling, laminoforaminotomy, ligamentum flavum removal, additional foraminal decompression, and confirmation of nerve root decompression.",
    status: "Presentation material on file.",
    focusTerms: [
      "Cervical foraminotomy",
      "Cervical laminoforaminotomy",
      "UBE cervical surgery",
      "Cervical foraminal stenosis",
      "Cervical disc disease"
    ]
  },
  {
    title: "Unilateral Laminectomy for Bilateral Decompression by UBE for Cervical Spondylotic Myelopathy",
    academicFocus: "Cervical spondylotic myelopathy, UBE ULBD, cervical decompression.",
    keyTopics: [
      "Cervical spondylotic myelopathy",
      "UBE-based unilateral laminectomy for bilateral decompression",
      "Cervical ULBD",
      "Posterior decompression",
      "Cord decompression",
      "Technical feasibility",
      "Early experience",
      "Need for further study"
    ],
    educationalSummary:
      "This technical educational presentation discussed selected early experience with UBE-based unilateral laminectomy for bilateral decompression in cervical spondylotic myelopathy. The material was presented as a technical and academic discussion, and it noted that further study is necessary before broad conclusions can be made.",
    status: "Presentation material on file.",
    focusTerms: [
      "Cervical spondylotic myelopathy",
      "Cervical ULBD",
      "UBE",
      "Posterior cervical decompression",
      "Endoscopic cervical surgery"
    ]
  },
  {
    title: "Dural Injury and Revision Decision-Making in Endoscopic Spine Surgery",
    academicFocus:
      "Complication recognition, dural injury, postoperative neurologic change, revision decision-making.",
    keyTopics: [
      "Dural injury",
      "Postoperative neurologic deterioration",
      "Postoperative MRI review",
      "Revision decision-making",
      "Complication recognition",
      "Endoscopic spine surgery safety",
      "Case-based education"
    ],
    educationalSummary:
      "This case-based educational material focused on complication recognition and revision decision-making in endoscopic spine surgery. The educational emphasis was on postoperative neurologic change, imaging review, identification of compressive pathology or procedure-related complications, and careful decision-making regarding re-exploration.",
    status: "Internal educational presentation material.",
    focusTerms: [
      "Dural injury",
      "Complication recognition",
      "Revision spine surgery",
      "Postoperative MRI",
      "Endoscopic spine surgery safety"
    ]
  }
];

export const academicActivitySections = [
  {
    title: "Academic themes",
    items: [
      "Surgical indications and limitations in endoscopic spine surgery.",
      "Complication analysis and revision strategy in complex lumbar spine surgery.",
      "Technical decision-making in UBE-TLIF and endoscopic lumbar fusion.",
      "Cervical endoscopic decompression, cervical foraminotomy, and cervical spondylotic myelopathy."
    ]
  },
  {
    title: "Educational scope",
    items: [
      "Physician-facing educational summaries based on selected presentation materials.",
      "Technical discussion of surgical anatomy, operative planning, and imaging-symptom concordance.",
      "Professional academic archive for lectures, conference presentations, workshops, and surgeon education."
    ]
  },
  {
    title: "Public release policy",
    items: [
      "Raw PowerPoint files are not publicly uploaded or linked.",
      "Patient-specific clinical image sets are not publicly provided.",
      "Any future clinical images must be fully de-identified according to the website editorial policy."
    ]
  }
];

export type OperativeConcept = {
  slug: string;
  title: string;
  excerpt: string;
  keywords: string[];
  sections: ContentSection[];
};

export const operativeConcepts: OperativeConcept[] = [
  {
    slug: "imaging-symptom-concordance",
    title: "Why imaging-symptom concordance matters",
    excerpt:
      "A surgical target is better defined when symptoms, neurologic findings, and imaging point to the same anatomical problem.",
    keywords: ["Imaging-symptom concordance", "Lumbar spinal stenosis", "Surgical decision-making"],
    sections: [
      {
        title: "Clinical premise",
        body:
          "Degenerative imaging findings are common, especially in older adults. Surgery should not be planned from MRI appearance alone; the imaging target must explain the patient's dominant symptoms and examination findings."
      },
      {
        title: "Operative relevance",
        body:
          "Concordance guides level selection, decompression boundaries, fusion reasoning, and the decision to defer surgery when the pain generator remains uncertain."
      },
      {
        title: "Educational summary",
        body:
          "A clear concordance statement helps define the operative target in complex degenerative lumbar disease."
      }
    ]
  },
  {
    slug: "decompression-strategy-severe-lumbar-stenosis",
    title: "Decompression strategy in severe lumbar stenosis",
    excerpt:
      "Severe stenosis requires a planned sequence for exposure, ligament handling, contralateral reach, and neural safety.",
    keywords: ["Lumbar stenosis", "Biportal endoscopic decompression", "Neural decompression"],
    sections: [
      {
        title: "Defining the stenosis pattern",
        body:
          "Central canal, lateral recess, and foraminal stenosis have different anatomical constraints. The decompression strategy begins by naming the compression pattern and symptomatic nerve target."
      },
      {
        title: "Preserving stability",
        body:
          "Facet preservation, pars protection, and controlled bone removal are important when decompression is performed without fusion."
      },
      {
        title: "Technical boundaries",
        body:
          "When adequate decompression would require destabilizing bone removal, the surgical plan may need to change from decompression alone to a stabilization strategy."
      }
    ]
  },
  {
    slug: "technical-boundaries-endoscopic-lumbar-fusion",
    title: "Technical boundaries of endoscopic lumbar fusion",
    excerpt:
      "UBE-TLIF has technical and biological limits that should be stated clearly in preoperative planning.",
    keywords: ["UBE-TLIF", "Endoscopic lumbar fusion", "Degenerative spondylolisthesis"],
    sections: [
      {
        title: "Fusion indication first",
        body:
          "The rationale for fusion should be established before focusing on the access method. Instability, foraminal collapse, recurrent stenosis, and expected decompression-related destabilization are common considerations."
      },
      {
        title: "Implant and graft constraints",
        body:
          "Endplate preparation, cage trajectory, bone quality, disc height, and fixation strength influence whether an endoscopic fusion strategy is technically appropriate."
      },
      {
        title: "When to choose another approach",
        body:
          "Severe deformity, high-grade slip, major sagittal correction needs, infection, tumor, or inadequate fixation environment may require a different surgical strategy."
      }
    ]
  },
  {
    slug: "revision-surgery-endoscopic-visualization",
    title: "Revision surgery under endoscopic visualization",
    excerpt:
      "Revision endoscopy emphasizes altered anatomy, scar tissue, and a narrowly defined operative target.",
    keywords: ["Revision spine surgery", "Endoscopic revision", "Recurrent disc herniation"],
    sections: [
      {
        title: "Altered anatomy",
        body:
          "Prior decompression or fusion changes landmarks, removes bone, and may create scar tissue around neural structures. Preoperative imaging and prior operative details are central."
      },
      {
        title: "Targeted corridor",
        body:
          "The endoscopic corridor should be selected to reach a specific recurrent compression while reducing unnecessary dissection through scarred tissue."
      },
      {
        title: "Decision threshold",
        body:
          "Revision surgery should proceed only when the expected surgical endpoint is specific enough to justify the increased risk environment."
      }
    ]
  },
  {
    slug: "managing-bleeding-biportal-endoscopic-surgery",
    title: "Managing bleeding in biportal endoscopic surgery",
    excerpt:
      "Hemostasis in an irrigated endoscopic field requires anticipation, outflow control, and precise tissue handling.",
    keywords: ["Biportal endoscopic spine surgery", "Bleeding control", "Endoscopic visualization"],
    sections: [
      {
        title: "Why bleeding is different",
        body:
          "In biportal surgery, even modest bleeding can degrade visualization. Continuous irrigation helps, but pressure and outflow must be managed deliberately."
      },
      {
        title: "Practical considerations",
        body:
          "Technical planning includes maintaining a clear outflow path, identifying epidural venous bleeding, using appropriate energy devices, and avoiding prolonged blind instrument movement."
      },
      {
        title: "Risk awareness",
        body:
          "Bleeding control is linked to neural safety, operative time, fluid management, and postoperative hematoma prevention."
      }
    ]
  },
  {
    slug: "learning-curve-ube-surgery",
    title: "Learning curve in UBE surgery",
    excerpt:
      "UBE surgery involves a distinct set of visual, ergonomic, and safety-related skills that should be learned progressively.",
    keywords: ["UBE", "Surgeon education", "Learning curve"],
    sections: [
      {
        title: "Skill domains",
        body:
          "The learning curve includes endoscopic orientation, portal triangulation, irrigation control, bleeding management, contralateral decompression, and complication recognition."
      },
      {
        title: "Case selection",
        body:
          "Progressive case selection is important. Early cases should be anatomically straightforward and aligned with the surgeon's existing decompression skills."
      },
      {
        title: "Educational responsibility",
        body:
          "Teaching UBE surgery should include limitations, complication management, and conversion planning rather than technique demonstration alone."
      }
    ]
  },
  {
    slug: "surgical-decision-making-elderly-patients",
    title: "Surgical decision-making in elderly patients",
    excerpt:
      "Older patients require planning that integrates neurologic need, medical risk, frailty, bone quality, and recovery goals.",
    keywords: ["Elderly spine surgery", "Lumbar stenosis", "Patient selection"],
    sections: [
      {
        title: "Beyond technical feasibility",
        body:
          "A technically possible operation may not be the appropriate operation if medical risk, frailty, or recovery capacity changes the clinical rationale for surgery."
      },
      {
        title: "Risk-specific planning",
        body:
          "Bone quality, anticoagulation, cardiopulmonary status, delirium risk, and rehabilitation needs should be considered before choosing decompression, fusion, or nonoperative management."
      },
      {
        title: "Goal alignment",
        body:
          "The plan should define realistic goals such as walking tolerance, radicular symptom relief, neurologic protection, and avoidance of unnecessary operative burden."
      }
    ]
  }
];
