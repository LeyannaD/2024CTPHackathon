
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const calendar = document.getElementById('calendar');

function generateCalendar() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const events = [
        ["Meeting with advisor", "Math Club event"],
        ["Project deadline", "Lunch with friends"],
        ["Physics lecture"],
        ["Team presentation", "Study group"],
        ["Basketball game"],
        ["Library study session"],
        ["Family dinner"]
    ];

    const eventLinks = [
        ["#advisor", "#math-club"],
        ["#deadline", "#lunch"],
        ["#lecture"],
        ["#presentation", "#study-group"],
        ["#basketball"],
        ["#library"],
        ["#dinner"]
    ];

    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        const dayName = daysOfWeek[day.getDay()];
        const dayDate = `${day.getMonth() + 1}/${day.getDate()}`;

        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = `
            <div class="day-header">
                <span>${dayName}</span>
                <span>${dayDate}</span>
            </div>
        `;

        events[i].forEach((event, index) => {
            const eventDiv = document.createElement('a');
            eventDiv.href = eventLinks[i][index];
            eventDiv.className = 'CalenderEvent';
            eventDiv.innerHTML = `<div class="event-title">${event}</div>`;
            dayDiv.appendChild(eventDiv);
        });

        calendar.appendChild(dayDiv);
    }
}

generateCalendar();
