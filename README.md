# FedEx Return Label Autofill

## Overview
This Chrome extension helps users to automatically fill out FedEx return label forms with predefined data. Users can select a product from a dropdown menu and click a button to autofill the form fields on the active tab.

## Usage
1. Install the extension in Chrome.
2. Click on the extension icon to open the popup.
3. Select a product from the dropdown menu.
4. Click the "Fill Form" button to autofill the FedEx return label form on the active tab.

## Features
- **Product Selection**: Users can select a product from a dropdown menu in the popup.
- **Autofill Form**: Automatically fills out the FedEx return label form fields with predefined data when the button is clicked.
- **Chrome Extension**: Utilizes Chrome's `scripting` API to execute scripts on the active tab.

## Time Savings
Using this extension can save users approximately 5-10 seconds per form submission compared to manually typing the information at an average speed of 30-50 words per minute.

## Files
- **[manifest.json](manifest.json)**: Defines the extension's metadata, permissions, and popup configuration.
- **[popup.html](popup.html)**: The HTML file for the extension's popup interface, including the product selection dropdown and autofill button.
- **[popup.js](popup.js)**: The JavaScript file that handles the button click event, queries the active tab, and executes the autofill script.

## How It Works
1. **User Interaction**: The user selects a product from the dropdown menu in the popup and clicks the "Fill Form" button.
2. **Script Execution**: The `popup.js` script listens for the button click event, retrieves the selected product, and uses the Chrome `scripting` API to execute the `autofillForm` function on the active tab.
3. **Form Autofill**: The `autofillForm` function fills out the form fields on the active tab with predefined data, including the selected product as a reference.

## Permissions
- **activeTab**: Allows the extension to access the active tab.
- **scripting**: Allows the extension to execute scripts on the active tab.

## License
© 2024 Christop Thiel
