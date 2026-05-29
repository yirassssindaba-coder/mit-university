export interface ProjectMetric {
  name: string;
  value: number;
}

export interface ProjectChart {
  type: "bar" | "line";
  data: ProjectMetric[];
  xKey: string;
  yKey: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  researchType: string;
  year: string;
  problemStatement: string;
  researchQuestions: string[];
  methodology: string;
  keyResult: string;
  toolsStack: string[];
  limitation: string;
  ethicalNote: string;
  publicationReadiness: string;
  githubUrl: string;
  demoUrl: string;
  chart: ProjectChart | null;
  techBadges?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Student Performance Prediction",
    subtitle: "Early Risk Detection Using Machine Learning on Longitudinal Student Data",
    researchType: "Data-Centric AI Study",
    year: "2022–2023",
    problemStatement:
      "Educational institutions collect rich longitudinal data on student behavior, yet most early-warning systems rely on reactive, rule-based thresholds. This study investigates whether supervised learning models can identify at-risk students earlier and more reliably — while examining whether such predictions introduce or amplify demographic bias.",
    researchQuestions: [
      "Can early-signal features (engagement, attendance, assessment trajectory) reliably predict student underperformance with F1 > 0.75?",
      "Do model predictions exhibit demographic disparity across protected attributes, and if so, how large is the parity gap?",
      "What is the trade-off between predictive accuracy and fairness-preserving constraints in this domain?",
    ],
    methodology:
      "Feature engineering from anonymized student records. Three supervised classifiers: Logistic Regression (baseline), Random Forest, and XGBoost. 10-fold cross-validation. Evaluation: F1-score, AUC-ROC, demographic parity difference, equalized odds. Post-hoc SHAP for feature attribution.",
    keyResult:
      "XGBoost achieved F1=0.81 (AUC=0.87). Demographic parity difference of 0.14 detected between two cohort groups — indicating meaningful fairness risk. SHAP analysis identified prior GPA and attendance rate as dominant predictors.",
    toolsStack: ["Python", "scikit-learn", "XGBoost", "SHAP", "Pandas", "Matplotlib"],
    limitation:
      "Dataset sourced from a single institution with limited temporal depth (2 semesters). Demographic features are coarse proxies. Results may not generalize across institution types or curricular contexts.",
    ethicalNote:
      "Risk of label bias from historically biased grading. Student consent for data re-use not confirmed. Prediction outputs must not trigger automated institutional decisions without human review.",
    publicationReadiness: "Workshop-Level — Requires Multi-Institution Validation",
    githubUrl: "#",
    demoUrl: "#",
    chart: {
      type: "bar",
      data: [
        { name: "Log. Reg.", value: 0.72 },
        { name: "Rand. Forest", value: 0.78 },
        { name: "XGBoost", value: 0.81 },
      ],
      xKey: "name",
      yKey: "value",
      label: "F1-Score by Model",
    },
  },
  {
    id: 2,
    title: "Malaysia Housing & Cost of Living Analysis",
    subtitle: "Socio-Technical Decision Support Through Regional Data Science",
    researchType: "Socio-Technical Decision Support",
    year: "2023",
    problemStatement:
      "Housing affordability in Malaysia is a structurally complex problem shaped by urban density, income stratification, and policy asymmetry across states. Existing analyses rely on aggregate national indices that obscure regional variance. This project applies regression and geospatial methods to multi-source government data to surface regional disparities in housing affordability.",
    researchQuestions: [
      "What structural factors most strongly predict housing affordability disparity across Malaysian states?",
      "Is there a measurable relationship between urban density and an unaffordability index beyond income-level effects?",
      "Can a data-driven affordability model inform state-level housing policy without replicating discriminatory patterns?",
    ],
    methodology:
      "Multi-source dataset construction from government housing data and national cost of living surveys. Multiple regression with stepwise feature selection. Geospatial visualization of affordability index across 13 states. Correlation analysis with urban density, income quintiles, and infrastructure access.",
    keyResult:
      "Urban density explains 61–79% of affordability variance (R²=0.79 urban, R²=0.61 rural). Infrastructure access and income quintile dispersion are secondary predictors. States with high density + low income support show double-burden unaffordability.",
    toolsStack: ["Python", "GeoPandas", "statsmodels", "Plotly", "Folium", "Pandas"],
    limitation:
      "Data window limited to 2019–2022. Informal housing sector excluded. Cross-state comparisons confounded by differing municipal classification systems.",
    ethicalNote:
      "Policy recommendation risk: data-driven affordability models may be used to justify displacement if deployed without participatory community input. Representativeness of rural data is limited.",
    publicationReadiness: "Workshop-Level — Regional Conference or Data Policy Track",
    githubUrl: "#",
    demoUrl: "#",
    chart: {
      type: "line",
      data: [
        { name: "Kelantan", value: 3.2 },
        { name: "Perak", value: 4.1 },
        { name: "Johor", value: 5.6 },
        { name: "Selangor", value: 7.8 },
        { name: "KL", value: 9.4 },
        { name: "Penang", value: 8.7 },
      ],
      xKey: "name",
      yKey: "value",
      label: "Unaffordability Index by State",
    },
  },
  {
    id: 3,
    title: "Text Sentiment Analysis for Student Feedback",
    subtitle: "Fine-Tuning Transformer Models for Institutional Feedback Intelligence",
    researchType: "NLP Research Prototype",
    year: "2023–2024",
    problemStatement:
      "Institutional feedback systems generate large volumes of unstructured text that remain largely unanalyzed due to manual processing costs. Automated sentiment analysis offers a path toward scalable feedback intelligence — but standard NLP models trained on social media or product reviews fail to capture the nuanced dissatisfaction signals embedded in academic feedback language.",
    researchQuestions: [
      "Can a domain-adapted BERT model outperform lexicon-based sentiment baselines on academic institutional feedback text?",
      "What linguistic features distinguish constructive dissatisfaction from surface-level negative sentiment in this domain?",
      "How does sentiment classification confidence correlate with actionability of the underlying feedback content?",
    ],
    methodology:
      "Dataset: student feedback text from institutional LMS (anonymized). Preprocessing: punctuation normalization, stop-word retention for negation. Models: BERT-base fine-tuned on labeled subset (3-class: positive, neutral, negative), VADER lexicon baseline. Evaluation: Precision, Recall, F1 per class. Error analysis on misclassified samples.",
    keyResult:
      "BERT achieved macro-F1=0.86 vs. lexicon baseline F1=0.71. Largest gain in 'neutral' class (F1: 0.54 → 0.82). Qualitative error analysis identified sarcasm and formal hedging language as primary misclassification drivers.",
    toolsStack: ["Python", "Hugging Face Transformers", "NLTK", "VADER", "PyTorch", "scikit-learn"],
    limitation:
      "English-only dataset. Single institutional source — likely institution-specific discourse patterns. Labeling performed by two annotators with moderate inter-rater agreement (κ=0.72).",
    ethicalNote:
      "Surveillance risk if deployed for continuous monitoring without student consent. Feedback sentiment should not be used for individual student profiling. Institutional power asymmetry in data access requires governance framework.",
    publicationReadiness: "Workshop-Level — NLP / Educational Data Mining Track",
    githubUrl: "#",
    demoUrl: "#",
    chart: {
      type: "bar",
      data: [
        { name: "BERT Precision", value: 0.87 },
        { name: "BERT Recall", value: 0.85 },
        { name: "BERT F1", value: 0.86 },
        { name: "Lexicon F1", value: 0.71 },
      ],
      xKey: "name",
      yKey: "value",
      label: "BERT vs. Lexicon Baseline",
    },
  },
  {
    id: 4,
    title: "Computer Vision Image Classification",
    subtitle: "Domain Shift Effects on Transfer Learning Generalization",
    researchType: "Vision Research Experiment",
    year: "2024",
    problemStatement:
      "Transfer learning via ImageNet-pretrained models has become a dominant paradigm in applied computer vision. However, domain shift — the statistical mismatch between pretraining and deployment distributions — remains underexamined in resource-constrained classification tasks. This experiment investigates how domain shift affects ResNet-50 generalization versus a custom CNN trained from scratch under identical conditions.",
    researchQuestions: [
      "How does domain shift between ImageNet and the target domain affect Top-1 accuracy of a fine-tuned ResNet-50?",
      "Does a custom CNN trained from scratch exhibit a different accuracy-overfitting trade-off compared to transfer learning under data-constrained conditions?",
      "What data augmentation strategies most effectively mitigate domain shift in the target domain?",
    ],
    methodology:
      "Custom image dataset: ~8,000 images across 12 classes under variable lighting conditions. Models: ResNet-50 (ImageNet pretrained, fine-tuned) and custom 5-layer CNN (trained from scratch). Training: 30 epochs, Adam optimizer, cosine LR schedule. Evaluation: Top-1 accuracy, confusion matrix, class-specific F1.",
    keyResult:
      "ResNet-50 Top-1=0.89, Custom CNN Top-1=0.76. Domain shift gap visible in 3 visually similar classes (avg. F1 drop of 0.18 for transfer model in shifted classes). Custom CNN shows faster overfitting but better domain fit in 2 specific class clusters.",
    toolsStack: ["Python", "PyTorch", "torchvision", "ResNet-50", "Albumentations", "Weights & Biases"],
    limitation:
      "Small dataset per class (~667 images). No external benchmark validation. Single random seed for reproducibility baseline — requires multi-seed replication.",
    ethicalNote:
      "No personally identifiable content in dataset. Dataset collection method and consent status requires formal documentation before any publication.",
    publicationReadiness: "Experiment-Level — Student/Undergraduate Research Conference",
    githubUrl: "#",
    demoUrl: "#",
    chart: {
      type: "line",
      data: [
        { name: "Ep 5", resnet: 0.61, custom: 0.48 },
        { name: "Ep 10", resnet: 0.74, custom: 0.58 },
        { name: "Ep 15", resnet: 0.81, custom: 0.66 },
        { name: "Ep 20", resnet: 0.86, custom: 0.71 },
        { name: "Ep 25", resnet: 0.88, custom: 0.74 },
        { name: "Ep 30", resnet: 0.89, custom: 0.76 },
      ],
      xKey: "name",
      yKey: "resnet",
      label: "Training Accuracy Over Epochs",
    },
  },
  {
    id: 5,
    title: "AI Portfolio Website with React + GitHub",
    subtitle: "Evidence Hub Connecting Research Projects, Technical Reports, and Application Materials",
    researchType: "Research Communication Artifact",
    year: "2024–2025",
    problemStatement:
      "Academic portfolios for doctoral applicants often exist as static PDFs disconnected from live project evidence. This project develops an interactive research portfolio as a technical artifact that demonstrates research communication skills, evidence aggregation methodology, and reproducibility commitment — while serving as an honest, structured application package for doctoral consideration.",
    researchQuestions: [
      "What information architecture best communicates a coherent doctoral research agenda from diverse preliminary projects?",
      "How can a web-based portfolio serve both as evidence and as a research communication demonstration?",
      "What structural elements distinguish a research-readiness portfolio from a professional/industry portfolio?",
    ],
    methodology:
      "Designed as a single-page application with modular research sections. Technology stack selected to balance performance, maintainability, and interactive data visualization. Asset management with organized provenance tracking for all third-party content. Content structured around PhD application requirements: proposal, research statement, lab fit analysis, and reproducibility.",
    keyResult:
      "Portfolio demonstrates integration of 5 research streams into one coherent agenda. Evidence hub links GitHub repositories, methodology diagrams, and preliminary results. Structured asset directory enables easy auditing and reuse.",
    toolsStack: ["React", "TypeScript", "Vite", "Framer Motion", "Recharts", "Tailwind CSS"],
    limitation:
      "This is a communication artifact, not a research publication. Evidence depth is constrained by available preliminary results. Portfolio quality does not substitute for peer-reviewed output.",
    ethicalNote:
      "All MIT branding used with source credit and no claim of institutional affiliation. No fabricated publications, advisors, or results.",
    publicationReadiness: "N/A — Communication & Application Artifact",
    githubUrl: "#",
    demoUrl: "#",
    chart: null,
    techBadges: ["React 18", "TypeScript 5", "Vite 7", "Framer Motion", "Recharts", "Tailwind CSS", "Wouter", "pnpm"],
  },
];
