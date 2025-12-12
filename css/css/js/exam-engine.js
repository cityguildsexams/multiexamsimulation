// Core exam engine placeholder
document.addEventListener('DOMContentLoaded', function() {
    const subjectList = document.getElementById('subject-list');
    if(subjectList){
        const subjects = ["Electrical Installation 2330 L2/L3","Plumbing/Gas Engineering L2/L3","Fire Alarm Installation","Emergency Lighting","IEE 2382-18 Wiring Regs"];
        subjects.forEach(sub => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.textContent = sub;
            btn.onclick = () => {
                localStorage.setItem('currentSubject', sub);
                window.location.href = 'exam.html';
            };
            li.appendChild(btn);
            subjectList.appendChild(li);
        });
    }
});
