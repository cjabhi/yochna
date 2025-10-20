# TODO: Update CV Model and Career Form

## Backend Changes
- [x] Update backend/models/cvModel.js: Remove jobCategory, add jobId, firstName, lastName, city, state, tenthPercentage, twelfthPercentage, degree, degreeCgpa
- [x] Update backend/controllers/cvController.js: Modify addCV to handle new fields

## Frontend Changes
- [x] Update frontend/src/pages/Apply/Apply.jsx: Extract jobId from URL params and pass to Career component
- [x] Update frontend/src/components/Career/Career.jsx: Update formData state, add new form fields, remove jobCategory, set jobId from props, update submission

## Testing
- [x] Fixed axios API usage and response handling
- [ ] Test form submission with new fields
- [ ] Verify backend handles new data correctly
- [ ] Check dropdowns and validation
