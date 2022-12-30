// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      IsTimeRunning: false,
      isHistoryClick: false,
      buttonCount: 25,
      MeainCount: 25,
      seconds: 0,
    }
  }

  increesValue = () => {
    const {isHistoryClick} = this.state
    if (isHistoryClick) {
      this.setState(privews => ({
        buttonCount: privews.buttonCount + 1,
        MeainCount: privews.MeainCount + 1,
      }))
    }
  }

  decreesValue = () => {
    const {isHistoryClick} = this.state
    if (isHistoryClick) {
      this.setState(privews => ({
        buttonCount: privews.buttonCount - 1,
        MeainCount: privews.MeainCount - 1,
      }))
    }
  }

  historyClick = () => {
    this.setState({
      IsTimeRunning: false,
      isHistoryClick: true,
      buttonCount: 25,
      MeainCount: 25,
      seconds: 0,
    })
  }

  onImageClick = () => {
    this.setState(privews => ({
      IsTimeRunning: !privews.IsTimeRunning,
      isHistoryClick: false,
    }))
  }

  componentDidMount = () => {
    setInterval(this.runTime, 1000)
  }

  runTime = () => {
    const {IsTimeRunning, MeainCount, seconds} = this.state
    // console.log(IsTimeRunning)
    if (IsTimeRunning) {
      if (seconds === 0) {
        this.setState(privews => ({
          MeainCount: privews.MeainCount - 1,
          seconds: 59,
        }))
        console.log(seconds)
      } else {
        this.setState(privwes => ({seconds: privwes.seconds - 1}))
      }
    }
  }

  render() {
    const {
      IsTimeRunning,
      isHistoryClick,
      buttonCount,
      MeainCount,
      seconds,
    } = this.state

    console.log(MeainCount < 10)
    return (
      <div className="bg-color">
        <h1 className="mein-heading">Digital Timer</h1>
        <div className="bottom-container">
          <div className="img-container">
            <div className="bg-time">
              <h1 className="time-count">
                {MeainCount < 10 ? `0${MeainCount}` : MeainCount}:
                {seconds < 10 ? `0${seconds} ` : seconds}
              </h1>
              <p className="time-text">
                {IsTimeRunning ? 'Running' : 'Paused'}
              </p>
            </div>
          </div>
          <div className="sub-container">
            <div className="super-start-container">
              <button
                className="sub-start-container"
                onClick={this.onImageClick}
              >
                <img
                  src={
                    IsTimeRunning
                      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                  }
                  alt={IsTimeRunning ? 'pause icon' : 'play icon'}
                  className="img"
                />
                <p className="pause-text">
                  {IsTimeRunning ? 'Pause' : 'start'}
                </p>
              </button>

              <button
                className="sub-start-container"
                onClick={this.historyClick}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="img"
                />
                <p className="pause-text">Reset</p>
              </button>
            </div>

            <p className="set-timer-text">Set Timer limit</p>

            <div className="super-start-container">
              <button
                className="plus-minas"
                onClick={this.decreesValue}
                type="button"
              >
                -
              </button>
              <div className="button">
                <p>{buttonCount}</p>
              </div>
              <button
                className="plus-minas"
                onClick={this.increesValue}
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
