Sanadtech Technical Test – Infinite User List
Project Description

This project is a User Directory application designed to efficiently display a large list of users.
Users can be filtered alphabetically, and the list supports infinite scrolling to load users on demand.

Key features:

Alphabet menu for filtering users by first letter

Infinite scroll to load users dynamically

“Not Available” message for letters with no users

Responsive and lightweight frontend design

The project demonstrates efficient handling of large datasets with modern frontend and backend technologies:

Frontend: React.js

Backend: Node.js + Express

Data storage: Simple text file (users.txt)

Setup Instructions
1. Clone the repository
git clone <your-repo-url>
cd sanadtech-test

2. Backend Setup
cd backend
npm install
node server.js


The backend runs at: http://localhost:5000

Test endpoint:
http://localhost:5000/users?letter=A&page=1&limit=100

3. Frontend Setup
cd ../frontend
npm install
npm start


The frontend runs at: http://localhost:3000

Usage

Open the app in your browser.

Click any alphabet button to filter users by first letter.

Scroll down to load more users automatically.

If no users exist for a selected letter, “Not Available” will be displayed.

Screenshots

(Add your screenshots here later)

Scaling Explanation

This application handles large datasets efficiently using a combination of pagination, infinite scroll, and smart rendering:

Pagination: Users are loaded in small batches (e.g., 100 names per request) to prevent browser freezing.

Infinite Scrolling: Additional users are fetched only when the user scrolls to the bottom of the list. This is implemented using an IntersectionObserver, which automatically triggers fetching the next batch.

Dynamic State Management:

The app keeps track of loaded users, current page, and letters with no users.

Letters with no users immediately show “Not Available”.

Additional pages are loaded only if more data exists.

Efficient Rendering:

Only new users are appended to the list instead of re-rendering the entire dataset.

Loader and “Not Available” messages are conditionally rendered to improve UX.

Result: The frontend remains smooth and responsive even for letters with hundreds or thousands of users, making this approach suitable for real-world applications.