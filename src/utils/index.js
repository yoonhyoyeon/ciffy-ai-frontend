export function groupLecturesByDay(lectures) {
const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
const result = { online: [] };

days.forEach(day => {
    result[day] = [];
});

lectures.forEach(lecture => {
    if (lecture.type === 'online') {
        result.online.push(lecture);
    } else if (lecture.day.some(day => days.includes(day))) {
        lecture.day.forEach(day => {
            result[day].push(lecture);
        });
    }
});

return result;
  }