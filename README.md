# Clean YouTube

A modern, clean interface for browsing and managing YouTube playlists. Built with React, Vite, and Material-UI, this application provides a distraction-free way to view and organize your favorite YouTube playlists.

## Features

- **Playlist Management**: Add and view YouTube playlists by ID or URL
- **Responsive Design**: Optimized for all screen sizes with Material-UI Grid system
- **Clean Interface**: Distraction-free, modern UI design
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Real-time Updates**: Dynamic playlist loading with loading states
- **Consistent Layout**: All playlist cards maintain uniform height and spacing

## Tech Stack

- **Frontend**: React 19 with JSX
- **Build Tool**: Vite
- **UI Framework**: Material-UI (MUI) v7
- **HTTP Client**: Axios
- **Icons**: Material-UI Icons
- **Fonts**: Roboto (Google Fonts)
- **Linting**: ESLint with React plugins

## Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager
- YouTube Data API v3 key from Google Cloud Console

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd clean-youtube
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.template .env
   ```

   Edit the `.env` file and add your YouTube Data API key:

   ```
   VITE_API_KEY=your_google_api_key_here
   ```

## Getting Your YouTube Data API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3
4. Create credentials (API Key)
5. Copy the API key to your `.env` file

## Usage

### Development

Start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
yarn build
```

### Preview Production Build

```bash
yarn preview
```

### Linting

```bash
yarn lint
```

## How to Use

1. **Add a Playlist**:

   - Click the "Add Playlist" button in the navigation bar
   - Enter either a YouTube playlist URL or playlist ID
   - The playlist will be fetched and displayed as a card

2. **View Playlists**:

   - All added playlists are displayed in a responsive grid
   - Each card shows the playlist thumbnail, title, and channel name
   - Click "Start Tutorials" to begin viewing the playlist content

3. **Responsive Layout**:
   - The grid automatically adjusts based on screen size:
     - Mobile (xs): 1 column
     - Small (sm): 2 columns
     - Medium (md): 3 columns
     - Large (lg): 4 columns

## Project Structure

```
src/
├── api/
│   └── fetchData.js          # YouTube API integration
├── components/
│   ├── Card/
│   │   └── index.jsx         # Playlist card component
│   ├── Dialog/
│   │   └── index.jsx         # Add playlist dialog
│   ├── Home/
│   │   ├── index.jsx         # Home page container
│   │   ├── NoPlaylist.jsx    # Empty state component
│   │   └── PlaylistContainer.jsx # Grid container for playlists
│   └── Navbar/
│       └── index.jsx         # Navigation bar with hide-on-scroll
├── hooks/
│   └── usePlaylist.js        # Custom hook for playlist management
├── App.jsx                   # Main application component
└── main.jsx                 # Application entry point
```

## Key Components

- **Navbar**: Responsive navigation with hide-on-scroll functionality
- **PlaylistContainer**: Responsive grid layout for playlist cards
- **ImgCard**: Individual playlist card with consistent sizing
- **FormDialog**: Modal for adding new playlists
- **usePlaylist**: Custom hook managing playlist state and API calls

## API Integration

The application integrates with YouTube Data API v3 to:

- Fetch playlist information by ID
- Retrieve playlist items and video details
- Get channel information and thumbnails

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI team for the excellent component library
- YouTube Data API for providing playlist data
- Vite team for the fast build tool
- React team for the powerful UI library

## Support

If you encounter any issues or have questions, please open an issue on the repository.
