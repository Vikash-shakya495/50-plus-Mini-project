const paragraphs = [
  "javascript is versatile for web development learning to code requires patience and practice frontend development includes html css javascript react is a popular library for user interfaces coding challenges improve problem solving skills",
  "python is widely used for data analysis machine learning html is the standard markup language for web pages css styles and layouts web accessibility is important for inclusive design version control systems like git help manage code",
"apis allow different software systems to communicate node js enables javascript to run on the server side responsive design ensures websites work across devices frameworks like angular simplify web development testing is crucial for ensuring code quality",
"debugging is essential for developers data structures and algorithms are fundamental in programming agile methodologies promote iterative development user experience ux design focuses on user satisfaction continuous integration improves software development processes cybersecurity protects user data",
"online mobile first design prioritizes mobile users in web development content management systems cms simplify website management cloud computing provides scalable resources for applications machine learning automates decision making processes blockchain technology enables secure transactions",
"open source software fosters community collaboration the internet of things iot connects everyday devices data visualization helps interpret complex information artificial intelligence transforms industries e commerce platforms enable online buying and selling",
"digital marketing strategies are essential for business growth search engine optimization seo enhances website visibility social media plays a significant role in brand promotion mobile applications have become integral to daily life",
"cross platform development allows apps to run on multiple systems progressive web apps pw as combine the best of web and mobile web performance optimization improves user experience serverless architecture reduces infrastructure management",
"big data analytics drives insights from large datasets virtual reality vr offers immersive experiences augmented reality ar enhances real world environments devops practices streamline development and operations content delivery networks cdns improve loading speeds",
"microservices architecture enables scalable application development software as a service saas provides accessible software solutions remote work tools have changed collaboration data privacy regulations protect users personal information digital transformation reshapes businesses",
"learning platforms offer resources for self paced education gaming technology has advanced with virtual reality cryptocurrencies reshape financial systems webassembly enables high performance applications on the web quantum computing promises to revolutionize problem solving",
"programming languages like c c plus plus java are widely used for applications html5 introduced new features like audio video and canvas elements responsive web design adapts to different screen sizes accessibility in web design ensures usability",
"version control with git helps track changes in codebases software testing involves methods like unit testing integration testing and system testing continuous delivery ensures software is always in a releasable state",
"agile project management involves sprints standups retrospectives to improve collaboration user interface ui design focuses on creating intuitive interfaces web security measures such as encryption authentication protect sensitive information online",
"data mining techniques extract valuable insights from large datasets cloud storage services like google drive and dropbox offer convenient file storage solutions mobile development frameworks like react native enable cross platform app development",
"big data refers to extremely large datasets analyzed for patterns trends machine learning algorithms trained to make predictions based on historical data chatbots use natural language processing to understand user queries provide relevant responses",
"business intelligence tools help organizations analyze data make informed decisions data warehouses store large amounts of structured data for analysis reporting website analytics tools track user behavior optimize marketing strategies",
"server side programming languages like php ruby support dynamic web applications frontend frameworks like vue js svelte offer modern approaches to building user interfaces javascript frameworks allow developers to create single page applications",
"the concept of progressive enhancement ensures basic content is accessible to users regardless of device mobile devices are increasingly becoming primary way people access internet user testing involves gathering feedback from real users",
"to improve product design design thinking is a problem solving approach prioritizing user needs during development process cloud native development enables applications to be built run in cloud environments microservices architecture breaks applications into smaller services",
"containerization using tools like docker simplifies application deployment scaling server side rendering improves performance by rendering pages server before sending them to client web hosting services provide infrastructure for making websites accessible online",
"data privacy laws like gdpr protect individuals personal information search engines use complex algorithms to rank web pages based on relevance authority website optimization techniques improve loading speeds user experience internet marketing strategies include",
"search engine marketing social media marketing content marketing maintaining a good online reputation cannot be overstated businesses must manage customer reviews feedback effectively internet of things devices gather data from environment communicate other devices",
"for smarter decision making virtual teams use collaboration tools to communicate effectively across distances open source contributions foster innovation community engagement project management tools help teams organize tasks track progress collaborate effectively",
"mobile payment systems change how consumers make purchases cyber threats require constant vigilance security updates protect sensitive information machine learning detects fraudulent activities in various industries predictive analytics helps businesses forecast trends customer behavior"
];
const paragraphEl = document.getElementById('paragraph');
const inputAreaEl = document.getElementById('input-area');
const startBtn = document.getElementById('start-test');
const timeDisplay = document.getElementById('time-display');
const wpmDisplay = document.getElementById('wpm-display');

let selectedValue; // Selected time limit in seconds
let timer; // Timer variable
let time = 0; // Time elapsed
let isTestRunning = false;

// Function to get a random paragraph
function randomPara() {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  paragraphEl.textContent = paragraphs[randomIndex];
}

// Call the randomPara function to display a random paragraph initially
randomPara();

// Function to set selected level and time limit
function selectLevel() {
  const levels = document.getElementsByName('level');
  for (let i = 0; i < levels.length; i++) {
    if (levels[i].checked) {
      selectedValue = parseInt(levels[i].value);
      break;
    }
  }
}

// Start test function
function startTest() {
  // Clear any previous timer
  clearInterval(timer);
  
  randomPara();
  inputAreaEl.disabled = false;
  inputAreaEl.value = '';
  inputAreaEl.focus();
  time = 0;
  isTestRunning = true;
  timeDisplay.textContent = time;


  
  const words = paragraphEl.textContent.split(' ');
  paragraphEl.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');

  // Start the timer
  timer = setInterval(() => {
    time++;
    timeDisplay.textContent = time;

    if (time >= selectedValue) {
      endTest();
    }
  }, 1000); 
}



// Update the highlighting and WPM
inputAreaEl.addEventListener('input', () => {
  const inputText = inputAreaEl.value.trim();
  const words = paragraphEl.querySelectorAll('span');

  words.forEach((wordSpan, index) => {
    if (inputText.split(' ')[index] === wordSpan.textContent) {
      wordSpan.classList.add('cell-highlight');
    } else {
      wordSpan.classList.remove('cell-highlight');
    }
  });

  // Calculate WPM
  const correctWords = inputText.split(' ').filter((word, index) => word === words[index]?.textContent).length;
  const minutesElapsed = time / 60;
  const wpm = Math.floor(correctWords / minutesElapsed);
  wpmDisplay.textContent = isTestRunning && minutesElapsed > 0 ? wpm : 0;
});

// End test function
function endTest() {
  clearInterval(timer);
  isTestRunning = false;
  inputAreaEl.disabled = true;
  
  // Final WPM calculation
  const finalWords = inputAreaEl.value.trim().split(' ').filter(word => word !== "").length;
  const finalMinutes = time / 60;
  wpmDisplay.textContent = Math.floor(finalWords / finalMinutes);
}

startBtn.addEventListener('click', () => {

  selectLevel();
  startTest();
});