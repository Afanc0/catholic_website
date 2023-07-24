import React, { Component, memo } from "react";

class HandleBibleAPI extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    const storedVerseData = localStorage.getItem(this.props.typeName)
    if (storedVerseData) {
      const storedVerseObject = JSON.parse(storedVerseData)
      if (this.props.verseRef !== storedVerseObject.verseRef) {
        this.fetchVerseData()
      } else {
        this.setState({ data: storedVerseObject.cached })
      }
    } else {
      this.fetchVerseData();
    }
  }
  
  fetchVerseData = async () => {
    await fetch(`https://bible-api.com/${this.props.verseRef}?translation=kjv`, )
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json });
        const verseData = { verseRef: this.props.verseRef, cached: json }
        localStorage.setItem(this.props.typeName, JSON.stringify(verseData))
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      });
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <p>Content Loading...<br />Try Reloading Page</p>
    }

    return (
      <>
        <h1>{this.props.typeName} - [{data.reference}]:</h1><br />
        <p
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></p>
      </>
    )
  }
}

export default memo(HandleBibleAPI);



