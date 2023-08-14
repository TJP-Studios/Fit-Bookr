const eventList = document.getElementById('event-list');

const schedule = [
  { time: '09:00 AM', event: 'Meeting with Client A' },
  { time: '11:30 AM', event: 'Lunch Break' },
  { time: '02:00 PM', event: 'Team Brainstorming' },
  { time: '04:30 PM', event: 'Review Project Progress' },
];

schedule.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<span class="time">${item.time}</span><span class="event">${item.event}</span>`;
  eventList.appendChild(li);
});
