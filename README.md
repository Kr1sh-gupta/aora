Sure! Here's a clean and personalized README for your project, based on the information you provided:

---

# Aora App

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🛠️ [Configuration](#configuration)
6. 🧩 [Components](#components)

## <a name="introduction">🤖 Introduction</a>

Aora is a mobile application built with React Native for a seamless user experience. It leverages the Animatable library for captivating animations and integrates with the robust backend systems of Appwrite, enabling seamless sharing of AI-generated videos within the community.

Join our active Discord community with over 27k+ members for support and discussions.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React Native
- Expo
- Nativewind
- Animatable
- Appwrite

## <a name="features">🔋 Features</a>

- **Onboarding Screen**: Engaging graphics and clear instructions welcome users to the app.
- **Robust Authentication & Authorization System**: Secure email login safeguards user accounts.
- **Dynamic Home Screen with Animated Flat List**: Smoothly animated flat list showcases the latest videos for seamless browsing.
- **Pull-to-Refresh Functionality**: Users can refresh content with a simple pull gesture for up-to-date information.
- **Full-Text Search Capability**: Efficiently search through videos with real-time suggestions and instant results.
- **Tab Navigation**: Navigate between sections like Home, Search, and Profile with ease using tab navigation.
- **Post Creation Screen for Uploading Media**: Upload video and image posts directly from the app with integrated media selection.
- **Profile Screen with Detailed Insights**: View account details and activity, including uploaded videos and follower count, for a personalized experience.
- **Responsiveness**: Smooth performance and adaptability across various devices and screen sizes for a consistent user experience.
- **Animations**: Dynamic animations using the Animatable library to enhance user interaction and engagement throughout the app's UI.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Cloning the Repository

```bash
git clone https://github.com/adrianhajdin/aora.git
cd aora
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Running the Project

```bash
npm start
```

### Expo Go

Download the [Expo Go](https://expo.dev/go) app onto your device, then use it to scan the QR code from Terminal and run.

## <a name="configuration">🛠️ Configuration</a>

### AppWrite Configuration

#### App Details

- **App Name**: Aora
- **Bundle ID**: 
  - Update `app.json` under `android` with `"package": ""`

#### Project Setup

1. **Create Project Directory**
   - `mkdir lib && touch lib/appWrite.js`

2. **AppWrite Configuration**

    ```javascript
    export const appwriteConfig = {
      endpoint: 'https://cloud.appwrite.io/v1',
      platform: '', 
      projectId: ''
    }
    ```

3. **Database Setup**
   - **Database ID**: `''`
   - **Collections**:
     - **Users**: `userCollectionId: ''`
       - Attributes: `username (string)`, `email (email)`, `avatar (url)`, `accountId (string)`
       - Permissions: `CRUD (any)`
     - **Videos**: `videoCollectionId: ''`
       - Attributes: `title (string)`, `thumbnail (url)`, `prompt (string)`, `video (url)`
       - Relationship: One-way with `users` (`creator`)
       - Permissions: `CRUD (all users)`

4. **Storage Setup**
   - **Bucket Name**: `files`
   - **Storage ID**: `''`
   - Permissions: 
     - CRUD (all users)
     - Read (all guests)
   - Allowed file types: `jpg, png, gif, mp4`

#### SDK Installation

```bash
npx expo install react-native-appwrite react-native-url-polyfill
```

## <a name="components">🧩 Components</a>

### Custom Button

**Location**: `components/CustomButton.jsx`

### Form Field

**Location**: `components/FormField.jsx`

### Bottom Navigation

**Location**: `app/(tabs)/_layout.jsx`

### Authentication Screen Layout

**Location**: `app/(auth)/_layout.jsx`

### Global Layout

**Location**: `app/_layout.jsx`

**Code**:

```jsx
<Stack.Screen name="(auth)" options={{ headerShown: false }} />
```

### Sign-In Page Tweaks

- Added input area for Username
- Modified text and layout for better user experience

---

