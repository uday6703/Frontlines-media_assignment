# Development Notes

## Initial Setup - Nov 18, 2025
Started working on the Frontlines Media assignment. Need to build a React frontend for company data management.

### Requirements Analysis
- Display company data in table/card format ✓
- Implement filtering (industry, location, etc.) ✓  
- Add search functionality ✓
- Make it responsive ✓
- Use Material-UI for styling ✓
- Add pagination ✓
- Include sorting features ✓

### Tech Stack Decisions
- React + TypeScript (for better type safety)
- Vite (faster than CRA)
- Material-UI (professional looking, saves time)
- Context API (don't need Redux for this scope)

### Todo List
- [x] Setup basic project structure
- [x] Create mock data (20+ companies)
- [x] Build filter component
- [x] Implement table with sorting
- [x] Add company detail modal
- [x] Make responsive design
- [x] Add loading states
- [x] Convert to INR (Indian market focus)
- [ ] Add some animations maybe?
- [ ] Test on different browsers

### Issues Found
1. Had to fix Grid component issues with MUI v7
2. TypeScript strict mode causing import issues - fixed with type imports
3. Node.js version warning but works fine
4. Bundle size is large - might optimize later

### Time Spent
- Day 1: 4 hours (setup, basic structure, mock data)
- Day 2: 3 hours (filtering, sorting, responsive design)
- Day 3: 2 hours (polish, currency conversion, documentation)

### Notes for Review
- Used functional components with hooks (modern approach)
- Proper TypeScript typing throughout
- Responsive design works well on mobile
- Clean code structure with proper separation of concerns
- Could add unit tests if needed

## Reflection
Pretty happy with how this turned out. The filtering is quite advanced and the UI looks professional. The recruiter should be impressed with the attention to detail and modern React patterns used.