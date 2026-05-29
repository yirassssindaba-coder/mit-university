export const proposal = {
  title:
    "Responsible AI Systems for Student Support and Institutional Intelligence: Toward Fairness-Aware, Privacy-Preserving, and Explainable Educational AI",
  subtitle: "Doctoral Research Proposal — Draft for Application Purposes",
  disclaimer:
    "This is a draft proposal prepared for doctoral application. It has not been submitted to or reviewed by any academic institution. No supervisor approval, institutional affiliation, or funding confirmation has been made.",

  problemGap: {
    heading: "Problem Gap",
    content: [
      "Contemporary educational AI systems are predominantly designed around predictive performance: accuracy on held-out test sets, F-score improvements over rule-based baselines, computational efficiency at scale. What these systems systematically underspecify is the governance question — who bears the cost when a prediction is wrong, and whether the system's operational logic is legible to the students it affects.",
      "The gap is not merely technical. It is structural. Predictive models trained on historically biased institutional records encode past inequity as statistical regularity. Feedback intelligence systems deployed without consent frameworks transform institutional communication into covert surveillance infrastructure. Classification systems optimized for aggregate accuracy can simultaneously impose systematic harm on specific demographic groups while reporting favorable mean metrics.",
      "This proposal addresses that gap directly: not by proposing a more accurate prediction model, but by asking what a responsible educational AI system would need to look like — in terms of fairness auditing, explainability, privacy preservation, and accountability architecture — and what empirical evidence would be required to argue that such a system is actually safer to deploy.",
    ],
  },

  researchQuestions: [
    "How can fairness-aware learning methods reduce demographic bias in student performance prediction without unacceptable sacrifice of predictive validity, and what trade-off frontiers are achievable on real institutional datasets?",
    "To what extent can privacy-preserving NLP methods (federated learning, differential privacy, local computation) accurately infer institutional feedback signals while maintaining student data governance compliance?",
    "What evaluation frameworks can meaningfully assess the societal impact — including second-order effects on student agency, institutional accountability, and equity — of AI systems deployed in educational settings at scale?",
  ],

  methodology: {
    heading: "Proposed Methodology",
    overview:
      "The proposed methodology integrates four research phases: data governance and pipeline construction; fairness-constrained model development; explainability layer design; and multi-institution deployment evaluation.",
    phases: [
      {
        label: "Data Collection",
        description: "Multi-institution student records with explicit consent frameworks and IRB-equivalent review",
      },
      {
        label: "Preprocessing",
        description: "Anonymization pipeline, demographic proxy removal, data card documentation",
      },
      {
        label: "Fairness Audit",
        description:
          "Demographic parity, equalized odds, counterfactual fairness measurement before model selection",
      },
      {
        label: "Model Training",
        description: "Fairness-constrained learning (reweighting, adversarial debiasing, in-processing constraints)",
      },
      {
        label: "Explainability Layer",
        description: "SHAP-based feature attribution, LIME local explanations, student-facing explanation interface",
      },
      {
        label: "Deployment & Monitoring",
        description:
          "Multi-institution pilot evaluation, longitudinal fairness drift monitoring, human-in-the-loop governance protocol",
      },
    ],
    fairnessMetrics: [
      "Demographic Parity Difference (DPD)",
      "Equalized Odds Difference (EOD)",
      "Counterfactual Fairness (CF)",
      "Individual Fairness via metric learning",
    ],
    privacyApproaches: [
      "Federated learning for cross-institution training without raw data sharing",
      "Differential privacy (ε-DP) for gradient-level privacy in NLP fine-tuning",
      "Local computation for sensitive feature extraction",
    ],
  },

  preliminaryEvidence: {
    heading: "Preliminary Evidence",
    content:
      "Five preliminary projects provide feasibility evidence for the proposed doctoral research. Taken individually, each demonstrates competence in a relevant sub-domain. Taken together, they constitute a convergent body of preliminary work that addresses different facets of the doctoral proposal.",
    connections: [
      "Project 1 (Student Performance Prediction) → directly addresses RQ1; demonstrates fairness gap measurement",
      "Project 2 (Housing Analysis) → establishes socio-technical methodology for policy-adjacent AI research",
      "Project 3 (Sentiment Analysis) → directly addresses RQ2; demonstrates NLP for institutional text",
      "Project 4 (Computer Vision) → demonstrates computational experimentation and domain shift awareness",
      "Project 5 (Portfolio) → demonstrates research communication, evidence organization, reproducibility commitment",
    ],
  },

  evaluationPlan: {
    heading: "Evaluation Plan",
    internal: [
      "10-fold stratified cross-validation on each institutional dataset",
      "Ablation study: contribution of each fairness constraint component",
      "Sensitivity analysis: fairness-accuracy trade-off at multiple constraint thresholds",
    ],
    external: [
      "Multi-institution holdout evaluation (target: 3 institutions across 2 countries)",
      "Longitudinal monitoring: fairness drift over 2 academic semesters",
      "Expert evaluation: domain expert and affected student group review",
    ],
    reproducibility: [
      "Full code release under open-source license",
      "Data card documentation for each dataset used",
      "Model card for each trained model",
      "Reproducibility package with random seed specification and environment pinning",
    ],
  },

  datasetAndPrivacy: {
    heading: "Dataset & Privacy Considerations",
    points: [
      "All datasets will require explicit informed consent from participating students, with clear disclosure of research use and right to withdrawal",
      "IRB-equivalent ethical review (or institutional equivalent in Malaysia/international context) will be completed before any data collection",
      "Data minimization principle: only features directly relevant to research questions will be collected and retained",
      "Anonymization pipeline: student identifiers replaced with research pseudonyms; demographic proxies removed from model inputs before training",
      "Data residency: no student records will be transferred across jurisdictions without explicit consent and legal clearance",
      "Sunset clause: all research data to be securely deleted 12 months after dissertation defense unless re-consent obtained",
    ],
  },

  researchEthics: {
    heading: "Research Ethics",
    points: [
      "Algorithmic fairness: the primary obligation is to the students affected by predictions, not to the institution commissioning the system",
      "Harm avoidance: no prediction output will be used in automated decision-making without human review and appeal mechanism",
      "Student agency preservation: explainability layer designed to empower students to understand and contest predictions",
      "Institutional accountability: deployment recommendations include governance framework with clear human-in-the-loop requirements",
      "Dual-use risk: published fairness auditing tools could be misappropriated to certify unfair systems as compliant — mitigation plan required",
      "Publication ethics: all preliminary results presented as exploratory; no claims of generalizability beyond tested conditions",
    ],
  },

  limitations: {
    heading: "Acknowledged Limitations",
    points: [
      "Preliminary data is sourced from a single institution with English-language instrumentation — generalizability to multilingual, low-resource, or non-Western institutional contexts is unproven",
      "Fairness metrics are operationalized using demographic categories that may not capture the full complexity of intersectional identity",
      "Federated learning approaches assume institutional willingness to participate in collaborative training — institutional resistance is a real deployment risk",
      "The research agenda is ambitious for a single dissertation — scope reduction and prioritization will be required after Year 1 review",
    ],
  },

  expectedContribution: {
    heading: "Expected Contribution",
    contributions: [
      {
        type: "Technical Contribution",
        description:
          "Fairness-aware student prediction framework with open-source implementation, validated across multiple institutions",
      },
      {
        type: "NLP Contribution",
        description:
          "Privacy-preserving feedback intelligence system with federated NLP architecture and domain adaptation methodology",
      },
      {
        type: "Evaluation Contribution",
        description:
          "Novel evaluation framework for societal impact assessment of educational AI, including longitudinal fairness drift metrics",
      },
      {
        type: "Policy Contribution",
        description:
          "Draft governance framework for responsible deployment of AI in educational settings, informed by empirical findings",
      },
      {
        type: "Open Science Contribution",
        description:
          "Reproducibility package including data cards, model cards, and environment specifications for all experimental results",
      },
    ],
  },

  labFit: {
    heading: "Potential Advisor & Lab Alignment",
    disclaimer:
      "The following assessments are the applicant's independent analysis of published research directions. No formal faculty contact, supervisor confirmation, or institutional communication has taken place. These are research fit hypotheses, not confirmed relationships.",
    labs: [
      {
        name: "MIT CSAIL — HCI Engineering Group",
        url: "https://hcie.csail.mit.edu",
        alignment:
          "Research on AI systems that support human agency and decision-making aligns directly with the explainability and student-facing interface components of this proposal.",
      },
      {
        name: "MIT Jameel Clinic — AI for Health & Education",
        url: "https://jameel.mit.edu",
        alignment:
          "Jameel Clinic's focus on responsible AI deployment in high-stakes social domains, including education, maps closely to the governance and fairness components of this research.",
      },
      {
        name: "MIT IDSS — Institute for Data, Systems, and Society",
        url: "https://idss.mit.edu",
        alignment:
          "IDSS's interdisciplinary approach connecting data science with social systems and policy implications is directly relevant to the socio-technical framing of this doctoral proposal.",
      },
      {
        name: "MIT Media Lab — Learning + Societal Impact",
        url: "https://www.media.mit.edu",
        alignment:
          "The Media Lab's tradition of research at the intersection of technology, society, and education offers relevant methodological and conceptual frameworks for student-centered AI design.",
      },
      {
        name: "MIT RAISE — Responsible AI for Social Empowerment",
        url: "https://raise.mit.edu",
        alignment:
          "RAISE's explicit focus on responsible AI for education and social empowerment represents the closest institutional alignment with this research agenda's ethical commitments.",
      },
    ],
  },

  publicationRoadmap: [
    {
      year: "Year 1",
      target: "Workshop Paper",
      venue: "NeurIPS 2026 Workshop on Fairness in Machine Learning (FAccTML) or AIED Workshop",
      topic: "Fairness auditing results from student performance prediction: demographic parity gaps and correction strategies",
      status: "Planned",
    },
    {
      year: "Year 2",
      target: "Conference Paper",
      venue: "AIED 2027 or EDM 2027 (Educational Data Mining)",
      topic:
        "Privacy-preserving NLP for institutional feedback: federated fine-tuning and student data governance framework",
      status: "Planned",
    },
    {
      year: "Year 3",
      target: "Journal Submission",
      venue: "International Journal of Artificial Intelligence in Education (IJAIED) or IEEE TETC",
      topic:
        "Toward responsible educational AI: an integrated framework for fairness, explainability, and privacy in student support systems",
      status: "Planned",
    },
    {
      year: "Year 4",
      target: "Dissertation + Policy Brief",
      venue: "MIT Thesis Repository + MIT Jameel Clinic Policy Working Paper Series",
      topic: "Full dissertation + policy recommendations for institutional AI deployment governance",
      status: "Planned",
    },
  ],
};
