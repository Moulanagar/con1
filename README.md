📇 My Happy Contacts

A cheerful, interactive Contact List web application built with React and Bootstrap, allowing you to manage your contacts easily.

The app features a friendly UI, search, add multiple phone numbers per contact, prevent duplicates, and delete with confirmation.

🌟 Features

View a list of contacts fetched from a mock API.

Search contacts by name (case-insensitive).

Add new contacts with one or more phone numbers.

Automatically prevents duplicate phone numbers for the same or other contacts.

Delete contacts with confirmation prompt.

Responsive and cheerful UI with cards, badges, and animations.

Phone number validation: only numeric digits allowed (5–15 characters).

🎨 UI/UX Design

Soft pastel gradient background for a positive vibe.

Rounded cards with hover effect.

Colorful phone badges.

Friendly emojis in headers, buttons, and messages.

Loading spinner while fetching contacts.

⚙️ Tech Stack

React (functional components + Context API)

Bootstrap 5 for styling

React Context API for state management

Fetch API to simulate server data

📦 Installation

Clone the repository:

git clone <your-repo-url>
cd <your-repo-folder>


Install dependencies:

npm install


Start the development server:

npm start


The app should now be running at http://localhost:3000.

📝 Usage

Search Contacts: Type a name in the search bar. Results are case-insensitive.

Add Contact: Enter a name and phone number, then click Add.

If the name exists, the phone number will be added to that contact.

Duplicate phone numbers are prevented.

Delete Contact: Click the Delete button. A confirmation prompt will appear.

Phone Validation: Only numbers allowed; length between 5–15 digits.

🔗 Deployment

Deployed Url: https://con1-umber.vercel.app/
💡 Assumptions & Design Choices

Contacts are initially fetched from jsonplaceholder API, then stored in Context state.

Context API used for global state management instead of useState in App.

Bootstrap chosen for fast, responsive, and cheerful UI design.

Phone numbers stored as arrays to support multiple numbers per contact.

Confirmation prompt used for delete to avoid accidental deletion.

🛠 Libraries Used

Bootstrap: For styling, buttons, forms, tables, cards.

React: Main framework.

React Context API: State management.

✅ Future Improvements

Add animations when adding or deleting contacts.

Use a modal instead of window.confirm for deletion.

Persistent storage using localStorage or backend API.

Edit contacts feature.

Improved phone number formatting (e.g., country codes).

📄 License

This project is open-source and free to use.
