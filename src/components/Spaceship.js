const React = require('react');
const defaultProps = {speed: "slow", colors: ['black', 'red'], hasRockets: false}

export default class Spaceship extends React.Component {
  
  render() {
    
    return (
    <div>
        <p>name: {this.props.name}</p>
        <p>speed: {this.props.speed}</p>
        <p>has rockets?: {this.props.hasRockets.toString()}</p>
        <p>colors: {this.props.colors.join(', ')}</p>
    </div>
    )
  }
}

Spaceship.defaultProps = defaultProps