import React from 'react'
import './App.css'

class App extends React.Component {
  state = { selectedPageId: undefined, selectedVideo: undefined }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.pages).length === 0) {
      return
    }
    let { selectedPageId, selectedVideo } = this.state
    let page = nextProps.pages[selectedPageId]
    if (!page) {
      ;[selectedPageId, page] = Object.entries(nextProps.pages)[0]
      selectedVideo = undefined
    }
    if (!page.videos.includes(selectedVideo)) {
      selectedVideo = page.videos[0]
      this.setState({ selectedPageId, selectedVideo })
      window.selectVideo({ page, video: selectedVideo })
    }
  }

  render() {
    const { pages } = this.props
    const { selectedPageId, selectedVideo } = this.state
    return (
      <div className="App">
        <select value={selectedPageId} onChange={this.handlePageChange}>
          {Object.values(pages).map(({ id, title, url }) => (
            <option key={id} value={id}>
              {title} - {url}
            </option>
          ))}
        </select>
        <select value={selectedVideo} onChange={this.handleVideoChange}>
          {pages[selectedPageId] &&
            pages[selectedPageId].videos.map(video => (
              <option key={video} value={video}>
                {video}
              </option>
            ))}
        </select>
      </div>
    )
  }

  handlePageChange = event => {
    const selectedPageId = event.target.value
    const page = this.props.pages[selectedPageId]
    const selectedVideo = page.videos[0]
    this.setState({ selectedPageId, selectedVideo })
    window.selectVideo({ page, video: selectedVideo })
  }

  handleVideoChange = event => {
    const page = this.props.pages[this.state.selectedPageId]
    const selectedVideo = event.target.value
    this.setState({ selectedVideo })
    window.selectVideo({ page, video: selectedVideo })
  }
}

export default App
