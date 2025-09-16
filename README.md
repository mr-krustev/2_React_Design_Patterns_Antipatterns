# Session 3. React Component Architecture And Design Patterns

## Task Description: Create a Sign In / Sign Up Form Using React

### Objective:

Your task is to create a Sign In and Sign Up form using React. The focus of this assignment is building interactive forms, managing state, and handling user input. You are free to use your creativity for structuring the forms and their functionalities. No predefined design is required—use your imagination to create a functional and user-friendly experience.

### Requirements:

#### Core Functionalities:

**Sign In Form:**

- The form should have fields for email/username and password.
- Implement validation to check that the fields are not empty.
- Display appropriate error messages for invalid or missing input.

**Sign Up Form:**

- The form should have fields for:
  - Username
  - Email
  - Password
  - Confirm Password
- Implement validation for:
  - Matching passwords.
  - Valid email format.
  - Non-empty fields.
- Optional: Enforce password strength (e.g., minimum length, special characters).

#### Multi-Stage Form (Optional):

Implement the Sign Up process as a multi-step form. For example:

- **Step 1:** Basic information (e.g., username, email).
- **Step 2:** Password and confirm password.
- **Step 3:** Optional additional information (e.g., profile details).
  Add navigation between steps (Next/Previous buttons) with proper state management.

#### State Management:

- Use React's state (e.g., useState or useReducer) to manage the form data.
- Reset the form after successful submission.

#### Validation:

- Implement real-time or on-submit validation for all fields.
- Prevent form submission if there are validation errors.

#### Submission:

- Simulate form submission by logging the form data to the console.
- Optionally, display a success message or confirmation after form submission.

#### Error Handling:

- Highlight fields with errors.
- Display user-friendly error messages.

### Guidelines:

- **React Only:** Do not use external form libraries like React Hook Form. Write the form logic yourself using React's state and event handling.
- **No Design Rules:** Styling and design are up to you. The focus is on functionality, but feel free to make it visually appealing if you want.
- **Reusable Components:** Try to create reusable components where possible.
- **File Structure:** Organize your code in of proposed structure.
- **Creativity:** You are free to add extra features or enhance the user experience as you see fit.

### Optional Challenges:

- Add a "Show/Hide Password" toggle for password fields.
- Display password strength indicators.
- Save form data in localStorage, sessionStorage or use [json-server](https://www.npmjs.com/package/json-server).
- Add a "Remember Me" checkbox for the Sign In form.
- Make the forms responsive for different screen sizes.
- Add useful ReadMe.

Good luck, and have fun coding! 🚀
