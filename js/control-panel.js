document.addEventListener('DOMContentLoaded', function(){
    const attemptsList = document.getElementById('attempts-list');
    const historyList = document.getElementById('history-list');
    const subjects = ["Electrical Installation","Plumbing/Gas","Fire Alarm","Emergency Lighting","IEE 2382-18"];
    
    if(attemptsList){
        subjects.forEach(sub => {
            const li = document.createElement('li');
            li.textContent = `${sub}: ${localStorage.getItem(sub+'-attempts') || 10} attempts remaining`;
            attemptsList.appendChild(li);
        });
    }
    if(historyList){
        const history = JSON.parse(localStorage.getItem('examHistory')||'[]');
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.subject} - ${item.score}% - ${item.grade}`;
            historyList.appendChild(li);
        });
    }
});
