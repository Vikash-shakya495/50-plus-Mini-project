// Elements
const calendarElement = document.getElementById("calendar");
const currentStreakElement = document.getElementById("current-days");
const longestStreakElement = document.getElementById("longest-days");

// Track streaks
let currentStreak = 0;
let longestStreak = 0;

// Get the current date
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Generate calendar for the current month
function generateCalendar(month, year) {
    calendarElement.innerHTML = "";
    const daysOfWeek = ["Su", "M", "T", "W", "Th", "F", "S"];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.textContent = day;
        dayElement.classList.add("day", "header");
        calendarElement.appendChild(dayElement);
    });

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    for (let i = 0; i < firstDay; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        calendarElement.appendChild(dayElement);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.textContent = i;
        dayElement.classList.add("day");
        dayElement.id = `day-${i}`;
        calendarElement.appendChild(dayElement);
    }
}

// Update streaks
function updateStreaks() {
    currentStreakElement.textContent = currentStreak;
    longestStreakElement.textContent = longestStreak;
}

// Highlight today's date and update streaks
function highlightToday() {
    const todayElement = document.getElementById(`day-${today.getDate()}`);
    todayElement.classList.add("active");

    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const daysDifference = (now - lastVisitDate) / (1000 * 60 * 60 * 24);

        if (daysDifference > 1) {
            currentStreak = 1;
        } else if (daysDifference === 1) {
            currentStreak += 1;
        }
    } else {
        currentStreak = 1;
    }

    if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
    }

    localStorage.setItem('lastVisit', now);
    updateStreaks();
}

// Initialize the calendar
generateCalendar(currentMonth, currentYear);
highlightToday();

// Goal setting
function addGoal() {
    const goalInput = document.getElementById('goal');
    const goalList = document.getElementById('goal-list');
    const goalText = goalInput.value.trim();

    if (goalText === '') {
        alert('Please enter a goal.');
        return;
    }

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = goalText;
    li.appendChild(p);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete';
    completeButton.onclick = () => {
        li.classList.toggle('completed');
    };
    buttonContainer.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = () => {
        goalList.removeChild(li);
    };
    buttonContainer.appendChild(deleteButton);

    li.appendChild(buttonContainer);
    goalList.appendChild(li);
    goalInput.value = '';
}

// Leaderboard with dummy data
function renderLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    const students = [
        { name: "Suraj", exp: 1900 },
        { name: "Shalini", exp: 1100 },
        { name: "Ramesh", exp: 1000 },
        { name: "Charu", exp: 800 },
        { name: "Diya", exp: 1000 },
        { name: "Jicks", exp: 900 },
        { name: "Naman", exp: 900 },
        { name: "Pratibha", exp: 6000 },
        { name: "David", exp: 500 }
    ];

    leaderboard.innerHTML = '';
    students.sort((a, b) => b.exp - a.exp);
    students.forEach((student, index) => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student';
        let rankDisplay;

        if (index === 0) rankDisplay = '<img src="./images/gold-cup.png" alt="1st place" class="trophy">';
        else if (index === 1) rankDisplay = '<img src="./images/silver-cup.png" alt="2nd place" class="trophy">';
        else if (index === 2) rankDisplay = '<img src="./images/bronze-cup.png" alt="3rd place" class="trophy">';
        else rankDisplay = `<span class="rank">${index + 1}</span>`;

        studentDiv.innerHTML = `${rankDisplay} ${student.name} <span>${student.exp} XP</span>`;
        leaderboard.appendChild(studentDiv);
    });
}

// Initial leaderboard render
renderLeaderboard();

// Progress charts using Chart.js
const courseCtx = document.getElementById('courseProgress').getContext('2d');
const assignmentCtx = document.getElementById('assignmentProgress').getContext('2d');
const quizCtx = document.getElementById('quizProgress').getContext('2d');

function createPieChart(ctx, data, backgroundColors) {
    return new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: data,
                backgroundColor: backgroundColors
            }],
            labels: ['Completed', 'In Progress', 'Not Started']
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Dummy data for charts
const courseData = [60, 30, 10];
const assignmentData = [70, 20, 10];
const quizData = [50, 30, 20];

createPieChart(courseCtx, courseData, ['#4CAF50', '#FF9800', '#F44336']);
createPieChart(assignmentCtx, assignmentData, ['#FF5722', '#FFC107', '#E91E63']);
createPieChart(quizCtx, quizData, ['#9C27B0', '#3F51B5', '#FFEB3B']);


// attendance

// Wait for the DOM to fully load before initializing the chart
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("attendanceChart").getContext("2d");

    // Attendance data for 6 subjects
    const attendanceData = {
        labels: ["Soft Skills", "DSA", "Java", "Operating System", "Competitive Programming", "Language Skills"],
        datasets: [{
            label: "Attendance (%)",
            data: [85, 90, 78, 88, 95, 80],  // Replace with actual attendance values
            backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 192, 192, 0.7)",
                "rgba(153, 102, 255, 0.7)",
                "rgba(255, 159, 64, 0.7)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
        }]
    };

    // Options for customizing the chart
    const config = {
        type: "bar",
        data: attendanceData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                tooltip: {
                    callbacks: {
                        label: (context) => `${context.raw}%`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: "Attendance (%)"
                    }
                }
            }
        }
    };

    // Render the chart
    new Chart(ctx, config);
});

