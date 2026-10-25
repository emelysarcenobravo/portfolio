import type { Project } from "./types";

export const phishing: Project = {
  slug: "phishing-detection",
  name: "AI4ALL phishing research",
  title: "Which model catches the phish?",
  kicker: "AI4ALL Ignite · Machine learning research",
  summary:
    "Seven researchers, 108,685 emails and three models, from a simple baseline to a transformer. The simplest one won, with 99.28% accuracy, and we deployed it in a Streamlit app that checks an email in real time.",
  period: "Summer 2026",
  role: "ML researcher: Naive Bayes model, data visualization, bias analysis",
  team: "7 researchers",
  order: 2,
  featured: true,
  headline: "99.28% accuracy with the simplest model",
  hmw: "How might we catch phishing emails accurately, without flagging the people who simply write differently?",
  preview: {
    kind: "image",
    src: "/images/work/ai4all-poster.png",
    alt: "Research poster “Phishing Email Prediction Models: A Comparative Analysis of Logistic Regression, Naive Bayes, and BERT,” with sections on background, data, methodology, the models, results and next steps.",
    width: 1536,
    height: 1024,
    matte: "#001231",
    position: "50% 30%",
  },
  stack: ["Python", "scikit-learn", "pandas", "NumPy", "Hugging Face Transformers", "DistilBERT", "Streamlit"],
  links: [
    { label: "Live demo", href: "https://phishing-email-predictor-ml.streamlit.app/", kind: "demo" },
    {
      label: "Research poster",
      href: "https://docs.google.com/presentation/d/1EljNeuASG15JnPzOaKmNEf_akLOSOzNbmGU54t6W_ro/edit?usp=sharing",
      kind: "design",
    },
    {
      label: "Final presentation",
      href: "https://docs.google.com/presentation/d/1cAEnQsrmyYBiYwIbXisz234soKgXjEnGFH2njkTOQxQ/edit",
      kind: "slides",
    },
    { label: "Code on GitHub", href: "https://github.com/dhruvidarji1/Phishing-Email-Prediction-Models", kind: "code" },
  ],
  contribution: [
    "Developed and evaluated the Multinomial Naive Bayes model in Python and scikit-learn: 96.03% accuracy and a 95.38% F1 score.",
    "Applied TF-IDF and feature engineering (email length, punctuation, URLs, sender domains, attachments) to extract predictive signals.",
    "Built and explained the class-distribution analysis that showed the dataset was imbalanced but still large enough for reliable training and testing.",
    "Wrote the bias analysis: temporal, labeling, organisational, language and cultural bias in the training data.",
    "Co-authored the research proposal and presented my sections in the team’s final presentation.",
  ],
  lenses: {
    ai: {
      relevance: 3,
      headline: "Logistic regression beat BERT on every metric",
      points: [
        "Compared TF-IDF + logistic regression, multinomial Naive Bayes and a fine-tuned DistilBERT on accuracy, precision, recall and F1.",
        "Logistic regression scored 99.28% accuracy and 99.31% recall, beating DistilBERT while costing a fraction of the compute.",
        "Audited the data for five kinds of bias and showed how the choice of model can reduce some of it, but not all.",
      ],
    },
    build: {
      relevance: 2,
      headline: "From raw email to a real-time Streamlit app",
      points: [
        "Preprocessing pipeline: lowercasing, HTML tag removal, punctuation and stop-word removal, then TF-IDF vectorization.",
        "Engineered features for length, punctuation, typos, sender domain, URLs and attachments.",
        "Deployed all three models in a Streamlit app that classifies a pasted email.",
      ],
    },
    marketing: {
      relevance: 1,
      headline: "Data storytelling from 108K emails",
      points: [
        "Turned the dataset into findings people can act on: phishing emails are twice as likely to contain a link, and far more likely to use HTML.",
      ],
    },
    design: {
      relevance: 1,
      headline: "Designing for the person who clicks",
      points: [
        "Proposed showing a confidence score and warning signs rather than a bare yes/no, so people can make an informed decision.",
      ],
    },
  },
  stages: {
    problem: {
      summary:
        "Phishing is one of the most common cybersecurity threats, and it keeps getting harder to spot. One click can mean stolen credentials, identity theft or a data breach.",
      body: [
        "Our research question was deliberately narrow: which machine-learning model gives the best balance of accuracy, precision and recall for phishing detection? A balance matters because a filter that blocks too much is ignored, and one that misses too much is dangerous.",
      ],
    },
    people: {
      summary:
        "Behind every phishing email is a person deciding whether to trust it. We grounded the project in research on who falls for phishing and why.",
      body: [
        "Studies of user behavior and spear-phishing susceptibility showed that demographics and email content both shape who gets fooled. That pushed us to think about where a model's mistakes would land, not just how many it makes.",
      ],
    },
    design: {
      summary:
        "We designed a fair experiment: three models of increasing complexity, trained on the same data and judged by the same four metrics.",
      body: [
        "Our first plan used every column in the dataset. Some were redundant or incompatible with certain models, which made the comparison unfair. We narrowed the input to a shared set of features so that differences in results came from the models, not the data.",
      ],
      details: [
        "Logistic regression: a fast, interpretable baseline that outputs a confidence score between 0 and 1.",
        "Multinomial Naive Bayes: a classic spam filter. It trains in one pass but assumes words are independent.",
        "DistilBERT: transfer learning from a pre-trained transformer. It reads context, but needs a GPU and much more time.",
      ],
    },
    build: {
      summary:
        "Emails pass through a preprocessing pipeline and feature engineering step, then go to each classifier. The trained models run in a Streamlit web app.",
      details: [
        "Preprocessing: lowercasing, HTML tag removal, punctuation removal, stop-word removal, TF-IDF vectorization.",
        "Engineered features: word frequency, email, subject and body length, sender-domain length, punctuation percentage, typo count, link presence.",
        "Demo: paste a legitimate or phishing email into the Streamlit app and see each model's prediction.",
      ],
    },
    intelligence: {
      summary:
        "The MeAJOR corpus on Hugging Face has 108,685 labeled emails, merged from TREC 2005–2007, the Nazario phishing corpus, the Nigerian fraud corpus and other open datasets. Exploring it showed what phishing actually looks like.",
      body: [
        "The data also has limits. Most legitimate emails come from Enron's 2001 corporate mailboxes: mostly English, North American and from the early 2000s. A model trained on them may flag informal or non-native writers as suspicious, and miss modern, AI-written phishing.",
      ],
      details: [
        "Temporal bias: older emails don't reflect current phishing tactics.",
        "Labeling bias: borderline emails may be mislabeled.",
        "Organisational bias: mostly corporate settings and writing styles.",
        "Language and cultural bias: mostly English and North American communication.",
      ],
    },
    outcome: {
      summary:
        "Logistic regression performed best overall: 99.28% accuracy and the highest score on every metric. DistilBERT came close but needed far more compute, and Naive Bayes missed the most phishing.",
      body: [
        "We shared the results, the Streamlit demo and a research poster with the AI4ALL Ignite program. Next steps: train on more recent and multilingual data, test newer language models, and show users a confidence score with the warning signs that triggered it.",
      ],
    },
  },
  comparison: {
    stage: "outcome",
    title: "Model performance",
    caption: "Logistic regression is highlighted. Scores are percentages on the held-out test set.",
    unit: "%",
    columns: ["Accuracy", "Precision", "Recall", "F1"],
    rows: [
      { label: "Logistic regression", note: "TF-IDF features", values: [99.28, 99.44, 99.31, 99.38], highlight: true },
      { label: "DistilBERT", note: "Transfer learning", values: [98, 99, 99, 99] },
      { label: "Multinomial Naive Bayes", note: "Probabilistic baseline", values: [96.03, 98.11, 92.8, 95.38] },
    ],
  },
  metrics: [
    {
      stage: "intelligence",
      title: "What the data showed",
      caption: "From our exploratory analysis of the full corpus.",
      items: [
        {
          label: "Phishing emails with a link",
          after: "81.8%",
          context: "vs 40.8% of legitimate emails, about twice the rate",
        },
        {
          label: "Phishing emails using HTML",
          after: "66%",
          context: "vs 8% of legitimate emails, which are 92% plain text",
        },
        { label: "Phishing emails with attachments", after: "0.1%", context: "Attackers rely on links, not files" },
        { label: "Labeled emails", after: "108,685", context: "56,707 legitimate · 51,978 phishing" },
      ],
    },
  ],
  figures: [
    {
      src: "/images/work/ai4all-poster.png",
      alt: "Full research poster: background, dataset composition and sample emails, data preparation pipeline, engineered features, the three models, evaluation metrics, results table, accuracy chart, confusion matrices, conclusions and next steps.",
      caption: "The team’s research poster for AI4ALL Ignite.",
      width: 1536,
      height: 1024,
      stage: "outcome",
      wide: true,
    },
  ],
  diagram: {
    title: "Experiment pipeline",
    caption: "Each model sees the same features and is judged by the same four metrics.",
    stage: "build",
    columns: [
      { label: "Data", nodes: [{ title: "MeAJOR corpus", note: "108,685 labeled emails" }] },
      {
        label: "Preprocess",
        nodes: [
          { title: "Clean text", note: "Lowercase, strip HTML, stop words" },
          { title: "Engineer features", note: "Length, links, typos, punctuation" },
        ],
      },
      {
        label: "Models",
        nodes: [
          { title: "Logistic regression", note: "TF-IDF" },
          { title: "Naive Bayes", note: "Multinomial" },
          { title: "DistilBERT", note: "Fine-tuned" },
        ],
      },
      {
        label: "Ship",
        nodes: [
          { title: "Evaluate", note: "Accuracy · Precision · Recall · F1" },
          { title: "Streamlit app", note: "Real-time prediction" },
        ],
      },
    ],
  },
  learned: [
    {
      title: "Make complex models earn their place.",
      body: "I expected BERT to win because it understands context. A well-featured logistic regression beat it on every metric, trained in minutes, and is far easier to explain. Now I start with the simplest model that could work.",
    },
    {
      title: "The metric you choose is a decision about people.",
      body: "Naive Bayes had 98% precision but only 92.8% recall, so it let roughly 7 in 100 phishing emails through. Accuracy alone would have hidden that. What counts as “best” depends on what a mistake costs the person receiving the email.",
    },
    {
      title: "Bias lives in the data’s history.",
      body: "Our legitimate emails came mostly from one company in 2001. Even the best model risks flagging informal or non-native writers and missing modern AI-written phishing. A better model can reduce that bias, but it can’t erase it.",
    },
    {
      title: "A good model still needs a humane interface.",
      body: "Real tools should show how confident they are and add friction before acting on a prediction, so people don’t treat the model as infallible.",
    },
  ],
};
