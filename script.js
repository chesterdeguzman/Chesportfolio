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

const projectDetails = {
  elearning: {
    label: 'Excel · Power Query · Power Pivot',
    title: 'E-Learning Course Performance Analysis',
    overview: 'Foresight BI wanted to improve student engagement, curriculum design, course promotion, and quiz outcomes. I prepared and modeled seven related tables, then built an interactive Excel dashboard for decision support.',
    process: ['Imported and cleaned the dataset with Power Query', 'Standardized headers and data types, removed duplicates, and simplified completion labels', 'Created table relationships using Power Pivot', 'Used descriptive statistics and PivotTables to answer eight business questions', 'Designed overview, trend, and recommendation dashboards'],
    findings: ['1,779 students enrolled from 2020 to 2022', '27 courses were available, but five had no enrolled students', 'Introduction to PowerBI had the highest enrollment at 805 students', 'Online self-paced learning attracted the most students', 'Course non-completion exceeded successful completion, highlighting an engagement challenge'],
    impact: 'The analysis gave Foresight BI a clearer view of demand, completion, quiz performance, and underperforming course offerings so it could improve promotion, student support, and curriculum planning.'
  },
  pharma: {
    label: 'Excel · SPSS · Power BI',
    title: 'Pharmaceutical Wholesale-Retail Analysis',
    overview: 'This project analyzed 254,083 wholesale and retail transaction records across Germany and Poland to evaluate revenue, returns, distributors, products, markets, and sales-team performance.',
    process: ['Removed irrelevant geographic columns and validated numerical fields', 'Separated positive sales and quantities from returns', 'Removed 27 zero-sales transactions', 'Used SPSS for descriptive statistics and cross-tab analysis', 'Built a multi-page Power BI dashboard with insight and recommendation tabs'],
    findings: ['2018 recorded the highest yearly sales at 3.5 billion', 'Germany generated approximately 11 billion in sales', 'Analgesics were the strongest product class, while antimalarials were the weakest', 'Gerlach LLC was the top distributor', 'The Delta team achieved the strongest sales performance'],
    impact: 'The dashboard supported product prioritization, distributor management, regional strategy, team benchmarking, and investigation of a significant sales decline.'
  },
  population: {
    label: 'Excel · Power Query · MySQL',
    title: 'World Population Analysis',
    overview: 'I cleaned a Kaggle population dataset in Excel and then imported it into MySQL to answer demographic questions through documented SQL queries.',
    process: ['Standardized column and country names in Power Query', 'Removed special characters from capital names', 'Corrected growth-rate and world-percentage fields in SQL', 'Used aggregation, grouping, sorting, filtering, and limits to answer business questions'],
    findings: ['The dataset contained 234 unique countries and territories', 'The maximum 2022 population was 1,425,887,337 and the minimum was 510', 'China and India had the largest populations in 2022', 'Vatican City and Tokelau were among the least populated', 'Asia had the highest average 2015 population among continents'],
    impact: 'The project demonstrates an end-to-end workflow from data cleaning to relational database analysis and clear interpretation of SQL outputs.'
  },
  marketing: {
    label: 'Excel · SPSS · Power BI',
    title: 'Maven Marketing Campaign Analysis',
    overview: 'Using 2,240 customer records, I investigated customer behavior, campaign acceptance, product demand, and channel effectiveness to improve marketing decisions.',
    process: ['Standardized field names and converted birth year into age and age groups', 'Removed duplicate customer IDs and corrected inconsistent education values', 'Validated completeness and removed irrelevant fields', 'Used SPSS for descriptive analysis and Power BI for visualization'],
    findings: ['Age, marital status, and education influenced web purchasing behavior', 'Campaign 4 achieved the strongest acceptance performance', 'Customers with graduate or master’s education tended to have higher average income', 'Wine was the top-performing product category', 'Store purchases outperformed web and catalog channels'],
    impact: 'Recommendations focused on targeted experiences, replicating successful campaign elements, promoting premium products, and improving web and catalog conversion.'
  },
  retention: {
    label: 'Excel · Power BI · Retention Analytics',
    title: 'PC Bulacan Customer Retention Analysis',
    overview: 'PC Bulacan needed visibility into repeat service, churn, customer satisfaction, incident resolution, and employee performance. I prepared a service dataset and designed a four-page Power BI dashboard.',
    process: ['Removed attributes unrelated to retention', 'Cleaned customer names and converted service duration to minutes', 'Renamed and added fields for clearer incident and resolution analysis', 'Built KPI, trend, customer, incident, and employee-performance views'],
    findings: ['Retention fell from 75.71% in 2021 to 32.64% in 2023', 'Annual churn remained around 24% to 30%', 'Unresolved cases exceeded resolved cases', 'Major incidents were common among customers who churned', 'Employee position 1 showed the strongest resolved-case performance'],
    impact: 'The analysis produced practical recommendations for feedback loops, customer loyalty, employee recognition, performance coaching, and social-media engagement.'
  },
  bulacan: {
    label: 'Excel · PivotTables · Dashboarding',
    title: 'Province of Bulacan Talent Analysis',
    overview: 'This Project SPARTA capstone analyzed graduate outcomes, district and municipal differences, disaster planning, and transportation access across Bulacan.',
    process: ['Validated source data and retained meaningful zero values', 'Mapped municipalities to districts through additional research', 'Used VLOOKUP, COUNTIFS, SUMIFS, and PivotTables', 'Created four interactive dashboard pages with KPIs and drill-down views'],
    findings: ['Bulacan had more than 3.29 million residents but only 45,447 graduates in the analysis', 'Senior high school graduates outnumbered college graduates', 'Six municipalities lacked a disaster preparedness plan', 'Malolos, San Jose del Monte, Baliuag, Santa Maria, and Bocaue had the most graduates', 'DRT, Obando, and Calumpit showed transportation-access limitations'],
    impact: 'The findings supported recommendations for scholarships, transportation improvement, educational resource allocation, and adoption of best practices from higher-performing municipalities.'
  },
  netflix: {
    label: 'Excel · Power Query · Data Cleaning',
    title: 'Netflix Movies Dataset Cleaning',
    overview: 'I used a scraped 10,000-row movies and TV dataset to strengthen practical data-cleaning skills in Excel and Power Query.',
    process: ['Removed extra spaces, duplicate titles, and special characters', 'Standardized year ranges, genres, names, and capitalization', 'Removed the gross column because approximately 95% of its values were missing', 'Imputed selected numerical fields and labeled unknown categorical values', 'Separated mixed director and star information into structured fields'],
    findings: ['The cleaned dataset contained 6,794 reliable records', 'Formatting issues and duplicate movie titles accounted for substantial data reduction', 'Director, star, genre, year, rating, votes, and runtime fields became analysis-ready'],
    impact: 'The project demonstrates careful handling of messy real-world data and documents why each cleaning decision improves reliability and downstream analysis.'
  }
};

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
      card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
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
