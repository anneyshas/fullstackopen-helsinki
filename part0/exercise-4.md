sequenceDiagram  
  participant browser  
  participant server

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  activate server
  server->>browser: new_note.html
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes (new_note)
  activate server
  server->>browser: notes.html 
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css (notes:4)
  activate server
  server->>browser: main.css
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js (notes:5)
  server->>browser: main.js
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json (main.js:23)
  activate server
  server->>browser: data.json
  deactivate server
