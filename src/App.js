import React from 'react'
import './App.css'

class App extends React.Component {
  state = { selectedPage: 0, selectedVideo: undefined }

  render() {
    const { pages } = this.props
    const { selectedPage, selectedVideo } = this.state
    return (
      <div className="App">
        <select value={selectedPage} onChange={this.handlePageChange}>
          {pages.map((page, index) => (
            <option key={`${page.title}-${page.url}`} value={index}>
              {page.title} - {page.url}
            </option>
          ))}
        </select>
        <select value={selectedVideo} onChange={this.handleVideoChange}>
          {pages[selectedPage] &&
            pages[selectedPage].videos.map(video => (
              <option key={video} value={video}>
                {video}
              </option>
            ))}
        </select>
      </div>
    )
  }

  handlePageChange = event => {
    this.setState({ selectedPage: event.target.value })
  }

  handleVideoChange = event => {
    this.setState({ selectedVideo: event.target.value })
  }
}

export default App
