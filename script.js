const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
const dialog = document.getElementById('project-dialog');
const dialogContent = document.getElementById('dialog-content');
const closeDialogButton = document.querySelector('.dialog-close');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('.theme-toggle-icon');
const themeText = themeToggle?.querySelector('.theme-toggle-text');

const projectDetails = {
  elearning: {
    label: 'Excel · Power Query · Power Pivot',
    title: 'E-Learning Course Performance Analysis',
    overview: 'Foresight BI wanted to improve student engagement, curriculum design, course promotion, and quiz outcomes. I prepared and modeled seven related tables, then built an interactive Excel dashboard for decision support.',
    process: ['Imported and cleaned the dataset with Power Query', 'Standardized headers and data types, removed duplicates, and simplified completion labels', 'Created table relationships using Power Pivot', 'Used descriptive statistics and PivotTables to answer eight business questions', 'Designed overview, trend, and recommendation dashboards'],
    findings: ['1,779 students enrolled from 2020 to 2022', '27 courses were available, but five had no enrolled students', 'Introduction to PowerBI had the highest enrollment at 805 students', 'Online self-paced learning attracted the most students', 'Course non-completion exceeded successful completion, highlighting an engagement challenge'],
    impact: 'The analysis gave Foresight BI a clearer view of demand, completion, quiz performance, and underperforming course offerings so it could improve promotion, student support, and curriculum planning.',
    repository: '#',
    medium: 'https://medium.com/@yosayosa/data-analysis-of-e-learning-course-data-74f90e2d6f2d'
  },
  pharma: {
    label: 'Excel · SPSS · Power BI',
    title: 'Pharmaceutical Wholesale-Retail Analysis',
    overview: 'This project analyzed 254,083 wholesale and retail transaction records across Germany and Poland to evaluate revenue, returns, distributors, products, markets, and sales-team performance.',
    process: ['Removed irrelevant geographic columns and validated numerical fields', 'Separated positive sales and quantities from returns', 'Removed 27 zero-sales transactions', 'Used SPSS for descriptive statistics and cross-tab analysis', 'Built a multi-page Power BI dashboard with insight and recommendation tabs'],
    findings: ['2018 recorded the highest yearly sales at 3.5 billion', 'Germany generated approximately 11 billion in sales', 'Analgesics were the strongest product class, while antimalarials were the weakest', 'Gerlach LLC was the top distributor', 'The Delta team achieved the strongest sales performance'],
    impact: 'The dashboard supported product prioritization, distributor management, regional strategy, team benchmarking, and investigation of a significant sales decline.',
    repository: '#',
    medium: '#'
  },
  population: {
    label: 'Excel · Power Query · MySQL',
    title: 'World Population Analysis',
    overview: 'I cleaned a Kaggle population dataset in Excel and then imported it into MySQL to answer demographic questions through documented SQL queries.',
    process: ['Standardized column and country names in Power Query', 'Removed special characters from capital names', 'Corrected growth-rate and world-percentage fields in SQL', 'Used aggregation, grouping, sorting, filtering, and limits to answer business questions'],
    findings: ['The dataset contained 234 unique countries and territories', 'The maximum 2022 population was 1,425,887,337 and the minimum was 510', 'China and India had the largest populations in 2022', 'Vatican City and Tokelau were among the least populated', 'Asia had the highest average 2015 population among continents'],
    impact: 'The project demonstrates an end-to-end workflow from data cleaning to relational database analysis and clear interpretation of SQL outputs.',
    repository: '#',
    medium: '#'
  },
  marketing: {
    label: 'Excel · SPSS · Power BI',
    title: 'Maven Marketing Campaign Analysis',
    overview: 'Using 2,240 customer records, I investigated customer behavior, campaign acceptance, product demand, and channel effectiveness to improve marketing decisions.',
    process: ['Standardized field names and converted birth year into age and age groups', 'Removed duplicate customer IDs and corrected inconsistent education values', 'Validated completeness and removed irrelevant fields', 'Used SPSS for descriptive analysis and Power BI for visualization'],
    findings: ['Age, marital status, and education influenced web purchasing behavior', 'Campaign 4 achieved the strongest acceptance performance', 'Customers with graduate or master’s education tended to have higher average income', 'Wine was the top-performing product category', 'Store purchases outperformed web and catalog channels'],
    impact: 'Recommendations focused on targeted experiences, replicating successful campaign elements, promoting premium products, and improving web and catalog conversion.',
    repository: '#',
    medium: '#'
  },
  retention: {
    label: 'Excel · Power BI · Retention Analytics',
    title: 'PC Bulacan Customer Retention Analysis',
    overview: 'PC Bulacan needed visibility into repeat service, churn, customer satisfaction, incident resolution, and employee performance. I prepared a service dataset and designed a four-page Power BI dashboard.',
    process: ['Removed attributes unrelated to retention', 'Cleaned customer names and converted service duration to minutes', 'Renamed and added fields for clearer incident and resolution analysis', 'Built KPI, trend, customer, incident, and employee-performance views'],
    findings: ['Retention fell from 75.71% in 2021 to 32.64% in 2023', 'Annual churn remained around 24% to 30%', 'Unresolved cases exceeded resolved cases', 'Major incidents were common among customers who churned', 'Employee position 1 showed the strongest resolved-case performance'],
    impact: 'The analysis produced practical recommendations for feedback loops, customer loyalty, employee recognition, performance coaching, and social-media engagement.',
    repository: '#',
    medium: '#'
  },
  bulacan: {
    label: 'Excel · PivotTables · Dashboarding',
    title: 'Province of Bulacan Talent Analysis',
    overview: 'This Project SPARTA capstone analyzed graduate outcomes, district and municipal differences, disaster planning, and transportation access across Bulacan.',
    process: ['Validated source data and retained meaningful zero values', 'Mapped municipalities to districts through additional research', 'Used VLOOKUP, COUNTIFS, SUMIFS, and PivotTables', 'Created four interactive dashboard pages with KPIs and drill-down views'],
    findings: ['Bulacan had more than 3.29 million residents but only 45,447 graduates in the analysis', 'Senior high school graduates outnumbered college graduates', 'Six municipalities lacked a disaster preparedness plan', 'Malolos, San Jose del Monte, Baliuag, Santa Maria, and Bocaue had the most graduates', 'DRT, Obando, and Calumpit showed transportation-access limitations'],
    impact: 'The findings supported recommendations for scholarships, transportation improvement, educational resource allocation, and adoption of best practices from higher-performing municipalities.',
    repository: '#',
    medium: '#'
  },
  netflix: {
    label: 'Excel · Power Query · Data Cleaning',
    title: 'Netflix Movies Dataset Cleaning',
    overview: 'I used a scraped 10,000-row movies and TV dataset to strengthen practical data-cleaning skills in Excel and Power Query.',
    process: ['Removed extra spaces, duplicate titles, and special characters', 'Standardized year ranges, genres, names, and capitalization', 'Removed the gross column because approximately 95% of its values were missing', 'Imputed selected numerical fields and labeled unknown categorical values', 'Separated mixed director and star information into structured fields'],
    findings: ['The cleaned dataset contained 6,794 reliable records', 'Formatting issues and duplicate movie titles accounted for substantial data reduction', 'Director, star, genre, year, rating, votes, and runtime fields became analysis-ready'],
    impact: 'The project demonstrates careful handling of messy real-world data and documents why each cleaning decision improves reliability and downstream analysis.'
  },
  netflixPython: {
    label: 'Python · Pandas · Exploratory Data Analysis',
    title: 'Netflix Content Analysis — Python',
    overview: 'A Python-based companion repository for exploring Netflix catalog composition, release patterns, countries, ratings, genres, and duration trends.',
    process: ['Loaded and profiled the Netflix titles dataset', 'Cleaned dates, categories, and multi-value text fields', 'Created reusable summary tables and visualizations', 'Documented findings in a portfolio-ready workflow'],
    findings: ['The dataset contains 8,807 titles', 'Movies represent the majority of the catalog', 'Catalog growth, countries, ratings, genres, and durations were compared'],
    impact: 'The project demonstrates practical Python analysis, reproducibility, data storytelling, and visualization using a recognizable media dataset.',
    repository: 'https://github.com/chesterdeguzman/netflix-content-analysis-python',
    medium: '#'
  },
  netflixSql: {
    label: 'PostgreSQL · CTEs · Window Functions',
    title: 'Netflix Content Analysis Using SQL',
    overview: 'This standalone SQL project analyzes 8,807 Netflix titles using PostgreSQL and demonstrates database setup, data validation, reusable views, window functions, lateral joins, ranking, string normalization, and percentile calculations.',
    process: ['Created and indexed the PostgreSQL table', 'Validated missing values and data quality', 'Built a reusable netflix_titles_clean view', 'Normalized country, genre, director, and cast fields', 'Used CTEs, window functions, FILTER, ranking, and percentiles'],
    findings: ['6,131 movies and 2,676 TV shows were analyzed', 'Movies represent approximately 69.6% of the catalog', 'The United States is the leading contributing country', 'Catalog additions peaked in 2019 with 2,016 titles', 'TV-MA is the most common rating and median movie runtime is approximately 98 minutes'],
    impact: 'The project presents an end-to-end PostgreSQL portfolio case study focused on catalog composition, geographic concentration, content trends, ratings, and runtime patterns.',
    repository: 'https://github.com/chesterdeguzman/Netflix-SQL-Analysis',
    medium: '#'
  },
  mediaCleaning: {
    label: 'Python · Pandas · Automation',
    title: 'Media Monitoring Data Cleaning Pipeline',
    overview: 'A reusable Python project that transforms repetitive mainstream and social-media cleaning tasks into a documented, testable pipeline.',
    process: ['Standardized schemas and text fields', 'Normalized dates and labels', 'Separated mainstream and social-media transformations', 'Added command-line execution, configuration, and tests'],
    findings: ['The workflow reduces manual spreadsheet processing', 'Cleaning rules are reusable across reporting cycles', 'Outputs are standardized for downstream tagging and reporting'],
    impact: 'This project shows how operational analytics work can be converted into maintainable automation.',
    repository: 'https://github.com/chesterdeguzman/media-monitoring-cleaning',
    medium: '#'
  },
  mediaCleaningSql: {
    label: 'PostgreSQL · ETL · Docker',
    title: 'Media Monitoring Cleaning — SQL',
    overview: 'A PostgreSQL implementation of the media-monitoring cleaning workflow with schemas, reusable functions, load scripts, validation, and exports.',
    process: ['Created raw and cleaned database structures', 'Implemented reusable SQL functions', 'Separated MSM and social-media cleaning logic', 'Added Docker setup and export scripts'],
    findings: ['The SQL workflow preserves raw data while creating analysis-ready outputs', 'Reusable database logic improves consistency', 'Validation queries make data-quality issues visible'],
    impact: 'The project demonstrates SQL-based ETL design and reproducible data preparation.',
    repository: 'https://github.com/chesterdeguzman/media-monitoring-cleaning-sql',
    medium: '#'
  },
  taggingAutomation: {
    label: 'Python · NLP Rules · Fuzzy Matching',
    title: 'Media Tagging Automation',
    overview: 'A configurable tagging system for relevancy and sentiment classification in media-monitoring datasets.',
    process: ['Created YAML-based keyword rules', 'Implemented word-boundary and fuzzy matching', 'Added relevancy and sentiment retagging', 'Packaged the workflow with CLI commands and tests'],
    findings: ['23,780 records were processed', '9,461 records were tagged Relevant', '8,295 were Positive, 13,939 Neutral, and 1,546 Negative'],
    impact: 'The system speeds up repetitive tagging while keeping business rules transparent and editable.',
    repository: 'https://github.com/chesterdeguzman/media-tagging-automation',
    medium: '#'
  },
  alzheimer: {
    label: 'Python · Machine Learning · Responsible Analytics',
    title: 'Alzheimer’s Predictive Analytics',
    overview: 'A metadata-only educational baseline for Alzheimer’s category prediction with explicit leakage checks, model documentation, and responsible-use limitations.',
    process: ['Profiled 6,336 metadata rows', 'Removed identifiers that created target leakage', 'Compared baseline classifiers', 'Created a model card, reports, tests, and reproducible training code'],
    findings: ['Filename and path fields were identified as leakage risks', 'Several metadata fields were constant', 'The final baseline intentionally used a limited leakage-safe feature set'],
    impact: 'The project emphasizes honest evaluation, leakage prevention, reproducibility, and responsible communication in health-related analytics.',
    repository: 'https://github.com/chesterdeguzman/alzheimer-predictive-analytics',
    medium: '#'
  },
  fraud: {
    label: 'Python · Imbalanced Classification · Risk Analytics',
    title: 'Credit Card Fraud Prediction',
    overview: 'A fraud-detection project designed around severe class imbalance, threshold selection, and business-oriented evaluation.',
    process: ['Profiled fraud prevalence and feature quality', 'Built a class-balanced training pipeline', 'Generated precision-recall, ROC, and confusion-matrix reports', 'Added configurable thresholding and batch prediction'],
    findings: ['ROC-AUC reached 0.935', 'Fraud recall reached 0.809 at the default threshold', 'The model correctly detected 55 of 68 fraud cases in the test set'],
    impact: 'The project shows how fraud models should be evaluated with recall, precision, and operational alert costs rather than accuracy alone.',
    repository: 'https://github.com/chesterdeguzman/credit-card-fraud-prediction',
    medium: '#'
  },
  jobMarket: {
    label: 'Python · NLP · Streamlit',
    title: 'Job Market Skills Analyzer',
    overview: 'An end-to-end job-posting analytics project that extracts technical skills, compares roles, studies salaries, and measures remote-work patterns.',
    process: ['Cleaned and categorized job postings', 'Extracted Python, SQL, BI, cloud, and ML skills', 'Compared analyst, scientist, engineer, and BI roles', 'Built salary and role-prediction models', 'Created an interactive Streamlit dashboard'],
    findings: ['SQL and Python were the most prominent skills in the synthetic portfolio dataset', 'Salary patterns differ by role, experience, skill, and work arrangement', 'Role-specific skill profiles support career-planning comparisons'],
    impact: 'The project combines analysis, NLP, machine learning, dashboarding, and business communication in one portfolio case study.',
    repository: 'https://github.com/chesterdeguzman/job-market-skills-analyzer',
    medium: '#'
  },
  socialPredictor: {
    label: 'Python · Regression · Content Analytics',
    title: 'Social Media Content Performance Predictor',
    overview: 'A predictive analytics project that estimates post engagement and recommends publishing strategies using platform, timing, caption, hashtag, format, category, and historical performance features.',
    process: ['Generated and validated a 30,000-row educational dataset', 'Engineered posting and engagement-history features', 'Trained and evaluated a regression model', 'Produced platform and content-strategy recommendations', 'Built a Streamlit prediction interface'],
    findings: ['The model achieved an R² of 0.609', 'Posting strategy varies by platform, format, category, and audience history', 'Historical engagement is an important contextual feature'],
    impact: 'The project translates predictive modeling into practical content-planning recommendations.',
    repository: 'https://github.com/chesterdeguzman/social-media-content-performance-predictor',
    medium: '#'
  },

  customerChurn: {
    label: 'Python · SQL · Predictive Classification',
    title: 'Customer Churn Prediction',
    overview: 'A predictive retention project that estimates cancellation probability and converts model scores into an actionable customer outreach queue.',
    process: ['Generated and validated customer subscription data', 'Used SQL to profile segments and churn patterns', 'Built a reproducible classification pipeline', 'Evaluated model discrimination using ROC-AUC', 'Exported high-risk customers for retention action'],
    findings: ['Customers receive individual churn probabilities and risk tiers', 'Behavioral, service, and account features support early-risk identification', 'The pipeline produces a retention-ready prioritized output'],
    impact: 'The project connects predictive modeling with a practical retention workflow, helping teams focus limited outreach resources on the customers most at risk.',
    repository: '#', medium: '#'
  },
  demandForecast: {
    label: 'Python · SQL · Demand Forecasting',
    title: 'Retail Demand Forecasting',
    overview: 'A forecasting pipeline that predicts product demand using sales history, promotions, seasonality, and lag-based features.',
    process: ['Prepared daily product demand data', 'Used SQL for product, promotion, and trend analysis', 'Engineered calendar and lag features', 'Trained and evaluated a machine-learning forecasting model', 'Generated forward-looking demand plans'],
    findings: ['Demand changes across products, promotions, weekdays, and seasonal periods', 'Lag features capture repeatable sales behavior', 'Forecast outputs can support purchasing and workforce planning'],
    impact: 'The project demonstrates how predictive analytics can reduce stockouts, limit excess inventory, and improve operating plans.',
    repository: '#', medium: '#'
  },
  paymentFraud: {
    label: 'Python · SQL · Anomaly Detection',
    title: 'Payment Fraud Anomaly Detection',
    overview: 'An unsupervised risk analytics project that identifies unusual transactions and automatically prepares a fraud investigation queue.',
    process: ['Profiled payment activity with SQL', 'Engineered transaction behavior and risk features', 'Trained an Isolation Forest anomaly model', 'Ranked transactions by anomaly score', 'Exported flagged payments for review'],
    findings: ['Unusual transaction behavior can be prioritized without requiring a large labeled fraud dataset', 'Risk scores support consistent investigation ordering', 'Evaluation includes precision and recall against simulated fraud labels'],
    impact: 'The pipeline reduces manual screening effort and helps investigators focus first on the most unusual and potentially costly transactions.',
    repository: '#', medium: '#'
  },
  inventoryReorder: {
    label: 'Python · SQL · Decision Automation',
    title: 'Inventory Reorder Automation',
    overview: 'A replenishment automation project that translates demand history, lead time, service level, and current stock into purchase recommendations.',
    process: ['Analyzed SKU demand history in SQL', 'Calculated average and variable demand', 'Computed safety stock and reorder points', 'Identified products requiring replenishment', 'Generated recommended quantities and expected purchasing cost'],
    findings: ['Each SKU receives a calculated reorder threshold', 'Recommendations account for demand uncertainty and supplier lead time', 'Outputs provide an operational purchasing queue'],
    impact: 'The project turns inventory analysis into an automated decision process that can improve product availability and working-capital control.',
    repository: '#', medium: '#'
  },
  retailPulse: {
    label: 'Power BI · DAX · SQL · Enterprise BI',
    title: 'RetailPulse Enterprise Analytics',
    overview: 'A GitHub-ready enterprise analytics case study designed around a retail star schema, documented DAX measures, SQL analysis, and executive dashboard concepts.',
    process: ['Created realistic sales, customer, product, employee, budget, region, and returns data', 'Designed a dimensional star schema', 'Documented 42 DAX measures and time-intelligence calculations', 'Added SQL business queries and Power Query guidance', 'Produced executive and operational dashboard mockups'],
    findings: ['The solution connects financial, customer, product, and regional performance', 'DAX measures support growth, margins, targets, returns, and customer analysis', 'Static mockups communicate the intended Power BI report experience'],
    impact: 'RetailPulse demonstrates end-to-end BI thinking: data design, business logic, documentation, visualization planning, and executive communication.',
    repository: '#', medium: '#'
  },
  moviesCleaning: {
    label: 'Microsoft Excel · Power Query · Data Quality',
    title: 'Data Cleaning of Movies Dataset',
    overview: 'A practical Excel and Power Query project using a scraped IMDb Netflix movies and TV dataset with 10,000 original records and extensive missing, duplicated, and inconsistently formatted values.',
    process: ['Used TRIM and Paste Values to remove extra spaces safely', 'Removed duplicate movie titles and standardized capitalization', 'Used Power Query to remove special characters and normalize text', 'Rebuilt year ranges with a consistent dash separator', 'Removed the Gross field because approximately 95% of values were null', 'Filled categorical missing values with Unknown and numerical missing values with column means', 'Separated combined director and star information into structured columns'],
    findings: ['The cleaned dataset was reduced from 10,000 to 6,794 reliable records', 'Duplicate titles and formatting problems accounted for much of the reduction', 'Genre, year, rating, votes, runtime, director, and star fields became analysis-ready'],
    impact: 'The project demonstrates why data quality is essential before analysis and shows practical proficiency with Excel formulas, Power Query transformations, missing-value treatment, validation, and structured data preparation.',
    repository: '#', medium: '#'
  },
  newsTrends: {
    label: 'Python · NLP · Time-Series Detection',
    title: 'News Trend Detection System',
    overview: 'An NLP and time-series project for detecting emerging topics, tracking brand mentions, and identifying unusual increases in article volume.',
    process: ['Prepared a 5,121-article educational dataset', 'Vectorized article text using TF-IDF', 'Clustered related stories and summarized keywords', 'Built rolling baselines for daily topic volume', 'Flagged sudden spikes and brand-mention changes'],
    findings: ['Eight broad news-topic categories were analyzed', 'The system detected 42 unusual topic-volume spikes', 'Topic and brand trends can be explored through the Streamlit dashboard'],
    impact: 'The project demonstrates how NLP and anomaly detection can support media intelligence and early trend discovery.',
    repository: 'https://github.com/chesterdeguzman/news-trend-detection-system',
    medium: '#'
  }
};


