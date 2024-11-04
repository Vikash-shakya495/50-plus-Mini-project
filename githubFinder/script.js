let currentPage = 1;
const reposPerPage = 7;
let allRepos = [];

document.getElementById('search').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (username) {
        fetchUserProfile(username);
    }
});

async function fetchUserProfile(username) {
    const profileUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;

    // Show the loader
    document.getElementById('loader').style.display = 'block';

    try {
        const profileResponse = await fetch(profileUrl);
        const reposResponse = await fetch(reposUrl);

        if (!profileResponse.ok) {
            throw new Error('User not found');
        }

        const profileData = await profileResponse.json();
        allRepos = await reposResponse.json();
        displayProfile(profileData);
        displayRepos();
        updatePagination();
    } catch (error) {
        document.getElementById('profile').innerHTML = `<p>${error.message}</p>`;
        document.getElementById('repos').innerHTML = '';
    } finally {
        // Hide the loader
        document.getElementById('loader').style.display = 'none';
    }
}

function displayProfile(profile) {
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `
        <h2>${profile.login}</h2>
        <img src="${profile.avatar_url}" alt="${profile.login}" width="100">
        <p>${profile.bio ? profile.bio : 'No bio available'}</p>
        <a href="${profile.html_url}" target="_blank">View Profile</a>
    `;
}

function displayRepos() {
    const reposDiv = document.getElementById('repos');
    reposDiv.innerHTML = `<h3>Repositories:</h3>`;
    const start = (currentPage - 1) * reposPerPage;
    const end = start + reposPerPage;
    const currentRepos = allRepos.slice(start, end);

    currentRepos.forEach(repo => {
        reposDiv.innerHTML += `
            <div class="repo">
                <h4>${repo.name}</h4>
                <p>${repo.description ? repo.description : 'No description available'}</p>
                <a href="${repo.html_url}" target="_blank">View Repository</a>
            </div>
        `;
    });
}

function updatePagination() {
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = (currentPage * reposPerPage) >= allRepos.length;
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayRepos();
        updatePagination();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if ((currentPage * reposPerPage) < allRepos.length) {
        currentPage++;
        displayRepos();
        updatePagination();
    }
});

function changeTheme() {
    const themeSelector = document.getElementById('theme-selector');
    const selectedTheme = themeSelector.value;
    document.body.className = selectedTheme;
}
