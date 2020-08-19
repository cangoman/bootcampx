const { Pool } = require('pg');

const pool = new Pool( {
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});



pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
JOIN teachers ON teacher_id = teachers.id
WHERE cohorts.name = '${process.argv[2]}'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  });
})
.catch(err => console.error('query error', err.stack));

