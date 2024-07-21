# Neumorphic Design

This project demonstrates a simple neumorphic design using React, TailwindCSS, and Next.js. the button has a smooth transition and invert effect when clicked.

## Prerequisites

- Node.js
- npm or yarn

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/maydaythecoder/DesignTrends
    cd https://github.com/maydaythecoder/DesignTrends
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

## Setup

1. Ensure your TailwindCSS configuration is correct by updating `tailwind.config.js`:
    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {
          boxShadow: {
            neumorphic: '10px 10px 20px #bebebe, -10px -10px 20px #ffffff',
            'neumorphic-button': '4px 4px 8px #bebebe, -4px -4px 8px #ffffff',
            'neumorphic-button-pressed': 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff',
            'neumorphic-button-hover': '6px 6px 12px #bebebe, -6px -6px 12px #ffffff',
            'neumorphic-button-focus': '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
          },
          backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          },
        },
      },
      variants: {
        extend: {
          boxShadow: ['hover', 'focus'],
        },
      },
      plugins: [],
    };
    ```

2. Add the global CSS styles in `globals.css`:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :root {
      --foreground-rgb: 0, 0, 0;
      --background-start-rgb: 214, 219, 220;
      --background-end-rgb: 255, 255, 255;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --foreground-rgb: 255, 255, 255;
        --background-start-rgb: 0, 0, 0;
        --background-end-rgb: 0, 0, 0;
      }
    }

    body {
      color: rgb(var(--foreground-rgb));
      background: linear-gradient(
          to bottom,
          transparent,
          rgb(var(--background-end-rgb))
        )
        rgb(var(--background-start-rgb));
    }

    @layer utilities {
      .text-balance {
        text-wrap: balance;
      }
    }

    /* Ripple Effect */
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple 600ms linear;
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    .ripple-button {
      position: relative;
      overflow: hidden;
    }
    ```

3. Update the `NeumorphicPage.jsx` component:
    ```jsx
    import React, { useState } from 'react';

    const NeumorphicPage = () => {
      const [isPressed, setIsPressed] = useState(false);

      const handleHeaderHover = (event) => {
        // Add a ripple effect to the header
        const header = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(header.clientWidth, header.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - header.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - header.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = header.getElementsByClassName('ripple')[0];

        if (ripple) {
          ripple.remove();
        }

        header.appendChild(circle);
      };

      const handleButtonClick = () => {
        setTimeout(() => {
          setIsPressed(!isPressed);
        }, 300); // Match the delay with the ripple animation duration
      };

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
          <div className="p-6 max-w-sm mx-auto bg-gray-200 rounded-lg shadow-neumorphic">
            <h1
              onMouseOver={handleHeaderHover}
              className="ripple-button text-2xl font-bold text-gray-700 mb-4"
            >
              Neumorphic Design
            </h1>
            <button
              onClick={handleButtonClick}
              className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 font-semibold focus:outline-none transition-shadow duration-300 ease-in-out ${
                isPressed ? 'shadow-neumorphic-button-pressed' : 'shadow-neumorphic-button'
              } hover:shadow-neumorphic-button-hover focus:shadow-neumorphic-button-focus`}
              aria-pressed={isPressed}
            >
              Click Me
            </button>
          </div>
        </div>
      );
    };

    export default NeumorphicPage;
    ```

4. Ensure your global CSS is imported in `_app.js`:
    ```javascript
    // _app.js or _app.tsx
    import '../styles/globals.css'; // Adjust the path as needed

    function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />;
    }

    export default MyApp;
    ```

## Running the Application

1. Start the development server:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## License

This project is licensed under the MIT License.