function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isLight = theme === 'light';
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }
  if (themeIcon) themeIcon.textContent = isLight ? '☾' : '☀';
  if (themeText) themeText.textContent = isLight ? 'Dark' : 'Light';
}

const savedTheme = localStorage.getItem('portfolio-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
applyTheme(savedTheme || preferredTheme);

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('portfolio-theme', nextTheme);
  applyTheme(nextTheme);
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);

  let currentSection = '';
  sections.forEach(section => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top) currentSection = section.id;
  });

  navAnchors.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
  });
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navAnchors.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      const categories = card.dataset.category || '';
      const categoryList = categories.split(/\s+/).filter(Boolean);
      card.classList.toggle('hidden', filter !== 'all' && !categoryList.includes(filter));
    });
  });
});

function buildList(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

document.querySelectorAll('.project-detail-button').forEach(button => {
  button.addEventListener('click', () => {
    const project = projectDetails[button.dataset.project];
    if (!project) return;

    dialogContent.innerHTML = `
      <p class="eyebrow">${project.label}</p>
      <h2>${project.title}</h2>
      <h3>Project overview</h3>
      <p>${project.overview}</p>
      <h3>Process</h3>
      ${buildList(project.process)}
      <h3>Key findings</h3>
      ${buildList(project.findings)}
      <h3>Business value</h3>
      <p>${project.impact}</p>
      <div class="dialog-project-links">
        ${project.medium ? `<a class="button button-secondary" href="${project.medium}" target="_blank" rel="noopener">Read on Medium ↗</a>` : ''}
        ${project.repository ? `<a class="button button-primary" href="${project.repository}" target="_blank" rel="noopener">View GitHub Repository ↗</a>` : ''}
      </div>
    `;

    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});

function closeDialog() {
  dialog.close();
  document.body.classList.remove('dialog-open');
}

closeDialogButton.addEventListener('click', closeDialog);
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  const clickedOutside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (clickedOutside) closeDialog();
});

document.getElementById('current-year').textContent = new Date().getFullYear();
