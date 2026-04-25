# C2PA Content Authenticity Tool

A full-stack tool for signing and verifying C2PA (Coalition for Content 
Provenance and Authenticity) manifests — achieving **95% verification 
accuracy** on manifest validation.

Built during a research internship at **City, University of London** (Summer 2024)
as part of research into C2PA as a framework for deepfake detection and 
digital content provenance.

## What is C2PA?
C2PA is an open standard (backed by Adobe, Microsoft, BBC, Intel) that 
cryptographically embeds provenance data into digital assets — who created 
it, when, and with what tools. It's a key mechanism for combating AI-generated 
deepfakes and misinformation.

## What this tool does
- **Sign**: Embed a C2PA manifest into any image, attaching provenance metadata
- **Verify**: Validate an image's C2PA manifest and confirm authenticity
- **Accuracy**: 95% verification accuracy on C2PA manifest validation

## Architecture

[React Frontend] → [Node.js/Express API] → [C2PA Node.js SDK (CAI)]
→ [Manifest Store]

The backend uses the Content Authenticity Initiative (CAI) Node.js SDK to 
handle cryptographic signing and manifest parsing. The frontend provides a 
drag-and-drop interface for asset upload and displays manifest provenance data.

## Tech Stack
**Frontend:** React.js  
**Backend:** Node.js, Express.js  
**Core:** C2PA Node.js SDK (Content Authenticity Initiative)  
**Standard:** C2PA v1.x (Coalition for Content Provenance and Authenticity)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Manoj-Katta/My_C2PA_Tool.git
    cd My_C2PA_Tool
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

    ```sh
    cd ..
    cd server
    npm install
    ```

## Usage

Starting the Application

To start the application, you need to run both the backend and the frontend separately:

1. Start the backend server:
```sh
cd server
npm start
```
2. In a separate terminal, start the frontend client:
```sh
cd ..
npm start
```

This will start both the server and the client, making the application accessible at http://localhost:3000.

Use the frontend interface to upload your asset for adding the manifest or for verifying the manifest.


## Research Context
This tool was developed as part of a summer research internship at 
City, University of London, investigating C2PA implementations for 
deepfake detection. Research findings analyzed real-world adoption gaps 
across media platforms.



## License

[MIT](https://choosealicense.com/licenses/mit/)


## Acknowledgements

C2PA Node.js SDK - The SDK used for creating and verifying C2PA manifests

