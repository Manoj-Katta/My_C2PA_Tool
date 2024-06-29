
# C2PA Manifest Adder and Verifier

This project provides a tool to add and verify C2PA manifests using the C2PA Node.js SDK. The tool enables users to securely attach provenance data to digital assets and verify the authenticity and integrity of these assets.

Features

Add C2PA Manifests: Embed provenance data into digital assets.

Verify C2PA Manifests: Check the authenticity and integrity of digital assets by verifying their embedded manifests.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/project-name.git
    cd project-name
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


## Screenshots
Homepage

![Homepage](https://drive.google.com/file/d/1neGJaD-CpBk20ELagVNQDoteGYy6I-La/view?usp=drive_link)
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Acknowledgements

C2PA Node.js SDK - The SDK used for creating and verifying C2PA manifests

