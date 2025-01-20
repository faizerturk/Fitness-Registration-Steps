# Fitness Registration Steps (React + TypeScript + Vite)

This is a **4-step registration flow** built with **Vite**, **React**, and **TypeScript**.

## Features

1. **Step 1**

   - Collect user’s height and weight.
   - “Next” is disabled until valid height and weight are entered.
   - “Back” is shown but disabled (first step).

2. **Step 2**

   - Depending on the weight/height ratio:
     - ≤ 0.5: All weekdays are available.
     - > 0.5: Some days (e.g. Tuesday, Thursday) are disabled.
   - Must select at least one day to enable “Next.”

3. **Step 3**

   - Choose a fitness goal (lose weight, build muscle, stay healthy).
   - Custom radio buttons with icons.
   - “Next” is disabled until a goal is selected.

4. **Step 4**
   - Collect name, surname, email, and password.
   - “Save” is disabled until all fields are filled.
   - Click “Save” to simulate an API call (mock) and complete registration.

Additional notes:

- Supports **English** and **Arabic** (RTL) languages.
- Basic **responsive** design.
- Uses React Context to store step data (no real API is required).

## How to Run

1. **Install dependencies**:
   ```
   npm install
   ```

## Start development server:

```
npm run dev
```

Visit http://localhost:5173 in your browser.
