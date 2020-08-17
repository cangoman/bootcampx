SELECT cohorts.name as cohort_name, COUNT(assignment_submissions.*) as submission_count
FROM assignment_submissions
JOIN students ON student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
GROUP BY cohort_name
ORDER BY submission_count DESC;