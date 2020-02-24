# Email Editor Widget

### Usage
The Email Editor Widget lets you share a given item (for e.g. a particular SCRUM-type digital whiteboard) with a range of email addresses

---

### Installation - JavaScript
- To use the Email Editor widget, import the email-editor.js file into your JavaScript project like so
   - ```const emailEditor = require("email-editor-widget")```

### Installation - HTML
- Include Email Editor widget in your html file by including it in the <head> section of your code
   - ```<script src="../path/to/modules/email-editor-widget.js"/>```

---

### Development
- To contribute to the repository, run the following commands
   - In the repo's root folder, make "src" your current directory:
      - ```$cd /src```
   - Install the dependencies required
      - ```npm install```
   - Run the development server
      - ```npm run start```
   - To run the unit tests, use
      - ```npm run test```
   - To run end-to-end tests, use
      - ```npm run cypress:open```
 
 ---
 
 ### Open Tasks:
 - Extend unit tests & snapshot tests
 - Extend E2E-Tests
 - Optimize array algorithms for performance with larger amounts of data
 - Fix issues when switching between view & edit mode in TextArea
 - Introduce more robust error handling
 - Reduce boilerplate
 - Allow for translation (I18N)
 - Test usage of shareableItem
 - Optimize inclusion of several modules side-by-side

